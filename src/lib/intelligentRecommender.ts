// src/lib/intelligentRecommender.ts
import { EnhancedProduct, enhancedProducts } from '@/data/enhancedProducts';

export interface UserContext {
  purpose: string;
  budget: string;
  peopleCount?: number;
  season: string;
  preferences?: {
    style?: 'classic' | 'modern' | 'luxury' | 'budget';
    setupSpeed?: 'fast' | 'normal' | 'any';
    durability?: 'high' | 'medium' | 'low';
    portability?: 'high' | 'medium' | 'low';
  };
}

export interface Recommendation {
  product: EnhancedProduct;
  matchScore: number;
  reasons: string[];
  bestFor: string[];
  alternatives: EnhancedProduct[];
}

export class IntelligentRecommender {
  private products: EnhancedProduct[];

  constructor(products: EnhancedProduct[]) {
    this.products = products;
  }

  getRecommendations(context: UserContext): Recommendation[] {
    const scoredProducts = this.products.map(product => {
      const score = this.calculateMatchScore(product, context);
      const reasons = this.generateReasons(product, context, score);
      const bestFor = this.getBestForTags(product, context);
      
      return {
        product,
        matchScore: score,
        reasons,
        bestFor,
        alternatives: []
      };
    });

    // Sort by match score (highest first)
    const sorted = scoredProducts.sort((a, b) => b.matchScore - a.matchScore);
    
    // Get top 3 recommendations
    const topRecommendations = sorted.slice(0, 3);
    
    // Add alternatives for each recommendation
    return topRecommendations.map(rec => ({
      ...rec,
      alternatives: this.getAlternatives(rec.product, context, sorted.slice(3, 8))
    }));
  }

  private calculateMatchScore(product: EnhancedProduct, context: UserContext): number {
    let score = 0;
    const maxScore = 100;

    // 1. Purpose Matching (30 points)
    score += this.calculatePurposeMatch(product, context.purpose) * 30;

    // 2. Budget Matching (25 points)
    score += this.calculateBudgetMatch(product, context.budget) * 25;

    // 3. Capacity Matching (20 points)
    score += this.calculateCapacityMatch(product, context.peopleCount) * 20;

    // 4. Season Matching (15 points)
    score += this.calculateSeasonMatch(product, context.season) * 15;

    // 5. Style/Preference Matching (10 points)
    score += this.calculatePreferenceMatch(product, context.preferences) * 10;

    return Math.min(score, maxScore);
  }

  private calculatePurposeMatch(product: EnhancedProduct, purpose: string): number {
    const purposeLower = purpose.toLowerCase();
    const productText = [
      ...product.usage,
      product.title.toLowerCase(),
      product.type.toLowerCase(),
      ...product.bestFor
    ].join(' ');

    let match = 0;

    // Wedding/Banquet
    if (purposeLower.includes('свадьб') || purposeLower.includes('банкет')) {
      if (product.type.includes('Пагода')) return 1.0; // Perfect match
      if (product.type.includes('Свадьбы шатры')) return 0.9;
      if (product.usage.some(u => u.includes('свадь'))) return 0.8;
      if (productText.includes('свадь')) return 0.7;
      if (product.type.includes('Арочные')) return 0.6; // Good alternative
    }

    // Cafe/Restaurant
    if (purposeLower.includes('кафе') || purposeLower.includes('ресторан')) {
      if (product.type.includes('Зонт')) return 1.0;
      if (product.usage.some(u => u.includes('кафе'))) return 0.9;
      if (productText.includes('кафе')) return 0.8;
      if (product.type.includes('Мобильные')) return 0.7;
    }

    // Trade/Market
    if (purposeLower.includes('торговл') || purposeLower.includes('рынок')) {
      if (product.type.includes('Мобильные')) return 1.0;
      if (product.usage.some(u => u.includes('торг'))) return 0.9;
      if (productText.includes('торг')) return 0.8;
      if (product.type.includes('Арочные')) return 0.7;
    }

    // Exhibition/Event
    if (purposeLower.includes('выстав') || purposeLower.includes('мероприятия')) {
      if (product.type.includes('Шатры для выставок')) return 1.0;
      if (product.usage.some(u => u.includes('выстав'))) return 0.9;
      if (productText.includes('мероприятие')) return 0.8;
      if (product.type.includes('Арочные')) return 0.7;
    }

    // Storage/Warehouse
    if (purposeLower.includes('хранен') || purposeLower.includes('склад')) {
      if (product.type.includes('Ангар')) return 1.0;
      if (product.usage.some(u => u.includes('склад'))) return 0.9;
      if (productText.includes('хранен')) return 0.8;
      if (product.type.includes('Большие шатры')) return 0.7;
    }

    // Camping/Recreation
    if (purposeLower.includes('отдых') || purposeLower.includes('кемпинг')) {
      if (product.type.includes('Глэмпинг')) return 1.0;
      if (product.usage.some(u => u.includes('отдых'))) return 0.9;
      if (productText.includes('кемпинг')) return 0.8;
      if (product.type.includes('Надувные')) return 0.7;
    }

    return match;
  }

