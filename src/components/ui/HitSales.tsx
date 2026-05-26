'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { getProductsWithUpdatedPrices } from "@/utils/products";

// ✅ Import data & types
import {
  allCategories,
  typesByCategory,
  allProducts as staticProducts, // Import all your static products
  type Category,
  type TypeByCategory,
  type Product,
} from '../../data/hitSalesData';

const DRAG_THRESHOLD = 6; // px to distinguish click vs drag

// Helper to format price
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const HitSales = () => {
  const defaultCategory = allCategories[0];
  const defaultType = typesByCategory[defaultCategory][0];

  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory);
  const [showTypes, setShowTypes] = useState(false);
  const [selectedType, setSelectedType] = useState<TypeByCategory>(defaultType);
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>({});
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  
  // Mobile navigation
  const [mobileProductIndex, setMobileProductIndex] = useState(0);
  
  const router = useRouter();

  // Initialize with static data and fetch price updates
  useEffect(() => {
    const initializeProducts = async () => {
      try {
        setLoading(true);
        
        console.log('Initializing products with updated prices...');
        
        // Use the shared utility to get products with updated prices
        const products = await getProductsWithUpdatedPrices();
        
        console.log('Loaded', products.length, 'products with updated prices');
        setAllProducts(products);        
      } catch (error) {
        console.error('Error initializing products:', error);
        // Fallback to static data
        setAllProducts(staticProducts);
      } finally {
        setLoading(false);
      }
    };
    
    initializeProducts();
    
    // Refresh prices every 10 minutes
    const interval = setInterval(async () => {
      try {
        const products = await getProductsWithUpdatedPrices();
        setAllProducts(products);
        console.log('Scheduled price update completed');
      } catch (error) {
        console.error('Scheduled price update failed:', error);
      }
    }, 10 * 60 * 1000); // 10 minutes
    
    return () => clearInterval(interval);
  }, []);

  // Filter products by selected type
  const productCards = allProducts.filter((product: Product) => product.type === selectedType);

  const handleCategoryClick = (cat: Category) => {
    const same = selectedCategory === cat;
    setSelectedCategory(cat);
    const newType = typesByCategory[cat][0];
    setSelectedType(newType);
    setShowTypes(prev => (same ? !prev : true));
    setMobileProductIndex(0);
  };

  const handleTypeClick = (type: TypeByCategory) => {
    console.log('Type clicked:', type);
    setSelectedType(type);
    setShowTypes(false);
    setMobileProductIndex(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollStartLeft(containerRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2;
    setDragDistance(prev => prev + Math.abs(walk - (containerRef.current!.scrollLeft - scrollStartLeft)));
    containerRef.current.scrollLeft = scrollStartLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = direction === 'left' ? -400 : 400;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const navigateIfClick = (productId: string) => {
    if (dragDistance < DRAG_THRESHOLD) {
      router.push(`/tent/${productId}`);
    }
  };

  const handleImageClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    navigateIfClick(productId);
  };

  const handleNextImage = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndices(prev => {
      const currentIndex = prev[productId] || 0;
      const product = allProducts.find((p: Product) => p.id === productId);
      const imagesLength = product?.images.length || 1;
      return { ...prev, [productId]: (currentIndex + 1) % imagesLength };
    });
  };

  const handlePrevImage = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndices(prev => {
      const product = allProducts.find((p: Product) => p.id === productId);
      if (!product) return prev;
      const currentIndex = prev[productId] || 0;
      const newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
      return { ...prev, [productId]: newIndex };
    });
  };

  const handleNextMobileProduct = () => {
    if (productCards.length === 0) return;
    setMobileProductIndex(prev => (prev + 1) % productCards.length);
  };
  
  const handlePrevMobileProduct = () => {
    if (productCards.length === 0) return;
    setMobileProductIndex(prev => (prev - 1 + productCards.length) % productCards.length);
  };

  // Get all available product types from loaded data
  const availableProductTypes = Array.from(new Set(allProducts.map(p => p.type)));

  // Get counts per type for each category
  const getTypeCountsForCategory = (cat: Category) => {
    const counts: Record<string, number> = {};
    typesByCategory[cat].forEach(type => {
      counts[type] = allProducts.filter(p => p.type === type).length;
    });
    return counts;
  };

  const categoryTypeCounts = getTypeCountsForCategory(selectedCategory);

  // Debug log
  useEffect(() => {
    console.log('=== HitSales Data ===');
    console.log('Total products:', allProducts.length);
    console.log('Selected category:', selectedCategory);
    console.log('Selected type:', selectedType);
    console.log('Filtered products:', productCards.length);
    console.log('Available types in selected category:', 
      typesByCategory[selectedCategory].filter(type => categoryTypeCounts[type] > 0)
    );
  }, [selectedCategory, selectedType, allProducts.length, productCards.length, categoryTypeCounts]);

  // Loading state
  if (loading) {
    return (
      <section className="flex flex-col items-start gap-9 w-full py-8">
        <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Хиты</span>
          <span className="text-[#232c42]"> продаж</span>
        </h2>
        <div className="w-full text-center py-20">
          <div className="text-lg text-gray-600 animate-pulse">Загрузка товаров...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:flex flex-col items-start gap-9 w-full py-8">
        <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Хиты</span>
          <span className="text-[#232c42]"> продаж</span>
        </h2>

        {/* Category buttons row */}
        <div className="flex items-center gap-4">
          {allCategories.map((cat) => {
            const active = selectedCategory === cat;
            const productsInCategory = allProducts.filter(p => 
              typesByCategory[cat].includes(p.type)
            ).length;
            
            return (
              <div key={cat} className="relative">
                <Button
                  onClick={() => handleCategoryClick(cat)}
                  variant={active ? "default" : "outline"}
                  className={`h-[46px] px-5 rounded-[50px] font-semibold text-lg border ${
                    active
                      ? "text-white border-transparent [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                      : "bg-white text-black border-[#E5E7EB]"
                  }`}
                  aria-expanded={showTypes && active}
                >
                  {cat}
                  <span className="ml-2 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    {productsInCategory}
                  </span>
                  <ChevronDownIcon className={`ml-2 h-[7.5px] w-[13.86px] ${active ? "text-white" : "text-black"}`} />
                </Button>

                {showTypes && active && (
                  <div className="absolute top-12 left-0 z-10 bg-white shadow-md rounded-xl p-3 flex flex-col gap-2 min-w-[260px] max-h-[400px] overflow-y-auto">
                    {typesByCategory[cat].map((type) => {
                      const tActive = selectedType === type;
                      const productCount = categoryTypeCounts[type] || 0;
                      const hasProducts = productCount > 0;
                      
                      return (
                        <Button
                          key={type}
                          variant="ghost"
                          onClick={() => hasProducts && handleTypeClick(type)}
                          disabled={!hasProducts}
                          className={`justify-start rounded-[12px] ${
                            tActive
                              ? "text-white [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                              : "bg-white text-black hover:bg-gray-50"
                          } ${!hasProducts ? "opacity-50 cursor-not-allowed" : ""}`}
                          title={!hasProducts ? "Нет товаров в этой категории" : `${productCount} товаров`}
                        >
                          <span className="truncate">{type}</span>
                          <span className={`ml-2 text-xs ${tActive ? 'text-white' : 'text-gray-500'}`}>
                            ({productCount})
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {productCards.length > 0 ? (
          <div className="relative w-full mt-6 select-none">
            <div
              ref={containerRef}
              className="flex flex-nowrap gap-6 overflow-x-hidden scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
            >
              {productCards.map((product: Product) => (
                <Card
                  key={product.id}
                  className="w-[432px] flex-shrink-0 min-h-[574px] bg-white rounded-[20px] border border-[#dddddd] shadow-md flex flex-col cursor-pointer"
                  onClick={() => navigateIfClick(product.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') router.push(`/tent/${product.id}`); }}
                >
                  <CardContent className="p-0 flex-1">
                    <div className="flex flex-col items-start gap-4 p-6 h-full">
                      {/* Image Carousel Section */}
                      <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                        <div className="relative w-full h-full p-2">
                          <Image
                            src={product.images[activeIndices[product.id] || 0]}
                            alt={product.title}
                            fill
                            className="object-contain pointer-events-none"
                            draggable={false}
                            onClick={(e) => handleImageClick(e, product.id)}
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute inset-0 flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity">
                          <button
                            className="bg-black bg-opacity-30 text-white p-2"
                            onClick={(e) => handlePrevImage(product.id, e)}
                            aria-label="Previous image"
                          >
                            &lt;
                          </button>
                          <button
                            className="bg-black bg-opacity-30 text-white p-2"
                            onClick={(e) => handleNextImage(product.id, e)}
                            aria-label="Next image"
                          >
                            &gt;
                          </button>
                        </div>
                        <div className="flex justify-center mt-2 gap-1">
                          {product.images.map((_img: string, index: number) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full ${(activeIndices[product.id] || 0) === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-col gap-4 w-full mt-4">
                        {/* ✅ Clickable product title */}
                        <h3 className="font-bold text-[#394355] text-xl">
                          <a
                            href={`/tent/${product.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:underline underline-offset-2 hover:text-[#3C6CEC] focus:underline focus:outline-none"
                            aria-label={`Открыть страницу товара ${product.title}`}
                          >
                            {product.title}
                          </a>
                        </h3>

                        <div className="flex flex-col gap-2 text-base text-[#394355]">
                          <div>Размер: {product.specs.size}</div>
                          <div>Площадь: {product.specs.area}</div>
                          <div>Вместимость: {product.specs.capacity}</div>
                          <div>В наличии: {product.specs.availability}</div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <span className="text-base">Цена:</span>
                          <div className="flex items-center gap-3">
                            <span className="line-through text-gray-500">{product.price.original}</span>
                            <Badge className="bg-red-500 text-white rounded-md">{product.price.discount}</Badge>
                          </div>
                          <div className="relative left-[160px] bottom-[40px] font-bold text-2xl text-[#394355]">
                            {product.price.current}
                          </div>
                          <div className="relative left-[160px] bottom-[40px]">
                            <small className="text-xs italic text-gray-500">* В зависимости от включенных опций</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Arrows - only show if there are enough products to scroll */}
            {productCards.length > 1 && (
              <div className="relative bottom-[750px] flex justify-between pointer-events-none">
                <div className="relative left-[1200px]">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll('left')}
                    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] pointer-events-auto"
                  >
                    <Image loading="lazy" width={14} height={24} className="w-3.5 h-6" alt="Previous" src="/GROP-10.webp" />
                  </Button>
                </div>
                <div className="relative right-[80px]">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll('right')}
                    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] pointer-events-auto"
                  >
                    <Image loading="lazy" width={14} height={24} className="w-3.5 h-6" alt="Next" src="/GROP-11.webp" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full text-center py-10">
            <p className="text-gray-500">Нет товаров в этой категории</p>
            <p className="text-sm text-gray-400 mt-2">Выбран тип: "{selectedType}"</p>
            <p className="text-sm text-gray-400 mt-1">
              В категории "{selectedCategory}" доступны: {
                typesByCategory[selectedCategory]
                  .filter(type => categoryTypeCounts[type] > 0)
                  .map(type => `${type} (${categoryTypeCounts[type]})`)
                  .join(', ')
              }
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Всего в базе: {allProducts.length} товаров
            </p>
          </div>
        )}
      </section>

      {/* Mobile Version */}
      <section className="md:hidden flex flex-col items-start gap-6 w-full py-6 px-4">
        <h2 className="font-semibold text-3xl [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Хиты</span>
          <span className="text-[#232c42]"> продаж</span>
        </h2>

        <div className="flex flex-col gap-4 w-full">
          {/* Category buttons */}
          <div className="flex flex-wrap gap-3">
            {allCategories.map((cat) => {
              const active = selectedCategory === cat;
              const productsInCategory = allProducts.filter(p => 
                typesByCategory[cat].includes(p.type)
              ).length;
              
              return (
                <Button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  variant={active ? "default" : "outline"}
                  className={`h-[40px] px-4 rounded-[50px] font-medium text-sm border ${
                    active
                      ? "text-white border-transparent [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                      : "bg-white text-black border-[#E5E7EB]"
                  }`}
                >
                  {cat}
                  <span className="ml-1 text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full">
                    {productsInCategory}
                  </span>
                  <ChevronDownIcon className={`ml-1 h-3 w-3 ${active ? "text-white" : "text-black"}`} />
                </Button>
              );
            })}
          </div>

          {/* Types strip for current category (shown when toggled) */}
          {showTypes && (
            <div className="flex flex-wrap gap-2">
              {typesByCategory[selectedCategory].map((type) => {
                const tActive = selectedType === type;
                const productCount = categoryTypeCounts[type] || 0;
                const hasProducts = productCount > 0;
                
                return (
                  <Button
                    key={type}
                    onClick={() => hasProducts && handleTypeClick(type)}
                    variant={tActive ? "default" : "outline"}
                    disabled={!hasProducts}
                    className={`h-[36px] px-3 rounded-[50px] font-medium text-xs border ${
                      tActive
                        ? "text-white border-transparent [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                        : "bg-white text-black border-[#E5E7EB]"
                    } ${!hasProducts ? "opacity-50 cursor-not-allowed" : ""}`}
                    title={!hasProducts ? "Нет товаров в этой категории" : `${productCount} товаров`}
                  >
                    <span className="truncate max-w-[100px]">{type}</span>
                    <span className={`ml-1 text-xs ${tActive ? 'text-white' : 'text-gray-500'}`}>
                      ({productCount})
                    </span>
                  </Button>
                );
              })}
            </div>
          )}
        </div>

        {productCards.length > 0 ? (
          <div className="w-full">
            <div className="mb-3 text-sm text-gray-600">
              {productCards.length} товаров в категории "{selectedType}"
            </div>
            <Card
              className="w-full bg-white rounded-[20px] border border-[#dddddd] shadow-md flex flex-col cursor-pointer"
              onClick={() => navigateIfClick(productCards[mobileProductIndex].id)}
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start gap-4 p-4">
                  {/* Image Carousel Section */}
                  <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={productCards[mobileProductIndex].images[activeIndices[productCards[mobileProductIndex].id] || 0]}
                        alt={productCards[mobileProductIndex].title}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex justify-center mt-2 gap-1">
                      {productCards[mobileProductIndex].images.map((_img: string, index: number) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${(activeIndices[productCards[mobileProductIndex].id] || 0) === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col gap-3 w-full mt-2">
                    {/* ✅ Clickable product title in mobile */}
                    <h3 className="font-bold text-[#394355] text-lg">
                      <a
                        href={`/tent/${productCards[mobileProductIndex].id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="hover:underline underline-offset-2 hover:text-[#3C6CEC] focus:underline focus:outline-none"
                        aria-label={`Открыть страницу товара ${productCards[mobileProductIndex].title}`}
                      >
                        {productCards[mobileProductIndex].title}
                      </a>
                    </h3>

                    <div className="flex flex-col gap-1 text-sm text-[#394355]">
                      <div>Размер: {productCards[mobileProductIndex].specs.size}</div>
                      <div>Площадь: {productCards[mobileProductIndex].specs.area}</div>
                      <div>Вместимость: {productCards[mobileProductIndex].specs.capacity}</div>
                      <div>В наличии: {productCards[mobileProductIndex].specs.availability}</div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <span className="text-sm">Цена:</span>
                      <div className="flex items-center gap-2">
                        <span className="line-through text-gray-500 text-sm">{productCards[mobileProductIndex].price.original}</span>
                        <Badge className="bg-red-500 text-white rounded-md text-xs">{productCards[mobileProductIndex].price.discount}</Badge>
                      </div>
                      <div className="font-bold text-xl text-[#394355]">
                        {productCards[mobileProductIndex].price.current}
                      </div>
                      <div>
                        <small className="text-xs italic text-gray-500">* В зависимости от включенных опций</small>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Navigation Arrows - only show if there are multiple products */}
            {productCards.length > 1 && (
              <div className="flex justify-center gap-8 mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevMobileProduct}
                  className="w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <Image loading="lazy" width={12} height={20} className="w-3 h-5" alt="Previous" src="/GROP-10.webp" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextMobileProduct}
                  className="w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <Image loading="lazy" width={12} height={20} className="w-3 h-5" alt="Next" src="/GROP-11.webp" />
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full text-center py-6">
            <p className="text-gray-500">Нет товаров в этой категории</p>
            <p className="text-sm text-gray-400 mt-2">Выбран тип: "{selectedType}"</p>
            <p className="text-sm text-gray-400 mt-1">
              Попробуйте выбрать другой тип из категории "{selectedCategory}"
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default HitSales;