'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { Card } from "../../../../../components/ui/card";
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection";
import { CustomizationOptionsSection } from "./sections/CustomizationOptionsSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { Quizshatry } from "../../../../../components/ui/Quizshatry";
import { SizeSelectionSection } from "./sections/SizeSelectionSection";
import { ReactElement } from 'react';
import Image from 'next/image';
import Consultaionfor3d from '../../../../../components/ui/Consultaionfor3d'; 
import { useState, useRef, useEffect } from 'react'; 
import HitSales from "@/components/ui/HitSales";

// ⬇️ UPDATED: import products and utility function
import { allProducts, type Product } from "@/data/hitSalesData";
import { getProductsByType } from "@/utils/products"; // Import the utility function

interface Cardtent2Props {
  desktopContent?: string;
  mobileContent?: string;

  contacts?: {
    phone1: string;
    phone2: string;
    email: string;
    telegram: string;
    whatsapp: string;
    office: {
      name: string;
      address: string;
      map_url: string;
      hours: string;
      appointment: string;
    };
    production: {
      name: string;
      address: string;
      map_url: string;
      hours: string;
      appointment: string;
    };
  };
}

export const Cardtent2 = ({ 
  desktopContent,
  mobileContent,
  contacts
}: Cardtent2Props): ReactElement => {
  const navigationTabs = [
    { id: 1, label: "Описание и характеристики", active: true },
    { id: 2, label: "Комплектация", active: false },
    { id: 3, label: "Доп. опции", active: false },
    { id: 4, label: "Тип стен", active: false },
    { id: 5, label: "Документы", active: false },
    { id: 6, label: "Доставка", active: false },
    { id: 7, label: "Оплата", active: false },
  ];

  // NEW: active tab state (drives CustomerReviewsSection)
  const [activeTabLabel, setActiveTabLabel] = useState<string>(navigationTabs[0].label);

  const contactInfo = contacts ? [
    { icon: "/group-8.webp", text: contacts.phone1 || "+7 (495) 760-42-20" },
    { icon: "/group-9.webp", text: contacts.phone2 || "+7 (985) 760-42-20" },
  ] : [
    { icon: "/group-8.webp", text: "+7 (495) 760-42-20" },
    { icon: "/group-9.webp", text: "+7 (985) 760-42-20" },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ FIX: separate refs for desktop and mobile documents lanes
  const docContainerDesktopRef = useRef<HTMLDivElement>(null);
  const docContainerMobileRef = useRef<HTMLDivElement>(null);

  // ✅ Determine which ref to use (syncs on resize too)
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const handle = () => setIsDesktop(mql.matches);
    handle();
    mql.addEventListener ? mql.addEventListener('change', handle) : mql.addListener(handle);
    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', handle) : mql.removeListener(handle);
    };
  }, []);

  // --- UPDATED: actual PDF documents from the /files/ directory with optional preview images
  type DocItem = { title: string; filename: string; preview?: string };