  private calculateBudgetMatch(product: EnhancedProduct, budget: string): number {
    const priceStr = product.price.current;
    const priceMatch = priceStr.match(/\d[\d\s]*/);
    if (!priceMatch) return 0.5;

    const price = parseInt(priceMatch[0].replace(/\s/g, ''), 10);
    if (isNaN(price)) return 0.5;

    const budgetLower = budget.toLowerCase();

    if (budgetLower.includes('до 50')) return price < 50000 ? 1.0 : 0.3;
    if (budgetLower.includes('50,000 - 100')) return price >= 50000 && price < 100000 ? 1.0 : price < 50000 ? 0.8 : 0.4;
    if (budgetLower.includes('100,000 - 200')) return price >= 100000 && price < 200000 ? 1.0 : price < 100000 ? 0.7 : 0.5;
    if (budgetLower.includes('200,000 - 500')) return price >= 200000 && price < 500000 ? 1.0 : price < 200000 ? 0.6 : 0.4;
    if (budgetLower.includes('более 500')) return price >= 500000 ? 1.0 : 0.3;

    return 0.5;
  }

  private calculateCapacityMatch(product: EnhancedProduct, peopleCount?: number): number {
    if (!peopleCount) return 0.5;

    const capacityStr = product.specs.capacity;
    const capacityMatch = capacityStr.match(/\d+/);
    const capacity = capacityMatch ? parseInt(capacityMatch[0], 10) : 0;

    // Different matching logic based on capacity
    if (peopleCount <= 20) {
      if (capacity <= 30) return 1.0; // Perfect for small groups
      if (capacity <= 50) return 0.7; // A bit large but okay
      return 0.3; // Too large
    }

    if (peopleCount <= 50) {
      if (capacity >= 30 && capacity <= 70) return 1.0; // Perfect match
      if (capacity >= 20 && capacity <= 100) return 0.8; // Good range
      if (capacity < 20) return 0.4; // Too small
      return 0.6; // Large but usable
    }

    if (peopleCount <= 100) {
      if (capacity >= 70 && capacity <= 150) return 1.0;
      if (capacity >= 50 && capacity <= 200) return 0.8;
      if (capacity < 50) return 0.3;
      return 0.6;
    }

    if (peopleCount > 100) {
      if (capacity >= 100) return 1.0;
      if (capacity >= 70) return 0.7;
      return 0.4;
    }

    return 0.5;
  }

