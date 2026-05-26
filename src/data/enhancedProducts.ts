// src/data/enhancedProducts.ts
import { Product } from './hitSalesData';
import { getProductsWithUpdatedPrices } from '@/utils/products';

// Enhanced Product interface
export interface EnhancedProduct extends Product {
  usage: string[];
  seasons: string[];
  weatherResistance: 'basic' | 'good' | 'excellent' | 'premium';
  setupTime: string;
  transport: 'easy' | 'medium' | 'difficult' | 'professional';
  bestFor: string[];
  materials: string[];
  windResistance?: string;
  snowLoad?: string;
  height?: string;
  doors?: number;
  windows?: number;
  heatingCompatible?: boolean;
  lightingCompatible?: boolean;
}

// Function to enhance a product
export function enhanceProduct(product: Product): EnhancedProduct {
  const sizeMatch = product.specs.size.match(/(\d+)[,.]?(\d*)[хx×](\d+)[,.]?(\d*)/);
  let width = 0;
  let length = 0;
  
  if (sizeMatch) {
    width = parseFloat(`${sizeMatch[1]}.${sizeMatch[2] || '0'}`);
    length = parseFloat(`${sizeMatch[3]}.${sizeMatch[4] || '0'}`);
  } else {
    // Try to match diameter format like "Ø14 м"
    const diameterMatch = product.specs.size.match(/[Ø\d]+/);
    if (diameterMatch) {
      const diameter = parseFloat(diameterMatch[0].replace('Ø', ''));
      width = diameter;
      length = diameter;
    }
  }
  
  const area = width * length;
  
  // Determine properties based on size, type, and title
  const enhanced: EnhancedProduct = {
    ...product,
    usage: getUsage(product.type, product.title, area),
    seasons: getSeasons(product.type, area),
    weatherResistance: getWeatherResistance(area, product.type),
    setupTime: getSetupTime(area, product.type),
    transport: getTransportDifficulty(area, product.type),
    bestFor: getBestFor(product.type, area, product.title),
    materials: getMaterials(product.type),
    windResistance: getWindResistance(area, product.type),
    snowLoad: getSnowLoad(area, product.type),
    height: getHeight(area, product.type),
    doors: getDoors(area),
    windows: getWindows(area),
    heatingCompatible: area > 50 || product.type.includes('Ангар'),
    lightingCompatible: true
  };
  
  return enhanced;
}

// Helper functions (keep all the same as before)
function getUsage(type: string, title: string, area: number): string[] {
  const usages: string[] = [];
  
  // Check product type
  if (type.includes('Арочные (Шатры)')) {
    if (area > 200) {
      usages.push('промышленные объекты', 'склады', 'производственные цеха');
    } else if (area > 100) {
      usages.push('крупные мероприятия', 'выставки', 'спортивные события');
    } else if (area > 50) {
      usages.push('свадьбы', 'корпоративы', 'фестивали');
    } else {
      usages.push('небольшие встречи', 'торговые точки', 'личное использование');
    }
  }
  
  if (type.includes('Пагода')) {
    usages.push('свадьбы', 'элегантные мероприятия', 'рестораны', 'торжества');
  }
  
  if (type.includes('Мобильные')) {
    usages.push('торговля', 'быстрые мероприятия', 'временные точки');
  }
  
  if (type.includes('Ангар')) {
    usages.push('промышленность', 'хранение', 'склады', 'производство');
  }
  
  if (type.includes('Свадьбы шатры') || title.toLowerCase().includes('свадь')) {
    usages.unshift('свадьбы', 'банкеты', 'торжества');
  }
  
  if (type.includes('Шатры для выставок') || title.toLowerCase().includes('выстав')) {
    usages.unshift('выставки', 'презентации', 'экспозиции');
  }
  
  if (title.toLowerCase().includes('кафе') || title.toLowerCase().includes('ресторан')) {
    usages.unshift('общественное питание', 'уличные кафе');
  }
  
  if (title.toLowerCase().includes('глэмпинг')) {
    usages.unshift('отдых', 'туризм', 'кемпинг');
  }
  
  if (type.includes('Зонт')) {
    usages.push('уличные кафе', 'террасы', 'зонтики');
  }
  
  if (type.includes('Надувные')) {
    usages.push('детские мероприятия', 'рекламные акции');
  }
  
  return usages.length > 0 ? usages : ['универсальное использование'];
}

