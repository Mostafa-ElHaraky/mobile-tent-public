// lib/bitrix-content.ts
export type ReviewItem = {
  text: string;
  author: string;
  images: string[];
};

export type PageData = {
  success: boolean;
  page?: {
    id: number;
    name: string;
    code: string;
  };
  seo?: {
    title: string;
    description: string;
    keywords: string;
    h1: string;
    url: string;
  };
  content?: {
    desktop?: string;
    mobile?: string;
  };
  reviews?: {
    text?: ReviewItem[];
    letters?: ReviewItem[];
    otzoviki?: ReviewItem[];
  };
  extracted_values?: {
    REVIEWS_TEXT: string;
    REVIEWS_LETTERS: string;
    REVIEWS_OTZOVIKI: string;
  };
};

// Function to safely parse JSON from Bitrix
export function parseBitrixJson(jsonString: string): ReviewItem[] {
  if (!jsonString || typeof jsonString !== 'string') {
    return [];
  }
  
  try {
    // Clean the string - handle Bitrix escaped slashes
    let cleanString = jsonString
      .trim()
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/\r/g, '') // Remove carriage returns
      .replace(/\n/g, ' ') // Replace newlines with spaces
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, '&');
    
    // Handle double-escaped slashes from Bitrix (\/ to /)
    cleanString = cleanString.replace(/\\\//g, '/');
    
    // Handle escaped quotes
    cleanString = cleanString.replace(/\\"/g, '"');
    
    // Parse JSON
    const parsed = JSON.parse(cleanString);
    
    // Validate that it's an array of ReviewItem
    if (!Array.isArray(parsed)) {
      console.warn('Parsed JSON is not an array:', parsed);
      return [];
    }
    
    // Filter out invalid items and fix image paths
    return parsed.filter(item => 
      item && 
      typeof item === 'object' &&
      typeof item.text === 'string' &&
      typeof item.author === 'string' &&
      Array.isArray(item.images)
    ).map(item => ({
      text: item.text,
      author: item.author,
      images: item.images.map((img: string) => 
        // Fix image paths: remove escaped slashes
        typeof img === 'string' ? img.replace(/\\\//g, '/') : img
      )
    })) as ReviewItem[];
    
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    console.error('JSON string (first 300 chars):', jsonString.substring(0, 300));
    return [];
  }
}

export async function fetchPageData(pageCode: string): Promise<PageData> {
  try {
    const response = await fetch(
      `page.php?code=${pageCode}`,
      { 
        next: { revalidate: 3600 },
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch page data: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Parse reviews - use API parsed data if available
    const parseReviews = (type: 'text' | 'letters' | 'otzoviki') => {
      // If API already parsed them (and has items)
      if (Array.isArray(data.reviews?.[type]) && data.reviews[type].length > 0) {
        console.log(`Using API parsed reviews for ${type}:`, data.reviews[type].length);
        return data.reviews[type];
      }
      
      // Try to parse from extracted values as fallback
      const jsonString = data.extracted_values?.[`REVIEWS_${type.toUpperCase()}`];
      if (jsonString) {
        const parsed = parseBitrixJson(jsonString);
        console.log(`Parsed ${type} from string:`, parsed.length);
        return parsed;
      }
      
      return [];
    };
    
    return {
      success: data.success || false,
      page: data.page,
      seo: data.seo,
      content: data.content,
      reviews: {
        text: parseReviews('text'),
        letters: parseReviews('letters'),
        otzoviki: parseReviews('otzoviki')
      },
      extracted_values: data.extracted_values
    };
  } catch (error) {
    console.error('Error fetching page data:', error);
    return {
      success: false,
      seo: {
        title: '',
        description: '',
        keywords: '',
        h1: '',
        url: ''
      },
      content: {
        desktop: '',
        mobile: ''
      },
      reviews: {
        text: [],
        letters: [],
        otzoviki: []
      },
      extracted_values: {
        REVIEWS_TEXT: '',
        REVIEWS_LETTERS: '',
        REVIEWS_OTZOVIKI: ''
      }
    };
  }
}