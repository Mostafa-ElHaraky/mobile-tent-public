'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import Image from 'next/image';
import { ReactElement } from 'react';

export const GroupWrapperShatry3 = (): ReactElement => {
  // Updated tent types with unique titles and editable URLs
  const tentTypes = [
    { 
      id: 1, 
      image: "/mobilny1.webp", 
      title: "Мобильные шатры",
      url: "/shatry-i-navesy/mobilnye" 
    },
    { 
      id: 2, 
      image: "/pagda1.webp", 
      title: "Пагода шатры",
      url: "/shatry-i-navesy/pagoda" 
    },
    { 
      id: 3, 
      image: "/1.webp", 
      title: "Арочные шатры",
      url: "/shatry-i-navesy/arochnye" 
    },
    { 
      id: 4, 
      image: "/bigsizes.webp", 
      title: "Большие шатры",
      url: "/shatry-i-navesy/bolshie" 
    },
    { 
      id: 5, 
      image: "/zvezda.webp", 
      title: "Шатер Звезда",
      url: "/shatry-i-navesy/shater-zvezda" 
    },
    { 
      id: 6, 
      image: "/shesteg1.webp", 
      title: "Шестигранные шатры",
      url: "/shatry-i-navesy/shestigrannye" 
    },
    { 
      id: 7, 
      image: "/kopal1.webp", 
      title: "Купольные шатры",
      url: "/shatry-i-navesy/kruglye" 
    },
    { 
      id: 8, 
      image: "/natyag.webp", 
      title: "Натяжные шатры",
      url: "/shatry-i-navesy/natyagnye" 
    },
  ];

  return (
    <>
      {/* نسخة الديسكتوب الأصلية بدون أي تغيير */}
      <section className="relative bottom-[390px] w-full py-16 px-12 hidden md:block">
        <div className="flex flex-col items-start gap-9">
          <h2 className="font-semibold text-4xl text-[#232c42] font-['Raleway',Helvetica]">
            Посмотрите другие типы шатров
          </h2>

          <Card className="w-full shadow backdrop-blur-[79px] border-0 backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] rounded-[20px]">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tentTypes.map((tent) => (
                  <div key={tent.id} className="flex flex-col gap-3">
                    <div className="bg-[#f5f6ff] rounded-[10px] p-2.5 px-4">
                      <div className="flex items-start gap-2">
                        <Image
                          src={tent.image}
                          alt={tent.title}
                          width={43}
                          height={33}
                          className="w-[43px] h-[33px]"
                          loading="lazy"
                        />
                        <div className="flex flex-col gap-2">
                          <h3 className="font-bold text-[#527dc5] text-xl leading-6 font-['Raleway',Helvetica]">
                            {tent.title}
                          </h3>
                          <a
                            href={tent.url} // Updated href with dynamic URL
                            className="font-normal text-[#394355] text-base leading-6 underline font-['Raleway',Helvetica]"
                          >
                            Смотреть
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* نسخة الهاتف الجديدة */}
      <section className="relative w-full py-8 px-4 block md:hidden mt-[-120]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-semibold text-2xl text-[#232c42] font-['Raleway',Helvetica] text-center">
            Посмотрите другие типы шатров
          </h2>

          <Card className="w-full shadow backdrop-blur-[20px] border-0 backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] rounded-[15px]">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 gap-4">
                {tentTypes.map((tent) => (
                  <div key={tent.id} className="flex flex-col">
                    <div className="bg-[#f5f6ff] rounded-[8px] p-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={tent.image}
                          alt={tent.title}
                          width={35}
                          height={27}
                          className="w-[35px] h-[27px]"
                          loading="lazy"
                        />
                        <div className="flex flex-col">
                          <h3 className="font-bold text-[#527dc5] text-lg leading-5 font-['Raleway',Helvetica]">
                            {tent.title}
                          </h3>
                          <a
                            href={tent.url}
                            className="font-normal text-[#394355] text-sm leading-5 underline font-['Raleway',Helvetica]"
                          >
                            Смотреть
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};