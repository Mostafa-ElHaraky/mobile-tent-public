'use client';

import { Card, CardContent } from "../../../components/ui/card";
import Image from "next/image";
import { ReactElement } from 'react';

export const TestimonialsSection = (): ReactElement => {
  // Data for testimonial cards
  const testimonialCards = [
    {
      id: 1,
      title: "Ветер",
      iconPath: "/Clip-path-group.webp",
      isImage: false,
      width: 90,
      height: 90,
    },
    {
      id: 2,
      title: "Дождь, снег, град",
      iconPath: "/GROP.webp",
      isImage: true,
      width: 50,
      height: 50,
    },
    {
      id: 3,
      title: "Огонь",
      iconPath: "/GROP-1.webp",
      isImage: true,
      width: 40,
      height: 40,
    },
  ];

  return (
    <>
      {/* Desktop Version (unchanged) */}
      <section className="hidden md:block relative top-[50px] w-full py-12 rounded-[30px] bg-[#394355]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-4xl leading-normal font-normal">
                <span className="font-normal text-white">Нашим </span>
                <span className="font-bold text-[#86b4ff]">шатрам<br /></span>
                <span className="font-bold text-[#86b4ff]">не страшны</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-[35px] justify-center">
              {testimonialCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-[260px] h-[116px] bg-white rounded-[20px] shadow-none border-0 "
                >
                  <CardContent className="p-0 flex items-center">
                    <div
                      className="w-[90px] h-[90px] rounded-[45px] flex items-center justify-center ml-[13px] my-[13px]"
                      style={{
                        background: "linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)",
                      }}
                    >
                      {card.isImage ? (
                        <Image
                          src={card.iconPath}
                          alt={card.title}
                          width={card.width}
                          height={card.height}
                          className="object-contain"
                          quality={100}
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className="w-12 h-12"
                          style={{
                            backgroundImage: "url(/Clip-path-group.webp)",
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat"
                          }}
                        />
                      )}
                    </div>
                    <div className="font-bold text-2l text-[#394355] leading-5 ml-6 font-['Raleway',Helvetica]">
                      {card.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Version */}
      <section className="md:hidden relative top-[30px] w-full py-8 rounded-[30px] bg-[#394355]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-6 text-center">
              <h2 className="text-3xl leading-normal font-normal">
                <span className="font-normal text-white">Нашим </span>
                <span className="font-bold text-[#86b4ff]">шатрам </span>
                <span className="font-bold text-[#86b4ff]">не страшны</span>
              </h2>
            </div>

            <Card className="w-full bg-white rounded-[20px] shadow-none border-0 p-4">
              <CardContent className="p-0">
                <div className="flex flex-row justify-between items-center">
                  {testimonialCards.map((card) => (
                    <div key={card.id} className="flex flex-col items-center mx-1">
                      <div
                        className="w-[60px] h-[60px] rounded-[30px] flex items-center justify-center"
                        style={{
                          background: "linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)",
                        }}
                      >
                        {card.isImage ? (
                          <Image
                            src={card.iconPath}
                            alt={card.title}
                            width={card.width * 0.7}
                            height={card.height * 0.7}
                            className="object-contain"
                            quality={100}
                            loading="lazy"
                          />
                        ) : (
                          <div
                            className="w-8 h-8"
                            style={{
                              backgroundImage: "url(/Clip-path-group.webp)",
                              backgroundSize: "100% 100%",
                              backgroundRepeat: "no-repeat"
                            }}
                          />
                        )}
                      </div>
                      <div className="font-bold text-sm text-[#394355] leading-4 mt-2 text-center font-['Raleway',Helvetica]">
                        {card.title}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};