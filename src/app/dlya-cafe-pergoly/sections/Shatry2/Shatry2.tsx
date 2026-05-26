'use client';

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ReactElement, useState } from 'react';
import Image from 'next/image';
import { Promotion } from "../../../../components/ui/promotion"; // Add this import

// Data for feature cards with individual icon sizing and positioning
const featureCards = [
  {
    id: 1,
    title: (
      <>
        <span className="text-[#232c42]">Минимум </span>
        <span className="text-[#527dc5]">15 лет</span>
      </>
    ),
    description: "будут иметь презентабельный вид\nдля аренды и проведения мероприятий",
    imageSrc: "/blue-water-splashing-alone--9-------1-5.webp",
    position: "top-[60px] left-[35px]",
    iconClass: "w-80 h-80 -top-10 -left-[140px]" // Custom for card 1
  },
  {
    id: 2,
    title: (
      <>
        <span className="text-[#232c42]">Достаточно </span>
        <span className="text-[#527dc5]">мыть 1 раз в год</span>
      </>
    ),
    description: "для сохранения идеального внешнего вида.\nНе въедается грязь и пыль",
    imageSrc: "/blue-water-splashing-alone--9-------1-1.webp",
    position: "top-[244px] left-[35px]",
    iconClass: "w-[168px] h-[168px] -top-[7px] -left-[27px]" // Custom for card 2
  },
  {
    id: 3,
    title: (
      <>
        <span className="text-[#527dc5]">Выдержат самые суровые условия</span>
        <span className="text-[#232c42]"> эксплуатации</span>
      </>
    ),
    description: "Ветер до 35м/c, снег от 60 до 380 кг/м2. Ваша компания не терпит убытки и упущенную прибыль из-за непогоды",
    imageSrc: "/blue-water-splashing-alone--9-------1-3.webp",
    position: "top-[60px] left-[719px]",
    iconClass: "w-[232px] h-[232px] -top-[1px] -left-[110px]" // Custom for card 3
  },
  {
    id: 4,
    title: (
      <>
        <span className="text-[#527dc5]">Быстрая</span>
        <span className="text-[#232c42]"> окупаемость</span>
      </>
    ),
    description: "Не нужно тратиться на дорогой фундамент, можно использовать круглый год в любую погоду",
    imageSrc: "/M011t0367-d-gold-coin-06july22-------1.webp",
    position: "top-[244px] left-[719px]",
    iconClass: "w-[380px] h-[380px] -top-5 -left-[150px]" // Custom for card 4
  },
  {
    id: 5,
    title: (
      <>
        <span className="text-[#527dc5]">Быстрый</span>
        <span className="text-[#232c42]"> монтаж</span>
      </>
    ),
    description: "Самостоятельно по подробной инструкции или нашими силами за 1-3 часа. И ваш бизнес уже укомплектован новым местом приема людей",
    imageSrc: "/blue-water-splashing-alone--9-------1-2.webp",
    position: "top-[428px] left-[400px]",
    iconClass: "w-[156px] h-[156px] -top-[1px] -left-[40px]" // Custom for card 5
  },
];

export const Shatry2 = (): ReactElement => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // إضافة حالة currentSlide

  return (
    <>
      {/* Desktop Version */}
      <main className="relative w-full max-w-[1440px] h-[1191px] bg-white mx-auto hidden md:block">
        <section className="relative h-[1191px] rounded-[0px_0px_30px_30px]">
          {/* Background image */}
          <Image
            className="w-[661px] h-[851px] absolute left-[766px] top-0 blur-[35px] object-cover"
            alt="Blue water splashing"
            src="/blue-water-splashing-alone--9-------1-3.webp"
            width={661}
            height={851}
            loading="lazy"
          />

          {featureCards.map((card) => (
            <Card
              key={card.id}
              className={`absolute w-[660px] h-40 ${card.position} bg-white rounded-[30px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] overflow-hidden border-0`}
            >
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full pl-28">
                  {/* Icon container with proper boundaries */}
                  <div className={`absolute ${card.iconClass} overflow-visible z-10`}>
                    <Image
                      className="w-full h-full object-contain"
                      alt="Feature icon"
                      src={card.imageSrc}
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Text content */}
                  <div className="inline-flex flex-col items-start gap-3 pt-8 h-full">
                    <div className="relative w-fit font-bold text-transparent text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {card.title}
                    </div>
                    <div className="relative w-fit font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Promotions section - REPLACED WITH COMPONENT */}
          <Promotion />

        </section>
      </main>

     {/* Mobile Version */}
<main className="relative w-full bg-white mx-auto block md:hidden -mt-45">
  <section className="relative min-h-screen rounded-[0px_0px_20px_20px] overflow-hidden p-4">
    
    {/* Feature Cards for Mobile - تصميم جديد */}
    <div className="flex flex-col gap-8 mb-8">
      {featureCards.map((card) => (
        <Card
          key={card.id}
          className="w-full bg-white rounded-[20px] shadow-[0px_12px_20px_#161d2414] backdrop-blur-[40px] overflow-hidden border-0"
        >
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              {/* الأيقونة على اليسار */}
               <div className="flex-shrink-0 w-24 h-24 relative">
            <Image
              className="w-full h-full object-contain"
              alt="Feature icon"
              src={card.imageSrc}
              width={96}   
              height={96}
              loading="lazy"  
            />
          </div>
              
              {/* النص على اليمين */}
              <div className="flex-1">
                <div className="font-bold text-lg [font-family:'Raleway',Helvetica] mb-2 text-[#232c42]">
                  {card.title}
                </div>
                <div className="font-normal text-[#394355] text-sm [font-family:'Raleway',Helvetica] whitespace-pre-line leading-relaxed">
                  {card.description}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Promotions section - REPLACED WITH COMPONENT */}
    <Promotion isMobile={true} />

  </section>
</main>
    </>
  );
};