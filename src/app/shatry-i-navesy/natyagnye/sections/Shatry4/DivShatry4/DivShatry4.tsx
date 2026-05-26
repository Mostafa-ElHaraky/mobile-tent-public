'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';
import Askcontact from '../../../../../../components/ui/Askcontact';

export const DivShatry4 = (): ReactElement => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showAskContact, setShowAskContact] = useState(false); // State for contact modal
  
  // Navigation handler with Ctrl+click support
  const handleNavigation = useCallback((path: string, event: React.MouseEvent) => {
    if (event.ctrlKey || event.metaKey) {
      window.open(path, '_blank');
    } else {
      router.push(path);
    }
  }, [router]);

  // Data for the service cards
  const serviceCards = [
    { title: "Компания", content: "Загородный отель" },
    { title: "Город", content: "Москва" },
    { title: "Срок", content: "1 месяц" },
    { title: "Площадь", content: "250 м2" },
  ];

  // Data for the "Сделали" section items
  const accomplishments = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
  ];

  // Data for the small preview images
  const previewImages = [
    "/spher1.webp",
    "/10x10,2.webp",
    "/10x40,2.webp",
    "/12x12,1.webp",
  ];

  // Navigation handlers
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % previewImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full py-16 relative bottom-[5px] rounded-[30px] bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#435575_107.93%)]">
        {/* Thank You Letter Modal */}
        {showThankYouModal && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowThankYouModal(false)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/Image-18.webp"
                alt="Благодарственное письмо"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 rounded-full hover:bg-white"
                onClick={() => setShowThankYouModal(false)}
              >
                <XIcon className="h-6 w-6 text-black" />
              </Button>
              <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-lg">
                <span className="font-bold text-black">Благодарственное письмо</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Ask Contact Modal - using your existing component */}
        {showAskContact && <Askcontact onClose={() => setShowAskContact(false)} />}

        <div className="flex flex-col md:flex-row gap-12 ml-8">
          {/* Left column with text content */}
          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <div className="font-medium text-[#ffffff] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                    Более 60% становятся постоянными клиентами
                  </div>
                </div>

                <div className="w-[528px] [font-family:'Raleway',Helvetica] text-4xl leading-normal">
                  <span className="font-medium text-[#ffffff]">
                    Посмотрите, кто уже пользуется нашими{" "}
                  </span>
                  <span className="font-bold text-[#527dc5]">шатрами</span>
                </div>
              </div>

              <div className="w-[496px] font-semibold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                До этого был шатер из китайской ткани. Через год уже испортился
                внешний вид. Ваш шатер заметно лучше выглядит
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                  Задача
                </h3>
                <p className="w-[418px] font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                  Сделали
                </h3>
                <div className="flex flex-col gap-4">
                  {accomplishments.map((text, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="relative w-6 h-6">
                        <Image
                          className="absolute w-6 h-[17px] top-[3px] left-0"
                          alt="Check icon"
                          src={`/GROP-${index + 4}.webp`}
                          width={24}
                          height={17}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="w-[358px] font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom section with review button and letter */}
            <div className="flex items-center gap-[33px] mt-12">
              <Button
                variant="outline"
                className="flex items-center gap-[15px] border-0 px-6 py-8 bg-white rounded-[50px] border-solid shadow-[var(--)] backdrop-blur-[79px]"
                onClick={(e) => handleNavigation('/reviews', e)}
              >
                <div className="relative w-[50px] h-[50px]">
                  <div className="relative w-[35px] h-[35px] top-2 left-2 bg-[url(/GROP-9.webp)] bg-[100%_100%]" />
                </div>
                <span className="font-bold text-[#000000] text-base [font-family:'Raleway',Helvetica]">
                  Смотреть отзыв
                </span>
              </Button>

              <div className="flex items-center gap-[18px] cursor-pointer" onClick={() => setShowThankYouModal(true)}>
                <Image
                  className="relative w-[86px] h-[62px] mt-[-54px] mb-[-62px] ml-[-18px] backdrop-blur-[79px] object-cover hover:scale-105 transition-transform"
                  alt="Thank you letter"
                  src="/Image-18.webp"
                  width={86}
                  height={62}
                  loading="lazy"
                />
                <div className="w-[150px] font-semibold text-[#ffffff] text-base leading-5 [font-family:'Raleway',Helvetica] hover:underline">
                  Благодарственное письмо
                </div>
              </div>
            </div>

            {/* Contact section */}
            <div className="flex flex-col gap-3 mt-6">
              <p className="w-[412px] font-normal text-[#ffffff] text-xs text-center [font-family:'Raleway',Helvetica]">
                Свяжитесь с любым из наших клиентов, чтобы спросить все, что
                захотите
              </p>
              <Button 
                className="w-[412px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                onClick={() => setShowAskContact(true)} // Open contact modal
              >
                <span className="font-semibold text-white text-base text-center [font-family:'Raleway',Helvetica]">
                  Запросить контакты
                </span>
              </Button>
            </div>
          </div>

          {/* Right column with preview images, main photo, and service cards */}
          <div className="flex flex-col">
            {/* Preview images row - now clickable */}
            <div className="flex gap-4 mb-4 ml-[-20px]">
              {previewImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative bottom-[20px] w-[182px] h-[120px] rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'ring-4 ring-blue-500 scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="object-cover"
                      fill
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Main image section with enhanced navigation */}
            <div className="relative w-full">
              <div className="relative w-[808px] h-[785px] -top-2.5 left-[-38px] rounded-[30px] overflow-hidden">
                <Image
                  src={previewImages[currentImageIndex]}
                  alt="Main showcase"
                  className="object-cover"
                  fill
                  loading="lazy"
                />
                
                {/* Enhanced Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-4 p-4 bg-white/90 rounded-full border-0 shadow-lg hover:bg-white transition-all duration-300 transform -translate-y-1/2 w-12 h-12"
                  onClick={prevImage}
                >
                  <ChevronLeftIcon className="h-6 w-6 text-blue-600" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-4 p-4 bg-white/90 rounded-full border-0 shadow-lg hover:bg-white transition-all duration-300 transform -translate-y-1/2 w-12 h-12"
                  onClick={nextImage}
                >
                  <ChevronRightIcon className="h-6 w-6 text-blue-600" />
                </Button>

                {/* Action buttons */}
                <Button
                  variant="outline"
                  className="h-[60px] absolute top-[633px] left-[66px] border-0 inline-flex items-center gap-2.5 pl-6 pr-3 py-3 bg-white rounded-[50px] border-solid shadow-[var(--)] backdrop-blur-[79px]"
                  onClick={(e) => handleNavigation('/our-projects', e)}
                >
                  <span className="font-bold text-[#000000] text-base [font-family:'Raleway',Helvetica]">
                    Смотреть кейс полностью
                  </span>
                  <Image
                    alt="Arrow icon"
                    src="/FRAME-4.webp"
                    width={24}
                    height={24}
                    loading="lazy"
                  />  
                </Button>

                <Button 
                  className="h-[60px] absolute top-[633px] left-[548px] inline-flex items-center gap-2.5 pl-6 pr-3 py-3 bg-[#ffffff] rounded-[50px] border-solid border-0 shadow-[var(--)] backdrop-blur-[79px]"
                  onClick={(e) => handleNavigation('/gallery', e)}
                >
                  <span className="font-bold text-black text-base [font-family:'Raleway',Helvetica]">
                    Показать еще
                  </span>
                  <Image
                    alt="Arrow icon"
                    src="/FRAME-4.webp"
                    width={24}
                    height={24}
                    loading="lazy"
                  />  
                </Button>
              </div>
            </div>

            {/* Service cards below the main image */}
            <div className="flex gap-4 mt-6 ml-[-38px]">
              {serviceCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-[182px] rounded-[20px] border border-solid border-[#d3d3d3]"
                >
                  <CardContent className="flex flex-col items-center justify-center h-[85px] gap-1.5 p-5">
                    <div className="font-semibold text-[#ffffff] text-base text-center leading-5 [font-family:'Raleway',Helvetica]">
                      {card.title}
                    </div>
                    <div className="font-normal text-[#ffffff] text-base text-center leading-5 [font-family:'Raleway',Helvetica]">
                      {card.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden w-full py-8 px-4 relative rounded-[20px] bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#435575_107.93%)]">
        {/* Thank You Letter Modal (same as desktop) */}
        {showThankYouModal && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowThankYouModal(false)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/Image-18.webp"
                alt="Благодарственное письмо"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 rounded-full hover:bg-white"
                onClick={() => setShowThankYouModal(false)}
              >
                <XIcon className="h-6 w-6 text-black" />
              </Button>
              <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-lg">
                <span className="font-bold text-black">Благодарственное письмо</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Ask Contact Modal */}
        {showAskContact && <Askcontact onClose={() => setShowAskContact(false)} />}

        <div className="flex flex-col gap-8">
          {/* Header section - remains first */}
          <div className="flex flex-col gap-4">
            <div className="font-medium text-[#ffffff] text-lg leading-6 [font-family:'Raleway',Helvetica]">
              Более 60% становятся постоянными клиентами
            </div>

            <div className="[font-family:'Raleway',Helvetica] text-3xl leading-normal">
              <span className="font-medium text-[#ffffff]">
                Посмотрите, кто уже пользуется нашими{" "}
              </span>
              <span className="font-bold text-[#527dc5]">шатрами</span>
            </div>

            <div className="font-semibold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
              До этого был шатер из китайской ткани. Через год уже испортился
              внешний вид. Ваш шатер заметно лучше выглядит
            </div>
          </div>

          {/* Task and Accomplishments - moved up */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                Задача
              </h3>
              <p className="font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                Сделали
              </h3>
              <div className="flex flex-col gap-4">
                {accomplishments.map((text, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="relative w-6 h-6">
                      <Image
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt="Check icon"
                        src={`/GROP-${index + 4}.webp`}
                        width={24}
                        height={17}
                        loading="lazy"
                      />
                    </div>
                    <p className="font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review and letter - moved up */}
          <div className="flex items-center gap-[33px]">
            <Button
              variant="outline"
              className="flex items-center gap-[15px] border-0 px-6 py-4 bg-white rounded-[50px] border-solid shadow-[var(--)] backdrop-blur-[79px]"
              onClick={(e) => handleNavigation('/reviews', e)}
            >
              <div className="relative w-[30px] h-[30px]">
                <div className="relative w-[25px] h-[25px] top-[2px] left-[2px] bg-[url(/GROP-9.webp)] bg-[100%_100%]" />
              </div>
              <span className="font-bold text-[#000000] text-sm [font-family:'Raleway',Helvetica]">
                Смотреть отзыв
              </span>
            </Button>

            <div className="flex items-center gap-[18px] cursor-pointer" onClick={() => setShowThankYouModal(true)}>
              <Image
                className="relative w-[60px] h-[45px] backdrop-blur-[79px] object-cover hover:scale-105 transition-transform"
                alt="Thank you letter"
                src="/Image-18.webp"
                width={60}
                height={45}
                loading="lazy"
              />
              <div className="w-[150px] font-semibold text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica] hover:underline">
                Благодарственное письмо
              </div>
            </div>
          </div>

          {/* Main image with navigation */}
          <div className="relative w-full">
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src={previewImages[currentImageIndex]}
                alt="Main showcase"
                className="object-cover"
                fill
                loading="lazy"
              />
              
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-2 p-2 bg-white/90 rounded-full border-0 shadow-lg hover:bg-white transition-all duration-300 transform -translate-y-1/2 w-10 h-10"
                onClick={prevImage}
              >
                <ChevronLeftIcon className="h-5 w-5 text-blue-600" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-2 p-2 bg-white/90 rounded-full border-0 shadow-lg hover:bg-white transition-all duration-300 transform -translate-y-1/2 w-10 h-10"
                onClick={nextImage}
              >
                <ChevronRightIcon className="h-5 w-5 text-blue-600" />
              </Button>
            </div>

            {/* Preview images */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {previewImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative w-[100px] h-[70px] rounded-[8px] overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 ${
                    currentImageIndex === index 
                      ? 'ring-2 ring-blue-500 scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <Image
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="object-cover"
                    fill
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {serviceCards.map((card, index) => (
              <Card
                key={index}
                className="w-full rounded-[15px] border border-solid border-[#d3d3d3]"
              >
                <CardContent className="flex flex-col items-center justify-center h-[70px] gap-1 p-3">
                  <div className="font-semibold text-[#ffffff] text-sm text-center leading-5 [font-family:'Raleway',Helvetica]">
                    {card.title}
                  </div>
                  <div className="font-normal text-[#ffffff] text-sm text-center leading-5 [font-family:'Raleway',Helvetica]">
                    {card.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="outline"
              className="h-[50px] w-full border-0 inline-flex items-center justify-between px-4 py-3 bg-white rounded-[50px] border-solid shadow-[var(--)] backdrop-blur-[79px]"
              onClick={(e) => handleNavigation('/our-projects', e)}
            >
              <span className="font-bold text-[#000000] text-sm [font-family:'Raleway',Helvetica]">
                Смотреть кейс полностью
              </span>
              <Image
                alt="Arrow icon"
                src="/FRAME-4.webp"
                width={20}
                height={20}
                loading="lazy"
              />  
            </Button>

            <Button 
              className="h-[50px] w-full inline-flex items-center justify-between px-4 py-3 bg-[#ffffff] rounded-[50px] border-solid border-0 shadow-[var(--)] backdrop-blur-[79px]"
              onClick={(e) => handleNavigation('/gallery', e)}
            >
              <span className="font-bold text-black text-sm [font-family:'Raleway',Helvetica]">
                Показать еще
              </span>
              <Image
                alt="Arrow icon"
                src="/FRAME-4.webp"
                width={20}
                height={20}
                loading="lazy"
              />  
            </Button>
          </div>

          {/* Contact section */}
          <div className="flex flex-col gap-3 mt-6">
            <p className="font-normal text-[#ffffff] text-xs text-center [font-family:'Raleway',Helvetica]">
              Свяжитесь с любым из наших клиентов, чтобы спросить все, что
              захотите
            </p>
            <Button 
              className="w-full h-[50px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
              onClick={() => setShowAskContact(true)}
            >
              <span className="font-semibold text-white text-sm text-center [font-family:'Raleway',Helvetica]">
                Запросить контакты
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};