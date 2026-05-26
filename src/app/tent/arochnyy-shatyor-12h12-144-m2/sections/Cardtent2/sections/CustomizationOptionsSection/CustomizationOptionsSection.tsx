'use client';

import React, { useState } from "react";
import { Badge } from "../../../../../../../components/ui/badge";
import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../../../../components/ui/card";
import { ReactElement } from 'react';
import Consultaionfor3d from '../../../../../../../components/ui/Consultaionfor3d';
import Image from "next/image";
import { motion } from "framer-motion";

export const CustomizationOptionsSection = (): ReactElement => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Data for the pricing tiers (unchanged)
  const pricingTiers = [
    {
      name: "Базовая",
      badgeStyle:
        "bg-[#e8edf7] text-transparent bg-[linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]",
      specs: [
        { label: "Ткань тента SIOIEN - Китай", value: "" },
        { label: "Плотность тента:", value: "640 гр/м" },
        { label: "Профиль каркаса :", value: "труба 40*3 мм" },
        { label: "Цинкование каркаса:", value: "холодное 70 микрон" },
        { label: "Фурнитура :", value: "Китай" },
      ],
      price: "от 150 000 ₽",
      badgeBackground: "bg-[#e8edf7]",
    },
    {
      name: "Средняя",
      badgeStyle: "text-white",
      specs: [
        { label: "Ткань тента Диксон - Франция", value: "" },
        { label: "Плотность тента:", value: "640 гр/м" },
        { label: "Профиль каркаса :", value: "труба 60x3" },
        { label: "Цинкование каркаса:", value: "горячее 50 микрон" },
        { label: "Фурнитура :", value: "Россия" },
      ],
      price: "от 250 000 ₽",
      badgeBackground:
        "bg-[linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]",
    },
    {
      name: "Максимальная",
      badgeStyle: "text-white",
      specs: [
        { label: "Ткань тента Диксон - Франция", value: "" },
        { label: "Плотность тента:", value: "960 гр/м" },
        { label: "Профиль каркаса :", value: "труба 76*3 мм" },
        { label: "Цинкование каркаса:", value: "горячее 150 микрон" },
        { label: "Фурнитура :", value: "Польша" },
      ],
      price: "от 250 000 ₽",
      badgeBackground:
        "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]",
    },
  ];

  // Data for additional features (11 items – you can add the remaining 3 if needed)
  const additionalFeatures = [
    { name: "Полы", image: "/sec10-card1.webp" },
    { name: "Кондиционеры", image: "/sec10-card2.webp" },
    { name: "Туалеты", image: "/toilet.jpeg" },
    { name: "Входные группы", image: "/sec10-card4.webp" },
    { name: "Брендирование конструкции", image: "/sec10-card5.webp" },
    { name: "Декор конструкции", image: "/sec10-card6.webp" },
    { name: "Обогревательные системы", image: "/sec10-card7.webp" },
    { name: "Мебель", image: "/sec10-card8.webp" },
    { name: "Освещение шатров", image: "/sec10-card9.webp" },
    { name: "Остекление шатров", image: "/sec10-card10.webp" },
    { name: "Пневмокровля шатров", image: "/sec10-card11.webp" },
  ];

  const buttonGradient =
    "bg-[linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]";

  return (
    <>
      {/* Consultation Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Consultaionfor3d onClose={() => setIsPopupOpen(false)} />
        </div>
      )}

      {/* Desktop Version */}
      <section className="hidden md:flex flex-col gap-16 py-8">
        {/* Pricing Tiers */}
        <div className="flex flex-row gap-[25px]">
          {pricingTiers.map((tier, index) => (
            <Card
              key={`tier-${index}`}
              className="flex-1 border border-solid border-[#dddddd] rounded-[20px] shadow backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] overflow-hidden"
            >
              <CardContent className="p-[30px]">
                <div className="flex flex-col gap-[35px]">
                  <Badge
                    className={`w-fit px-3 py-2 rounded-[50px] font-semibold text-2xl leading-6 ${tier.badgeBackground} ${tier.badgeStyle} [font-family:'Raleway',Helvetica]`}
                  >
                    {tier.name}
                  </Badge>

                  <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        {tier.specs.map((spec, specIndex) => (
                          <div
                            key={`spec-${index}-${specIndex}`}
                            className="flex items-start gap-2"
                          >
                            <div className="mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-lg tracking-[0] leading-6 whitespace-nowrap">
                              {spec.label}
                            </div>
                            {spec.value && (
                              <div className="mt-[-1.00px] [font-family:'Raleway',Helvetica] font-medium text-[#394355] text-lg tracking-[0] leading-6 whitespace-nowrap">
                                {spec.value}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-3">
                      <div className="mt-[-1.00px] [font-family:'Raleway',Helvetica] font-bold text-[#394355] text-4xl leading-[normal] whitespace-nowrap">
                        {tier.price}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-[30px] pb-[30px] pt-0">
                <Button
                  className={`w-full h-[68px] rounded-2xl border-none shadow-2 ${buttonGradient} relative`}
                  onClick={() => setIsPopupOpen(true)}
                >
                  <span className="font-semibold text-white text-base text-center leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                    Рассчитать под размер
                    <br />+ консультация
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* New Features Section – full image cards with overlay text */}
        <div className="flex flex-col items-start gap-8 w-full">
          <div className="max-w-3xl">
            <h3 className="font-['Raleway',Helvetica] font-semibold text-3xl text-[#232c42] leading-tight">
              Любой шатер может быть спроектирован и оснащен под ваши цели и задачи:
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {additionalFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="group"
              >
                <Card className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                  {/* Full‑card image */}
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  {/* Text overlay – centered at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h4 className="font-['Raleway',Helvetica] font-bold text-white text-lg leading-tight text-center">
                      {feature.name}
                    </h4>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="block md:hidden w-full py-6 px-4">
        <div className="flex flex-col gap-10">
          {/* Pricing Tiers (Mobile) */}
          <div className="flex flex-col gap-6">
            {pricingTiers.map((tier, index) => (
              <Card
                key={`tier-mobile-${index}`}
                className="w-full border border-solid border-[#dddddd] rounded-[20px] shadow backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] overflow-hidden"
              >
                <CardContent className="p-5">
                  <div className="flex flex-col gap-5">
                    <Badge
                      className={`w-fit px-3 py-2 rounded-[50px] font-semibold text-xl leading-6 ${tier.badgeBackground} ${tier.badgeStyle} [font-family:'Raleway',Helvetica]`}
                    >
                      {tier.name}
                    </Badge>

                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        {tier.specs.map((spec, specIndex) => (
                          <div
                            key={`spec-mobile-${index}-${specIndex}`}
                            className="flex flex-col gap-1"
                          >
                            <div className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base">
                              {spec.label}
                            </div>
                            {spec.value && (
                              <div className="[font-family:'Raleway',Helvetica] font-medium text-[#394355] text-base">
                                {spec.value}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-3">
                        <div className="[font-family:'Raleway',Helvetica] font-bold text-[#394355] text-2xl">
                          {tier.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="px-5 pb-5 pt-0">
                  <Button
                    className={`w-full h-14 rounded-2xl border-none ${buttonGradient} relative`}
                    onClick={() => setIsPopupOpen(true)}
                  >
                    <span className="font-semibold text-white text-sm text-center [font-family:'Raleway',Helvetica]">
                      Рассчитать под размер + консультация
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Features Section (Mobile) – full image cards */}
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-['Raleway',Helvetica] font-semibold text-2xl text-[#232c42] leading-tight">
              Любой шатер может быть спроектирован и оснащен под ваши цели и задачи:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {additionalFeatures.map((feature, idx) => (
                <Card key={idx} className="relative overflow-hidden rounded-xl border border-gray-200 shadow-md aspect-[4/3]">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                    <h4 className="font-['Raleway',Helvetica] font-bold text-white text-sm leading-tight text-center">
                      {feature.name}
                    </h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};