function getSeasons(type: string, area: number): string[] {
  if (type.includes('Ангар') || area > 100) {
    return ['круглый год'];
  }
  if (area > 50 || type.includes('Арочные')) {
    return ['весна', 'лето', 'осень', 'зима'];
  }
  if (type.includes('Глэмпинг') || type.includes('Надувные')) {
    return ['весна', 'лето', 'осень'];
  }
  if (type.includes('Зонт')) {
    return ['лето'];
  }
  return ['весна', 'лето', 'осень'];
}

function getWeatherResistance(area: number, type: string): 'basic' | 'good' | 'excellent' | 'premium' {
  if (type.includes('Ангар') || area > 200) return 'premium';
  if (area > 100) return 'excellent';
  if (area > 50 || type.includes('Арочные')) return 'good';
  if (type.includes('Зонт') || area < 20) return 'basic';
  return 'good';
}

function getSetupTime(area: number, type: string): string {
  if (area > 200) return '6-8 часов (профессиональная сборка)';
  if (area > 100) return '3-4 часа';
  if (area > 50) return '2-3 часа';
  if (area > 20) return '1-2 часа';
  if (type.includes('Мобильные')) return '30-60 минут';
  if (type.includes('Зонт')) return '15-30 минут';
  return '30-60 минут';
}

function getTransportDifficulty(area: number, type: string): 'easy' | 'medium' | 'difficult' | 'professional' {
  if (area > 200) return 'professional';
  if (area > 100) return 'difficult';
  if (area > 50) return 'medium';
  if (type.includes('Мобильные') || type.includes('Зонт')) return 'easy';
  return 'easy';
}

function getBestFor(type: string, area: number, title: string): string[] {
  const bestFor: string[] = [];
  
  if (area > 200) {
    bestFor.push('промышленные нужды', 'крупные склады');
  } else if (area > 100) {
    bestFor.push('масштабные мероприятия', 'торжества');
  } else if (area > 50) {
    bestFor.push('средние мероприятия', 'семейные праздники');
  } else {
    bestFor.push('небольшие встречи', 'личное использование');
  }
  
  if (type.includes('Пагода')) {
    bestFor.unshift('свадьбы', 'элегантные мероприятия');
  }
  
  if (type.includes('Мобильные')) {
    bestFor.unshift('быстрая установка', 'частые перемещения');
  }
  
  if (type.includes('Ангар')) {
    bestFor.unshift('промышленность', 'хранение');
  }
  
  if (title.toLowerCase().includes('свадь')) {
    bestFor.unshift('свадебные церемонии');
  }
  
  if (title.toLowerCase().includes('кафе')) {
    bestFor.unshift('общественное питание');
  }
  
  if (title.toLowerCase().includes('выстав')) {
    bestFor.unshift('выставочные мероприятия');
  }
  
  return bestFor;
}

function getMaterials(type: string): string[] {
  if (type.includes('Арочные')) {
    return ['стальной каркас', 'ПВХ ткань высокой плотности'];
  }
  if (type.includes('Пагода')) {
    return ['алюминиевый каркас', 'декоративная ткань'];
  }
  if (type.includes('Ангар')) {
    return ['прочный стальной каркас', 'армированный ПВХ'];
  }
  if (type.includes('Зонт')) {
    return ['алюминиевая конструкция', 'водоотталкивающая ткань'];
  }
  return ['каркасная конструкция', 'тентовая ткань'];
}

function getWindResistance(area: number, type: string): string {
  if (type.includes('Ангар') || area > 200) return 'до 40 м/с';
  if (area > 100) return 'до 25 м/с';
  if (area > 50) return 'до 20 м/с';
  if (type.includes('Зонт')) return 'до 15 м/с';
  return 'до 18 м/с';
}

function getSnowLoad(area: number, type: string): string | undefined {
  if (type.includes('Ангар') || area > 200) return 'до 150 кг/м²';
  if (area > 100) return 'до 80 кг/м²';
  if (area > 50) return 'до 50 кг/м²';
  return undefined;
}

function getHeight(area: number, type: string): string {
  if (type.includes('Ангар') || area > 200) return '5-7 м';
  if (area > 100) return '4-5 м';
  if (area > 50) return '3-4 м';
  if (type.includes('Зонт')) return '2-3 м';
  return '2.5-3.5 м';
}

function getDoors(area: number): number {
  if (area > 200) return 4;
  if (area > 100) return 3;
  if (area > 50) return 2;
  return 1;
}

function getWindows(area: number): number {
  if (area > 200) return 8;
  if (area > 100) return 4;
  if (area > 50) return 2;
  return 0;
}

