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
  // Default content for Шатер Пагода Стандарт 4×4 м (16 м²)
  const defaultDescriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Компания MOBILE TENT",
      text: "Компания MOBILE TENT специализируется на производстве быстровозводимых пагодных шатров и тентовых конструкций. Шатер Пагода Стандарт 4×4 м (16 м²) — это элегантное решение для свадеб, корпоративов, выездных мероприятий, торговли и летних кафе. Уникальная острая крыша придаёт пространству стиль и подчёркивает статус события.",
    },
    {
      title: "Особенности модели",
      text: "Пагодный шатер выполнен в форме квадрата с островерхой крышей. Площадь 16 м² позволяет комфортно разместить до 12-15 гостей за столами или до 20 человек на фуршет. Конструкция не требует капитального фундамента, монтируется за 2–3 часа. Благодаря утеплённой версии шатер можно использовать в межсезонье.",
    },
    {
      title: "Практичность и применение",
      text: "Шатер Пагода 4×4 м идеально подходит для: свадебных церемоний, банкетов, дней рождения, корпоративов, фуршетов, выставок, ярмарок, летних кафе, торговых точек, фотостудий, лаунж-зон на фестивалях, VIP-зон.",
    },
    {
      title: "Материалы",
      text: "Каркас из анодированного алюминия (сплав 6063) с антикоррозийным покрытием. Тентовое полотно — ПВХ французского производства Ferrari Precontraint / DICKSON, плотность 650-900 г/м². Класс пожарной безопасности М2, Г1. Возможно остекление ПВХ‑окнами, установка дверей, систем вентиляции и освещения.",
    },
    {
      title: "Монтаж и рекомендации",
      text: "Установка производится профессиональной бригадой. Фундамент не требуется — достаточно ровной площадки (грунт, асфальт, бетон, газон). Демонтаж и повторный монтаж возможны без потери качества. Для межсезонного использования рекомендуется утеплённая комплектация.",
    },
    {
      title: "Модульность и масштабирование",
      text: "Возможность соединения нескольких пагод в единый комплекс. Можно комбинировать с шатрами других размеров: Пагода 5×5 м, Пагода 6×6 м и более. Расширение площади любыми секциями.",
    },
  ];

  // Technical specifications for pagoda tent 4×4 m
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Квадратная (пагода)" },
    { label: "Площадь", value: "16 м²" },
    { label: "Длина", value: "4 м" },
    { label: "Ширина", value: "4 м" },
    { label: "Высота в коньке", value: "до 5,3 м" },
    { label: "Высота стенки", value: "2,5 м" },
    { label: "Вес конструкции (алюминий)", value: "~184 кг" },
    { label: "Вес конструкции (сталь)", value: "~350 кг" },
    { label: "Ветровая нагрузка", value: "до 65 км/ч (18 м/с)" },
    { label: "Нагрузка подвеса на арку", value: "до 15 кг/п.м." },
    { label: "Транспортный объём", value: "0,81 м³" },
    { label: "Температурный режим", value: "от -30°C до +50°C" },
    { label: "Материал каркаса", value: "Алюминий 6063 (анодированный)" },
    { label: "Материал тента", value: "ПВХ Ferrari Precontraint / DICKSON, 650-900 г/м², М2, Г1" },
    { label: "Фундамент", value: "Не требуется (установка на грунт, асфальт, бетон)" },
    { label: "Монтаж", value: "2–3 часа профессиональной бригадой" },
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