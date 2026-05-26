'use client';

import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { useState } from "react";
import { ReactElement } from 'react';
import Image from 'next/image';
import KPwindow from "../../../../../components/ui/KPwindow"; 

interface BenefitItem {
  id: number;
  icon: string;
  text: string;
  width: string;
}

const installationCards = [
  {
    id: 1,
    image: "/paper-a4-10-ps-------1-1.webp",
    style: {
      width: "276px",
      height: "315px",
      top: "0",
      left: "88px",
      position: "absolute" as const
    },
    title: "Прикладываем технический паспорт",
    description:
      "с понятной инструкцией на 30-40 листов\nдля самостоятельной сборк",
    titleEnd: "и",
    note: "*Описан каждый этап. Собирается легко, как детский конструктор",
    hasButton: true,
  },
  {
    id: 2,
    image: "/paper-a4-10-ps-------1-2.webp",
    style: {
      width: "447px",
      height: "346px",
      top: "0",
      left: "0",
      position: "absolute" as const
    },
    title: "Можем собрать сами ",
    description:
      "или прислать бригаду для тех. надзора сборки под нашим контролем",
    note: "*Возникнут вопросы в ходе сборки?\nЗвоните - ответим",
    hasCallToAction: true,
  },
  {
    id: 3,
    image: "/paper-a4-10-ps-------1-3.webp",
    style: {
      width: "257px",
      height: "323px",
      top: "-25px",
      left: "88px",
      position: "absolute" as const
    },
    title: "Не требуется специального фундамента, ",
    description: "установка на любой земляной поверхности или на сваи",
    hasIcon: true,
  },
];

