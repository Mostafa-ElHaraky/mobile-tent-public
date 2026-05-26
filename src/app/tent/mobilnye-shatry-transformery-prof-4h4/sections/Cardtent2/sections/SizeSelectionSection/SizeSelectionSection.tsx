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
  // Default content for Мобильный шатер-трансформер Prof 4×4 м (16 м²)
  const defaultDescriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Компания MOBILE TENT",
      text: "Компания MOBILE TENT специализируется на производстве быстровозводимых мобильных шатров-трансформеров и тентовых конструкций. Мобильный шатер-трансформер Prof 4×4 м (16 м²) — это складная быстросборная конструкция для выездной торговли, мероприятий, кемпинга и рекламных акций. Продуманная складная система позволяет собрать шатер за 10–15 минут без инструментов.",
    },
    {
      title: "Особенности модели Prof 4×4",
      text: "Шатер выполнен в квадратной форме с островерхой крышей. Площадь 16 м² позволяет комфортно разместить торговую точку, стенд, фотозону или небольшую зону отдыха. Каркас складывается в компактный чехол (208×27×27 см), помещающийся в багажник легкового автомобиля. Трансформация позволяет менять конфигурацию: открывать боковые стенки, регулировать высоту, использовать как павильон с закрытыми стенами.",
    },
    {
      title: "Практичность и применение",
      text: "Шатер Prof 4×4 идеально подходит для: выездной торговли на ярмарках и фестивалях, рекламных акций и презентаций, свадебных фотозон, кемпинга и пикников, временных складов, пунктов проката, выставочных стендов, лаунж-зон на корпоративах.",
    },
    {
      title: "Материалы",
      text: "Каркас из анодированного алюминия (профиль 40×40×2 мм) с антикоррозийным покрытием. Тентовое полотно — ПВХ французского производства Ferrari Precontraint / DICKSON, плотность 650-900 г/м² (усиленная версия). Класс пожарной безопасности М2, Г1. Тент имеет двойные швы, устойчив к УФ, гниению, водонепроницаем. Возможно нанесение полноцветной печати.",
    },
    {
      title: "Монтаж и транспортировка",
      text: "Установка производится одним человеком без спецтехники за 10–15 минут. Шатер поставляется в комплекте с транспортной сумкой/чехлом. Демонтаж и повторная сборка возможны многократно без потери качества. Для фиксации используются грунтовые анкеры и оттяжки (входят в комплект).",
    },
    {
      title: "Модульность и масштабирование",
      text: "Возможность соединения нескольких шатров Prof 4×4 в единую конструкцию для увеличения площади. Можно комбинировать с шатрами других размеров (3×3, 4×6 и т.д.). Расширение функционала за счёт дополнительных аксессуаров: стенки с окнами, москитные сетки, системы освещения, брендирование.",
    },
  ];

  // Technical specifications for transformer tent 4×4 m
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Серия / Модель", value: "Prof 4×4" },
    { label: "Тип", value: "Мобильный шатёр-трансформер (складной)" },
    { label: "Форма", value: "Квадратная (пагода)" },
    { label: "Площадь", value: "16 м²" },
    { label: "Размер (Ш×Д)", value: "4 м × 4 м" },
    { label: "Высота стенки", value: "2,15 м" },
    { label: "Высота в коньке", value: "3,85 м" },
    { label: "Материал каркаса", value: "Алюминий 6063 (анодированный)" },
    { label: "Профиль", value: "40×40×2 мм" },
    { label: "Размер в сложенном виде", value: "208 × 27 × 27 см" },
    { label: "Вес комплекта", value: "39 кг" },
    { label: "Транспортный чехол", value: "В комплекте" },
    { label: "Время сборки", value: "10–15 минут (одним человеком)" },
    { label: "Ветровая нагрузка", value: "до 80 км/ч" },
    { label: "Материал тента", value: "ПВХ Ferrari / DICKSON, 650-900 г/м², М2, Г1" },
    { label: "Свойства покрытия", value: "Двойные швы, огнестойкость, водонепроницаемость, УФ-защита, стойкость к гниению" },
    { label: "Фундамент", value: "Не требуется (установка на грунт, асфальт, бетон)" },
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