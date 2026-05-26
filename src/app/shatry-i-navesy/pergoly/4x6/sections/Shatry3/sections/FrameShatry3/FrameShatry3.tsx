'use client';

import { useState, useEffect } from 'react';
import { Button } from "../../../../../../../../components/ui/button";
import Image from 'next/image';
import { ReactElement } from 'react';
import DownloadCata from '../../../../../../../../components/ui/DownloadCata';

export const FrameShatry3 = (): ReactElement => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Close on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPopupOpen(false);
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPopupOpen]);

  return (
    <>
      {/* نسخة الديسكتوب الأصلية بدون أي تغيير */}
      <section className="absolute w-[1440px] h-[334px] left-0 bottom-[30px] rounded-[30px] bg-gradient-to-br from-[#243057] to-[#374255] flex hidden md:flex">
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
              className="w-[412px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)] font-['Raleway',Helvetica] font-semibold text-white text-base"
            >
              Смотреть каталог
            </Button>
          </div>
        </div>

        <div className="flex-1 relative bg-[url(/fields-at-mountain-valley-1.png)] bg-cover">
          <Image
            src="/Shatry3-tent-with-curtains-i08-1.png"
            alt="Tent with curtains"
            width={442}
            height={334}
            className="absolute right-0 top-0"
          />
        </div>

        {/* Popup Overlay with Transparent Blur Effect */}
        {isPopupOpen && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setIsPopupOpen(false)}
          >
            {/* Blur Background Layer */}
            <div className="absolute inset-0 backdrop-blur-lg"></div>
            
            {/* Popup Content */}
            <div 
              className="relative z-10" 
              onClick={(e) => e.stopPropagation()}
            >
              <DownloadCata onClose={() => setIsPopupOpen(false)} />
            </div>
          </div>
        )}
      </section>

      {/* نسخة الهاتف الجديدة */}
<section className="block md:hidden w-full min-h-[400px] rounded-[20px] bg-gradient-to-br from-[#243057] to-[#374255] flex flex-col relative p-6 ">
  <div className="flex-1 py-8 px-4">
    <div className="flex flex-col gap-4 mb-6">
      <h2 className="w-full font-['Raleway',Helvetica] text-2xl text-center tracking-[0]">
        <span className="font-medium text-white">Нет времени искать </span>
        <span className="font-bold text-[#9ec2ff]">шатер </span>
        <span className="font-medium text-white">на сайте?</span>
      </h2>
      <p className="w-full font-['Raleway',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-5">
        Получите каталог шатров и посмотрите в удобное для вас время
      </p>
    </div>
{/* حاوية الصورة – تم تعديلها */}
  <div className="relative h-[300px] bg-[url(/fields-at-mountain-valley-1.png)] bg-cover bg-center rounded-[15px] overflow-hidden mt-6">
    <Image
      src="/Shatry3-tent-with-curtains-i08-1.png"
      alt="Tent with curtains"
      fill
      className="object-contain object-right p-4"
      style={{ zIndex: 1 }}
    />
    {/* طبقة شفافة للتحكم في الخلفية إذا لزم */}
    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 pointer-events-none"></div>
  </div>

  {/* Popup Overlay */}
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
    <div className="flex flex-col items-center mt-10">
      <Button 
        onClick={() => setIsPopupOpen(true)}
        className="w-full max-w-[300px] h-[56px] rounded-2xl shadow-[0px_12px_24px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)] font-['Raleway',Helvetica] font-semibold text-white text-sm"
      >
        Смотреть каталог
      </Button>
    </div>
  </div>

  
</section>
    </>
  );
};