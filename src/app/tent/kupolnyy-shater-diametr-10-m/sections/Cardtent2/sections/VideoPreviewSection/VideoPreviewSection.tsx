'use client';

import React from "react";
import { Badge } from "../../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';

export const VideoPreviewSection = (): ReactElement => {
  // Data for the pavilion cards
  const pavilionCards = [
    {
      id: 1,
      title: "Арочный шатер 8х8м (36м2)",
      originalPrice: "230 000 ₽",
      discountPercentage: "-30%",
      currentPrice: "от 150 000 ₽",
      imageUrl: "/15-9bf6ff67-------1-8.webp",
    },
    {
      id: 2,
      title: "Арочный шатер 8х8м (36м2)",
      originalPrice: "230 000 ₽",
      discountPercentage: "-30%",
      currentPrice: "от 150 000 ₽",
      imageUrl: "/15-9bf6ff67-------1-8.webp",
    },
    {
      id: 3,
      title: "Арочный шатер 8х8м (36м2)",
      originalPrice: "230 000 ₽",
      discountPercentage: "-30%",
      currentPrice: "от 150 000 ₽",
      imageUrl: "/15-9bf6ff67-------1-8.webp",
    },
  ];

  return (
    <>
      {/* Desktop Version */}
    <section className="flex flex-col items-start gap-9 w-full py-12">
      <h2 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
        Этот шатер в других размерах
      </h2>

      <div className="flex flex-wrap items-start gap-6">
        {pavilionCards.map((card) => (
          <Card
            key={card.id}
            className="w-[432px] h-[469px] rounded-[20px] border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
          >
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-[22px] p-[33px]">
                <div
                  className="relative w-[350px] h-[197px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                >
                  <div className="flex items-start gap-1 absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-[7px] h-[7px] rounded-[3.5px] bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                    <div className="w-[7px] h-[7px] bg-[#d9d9d9] rounded-[3.5px]" />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-9">
                  <div className="flex flex-col items-start gap-6">
                    <h3 className="font-bold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start gap-3">
                    <p className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                      Цена:
                    </p>

                    <div className="flex items-start gap-9">
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-[#4f5d80d9] text-base leading-6 line-through [font-family:'Raleway',Helvetica]">
                          {card.originalPrice}
                        </span>

                        <Badge className="px-2 py-1 rounded-lg bg-[linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)] border-0">
                          <span className="font-bold text-white text-sm [font-family:'Raleway',Helvetica]">
                            {card.discountPercentage}
                          </span>
                        </Badge>
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-col items-start gap-3">
                          <p className="font-bold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                            {card.currentPrice}
                          </p>
                        </div>

                        <p className="w-[190px] text-[10px] leading-[10px] [font-family:'Raleway',Helvetica]">
                          <span className="italic text-[#eb3c3c]">*</span>
                          <span className="italic text-[#394355] leading-[0.1px]">
                            В зависимости от включенных опций
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="font-bold text-[#527dc5] text-xl leading-6 underline [font-family:'Raleway',Helvetica]"
                >
                  Смотреть
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

      {/* Mobile Version */}
      <section className="block md:hidden flex-col items-start gap-6 w-full py-8 px-4">
        <h2 className="font-semibold text-[#232c42] text-2xl [font-family:'Raleway',Helvetica]">
          Этот шатер в других размерах
        </h2>

        <div className="flex flex-col items-start gap-4 w-full">
          {pavilionCards.map((card) => (
            <Card
              key={`mobile-${card.id}`}
              className="w-full rounded-[16px] border-[#dddddd] shadow-sm"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-start gap-4">
                  <div
                    className="relative w-full h-40 bg-cover bg-center rounded-[12px]"
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  >
                    <div className="flex items-start gap-1 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-[6px] h-[6px] rounded-full bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                      <div className="w-[6px] h-[6px] bg-[#d9d9d9] rounded-full" />
                      <div className="w-[6px] h-[6px] bg-[#d9d9d9] rounded-full" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="flex flex-col items-start gap-3">
                      <h3 className="font-bold text-[#394355] text-lg [font-family:'Raleway',Helvetica]">
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex flex-col items-start gap-3 w-full">
                      <p className="font-normal text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
                        Цена:
                      </p>

                      <div className="flex flex-col items-start gap-3 w-full">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#4f5d80d9] text-sm line-through [font-family:'Raleway',Helvetica]">
                            {card.originalPrice}
                          </span>

                          <Badge className="px-2 py-1 rounded-md bg-[linear-gradient(180deg,rgba(255,115,115,1)_0%,rgba(255,111,111,1)_37%,rgba(236,60,60,1)_100%)] border-0">
                            <span className="font-bold text-white text-xs [font-family:'Raleway',Helvetica]">
                              {card.discountPercentage}
                            </span>
                          </Badge>
                        </div>

                        <div className="flex flex-col items-start gap-1">
                          <div className="flex flex-col items-start">
                            <p className="font-bold text-[#394355] text-xl [font-family:'Raleway',Helvetica]">
                              {card.currentPrice}
                            </p>
                          </div>

                          <p className="text-[10px] [font-family:'Raleway',Helvetica]">
                            <span className="italic text-[#eb3c3c]">*</span>
                            <span className="italic text-[#394355]">
                              В зависимости от включенных опций
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="font-bold text-[#527dc5] text-lg underline [font-family:'Raleway',Helvetica] mt-2"
                  >
                    Смотреть
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};