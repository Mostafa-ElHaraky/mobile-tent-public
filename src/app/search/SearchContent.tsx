'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { searchProducts, SearchResult } from '../../utils/searchUtils';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { SearchIcon, XIcon, FilterIcon } from 'lucide-react';
import { useRateLimit } from '../../hooks/useRateLimit';
import { searchProductsWithUpdatedPrices, parsePriceFromString } from '../../utils/searchUtils';

interface SearchContentProps {
  searchQuery: string;
  onOpenApplication: () => void;
}

// Input sanitization function
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '').trim();
};

// Input validation function
const validateSearchInput = (input: string): { isValid: boolean; message?: string } => {
  if (input.length > 100) {
    return { isValid: false, message: 'Search query too long' };
  }
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /onload=/i,
    /onerror=/i,
  ];
  
  if (suspiciousPatterns.some(pattern => pattern.test(input))) {
    return { isValid: false, message: 'Invalid search query' };
  }
  
  return { isValid: true };
};

export function SearchContent({ searchQuery, onOpenApplication }: SearchContentProps) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(searchQuery);
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc'>('relevance');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const { isAllowed } = useRateLimit(10, 60000); // 10 requests per minute

useEffect(() => {
  const query = searchParams.get('q') || '';
  const sanitizedQuery = sanitizeInput(query);
  setSearchInput(sanitizedQuery);
  
  if (sanitizedQuery.trim()) {
    setLoading(true);
    setSearchError(null);
    const timer = setTimeout(async () => {
      try {
        // Use the new async function with updated prices
        const searchResults = await searchProductsWithUpdatedPrices(sanitizedQuery);
        setResults(searchResults);
        setFilteredResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setSearchError('An error occurred during search. Please try again.');
        setResults([]);
        setFilteredResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  } else {
    setResults([]);
    setFilteredResults([]);
    setLoading(false);
    setSearchError(null);
  }
}, [searchParams]);

  // Apply filters and sorting
useEffect(() => {
  let filtered = [...results];

  // Apply price filter
  filtered = filtered.filter(result => {
    try {
      // Use the helper function to parse price
      const price = parsePriceFromString(result.product.price.current);
      return price >= priceRange[0] && price <= priceRange[1];
    } catch (error) {
      console.error('Price parsing error:', error);
      return false;
    }
  });

    // Apply sorting
  filtered.sort((a, b) => {
    try {
      const priceA = parsePriceFromString(a.product.price.current);
      const priceB = parsePriceFromString(b.product.price.current);
      
      switch (sortBy) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'relevance':
        default:
          return b.matchScore - a.matchScore;
      }
    } catch (error) {
      console.error('Sorting error:', error);
      return 0;
    }
  });

  setFilteredResults(filtered);
}, [results, sortBy, priceRange]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError(null);

    // Rate limiting check
    if (!isAllowed()) {
      setSearchError('Too many search requests. Please wait a moment.');
      return;
    }

    // Input validation
    const validation = validateSearchInput(searchInput);
    if (!validation.isValid) {
      setSearchError(validation.message || 'Invalid search input');
      return;
    }

    const sanitizedQuery = sanitizeInput(searchInput);
    if (sanitizedQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(sanitizedQuery)}`;
    }
  };

  const clearSearch = () => {
    setSearchInput('');
    setSearchError(null);
    window.location.href = '/search';
  };

  if (loading) {
    return null; // Skeleton is handled by parent
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-4">
        {/* Error Message */}
        {searchError && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm [font-family:'Raleway',Helvetica]">
              {searchError}
            </p>
          </div>
        )}

        {/* Search Header */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#232c42] mb-2 [font-family:'Raleway',Helvetica]">
                {searchQuery ? `Результаты поиска: "${searchQuery}"` : 'Поиск товаров'}
              </h1>
              <p className="text-gray-600 [font-family:'Raleway',Helvetica]">
                {searchQuery 
                  ? `Найдено ${filteredResults.length} товаров` 
                  : 'Введите поисковый запрос для поиска товаров'
                }
              </p>
            </div>
            {/* Search Box */}
            <form onSubmit={handleSearch} className="flex gap-2 max-w-md w-full">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Поиск по 1000+ товарам..."
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setSearchError(null);
                  }}
                  maxLength={100}
                  className="w-full pl-4 pr-10 py-3 rounded-[50px] border-gray-300 focus:border-[#527dc5]"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <XIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
              <Button
                type="submit"
                className="bg-[#4f5d80] hover:bg-[#3e4a68] rounded-[50px] px-6"
              >
                <SearchIcon className="w-5 h-5 text-white" />
              </Button>
            </form>
          </div>
          {/* Filters and Sort - Desktop */}
          <div className="hidden lg:flex items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <span className="font-medium text-[#232c42] [font-family:'Raleway',Helvetica]">
                Сортировка:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:border-[#527dc5] outline-none"
              >
                <option value="relevance">По релевантности</option>
                <option value="price-asc">По возрастанию цены</option>
                <option value="price-desc">По убыванию цены</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-medium text-[#232c42] [font-family:'Raleway',Helvetica]">
                Цена:
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-24 border border-gray-300 rounded-lg px-3 py-2 focus:border-[#527dc5] outline-none"
                  placeholder="От"
                  min="0"
                  max="1000000"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-24 border border-gray-300 rounded-lg px-3 py-2 focus:border-[#527dc5] outline-none"
                  placeholder="До"
                  min="0"
                  max="1000000"
                />
              </div>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="desktop:hidden flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg"
            >
              <FilterIcon className="w-4 h-4" />
              <span className="[font-family:'Raleway',Helvetica]">Фильтры</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:border-[#527dc5] outline-none"
            >
              <option value="relevance">По релевантности</option>
              <option value="price-asc">Цена ↑</option>
              <option value="price-desc">Цена ↓</option>
            </select>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="desktop:hidden p-4 bg-white rounded-2xl shadow-sm mt-2">
              <div className="space-y-4">
                <div>
                  <label className="block font-medium text-[#232c42] mb-2 [font-family:'Raleway',Helvetica]">
                    Цена
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:border-[#527dc5] outline-none"
                      placeholder="От"
                      min="0"
                      max="1000000"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:border-[#527dc5] outline-none"
                      placeholder="До"
                      min="0"
                      max="1000000"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {!searchQuery ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <SearchIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2 [font-family:'Raleway',Helvetica]">
              Введите поисковый запрос
            </h3>
            <p className="text-gray-500 [font-family:'Raleway',Helvetica]">
              Начните поиск по нашему каталогу из 1000+ товаров
            </p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <SearchIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2 [font-family:'Raleway',Helvetica]">
              Ничего не найдено
            </h3>
            <p className="text-gray-500 mb-6 [font-family:'Raleway',Helvetica]">
              Попробуйте изменить поисковый запрос или параметры фильтрации
            </p>
            <Button
              onClick={clearSearch}
              className="bg-[#527dc5] hover:bg-[#3e6bb0] rounded-[50px] px-6"
            >
              Очистить поиск
            </Button>
          </div>
        ) : (
          <>
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResults.map((result) => (
                <ProductCard 
                  key={result.product.id} 
                  result={result} 
                  onOpenApplication={onOpenApplication}
                />
              ))}
            </div>

            {/* Mobile Grid */}
            <div className="desktop:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredResults.map((result) => (
                <ProductCard 
                  key={result.product.id} 
                  result={result} 
                  isMobile 
                  onOpenApplication={onOpenApplication}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

interface ProductCardProps {
  result: SearchResult;
  isMobile?: boolean;
  onOpenApplication: () => void;
}

function ProductCard({ result, isMobile = false, onOpenApplication }: ProductCardProps) {
  const product = result.product;
  const href = `/tent/${product.id}`;

  return (
    <article
      className={`relative w-full mx-auto rounded-[20px] border border-[#dddddd] shadow-lg backdrop-blur-[79px] bg-white overflow-hidden transition-transform duration-200 hover:-translate-y-[2px] focus-within:-translate-y-[2px] ${
        isMobile ? 'max-w-full' : 'max-w-[432px]'
      }`}
    >
      {/* Stretched clickable area */}
      <Link
        href={href}
        aria-label={`Открыть ${product.title}`}
        className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6FA7FF] rounded-[20px]"
      />

      <div className="p-0">
        <div className="flex flex-col gap-[22px] p-4 sm:p-[33px]">
          {/* Image area: no cropping, fully visible */}
          <div className={`relative w-full rounded-t-[20px] overflow-hidden bg-white ${
            isMobile ? 'h-[200px]' : 'h-[250px] sm:h-[300px]'
          }`}>
            {product.images && product.images.length > 0 ? (
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="transition-all duration-300 ease-in-out select-none object-contain object-center p-2 sm:p-3"
                draggable={false}
                loading="lazy"
                sizes={isMobile ? "(max-width: 768px) 100vw" : "(max-width: 1200px) 50vw, 432px"}
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">No Image</span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:gap-9">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Clickable product title */}
              <h3 className="font-bold text-[#394355] text-lg sm:text-xl leading-6 [font-family:'Raleway',Helvetica]">
                <Link
                  href={href}
                  onClick={(e) => e.stopPropagation()}
                  className="hover:underline underline-offset-2 hover:text-[#3C6CEC] focus:underline focus:outline-none"
                  aria-label={`Открыть страницу товара ${product.title}`}
                >
                  {product.title}
                </Link>
              </h3>

              {/* Specs */}
              <div className="flex flex-col gap-2 sm:gap-[9px] text-[#394355]">
                <div className="flex items-start gap-2 text-sm sm:text-base leading-6">
                  <span className="font-normal">Размер:</span>
                  <span className="font-medium">{product.specs?.size}</span>
                </div>
                <div className="flex items-start gap-2 text-sm sm:text-base leading-6">
                  <span className="font-normal">Площадь:</span>
                  <span className="font-medium">{product.specs?.area}</span>
                </div>
                <div className="flex items-start gap-2 text-sm sm:text-base leading-6">
                  <span className="font-normal">Вместимость:</span>
                  <span className="font-medium">{product.specs?.capacity}</span>
                </div>
                <div className="flex items-start gap-2 text-sm sm:text-base leading-6">
                  <span className="font-normal">В наличии:</span>
                  <span className="font-medium">{product.specs?.availability || 'Да'}</span>
                </div>
              </div>
            </div>

            {/* Price block */}
            <div className="flex flex-col gap-3">
              <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                Цена:
              </span>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-9">
                <div className="flex items-center gap-1.5">
                  {product.price?.original && (
                    <>
                      <span className="text-[#4f5d80d9] line-through font-medium text-base leading-6 [font-family:'Raleway',Helvetica]">
                        {product.price.original}
                      </span>

                      {/* Gradient discount badge */}
                      {product.price?.discount && (
                        <span className="px-1 py-1 font-bold text-white text-sm [font-family:'Raleway',Helvetica] rounded-lg [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                          {product.price.discount}
                        </span>
                      )}
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[#394355] text-xl sm:text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                    {product.price?.current}
                  </span>
                  <div className="w-full max-w-[190px] font-normal text-[10px] leading-[10px] [font-family:'Raleway',Helvetica]">
                    <span className="italic text-[#eb3c3c]">*</span>
                    <span className="italic text-[#394355]">
                      В зависимости от включенных опций
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onOpenApplication();
                }}
                className="relative z-20 block w-full h-12 sm:h-[48px] rounded-2xl shadow-[0px_12px_24px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] text-white text-sm sm:text-base font-semibold [font-family:'Raleway',Helvetica] hover:brightness-110 active:brightness-95 transition"
                aria-label="Оставить заявку"
                type="button"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}