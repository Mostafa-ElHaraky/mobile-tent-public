'use client';

import React, { ReactElement , useState, useEffect } from "react"; // Add useEffect
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
  // Default content if not provided from API
  const defaultDescriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Компания MOBILE TENT",
      text: "Компания MOBILE TENT внимательно относится к разработке функционала и дизайна навесных конструкций. Площадь некоторых предлагаемых нами шатров можно увеличить, добавив дополнительные модули.",
    },
    {
      title: "Особенности модели",
      text: "Арочный шатёр 10×5 м с площадью 50 м² выполнен в форме модуль-туннеля. У этой конструкции два назначения: стыковочный модуль между двумя шатрами со стороной 10 м и увеличение площади основного тента. Такой модуль выгодно купить, когда недостаточно площади основного шатра, но не хочется менять его на больший.",
    },
    {
      title: "Практичность и применение",
      text: "Среди разработок нашей компании есть много вариантов практичных и недорогих навесных конструкций для торговли, проведения праздников на природе и дачных навесов. Мы заботимся о качестве продукции, поэтому у наших шатров прочные каркасы, продуманная конструкция и качественное тентовое полотно при разумной цене.",
    },
    {
      title: "Материалы",
      text: "Тентовое полотно и стены изготовлены из ПВХ французского производства Ferrari Precontraint. Класс пожарной безопасности М2, Г1. Все элементы каркаса конструкции изготовлены из оцинкованной стали.",
    },
    {
      title: "Монтаж и рекомендации",
      text: "Радиус арки шатера составляет 4,4 м. Конструкцию должны монтировать профессионалы при помощи спецтехники. В нашей компании вы всегда можете недорого заказать установку любого тента.",
    },
    {
      title: "Модульность",
      text: "Возможность увеличения площади путём соединения нескольких конструкций со стороной 10 м: «VIP-модуль 10×10 м», «VIP-модуль Дюна 10×10 м», «VIP-модуль 20×20 м», «VIP-модуль Гексагональ 20×17 м», «VIP Дополнительный модуль 10×5 м», «VIP-модуль Октогональ 26×24 м», «VIP-модуль 17×20 м LONG-1», «VIP-модуль 17×20 м LONG-2».",
    },
  ];

  // TECH SPECS — UPDATED
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольник" },
    { label: "Площадь", value: "50 м²" },
    { label: "Длина", value: "10 м" },
    { label: "Ширина", value: "5 м" },
    { label: "Высота входной арки", value: "4,5 м" },
    { label: "Высота в коньке", value: "4,5 м" },
    { label: "Радиус арки", value: "4,4 м" },
    { label: "Вес конструкции", value: "790 кг" },
    { label: "Нагрузка на опорную пятку", value: "197 кг" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    {
      label: "Основание",
      value: "Не требует специального фундамента, устанавливаются на любой земляной поверхности.",
    },
    {
      label: "Монтаж",
      value: "Монтаж выполняют профессионалы с применением спецтехники; возможен демонтаж и повторная установка без потери качества.",
    },
    {
      label: "Модульность",
      value: "Возможность увеличения площади за счёт соединения модулей со стороной 10 м (см. список совместимых VIP-модулей).",
    },
    {
      label: "Материалы тента",
      value: "ПВХ Ferrari Precontraint (Франция), класс пожарной безопасности М2, Г1.",
    },
    { label: "Каркас", value: "Оцинкованная сталь" },
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

  // Determine which content to show - only on client side
  const getContentForDevice = () => {
    if (!isMounted) return null; // Return null during SSR
    
    if (isDesktop && desktopContent) {
      return desktopContent;
    } else if (mobileContent) {
      return mobileContent;
    } else if (desktopContent) {
      return desktopContent;
    }
    
    return null;
  };

  const bitrixContent = getContentForDevice();
  const hasBitrixContent = bitrixContent !== null;

  // CSS styles for Bitrix content
  const bitrixStyles = {
    productDescription: {
      fontFamily: "'Raleway', Helvetica",
      color: '#394355',
    },
    descriptionSection: {
      marginBottom: '2.5rem',
    },
    descriptionTitle: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
      marginBottom: '1rem',
      color: '#394355',
    },
    descriptionSubtitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      marginBottom: '0.75rem',
      color: '#394355',
    },
    descriptionText: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#394355',
    },
  };

  // Render content based on whether we have Bitrix content
  const renderDescriptionContent = () => {
    if (hasBitrixContent && bitrixContent) {
      return (
        <div 
          className="bitrix-content prose prose-lg max-w-none"
          style={{
            fontFamily: "'Raleway', Helvetica",
            color: '#394355',
          }}
          dangerouslySetInnerHTML={{ __html: bitrixContent }}
        />
      );
    }
    
    // Default content - same structure for both server and client
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
          style={{
            fontFamily: "'Raleway', Helvetica",
            color: '#394355',
          }}
          dangerouslySetInnerHTML={{ __html: bitrixContent }}
        />
      );
    }
    
    // Default content for mobile
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
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
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

            {/* Moving underline */}
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
                <div
                  key={i}
                  className="flex flex-col p-3 bg-gray-50 rounded-lg"
                >
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