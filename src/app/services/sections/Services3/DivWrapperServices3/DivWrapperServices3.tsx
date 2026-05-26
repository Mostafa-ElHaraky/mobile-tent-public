'use client';

import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const DivWrapperServices3 = (): ReactElement => {
  // Data for feature cards to enable mapping
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


  return (
    <>
      {/* Desktop Version - لا تغيير هنا */}
      <section className="relative max-w-[1440px] h-[418px] hidden md:block">
        <Card className="relative w-full max-w-[1440px] h-[418px] rounded-[20px] overflow-hidden [background:linear-gradient(180deg,rgba(242,246,255,1)_0%,rgba(249,249,249,1)_100%,rgba(255,255,255,1)_100%)] border-0">
          <CardContent className="p-0">
            {/* Left text content */}
            <div className="flex flex-col items-start gap-5 absolute top-[127px] left-[108px]">
              <h2 className="w-[379px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Заключаем договор</span>
                <span className="text-[#232c42]">
                  {" "}
                  с гарантиями сроков, цены и качества
                </span>
              </h2>
    
              <div className="flex items-start gap-3">
                <p className="w-fit font-medium text-[#4f5d80] text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Фиксируем их и не меняем
                </p>
              </div>
            </div>
    
            {/* Right features */}
            <div className="flex flex-col items-start gap-[30px] absolute top-[54px] left-[921px]">
            {featureItems.map((item) => (
            <div key={item.id} className="flex items-center gap-[29px]">
              <div className="relative w-[75px] h-[75px]">
                {item.hasCircle ? (
                  <div className="relative w-[141px] h-[150px] top-[-7px] left-[-38px]">
                    <div className="absolute w-[75px] h-[75px] top-[18px] left-[38px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <Image
                      src={item.icon}
                      alt="Feature icon"
                      width={141}
                      height={150}
                      className="absolute top-0 left-0"
                      style={{
                        width: '141px',
                        height: '150px',
                      }}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <>
                    <div className="absolute w-[75px] h-[75px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <Image
                      src={item.icon}
                      alt="Lock"
                      width={42}
                      height={68}
                      className="absolute top-0 left-[17px]"
                      style={{
                        width: '42px',
                        height: '68px',
                      }}
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
          </CardContent>
        </Card>
        {/* Middle image */}
        {/* Middle image with adjustable gradient overlay */}
        <div className="absolute bottom-[-2px] left-[430px] w-[438px] h-[472px]">
          <div 
            className="relative w-full h-full"
            style={{
              background: `
                linear-gradient(180deg, rgba(255,255,255,0) 81.48%, #FFFFFF 100%),
                url('/element8-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp')
              `,
              backgroundSize: 'contain, cover',
              backgroundPosition: 'center 30%, center', // Adjust the 30% to move gradient vertically
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'normal, normal'
            }}
          />
        </div>
      </section>

      {/* Mobile Version - نسخة الهاتف */}
      <section className="relative w-full min-h-[650px] md:hidden px-4 py-8">
        <Card className="relative w-full min-h-[650px] rounded-[20px] overflow-hidden [background:linear-gradient(180deg,rgba(242,246,255,1)_0%,rgba(249,249,249,1)_100%,rgba(255,255,255,1)_100%)] border-0">
          <CardContent className="p-4">
            {/* Header text content */}
            <div className="flex flex-col items-center gap-4 mb-6 text-center">
              <h2 className="font-semibold text-2xl [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Заключаем договор</span>
                <span className="text-[#232c42]">
                  {" "}
                  с гарантиями сроков, цены и качества
                </span>
              </h2>
    
              <div className="flex justify-center">
                <p className="font-medium text-[#4f5d80] text-base [font-family:'Raleway',Helvetica] tracking-[0]">
                  Фиксируем их и не меняем
                </p>
              </div>
            </div>
  
            {/* Middle image for mobile */}
            <div className="relative w-full h-[250px] mb-6">
              <div 
                className="relative w-full h-full"
                style={{
                  background: `
                    linear-gradient(180deg, rgba(255,255,255,0) 70%, #FFFFFF 100%),
                    url('/element8-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.webp')
                  `,
                  backgroundSize: 'contain, cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
    
            {/* Features for mobile */}
            <div className="flex flex-col gap-6">
              {featureItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-4 text-center">
                  <div className="relative w-[60px] h-[60px]">
                    {item.hasCircle ? (
                      <div className="relative w-[100px] h-[100px] top-[-5px] left-[-20px]">
                        <div className="absolute w-[60px] h-[60px] top-[15px] left-[20px] rounded-[40px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                        <div className="relative w-[100px] h-[100px]">
                          <Image
                            src={item.icon}
                            alt="Feature icon"
                            width={100}
                            height={100}
                            className="absolute top-0 left-0"
                            style={{
                              width: '100px',
                              height: '100px',
                            }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="absolute w-[60px] h-[60px] rounded-[40px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                        <div className="relative w-[34px] h-[54px]">
                          <Image
                            src={item.icon}
                            alt="Lock"
                            width={34}
                            height={54}
                            className="absolute top-0 left-[13px]"
                            style={{
                              width: '34px',
                              height: '54px',
                            }}
                            loading="lazy"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="font-normal text-[#394355] text-sm [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="font-semibold">{item.title}</span>
                    <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0]">
                      {" "}
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};