// src/components/ProductAssistant.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Package, Users, DollarSign, Cloud, Clock, Truck, ChevronRight, Check, Brain, Target, ThumbsUp, Award, Zap, Shield, Loader2 } from 'lucide-react';
import { recommender, type UserContext, type Recommendation } from '@/lib/intelligentRecommender';
import { filterEnhancedProductsFromAPI, getEnhancedProductsFromAPI, type EnhancedProduct } from '@/data/enhancedProducts';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  recommendations?: Recommendation[];
  personalizedAdvice?: string;
}

interface UserPreferences {
  purpose?: string;
  budget?: string;
  peopleCount?: number;
  season?: string;
  style?: 'classic' | 'modern' | 'luxury' | 'budget';
  setupSpeed?: 'fast' | 'normal' | 'any';
  durability?: 'high' | 'medium' | 'low';
  portability?: 'high' | 'medium' | 'low';
}

export default function ProductAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial',
      text: "👋 Привет! Я ваш умный помощник по выбору шатров и ангаров.\n\nЯ проанализирую ваши потребности и предложу лучшие варианты с объяснениями.\n\nРасскажите, для какого мероприятия нужен шатер?",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({});
  const [conversationStep, setConversationStep] = useState<'purpose' | 'details' | 'budget' | 'size' | 'season' | 'final'>('purpose');
  const [isTyping, setIsTyping] = useState(false);
  const [showDetailsStep, setShowDetailsStep] = useState(false);
  const [isLoadingRecommendations, setIsLoadingRecommendations] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Generate unique ID for messages
  const generateMessageId = () => {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  // Intelligent quick replies
  const quickReplies = {
    purpose: [
      { text: "Для свадьбы", icon: "💍", style: 'luxury', keywords: ["элегантный", "торжественный"] },
      { text: "Для кафе/ресторана", icon: "☕", style: 'modern', keywords: ["стильный", "практичный"] },
      { text: "Для торговой точки", icon: "🛒", style: 'budget', keywords: ["мобильный", "экономичный"] },
      { text: "Для выставки", icon: "🎪", style: 'modern', keywords: ["вместительный", "презентабельный"] },
      { text: "Для склада/ангара", icon: "🏭", style: 'classic', keywords: ["прочный", "функциональный"] },
      { text: "Для отдыха на природе", icon: "🏕️", style: 'modern', keywords: ["удобный", "атмосферный"] }
    ],
    details: [
      { text: "Элегантный и стильный", icon: "👑", value: 'luxury' },
      { text: "Современный и практичный", icon: "⚡", value: 'modern' },
      { text: "Классический и надежный", icon: "🏛️", value: 'classic' },
      { text: "Бюджетный и экономичный", icon: "💰", value: 'budget' }
    ],
    budget: [
      { text: "До 50,000 ₽ (эконом)", icon: "💰" },
      { text: "50,000 - 100,000 ₽ (средний)", icon: "💵" },
      { text: "100,000 - 200,000 ₽ (премиум)", icon: "💎" },
      { text: "Более 200,000 ₽ (люкс)", icon: "👑" }
    ],
    size: [
      { text: "Маленький (до 20 гостей)", icon: "👨‍👩‍👧", value: 20 },
      { text: "Средний (20-50 гостей)", icon: "👨‍👩‍👧‍👦", value: 50 },
      { text: "Большой (50-100 гостей)", icon: "👨‍👩‍👧‍👧", value: 100 },
      { text: "Очень большой (100+ гостей)", icon: "🏟️", value: 150 }
    ],
    season: [
      { text: "Только лето", icon: "☀️", durability: 'medium' },
      { text: "Весна/осень", icon: "🍂", durability: 'high' },
      { text: "Круглый год", icon: "🔄", durability: 'high' },
      { text: "С защитой от непогоды", icon: "🌧️", durability: 'high' }
    ]
  };

  const handleQuickReply = async (reply: string, step: string, data?: any) => {
    // Add user reply with unique ID
    const userMessage: ChatMessage = {
      id: generateMessageId(),
      text: reply,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    const updatedPrefs = { ...userPreferences };
    
    switch (step) {
      case 'purpose':
        updatedPrefs.purpose = reply;
        updatedPrefs.style = data?.style;
        setUserPreferences(updatedPrefs);
        setShowDetailsStep(true);
        setTimeout(() => {
          setConversationStep('details');
          generateAssistantResponse(updatedPrefs, 'details');
        }, 500);
        break;
        
      case 'details':
        updatedPrefs.style = data?.value;
        setUserPreferences(updatedPrefs);
        setConversationStep('budget');
        setTimeout(() => generateAssistantResponse(updatedPrefs, 'budget'), 500);
        break;
        
      case 'budget':
        updatedPrefs.budget = reply;
        setUserPreferences(updatedPrefs);
        setConversationStep('size');
        setTimeout(() => generateAssistantResponse(updatedPrefs, 'size'), 500);
        break;
        
      case 'size':
        updatedPrefs.peopleCount = data?.value;
        setUserPreferences(updatedPrefs);
        setConversationStep('season');
        setTimeout(() => generateAssistantResponse(updatedPrefs, 'season'), 500);
        break;
        
      case 'season':
        updatedPrefs.season = reply;
        updatedPrefs.durability = data?.durability;
        setUserPreferences(updatedPrefs);
        setConversationStep('final');
        // Use async version for API call
        await generateFinalRecommendationWithAPI(updatedPrefs);
        break;
    }
  };

  const generateAssistantResponse = (prefs: UserPreferences, nextStep: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let response = '';
      
      switch (nextStep) {
        case 'details':
          response = `✨ Отличный выбор! "${prefs.purpose}" требует особого подхода.\n\nКакой стиль вы предпочитаете?`;
          break;
        case 'budget':
          response = `🎨 "${prefs.style}" стиль — хороший вкус!\n\nКакой бюджет планируете?`;
          break;
        case 'size':
          response = `💰 Понял ваш бюджет. Теперь важный вопрос:\n\nСколько гостей планируется?`;
          break;
        case 'season':
          response = `👥 ${prefs.peopleCount} гостей — отличный размер!\n\nВ какое время года будете использовать?`;
          break;
      }
      
      const assistantMessage: ChatMessage = {
        id: generateMessageId(),
        text: response,
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800);
  };

  // Function to get recommendations using products with updated prices
  const getRecommendationsWithAPI = async (context: UserContext): Promise<Recommendation[]> => {
    try {
      setIsLoadingRecommendations(true);
      
      // Convert context to filter criteria
      const criteria = {
        purpose: context.purpose,
        budget: context.budget,
        peopleCount: context.peopleCount,
        season: context.season
      };
      
      // Get filtered products with updated prices
      const filteredProducts = await filterEnhancedProductsFromAPI(criteria);
      
      if (filteredProducts.length === 0) {
        console.log('No filtered products from API, using static recommender');
        return recommender.getRecommendations(context);
      }
      
      // Get all enhanced products for alternatives
      const allEnhancedProducts = await getEnhancedProductsFromAPI();
      
      // Convert to recommendations format matching the Recommendation type
      const recommendations: Recommendation[] = filteredProducts.map((product, index) => {
        const matchScore = calculateMatchScore(product, context);
        
        // Find alternatives from all products (excluding current one)
        const alternatives = allEnhancedProducts
          .filter((p: EnhancedProduct) => p.id !== product.id)
          .slice(0, 2);
        
        return {
          product, // This is already EnhancedProduct with updated prices
          matchScore,
          reasons: generateReasons(product, context),
          bestFor: product.bestFor || [],
          alternatives: alternatives // These also have updated prices
        };
      });
      
      // Sort by match score
      return recommendations.sort((a, b) => b.matchScore - a.matchScore);
      
    } catch (error) {
      console.error('Error getting recommendations:', error);
      // Fallback to static recommender
      return recommender.getRecommendations(context);
    } finally {
      setIsLoadingRecommendations(false);
    }
  };

  // Helper function to calculate match score
  const calculateMatchScore = (product: EnhancedProduct, context: UserContext): number => {
    let score = 0;
    
    // Check purpose
    if (context.purpose) {
      const purposeLower = context.purpose.toLowerCase();
      const productText = [
        ...product.usage,
        product.title.toLowerCase(),
        product.type.toLowerCase()
      ].join(' ');
      
      if (purposeLower.includes('свадьб') && productText.includes('свадь')) score += 30;
      if (purposeLower.includes('кафе') && productText.includes('кафе')) score += 30;
      if (purposeLower.includes('торговл') && productText.includes('торг')) score += 30;
      if (purposeLower.includes('выстав') && productText.includes('выстав')) score += 30;
    }
    
    // Check budget
    if (context.budget) {
      const priceStr = product.price.current;
      const priceMatch = priceStr.match(/\d[\d\s]*/);
      if (priceMatch) {
        const price = parseInt(priceMatch[0].replace(/\s/g, ''), 10);
        
        if (context.budget.includes('До 50') && price < 50000) score += 25;
        if (context.budget.includes('50,000 - 100') && price >= 50000 && price < 100000) score += 25;
        if (context.budget.includes('100,000 - 200') && price >= 100000 && price < 200000) score += 25;
        if (context.budget.includes('200,000 - 500') && price >= 200000 && price < 500000) score += 25;
        if (context.budget.includes('Более 500') && price >= 500000) score += 25;
      }
    }
    
    // Check capacity
    if (context.peopleCount) {
      const capacityStr = product.specs.capacity;
      const capacityMatch = capacityStr.match(/\d+/);
      const capacity = capacityMatch ? parseInt(capacityMatch[0], 10) : 0;
      
      if (Math.abs(capacity - context.peopleCount) / context.peopleCount <= 0.3) {
        score += 20;
      }
    }
    
    // Check season
    if (context.season) {
      const seasonLower = context.season.toLowerCase();
      const productSeasons = product.seasons.join(' ').toLowerCase();
      
      if (seasonLower.includes('только лето') && productSeasons.includes('лето')) score += 15;
      if ((seasonLower.includes('весна/осень') || seasonLower.includes('весна/осень')) && 
          (productSeasons.includes('весна') || productSeasons.includes('осень'))) score += 15;
      if (seasonLower.includes('круглый год') && productSeasons.includes('круглый год')) score += 15;
      if (seasonLower.includes('дожд') && product.weatherResistance !== 'basic') score += 10;
      if (seasonLower.includes('зим') && (product.seasons.includes('зима') || product.seasons.includes('круглый год'))) score += 10;
    }
    
    // Style preferences
    if (context.preferences?.style) {
      const style = context.preferences.style;
      if ((style === 'luxury' && product.type.includes('Пагода')) ||
          (style === 'modern' && (product.type.includes('Глэмпинг') || product.type.includes('Сферические'))) ||
          (style === 'classic' && product.type.includes('Арочные')) ||
          (style === 'budget' && product.type.includes('Мобильные'))) {
        score += 10;
      }
    }
    
    // Cap at 100
    return Math.min(100, score);
  };

  // Helper function to generate reasons
  const generateReasons = (product: EnhancedProduct, context: UserContext): string[] => {
    const reasons: string[] = [];
    
    if (context.purpose) {
      const purposeLower = context.purpose.toLowerCase();
      const productText = [
        ...product.usage,
        product.title.toLowerCase(),
        product.type.toLowerCase()
      ].join(' ');
      
      if (purposeLower.includes('свадьб') && productText.includes('свадь')) {
        reasons.push('Идеально подходит для свадебных церемоний');
      }
      if (purposeLower.includes('кафе') && productText.includes('кафе')) {
        reasons.push('Оптимален для уличных кафе и ресторанов');
      }
    }
    
    // Add product-specific reasons
    if (product.weatherResistance === 'excellent' || product.weatherResistance === 'premium') {
      reasons.push('Отличная защита от непогоды');
    }
    if (product.transport === 'easy') {
      reasons.push('Простая транспортировка и хранение');
    }
    if (product.seasons.includes('зима') || product.seasons.includes('круглый год')) {
      reasons.push('Можно использовать круглый год');
    }
    
    return reasons.slice(0, 3); // Limit to 3 reasons
  };

  // Generate personalized advice
  const getPersonalizedAdviceWithAPI = (context: UserContext): string => {
    const advice: string[] = [];
    
    if (context.purpose?.includes('свадьб')) {
      advice.push('Для свадьбы рекомендую обратить внимание на модели с элегантным дизайном и возможностью дополнительного декора.');
    }
    if (context.season?.includes('зим')) {
      advice.push('Для зимнего использования важна хорошая теплоизоляция и прочность конструкции для снеговой нагрузки.');
    }
    if (context.preferences?.style === 'luxury') {
      advice.push('В премиум-сегменте обратите внимание на качество материалов и дополнительные опции.');
    }
    if (context.budget?.includes('До 50')) {
      advice.push('В вашем бюджете хорошее соотношение цена/качество у мобильных и арочных конструкций.');
    }
    
    return advice.length > 0 ? advice.join(' ') : 'Рекомендую внимательно изучить технические характеристики и отзывы перед покупкой.';
  };

  // Function to generate final recommendations using updated prices
  const generateFinalRecommendationWithAPI = async (prefs: UserPreferences) => {
    setIsTyping(true);
    
    try {
      const context: UserContext = {
        purpose: prefs.purpose || '',
        budget: prefs.budget || '',
        peopleCount: prefs.peopleCount,
        season: prefs.season || '',
        preferences: {
          style: prefs.style,
          durability: prefs.durability,
        }
      };
      
      // Get recommendations with updated prices
      const recommendations = await getRecommendationsWithAPI(context);
      const personalizedAdvice = getPersonalizedAdviceWithAPI(context);
      
      let response = `🧠 **Анализирую ваши критерии...**\n\n`;
      response += `• Мероприятие: ${prefs.purpose}\n`;
      response += `• Стиль: ${prefs.style}\n`;
      response += `• Бюджет: ${prefs.budget}\n`;
      response += `• Гостей: ${prefs.peopleCount} человек\n`;
      response += `• Сезон: ${prefs.season}\n\n`;
      response += `✅ **На основе анализа нашёл лучшие варианты:**`;
      
      const assistantMessage: ChatMessage = {
        id: generateMessageId(),
        text: response,
        sender: 'assistant',
        timestamp: new Date(),
        recommendations,
        personalizedAdvice
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
    } catch (error) {
      console.error('Error generating recommendations:', error);
      
      // Fallback message
      const errorMessage: ChatMessage = {
        id: generateMessageId(),
        text: "⚠️ Произошла ошибка при получении актуальных данных. Попробуйте еще раз или обратитесь к менеджеру.",
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const resetConversation = () => {
    setMessages([{
      id: 'initial',
      text: "👋 Привет! Я ваш умный помощник по выбору шатров и ангаров.\n\nЯ проанализирую ваши потребности и предложу лучшие варианты с объяснениями.\n\nРасскажите, для какого мероприятия нужен шатер?",
      sender: 'assistant',
      timestamp: new Date(),
    }]);
    setUserPreferences({});
    setConversationStep('purpose');
    setShowDetailsStep(false);
    setInput('');
  };

  const openProductPage = (productId: string) => {
    window.location.href = `/tent/${productId}`;
  };

  return (
    <>
      {/* Floating Assistant Button - MOVED TO LEFT SIDE */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[85px] left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Открыть чат с консультантом"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <div className="relative">
            <Brain size={28} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        )}
        <span className="absolute -top-10 left-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Умный помощник
        </span>
      </button>
      {/* Chat Window - MOVED TO LEFT SIDE */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-[450px] h-[650px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Brain size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Умный помощник</h3>
                  <p className="text-sm opacity-90">AI-подбор шатров</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetConversation}
                  className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors"
                  title="Начать новый диалог"
                >
                  Новый диалог
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
                  aria-label="Закрыть чат"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            {/* Progress Indicator */}
            <div className="flex items-center gap-3 mt-4">
              {['Цель', 'Стиль', 'Бюджет', 'Размер', 'Сезон', 'Итог'].map((step, idx) => {
                const steps = ['purpose', 'details', 'budget', 'size', 'season', 'final'];
                const stepIndex = steps.indexOf(conversationStep);
                const isActive = idx <= stepIndex;
                const isCurrent = idx === stepIndex;
                
                return (
                  <div key={step} className="flex items-center">
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-white text-blue-600 shadow-md' 
                        : 'bg-white/20 text-white'
                    } ${isCurrent ? 'ring-2 ring-white ring-offset-2 ring-offset-blue-600' : ''}`}>
                      {isActive ? <Check size={12} /> : idx + 1}
                    </div>
                    {idx < 5 && (
                      <div className={`w-6 h-0.5 mx-1 ${
                        isActive ? 'bg-white' : 'bg-white/20'
                      }`}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none shadow-sm'
                        : 'bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <span className="text-xs opacity-75 mt-2 block">
                      {msg.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    
                    {/* Show recommendations */}
                    {msg.recommendations && msg.recommendations.length > 0 && (
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 border-b pb-2">
                          <Target size={16} />
                          <span>Персональные рекомендации:</span>
                          <span className="text-xs text-blue-600 font-normal ml-auto">
                            {new Date().toLocaleDateString('ru-RU')} • Актуальные цены
                          </span>
                        </div>
                        
                        {msg.recommendations.map((rec, idx) => (
                          <div key={`${msg.id}_rec_${idx}`} className="space-y-3">
                            {/* Main Recommendation */}
                            <div 
                              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200 hover:border-blue-300 transition-colors cursor-pointer group"
                              onClick={() => openProductPage(rec.product.id)}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <div className="font-bold text-blue-700 text-sm group-hover:text-blue-800">
                                      {idx === 0 ? "🏆 Лучший вариант" : `🥈 Альтернатива ${idx}`}
                                    </div>
                                    <div className={`text-xs font-bold px-2 py-1 rounded-full ${
                                      rec.matchScore >= 80 ? 'text-green-600 bg-green-50' :
                                      rec.matchScore >= 60 ? 'text-yellow-600 bg-yellow-50' :
                                      'text-blue-600 bg-blue-50'
                                    }`}>
                                      {Math.round(rec.matchScore)}% совпадение
                                    </div>
                                  </div>
                                  
                                  <div className="mt-2 font-semibold text-gray-800">
                                    {rec.product.title}
                                  </div>
                                  
                                  <div className="mt-2 text-sm text-gray-600 space-y-1">
                                    <div className="flex items-center gap-3">
                                      <span className="flex items-center gap-1">
                                        <Package size={12} /> {rec.product.specs.size}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Users size={12} /> {rec.product.specs.capacity}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1 font-bold text-gray-800">
                                      <DollarSign size={14} /> {rec.product.price.current}
                                    </div>
                                  </div>
                                  
                                  {/* Reasons */}
                                  <div className="mt-3 space-y-1">
                                    {rec.reasons.map((reason, i) => (
                                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                                        <ThumbsUp size={12} className="mt-0.5 text-green-500 flex-shrink-0" />
                                        <span>{reason}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  {/* Best For Tags */}
                                  <div className="mt-3 flex flex-wrap gap-1">
                                    {rec.bestFor.map((tag, i) => (
                                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <ChevronRight size={16} className="text-blue-400 mt-1 group-hover:text-blue-600" />
                              </div>
                            </div>
                            
                            {/* Alternatives */}
                            {rec.alternatives.length > 0 && (
                              <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                                <div className="text-xs text-gray-500 font-medium">Похожие варианты:</div>
                                {rec.alternatives.map((alt, altIdx) => (
                                  <div 
                                    key={`${msg.id}_alt_${altIdx}`}
                                    className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                                    onClick={() => openProductPage(alt.id)}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <div className="text-sm font-medium text-gray-700">{alt.title}</div>
                                        <div className="text-xs text-gray-500 mt-1">
                                          {alt.specs.size} • {alt.price.current}
                                        </div>
                                      </div>
                                      <ChevronRight size={14} className="text-gray-400" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                        
                        {/* Personalized Advice */}
                        {msg.personalizedAdvice && (
                          <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2 text-sm font-semibold text-green-700 mb-2">
                              <Brain size={14} />
                              <span>Мой совет:</span>
                            </div>
                            <div className="text-sm text-green-800">
                              {msg.personalizedAdvice}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-300"></div>
                      <span className="text-xs text-gray-500 ml-2">Анализирую...</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Loading indicator for recommendations */}
              {isLoadingRecommendations && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-blue-500" />
                      <span className="text-xs text-gray-500">Получаю актуальные цены...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Replies */}
          {conversationStep !== 'final' && !isLoadingRecommendations && (
            <div className="border-t border-gray-200 bg-white p-3">
              <div className="text-xs text-gray-500 font-medium mb-2 flex items-center gap-1">
                <Zap size={12} />
                <span>Выберите вариант:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(() => {
                  let repliesToShow = quickReplies[conversationStep];
                  
                  if (conversationStep === 'purpose' && showDetailsStep) {
                    repliesToShow = quickReplies.details;
                  }
                  
                  return repliesToShow?.map((reply) => (
                    <button
                      key={`${conversationStep}_${reply.text}`}
                      onClick={() => handleQuickReply(reply.text, 
                        conversationStep === 'purpose' && showDetailsStep ? 'details' : conversationStep, 
                        reply
                      )}
                      disabled={isLoadingRecommendations}
                      className="flex items-center gap-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg transition-colors hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{reply.icon}</span>
                      <span>{reply.text}</span>
                    </button>
                  ));
                })()}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 bg-white p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Задайте вопрос..."
                disabled={isTyping || isLoadingRecommendations}
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={() => {
                  // Optional: handle text input
                }}
                disabled={!input.trim() || isTyping || isLoadingRecommendations}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Brain size={12} /> AI-подбор
                </span>
                <span className="flex items-center gap-1">
                  <Shield size={12} /> Актуальные цены
                </span>
              </div>
              <span className="font-medium">
                {conversationStep === 'final' 
                  ? 'Анализ завершен' 
                  : `Шаг ${['purpose', 'details', 'budget', 'size', 'season', 'final'].indexOf(conversationStep) + 1}/6`
                }
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}