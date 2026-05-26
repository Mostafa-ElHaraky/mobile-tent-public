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
  // Default content for Каркасный ангар 30×40м (1 200 м²)
  const defaultDescriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Компания MOBILE TENT",
      text: "Компания MOBILE TENT специализируется на производстве быстровозводимых каркасных ангаров и тентовых конструкций. Каркасный ангар 30×40м (1 200 м²) — это масштабное прямоугольное сооружение для крупных промышленных объектов, логистических центров, сельскохозяйственных комплексов, спортивных арен и выставочных павильонов.",
    },
    {
      title: "Особенности модели",
      text: "Ангар выполнен в прямостенной форме с двускатной кровлей. Площадь 1 200 м² позволяет разместить производственные линии, высотные стеллажи, спортивные площадки или выставочные стенды. Конструкция требует ленточного или свайного фундамента, монтируется за 20–30 дней.",
    },
    {
      title: "Практичность и применение",
      text: "Идеален для круглогодичного использования (с утеплением сэндвич-панелями). Подходит для: складских помещений, производственных цехов, логистических центров, спортивных залов, выставочных павильонов, укрытия техники, сельскохозяйственных нужд, автосервисов, авиационных ангаров.",
    },
    {
      title: "Материалы",
      text: "Каркас из стали высокого качества с антикоррозийным покрытием (порошковая окраска или горячий цинк). Покрытие — сэндвич-панели 50–150 мм или ПВХ тент 650-900 г/м² французского производства DICKSON. Класс пожарной безопасности М2, Г1. Возможна установка окон, ворот, систем вентиляции и отопления.",
    },
    {
      title: "Монтаж и рекомендации",
      text: "Установка производится профессиональной бригадой с использованием автокрана. Требуется предварительное устройство фундамента (ленточного или свайного). Демонтаж и повторный монтаж возможны без потери качества.",
    },
    {
      title: "Модульность",
      text: "Возможность увеличения площади путём соединения нескольких ангаров 30×40м. Можно комбинировать с другими типоразмерами: 30×30м, 30×50м, 30×60м и т.д. Расширение длины любыми секциями.",
    },
  ];

  // Technical specifications for frame hangar 30×40m
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямостенная (каркасная) с двускатной кровлей" },
    { label: "Площадь", value: "1 200 м²" },
    { label: "Длина", value: "40 м (может быть увеличена модулями)" },
    { label: "Ширина (пролёт)", value: "30 м" },
    { label: "Высота стенки", value: "до 8 м" },
    { label: "Высота в коньке", value: "до 10 м" },
    { label: "Вес металлоконструкции", value: "~25 000 кг" },
    { label: "Ветровая нагрузка", value: "до 30 м/с (108 км/ч)" },
    { label: "Снеговая нагрузка", value: "до 120 кг/м² (расчёт под регион)" },
    { label: "Температурный режим", value: "от -40°C до +70°C" },
    { label: "Материал каркаса", value: "Сталь (профильная труба, двутавр) с антикоррозийным покрытием / горячий цинк" },
    { label: "Тип покрытия", value: "Сэндвич-панели 50–150 мм / ПВХ тент DICKSON 650-900 г/м², М2, Г1" },
    { label: "Фундамент", value: "Ленточный или свайный (проектируется индивидуально)" },
    { label: "Монтаж", value: "20–30 дней профессиональной бригадой с автокраном" },
    { label: "Гарантия", value: "Каркас – 5 лет, антикоррозийное покрытие – 25 лет" },
    { label: "Срок службы", value: "более 30 лет" },
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