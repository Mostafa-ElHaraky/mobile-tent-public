'use client';

import { Card, CardContent } from "../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

interface FeatureCard {
  title: string;
  description: string;
  iconSrc?: string;
  iconBg?: string;
  position: string;
  width: string;
  height: string;
  isWhiteBg?: boolean;
}

export const SectionComponentNodeProizvodstvoshatrov = (): ReactElement => {
  const featureCards: FeatureCard[] = [
    { title: "Размер", description: "Как подобрать правильный шатер под размер площадки, тип грунта и задач бизнеса", iconBg: "bg-[url(/group-9.webp)] bg-[100%_100%]", position: "top-0 left-[181px]", width: "367px", height: "121px" },
    { title: "Долговечность", description: "Как сделать шатер выдерживающие нагрузки ветра, снега и дождей для вашего региона использования", iconSrc: "/group-10.webp", position: "top-[297px] left-[977px]", width: "415px", height: "121px" },
    { title: "Конструкция", description: "Как сделать такую конструкцию, которая даст удобство легкой сборки-разборки в случае перестановки или переезда", iconBg: "bg-[url(/building-contruction.webp)] bg-[100%_100%]", position: "top-[297px] left-[50px]", width: "415px", height: "121px" },
    { title: "Планировка", description: "Как сделать планировку учитывая потоки людей для удобного пользования: расположение столов, арки, окна, входы-выходы и прочее", iconSrc: "/group-11.webp", position: "top-0 left-[847px]", width: "459px", height: "121px" },
    { title: "Климат и уют", description: "Продумаем расположение систем кондиционирования воздуха или отопления, чтобы обеспечить комфорт клиентам в любых погодных условиях", iconSrc: "/group-12.webp", position: "top-[594px] left-[847px]", width: "513px", height: "121px" },
    { title: "Брендирование", description: "Сделаем все, чтобы шатер был выделяющимся с учетом бренд-стратегии без аляпистости и безвкусицы. Правильно расположим элементы: логотип, световые конструкции, флаги, занавески и другие элементы брендирования", iconSrc: "/group-13.webp", position: "top-[594px] left-[71px]", width: "648px", height: "121px", isWhiteBg: true },
  ];

  return (
    <>
      {/* ==================== DESKTOP (unchanged) ==================== */}
      <section className="hidden md:flex flex-col items-center gap-[45px] relative w-full max-w-[1342px] mx-auto py-12">
        <h2 className="font-semibold text-4xl text-center leading-normal whitespace-nowrap [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Продумаем все</span>
          <span className="text-[#232c42]"> до мелочей</span>
        </h2>

        <section className="relative w-full py-[70px] px-[40px] left-[-50px]">
          <div className="relative h-[715px] w-[1342px] mx-auto">
            <Image className="absolute top-[74px] w-[712px] h-[553px]" alt="Tent with curtains" src="/tent-with-curtains-i08-1.webp" width={712} height={553} style={{ left: 'calc(50% - 371px)', position: 'absolute', top: '74px' }} />

            {featureCards.map((card, index) => (
              <Card key={index} className={`absolute ${card.position} ${card.isWhiteBg ? 'bg-white' : 'bg-[#ffffff99]'} rounded-[20px] overflow-hidden shadow-[0px_24px_38px_rgba(22,29,36,0.08)] backdrop-blur-[79px] border-0`} style={{ width: card.width, height: card.height }}>
                <CardContent className="p-3.5 relative">
                  <div className="inline-flex items-center gap-3">
                    <div className="relative w-[92px] h-[93px] rounded-[52px] bg-[#3C6CEC]">
                      {card.iconSrc ? (
                        <div className="absolute w-[46px] h-[46px] top-[24px] left-[23px]">
                          <Image alt={card.title} src={card.iconSrc} layout="fill" objectFit="contain" />
                        </div>
                      ) : (
                        <div className={`absolute w-[46px] h-[46px] top-[24px] left-[23px] ${card.iconBg}`} />
                      )}
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                      <h3 className="font-semibold text-[#394355] text-base leading-6 [font-family:'Raleway']">{card.title}</h3>
                      <p className="font-normal text-[#394355] text-xs leading-5 [font-family:'Raleway']" style={{ width: `calc(${card.width} - 120px)` }}>{card.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>

      {/* ==================== MOBILE (new) ==================== */}
      <section className="md:hidden flex flex-col items-center gap-8 w-full px-4 py-8">
        <h2 className="text-2xl font-semibold text-center [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Продумаем все</span>
          <span className="text-[#232c42]"> до мелочей</span>
        </h2>

        {/* Tent image centered */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
          <Image src="/tent-with-curtains-i08-1.webp" loading="lazy" alt="Tent with curtains" fill className="object-cover" />
        </div>

        {/* Cards stacked vertically */}
        <div className="mt-6 flex flex-col gap-4 w-full">
          {featureCards.map((card, index) => (
            <Card key={index} className={`w-full ${card.isWhiteBg ? 'bg-white' : 'bg-[#ffffff99]'} rounded-2xl shadow-md border-0 p-4 flex items-start gap-3`}>
              <div className="w-[64px] h-[64px] rounded-full bg-[#3C6CEC] flex items-center justify-center flex-shrink-0">
                {card.iconSrc ? (
                  <div className="relative w-8 h-8">
                    <Image alt={card.title} loading="lazy" src={card.iconSrc} fill className="object-contain" />
                  </div>
                ) : (
                  <div className={`w-8 h-8 ${card.iconBg}`} />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#394355] font-semibold text-base leading-5">{card.title}</h3>
                <p className="text-[#394355] text-sm leading-5">{card.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};