export const FrameShatry6 = (): ReactElement => {
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
    <div className="w-full">
      {/* Desktop Version - Top section with gradient background */}
      <section className="hidden md:block relative w-[1440px] h-[460px] top-[60px] rounded-[30px] overflow-hidden">
        <div className="relative h-full">
          {/* Background gradient */}
          <div className="absolute w-full h-[370px] top-[97px] left-0 rounded-[30px] bg-gradient-to-b from-[#F5F6FF] to-transparent" />

          {/* Decorative images */}
          <Image
            width={323}
            height={353}
            alt="Checklist"
            src="/DOCchecklist-------1.webp"
            className={`absolute top-[20px] left-[965.14px] rotate-[7.51deg] ${
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
            className="absolute top-[10px] left-[1170.22px] rotate-[2.36deg]"
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
            <p className="w-[383px] font-normal text-[#394355] text-[12px] text-center leading-[14px] font-['Raleway']">
              Заявка ни к чему не обязывает
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Version - Bottom section with installation cards */}
      <section className="hidden md:block relative top-[60px] w-full py-12">
        <div className="container mx-auto">
          <div className="flex flex-col items-start gap-[60px]">
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-6">
                <h2 className="w-[528px] font-medium text-4xl font-['Raleway',Helvetica]">
                  <span className="text-[#527dc5]">Легкость</span>
                  <span className="text-[#232c42]"> монтажа</span>
                </h2>
              </div>
              <p className="w-[496px] font-semibold text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                не нужно спец. техники и особых навыков
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {installationCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-[432px] h-[394px] bg-white rounded-[20px] border border-white shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px]"
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative w-full h-[242px] top-[-60px]">
                      <div className="absolute w-full h-[204px] top-[67px] left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(232,238,248,0)_100%)]" />
                
      <Image
        alt="Installation illustration"
        src={card.image}
        width={parseInt(card.style.width as string, 10) || 0}
        height={parseInt(card.style.height as string, 10) || 0}
        style={{
          ...card.style,
          width: undefined,
          height: undefined,
        }}
        loading="lazy"
      />
                
                      {card.hasIcon && (
                        <div className="absolute w-[93px] h-[93px] top-[94px] left-[209px] bg-[url(/DOCgroup-10.webp)] bg-[100%_100%]" />
                      )}
                
                      <div className="absolute w-[366px] top-[270px] left-[42px] font-normal text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                        <span className="font-semibold">
                          {card.title}
                          <br />
                        </span>
                        <span className="font-['Raleway',Helvetica] font-normal text-[#394355] text-base leading-6">
                          {card.description}
                        </span>
                        {card.titleEnd && (
                          <span className="font-semibold">{card.titleEnd}</span>
                        )}
                      </div>
                
                      {card.note && (
                        <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 absolute top-[349px] left-[29px] bg-[#f9f9f9] rounded-[10px]">
                          <div className="relative w-[319px] mt-[-1.00px] font-normal text-sm leading-5 font-['Raleway',Helvetica]">
                            <span className="italic text-[#eb3c3c]">*</span>
                            <span className="italic text-[#394355]">
                              {card.note.split("\n")[0]}
                              {card.note.includes("\n") && <br />}
                            </span>
                            {card.hasCallToAction && (
                              <span className="font-semibold text-[#527dc5] underline">
                                {card.note.split("\n")[1]}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>  
              ))}
            </div>

            <div className="flex flex-col w-[432px] items-start justify-center gap-3">
                    <a
  href="/files/1137 Паспорт ША1010 Дюна.pdf"
  download
>
              <Button className="w-[432px] h-[68px] rounded-2xl border-none shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] relative">
                <div className="absolute w-[25px] h-[25px] top-[21px] left-[72px]">
      <Image
        className="absolute top-0 left-[3px]"
        alt="Document icon"
        src="/DOCgroup-11.webp"
        width={20}
        height={25}
        loading="lazy"
      />
                </div>
                <span className="absolute top-[21px] left-[103px] font-semibold text-white text-base text-center whitespace-nowrap font-['Raleway',Helvetica]">
                  Посмотреть документ по сборке
                </span>
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version - Top Section */}
      <section className="md:hidden flex flex-col items-center px-4 py-8 w-full relative top-[90px] bg-gradient-to-b from-[#F5F6FF] to-transparent min-h-[600px]">
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

          {/* Benefits section */}
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
        <div className="relative bottom-[380px] w-full h-[200px] mt-8 translate-x-4 -translate-y-85">
          <Image
            width={323}
            height={353}
            alt="Checklist"
            src="/DOCchecklist-------1.webp"
            className={`absolute top-0 right-0 rotate-[7.51deg] w-[180px] ${
              isDark ? "object-cover" : "filter grayscale brightness-90"
            }`}
            loading="lazy"
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

          <div className="absolute top-[90px] right-[30px] rotate-[7deg] font-semibold text-black text-[8px] text-center leading-[16px] font-['Raleway']"
            style={{ width: "120px" }}
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

      {/* Mobile Version - Bottom Section */}
      <section className="md:hidden w-full py-4 px-4 -mt-60 relative top-[80px] "> 
        <div className="container mx-auto">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-2">
              <h2 className="w-full text-2xl font-medium font-['Raleway',Helvetica]">
                <span className="text-[#527dc5]">Легкость</span>
                <span className="text-[#232c42]"> монтажа</span>
              </h2>
              <p className="w-full font-semibold text-[#394355] text-sm leading-5 font-['Raleway',Helvetica]">
                не нужно спец. техники и особых навыков
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 w-full">
              {installationCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-full h-auto bg-white rounded-[16px] border border-white shadow-sm"
                >
                  <CardContent className="p-3">
                    <div className="relative w-full h-auto">
                      <div className="w-full h-[240px] mb-3 rounded-[16px] [background:linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(232,238,248,0)_100%)]">
                        <div className="relative w-full h-full flex justify-center">
                          <Image
                            alt="Installation illustration"
                            src={card.image}
                            width={280} 
                            height={280} 
                            className="object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="font-normal text-[#394355] text-sm leading-5 font-['Raleway',Helvetica]">
                        <span className="font-semibold">
                          {card.title}
                        </span>
                        <span className="block mt-1">
                          {card.description}
                        </span>
                        {card.titleEnd && (
                          <span className="font-semibold">{card.titleEnd}</span>
                        )}
                      </div>

                      {card.note && (
                        <div className="mt-2 p-2 bg-[#f9f9f9] rounded-[8px]">
                          <div className="font-normal text-xs leading-4 font-['Raleway',Helvetica]">
                            <span className="italic text-[#eb3c3c]">*</span>
                            <span className="italic text-[#394355]">
                              {card.note.split("\n")[0]}
                            </span>
                            {card.note.includes("\n") && <br />}
                            {card.hasCallToAction && (
                              <span className="font-semibold text-[#527dc5] underline">
                                {card.note.split("\n")[1]}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="w-full">
        <a
  href="/files/1137 Паспорт ША1010 Дюна.pdf"
  download
>
        <Button className="w-full h-14 rounded-2xl border-none shadow-sm [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
          <div className="flex items-center justify-center gap-2">
            <Image
              alt="Document icon"
              src="/DOCgroup-11.webp"
              width={20}
              height={25}
              loading="lazy"
            />
            <span className="font-semibold text-white text-sm text-center font-['Raleway',Helvetica]">
              Посмотреть документ по сборке
            </span>
          </div>
        </Button>
        </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Window (shared for both versions) */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <KPwindow onClose={() => setIsPopupOpen(false)} />
        </div>
      )}
    </div>
  );
};