const pdfFiles: DocItem[] = [
  { title: "Паспорт ША1010 Дюна", filename: "1137 Паспорт ША1010 Дюна.pdf" },
  { title: "Сертификат 1", filename: "certif1.pdf" },
  { title: "Сертификат", filename: "certif.pdf" },
  { title: "Cookie Policy", filename: "cookie-policy.pdf" },
  { title: "Пожарный сертификат", filename: "fire.pdf" },
  { title: "Письмо", filename: "letter.pdf" },
  { title: "Privacy Policy", filename: "privacy-policy.pdf" },
  { title: "Технические характеристики", filename: "technical.pdf" },
  { title: "Гарантийная карта ГТ ФШ", filename: "Гарантийная карта ГТ ФШ.pdf" },
  { title: "Письмо Диксон изменение названия", filename: "Письмо Диксон изменение названия.pdf" },
  { title: "Пожарный TUTENT FR", filename: "Пожарный TUTENT FR с 03.08.2023 по 02.08.2026.pdf" },
  { title: "Сертификат ЗТК_ДИЛ78-01070", filename: "Сертификат ЗТК_ДИЛ78-01070.pdf" },
  { title: "Сертификат на цинковый сплав", filename: "Сертификат на цинковый сплав.pdf" },
  { title: "Сертификат соответствия Гранд Тент", filename: "Сертификат_соответсвия_Гранд_Тент.pdf" },
  { title: "Сертификат Стилфаст ч1", filename: "Сертификат Стилфаст ч1 до 2025 г.pdf" },
  { title: "Сертификат Стилфаст ч2", filename: "Сертификат Стилфаст ч2 до 2025 г.pdf" },
  { title: "Сертификат тросы", filename: "Сертификат тросы по 19.12.2024.pdf" },
  { title: "Сертификат ЦСДС ООО «ЗТК» ИСО качество", filename: "Сертификат ЦСДС ООО «ЗТК» ИСО качество.pdf" },
  { title: "Тентовые конструкции. Гарантийная карта Бородина", filename: "Тентовые конструкции. Гарантийная карта Бородина.pdf" },
  { title: "Технические характеристики ткань 900", filename: "Технические характеристики ткань 900.pdf" },
].map(doc => ({
  ...doc,
  preview: `/files/previews/${doc.filename.replace('.pdf', '.jpg')}`
}));

  const documents: DocItem[] = pdfFiles; // use all, you can slice if needed

  const videos = [
    { id: 1, title: "Видео про шатер", url: "https://rutube.ru/video/77871ba30cfd4c611b1ef1c1582e9912", thumbnail: "/bg-rutube.webp" },
    { id: 2, title: "3D обзор арочного шатра", url: "https://rutube.ru/video/837215ade7bc71cd24327fe5fed75809/", thumbnail: "/kopal1.webp" },
    { id: 3, title: "Установка шатра", url: "https://rutube.ru/video/ac34a17e3572ac3925c698e52ad2b429/", thumbnail: "/bg-rutube3.webp" },
    { id: 4, title: "Интерьер шатра", url: "https://rutube.ru/video/10bc97b3df79d9ac37967a39b1037a5f/", thumbnail: "/bg-rutube4.webp" }
  ];

  const scrollByAmount = 340;

  // ✅ These now scroll the visible container only
  const nextDoc = () => {
    const el = isDesktop ? docContainerDesktopRef.current : docContainerMobileRef.current;
    el?.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
  };
  const prevDoc = () => {
    const el = isDesktop ? docContainerDesktopRef.current : docContainerMobileRef.current;
    el?.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === videos.length - 2 ? 0 : prevIndex + 2);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? videos.length - 2 : prevIndex - 2);
  };

  // ⬇️ UPDATED: State for other sizes products using utility function
  const [otherSizes, setOtherSizes] = useState<Product[]>([]);
  const [loadingOtherSizes, setLoadingOtherSizes] = useState(true);

  // ⬇️ UPDATED: Fetch other sizes products on mount using utility function
  useEffect(() => {
    const fetchOtherSizes = async () => {
      try {
        setLoadingOtherSizes(true);
        const products = await getProductsByType('Мобильные');
        setOtherSizes(products);
      } catch (error) {
        console.error('Error fetching other sizes:', error);
        // Fallback to static filtering
        const staticFiltered = allProducts.filter((p) => p.type === 'Мобильные');
        setOtherSizes(staticFiltered);
      } finally {
        setLoadingOtherSizes(false);
      }
    };
    
    fetchOtherSizes();
  }, []);

  // ⬇️ UPDATED: desktop horizontal scroller for "other sizes"
  const sizesRef = useRef<HTMLDivElement>(null);
  const scrollSizes = (dir: 'left' | 'right') => {
    const el = sizesRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  // ⬇️ UPDATED: mobile index for "other sizes"
  const [sizesMobileIndex, setSizesMobileIndex] = useState(0);
  const sizesNext = () => setSizesMobileIndex((prev) => (prev + 1) % otherSizes.length);
  const sizesPrev = () => setSizesMobileIndex((prev) => (prev - 1 + otherSizes.length) % otherSizes.length);

  // --- NEW: Document preview component with JPEG fallback
  const DocPreview = ({ preview, title }: { preview?: string; title: string }) => {
    const [imgError, setImgError] = useState(false);

    if (!preview || imgError) {
      // Fallback to the old PDF icon
      return (
        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[#f0f4fa] flex items-center justify-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#3C6CEC]"
          >
            <path
              d="M20 9H16C15.4477 9 15 8.55228 15 8V4H8C7.44772 4 7 4.44772 7 5V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V13H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H15L20 8V9Z"
              fill="currentColor"
            />
            <path
              d="M16 11H18L13 17L10 14L7 17V15L10 12L13 15L16 11Z"
              fill="currentColor"
            />
          </svg>
        </div>
      );
    }

    return (
      <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[#f0f4fa]">
        <Image
          src={preview}
          alt={`Предпросмотр документа: ${title}`}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 280px, 318px"
        />
      </div>
    );
  };

  // FIXED: DocActions component with proper URL handling
  const DocActions = ({ doc }: { doc: DocItem }) => {
    // Create a safe URL without double encoding
    const fileUrl = `/files/${doc.filename}`;
    
    return (
      <div className="mt-4 flex items-center gap-2">
        <a href={fileUrl} target="_blank" rel="noopener noreferrer" aria-label={`Просмотр: ${doc.title}`}>
          <Button className="rounded-full px-4 py-2 bg-[#3C6CEC] hover:bg-[#2a5ad8] text-white text-sm">
            Просмотр
          </Button>
        </a>
        <a href={fileUrl} download aria-label={`Скачать: ${doc.title}`}>
          <Button variant="outline" className="rounded-full px-4 py-2 border-[#3C6CEC] text-[#3C6CEC] text-sm">
            Скачать
          </Button>
        </a>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block relative w-full max-w-[1440px] top-[30px] mx-auto bg-white">
        {/* Navigation Tabs */}
        <div className="flex items-start gap-4 p-12 pt-[43px]">
          {navigationTabs.map((tab) => {
            const isActive = tab.label === activeTabLabel;
            return (
              <Button
                key={tab.id}
                onClick={() => setActiveTabLabel(tab.label)}
                aria-selected={isActive}
                variant={isActive ? "default" : "outline"}
                className={`rounded-[50px] ${
                  isActive
                    ? "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] text-white font-semibold"
                    : "bg-white text-[#394355] font-medium border-[#394355]"
                } px-4 py-2 h-auto [font-family:'Raleway',Helvetica] text-lg leading-6`}
              >
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Main Content Sections */}
        <div className="flex flex-col w-full">
          {/* Customer Reviews Section */}
          <CustomerReviewsSection activeTabLabel={activeTabLabel} />

          {/* Size Selection Section */}
          <SizeSelectionSection 
            desktopContent={desktopContent}
            mobileContent={mobileContent}
          />

          {/* Customization Options Section */}
          <CustomizationOptionsSection />

          {/* Featured Products Section */}
          <FeaturedProductsSection />

          <div className="w-full px-12 mt-4">
            <h2 className="font-semibold text-[#394355] text-4xl leading-normal [font-family:'Raleway',Helvetica]">
              и оснастить любыми опциями
            </h2>
          </div>

          {/* Image Gallery Section */}
          <ImageGallerySection />

          {/* Call to Action and Contact Section */}
          <div className="w-full px-12 mt-8 flex flex-wrap gap-8">
            <div className="flex flex-col gap-3 w-[580px]">
              <Button 
                className="w-[579px] h-[68px] rounded-2xl shadow-2 bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] text-white font-semibold text-base [font-family:'Raleway',Helvetica]"
                onClick={() => setIsPopupOpen(true)}
              >
                Отправить на просчет точной цены и получить КП
              </Button>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                Или свяжитесь по контактам
              </h3>

              <div className="flex items-start gap-[73px]">
                {/* Social Media Icons */}
                <div className="flex items-start gap-[18px]">
                  <div className="relative w-6 h-6">
                    <a href={contacts?.telegram || "https://t.me/+79857604220"} target="_blank" rel="noopener noreferrer">
                      <Image
                        className="absolute top-[3px] left-0.5"
                        src="/group.webp"
                        alt="Telegram icon"
                        width={21}
                        height={18}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="relative w-6 h-6">
                    <a href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA" target="_blank" rel="noopener noreferrer">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlSpace="preserve" 
                        viewBox="0 0 1000 1000"
                        width={20}
                        height={20}
                        className="absolute top-0.5 left-0.5"
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

                {/* Phone Numbers */}
                <div className="flex flex-col gap-3">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-[17px]">
                      <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                        <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                          <Image
                            src={`/contact1-group-${index === 0 ? 9 : 10}.webp`}
                            alt="Phone icon"
                            width={12}
                            height={12}
                            className="object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <a 
                        href={`tel:${contact.text.replace(/[^0-9+]/g, '')}`}
                        className="font-normal text-[#394355] text-sm [font-family:'Raleway',Helvetica] hover:underline"
                      >
                        {contact.text}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="flex items-center gap-[18px]">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                    <Image src="/contact1-group-11.webp" loading="lazy" alt="Email icon" width={15} height={11} />
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={`mailto:${contacts?.email || "info@mobile-tent.ru"}`}
                      className="text-sm text-[#232c42] font-raleway hover:underline"
                    >
                      {contacts?.email || "info@mobile-tent.ru"}
                    </a>
                    <Image src="/contact1-group-12.webp" loading="lazy" alt="Copy icon" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full px-12 mt-8">
            <div className="relative mt-4">
              <h2 className="font-semibold text-[#394355] text-4xl leading-normal [font-family:'Raleway',Helvetica] text-center mb-8">
                Видео про шатер
              </h2>
              <div className="flex gap-8 justify-center relative">
                {videos.slice(currentIndex, currentIndex + 2).map((video) => (
                  <div key={video.id} className="flex flex-col items-center">
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Card className="w-[656px] h-[394px] bg-[#e8edf7] border-0 rounded-[20px] overflow-hidden relative">
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${video.thumbnail})` }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-[75px] h-[75px] bg-white border-0 rounded-[37.5px] flex items-center justify-center hover:bg-gray-100"
                            >
                              <svg 
                                className="w-[25px] h-[29px] text-blue-600 ml-1" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </a>
                    <h3 className="font-semibold text-[#394355] text-xl mt-4 text-center">
                      {video.title}
                    </h3>
                  </div>
                ))}

                <div className="flex items-center justify-between absolute -inset-x-5 top-1/2 transform -translate-y-1/2 w-[calc(100%+60px)]">
                  <Button
                    onClick={prevSlide}
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] z-10"
                  >
                    <Image
                      width={14}
                      height={24}
                      className="w-3.5 h-6"
                      alt="Previous slide"
                      src="/GROP-10.webp"
                      loading="lazy"
                    />
                  </Button>
                  
                  <Button
                    onClick={nextSlide}
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] z-10"
                  >
                    <Image
                      width={14}
                      height={24}
                      className="w-3.5 h-6"
                      alt="Next slide"
                      src="/GROP-11.webp"
                      loading="lazy"
                    />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: videos.length / 2 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * 2)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index * 2 ? 'bg-[#3C6CEC]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Documents Section with Image Previews */}
          <div className="w-full px-12 mt-16 relative">
            <h2
              className="text-left mb-8"
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 600,
                fontSize: '36px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#394355',
              }}
            >
              Документы на шатер
            </h2>

            <div className="relative">
              <div className="absolute left-[-28px] top-1/2 transform -translate-y-1/2 z-10">
                <Button
                  onClick={prevDoc}
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <Image
                    width={14}
                    height={24}
                    className="w-3.5 h-6"
                    alt="Previous slide"
                    src="/GROP-10.webp"
                    loading="lazy"
                  />
                </Button>
              </div>
              <div className="absolute right-[-28px] top-1/2 transform -translate-y-1/2 z-10">
                <Button
                  onClick={nextDoc}
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <Image
                    width={14}
                    height={24}
                    className="w-3.5 h-6"
                    alt="Next slide"
                    src="/GROP-11.webp"
                    loading="lazy"
                  />
                </Button>
              </div>

              <div
                ref={docContainerDesktopRef}
                className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
              >
                {documents.map((doc, index) => (
                  <Card
                    key={index}
                    className="min-w-[318px] h-[460px] bg-[#f2f5fb] border border-[#e6ebf5] rounded-[20px] flex flex-col p-6 hover:shadow-lg transition-all"
                  >
                    <DocPreview preview={doc.preview} title={doc.title} />
                    <div className="mt-5">
                      <p className="text-[#394355] text-lg font-semibold leading-snug line-clamp-2">
                        {doc.title}
                      </p>
                      <p className="text-[#5a6a85] text-sm mt-2">Документ PDF</p>
                      <DocActions doc={doc} />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* "Этот шатер в других размерах" — DESKTOP */}
          <div className="w-full px-12 mt-16">
            <h2 className="font-semibold text-[#394355] text-4xl leading-tight [font-family:'Raleway',Helvetica] mb-6">
              Этот шатер в других размерах
            </h2>

            {loadingOtherSizes ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">Загрузка товаров...</p>
              </div>
            ) : otherSizes.length > 0 ? (
              <div className="relative">
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-10">
                  <Button
                    onClick={() => scrollSizes('left')}
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                    <Image width={14} height={24} className="w-3.5 h-6" alt="Prev" src="/GROP-10.webp" loading="lazy" />
                  </Button>
                </div>
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <Button
                    onClick={() => scrollSizes('right')}
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                    <Image width={14} height={24} className="w-3.5 h-6" alt="Next" src="/GROP-11.webp" loading="lazy" />
                  </Button>
                </div>

                <div ref={sizesRef} className="flex gap-6 overflow-x-auto scroll-smooth pb-2 scrollbar-hide">
                  {otherSizes.map((p) => (
                    <a key={p.id} href={`/tent/${p.id}`} className="min-w-[432px]">
                      <Card className="w-[432px] bg-white rounded-[20px] border border-[#dddddd] shadow-md hover:shadow-lg transition-shadow">
                        <div className="p-6">
                          <div className="relative w-full h-[200px] overflow-hidden rounded-lg bg-[#f7f8fc]">
                            <Image
                              src={p.images[0]}
                              alt={p.title}
                              fill
                              className="object-contain"
                              loading="lazy"
                            />
                          </div>

                          <div className="mt-4">
                            <h3 className="font-bold text-[#394355] text-xl">{p.title}</h3>
                            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-base text-[#394355]">
                              <div>Размер: {p.specs.size}</div>
                              <div>Площадь: {p.specs.area}</div>
                              <div>Вместимость: {p.specs.capacity}</div>
                              <div>Наличие: {p.specs.availability}</div>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="line-through text-gray-500">{p.price.original}</span>
                                <span className="text-white text-xs px-2 py-1 rounded-md bg-red-500">{p.price.discount}</span>
                              </div>
                              <div className="font-bold text-2xl text-[#394355]">
                                {p.price.current}
                              </div>
                            </div>
                            <div className="mt-1">
                              <small className="text-xs italic text-gray-500">* В зависимости от включенных опций</small>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-600">
                Товары не найдены
              </div>
            )}
          </div>

          {/* Related Products Section */}
          <Quizshatry />
        </div>

        {/* Consultation Popup */}
        {isPopupOpen && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => setIsPopupOpen(false)}
          >
            <div 
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Consultaionfor3d onClose={() => setIsPopupOpen(false)} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white ">
        {/* Navigation Tabs - Horizontal Scroll */}
        <div className="w-full overflow-x-auto py-4 hide-scrollbar px-4">
          <div className="flex gap-2 px-2">
            {navigationTabs.map((tab) => {
              const isActive = tab.label === activeTabLabel;
              return (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTabLabel(tab.label)}
                  aria-selected={isActive}
                  variant={isActive ? "default" : "outline"}
                  className={`whitespace-nowrap rounded-[50px] ${
                    isActive
                      ? "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] text-white font-semibold"
                      : "bg-white text-[#394355] font-medium border-[#394355]"
                  } px-4 py-2 h-auto [font-family:'Raleway',Helvetica] text-sm`}
                >
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="my-6">
          <CustomerReviewsSection activeTabLabel={activeTabLabel} />
        </div>

        {/* Size Selection Section */}
        <div className="my-6">
          <SizeSelectionSection 
            desktopContent={desktopContent}
            mobileContent={mobileContent}
          />
        </div>

        {/* Customization Options Section */}
        <div className="my-6">
          <CustomizationOptionsSection />
        </div>

        {/* Featured Products Section */}
        <div className="my-6">
          <FeaturedProductsSection />
        </div>

        <div className="w-full mt-4">
          <h2 className="font-semibold text-[#394355] text-2xl text-center [font-family:'Raleway',Helvetica]">
            и оснастить любыми опциями
          </h2>
        </div>

        {/* Image Gallery Section */}
        <div className="my-6">
          <ImageGallerySection />
        </div>

        {/* Call to Action and Contact Section */}
        <div className="w-full mt-8 flex flex-col gap-6">
          <Button 
            className="w-full h-14 rounded-2xl bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] text-white font-semibold text-sm [font-family:'Raleway',Helvetica]"
            onClick={() => setIsPopupOpen(true)}
          >
            Отправить на просчет точной цены и получить КП
          </Button>

          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-semibold text-[#394355] text-base text-center [font-family:'Raleway',Helvetica]">
              Или свяжитесь по контактам
            </h3>

            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex justify-center gap-6">
                <a href={contacts?.telegram || "https://t.me/+79857604220"} target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                    <Image
                      src="/group.webp"
                      alt="Telegram icon"
                      width={21}
                      height={18}
                      loading="lazy"
                    />
                  </div>
                </a>
                <a href="https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      xmlSpace="preserve" 
                      viewBox="0 0 1000 1000"
                      width={20}
                      height={20}
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
                  </div>
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex flex-col gap-3 w-full items-center">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image
                        src={`/contact1-group-${index === 0 ? 9 : 10}.webp`}
                        alt="Phone icon"
                        width={12}
                        height={12}
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                    <a 
                      href={`tel:${contact.text.replace(/[^0-9+]/g, '')}`}
                      className="font-normal text-[#394355] text-sm [font-family:'Raleway',Helvetica] hover:underline"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                  <Image src="/contact1-group-11.webp" loading="lazy" alt="Email icon" width={15} height={11} />
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={`mailto:${contacts?.email || "info@mobile-tent.ru"}`}
                    className="text-sm text-[#232c42] font-raleway hover:underline"
                  >
                    {contacts?.email || "info@mobile-tent.ru"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full mt-8">
          <div className="relative mt-4">
            <h2 className="font-semibold text-[#394355] text-2xl text-center mb-6 [font-family:'Raleway',Helvetica]">
              Видео про шатер
            </h2>

            <div className="flex flex-col gap-6 relative">
              {videos.slice(currentIndex, currentIndex + 2).map((video) => (
                <div key={video.id} className="flex flex-col items-center">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Card className="w-full h-56 bg-[#e8edf7] border-0 rounded-[20px] overflow-hidden relative">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${video.thumbnail})` }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-14 h-14 bg-white border-0 rounded-full flex items-center justify-center hover:bg-gray-100"
                          >
                            <svg 
                              className="w-6 h-6 text-blue-600 ml-0.5" 
                              viewBox="0 0 24 24" 
                              fill="currentColor"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </a>
                  
                  <h3 className="font-semibold text-[#394355] text-base mt-4 text-center">
                    {video.title}
                  </h3>
                </div>
              ))}

              <div className="flex items-center justify-center gap-4 mt-4">
                <Button
                  onClick={() => setCurrentIndex((prev) => prev === 0 ? videos.length - 2 : prev - 2)}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <Image
                    width={12}
                    height={20}
                    className="w-3 h-5"
                    alt="Previous slide"
                    src="/GROP-10.webp"
                    loading="lazy"
                  />
                </Button>
                
                <div className="flex justify-center gap-2">
                  {Array.from({ length: Math.ceil(videos.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index * 2)}
                      className={`w-2 h-2 rounded-full ${
                        currentIndex === index * 2 ? 'bg-[#3C6CEC]' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={() => setCurrentIndex((prev) => prev === videos.length - 2 ? 0 : prev + 2)}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <Image
                    width={12}
                    height={20}
                    className="w-3 h-5"
                    alt="Next slide"
                    src="/GROP-11.webp"
                    loading="lazy"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section (Mobile) with Image Previews */}
        <div className="w-full mt-12 px-4">
          <h2 className="font-semibold text-[#394355] text-2xl text-center mb-6 [font-family:'Raleway',Helvetica]">
            Документы на шатер
          </h2>

          <div className="relative">
            <div 
              ref={docContainerMobileRef}
              className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
            >
              {documents.map((doc, index) => (
                <Card
                  key={index}
                  className="min-w-[280px] bg-[#f2f5fb] border border-[#e6ebf5] rounded-[20px] p-4 flex-shrink-0 snap-start"
                >
                  <DocPreview preview={doc.preview} title={doc.title} />
                  <div className="mt-4">
                    <p className="text-[#394355] text-base font-semibold line-clamp-2">
                      {doc.title}
                    </p>
                    <p className="text-[#5a6a85] text-xs mt-1">Документ PDF</p>
                    <DocActions doc={doc} />
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <Button
                onClick={prevDoc}
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              >
                <Image
                  width={12}
                  height={20}
                  className="w-3 h-5"
                  alt="Previous document"
                  src="/GROP-10.webp"
                  loading="lazy"
                />
              </Button>

              <Button
                onClick={nextDoc}
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              >
                <Image
                  width={12}
                  height={20}
                  className="w-3 h-5"
                  alt="Next document"
                  src="/GROP-11.webp"
                  loading="lazy"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* "Этот шатер в других размерах" — MOBILE */}
        <div className="w-full mt-12 px-4">
          <h2 className="font-semibold text-[#394355] text-2xl text-center mb-6 [font-family:'Raleway',Helvetica]">
            Этот шатер в других размерах
          </h2>

          {loadingOtherSizes ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600">Загрузка товаров...</p>
            </div>
          ) : otherSizes.length > 0 ? (
            <>
              <a href={`/tent/${otherSizes[sizesMobileIndex].id}`}>
                <Card className="w-full bg-white rounded-[20px] border border-[#dddddd] shadow-md">
                  <div className="p-4">
                    <div className="relative w-full h-[200px] overflow-hidden rounded-lg bg-[#f7f8fc]">
                      <Image
                        src={otherSizes[sizesMobileIndex].images[0]}
                        alt={otherSizes[sizesMobileIndex].title}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="font-bold text-[#394355] text-lg">{otherSizes[sizesMobileIndex].title}</h3>
                      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-[#394355]">
                        <div>Размер: {otherSizes[sizesMobileIndex].specs.size}</div>
                        <div>Площадь: {otherSizes[sizesMobileIndex].specs.area}</div>
                        <div>Вместимость: {otherSizes[sizesMobileIndex].specs.capacity}</div>
                        <div>Наличие: {otherSizes[sizesMobileIndex].specs.availability}</div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="line-through text-gray-500 text-sm">{otherSizes[sizesMobileIndex].price.original}</span>
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                            {otherSizes[sizesMobileIndex].price.discount}
                          </span>
                        </div>
                        <div className="font-bold text-xl text-[#394355]">
                          {otherSizes[sizesMobileIndex].price.current}
                        </div>
                      </div>
                      <div className="mt-1">
                        <small className="text-xs italic text-gray-500">* В зависимости от включенных опций</small>
                      </div>
                    </div>
                  </div>
                </Card>
              </a>

              <div className="flex justify-center gap-8 mt-4">
                <Button
                  onClick={sizesPrev}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <Image loading="lazy" width={12} height={20} className="w-3 h-5" alt="Previous" src="/GROP-10.webp" />
                </Button>
                <Button
                  onClick={sizesNext}
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                  <Image loading="lazy" width={12} height={20} className="w-3 h-5" alt="Next" src="/GROP-11.webp" />
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-600">
              Товары не найдены
            </div>
          )}
        </div>

        {/* Related Products Section */}
        <div className="my-6 px-4">
          <Quizshatry />
        </div>
      </div>
      
      {/* Document Upload Section */}
      <div className="my-6 px-4">
        <div className="max-w-[1440px] mx-auto">
          <HitSales />
        </div>
      </div>

      {/* Consultation Popup */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setIsPopupOpen(false)}
        >
          <div 
            className="relative mx-4 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Consultaionfor3d onClose={() => setIsPopupOpen(false)} />
          </div>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};