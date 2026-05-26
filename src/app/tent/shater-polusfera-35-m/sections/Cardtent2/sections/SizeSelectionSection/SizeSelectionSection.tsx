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
  // Default content for Сферический шатёр диаметр 35 м (≈962 м²)
  const defaultDescriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Компания MOBILE TENT",
      text: "Компания MOBILE TENT специализируется на производстве быстровозводимых сферических шатров и купольных конструкций. Сферический шатёр диаметром 35 метров (≈962 м²) — это уникальное купольное сооружение для концертных залов, выставочных центров, авиаангаров и масштабных мероприятий. Геодезическая форма обеспечивает максимальную прочность при минимальном весе.",
    },
    {
      title: "Особенности модели",
      text: "Сферический шатёр выполнен в форме полусферы, что даёт равномерное распределение нагрузок. Диаметр 35 метров создаёт полезную площадь около 962 м² и высоту в центре до 35 метров. Конструкция не требует капитального фундамента, монтируется за 14–20 дней. Благодаря утеплённой версии шатёр можно использовать круглый год даже при -40°C.",
    },
    {
      title: "Практичность и применение",
      text: "Сфера‑шатёр 35 м идеально подходит для: концертов и фестивалей (до 1200 зрителей), корпоративов, свадеб на 800+ гостей, выставок, ярмарок, спортивных соревнований, авиационных ангаров, складских комплексов, производственных цехов, выставочных павильонов, конгресс-центров.",
    },
    {
      title: "Материалы",
      text: "Каркас из анодированного алюминия (сплав 6063) или усиленной стали с порошковым покрытием. Тентовое полотно — ПВХ французского производства DICKSON с системой LoWick, плотность 650-900 г/м². Класс пожарной безопасности М2, Г1. Возможно остекление ПВХ‑окнами, установка дверей, систем вентиляции, отопления и кондиционирования.",
    },
    {
      title: "Монтаж и рекомендации",
      text: "Установка производится профессиональной бригадой. Фундамент не требуется — достаточно ровной площадки (грунт, асфальт, бетон, бетонные блоки). Демонтаж и повторный монтаж возможны без потери качества. Для зимнего использования рекомендуется утеплённая комплектация (двойной тент с утеплителем или сэндвич-панели).",
    },
    {
      title: "Модульность и масштабирование",
      text: "Возможность соединения нескольких сфер в единый комплекс (кластер). Можно комбинировать с шатрами других форм и размеров. Сферические шатры легко масштабируются: диаметры 6 м, 8 м, 10 м, 12 м, 14 м, 16 м, 20 м, 26 м, 35 м и более.",
    },
  ];

  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Сферическая (полусфера)" },
    { label: "Диаметр", value: "35 м" },
    { label: "Площадь пола", value: "≈962 м²" },
    { label: "Высота в центре", value: "35 м" },
    { label: "Высота стенки", value: "0 м (купол)" },
    { label: "Вес металлоконструкции (алюминий)", value: "~6 500 кг" },
    { label: "Вес металлоконструкции (сталь)", value: "~14 000 кг" },
    { label: "Ветровая нагрузка", value: "до 120 км/ч (32 м/с)" },
    { label: "Снеговая нагрузка", value: "до 120 кг/м² (расчёт под регион)" },
    { label: "Температурный режим", value: "от -40°C до +70°C" },
    { label: "Материал каркаса", value: "Алюминий 6063 / Сталь с порошковым покрытием / Горячий цинк" },
    { label: "Материал тента", value: "ПВХ DICKSON LoWick, 650-900 г/м², М2, Г1, DIN 4102 B1" },
    { label: "Фундамент", value: "Не требуется (установка на грунт, асфальт, бетон, блоки)" },
    { label: "Монтаж", value: "14–20 дней профессиональной бригадой" },
    { label: "Гарантия", value: "Каркас – 5 лет, тент – 5 лет, антикоррозийное покрытие – 25 лет" },
    { label: "Срок службы", value: "более 15 лет" },
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
}