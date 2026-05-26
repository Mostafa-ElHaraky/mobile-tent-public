"use client";

import { useState, useEffect, useRef } from "react";
import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CitySelector from "../../components/ui/CitySelector";
import Frameofhelp from '../../components/ui/Frameofhelp';
import Framecallme from '../../components/ui/Framecallme';
import { Input } from "../../components/ui/input";
import { MailIcon, SearchIcon, XIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { HelpCircle, Phone } from "lucide-react";
import { searchProducts, SearchResult } from "../../utils/searchUtils";
import { searchProductsWithUpdatedPrices } from '../../utils/searchUtils';

type CardItem = {
  title: string;
  path: string;
  imageUrl?: string;
};

type MenuItem = {
  id: number;
  title: string;
  active: false;
  path: string;
  cards: CardItem[];
};

type FrameProps = {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
};

const Frame = ({ isMobileMenuOpen, closeMobileMenu }: FrameProps): ReactElement => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeMenuItem, setActiveMenuItem] = useState<number>(2);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: "Типы мероприятий",
      active: false,
      path: "/shatry-i-navesy/wedding",
      cards: [
        { title: "Шатры для кафе", path: "/dlya-cafe" },
        { title: "Шатры для загородного кафе", path: "/dlya-zagorodnyh-domov" },
        { title: "Большие шатры для мероприятий", path: "/dlya-torgestva-meropriyatiya" },
        { title: "Торговые шатры", path: "/dlya-torgestva-meropriyatiya" },
        { title: "Шатры для банкета", path: "/dlya-zagorodnyh-domov" },
        { title: "Шатры для выставок", path: "/dlya-vistavok-promoakcii" },
        { title: "Зимние шатры", path: "/dlya-zagorodnyh-domov" },
        { title: "Мембранный комплекс", path: "/shatry-i-navesy/membrannye" },
        { title: "Шатры для кафе арочные", path: "/dlya-cafe-arochnye" },
        { title: "Шатры для кафе шестигранные", path: "/dlya-cafe-hexagonal-tent" },
        { title: "Шатры для кафе мембранные", path: "/dlya-cafe-membrannie" },
        { title: "Шатры для кафе мобильные", path: "/dlya-cafe-mobilnyye" },
        { title: "Шатры для кафе пагода", path: "/dlya-cafe-pagoda-tent" },
        { title: "Шатры для кафе перголы", path: "/dlya-cafe-pergoly" },
        { title: "Шатры для кафе сферические", path: "/dlya-cafe-sfera-tent" },
        { title: "Шатры для кафе звезда", path: "/dlya-cafe-star-tent" },
        { title: "Шатры для кафе зонты", path: "/dlya-cafe-zonty" },
        { title: "Спортивные шатры арочные", path: "/dlya-sport-arochnye" },
        { title: "Спортивные шатры классические", path: "/dlya-sport-clasic-tent" },
        { title: "Спортивные шатры шестигранные", path: "/dlya-sport-hexagonal-tent" },
        { title: "Спортивные шатры мембранные", path: "/dlya-sport-membrannie" },
        { title: "Спортивные шатры мобильные", path: "/dlya-sport-mobile-tent" },
        { title: "Спортивные шатры надувные", path: "/dlya-sport-naduvnie" },
        { title: "Спортивные шатры натяжные", path: "/dlya-sport-natiagnie" },
        { title: "Спортивные шатры пагода", path: "/dlya-sport-pagoda-tent" },
        { title: "Спортивные шатры перголы", path: "/dlya-sport-pergoly" },
        { title: "Спортивные шатры звезда", path: "/dlya-sport-star-tent" },
        { title: "Спортивные шатры зонты", path: "/dlya-sport-zonty" },
        { title: "Торжественные шатры арочные", path: "/dlya-torgestva-arochnye" },
        { title: "Торжественные шатры шестигранные", path: "/dlya-torgestva-hexagonal-tent" },
        { title: "Торжественные шатры классические", path: "/dlya-torgestva-klassicheskiye-shatry" },
        { title: "Торжественные шатры мобильные", path: "/dlya-torgestva-mobilnyye" },
        { title: "Торжественные шатры пагода", path: "/dlya-torgestva-pagoda-tent" },
        { title: "Торжественные шатры перголы", path: "/dlya-torgestva-pergoly" },
        { title: "Торжественные шатры сферические", path: "/dlya-torgestva-sfera-tent" },
        { title: "Торжественные шатры зонты", path: "/dlya-torgestva-zonty" },
        { title: "Торжественные шатры звезда", path: "/dlya-torgestva-zvezda-tent" },
        { title: "Выставочные шатры арочные", path: "/dlya-vistavok-arochnye" },
        { title: "Выставочные шатры классические", path: "/dlya-vistavok-clasic-tent" },
        { title: "Выставочные шатры шестигранные", path: "/dlya-vistavok-hexagonal-tent" },
        { title: "Выставочные шатры мембранные", path: "/dlya-vistavok-membrannie" },
        { title: "Выставочные шатры мобильные", path: "/dlya-vistavok-mobile-tent" },
        { title: "Выставочные шатры натяжные", path: "/dlya-vistavok-natiagnie" },
        { title: "Выставочные шатры пагода", path: "/dlya-vistavok-pagoda-tent" },
        { title: "Выставочные шатры перголы", path: "/dlya-vistavok-pergoly" },
        { title: "Выставочные шатры сферические", path: "/dlya-vistavok-sfera-tent" },
        { title: "Выставочные шатры звезда", path: "/dlya-vistavok-star-tent" },
        { title: "Выставочные шатры зонты", path: "/dlya-vistavok-zonty" },
        { title: "Загородные шатры шестигранные", path: "/dlya-zagorodnyh-domov-hexagonal-tent" },
        { title: "Загородные шатры классические", path: "/dlya-zagorodnyh-domov-klassicheskiye" },
        { title: "Загородные шатры мембранные", path: "/dlya-zagorodnyh-domov-membrannie" },
        { title: "Загородные шатры мобильные", path: "/dlya-zagorodnyh-domov-mobilnyye" },
        { title: "Загородные шатры натяжные", path: "/dlya-zagorodnyh-domov-natiagnie" },
        { title: "Загородные шатры пагода", path: "/dlya-zagorodnyh-domov-pagoda" },
        { title: "Загородные шатры перголы", path: "/dlya-zagorodnyh-domov-pergoly" },
        { title: "Загородные шатры сферические", path: "/dlya-zagorodnyh-domov-sfericheskie" },
        { title: "Загородные шатры звезда", path: "/dlya-zagorodnyh-domov-star-tent" },
        { title: "Загородные шатры зонты", path: "/dlya-zagorodnyh-domov-zonty" },
        { title: "Временные шатры арочные", path: "/dlya-vremennyh-arochnye" },
        { title: "Временные шатры шестигранные", path: "/dlya-vremennyh-hexagonal-tent" },
        { title: "Временные шатры классические", path: "/dlya-vremennyh-klassicheskiye" },
        { title: "Временные шатры пагода", path: "/dlya-vremennyh-pagoda-tent" },
        { title: "Для кафе ангары", path: "/dlya-cafe-angary" },
        { title: "Для звездный шатер", path: "/dlya-cafe-star-tent" },
        { title: "Для спорт ангары", path: "/dlya-sport-angary" },
        { title: "Для спорт ангар арочные", path: "/dlya-sport-angary_arochnye" },
        { title: "Для спорт ангар каркасные", path: "/dlya-sport-angary_karkasnye" },
        { title: "Для торговля ангары", path: "/dlya-torgestva-angary" },
        { title: "Для выставка ангары", path: "/dlya-vistavok-angary" },
        { title: "Для временных ангаров гаражей", path: "/dlya-vremennyh-angarov-garagei" },
        { title: "Для временных ангары арочные", path: "/dlya-vremennyh-angary_arochnye" },
        { title: "Для временных ангары каркасные", path: "/dlya-vremennyh-angary_karkasnye" },
        { title: "2_садовые", path: "/shatry-i-navesy/2_sadovye" },
        { title: "Для кейтеринга", path: "/shatry-i-navesy/dlya_keyteringa" },
        { title: "Для выставки", path: "/shatry-i-navesy/dlya_vystavki" },
        { title: "доставка", path: "/shatry-i-navesy/dostavka" },
        { title: "Флаги", path: "/shatry-i-navesy/flagi" },
        { title: "Беседка", path: "/shatry-i-navesy/gazebo" },
        { title: "Из панелей", path: "/shatry-i-navesy/iz_paneley" },
        { title: "Палатки", path: "/shatry-i-navesy/palatki" },
        { title: "Раздвигные", path: "/shatry-i-navesy/razdvignye" },
        { title: "Садовые", path: "/shatry-i-navesy/sadovye" },
        { title: "Шестигранные шатры", path: "/shatry-i-navesy/shestigrannye_shatry_" },
        { title: "Стеклянные", path: "/shatry-i-navesy/steklyannye" },
        { title: "Восточные", path: "/shatry-i-navesy/vostochnye" },

      ],
    },
    {
      id: 2,
      title: "Типы шатров",
      active: false,
      path: "/shatry",
      cards: [
        { title: "Мобильные шатры", imageUrl: "/mobilny1.webp", path: "/shatry-i-navesy/mobilnye" },
        { title: "Пагода шатры", imageUrl: "/pagda1.webp", path: "/shatry-i-navesy/pagoda" },
        { title: "Арочные шатры", imageUrl: "/1.webp", path: "/shatry-i-navesy/arochnye" },
        { title: "Большие шатры", imageUrl: "/10x30,1.webp", path: "/shatry-i-navesy/bolshie" },
        { title: "Шатер Звезда", imageUrl: "/zvezda.webp", path: "/shatry-i-navesy/shater-zvezda" },
        { title: "Шестигранные шатры", imageUrl: "/shesteg1.webp", path: "/shatry-i-navesy/shestigrannye_shatry_" },
        { title: "Купольные шатры", imageUrl: "/kopal1.webp", path: "/shatry-i-navesy/kruglye" },
        { title: "Натяжные шатры", imageUrl: "/natyag.webp", path: "/shatry-i-navesy/natyagnye" },
        { title: "Мембранные шатры", imageUrl: "/membranysh.webp", path: "/shatry-i-navesy/membrannye" },
        { title: "Глэмпинг", imageUrl: "/glemp1.webp", path: "/shatry-i-navesy/glehmping" },
        { title: "Надувные шатры", imageUrl: "/nadyv.webp", path: "/shatry-i-navesy/naduvnye" },
        { title: "Сферические шатры", imageUrl: "/spher1.webp", path: "/dlya-cafe-sfera-tent" },
        { title: "Шатры-трансформеры", imageUrl: "/transformsh.webp", path: "/transformer" },
      ],
    },
    {
      id: 3,
      title: "Оснащение шатров",
      active: false,
      path: "/services",
      cards: [
        { title: "Брендирование шатров", imageUrl: "/heating.webp", path: "/services" },
        { title: "Декорирование шатров", imageUrl: "/lighting.webp", path: "/services" },
        { title: "Кондиционеры для шатров", imageUrl: "/ventilation.webp", path: "/services" },
        { title: "Обогревательные системы для шатров", imageUrl: "/flooring.webp", path: "/services" },
        { title: "Освещение для шатров", imageUrl: "/furniture.webp", path: "/services" },
        { title: "Остекление шатров", imageUrl: "/furniture.webp", path: "/services" },
        { title: "Пневмокровля для шатров", imageUrl: "/furniture.webp", path: "/services" },
        { title: "Полы для шатров", imageUrl: "/furniture.webp", path: "/services" },
        { title: "Входные группы для шатров", imageUrl: "/furniture.webp", path: "/services" },
        { title: "Мебель для шатров", imageUrl: "/furniture.webp", path: "/services" },
        { title: "Туалеты для шатров", imageUrl: "/furniture.webp", path: "/services" },     
      ],
    },
    {
      id: 4,
      title: "Другие тентовые конструкции",
      active: false,
      path: "/shatry",
      cards: [
        { title: "Тентовые ангары", imageUrl: "/canopy.webp", path: "/shatry-i-navesy/tentovye-angary" },
        { title: "Перголы", imageUrl: "/tarpaulin.webp", path: "/pergoly" },
        { title: "Арочные ангары", imageUrl: "/canvas.webp", path: "/shatry-i-navesy/angary_arochnye" },
        { title: "Каркасные ангары", imageUrl: "/canvas.webp", path: "/shatry-i-navesy/angary_karkasnye" },
        { title: "Зонты", imageUrl: "/canvas.webp", path: "/shatry-i-navesy/zonty" },   
      ],
    },
  ];



  const navigate = (path: string) => {
    router.push(path);
  };

  const getCurrentCards = () => {
    const activeItem = menuItems.find((item) => item.id === activeMenuItem);
    return activeItem ? activeItem.cards : [];
  };

  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mobile-Tent",
    "url": "https://mobile-tent.ru",
    "description": "Продажа и аренда шатров, тентовых конструкций и оснащения для мероприятий",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mobile-tent.ru/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />



      {/* Desktop Version */}
      {/* ✅ FIX: Changed fixed height to min-height for dynamic content */}
      <main className="hidden lg:block relative w-[1440px] min-h-[900px] right-[309px] rounded-[30px] bg-white shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px]">
        <nav className="absolute w-[200px] h-[285px] top-[30px] left-[30px] bg-white" aria-label="Основная навигация по каталогу">
          <div className="relative w-[212px] h-[118px] top-[31px] left-0.5">
            <ul className="flex flex-col items-start gap-[18px] absolute top-0 left-[7px]">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="relative flex items-center"
                  onMouseEnter={() => {
                    setHoveredItem(item.id);
                    setActiveMenuItem(item.id);
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {hoveredItem === item.id && (
                    <div
                      className="absolute w-0.5 h-3.5 left-[-7px] bg-[#527dc5] rounded-[2px_0px_0px_2px]"
                      aria-hidden="true"
                    />
                  )}

                  <Link
                    href={item.path}
                    className={`relative w-fit [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-sm tracking-[0] leading-[normal] whitespace-nowrap transition-colors duration-200 ${
                      hoveredItem === item.id
                        ? "font-medium text-[#527dc5]"
                        : "hover:text-[#527dc5]"
                    }`}
                    aria-label={`Перейти в раздел: ${item.title}`}
                    onClick={() => setActiveMenuItem(item.id)}
                    prefetch={true}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ✅ FIX: Changed fixed height to auto and added padding-bottom */}
        <section className="absolute w-[771px] min-h-[690px] top-[35px] left-[618px] bg-white pb-8" aria-labelledby="catalog-section-title">
          <h2 id="catalog-section-title" className="sr-only">
            Разделы каталога продукции
          </h2>
          
          <div className="absolute -top-px left-0 font-semibold text-[#232c42] leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] text-sm tracking-[0]">
            <Link 
              href={menuItems.find((item) => item.id === activeMenuItem)?.path || "/shatry"}
              className="hover:text-[#527dc5] transition-colors"
            >
              {menuItems.find((item) => item.id === activeMenuItem)?.title || "Типы шатров"}
            </Link>
          </div>

          {/* ✅ FIX: Added max-height with scroll for very long lists */}
          <div className={`flex flex-wrap w-[771px] items-start gap-[14px] absolute top-[35px] left-0 max-h-[710px] overflow-y-auto ${
            [1, 3, 4].includes(activeMenuItem) ? "grid grid-cols-2 gap-x-8 gap-y-2" : "flex flex-wrap"
          }`}>
            {getCurrentCards().map((card, index) => (
              <Link
                href={card.path}
                key={`tent-card-${index}`}
                className={`no-underline outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-200 ${
                  [1, 3, 4].includes(activeMenuItem) 
                    ? "w-full hover:bg-gray-50 rounded-lg" 
                    : "rounded-[20px] hover:shadow-lg"
                }`}
                aria-label={`Перейти к разделу: ${card.title}`}
                title={card.title}
                prefetch={false}
              >
                {[1, 3, 4].includes(activeMenuItem) ? (
                  <div className="relative flex items-center pl-3 py-2 hover:bg-gray-50 rounded transition-colors group h-full w-full">
                    <div className="absolute left-0 w-0.5 h-full bg-transparent group-hover:bg-[#527dc5] transition-colors" />
                    <div className="relative w-fit [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-sm tracking-[0] leading-[normal] whitespace-nowrap transition-colors duration-200 group-hover:text-[#527dc5] group-hover:font-medium">
                      {card.title}
                    </div>
                  </div>
                ) : (
                  <div className="w-[204px] h-[130px] border border-solid border-[#dddddd] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 active:scale-[0.98] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] hover:shadow-lg hover:border-blue-200 hover:translate-y-[-2px]">
                    <div className="flex flex-col items-center gap-4 p-[13px] h-full">
                      {card.imageUrl && (
                        <div className="relative w-[99px] h-[70px] bg-white flex items-center justify-center">
                          <Image
                            src={card.imageUrl}
                            alt={card.title}
                            fill
                            className="object-contain"
                            sizes="99px"
                            priority={index < 4}
                          />
                        </div>
                      )}
                      <div className="w-full text-center flex-1 flex items-center justify-center">
                        <h3 className="font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0] line-clamp-2">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile Version - No changes needed here */}
      {isMobileMenuOpen && (
        <div className="block lg:hidden fixed inset-0 bg-white z-50 pt-16 overflow-y-auto">
          <div className="p-5">
            <button 
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Закрыть меню"
            >
              <XIcon className="w-6 h-6 text-black" />
            </button>

            <nav className="mb-8" aria-label="Мобильная навигация по каталогу">
              <ul className="grid grid-cols-2 gap-3">
                {menuItems.map((item) => (
                  <li key={item.id} className="list-none">
                    <Link
                      href={item.path}
                      className={`w-full py-4 px-4 text-center rounded-lg transition-colors [font-family:'Raleway',Helvetica] text-base block no-underline ${
                        activeMenuItem === item.id
                          ? "font-semibold text-[#527dc5] bg-blue-50"
                          : "font-normal text-[#232c42] hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveMenuItem(item.id)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="w-full" aria-labelledby="mobile-catalog-title">
              <h2 id="mobile-catalog-title" className="font-semibold text-center text-[#232c42] text-lg mb-6 [font-family:'Raleway',Helvetica]">
                <Link
                  href={menuItems.find((item) => item.id === activeMenuItem)?.path || "/shatry"}
                  className="hover:text-blue-600 transition-colors no-underline"
                >
                  {menuItems.find((item) => item.id === activeMenuItem)?.title || "Типы шатров"}
                </Link>
              </h2>

              <div className={`w-full max-h-[70vh] overflow-y-auto ${
                [1, 3, 4].includes(activeMenuItem) 
                  ? "space-y-3" 
                  : "grid grid-cols-1 gap-5"
              }`}>
                {getCurrentCards().map((card, index) => (
                  <Link
                    href={card.path}
                    key={`mobile-tent-card-${index}`}
                    className={`no-underline outline-none focus-visible:ring-2 focus-visible:ring-blue-500 block ${
                      [1, 3, 4].includes(activeMenuItem) 
                        ? "w-full py-4 px-5 bg-white rounded-lg border border-gray-200 active:bg-gray-50 transition-colors hover:border-blue-200"
                        : "w-full"
                    }`}
                    onClick={closeMobileMenu}
                    aria-label={`Перейти к разделу: ${card.title}`}
                    title={card.title}
                  >
                    {[1, 3, 4].includes(activeMenuItem) ? (
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-[#527dc5] rounded mr-3"></div>
                        <span className="[font-family:'Raleway',Helvetica] text-base text-[#232c42] font-medium">
                          {card.title}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full border border-solid border-gray-200 rounded-2xl overflow-hidden active:scale-[0.98] transition-transform shadow-sm hover:shadow-md hover:border-blue-200">
                        <div className="flex flex-col items-center gap-3 p-4">
                          {card.imageUrl && (
                            <div className="relative w-full h-80">
                              <Image
                                src={card.imageUrl}
                                alt={card.title}
                                fill
                                priority={index < 2}
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                sizes="(max-width: 345px) 100vw, 345px"
                              />
                            </div>
                          )}
                          <div className="w-full text-center mt-2">
                            <h3 className="font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica] tracking-[0] line-clamp-2">
                              {card.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};


const SearchResultsDropdownDesktop = ({ 
  results, 
  onProductSelect 
}: { 
  results: SearchResult[];
  onProductSelect: (productId: string) => void;
}) => {
  const router = useRouter();

  const handleProductClick = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling up
    console.log('Desktop product card clicked, product ID:', productId);
    onProductSelect(productId);
    
    // Navigate programmatically after closing the dropdown
    setTimeout(() => {
      router.push(`/tent/${productId}`);
    }, 50);
  };

  return (
    <div 
      className="top-full relative right-[400px] z-[100] mt-2 w-[1440px] h-[821px] rounded-[30px] bg-white shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px] overflow-hidden"
      onClick={(e) => e.stopPropagation()} // Stop propagation on the entire dropdown
      data-search-results="true"
    >
      {/* Header Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="font-semibold text-[#232c42] text-sm">
          Найдено {results.length} товаров
        </div>
      </div>
      
      {/* Scrollable Content Area */}
      <div className="h-[calc(821px-80px)] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 ">
          {/* Grid layout with 5 columns */}
          <div className="grid grid-cols-5 gap-4">
            {results.map((result) => (
              <div
                key={result.product.id}
                className="w-full aspect-[204/180] border border-solid border-[#dddddd] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-200 active:scale-[0.98] bg-white"
                onClick={(e) => handleProductClick(result.product.id, e)}
              >
                <div className="flex flex-col items-center gap-3 p-3 h-full">
                  {result.product.images && result.product.images.length > 0 && (
                    <div className="relative w-[99px] h-[70px] bg-white flex items-center justify-center">
                      <Image
                        src={result.product.images[0]}
                        alt={result.product.title}
                        fill
                        className="object-contain"
                        sizes="99px"
                        priority
                      />
                    </div>
                  )}
                  
                  <div className="w-full text-center flex flex-col gap-1 flex-1 justify-center">
                    <h3 className="font-medium text-[#394355] text-sm leading-4 [font-family:'Raleway',Helvetica] tracking-[0] line-clamp-2">
                      {result.product.title}
                    </h3>
                    
                    <div className="text-xs text-gray-500">
                      {result.product.specs.size}
                    </div>
                    
                    <div className="font-semibold text-[#527dc5] text-sm mt-1">
                      {result.product.price.current}
                    </div>
                    
                    {result.product.price.discount && (
                      <div className="text-xs text-red-500 line-through">
                        {result.product.price.original}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {results.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Ничего не найдено
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SearchResultsDropdownMobile = ({ 
  results, 
  onProductSelect 
}: { 
  results: SearchResult[];
  onProductSelect: (productId: string) => void;
}) => {
  const router = useRouter();

  const handleProductClick = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onProductSelect(productId);
    
    // Navigate immediately
    router.push(`/tent/${productId}`);
  };

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-[300px] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
      data-search-results="true"
    >
      <div className="p-3 border-b border-gray-100">
        <div className="font-semibold text-[#232c42] text-sm">
          Найдено {results.length} товаров
        </div>
      </div>
      
      <div className="p-3">
        {results.map((result) => (
          <div
            key={result.product.id}
            className="w-full p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer rounded transition-colors"
            onClick={(e) => handleProductClick(result.product.id, e)}
          >
            <div className="flex items-center gap-3">
              {result.product.images && result.product.images.length > 0 && (
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={result.product.images[0]}
                    alt={result.product.title}
                    fill
                    className="object-cover rounded"
                    sizes="48px"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[#394355] text-sm leading-4 [font-family:'Raleway',Helvetica] line-clamp-2">
                  {result.product.title}
                </h3>
                
                <div className="text-xs text-gray-500 mt-1">
                  {result.product.specs?.size || 'Размер не указан'}
                </div>
                
                <div className="font-semibold text-[#527dc5] text-sm mt-1">
                  {result.product.price?.current || 'Цена не указана'}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {results.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            Ничего не найдено
          </div>
        )}
      </div>
    </div>
  );
};

export const Header = (): ReactElement => {
  const router = useRouter();
  const [isCatalogHovered, setIsCatalogHovered] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showCallMeModal, setShowCallMeModal] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isCitySelectorOpen, setIsCitySelectorOpen] = useState(false);
  
  // Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // --- Email copy state/handlers ---
  const email = 'info@mobile-tent.ru';
  const [copied, setCopied] = useState(false);



    // Add this function to generate static HTML for SEO
// Add this function to generate static HTML for SEO
const renderStaticMenuForSEO = () => {
  return (
    <div 
      className="hidden" 
      style={{ display: 'none' }}
      aria-hidden="true"
      data-seo-menu="true"
    >
      {/* Static HTML version of all menu links for SEO */}
      <nav id="seo-sitemap">
        <h2>Каталог продукции Mobile-Tent</h2>
        
        {/* Explicit list of ALL URLs */}
        <section>
          <h3>Все URL каталога</h3>
          <ul>
            {/* Explicitly list every single URL to ensure they appear in page source */}
            <li><a href="/dlya-cafe">Шатры для кафе</a></li>
            <li><a href="/dlya-zagorodnyh-domov">Шатры для загородного кафе</a></li>
            <li><a href="/dlya-torgestva-meropriyatiya">Большие шатры для мероприятий</a></li>
            <li><a href="/dlya-torgestva-meropriyatiya">Торговые шатры</a></li>
            <li><a href="/dlya-zagorodnyh-domov">Шатры для банкета</a></li>
            <li><a href="/dlya-vistavok-promoakcii">Шатры для выставок</a></li>
            <li><a href="/dlya-zagorodnyh-domov">Зимние шатры</a></li>
            <li><a href="/shatry-i-navesy/membrannye">Мембранный комплекс</a></li>
            <li><a href="/dlya-cafe-arochnye">Шатры для кафе арочные</a></li>
            <li><a href="/dlya-cafe-hexagonal-tent">Шатры для кафе шестигранные</a></li>
            <li><a href="/dlya-cafe-membrannie">Шатры для кафе мембранные</a></li>
            <li><a href="/dlya-cafe-mobilnyye">Шатры для кафе мобильные</a></li>
            <li><a href="/dlya-cafe-pagoda-tent">Шатры для кафе пагода</a></li>
            <li><a href="/dlya-cafe-pergoly">Шатры для кафе перголы</a></li>
            <li><a href="/dlya-cafe-sfera-tent">Шатры для кафе сферические</a></li>
            <li><a href="/dlya-cafe-star-tent">Шатры для кафе звезда</a></li>
            <li><a href="/dlya-cafe-zonty">Шатры для кафе зонты</a></li>
            <li><a href="/dlya-sport-arochnye">Спортивные шатры арочные</a></li>
            <li><a href="/dlya-sport-clasic-tent">Спортивные шатры классические</a></li>
            <li><a href="/dlya-sport-hexagonal-tent">Спортивные шатры шестигранные</a></li>
            <li><a href="/dlya-sport-membrannie">Спортивные шатры мембранные</a></li>
            <li><a href="/dlya-sport-mobile-tent">Спортивные шатры мобильные</a></li>
            <li><a href="/dlya-sport-naduvnie">Спортивные шатры надувные</a></li>
            <li><a href="/dlya-sport-natiagnie">Спортивные шатры натяжные</a></li>
            <li><a href="/dlya-sport-pagoda-tent">Спортивные шатры пагода</a></li>
            <li><a href="/dlya-sport-pergoly">Спортивные шатры перголы</a></li>
            <li><a href="/dlya-sport-star-tent">Спортивные шатры звезда</a></li>
            <li><a href="/dlya-sport-zonty">Спортивные шатры зонты</a></li>
            <li><a href="/dlya-torgestva-arochnye">Торжественные шатры арочные</a></li>
            <li><a href="/dlya-torgestva-hexagonal-tent">Торжественные шатры шестигранные</a></li>
            <li><a href="/dlya-torgestva-klassicheskiye-shatry">Торжественные шатры классические</a></li>
            <li><a href="/dlya-torgestva-mobilnyye">Торжественные шатры мобильные</a></li>
            <li><a href="/dlya-torgestva-pagoda-tent">Торжественные шатры пагода</a></li>
            <li><a href="/dlya-torgestva-pergoly">Торжественные шатры перголы</a></li>
            <li><a href="/dlya-torgestva-sfera-tent">Торжественные шатры сферические</a></li>
            <li><a href="/dlya-torgestva-zonty">Торжественные шатры зонты</a></li>
            <li><a href="/dlya-torgestva-zvezda-tent">Торжественные шатры звезда</a></li>
            <li><a href="/dlya-vistavok-arochnye">Выставочные шатры арочные</a></li>
            <li><a href="/dlya-vistavok-clasic-tent">Выставочные шатры классические</a></li>
            <li><a href="/dlya-vistavok-hexagonal-tent">Выставочные шатры шестигранные</a></li>
            <li><a href="/dlya-vistavok-membrannie">Выставочные шатры мембранные</a></li>
            <li><a href="/dlya-vistavok-mobile-tent">Выставочные шатры мобильные</a></li>
            <li><a href="/dlya-vistavok-natiagnie">Выставочные шатры натяжные</a></li>
            <li><a href="/dlya-vistavok-pagoda-tent">Выставочные шатры пагода</a></li>
            <li><a href="/dlya-vistavok-pergoly">Выставочные шатры перголы</a></li>
            <li><a href="/dlya-vistavok-sfera-tent">Выставочные шатры сферические</a></li>
            <li><a href="/dlya-vistavok-star-tent">Выставочные шатры звезда</a></li>
            <li><a href="/dlya-vistavok-zonty">Выставочные шатры зонты</a></li>
            <li><a href="/dlya-zagorodnyh-domov-hexagonal-tent">Загородные шатры шестигранные</a></li>
            <li><a href="/dlya-zagorodnyh-domov-klassicheskiye">Загородные шатры классические</a></li>
            <li><a href="/dlya-zagorodnyh-domov-membrannie">Загородные шатры мембранные</a></li>
            <li><a href="/dlya-zagorodnyh-domov-mobilnyye">Загородные шатры мобильные</a></li>
            <li><a href="/dlya-zagorodnyh-domov-natiagnie">Загородные шатры натяжные</a></li>
            <li><a href="/dlya-zagorodnyh-domov-pagoda">Загородные шатры пагода</a></li>
            <li><a href="/dlya-zagorodnyh-domov-pergoly">Загородные шатры перголы</a></li>
            <li><a href="/dlya-zagorodnyh-domov-sfericheskie">Загородные шатры сферические</a></li>
            <li><a href="/dlya-zagorodnyh-domov-star-tent">Загородные шатры звезда</a></li>
            <li><a href="/dlya-zagorodnyh-domov-zonty">Загородные шатры зонты</a></li>
            <li><a href="/dlya-vremennyh-arochnye">Временные шатры арочные</a></li>
            <li><a href="/dlya-vremennyh-hexagonal-tent">Временные шатры шестигранные</a></li>
            <li><a href="/dlya-vremennyh-klassicheskiye">Временные шатры классические</a></li>
            <li><a href="/dlya-vremennyh-pagoda-tent">Временные шатры пагода</a></li>
            <li><a href="/dlya-cafe-angary">Для кафе ангары</a></li>
            <li><a href="/dlya-cafe-star-tent">Для звездный шатер</a></li>
            <li><a href="/dlya-sport-angary">Для спорт ангары</a></li>
            <li><a href="/dlya-sport-angary_arochnye">Для спорт ангар арочные</a></li>
            <li><a href="/dlya-sport-angary_karkasnye">Для спорт ангар каркасные</a></li>
            <li><a href="/dlya-torgestva-angary">Для торговля ангары</a></li>
            <li><a href="/dlya-vistavok-angary">Для выставка ангары</a></li>
            <li><a href="/dlya-vremennyh-angarov-garagei">Для временных ангаров гаражей</a></li>
            <li><a href="/dlya-vremennyh-angary_arochnye">Для временных ангары арочные</a></li>
            <li><a href="/dlya-vremennyh-angary_karkasnye">Для временных ангары каркасные</a></li>
            
            {/* These are the specific URLs you mentioned */}
            <li><a href="/shatry-i-navesy/2_sadovye">2_садовые</a></li>
            <li><a href="/shatry-i-navesy/dlya_keyteringa">Для кейтеринга</a></li>
            <li><a href="/shatry-i-navesy/dlya_vystavki">Для выставки</a></li>
            <li><a href="/shatry-i-navesy/dostavka">доставка</a></li>
            <li><a href="/shatry-i-navesy/flagi">Флаги</a></li>
            <li><a href="/shatry-i-navesy/gazebo">Беседка</a></li>
            <li><a href="/shatry-i-navesy/iz_paneley">Из панелей</a></li>
            <li><a href="/shatry-i-navesy/palatki">Палатки</a></li>
            <li><a href="/shatry-i-navesy/razdvignye">Раздвигные</a></li>
            <li><a href="/shatry-i-navesy/sadovye">Садовые</a></li>
            <li><a href="/shatry-i-navesy/shestigrannye_shatry_">Шестигранные шатры</a></li>
            <li><a href="/shatry-i-navesy/steklyannye">Стеклянные</a></li>
            <li><a href="/shatry-i-navesy/vostochnye">Восточные</a></li>

            {/* Типы шатров */}
            <li><a href="/shatry-i-navesy/mobilnye">Мобильные шатры</a></li>
            <li><a href="/shatry-i-navesy/pagoda">Пагода шатры</a></li>
            <li><a href="/shatry-i-navesy/arochnye">Арочные шатры</a></li>
            <li><a href="/shatry-i-navesy/bolshie">Большие шатры</a></li>
            <li><a href="/shatry-i-navesy/shater-zvezda">Шатер Звезда</a></li>
            <li><a href="/shatry-i-navesy/shestigrannye_shatry_">Шестигранные шатры</a></li>
            <li><a href="/shatry-i-navesy/kruglye">Купольные шатры</a></li>
            <li><a href="/shatry-i-navesy/natyagnye">Натяжные шатры</a></li>
            <li><a href="/shatry-i-navesy/membrannye">Мембранные шатры</a></li>
            <li><a href="/shatry-i-navesy/glehmping">Глэмпинг</a></li>
            <li><a href="/shatry-i-navesy/naduvnye">Надувные шатры</a></li>
            <li><a href="/shatry-i-navesy/kruglye">Сферические шатры</a></li>
            <li><a href="/transformer">Шатры-трансформеры</a></li>

            {/* Оснащение шатров */}
            <li><a href="/services">Брендирование шатров</a></li>
            <li><a href="/services">Декорирование шатров</a></li>
            <li><a href="/services">Кондиционеры для шатров</a></li>
            <li><a href="/services">Обогревательные системы для шатров</a></li>
            <li><a href="/services">Освещение для шатров</a></li>
            <li><a href="/services">Остекление шатров</a></li>
            <li><a href="/services">Пневмокровля для шатров</a></li>
            <li><a href="/services">Полы для шатров</a></li>
            <li><a href="/services">Входные группы для шатров</a></li>
            <li><a href="/services">Мебель для шатров</a></li>
            <li><a href="/services">Туалеты для шатров</a></li>

            {/* Другие тентовые конструкции */}
            <li><a href="/shatry-i-navesy/tentovye-angary">Тентовые ангары</a></li>
            <li><a href="/pergoly">Перголы</a></li>
            <li><a href="/shatry-i-navesy/angary_arochnye">Арочные ангары</a></li>
            <li><a href="/shatry-i-navesy/angary_karkasnye">Каркасные ангары</a></li>
            <li><a href="/shatry-i-navesy/zonty">Зонты</a></li>
          </ul>
        </section>

        {/* Additional section to ensure visibility */}
        <section>
          <h3>Популярные категории</h3>
          <ul>
            <li><a href="/shatry-i-navesy/sadovye">Садовые шатры</a></li>
            <li><a href="/dlya-zagorodnyh-domov-klassicheskiye">Загородные шатры классические</a></li>
            <li><a href="/shatry-i-navesy/sadovye">Садовые</a></li>
            <li><a href="/shatry-i-navesy/sadovye">Садовые шатры Mobile Tent</a></li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers / insecure contexts
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('Copy failed:', e);
    }
  };
  // ----------------------------------

  // Scroll effect for mobile header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  // Click outside handler for catalog
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        setIsCatalogOpen(false);
        setIsCatalogHovered(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Click outside handler for search results - UPDATED
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        // Check if the click is inside the search results dropdown
        const searchResultsDropdown = document.querySelector('[data-search-results]');
        if (searchResultsDropdown && searchResultsDropdown.contains(event.target as Node)) {
          return; // Click is inside search results, don't close
        }
        setShowSearchResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { text: 'Отзывы', active: false, path: '/reviews' },
    { text: 'Готовые решения', active: false, path: '/gallery' },
    { text: 'Вопросы и ответы', active: false, path: '/faq' },
    { text: 'О компании', active: false, path: '/about' },
    { text: 'Команда', active: false, path: '/comanda' },
    { text: 'Контакты', active: false, path: '/contacts' },
  ];

  // Search handler
const handleSearch = async (query: string) => {
  setSearchQuery(query);
  
  if (query.trim().length > 0) {
    try {
      // Use the async function with updated prices
      const results = await searchProductsWithUpdatedPrices(query);
      setSearchResults(results);
      setShowSearchResults(true);
    } catch (error) {
      console.error('Search error in header:', error);
      // Fallback to sync search
      const results = searchProducts(query);
      setSearchResults(results);
      setShowSearchResults(true);
    }
  } else {
    setSearchResults([]);
    setShowSearchResults(false);
  }
};

  // Handle search submission
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      // Navigate to search results page or show results in modal
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearchResults(false);
      setSearchQuery('');
    }
  };

  // Handle product selection from search results
  const handleProductSelect = (productId: string) => {
    console.log('=== handleProductSelect called ===');
    console.log('Product ID:', productId);
    
    if (productId === 'close') {
      setShowSearchResults(false);
      return;
    }
    
    // Close search results immediately
    setShowSearchResults(false);
    setSearchQuery('');
    
    console.log('Search results closed, navigation in progress');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
          {/* Static HTML Menu for SEO - This will be visible in page source */}
      {renderStaticMenuForSEO()}
      {/* Desktop Header */}
      <div className="hidden desktop:block">
<div className="absolute w-full min-w-[1401px] h-[69px] bottom-[1024px] left-0 bg-white rounded-[0px_0px_20px_20px] px-[19px] z-[100]">
            <div className="inline-flex flex-col items-start gap-1.5 absolute top-[19px] left-[782px]">
            <CitySelector />
          </div>

          <div className="inline-flex flex-col items-center gap-0.5 absolute top-[15px] left-[912px]">
            <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
              <div className="relative w-6 h-6">
                <a
                  href="https://t.me/+79857604220"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="absolute top-[3px] left-0.5"
                    src="/group.webp"
                    alt="Telegram icon"
                    width={21}
                    height={18}
                    priority
                  />
                </a>
              </div>

<div className="relative w-6 h-6">
  <a
    href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlSpace="preserve" 
      viewBox="0 0 1000 1000"
      className="w-5 h-5 absolute top-0.5 left-0.5"
    >
      <defs>
        <linearGradient id="b">
          <stop offset="0" stopColor="#00f"/>
          <stop offset="1" stopOpacity="0"/>
          <stop offset="1" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="a">
          <stop offset="0" stopColor="#4cf"/>
          <stop offset=".662" stopColor="#53e"/>
          <stop offset="1" stopColor="#93d"/>
        </linearGradient>
        <linearGradient id="c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" href="#a"/>
        <radialGradient id="d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" href="#b"/>
      </defs>
      <rect width="1000" height="1000" fill="url(#c)" ry="249.681"/>
      <rect width="1000" height="1000" fill="url(#d)" ry="249.681"/>
      <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
    </svg>
  </a>
</div>
            </div>

            <div className="w-fit font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
              Написать
            </div>
          </div>

          {/* Email + Copy */}
<div className="inline-flex items-center gap-1 absolute top-[27px] left-[1219px] max-w-[280px]">
  <MailIcon className="w-[15px] h-[15px] text-white flex-shrink-0" />
  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] min-w-0">
    <a
      href={`mailto:${email}`}
      className="relative font-normal text-[#232c42] text-sm tracking-[0] leading-normal whitespace-nowrap truncate max-w-[220px]"
      title={email}
    >
      {email}
    </a>

              {/* Clickable copy icon */}
              <button
                onClick={handleCopy}
                className="relative w-5 h-5 flex items-center justify-center group"
                title="Copy email"
                aria-label="Copy email address"
                type="button"
              >
                <Image
                  className="absolute w-4 h-4 top-0.5 left-0.5 cursor-pointer transition-transform group-hover:scale-110 active:scale-95"
                  src="/group-2.webp"
                  alt="Copy email"
                  width={16}
                  height={16}
                  quality={90}
                  loading="eager"
                  priority
                  style={{ minWidth: '16px', objectFit: 'contain' }}
                />
              </button>

              {/* Tooltip */}
              {copied && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-black text-white rounded-md px-2 py-0.5">
                  Copied!
                </span>
              )}
            </div>
          </div>

          <div className="absolute w-[179px] h-[38px] top-[19px] left-[1021px]">
            <div className="inline-flex flex-col items-start gap-1.5 absolute top-0 left-[42px]">
              <div className="w-fit mt-[-1.00px] font-normal text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                с 09:00 - 22:00 МСК
              </div>
              <div className="w-fit font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                с ПН - ПТ
              </div>
            </div>

            <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 absolute top-1 left-0 rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
                <div className="relative w-[13px] h-[13px] top-1 left-1 bg-[url(/group-7.webp)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          <div className="relative top-[100px] left-[40px]">
            <div className="inline-flex items-center gap-3.5 absolute top-1.5 left-[250px]">
              <div className="flex w-[473px] items-start relative rounded-[50px] overflow-visible">
                <div className="relative inline-block" ref={catalogRef}>
                  {/* stays as a button: opens dropdown */}
                  <Button
                    className="inline-flex items-center gap-1.5 px-4 py-6 bg-[#f2f4f7] rounded-[50px_0px_0px_50px] text-[#232c42] hover:bg-[#e5e8ed]"
                    onMouseEnter={() => setIsCatalogHovered(true)}
                    onMouseLeave={() => setIsCatalogHovered(false)}
                    onClick={() => setIsCatalogOpen((prev) => !prev)}
                  >
                    <div className="relative w-[22px] h-[22px]">
                      <Image
                        className="absolute top-1 left-1"
                        src="/group-3.webp"
                        alt="Catalog icon"
                        width={15}
                        height={15}
                      />
                    </div>
                    <span className="font-semibold text-base">Каталог</span>
                  </Button>

                  {(isCatalogHovered || isCatalogOpen) && (
                    <div
                      className="absolute top-full left-0 z-50 mt-2"
                      onMouseEnter={() => setIsCatalogHovered(true)}
                      onMouseLeave={() => setIsCatalogHovered(false)}
                    >
                      <Frame 
                        isMobileMenuOpen={false} 
                        closeMobileMenu={() => {}} 
                      />
                    </div>
                  )}
                </div>

                {/* Search Section - UPDATED */}
                <div className="flex flex-col w-[349px] h-[46px] items-start gap-4 relative" ref={searchRef}>
                  <div className="flex w-[349px] h-[46px] items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-[0px_50px_50px_0px] border-0 relative">
                    <Input
                      className="w-[291px] font-normal text-[17px] text-label-colorslc-l-secondary tracking-[-0.41px] leading-[22px] border-0"
                      placeholder="Поиск по 1000+ товарам"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearchSubmit();
                        }
                      }}
                      onFocus={() => {
                        if (searchQuery.trim() && searchResults.length > 0) {
                          setShowSearchResults(true);
                        }
                      }}
                    />
                    <Button 
                      className="w-9 flex items-center justify-center px-3 py-1 bg-[#4f5d80] rounded-[5000px] hover:bg-[#3e4a68]"
                      onClick={handleSearchSubmit}
                    >
                      <SearchIcon className="w-4 h-4 text-white" />
                    </Button>
                  </div>

                  {/* Desktop Search Results Dropdown */}
                  {showSearchResults && searchResults.length > 0 && (
                    <>
                      <div className="hidden desktop:block absolute top-full left-0 z-50 mt-2">
                        <SearchResultsDropdownDesktop 
                          results={searchResults} 
                          onProductSelect={handleProductSelect}
                        />
                      </div>
                    </>
                  )}

                  {showSearchResults && searchQuery.trim() && searchResults.length === 0 && (
                    <>
                      {/* Desktop No Results */}
                      <div className="hidden desktop:block absolute top-full left-0 w-full max-w-[349px] mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                        <div className="text-center text-gray-500">
                          Ничего не найдено по запросу "{searchQuery}"
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="w-fit font-normal text-[#394355] text-sm whitespace-nowrap [font-family:'Raleway',Helvetica]">
                или
              </div>

              <div className="inline-flex flex-col items-start gap-1.5 absolute top-[19px] left-[782px]">
                <Frameofhelp />
              </div>
            </div>

            <div className="inline-flex items-center gap-5 absolute top-1.5 left-[973px]">
              <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
                  <div className="flex w-[25px] h-[25px] top-[13px] left-[2px] items-center justify-center gap-2.5 relative rounded-[50px] p-1.5 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="relative w-[21px] h-[21px] mt-[-4px] mb-[-4px] ml-[-4px] mr-[-4px]">
                      <Image
                        className="absolute top-1 left-1"
                        src="/group-5.webp"
                        alt="Phone icon"
                        width={12}
                        height={12}
                        priority
                      />
                    </div>
                  </div>
                  <a
                    href="tel:+7 (495) 760-42-20"
                    className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
                  >
                    <span className="relative w-fit mt-[-1px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                      +7 (495) 760-42-20
                    </span>
                  </a>
                </div>

                <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto] ml-[25px]">
                  <a
                    href="tel:+7 (985) 760-42-20"
                    className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
                  >
                    <span className="relative w-fit left-[20px] mt-[-1px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                      +7 (985) 760-42-20
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex w-[190px] items-center gap-5 relative">
                <Framecallme />
              </div>
            </div>


            <div className="relative bottom-[60px]">
              {/* Logo and tagline */}
              <div className="inline-flex flex-col items-start gap-3 absolute top-0 left-0">
                <Link href="/">
                  <Image
                    className="relative cursor-pointer"
                    src="/mt_logo_purple.png"
                    alt="Mobile tent ru logo"
                    width={180}
                    height={25}
                    priority
                  />
                </Link>
              </div> 
            </div>
          </div>

          {/* ✅ Desktop bottom nav: anchor-based */}
          <nav className="inline-flex items-start gap-6 absolute top-7 left-12">
            {navItems.map((item) => (
              <Link
                key={item.text}
                href={item.path}
                className={`relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal ${
                  item.active ? "text-[#232c42]" : "text-[#394355]"
                } text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#232c42]`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.text}
                {item.active && (
                  <span aria-hidden className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#232c42]" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div 
        ref={headerRef}
        className={`block desktop:hidden w-full bg-white fixed top-0 left-0 z-40 shadow-md transition-transform duration-300 ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container for Top Sections with rounded corners */}
        <div className="pb-8 mx-2 bg-white rounded-b-2xl shadow-md">
          {/* Top Section - City and Social */}
          <div className="flex justify-between items-center w-full px-4 pt-[env(safe-area-inset-top)] pb-6 mt-2">
            {/* City Selector Button for Mobile */}
            <div className="flex items-center gap-1">
              <span className="text-[#232c42] text-[11px]">Ваш город</span>
              <button 
                className="flex items-center gap-1 text-[#232c42] text-[11px] font-medium"
                onClick={() => setIsCitySelectorOpen(true)}
              >
                <span>Москва</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#232c42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
<div className="flex items-center gap-3">
  <a href="https://t.me/+79857604220" target="_blank" rel="noopener noreferrer">
    <Image src="/group.webp" alt="Telegram icon" width={21} height={18} priority />
  </a>
  <a href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA" target="_blank" rel="noopener noreferrer">
    <div className="w-5 h-5 bg-blue-600 rounded-lg flex items-center justify-center">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1000 1000"
        width={16}
        height={16}
      >
        <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd"/>
      </svg>
    </div>
  </a>
</div>
          </div>

          {/* Middle Section - Logo and Menu */}
          <div className="flex justify-between items-center w-full h-[40px] md:h-[60px] px-4 md:px-8 py-3 border-t border-gray-100">
            <div className="flex flex-col relative h-[25px] md:h-[35px] bottom-[30px] md:bottom-[40px]">
              <Link href="/">
                <Image src="/mt_logo_purple.png" alt="Mobile tent ru logo" width={100} height={22.26} className="md:w-32" priority />
              </Link>
            </div>

            {/* menu opener stays a button (opens modal) */}
            <button 
              className="relative top-[15px] md:top-[25px] w-11 h-11 flex items-center justify-center"
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="w-[30px] h-[22px] md:w-[36px] md:h-[26px] bg-[url(/menue.webp)] bg-contain" />
            </button>
          </div>
        </div>

        {/* Bottom Section - Search Bar */}
        <div className="flex w-full px-4 md:px-8 py-3 bg-transparent max-w-4xl mx-auto" ref={searchRef}>
          {/* catalog opener stays a button (opens drawer) */}
          <button 
            className="flex items-center justify-center px-4 md:px-6 py-3 bg-[#f2f4f7] rounded-l-[50px] border-y border-l border-gray-200"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Image src="/group-3.webp" alt="Catalog icon" width={15} height={15} className="md:w-5 md:h-5" priority />
            <span className="hidden md:block ml-2 text-sm font-semibold text-[#232c42]">Каталог</span>
          </button>
          
          <div className="flex-1 flex items-center bg-white rounded-r-[50px] pl-3 pr-2 py-2 border border-gray-200 relative">
            <Input
              className="w-full text-base md:text-lg border-none focus-visible:ring-0"
              placeholder="Поиск по 1000+ товарам"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearchSubmit();
                }
              }}
              onFocus={() => {
                if (searchQuery.trim() && searchResults.length > 0) {
                  setShowSearchResults(true);
                }
              }}
            />
            <Button 
              className="bg-[#4f5d80] rounded-full p-2 md:p-3"
              onClick={handleSearchSubmit}
            >
              <SearchIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Search Results - SINGLE IMPLEMENTATION */}
<div className="block lg:hidden">
  {showSearchResults && (
    <SearchResultsDropdownMobile 
      results={searchResults}
      onProductSelect={handleProductSelect}
    />
  )}
</div>

      {/* City Selector Modal */}
      {isCitySelectorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <button
                onClick={() => setIsCitySelectorOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              >
                <XIcon className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold mb-4">Выберите ваш город</h2>
              <CitySelector />
            </div>
          </div>
        </div>
      )}

      {/* Main Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-y-auto relative">
            <div className="p-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              >
                <XIcon className="w-5 h-5 text-black" />
              </button>

              <div className="flex flex-col items-center mt-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.text}
                    href={item.path}
                    className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600 text-center w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
  
              <div className="mt-8 border-t border-gray-200 pt-6">
                {/* Working Hours */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <Image src="/group-7.webp" alt="Clock icon" width={12} height={12} priority />
                  </div>
                  <div>
                    <p className="font-semibold text-[#232c42] text-sm">с 09:00 - 22:00 МСК</p>
                    <p className="font-normal text-[#232c42] text-sm">с ПН - ПТ</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <Image src="/group-5.webp" alt="Phone icon" width={12} height={12} priority />
                  </div>
                  <div>
                    <a href="tel:+7 (495) 760-42-20" className="block font-normal text-[#232c42] text-sm hover:text-blue-600">
                      +7 (495) 760-42-20
                    </a>
                    <a href="tel:+7 (985) 760-42-20" className="block font-normal text-[#232c42] text-sm hover:text-blue-600">
                     +7 (985) 760-42-20
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <MailIcon className="w-4 h-4 text-white" />
                  </div>
                  <a href="mailto:info@mobile-tent.ru" className="font-normal text-[#232c42] text-sm hover:text-blue-600">
                    info@mobile-tent.ru
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3 pb-4">
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowHelpModal(true);
                    }}
                    className="w-full h-12 bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] rounded-[50px] text-white hover:from-[#3c6cec] hover:via-[#6fa7ff] hover:to-[#73a8ff] shadow-md"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <HelpCircle className="w-5 h-5" />
                      <span className="font-semibold text-white text-base">
                        Помочь с подбором
                      </span>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowCallMeModal(true);
                    }}
                    className="w-full h-12 rounded-[50px] border-[#527dc5] text-[#527dc5] hover:bg-[#f2f4f7] hover:text-[#527dc5] hover:border-[#527dc5] shadow_sm group"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5 text-[#527dc5] group-hover:text-[#527dc5]" />
                      <span className="font-semibold text-[#527dc5] text-base">
                        Перезвоните мне
                      </span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify_center bg-black/50 p-4">
          <Frameofhelp 
            showMobileModal={true}
            onClose={() => setShowHelpModal(false)}
          />
        </div>
      )}

      {/* Call Me Modal */}
      {showCallMeModal && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-md">
            <Framecallme 
              isExternalTrigger={true}
              onClose={() => setShowCallMeModal(false)}
            />
          </div>
        </div>
      )}

      {/* Add padding to main content to prevent overlap */}
      <div className="block lg:hidden pt-[180px]"></div>

      {isMobileMenuOpen && (
        <Frame
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;