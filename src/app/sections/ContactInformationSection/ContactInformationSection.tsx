'use client';

import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const ContactInformationSection = (): ReactElement => {
  const clientLogos = [
    {
      src: "/image-19.webp",
      alt: "Sberbank logo",
      width: "300px",
      height: "42px",
    },
    {
      src: "/image-20.webp",
      alt: "VTB logo",
      width: "223px",
      height: "50px",
    },
    {
      src: "/image-22.webp",
      alt: "Coca-Cola logo",
      width: "171px",
      height: "74px",
    },
    {
      src: "/image-21.webp",
      alt: "Burger King logo",
      width: "178px",
      height: "100px",
    },
  ];

  return (
    <>
      {/* Desktop Version - FIXED: Removed absolute positioning */}
      <section className="hidden md:block w-full py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <Card
            className="w-full rounded-[30px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] border-0"
          >
            <CardContent className="p-12">
              <div className="flex flex-row items-center justify-between">
                {/* Left content */}
                <div className="flex flex-col items-start gap-8 w-1/2">
                  <h2 className="font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="text-[#527dc5]">Наши клиенты крупные </span>
                    <span className="text-[#232c42]">
                      частные и государственные компании по всей России и СНГ
                    </span>
                  </h2>

                  <p className="font-normal text-[#232c42] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    Работаем по 44-ФЗ и 223-ФЗ. Можем заключить контракт,
                    как с единственным поставщиком в рамках этих законов
                  </p>
                </div>

                {/* Right content with logos */}
                <div className="w-1/2 pl-12">
                  <div className="relative w-full h-[300px]">
                    {/* Logos positioned relative to container */}
                    <div className="relative w-full h-full">
                      {clientLogos.map((logo, index) => {
                        // Calculate positions for logos in a circle
                        const angle = (index / clientLogos.length) * 2 * Math.PI;
                        const radius = 100;
                        const x = 150 + radius * Math.cos(angle) - parseInt(logo.width) / 4;
                        const y = 150 + radius * Math.sin(angle) - parseInt(logo.height) / 4;

                        return (
                          <Image
                            key={index}
                            alt={logo.alt}
                            src={logo.src}
                            className="absolute"
                            style={{
                              left: `${x}px`,
                              top: `${y}px`,
                            }}
                            width={parseInt(logo.width) / 1.5}
                            height={parseInt(logo.height) / 1.5}
                            loading="lazy"
                          />
                        );
                      })}
                    </div>

                    {/* "and 100+ more" text */}
                    <div className="flex justify-center mt-8">
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mobile Version */}
      <div className="block md:hidden relative">
        <Card
          className="w-full h-auto py-8 px-4 rounded-[30px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] [-webkit-backdrop-filter:blur(158px)] border-0"
        >
          <CardContent className="p-0">
            <div className="flex flex-col items-start h-full">
              {/* Text content - aligned left */}
              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="font-semibold text-2xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0] text-left">
                  <span className="text-[#527dc5]">Наши клиенты крупные </span>
                  <span className="text-[#232c42]">
                    частные и государственные компании по всей России и СНГ
                  </span>
                </h2>

                <p className="font-normal text-[#232c42] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] text-left">
                  Работаем по 44-ФЗ и 223-ФЗ. Можем заключить контракт,
                  как с единственным поставщиком в рамках этих законов
                </p>
              </div>

              {/* Logos section - centered */}
              <div className="mt-6 w-full">
                <div className="grid grid-cols-2 gap-4 place-items-center">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center">
                      <Image
                        alt={logo.alt}
                        src={logo.src}
                        width={parseInt(logo.width) / 2}
                        height={parseInt(logo.height) / 2}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-4">
                  <p className="font-normal text-[#4f5d80] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="font-medium">и </span>
                    <span className="font-extrabold">еще 100+</span>
                    <span className="font-medium"> известных компаний</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};