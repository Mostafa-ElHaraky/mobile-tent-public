'use client';

import React, { ReactElement, useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// ===== Define interfaces for all props =====
interface SpecItem {
  label: string;
  value: string;
}

interface DescriptionBlock {
  title?: string;
  text: string;
}

interface SizeSelectionSectionProps {
  // Content props
  desktopContent?: string;
  mobileContent?: string;
  
  // Data props - can be passed from parent/CMS
  descriptionBlocks?: DescriptionBlock[];
  specs?: SpecItem[];
  
  // Styling props
  fontFamily?: string;
  textColor?: string;
  mutedTextColor?: string;
  
  // Tab configuration
  defaultTab?: 'description' | 'characteristics';
  tabLabels?: {
    description: string;
    characteristics: string;
  };
  
  // Additional props from page.tsx that might be needed
  pageName?: string; // Added for context
}

export const SizeSelectionSection = ({ 
  desktopContent,
  mobileContent,
  descriptionBlocks: propDescriptionBlocks,
  specs: propSpecs,
  fontFamily = "'Raleway', Helvetica",
  textColor = '#394355',
  mutedTextColor = '#4f5d8094',
  defaultTab = 'description',
  tabLabels = {
    description: 'Описание',
    characteristics: 'Характеристики'
  },
  pageName // Added for potential use
}: SizeSelectionSectionProps): ReactElement => {
  
  // ===== DEFAULT DATA (used when props not provided) =====
  const defaultDescriptionBlocks: DescriptionBlock[] = [
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

  const defaultSpecs: SpecItem[] = [
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

  // ===== STATE =====
  const [activeTab, setActiveTab] = useState<'description' | 'characteristics'>(defaultTab);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // ===== EFFECTS =====
  useEffect(() => {
    setIsMounted(true);
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // ===== HELPER FUNCTIONS =====
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
  const hasBitrixContent = bitrixContent !== null && bitrixContent.trim() !== '';

  // Use provided data or fall back to defaults
  const descriptionBlocks = propDescriptionBlocks || defaultDescriptionBlocks;
  const specs = propSpecs || defaultSpecs;

  // ===== RENDER FUNCTIONS =====
  const renderDescriptionContent = () => {
    if (hasBitrixContent) {
      return (
        <div 
          className="bitrix-content prose prose-lg max-w-none"
          style={{
            fontFamily,
            color: textColor,
          }}
          dangerouslySetInnerHTML={{ __html: bitrixContent }}
        />
      );
    }
    
    // Default content
    return (
      <div className="flex flex-col gap-10">
        {descriptionBlocks.map((block, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {block.title && (
              <h3 
                className="font-semibold text-2xl leading-6"
                style={{ 
                  fontFamily,
                  color: textColor 
                }}
              >
                {block.title}
              </h3>
            )}
            <p 
              className="font-normal text-lg leading-6"
              style={{ 
                fontFamily,
                color: textColor 
              }}
            >
              {block.text}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const renderMobileDescriptionContent = () => {
    if (hasBitrixContent) {
      return (
        <div 
          className="bitrix-content prose prose-base max-w-none"
          style={{
            fontFamily,
            color: textColor,
          }}
          dangerouslySetInnerHTML={{ __html: bitrixContent }}
        />
      );
    }
    
    // Default content for mobile
    return (
      <div className="flex flex-col gap-6">
        {descriptionBlocks.map((block, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            {block.title && (
              <h3 
                className="font-semibold text-lg leading-6"
                style={{ 
                  fontFamily,
                  color: textColor 
                }}
              >
                {block.title}
              </h3>
            )}
            <p 
              className="font-normal text-base leading-6 whitespace-pre-line"
              style={{ 
                fontFamily,
                color: textColor 
              }}
            >
              {block.text}
            </p>
          </div>
        ))}
      </div>
    );
  };

  // Calculate underline position based on active tab
  const getUnderlineStyles = () => {
    const isDescription = activeTab === 'description';
    // Approximate width based on character count (average character width ~16px)
    const descriptionWidth = tabLabels.description.length * 16;
    const characteristicsWidth = tabLabels.characteristics.length * 16;
    
    return {
      left: isDescription ? '0px' : `${descriptionWidth + 40}px`, // 40px for gap
      width: isDescription ? `${descriptionWidth}px` : `${characteristicsWidth}px`,
    };
  };

  // Clean muted text color (remove opacity suffix)
  const cleanMutedColor = mutedTextColor.replace('94', '');

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full max-w-[1344px] mx-auto mt-12 mb-12">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'description' | 'characteristics')}
          className="w-full"
        >
          <TabsList className="border-b-0 bg-transparent p-0 h-auto mb-7 relative">
            <TabsTrigger
              value="description"
              className="px-0 py-0 mr-10 h-auto font-semibold text-2xl leading-6 
                data-[state=active]:bg-transparent data-[state=active]:shadow-none 
                hover:text-[#394355] transition-colors"
              style={{ 
                fontFamily,
                color: activeTab === 'description' ? textColor : mutedTextColor
              }}
            >
              {tabLabels.description}
            </TabsTrigger>
            <TabsTrigger
              value="characteristics"
              className="px-0 py-0 h-auto font-semibold text-2xl leading-6 
                data-[state=active]:bg-transparent data-[state=active]:shadow-none
                hover:text-[#394355] transition-colors"
              style={{ 
                fontFamily,
                color: activeTab === 'characteristics' ? textColor : mutedTextColor
              }}
            >
              {tabLabels.characteristics}
            </TabsTrigger>

            {/* Moving underline */}
            <span
              className="pointer-events-none absolute bottom-[-6px] h-0.5 transition-all duration-300"
              style={{
                left: getUnderlineStyles().left,
                width: getUnderlineStyles().width,
                backgroundColor: textColor,
              }}
            />
          </TabsList>

          <TabsContent value="description" className="mt-6">
            {renderDescriptionContent()}
          </TabsContent>

          <TabsContent value="characteristics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {specs.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span 
                    className="text-lg font-normal"
                    style={{ 
                      fontFamily,
                      color: cleanMutedColor
                    }}
                  >
                    {item.label}
                  </span>
                  <span 
                    className="text-lg font-semibold"
                    style={{ 
                      fontFamily,
                      color: textColor 
                    }}
                  >
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
        <Tabs 
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'description' | 'characteristics')}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-2 gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="description"
              className="py-2 font-semibold text-base rounded-md transition-all duration-200"
              style={{ 
                fontFamily,
                backgroundColor: activeTab === 'description' ? 'white' : 'transparent',
                color: activeTab === 'description' ? textColor : mutedTextColor,
                boxShadow: activeTab === 'description' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              {tabLabels.description}
            </TabsTrigger>
            <TabsTrigger
              value="characteristics"
              className="py-2 font-semibold text-base rounded-md transition-all duration-200"
              style={{ 
                fontFamily,
                backgroundColor: activeTab === 'characteristics' ? 'white' : 'transparent',
                color: activeTab === 'characteristics' ? textColor : mutedTextColor,
                boxShadow: activeTab === 'characteristics' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              {tabLabels.characteristics}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            {renderMobileDescriptionContent()}
          </TabsContent>

          <TabsContent value="characteristics">
            <div className="grid grid-cols-1 gap-4">
              {specs.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col p-3 bg-gray-50 rounded-lg"
                >
                  <span 
                    className="text-base font-normal"
                    style={{ 
                      fontFamily,
                      color: cleanMutedColor
                    }}
                  >
                    {item.label}
                  </span>
                  <span 
                    className="text-base font-semibold"
                    style={{ 
                      fontFamily,
                      color: textColor 
                    }}
                  >
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