// Create enhanced products array from static data (for backward compatibility)
// Note: We'll keep this static for now, but it won't have updated prices
export const enhancedProducts: EnhancedProduct[] = [];

// NEW: Function to get enhanced products with updated prices
export async function getEnhancedProductsFromAPI(): Promise<EnhancedProduct[]> {
  try {
    // Fetch products with updated prices from the unified utility
    const productsWithUpdatedPrices = await getProductsWithUpdatedPrices();
    
    // Enhance each product
    const enhanced = productsWithUpdatedPrices.map(product => enhanceProduct(product));
    
    return enhanced;
  } catch (error) {
    console.error('Error fetching enhanced products:', error);
    // Return empty array as fallback
    return [];
  }
}

// SIMPLE AND RELIABLE FILTER FUNCTION (static version - no updated prices)
export function filterEnhancedProducts(criteria: {
  purpose?: string;
  budget?: string;
  peopleCount?: number;
  season?: string;
}): EnhancedProduct[] {
  console.warn('filterEnhancedProducts: Using static data without updated prices');
  // This function is deprecated - use filterEnhancedProductsFromAPI instead
  return getPopularProducts([]);
}

// NEW: Async version of filter function that uses API data with updated prices
export async function filterEnhancedProductsFromAPI(criteria: {
  purpose?: string;
  budget?: string;
  peopleCount?: number;
  season?: string;
}): Promise<EnhancedProduct[]> {
  try {
    // Get fresh products with updated prices
    const allEnhancedProducts = await getEnhancedProductsFromAPI();
    
    if (allEnhancedProducts.length === 0) {
      console.error('No products available from API');
      return [];
    }
    
    let results = [...allEnhancedProducts];
    
    // If no criteria, return popular products
    if (!criteria.purpose && !criteria.budget && !criteria.peopleCount && !criteria.season) {
      return getPopularProducts(allEnhancedProducts);
    }
    
    // Filter by purpose (main filter)
    if (criteria.purpose) {
      const purpose = criteria.purpose.toLowerCase();
      results = results.filter(product => {
        const searchText = [
          ...product.usage,
          product.title.toLowerCase(),
          product.type.toLowerCase()
        ].join(' ');
        
        if (purpose.includes('свадьб') || purpose.includes('банкет')) {
          return searchText.includes('свадь') || 
                 searchText.includes('пагод') ||
                 product.type.includes('Пагода') ||
                 product.type.includes('Свадьбы шатры');
        }
        
        if (purpose.includes('кафе') || purpose.includes('ресторан')) {
          return searchText.includes('кафе') || 
                 searchText.includes('ресторан') ||
                 product.type.includes('Зонт') ||
                 searchText.includes('общественное питание');
        }
        
        if (purpose.includes('торговл') || purpose.includes('рынок')) {
          return searchText.includes('торг') || 
                 product.type.includes('Мобильные') ||
                 searchText.includes('магазин');
        }
        
        if (purpose.includes('выстав') || purpose.includes('мероприятия')) {
          return searchText.includes('выстав') || 
                 product.type.includes('выставок') ||
                 searchText.includes('мероприятие');
        }
        
        if (purpose.includes('хранен') || purpose.includes('склад')) {
          return searchText.includes('склад') || 
                 product.type.includes('Ангар') ||
                 searchText.includes('хранение');
        }
        
        if (purpose.includes('отдых') || purpose.includes('кемпинг')) {
          return searchText.includes('отдых') || 
                 product.type.includes('Глэмпинг') ||
                 searchText.includes('кемпинг');
        }
        
        return true;
      });
    }
    
    // Filter by budget (simplified)
    if (criteria.budget) {
      const budget = criteria.budget;
      
      results = results.filter(product => {
        const priceStr = product.price.current;
        // Extract numeric value from price string like "от 50 000 ₽"
        const priceMatch = priceStr.match(/\d[\d\s]*/);
        if (!priceMatch) return true;
        
        const price = parseInt(priceMatch[0].replace(/\s/g, ''), 10);
        if (isNaN(price)) return true;
        
        if (budget.includes('До 50')) return price < 50000;
        if (budget.includes('50,000 - 100')) return price >= 50000 && price < 100000;
        if (budget.includes('100,000 - 200')) return price >= 100000 && price < 200000;
        if (budget.includes('200,000 - 500')) return price >= 200000 && price < 500000;
        if (budget.includes('Более 500')) return price >= 500000;
        
        return true;
      });
    }
    
    // Filter by capacity (simplified)
    if (criteria.peopleCount && criteria.peopleCount > 0) {
      results = results.filter(product => {
        const capacityStr = product.specs.capacity;
        const capacityMatch = capacityStr.match(/\d+/);
        const capacity = capacityMatch ? parseInt(capacityMatch[0], 10) : 0;
        
        const requested = criteria.peopleCount || 0;
        
        if (requested === 20) return capacity <= 30;
        if (requested === 50) return capacity >= 30 && capacity <= 70;
        if (requested === 100) return capacity >= 70 && capacity <= 150;
        if (requested === 150) return capacity >= 100;
        
        return capacity >= requested * 0.5;
      });
    }
    
    // Filter by season (simplified)
    if (criteria.season) {
      const season = criteria.season.toLowerCase();
      results = results.filter(product => {
        const productSeasons = product.seasons.join(' ').toLowerCase();
        
        if (season.includes('только лето')) {
          return productSeasons.includes('лето');
        }
        if (season.includes('весна/осень')) {
          return productSeasons.includes('весна') || productSeasons.includes('осень');
        }
        if (season.includes('круглый год')) {
          return productSeasons.includes('круглый год');
        }
        if (season.includes('дожд') || season.includes('ветр')) {
          return product.weatherResistance !== 'basic';
        }
        if (season.includes('зимний')) {
          return product.seasons.includes('зима') || product.seasons.includes('круглый год');
        }
        
        return true;
      });
    }
    
    // If no results found, return popular products
    if (results.length === 0) {
      return getPopularProducts(allEnhancedProducts);
    }
    
    // Sort by relevance
    results.sort((a, b) => {
      // Sort by price if budget is specified
      if (criteria.budget) {
        const priceA = parseInt(a.price.current.replace(/[^\d]/g, '')) || 0;
        const priceB = parseInt(b.price.current.replace(/[^\d]/g, '')) || 0;
        
        if (criteria.budget.includes('До 50') || criteria.budget.includes('50,000 - 100')) {
          return priceA - priceB; // Cheaper first
        } else {
          return priceB - priceA; // More expensive first for higher budgets
        }
      }
      
      // Default: sort by area (larger first)
      const areaA = parseFloat(a.specs.area.replace(/[^\d.]/g, '')) || 0;
      const areaB = parseFloat(b.specs.area.replace(/[^\d.]/g, '')) || 0;
      return areaB - areaA;
    });
    
    return results.slice(0, 5);
  } catch (error) {
    console.error('Error in filterEnhancedProductsFromAPI:', error);
    // Return empty array as fallback
    return [];
  }
}

