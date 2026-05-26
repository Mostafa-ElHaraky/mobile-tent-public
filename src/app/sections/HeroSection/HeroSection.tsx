'use client';

import { Card, CardContent } from "../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const HeroSection = (): ReactElement => {
  // Feature items data
  const featureItems = [
    {
      id: 1,
      icon: "/tent5647818-------1.webp",
      title: "Выдаем документы:",
      description:
        "договор, акт доставки и выполненных работ, паспорт, инструкция, сертификаты и еще более 10 документов",
      hasCircle: true,
    },
    {
      id: 2,
      icon: "/M011t0367-d-gold-coin-06july22-------1.webp",
      title: "Работаем с любыми видами бизнеса и методами оплаты:",
      description: "ИП, ООО, НДС, счета, безнал, карты и пр.",
      hasCircle: true,
    },
    {
      id: 3,
      icon: "/Lock--1-------1.webp",
      title: "Не разглашаем",
      description: "конфиденциальные данные",
      hasCircle: false,
    },
  ];

  // Guarantee cards data
  const guaranteeCards = [
    {
      id: 1,
      years: "5 лет",
      description: "на конструкцию",
      position: "top-[180px] left-[684px]",
    },
    {
      id: 2,
      years: "10 лет",
      description: "на ткань",
      position: "top-[180px] left-[1026px]",
    },
    {
      id: 3,
      years: "50 лет",
      description: "на сварные швы",
      position: "top-[332px] left-[684px]",
    },
    {
      id: 4,
      years: "25 лет",
      description: "на отсутствие коррозии",
      position: "top-[332px] left-[1026px]",
    },
  ];

  return (
    <>
      {/* Desktop Version - Original Code (Unchanged) */}
      <section className="relative w-full max-w-[1344px] min-h-[600px] mx-auto px-12 pb-12 overflow-visible hidden desktop:block">
        {/* Headline */}
        <div className="relative w-full max-w-[620px] pt-20 font-semibold text-4xl leading-[1.2] [font-family:'Raleway',Helvetica] tracking-normal whitespace-normal">
          <span className="text-[#527dc5]">Заключаем договор</span>
          <span className="text-[#232c42]"> с гарантиями сроков, цены и качества</span>
        </div>

        {/* Subtitle */}
        <div className="flex items-start gap-3 mt-4">
          <div className="relative w-fit font-medium text-[#4f5d80] text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
            Фиксируем их и не меняем
          </div>
        </div>
                                  
        {/* Main Guarantee Card */}
        <Card className="absolute top-[80px] left-[684px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0">
          <CardContent className="px-[27px] py-[17px]">
            <div className="flex flex-col items-start gap-2.5">
              <div className="relative w-fit mt-[-1.00px] font-bold text-xl leading-normal whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Честные</span>
                <span className="text-[#232c42]"> гарантии</span>
              </div>

              <div className="flex items-start gap-7">
                <div className="flex flex-col items-start gap-1.5">
                  <div className="relative w-[604px] mt-[-1.00px] font-normal text-[#394355] text-sm leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                    99% клиентов не воспользовались, но даем для вашего
                    спокойствия
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features list */}
        <div className="flex flex-col items-start gap-[30px] mt-12">
          {featureItems.map((item) => (
            <div key={item.id} className="flex items-center gap-[29px]">
              <div className="relative w-[75px] h-[75px]">
                {item.hasCircle ? (
                  <div className="relative w-[141px] h-[150px] top-[-7px] left-[-38px]">
                    <div className="absolute w-[75px] h-[75px] top-[18px] left-[38px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <Image
                      className="absolute top-0 left-0"
                      alt="Feature icon"
                      src={item.icon}
                      width={141}
                      height={150}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <>
                    <div className="absolute w-[75px] h-[75px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <Image
                      className="absolute top-0 left-[17px]"
                      alt="Lock"
                      src={item.icon}
                      width={42}
                      height={68}
                      loading="lazy"
                    />
                  </>
                )}
              </div>

              <div className="relative w-[345px] font-normal text-[#394355] text-base leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold">{item.title}</span>
                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-5">
                  {" "}
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Grid Cards */}
        {guaranteeCards.map((card) => (
          <Card
            key={card.id}
            className={`absolute w-[318px] h-[159px] ${card.position} bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0`}
          >
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-1.5 relative top-12 left-[27px]">
                <div className="relative w-fit mt-[-1.00px] [text-shadow:0px_0px_0px_#3C6CEC]  [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-transparent text-[46px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {card.years}
                </div>
                <div className="relative w-fit font-normal text-lg leading-[normal] [font-family:'Raleway',Helvetica] text-[#394355] tracking-[0] whitespace-nowrap">
                  {card.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Mobile/Tablet Version - Responsive Layout */}
      <section className="block desktop:hidden w-full px-4 py-8 max-w-4xl mx-auto">
        {/* Main Headline */}
        <div className="w-full pt-0 font-semibold text-2xl md:text-3xl leading-[1.2] [font-family:'Raleway',Helvetica] tracking-normal space-y-1 md:text-center">
          <div className="text-[#527dc5]">Заключаем договор</div>
          <div className="text-[#232c42]">с гарантиями сроков, цены и качества</div>
        </div>

        {/* Subtitle */}
        <div className="flex items-start md:justify-center gap-3 mt-2">
          <div className="relative w-fit font-medium text-[#4f5d80] text-base md:text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0] md:text-center">
            Фиксируем их и не меняем
          </div>
        </div>
                                  
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
          {featureItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="relative w-[60px] h-[60px] md:w-[75px] md:h-[75px] flex-shrink-0">
                {item.hasCircle ? (
                  <div className="relative w-[100px] h-[100px] md:w-[141px] md:h-[150px] top-[-7px] left-[-20px] md:left-[-38px]">
                    <div className="absolute w-[60px] h-[60px] md:w-[75px] md:h-[75px] top-[18px] left-[20px] md:left-[38px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <Image
                      className="absolute top-0 left-0"
                      alt="Feature icon"
                      src={item.icon}
                      width={141}
                      height={150}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <>
                    <div className="absolute w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <Image
                      className="absolute top-0 left-[10px] md:left-[17px]"
                      alt="Lock"
                      src={item.icon}
                      width={42}
                      height={68}
                      loading="lazy"
                    />
                  </>
                )}
              </div>

              <div className="font-normal text-[#394355] text-sm md:text-base leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold">{item.title}</span>
                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm md:text-base tracking-[0] leading-5">
                  {" "}
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Guarantee Card */}
        <Card className="mt-8 md:mt-12 bg-white rounded-[20px] shadow-md border-0">
          <CardContent className="p-4 md:p-8">
            <div className="flex flex-col gap-4 md:gap-8">
              {/* Header section */}
              <div className="md:text-center">
                <div className="font-bold text-lg md:text-2xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="text-[#527dc5]">Честные</span>
                  <span className="text-[#232c42]"> гарантии</span>
                </div>
                <div className="font-normal text-[#394355] text-sm md:text-base leading-normal mt-1 [font-family:'Raleway',Helvetica]">
                  99% клиентов не воспользовались, но даем для вашего спокойствия
                </div>
              </div>

              {/* Guarantee items grid */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
                {guaranteeCards.map((card) => (
                  <div key={card.id} className="flex flex-col items-start md:items-center pb-6">
                    <div className="[text-shadow:0px_0px_0px_#3C6CEC] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-transparent text-3xl md:text-5xl [font-family:'Raleway',Helvetica]">
                      {card.years}
                    </div>
                    <div className="font-normal text-sm md:text-lg [font-family:'Raleway',Helvetica] text-[#394355]">
                      {card.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};
