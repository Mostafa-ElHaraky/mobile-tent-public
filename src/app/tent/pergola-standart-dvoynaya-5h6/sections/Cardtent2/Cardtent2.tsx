'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { Card } from "../../../../../components/ui/card";
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection";
import { CustomizationOptionsSection } from "./sections/CustomizationOptionsSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { RelatedProductsSection } from "./sections/RelatedProductsSection";
import { SizeSelectionSection } from "./sections/SizeSelectionSection";
import { ReactElement } from 'react';
import Image from 'next/image';
import Consultaionfor3d from '../../../../../components/ui/Consultaionfor3d'; 
import { useState, useRef} from 'react'; 
import HitSales from "@/components/ui/HitSales";

export const Cardtent2 = (): ReactElement => {
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

  const contactInfo = [
    { icon: "/group-8.png", text: "+7 (499) 113-36-60" },
    { icon: "/group-9.png", text: "8 (800) 302-46-31" },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const docContainerRef = useRef<HTMLDivElement>(null);

  const documents = [
    { title: "Инструкция по сборке", icon: "/document-icon.svg", image: "/assembly-guide.jpg", description: "Подробное руководство по установке шатра" },
    { title: "Сертификат качества", icon: "/certificate-icon.svg", image: "/quality-certificate.jpg", description: "Подтверждение соответствия стандартам" },
    { title: "Гарантийный талон", icon: "/warranty-icon.svg", image: "/warranty-card.jpg", description: "Гарантия производителя на продукцию" },
    { title: "Руководство пользователя", icon: "/manual-icon.svg", image: "/user-manual.jpg", description: "Инструкция по эксплуатации шатра" },
    { title: "Схема конструкции", icon: "/blueprint-icon.svg", image: "/structure-diagram.jpg", description: "Технические чертежи каркаса" }
  ];

  const videos = [
    { id: 1, title: "Видео про шатер", url: "https://rutube.ru/video/77871ba30cfd4c611b1ef1c1582e9912", thumbnail: "/bg-rutube.png" },
    { id: 2, title: "3D обзор арочного шатра", url: "https://rutube.ru/video/837215ade7bc71cd24327fe5fed75809/", thumbnail: "/kopal1.png" },
    { id: 3, title: "Установка шатра", url: "https://rutube.ru/video/ac34a17e3572ac3925c698e52ad2b429/", thumbnail: "/bg-rutube3.png" },
    { id: 4, title: "Интерьер шатра", url: "https://rutube.ru/video/10bc97b3df79d9ac37967a39b1037a5f/", thumbnail: "/bg-rutube4.png" }
  ];

  const scrollByAmount = 340;
  const nextDoc = () => docContainerRef.current?.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
  const prevDoc = () => docContainerRef.current?.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === videos.length - 2 ? 0 : prevIndex + 2);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? videos.length - 2 : prevIndex - 2);
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block relative w-full max-w-[1440px] mx-auto bg-white">
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
          <SizeSelectionSection />

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
                    <a href="https://t.me/+79770893996?start=14594990928" target="_blank" rel="noopener noreferrer">
                      <Image
                        className="absolute top-[3px] left-0.5"
                        src="/group.png"
                        alt="Telegram icon"
                        width={21}
                        height={18}
                      />
                    </a>
                  </div>
                  <div className="relative w-6 h-6">
                    <a href="https://api.whatsapp.com/send/?phone=79805109568" target="_blank" rel="noopener noreferrer">
                      <Image
                        className="absolute top-0.5 left-0.5"
                        src="/group-1.png"
                        alt="WhatsApp icon"
                        width={20}
                        height={20}
                      />
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
                            src={`/contact1-group-${index === 0 ? 9 : 10}.png`}
                            alt="Phone icon"
                            width={12}
                            height={12}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      {/* Make phone number clickable */}
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
                    <Image src="/contact1-group-11.png" alt="Email icon" width={15} height={11} />
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href="mailto:info@mobile-tent.ru"
                      className="text-sm text-[#232c42] font-raleway hover:underline"
                    >
                      info@mobile-tent.ru
                    </a>
                    <Image src="/contact1-group-12.png" alt="Copy icon" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full px-12 mt-8">
            <div className="relative mt-4">
              {/* Main heading */}
              <h2 className="font-semibold text-[#394355] text-4xl leading-normal [font-family:'Raleway',Helvetica] text-center mb-8">
                Видео про шатер
              </h2>

              {/* Carousel container */}
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
                    
                    {/* Video title */}
                    <h3 className="font-semibold text-[#394355] text-xl mt-4 text-center">
                      {video.title}
                    </h3>
                  </div>
                ))}

                {/* Navigation buttons */}
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
                      src="/GROP-10.png"
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
                      src="/GROP-11.png"
                    />
                  </Button>
                </div>
              </div>

              {/* Pagination indicators */}
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

          <div className="w-full px-12 mt-16 relative">
            {/* Title */}
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

            {/* Scrollable Document Cards */}
            <div className="relative">
              {/* Arrow buttons */}
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
                    src="/GROP-10.png"
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
                    src="/GROP-11.png"
                  />
                </Button>
              </div>

              {/* Cards Container */}
              <div
                ref={docContainerRef}
                className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
              >
                {documents.map((doc, index) => (
                  <Card
                    key={index}
                    className="min-w-[318px] h-[460px] bg-[#e8edf7] border-0 rounded-[20px] flex flex-col items-center p-6 hover:shadow-lg transition-all"
                  >
                    {/* Placeholder or image */}
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-300" />
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-[80px] h-[80px] mb-4 bg-gray-400 rounded-full" />
                      <p className="text-[#394355] text-lg font-medium mt-2 text-center">
                        {doc.title}
                      </p>
                      <p className="text-[#5a6a85] text-sm mt-2 text-center max-w-xs">
                        {doc.description}
                      </p>
                    </div>
                    <Button className="mt-4 bg-[#3C6CEC] hover:bg-[#2a5ad8] text-white py-2 px-6 rounded-full transition-colors duration-300">
                      Скачать PDF
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Document Upload Section */}
          <HitSales />

          {/* Related Products Section */}
          <RelatedProductsSection />
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
          <SizeSelectionSection />
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
              {/* Social Media Icons */}
              <div className="flex justify-center gap-6">
                <a href="https://t.me/+79770893996?start=14594990928" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                    <Image
                      src="/group.png"
                      alt="Telegram icon"
                      width={21}
                      height={18}
                    />
                  </div>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=79805109568" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                    <Image
                      src="/group-1.png"
                      alt="WhatsApp icon"
                      width={20}
                      height={20}
                    />
                  </div>
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex flex-col gap-3 w-full items-center">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image
                        src={`/contact1-group-${index === 0 ? 9 : 10}.png`}
                        alt="Phone icon"
                        width={12}
                        height={12}
                        className="object-contain"
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
                  <Image src="/contact1-group-11.png" alt="Email icon" width={15} height={11} />
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href="mailto:info@mobile-tent.ru"
                    className="text-sm text-[#232c42] font-raleway hover:underline"
                  >
                    info@mobile-tent.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full mt-8">
          <div className="relative mt-4">
            {/* Main heading */}
            <h2 className="font-semibold text-[#394355] text-2xl text-center mb-6 [font-family:'Raleway',Helvetica]">
              Видео про шатер
            </h2>

            {/* Carousel container */}
            <div className="flex flex-col gap-6 relative">
              {/* Video cards */}
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

              {/* Navigation buttons - below cards */}
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
                    src="/GROP-10.png"
                  />
                </Button>
                
                {/* Pagination indicators */}
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
                    src="/GROP-11.png"
                  />
                </Button>
              </div>

            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="w-full mt-12 px-4">
          {/* Title */}
          <h2 className="font-semibold text-[#394355] text-2xl text-center mb-6 [font-family:'Raleway',Helvetica]">
            Документы на шатер
          </h2>

          {/* Scrollable Documents Container */}
          <div className="relative">
            {/* Documents Grid with horizontal scroll */}
            <div 
              ref={docContainerRef}
              className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
            >
              {documents.map((doc, index) => (
                <Card
                  key={index}
                  className="min-w-[280px] bg-[#e8edf7] border-0 rounded-[20px] flex flex-col items-center p-4 flex-shrink-0 snap-start"
                >
                  <div className="w-16 h-16 mb-3 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  </div>
                  <p className="text-[#394355] text-base font-medium mt-2 text-center">
                    {doc.title}
                  </p>
                  <p className="text-[#5a6a85] text-xs mt-1 text-center max-w-[200px]">
                    {doc.description}
                  </p>
                  <Button className="mt-3 bg-[#3C6CEC] hover:bg-[#2a5ad8] text-white py-1 px-4 rounded-full text-xs">
                    Скачать PDF
                  </Button>
                </Card>
              ))}
            </div>

            {/* Navigation buttons */}
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
                  src="/GROP-10.png"
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
                  src="/GROP-11.png"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="my-6 px-4">
          <HitSales />
        </div>

        {/* Related Products Section */}
        <div className="my-6 px-4">
          <RelatedProductsSection />
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