// Helper function to get popular products as fallback
function getPopularProducts(products: EnhancedProduct[]): EnhancedProduct[] {
  if (products.length === 0) return [];
  
  return products
    .filter(product => 
      product.type.includes('Арочные (Шатры)') || 
      product.type.includes('Пагода') ||
      product.type.includes('Мобильные')
    )
    .slice(0, 5);
}

// Debug function to test filtering
export function testFilter() {
  console.log('=== Testing Filter Function ===');
  console.warn('testFilter: Using deprecated static filter function');
  
  const testCases = [
    { purpose: 'Для свадьбы/банкета' },
    { purpose: 'Для кафе/ресторана' },
    { purpose: 'Для торговли/рынка' },
    { budget: '100,000 - 200,000 ₽' },
    { purpose: 'Для свадьбы/банкета', budget: '100,000 - 200,000 ₽' }
  ];
  
  testCases.forEach((criteria, i) => {
    console.log(`Test ${i + 1}:`, criteria);
    console.log(`No results - use testFilterFromAPI for updated prices`);
    console.log('---');
  });
}

// NEW: Async debug function to test API filtering
export async function testFilterFromAPI() {
  console.log('=== Testing API Filter Function ===');
  
  const testCases = [
    { purpose: 'Для свадьбы/банкета' },
    { purpose: 'Для кафе/ресторана' },
    { purpose: 'Для торговли/рынка' },
    { budget: '100,000 - 200,000 ₽' },
    { purpose: 'Для свадьбы/банкета', budget: '100,000 - 200,000 ₽' }
  ];
  
  for (const [i, criteria] of testCases.entries()) {
    const results = await filterEnhancedProductsFromAPI(criteria);
    console.log(`Test ${i + 1}:`, criteria);
    console.log(`Found ${results.length} products`);
    if (results.length > 0) {
      results.forEach((p, idx) => {
        console.log(`  ${idx + 1}. ${p.title} - ${p.price.current} (updated from API)`);
      });
    }
    console.log('---');
  }
}