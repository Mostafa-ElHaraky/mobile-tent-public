'use client';

import React, { ReactElement, useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

interface SizeSelectionSectionProps {
  desktopContent?: string;
  mobileContent?: string;
}

export const SizeSelectionSection = ({ 
  desktopContent,
  mobileContent 
}: SizeSelectionSectionProps): ReactElement => {
  // Default content for Арочный ангар 30×50 (1 500 м²)
  const defaultDescriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Арочный ангар 30×50 м",
      text: "Прямоугольный ангар площадью 1 500 м² предназначен для хранения, производства, выставочных мероприятий и других задач. Конструкция отличается надёжностью, долговечностью и функциональностью благодаря современным материалам.",
    },
    {
      title: "Практичность и применение",
      text: "Не требует специального фундамента и может устанавливаться на любой земляной поверхности. Монтируется и демонтируется в минимальный срок, без потери качества, любое количество раз. Возможна модульная стыковка для увеличения площади.",
    },
    {
      title: "Материалы",
      text: "Тентовое полотно и стены изготовлены из ПВХ материала французского производства DICKSON с системой LoWick. Класс пожарной безопасности — М2, Г1.",
    },
    {
      title: "Каркас и крепёж",
      text: "Все элементы каркаса изготовлены из анодированного алюминия. Крепёжные элементы — из оцинкованной стали.",
    },
  ];

  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольная / Арочная / Полигональная" },
    { label: "Площадь", value: "1 500 м²" },
    { label: "Длина", value: "50 м (регулируется)" },
    { label: "Ширина (пролёт)", value: "30 м" },
    { label: "Высота стенки", value: "2,5 / 3 / 3,5 / 4 м (на выбор)" },
    { label: "Высота в коньке", value: "до 7,5 м" },
    { label: "Ветровая нагрузка", value: "до 30 м/с (108 км/ч)" },
    { label: "Снеговая нагрузка", value: "до 120 кг/м² (расчёт под регион)" },
    { label: "Вес конструкции", value: "7 800 кг (алюминий)" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    { label: "Основной рамный профиль", value: "166 × 89 × 3,00 (QUALANOD)" },
    { label: "Дополнительный профиль", value: "100 × 48 × 3,00 (QUALANOD)" },
    { label: "Профиль прогонов", value: "50 × 50 × 3,00 (QUALANOD)" },
    { label: "Основание", value: "Не требует фундамента; грунт, асфальт, бетон, блоки" },
    { label: "Монтаж", value: "Требуется спецтехника (автокран), быстрый монтаж" },
    { label: "Материалы тента", value: "ПВХ DICKSON LoWick, М2/Г1, DIN 4102 B1" },
    { label: "Каркас", value: "Анодированный алюминий (6063 DIN 573)" },
    { label: "Крепёж", value: "Оцинкованная сталь DIN 50976" },
    { label: "Особенности монтажа", value: "Крепление анкерами или утяжеление бетонными блоками" },
    { label: "Модульность", value: "Возможна стыковка нескольких ангаров 30×N" },
    { label: "Гарантия", value: "Каркас – 5 лет, тент – 5 лет" },
  ];

  const [activeTab, setActiveTab] = useState("description");
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const getContentForDevice = () => {
    if (!isMounted) return null;
    if (isDesktop && desktopContent) return desktopContent;
    if (mobileContent) return mobileContent;
    if (desktopContent) return desktopContent;
    return null;
  };

  const bitrixContent = getContentForDevice();
  const hasBitrixContent = bitrixContent !== null;

  const renderDescriptionContent = () => {
    if (hasBitrixContent && bitrixContent) {
      return (
        <div 
          className="bitrix-content prose prose-lg max-w-none"
          style={{ fontFamily: "'Raleway', Helvetica", color: '#394355' }}
          dangerouslySetInnerHTML={{ __html: bitrixContent }}
        />
      );
    }
    return (
      <div className="flex flex-col gap-10">
        {defaultDescriptionBlocks.map((block, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {block.title && (
              <h3 className="font-semibold text-2xl leading-6 text-[#394355] [font-family:'Raleway',Helvetica]">
                {block.title}
              </h3>
            )}
            <p className="font-normal text-lg leading-6 text-[#394355] [font-family:'Raleway',Helvetica]">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const renderMobileDescriptionContent = () => {
    if (hasBitrixContent && bitrixContent) {
      return (
        <div 
          className="bitrix-content prose prose-lg max-w-none"
          style={{ fontFamily: "'Raleway', Helvetica", color: '#394355' }}
          dangerouslySetInnerHTML={{ __html: bitrixContent }}
        />
      );
    }
    return (
      <div className="flex flex-col gap-6">
        {defaultDescriptionBlocks.map((block, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            {block.title && (
              <h3 className="font-semibold text-lg leading-6 text-[#394355] [font-family:'Raleway',Helvetica]">
                {block.title}
              </h3>
            )}
            <p className="font-normal text-base leading-6 text-[#394355] whitespace-pre-line [font-family:'Raleway',Helvetica]">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full max-w-[1344px] mx-auto mt-12 mb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="border-b-0 bg-transparent p-0 h-auto mb-7 relative">
            <TabsTrigger
              value="description"
              className="px-0 py-0 mr-10 h-auto font-semibold text-2xl leading-6 [font-family:'Raleway',Helvetica] 
                data-[state=active]:text-[#394355] data-[state=inactive]:text-[#4f5d8094] 
                data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Описание
            </TabsTrigger>
            <TabsTrigger
              value="characteristics"
              className="px-0 py-0 h-auto font-semibold text-2xl leading-6 [font-family:'Raleway',Helvetica] 
                data-[state=active]:text-[#394355] data-[state=inactive]:text-[#4f5d8094] 
                data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Характеристики
            </TabsTrigger>
            <span
              className="pointer-events-none absolute bottom-[-6px] h-0.5 bg-[#394355] transition-all duration-300"
              style={{
                left: activeTab === "description" ? "0px" : "150px",
                width: activeTab === "description" ? "117px" : "185px",
              }}
            />
          </TabsList>
          <TabsContent value="description" className="mt-6">
            {renderDescriptionContent()}
          </TabsContent>
          <TabsContent value="characteristics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {defaultSpecs.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#4f5d80] text-lg font-normal [font-family:'Raleway',Helvetica]">
                    {item.label}
                  </span>
                  <span className="text-[#394355] text-lg font-semibold [font-family:'Raleway',Helvetica]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Mobile Version */}
      <section className="block md:hidden w-full mx-auto mt-8 mb-8 px-4">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full grid grid-cols-2 gap-2 mb-6 bg-gray-120 p-1 rounded-lg">
            <TabsTrigger
              value="description"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-2 font-semibold text-base text-[#394355] data-[state=active]:text-[#394355] data-[state=inactive]:text-[#4f5d8094] rounded-md [font-family:'Raleway',Helvetica]"
            >
              Описание
            </TabsTrigger>
            <TabsTrigger
              value="characteristics"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-2 font-semibold text-base text-[#4f5d8094] data-[state=active]:text-[#394355] rounded-md [font-family:'Raleway',Helvetica]"
            >
              Характеристики
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            {renderMobileDescriptionContent()}
          </TabsContent>
          <TabsContent value="characteristics">
            <div className="grid grid-cols-1 gap-4">
              {defaultSpecs.map((item, i) => (
                <div key={i} className="flex flex-col p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#4f5d80] text-base font-normal [font-family:'Raleway',Helvetica]">
                    {item.label}
                  </span>
                  <span className="text-[#394355] text-base font-semibold [font-family:'Raleway',Helvetica]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};