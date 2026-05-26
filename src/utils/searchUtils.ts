// src/utils/searchUtils.ts
import { Product, allProducts } from '../data/hitSalesData';

export interface SearchResult {
  product: Product;
  matchScore: number;
}

// Define API response type for CMS
interface ApiProduct {
  id: number;
  code: string;
  title: string;
  type: string;
  price: {
    current: number;
    original: number;
    discount: number;
  };
}

interface ApiResponse {
  success: boolean;
  count: number;
  products: ApiProduct[];
  timestamp?: string;
  error?: string;
}

// Cache for CMS prices
let cachedPrices: Map<string, { current: string; original: string; discount: string }> | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Helper to format price
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Fetch updated prices from CMS (background task)
async function fetchUpdatedPrices(): Promise<Map<string, { current: string; original: string; discount: string }> | null> {
  const now = Date.now();
  
  // Return cached prices if fresh
  if (cachedPrices && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedPrices;
  }
  
  try {
    console.log('🔄 Fetching updated prices from CMS...');
    const response = await fetch('products.php', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`CMS API error: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    
    if (data.success && Array.isArray(data.products)) {
      const priceMap = new Map<string, { current: string; original: string; discount: string }>();
      
      data.products.forEach((apiProduct: ApiProduct) => {
        const productId = apiProduct.code || apiProduct.id.toString();
        priceMap.set(productId, {
          original: formatPrice(apiProduct.price.original),
          discount: apiProduct.price.discount > 0 ? `-${apiProduct.price.discount}%` : '0%',
          current: `от ${formatPrice(apiProduct.price.current)} ₽`
        });
      });
      
      cachedPrices = priceMap;
      cacheTimestamp = now;
      console.log(`✅ Loaded updated prices for ${priceMap.size} products`);
      return priceMap;
    }
    
    throw new Error(data.error || 'Invalid CMS response');
    
  } catch (error) {
    console.error('❌ Failed to fetch prices from CMS:', error);
    return null;
  }
}

// IMPORTANT: Keep the ORIGINAL SYNC version for Header.tsx and other components
// This is what Header.tsx expects - a synchronous function
export const searchProducts = (query: string): SearchResult[] => {
  if (!query.trim()) return [];

  // Sanitize the query for client-side safety
  const sanitizedQuery = query.toLowerCase().trim().replace(/[^\w\sа-яА-ЯёЁ]/g, '');
  const searchTerms = sanitizedQuery.split(/\s+/).filter(term => term.length > 1);
  
  if (searchTerms.length === 0) return [];
  
  try {
    return allProducts
      .map((product: Product) => {
        let score = 0;
        
        // Search in title
        const titleLower = product.title.toLowerCase();
        searchTerms.forEach(term => {
          if (titleLower.includes(term)) {
            score += term.length * 2; // Higher weight for title matches
          }
        });
        
        // Search in type
        const typeLower = product.type.toLowerCase();
        searchTerms.forEach(term => {
          if (typeLower.includes(term)) {
            score += term.length;
          }
        });
        
        // Search in specs
        const specsText = `${product.specs.size} ${product.specs.area} ${product.specs.capacity}`.toLowerCase();
        searchTerms.forEach(term => {
          if (specsText.includes(term)) {
            score += term.length * 0.5;
          }
        });
        
        return { product, matchScore: score };
      })
      .filter((result: SearchResult) => result.matchScore > 0)
      .sort((a: SearchResult, b: SearchResult) => b.matchScore - a.matchScore);
  } catch (error) {
    console.error('Search utility error:', error);
    return [];
  }
};

// NEW: Async version for SearchContent.tsx with updated prices
export const searchProductsWithUpdatedPrices = async (query: string): Promise<SearchResult[]> => {
  if (!query.trim()) return [];

  // Sanitize the query for client-side safety
  const sanitizedQuery = query.toLowerCase().trim().replace(/[^\w\sа-яА-ЯёЁ]/g, '');
  const searchTerms = sanitizedQuery.split(/\s+/).filter(term => term.length > 1);
  
  if (searchTerms.length === 0) return [];
  
  try {
    // Fetch updated prices in the background
    const updatedPrices = await fetchUpdatedPrices();
    
    // Perform search on static products
    const searchResults = allProducts
      .map((product: Product) => {
        let score = 0;
        
        // Search in title
        const titleLower = product.title.toLowerCase();
        searchTerms.forEach(term => {
          if (titleLower.includes(term)) {
            score += term.length * 2; // Higher weight for title matches
          }
        });
        
        // Search in type
        const typeLower = product.type.toLowerCase();
        searchTerms.forEach(term => {
          if (typeLower.includes(term)) {
            score += term.length;
          }
        });
        
        // Search in specs
        const specsText = `${product.specs.size} ${product.specs.area} ${product.specs.capacity}`.toLowerCase();
        searchTerms.forEach(term => {
          if (specsText.includes(term)) {
            score += term.length * 0.5;
          }
        });
        
        // Update prices if available from CMS
        let updatedProduct = { ...product };
        if (updatedPrices && updatedPrices.has(product.id)) {
          const newPrice = updatedPrices.get(product.id)!;
          updatedProduct = {
            ...product,
            price: newPrice
          };
        }
        
        return { product: updatedProduct, matchScore: score };
      })
      .filter((result: SearchResult) => result.matchScore > 0)
      .sort((a: SearchResult, b: SearchResult) => b.matchScore - a.matchScore);
    
    return searchResults;
  } catch (error) {
    console.error('Search utility error:', error);
    return [];
  }
};

// Helper for price parsing
export const parsePriceFromString = (priceString: string): number => {
  const numericString = priceString.replace(/[^\d]/g, '');
  return parseInt(numericString, 10) || 0;
};

// Pre-fetch prices on module load (optional optimization)
if (typeof window !== 'undefined') {
  // Start fetching prices when the module loads in the browser
  fetchUpdatedPrices().catch(() => {
    // Silent fail - we'll use static prices
  });
}