'use client';

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ReactElement } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export const FeaturedProductsSection = (): ReactElement => {
  // Data for customization options
  const customizationOptions = [
    {
      title: "Материал тента",
      width: "w-[222px]",
      titleWidth: "w-[198px]",
    },
    {
      title: "Плотность тента",
      width: "w-[221px]",
      titleWidth: "w-fit",
    },
    {
      title: "Профиль каркаса",
      width: "w-[207px]",
      titleWidth: "w-fit",
    },
    {
      title: "Цинкование каркаса",
      width: "w-fit",
      titleWidth: "w-fit",
    },
    {
      title: "Фурнитуру креплений",
      width: "w-fit",
      titleWidth: "w-fit",
    },
    {
      title: "Цвет тента",
      width: "w-[221px]",
      titleWidth: "w-[198px]",
    },
    {
      title: "Тип стен",
      width: "w-[221px]",
      titleWidth: "w-[198px]",
    },
  ];

  const [clickedItems, setClickedItems] = useState<boolean[]>(Array(customizationOptions.length).fill(false));

  const handleClick = (index: number) => {
    const updated = [...clickedItems];
    updated[index] = true;
    setClickedItems(updated);
    // Optional: reset after short delay if you want to toggle back
    // setTimeout(() => {
    //   updated[index] = false;
    //   setClickedItems([...updated]);
    // }, 1500);
  };

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:flex flex-col items-start gap-10 w-full max-w-[1343px] mx-auto my-12">
        <h2 className="w-full font-['Raleway',Helvetica] font-semibold text-3xl text-left tracking-[0] leading-normal">
          <span className="text-[#394355]">Шатры MobileTent могут быть </span>
          <span className="text-[#527dc5]">абсолютно любой формы, размера и бюджет</span>
        </h2>

        <div className="flex flex-col items-start gap-6 w-full">
          <h3 className="font-['Raleway',Helvetica] font-medium text-[#232c42] text-2xl leading-normal tracking-[0]">
            При заказе можете выбрать
          </h3>

          <Card className="w-full rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-[24px_36px]">
                {customizationOptions.map((option, index) => (
                  <div key={index} className="flex flex-col items-start gap-3">
                    <div className="flex flex-col items-start gap-2.5 px-4 py-2.5 bg-[#f5f6ff] rounded-[10px]">
                      <div className={`flex flex-col items-start gap-2 ${option.width}`}>
                        <div
                          className={`${option.titleWidth} font-['Raleway',Helvetica] font-bold text-[#527dc5] text-xl leading-6 tracking-[0]`}
                        >
                          {option.title}
                        </div>
                        <div className="flex items-start gap-[61px]">
                          <div className="flex flex-col items-start gap-3">
                            <motion.a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleClick(index);
                              }}
                              className="font-['Raleway',Helvetica] font-normal text-[#394355] text-base leading-6 underline tracking-[0]"
                              whileTap={{ scale: 0.9 }}
                            >
                              <AnimatePresence mode="wait">
                                {!clickedItems[index] ? (
                                  <motion.span
                                    key="add"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    Добавить
                                  </motion.span>
                                ) : (
                                  <motion.span
                                    key="added"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[#527dc5] font-semibold"
                                  >
                                    Добавлен
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </motion.a>
                          </div>
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

      {/* Mobile Version */}
      <section className="block md:hidden flex-col items-start gap-6 w-full mx-auto my-8 px-4">
        <h2 className="w-full font-['Raleway',Helvetica] font-semibold text-2xl text-left leading-normal">
          <span className="text-[#394355]">Шатры MobileTent могут быть </span>
          <span className="text-[#527dc5]">абсолютно любой формы, размера и бюджет</span>
        </h2>

        <div className="flex flex-col items-start gap-4 w-full">
          <h3 className="font-['Raleway',Helvetica] font-medium text-[#232c42] text-xl leading-normal">
            При заказе можете выбрать
          </h3>

          <Card className="w-full rounded-[16px] border-0 shadow-sm bg-white">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 gap-3">
                {customizationOptions.map((option, index) => (
                  <div key={`mobile-${index}`} className="flex flex-col items-start">
                    <div className="w-full px-3 py-3 bg-[#f5f6ff] rounded-[8px]">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-['Raleway',Helvetica] font-bold text-[#527dc5] text-lg leading-6">
                          {option.title}
                        </div>
                        <div className="flex items-start">
                          <div className="flex flex-col items-start">
                            <motion.a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleClick(index);
                              }}
                              className="font-['Raleway',Helvetica] font-normal text-[#394355] text-sm leading-6 underline"
                              whileTap={{ scale: 0.9 }}
                            >
                              <AnimatePresence mode="wait">
                                {!clickedItems[index] ? (
                                  <motion.span
                                    key="add-mobile"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    Добавить
                                  </motion.span>
                                ) : (
                                  <motion.span
                                    key="added-mobile"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[#527dc5] font-semibold"
                                  >
                                    Добавлен
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </motion.a>
                          </div>
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
