'use client';

import { Button } from "../../../components/ui/button";
import { useState } from "react";
import { ReactElement } from 'react';
import Image from 'next/image';
import { KPwindow } from "../../../components/ui/KPwindow"; // Adjust import path as needed

interface BenefitItem {
  id: number;
  icon: string;
  text: string;
  width: string;
}

export const OverlapWrapperByAnima1 = (): ReactElement => {
  const [isDark] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const benefits: BenefitItem[] = [
    {
      id: 1,
      icon: "/DOCgroup-7.webp",
      text: "Проверим качество\nиспользуемых материалов",
      width: "187px",
    },
    {
      id: 2,
      icon: "/DOCgroup-8.webp",
      text: "Оценим правильность расчетов для выдерживания нагрузки",
      width: "227px",
    },
    {
      id: 3,
      icon: "/DOCgroup-9.webp",
      text: "Оценим адекватность выставленной цены",
      width: "175px",
    },
  ];

  return (
    <>
      {/* Desktop Version (unchanged) */}
      <section className="hidden md:block relative w-[1440px] h-[460px] rounded-[30px] overflow-hidden">
        <div className="relative h-full bottom-[45px]">
          {/* Background gradient */}
          <div className="absolute w-full h-[370px] top-[97px] left-0 rounded-[30px] bg-gradient-to-b from-[#F5F6FF] to-transparent" />

          {/* Decorative images */}
          <Image
            width={323}
            height={353}
            alt="Checklist"
            src="/DOCchecklist-------1.webp"
            className={`absolute top-[60px] left-[965.14px] rotate-[7.51deg] ${
              isDark ? "object-cover" : "filter grayscale brightness-90"
            }`}
            loading="lazy"
          />

          <Image
            width={319}
            height={227}
            alt="Grass decoration"
            src="/DOCvecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
            className="absolute top-[300px] left-[-199px] blur-[15px] -scale-x-100 -rotate-[6.87deg]"
            loading="lazy"
          />

          <Image
            width={285}
            height={165}
            alt="Grass decoration"
            src="/DOCvecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.webp"
            className="absolute top-[187.51px] left-[906.49px] -scale-x-100 rotate-[4.58deg]"
            loading="lazy"
          />

          <Image
            width={492}
            height={349}
            alt="Grass decoration"
            src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.webp"
            className="absolute top-[268.52px] left-[1052px] blur-[15px] -rotate-[1.11deg]"
            loading="lazy"
          />

          {/* Content container */}
          <div className="flex flex-col items-start gap-[55px] absolute top-[151px] left-[65px]">
            <div className="flex flex-col items-start gap-6">
              <h2 className="w-[650px] font-semibold text-[36px] leading-[42px] font-['Raleway'] text-[#232c42]">
                Получили КП от других компаний,
                <br />
                <span className="text-[#527dc5]">
                  что-то смущает или отталкивает?
                </span>
              </h2>
              <p className="w-[597px] font-medium text-[#394355] text-[18px] leading-[24px] font-['Raleway']">
                Давайте проанализируем КП и расскажем про подводные камни или их
                отсутствие в предложении другой компании
              </p>
            </div>

            {/* Benefits section */}
            <div className="flex w-[741px] justify-between">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center gap-3">
                  <div className="w-6 h-6">
                    <Image
                      width={24}
                      height={17}
                      alt="Check icon"
                      src={benefit.icon}
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="font-semibold text-[#394355] text-[14px] leading-[20px] font-['Raleway'] whitespace-pre-line"
                    style={{ width: benefit.width }}
                  >
                    {benefit.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial proposal document */}
          <div
            className="absolute font-['Raleway'] font-semibold text-center"
            style={{
              top: "147px",
              left: "1039.35px",
              width: "178.14px",
              height: "56.99px",
              transform: "rotate(7.41deg)",
              fontSize: "22px",
              lineHeight: "100%",
              color: "#232c42ab",
              fontWeight: 600,
            }}
          >
            Коммерческое
            <br />
            предложение
          </div>

          <div className="absolute w-[175px] top-[214px] left-[1029.44px] rotate-[7deg] font-semibold text-[#3943556b] text-[12px] text-center leading-[20px] font-['Raleway']">
            Строительство тента
          </div>

          {/* Chat bubble image */}
          <Image
            width={146}
            height={175}
            alt="Chat"
            src="/chat-46-------1.webp"
            className="absolute top-[40px] left-[1170.22px] rotate-[2.36deg]"
            loading="lazy"
          />

          {/* CTA button and disclaimer */}
          <div className="absolute bottom-[43px] left-[907px] flex flex-col gap-3">
            <Button 
              className="w-[412px] h-[68px] rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] font-semibold text-white text-[16px] font-['Raleway']"
              onClick={() => setIsPopupOpen(true)}
            >
              Получить оценку КП
            </Button>
          </div>
        </div>
      </section>

    
      {/* Mobile Version */}
      <section className="md:hidden flex flex-col items-center px-4 py-8 w-full relative bg-gradient-to-b from-[#F5F6FF] to-transparent min-h-[600px]">
        {/* Background decorations for mobile */}
        <Image
          width={319}
          height={227}
          alt="Grass decoration"
          src="/DOCvecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
          className="absolute bottom-0 left-[-50px] blur-[15px] -scale-x-100 -rotate-[6.87deg] w-[200px] opacity-70"
          loading="lazy"
        />
        
        <Image
          width={285}
          height={165}
          alt="Grass decoration"
          src="/DOCvecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.webp"
          className="absolute top-[100px] right-[-30px] -scale-x-100 rotate-[4.58deg] w-[150px] opacity-70"
          loading="lazy"
        />

        {/* Main content */}
        <div className="flex flex-col items-start gap-6 w-full max-w-[400px] z-10">
          {/* Title and description */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-semibold text-2xl leading-8 font-['Raleway'] text-[#232c42]">
              Получили КП от других компаний,{" "}
              <span className="text-[#527dc5]">
                что-то смущает или отталкивает?
              </span>
            </h2>
            <p className="font-medium text-[#394355] text-base leading-6 font-['Raleway']">
              Давайте проанализируем КП и расскажем про подводные камни или их
              отсутствие в предложении другой компании
            </p>
          </div>

          {/* Benefits section - same layout as desktop but stacked */}
<div className="flex flex-col gap-6 w-full mt-4">
  {benefits.map((benefit) => (
    <div key={benefit.id} className="flex items-start gap-4 w-full">
      <div className="w-6 h-6 flex-shrink-0 mt-1">
        <Image
          width={24}
          height={17}
          alt="Check icon"
          src={benefit.icon}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      <div className="font-semibold text-[#394355] text-sm leading-6 font-['Raleway'] whitespace-pre-line">
        {benefit.id === 2 ? "Оценим правильность расчетов\nдля выдерживания нагрузки" : benefit.text}
      </div>
    </div>
  ))}
</div>

          {/* CTA button */}
          <Button 
            className="w-full h-14 rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] font-semibold text-white text-base font-['Raleway'] mt-6"
            onClick={() => setIsPopupOpen(true)}
          >
            Получить оценку КП
          </Button>
        </div>

        {/* Document and chat decorations for mobile */}
<div className="relative w-full h-[200px] bottom-[330px] translate-x-4 -translate-y-85">     
       <Image
            width={323}
            height={353}
            alt="Checklist"
            loading="lazy"
            src="/DOCchecklist-------1.webp"
            className={`absolute top-0 right-0 rotate-[7.51deg] w-[180px] ${
              isDark ? "object-cover" : "filter grayscale brightness-90"
            }`}
          />
          
          <div className="absolute top-[60px] right-[30px] font-['Raleway'] font-semibold text-center"
            style={{
              width: "120px",
              transform: "rotate(7.41deg)",
              fontSize: "14px",
              lineHeight: "100%",
              color: "#000000ab",
              fontWeight: 600,
            }}
          >
            Коммерческое
            <br />
            предложение
          </div>

<div className="absolute top-[90px] right-[30px] rotate-[7deg] font-semibold text-black text-[8px] text-center leading-[16px] font-['Raleway']"            style={{ width: "120px" }}
          >
            Строительство тента
          </div>

          <Image
            width={146}
            height={175}
            alt="Chat"
            src="/chat-46-------1.webp"
            className="absolute top-3 right-[0px] rotate-[0.36deg] w-[65px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Popup Window (shared for both versions) */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <KPwindow onClose={() => setIsPopupOpen(false)} />
        </div>
      )}
    </>
  );
};