  private calculateSeasonMatch(product: EnhancedProduct, season: string): number {
    const seasonLower = season.toLowerCase();
    const productSeasons = product.seasons.join(' ').toLowerCase();

    if (seasonLower.includes('только лето') || seasonLower.includes('летний')) {
      return productSeasons.includes('лето') ? 1.0 : 0.2;
    }

    if (seasonLower.includes('весна') || seasonLower.includes('осень')) {
      if (productSeasons.includes('весна') && productSeasons.includes('осень')) return 1.0;
      if (productSeasons.includes('весна') || productSeasons.includes('осень')) return 0.8;
      if (productSeasons.includes('круглый год')) return 0.9;
      return 0.4;
    }

    if (seasonLower.includes('круглый год')) {
      return productSeasons.includes('круглый год') ? 1.0 : 0.5;
    }

    if (seasonLower.includes('дожд') || seasonLower.includes('ветр')) {
      if (product.weatherResistance === 'excellent' || product.weatherResistance === 'premium') return 1.0;
      if (product.weatherResistance === 'good') return 0.8;
      return 0.4;
    }

    if (seasonLower.includes('зимний') || seasonLower.includes('зима')) {
      if (product.seasons.includes('зима') || product.seasons.includes('круглый год')) return 1.0;
      return 0.3;
    }

    return 0.5;
  }

  private calculatePreferenceMatch(product: EnhancedProduct, preferences?: any): number {
    if (!preferences) return 0.5;

    let score = 0;
    let criteriaCount = 0;

    if (preferences.style) {
      criteriaCount++;
      if (preferences.style === 'luxury' && product.type.includes('Пагода')) score += 1.0;
      else if (preferences.style === 'modern' && product.type.includes('Мобильные')) score += 1.0;
      else if (preferences.style === 'classic' && product.type.includes('Арочные')) score += 1.0;
      else if (preferences.style === 'budget' && product.price.current.includes('от')) score += 0.8;
      else score += 0.5;
    }

    if (preferences.setupSpeed) {
      criteriaCount++;
      if (preferences.setupSpeed === 'fast') {
        if (product.setupTime.includes('30') || product.setupTime.includes('быст')) score += 1.0;
        else if (product.setupTime.includes('1 час')) score += 0.8;
        else score += 0.5;
      }
    }

    if (preferences.durability) {
      criteriaCount++;
      if (preferences.durability === 'high' && product.weatherResistance === 'premium') score += 1.0;
      else if (preferences.durability === 'high' && product.weatherResistance === 'excellent') score += 0.9;
      else if (preferences.durability === 'medium' && product.weatherResistance === 'good') score += 0.8;
      else score += 0.5;
    }

    if (preferences.portability) {
      criteriaCount++;
      if (preferences.portability === 'high' && product.transport === 'easy') score += 1.0;
      else if (preferences.portability === 'medium' && product.transport === 'medium') score += 0.8;
      else score += 0.5;
    }

    return criteriaCount > 0 ? score / criteriaCount : 0.5;
  }

  private generateReasons(product: EnhancedProduct, context: UserContext, score: number): string[] {
    const reasons: string[] = [];

    // High score praise
    if (score > 80) {
      reasons.push("🎯 Идеально подходит под ваши критерии");
    } else if (score > 60) {
      reasons.push("✅ Отличный вариант для ваших нужд");
    } else {
      reasons.push("💡 Хорошая альтернатива, стоит рассмотреть");
    }

    // Purpose-specific reasons
    if (context.purpose.toLowerCase().includes('свадьб')) {
      if (product.type.includes('Пагода')) {
        reasons.push("🏛️ Элегантный дизайн специально для торжеств");
      } else if (product.type.includes('Арочные')) {
        reasons.push("💒 Просторный и универсальный для больших компаний");
      }
    }

    if (context.purpose.toLowerCase().includes('кафе')) {
      if (product.type.includes('Зонт')) {
        reasons.push("☕ Компактный и стильный для уличных кафе");
      }
    }

    // Budget reasons
    const price = parseInt(product.price.current.replace(/[^\d]/g, '')) || 0;
    if (context.budget.includes('До 50') && price < 50000) {
      reasons.push("💰 Отличное соотношение цены и качества");
    }

    // Capacity reasons
    if (context.peopleCount) {
      const capacityStr = product.specs.capacity;
      const capacityMatch = capacityStr.match(/\d+/);
      const capacity = capacityMatch ? parseInt(capacityMatch[0], 10) : 0;
      
      if (capacity >= context.peopleCount * 0.8 && capacity <= context.peopleCount * 1.2) {
        reasons.push(`👥 Идеальная вместимость для ${context.peopleCount} человек`);
      }
    }

    // Season reasons
    if (context.season.toLowerCase().includes('круглый год')) {
      if (product.seasons.includes('круглый год')) {
        reasons.push("🔄 Можно использовать в любое время года");
      }
    }

    // Weather resistance
    if (product.weatherResistance === 'excellent' || product.weatherResistance === 'premium') {
      reasons.push("🛡️ Высокая защита от непогоды");
    }

    // Setup time
    if (product.setupTime.includes('30') || product.setupTime.includes('быст')) {
      reasons.push("⚡ Быстрая установка");
    }

    return reasons.slice(0, 3); // Return max 3 reasons
  }

