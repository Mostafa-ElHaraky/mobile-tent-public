'use client';

import React, { ReactElement, useState, useEffect } from "react"; // Add useEffect
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
      title: "Описание",
      text:
        "Жителям мегаполисов не хватает природы и свежего воздуха, поэтому появилась тенденция переносить празднования и фуршеты за город. Для таких целей компания MOBILE TENT поможет подобрать и купить идеальный шатёр.",
    },
    {
      title: "Применение",
      text:
        "Функций у арочного шатра 6х5 м несколько: его устанавливают как дополнительный модуль, чтобы увеличить общую площадь мероприятия, или соединяют с другим шатром. Возможно использование в качестве отдельно стоящей конструкции. Площади 30 м² под укрытием будет достаточно, чтобы гости праздника чувствовали себя комфортно.",
    },
  ];

  // TECH SPECS — UPDATED
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольник" },
    { label: "Площадь", value: "30 м²" },
    { label: "Длина", value: "6 м" },
    { label: "Ширина", value: "5 м" },
    { label: "Высота входной арки", value: "3,2 м" },
    { label: "Высота в коньке", value: "2,65 м" },
    { label: "Вес конструкции", value: "690 кг" },
    { label: "Нагрузка на опорную пятку", value: "172 кг" },
    { label: "Ветровая нагрузка", value: "24 м/сек" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    {
      label: "Основание",
      value:
        "Не требует специального фундамента, устанавливаются на любой земляной поверхности.",
    },
    {
      label: "Монтаж",
      value:
        "Монтируется и демонтируется без применения специальной техники в минимальный срок, без потери качества, любое количество раз.",
    },
    {
      label: "Модульность",
      value:
        'Возможность увеличения площади путём соединения нескольких конструкций со стороной 6 м: "VIP 6Х6 м", "VIP Дюна 6Х6 м", "VIP 12Х12 м".',
    },
    {
      label: "Материалы тента",
      value:
        "Тентовое полотно и стены изготовлены из ПВХ французского производства Ferrari Precontrant. Класс пожарной безопасности М2, Г1.",
    },
    {
      label: "Каркас",
      value:
        "Все элементы каркаса конструкции изготовлены из оцинкованной стали.",
    },
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