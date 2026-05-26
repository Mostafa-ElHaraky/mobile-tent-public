'use client';

import { Card, CardContent } from "../../../../../../../components/ui/card";
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

export const GroupShatry4 = (): ReactElement => {
  const featureCards: FeatureCard[] = [
    {
      title: "Размер",
      description: "Как подобрать правильный шатер под размер площадки, тип грунта и задач бизнеса",
      iconBg: "bg-[url(/group-9.webp)] bg-[100%_100%]",
      position: "top-0 left-[181px]",
      width: "367px",
      height: "121px",
    },
    {
      title: "Долговечность",
      description: "Как сделать шатер выдерживающие нагрузки ветра, снега и дождей для вашего региона использования",
      iconSrc: "/group-10.webp",
      position: "top-[297px] left-[977px]",
      width: "415px",
      height: "121px",
    },
    {
      title: "Конструкция",
      description: "Как сделать такую конструкцию, которая даст удобство легкой сборки-разборки в случае перестановки или переезда",
      iconBg: "bg-[url(/building-contruction.webp)] bg-[100%_100%]",
      position: "top-[297px] left-[50px]",
      width: "415px",
      height: "121px",
    },
    {
      title: "Планировка",
      description: "Как сделать планировку учитывая потоки людей для удобного пользования: расположение столов, арки, окна, входы-выходы и прочее",
      iconSrc: "/group-11.webp",
      position: "top-0 left-[847px]",
      width: "459px",
      height: "121px",
    },
    {
      title: "Климат и уют",
      description: "Продумаем расположение систем кондиционирования воздуха или отопления, чтобы обеспечить комфорт клиентам в любых погодных условиях",
      iconSrc: "/group-12.webp",
      position: "top-[594px] left-[847px]",
      width: "513px",
      height: "121px",
    },
    {
      title: "Брендирование",
      description: "Сделаем все, чтобы шатер был выделяющимся с учетом бренд-стратегии без аляпистости и безвкусицы. Правильно расположим элементы: логотип, световые конструкции, флаги, занавески и другие элементы брендирования",
      iconSrc: "/group-13.webp",
      position: "top-[594px] left-[71px]",
      width: "648px",
      height: "121px",
      isWhiteBg: true,
    },
  ];

  return (
    <>
      {/* === نسخة الديسكتوب: تُعرض فقط على الشاشات المتوسطة فأكبر === */}
      <section className="hidden md:block relative w-full py-[70px] px-[40px] left-[-50px]">
        <div className="relative h-[715px] w-[1342px] mx-auto">
          <Image
            className="absolute top-[74px] w-[712px] h-[553px]"
            alt="Tent with curtains"
            src="/tent-with-curtains-i08-1.webp"
            width={712}
            height={553}
            style={{ left: 'calc(50% - 371px)', position: 'absolute', top: '74px' }}
            loading="lazy"
          />

          {featureCards.map((card, index) => (
            <Card
              key={index}
              className={`absolute ${card.position} ${card.isWhiteBg ? "bg-white" : "bg-[#ffffff99]"} rounded-[20px] overflow-hidden shadow-[0px_24px_38px_rgba(22,29,36,0.08)] backdrop-blur-[79px] border-0 `}
              style={{ width: card.width, height: card.height }}
            >
              <CardContent className="p-3.5 relative">
                <div className="inline-flex items-center gap-3">
                  <div className="relative w-[92px] h-[93px] rounded-[52px] bg-[#3C6CEC]">
                    {card.iconSrc ? (
                      <div className="absolute w-[46px] h-[46px] top-[24px] left-[23px]">
                        <Image
                          alt={card.title}
                          src={card.iconSrc}
                          fill
                          style={{ objectFit: 'contain' }}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className={`absolute w-[46px] h-[46px] top-[24px] left-[23px] ${card.iconBg}`} />
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-0.5">
                    <h3 className="font-semibold text-[#394355] text-base leading-6 [font-family:'Raleway']">
                      {card.title}
                    </h3>
                    <p
                      className="font-normal text-[#394355] text-xs leading-5 [font-family:'Raleway']"
                      style={{ width: `calc(${card.width} - 120px)` }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    {/* === نسخة الهاتف: تُعرض فقط على الشاشات الصغيرة، متجاوبة مع جميع الأحجام === */}
<section className="block md:hidden px-5 py-8">
  <div className="flex flex-col items-center gap-6 w-full">
    
    {/* الصورة في الأعلى - تتمدد حسب الشاشة */}
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <Image
        alt="Tent with curtains"
        src="/tent-with-curtains-i08-1.webp"
        width={300}
        height={230}
        className="w-full h-auto object-contain"
        loading="lazy"
      />
    </div>

    {/* البطاقات - تتمدد حسب الشاشة بدون تداخل */}
    <div className="w-full max-w-md space-y-4">
      {featureCards.map((card, index) => (
        <Card
          key={index}
          className={`${card.isWhiteBg ? "bg-white" : "bg-[#ffffff99]"} 
                     rounded-xl overflow-hidden shadow-sm backdrop-blur-md 
                     border border-gray-200 transition-shadow duration-200`}
        >
          <CardContent className="p-4 sm:p-5 flex items-start gap-3">
            {/* الأيقونة على اليسار */}
            <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#3C6CEC] flex items-center justify-center">
              {card.iconSrc ? (
                <Image
                  alt={card.title}
                  src={card.iconSrc}
                  width={36}
                  height={36}
                  className="object-contain w-9 h-9 sm:w-10 sm:h-10"
                  loading="lazy"
                />
              ) : (
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 ${card.iconBg} rounded-sm`}
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
            </div>

            {/* النص على اليمين - يتكيف تلقائيًا */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[#394355] text-sm sm:text-base leading-tight [font-family:'Raleway',Helvetica] mb-1">
                {card.title}
              </h3>
              <p className="font-normal text-[#394355] text-xs sm:text-sm leading-5 [font-family:'Raleway',Helvetica] text-left whitespace-normal break-words">
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
    </>
  );
};