  private getBestForTags(product: EnhancedProduct, context: UserContext): string[] {
    const tags: string[] = [];

    // Add purpose-specific tags
    if (context.purpose.toLowerCase().includes('свадьб')) {
      tags.push('торжества', 'банкеты');
    }
    if (context.purpose.toLowerCase().includes('кафе')) {
      tags.push('уличные кафе', 'террасы');
    }
    if (context.purpose.toLowerCase().includes('торговл')) {
      tags.push('торговые точки', 'ярмарки');
    }

    // Add product-specific tags
    if (product.type.includes('Пагода')) tags.push('элегантный дизайн');
    if (product.type.includes('Мобильные')) tags.push('мобильность');
    if (product.type.includes('Ангар')) tags.push('промышленное использование');
    if (product.weatherResistance === 'excellent') tags.push('устойчивость к погоде');

    // Add capacity tags
    if (context.peopleCount) {
      if (context.peopleCount <= 20) tags.push('небольшие компании');
      else if (context.peopleCount <= 50) tags.push('средние мероприятия');
      else tags.push('крупные мероприятия');
    }

    return [...new Set(tags)].slice(0, 4); // Remove duplicates and limit
  }

  private getAlternatives(
    mainProduct: EnhancedProduct,
    context: UserContext,
    otherProducts: Array<{ product: EnhancedProduct; matchScore: number }>
  ): EnhancedProduct[] {
    // Get products of different types as alternatives
    const mainType = mainProduct.type;
    
    const alternatives = otherProducts
      .filter(item => item.product.type !== mainType) // Different type
      .filter(item => item.matchScore > 40) // Reasonable match
      .slice(0, 2) // Max 2 alternatives
      .map(item => item.product);

    return alternatives;
  }

  getPersonalizedAdvice(context: UserContext): string {
    const advice: string[] = [];

    if (context.purpose.toLowerCase().includes('свадьб')) {
      advice.push("💡 Для свадьбы рекомендую обратить внимание на шатры типа 'Пагода' — они выглядят элегантно и создают особую атмосферу.");
    }

    if (context.budget.includes('До 50')) {
      advice.push("💰 При ограниченном бюджете обратите внимание на мобильные шатры — они практичны и доступны по цене.");
    }

    if (context.peopleCount && context.peopleCount > 100) {
      advice.push("🏟️ Для больших мероприятий лучше выбирать арочные шатры — они наиболее вместительные и устойчивые.");
    }

    if (context.season.toLowerCase().includes('зимний')) {
      advice.push("❄️ Для зимнего использования выбирайте шатры с усиленной конструкцией и возможностью отопления.");
    }

    return advice.join(' ');
  }
}

// Create singleton instance
export const recommender = new IntelligentRecommender(enhancedProducts);