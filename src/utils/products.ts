import { Product } from "@/data/hitSalesData";
import { allProducts as staticProducts } from "@/data/hitSalesData";

// Define API response type for existing products.php
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

// Define response type for new_products.php
interface NewApiProduct {
  id: string;
  code: string;
  slug: string;
  title: string;
  type: string;
  specs: {           // Add this
    size: string;
    area: string;
    capacity: string;
    availability: string;
  };
  price: {
    current: number;
    original: number;
    discount: number;
  };
  images: string[];
}

// Add the missing NewApiResponse interface
interface NewApiResponse {
  success: boolean;
  count: number;
  products: NewApiProduct[];
  timestamp?: string;
  error?: string;
}

// Helper to format price
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Helper to extract specs from title
const extractSpecsFromTitle = (title: string): { size: string; area: string; capacity: string; availability: string } => {
  const sizeMatch = title.match(/(\d+)[хx](\d+)/);
  const size = sizeMatch ? `${sizeMatch[1]}х${sizeMatch[2]} м` : '10х5 м';
  
  const areaMatch = title.match(/(\d+)\s*м²/);
  const area = areaMatch ? `${areaMatch[1]} м²` : '50 м²';
  
  const areaNum = parseInt(areaMatch?.[1] || '50');
  const capacity = Math.floor(areaNum / 1.5) + ' человек';
  
  return {
    size,
    area,
    capacity,
    availability: 'да/под заказ'
  };
};

// Cache for products to avoid repeated API calls
let cachedProducts: Product[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// Fetch from new_products.php via local API route
async function fetchFromNewProducts(): Promise<Product[]> {
  try {
    // Use local API route instead of direct CMS URL
    const response = await fetch('/api/products/new', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.error(`New products API error: ${response.status}`);
      return [];
    }
    
    const data: NewApiResponse = await response.json();
    
    if (data.success && data.products && Array.isArray(data.products)) {
      console.log(`Fetched ${data.products.length} products from new_products.php`);
      
      return data.products.map((apiProduct: NewApiProduct) => {
        const currentPrice = apiProduct.price?.current || 0;
        const originalPrice = apiProduct.price?.original || currentPrice;
        const discount = apiProduct.price?.discount || 0;
        
        // Use slug for the ID (for the product link)
        const productId = apiProduct.slug || apiProduct.id || apiProduct.code;
        
        // Use specs from the API response, NOT from title extraction
        const specs = {
          size: apiProduct.specs?.size || '—',
          area: apiProduct.specs?.area || '—',
          capacity: apiProduct.specs?.capacity || '—',
          availability: apiProduct.specs?.availability || 'под заказ'
        };
        
        return {
          id: productId,
          title: apiProduct.title,
          images: apiProduct.images && apiProduct.images.length > 0 ? apiProduct.images : ['/mt_logo_purple.png'],
          specs: specs,
          price: {
            original: formatPrice(originalPrice),
            discount: discount > 0 ? `-${discount}%` : '0%',
            current: `от ${formatPrice(currentPrice)} ₽`
          },
          type: apiProduct.type as Product['type']
        };
      });
    }
    
    return [];
  } catch (error) {
    console.error('Failed to fetch from new_products.php:', error);
    return [];
  }
}

// Fetch from existing products.php
async function fetchFromExistingProducts(): Promise<Map<string, ApiProduct>> {
  try {
    const response = await fetch('products.php', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data: ApiResponse = await response.json();
    
    if (data.success && data.products && Array.isArray(data.products)) {
      const productMap = new Map<string, ApiProduct>();
      data.products.forEach(apiProduct => {
        if (apiProduct.code) {
          productMap.set(apiProduct.code, apiProduct);
        }
      });
      return productMap;
    }
    
    throw new Error(data.error || 'Invalid API response format');
  } catch (error) {
    console.error('Failed to fetch from products.php:', error);
    return new Map();
  }
}

// Main function to get products with updated prices from both sources
export async function getProductsWithUpdatedPrices(): Promise<Product[]> {
  const now = Date.now();
  
  // Return cached products if they're still fresh
  if (cachedProducts && (now - cacheTimestamp) < CACHE_DURATION) {
    console.log('Returning cached products');
    return cachedProducts;
  }
  
  console.log('Fetching updated product prices from both APIs...');
  
  try {
    // Fetch from both APIs in parallel
    const [existingProductMap, newProducts] = await Promise.all([
      fetchFromExistingProducts(),
      fetchFromNewProducts()
    ]);
    
    // Create a combined map of all products
    const combinedProductMap = new Map<string, Product>();
    
    // First, add new products
    newProducts.forEach(product => {
      combinedProductMap.set(product.id, product);
    });
    
    // Then, update static products with existing API prices
    const updatedStaticProducts = staticProducts.map(staticProduct => {
      const apiProduct = existingProductMap.get(staticProduct.id);
      
      if (apiProduct) {
        // Found matching product in existing API, update prices
        const updatedPrice = {
          original: formatPrice(apiProduct.price.original),
          discount: apiProduct.price.discount > 0 ? `-${apiProduct.price.discount}%` : '0%',
          current: `от ${formatPrice(apiProduct.price.current)} ₽`
        };
        
        return {
          ...staticProduct,
          price: updatedPrice
        };
      }
      
      return staticProduct;
    });
    
    // Add updated static products to the map (avoiding duplicates with new products)
    updatedStaticProducts.forEach(product => {
      if (!combinedProductMap.has(product.id)) {
        combinedProductMap.set(product.id, product);
      }
    });
    
    // Convert map to array
    const allProducts = Array.from(combinedProductMap.values());
    
    // Update cache
    cachedProducts = allProducts;
    cacheTimestamp = now;
    
    console.log(`Loaded ${allProducts.length} products total (${newProducts.length} from new API, ${updatedStaticProducts.filter(p => existingProductMap.has(p.id)).length} updated from existing API)`);
    
    return allProducts;
  } catch (error) {
    console.error('Failed to fetch products from APIs, using static products:', error);
    
    // Cache static products to avoid repeated API failures
    cachedProducts = staticProducts;
    cacheTimestamp = now;
    
    return staticProducts;
  }
}

// Helper function to filter products by type
export async function getProductsByType(type: string): Promise<Product[]> {
  const products = await getProductsWithUpdatedPrices();
  return products.filter(p => p.type === type);
}

// Get specific product by ID
export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getProductsWithUpdatedPrices();
  return products.find(p => p.id === id);
}