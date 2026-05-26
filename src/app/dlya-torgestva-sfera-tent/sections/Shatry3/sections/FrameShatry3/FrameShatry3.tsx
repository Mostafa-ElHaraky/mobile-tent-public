'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react';
import { Button } from "../../../../../../components/ui/button";
import DownloadCata from '../../../../../../components/ui/DownloadCata';
import Application from '@/components/ui/Application';
import { getProductsWithUpdatedPrices } from "@/utils/products";
import {
  allProducts, // Changed from staticArochnyeShatry
  type Product,
} from '@/data/hitSalesData';

const PRODUCT_BASE_PATH = '/tent';

export const FrameShatry3 = (): ReactElement => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [arochnyeShatry, setArochnyeShatry] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollYRef = useRef<number>(0);

  // NEW: Mobile "show more" control
  const [visibleProducts, setVisibleProducts] = useState<number>(0);

  // Fetch products from CMS with updated prices
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching Сферические Шатры with updated prices...');
        
        // Use the shared utility to get products with updated prices
        const products = await getProductsWithUpdatedPrices();
        
        // Filter only Сферические products
        const filteredProducts = products.filter((p) => p.type === 'Сферические');
        
        console.log(`Loaded ${filteredProducts.length} Сферические products`);
        
        // If no products from CMS, use fallback static data
        if (filteredProducts.length === 0) {
          console.warn('No Сферические products from CMS, using fallback data');
          // Filter allProducts for fallback
          const fallbackProducts = allProducts.filter((p) => p.type === 'Сферические');
          setArochnyeShatry(fallbackProducts);
        } else {
          setArochnyeShatry(filteredProducts);
        }
      } catch (error) {
        console.error('Error fetching Сферические products:', error);
        // Use fallback static data if API fails
        const fallbackProducts = allProducts.filter((p) => p.type === 'Сферические');
        setArochnyeShatry(fallbackProducts);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
    
    // Refresh prices every 10 minutes (same as HitSales component)
    const interval = setInterval(async () => {
      try {
        const products = await getProductsWithUpdatedPrices();
        const filteredProducts = products.filter((p) => p.type === 'Сферические');
        if (filteredProducts.length > 0) {
          setArochnyeShatry(filteredProducts);
          console.log('Scheduled price update for Сферические completed');
        }
      } catch (error) {
        console.error('Scheduled price update for Сферические failed:', error);
      }
    }, 10 * 60 * 1000); // 10 minutes
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    setVisibleProducts(isMobile ? Math.min(4, arochnyeShatry.length) : arochnyeShatry.length);
  }, [isMobile, arochnyeShatry.length]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isHelpOpen) setIsHelpOpen(false);
        if (isPopupOpen) setIsPopupOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isHelpOpen, isPopupOpen]);

  // ✅ iOS-safe scroll lock & restore
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const anyOpen = isPopupOpen || isHelpOpen;

    if (anyOpen) {
      scrollYRef.current = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }

      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';

      body.style.position = 'fixed';
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      body.style.touchAction = 'none';

      return () => {
        html.style.scrollBehavior = prevScrollBehavior;
      };
    } else {
      const y = scrollYRef.current || 0;

      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.touchAction = '';
      body.style.paddingRight = '';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
        });
      });
    }
  }, [isPopupOpen, isHelpOpen]);

  const hasMoreToShow = visibleProducts < arochnyeShatry.length;
  const handleShowMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 4, arochnyeShatry.length));
  };
  const handleShowLess = () => {
    setVisibleProducts(Math.min(4, arochnyeShatry.length));
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8 mx-auto max-w-[1440px] w-full mt-10 px-4 md:px-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Product Section */}
      <section className="mx-auto max-w-[1440px] w-full relative bottom-[5px] px-4 md:px-8">
        <h3 id="arch-grid-start" className="text-2xl md:text-3xl font-semibold text-[#232c42] [font-family:'Raleway',Helvetica] mb-6 text-center md:text-left">
          Сферические шатры
        </h3>

        {arochnyeShatry.length === 0 && !isLoading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Нет доступных Сферические шатров в данный момент</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
              {(isMobile ? arochnyeShatry.slice(0, visibleProducts) : arochnyeShatry).map((product) => {
                const href = `${PRODUCT_BASE_PATH}/${product.id}`;
                return (
                  <article
                    key={product.id}
                    className="relative w-full max-w-[432px] mx-auto rounded-[20px] border border-[#dddddd] shadow-lg backdrop-blur-[79px] bg-white overflow-hidden transition-transform duration-200 hover:-translate-y-[2px] focus-within:-translate-y-[2px]"
                  >
                    {/* Stretched clickable area */}
                    <Link
                      href={href}
                      aria-label={`Открыть ${product.title}`}
                      className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6FA7FF] rounded-[20px]"
                    />

                    <div className="p-0">
                      <div className="flex flex-col gap-[22px] p-4 sm:p-[33px]">
                        {/* Image area */}
                        <div className="relative w-full h-[250px] sm:h-[300px] rounded-t-[20px] overflow-hidden bg-white">
                          <Image
                            src={product.images?.[0] || '/placeholder.webp'}
                            alt={product.title}
                            fill
                            className="transition-all duration-300 ease-in-out select-none object-contain object-center p-2 sm:p-3"
                            draggable={false}
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, 432px"
                          />
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
                                <span className="font-medium">{product.specs?.availability}</span>
                              </div>
                            </div>
                          </div>

                          {/* Price block - FIXED DISCOUNT BADGE */}
                          <div className="flex flex-col gap-3">
                            <span className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                              Цена:
                            </span>

                            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-9">
                              <div className="flex items-center gap-1.5">
                                {product.price?.original && product.price.original.trim() !== '' && (
                                  <span className="text-[#4f5d80d9] line-through font-medium text-base leading-6 [font-family:'Raleway',Helvetica]">
                                    {product.price.original}
                                  </span>
                                )}

                                {/* Gradient discount badge - FIXED: Shows for any discount except 0% */}
                                {(() => {
                                  const discount = product.price?.discount;
                                  if (!discount) return null;
                                  
                                  // Clean and check the discount value
                                  const cleanDiscount = discount.toString().trim();
                                  
                                  // Check if discount exists and is not zero
                                  const isZeroDiscount = 
                                    cleanDiscount === '0%' || 
                                    cleanDiscount === '-0%' || 
                                    cleanDiscount === '0 %' || 
                                    cleanDiscount === '' || 
                                    !cleanDiscount.includes('%');
                                  
                                  return !isZeroDiscount ? (
                                    <span className="px-1 py-1 font-bold text-white text-sm [font-family:'Raleway',Helvetica] rounded-lg [background:linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)]">
                                      {cleanDiscount}
                                    </span>
                                  ) : null;
                                })()}
                              </div>

                              <div className="flex flex-col gap-2">
                                <span className="font-bold text-[#394355] text-xl sm:text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                                  {product.price?.current || 'Цена по запросу'}
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
                                setIsHelpOpen(true);
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
              })}
            </div>

            {/* Mobile-only Show More / Show Less */}
            {isMobile && arochnyeShatry.length > 4 && (
              <div className="mt-6 flex justify-center md:hidden">
                {hasMoreToShow ? (
                  <button
                    onClick={handleShowMore}
                    className="w-full max-w-[300px] h-[48px] rounded-2xl bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] text-white text-sm font-semibold shadow-[0px_12px_24px_0px_rgba(32,124,254,0.4)]"
                    type="button"
                  >
                    Показать ещё
                  </button>
                ) : (
                  <button
                    onClick={handleShowLess}
                    className="w-full max-w-[300px] h-[48px] rounded-2xl bg-white border border-[#dbe3f3] text-[#3C6CEC] text-sm font-semibold"
                    type="button"
                  >
                    Показать меньше
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </section>

      {/* Desktop Version */}
      <section className="relative mx-auto max-w-[1440px] h-[334px] top-[30px] rounded-[30px] bg-gradient-to-br from-[#243057] to-[#374255] flex hidden md:flex overflow-hidden">
        <div className="flex-1 py-16 px-[85px]">
          <div className="flex flex-col gap-6 mb-[46px]">
            <h2 className="w-full font-['Raleway',Helvetica] text-4xl tracking-[0]">
              <span className="font-medium text-white">Нет времени искать </span>
              <span className="font-bold text-[#9ec2ff]">шатер </span>
              <span className="font-medium text-white">на сайте?</span>
            </h2>
            <p className="w-full font-['Raleway',Helvetica] font-medium text-white text-lg tracking-[0] leading-6">
              Получите каталог шатров и посмотрите в удобное для вас время
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Button
              onClick={() => setIsPopupOpen(true)}
              className="w-[412px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] font-['Raleway',Helvetica] font-semibold text-white text-base"
            >
              Смотреть каталог
            </Button>
          </div>
        </div>

        <div className="flex-1 relative bg-[url(/fields-at-mountain-valley-1.webp)] bg-cover">
          <Image
            src="/Shatry3-tent-with-curtains-i08-1.webp"
            alt="Tent with curtains"
            width={442}
            height={334}
            className="absolute right-0 top-0 object-contain"
            loading="lazy"
          />
        </div>

        {/* DownloadCata Popup */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setIsPopupOpen(false)}
          >
            <div className="absolute inset-0 backdrop-blur-lg"></div>
            <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
              <DownloadCata onClose={() => setIsPopupOpen(false)} />
            </div>
          </div>
        )}
      </section>

      {/* Mobile Version */}
      <section className="block md:hidden w-full min-h-[400px] rounded-[20px] bg-gradient-to-br from-[#243057] to-[#374255] flex flex-col relative p-6 mt-8">
        <div className="flex-1 py-4">
          <div className="flex flex-col gap-4 mb-4">
            <h2 className="w-full font-['Raleway',Helvetica] text-2xl text-center">
              <span className="font-medium text-white">Нет времени искать </span>
              <span className="font-bold text-[#9ec2ff]">шатер </span>
              <span className="font-medium text-white">на сайте?</span>
            </h2>
            <p className="w-full text-white text-base text-center leading-5 font-['Raleway',Helvetica]">
              Получите каталог шатров и посмотрите в удобное для вас время
            </p>
          </div>

          <div className="relative h-[200px] bg-[url(/fields-at-mountain-valley-1.webp)] bg-cover bg-center rounded-[15px] overflow-hidden mt-4 mb-6">
            <Image
              src="/Shatry3-tent-with-curtains-i08-1.webp"
              alt="Tent with curtains"
              fill
              className="object-contain p-4"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 pointer-events-none"></div>
          </div>

          <div className="flex flex-col items-center">
            <Button
              onClick={() => setIsPopupOpen(true)}
              className="w-full max-w-[300px] h-[56px] rounded-2xl shadow-[0px_12px_24px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] font-['Raleway',Helvetica] font-semibold text-white text-sm"
            >
              Смотреть каталог
            </Button>
          </div>
        </div>

        {/* DownloadCata Popup (Mobile) */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setIsPopupOpen(false)}
          >
            <div className="absolute inset-0 backdrop-blur-lg"></div>
            <div className="relative z-10 w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <DownloadCata onClose={() => setIsPopupOpen(false)} />
            </div>
          </div>
        )}
      </section>

      {/* Frameofhelp Popup */}
      {isHelpOpen && (
        <>
          {/* Desktop */}
          <div className="hidden md:block fixed inset-0 z-50">
            <div className="inline-flex flex-col items-start gap-1.5 absolute top-[19px] left-[782px] z-50">
              <Application
                showMobileModal={false}
                onClose={() => setIsHelpOpen(false)}
              />
            </div>
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsHelpOpen(false)}
            />
          </div>

          {/* Mobile */}
          <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <Application
              showMobileModal={true}
              onClose={() => setIsHelpOpen(false)}
            />
          </div>
        </>
      )}
    </>
  );
};