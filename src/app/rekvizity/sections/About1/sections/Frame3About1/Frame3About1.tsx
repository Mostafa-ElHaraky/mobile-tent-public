'use client';

import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement, useState } from 'react';
import Image from 'next/image';

export const Frame3About1 = (): ReactElement => {
  const [activeCarousel, setActiveCarousel] = useState("diplomas");
  
  const carousels = [
    {
      id: "diplomas",
      label: "Дипломы",
      buttonClass: "bg-[#527dc5] hover:bg-[#4269af]",
      images: [
        { src: "/About1-rectangle-44.webp", alt: "Diploma 1" },
        { src: "/About1-rectangle-45.webp", alt: "Diploma 2" },
        { src: "/About1-rectangle-46.webp", alt: "Diploma 3" },
      ],
      positionClass: "ml-[40px]",
      layout: "horizontal",
    },
    {
      id: "certificates",
      label: "Сертификаты",
      buttonClass:
        "[background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] hover:opacity-90",
      images: [
        { src: "/About1-rectangle-44-1.webp", alt: "Certificate 1" },
        { src: "/About1-rectangle-45-1.webp", alt: "Certificate 2" },
        { src: "/About1-rectangle-46-1.webp", alt: "Certificate 3" },
      ],
      positionClass: "mr-[40px]",
      layout: "horizontal",
    },
  ];

  return (
    <>
      {/* Desktop version - remains unchanged */}
      <main className="relative top-[650px] hidden desktop:block">
        <section className="flex flex-col items-center gap-[45px] w-full py-12 relative right-[60px] ">
          <div className="flex flex-col w-full max-w-[990px] items-center gap-3">
            <h2 className="font-semibold text-4xl text-center leading-normal font-['Raleway',Helvetica] tracking-[0]">
              <span className="text-[#527dc5]">Участвуем</span>
              <span className="text-[#232c42]"> в конференциях и выставках</span>
            </h2>
          </div>

          <div className="flex flex-row justify-center gap-[300px] w-full max-w-[1200px]">
            {carousels.map((carousel) => (
              <Card
                key={carousel.id}
                className={`w-[314px] border-none shadow-none ${carousel.positionClass}`}
              >
                <CardContent className="p-0 relative h-[404px]">
                  <div
                    className={`relative ${
                      carousel.layout === "vertical"
                        ? "w-[314px] h-[404px]"
                        : "w-[960px] h-[404px]"
                    }`}
                  >
                    {carousel.images.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute w-[314px] h-[404px] ${
                          carousel.layout === "vertical"
                            ? `top-[${index * 20}px] left-[${index * 10}px] z-[${10 - index}]`
                            : `top-0 left-[${index * 60}px] z-[${10 - index}]`
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={314}
                          height={404}
                          loading="lazy"
                          className="object-cover rounded-xl"
                        />
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`h-[49px] w-[150px] absolute bottom-[80px] left-[20px] rounded-[10px] px-4 py-[7px] ${carousel.buttonClass}`}
                  >
                    <span className="[text-shadow:0px_4px_4px_#00000040] font-bold text-white text-lg leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                      {carousel.label}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile version with corrected layout */}
      <main className="relative desktop:hidden px-4 py-8 mt-10">
        <section className="flex flex-col items-center gap-8 w-full">
          {/* Title */}
          <div className="flex flex-col w-full items-center gap-3 mb-6">
            <h2 className="font-semibold text-2xl text-center leading-normal font-['Raleway',Helvetica]">
              <span className="text-[#527dc5]">Участвуем</span>
              <span className="text-[#232c42]"> в конференциях и выставках</span>
            </h2>
          </div>

         {/* Сертификаты section - Images with overlapping effect */}
<div className="w-full mb-4">
  <div className="flex justify-center pb-0">
    <div className="flex relative" style={{ height: '200px' }}>
      {carousels[1].images.map((image, index) => (
        <div 
          key={index} 
          className="absolute"
          style={{ 
            left: `${index * 80}px`,
            zIndex: index + 1,
          }}
        >
          <div className="w-36 h-44 relative relative -left-35">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              className="object-contain rounded-lg"
              sizes="(max-width: 640px) 176px, 144px"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="flex justify-center -mt-2 ">
    <Button className={`h-10 w-40 rounded-lg ${carousels[1].buttonClass}`}>
      <span className="font-bold text-white text-base">Сертификаты</span>
    </Button>
  </div>
</div>

{/* Дипломы section - Images with overlapping effect */}
<div className="w-full mb-4">
  <div className="flex justify-center pb-0 relative -left-35">
    <div className="flex relative" style={{ height: '200px' }}>
      {carousels[0].images.map((image, index) => (
        <div 
          key={index} 
          className="absolute"
          style={{ 
            left: `${index * 80}px`,
            zIndex: index + 1,
          }}
        >
          <div className="w-36 h-44 relative relative -left-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              className="object-contain rounded-lg"
              sizes="(max-width: 640px) 200px, 144px"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="flex justify-center -mt-2 ">
    <Button className={`h-10 w-40 rounded-lg ${carousels[0].buttonClass}`}>
      <span className="font-bold text-white text-base">Дипломы</span>
    </Button>
  </div>
</div>
        </section>
      </main>
    </>
  );
};