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
  // Default content from your original code (10×10 — 100 м²)
  const defaultDescriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Арочный шатёр 10×10 от компании Mobile Tent",
      text: `Арочный шатёр 10×10 от компании Mobile Tent — это идеальное решение для проведения мероприятий на открытом воздухе. 
Этот шатёр обладает уникальными особенностями, которые делают его не только привлекательным, но и чрезвычайно функциональным. 
Конструкция шатра выполнена из высококачественных материалов, обеспечивающих его долговечность и стойкость к неблагоприятным погодным условиям. 
Арочная форма способствует равномерному распределению нагрузки, что повышает его устойчивость к ветровым нагрузкам. 
Прозрачные стенки шатра создают ощущение открытого пространства, позволяя наслаждаться окружающим пейзажем, при этом обеспечивая надежную защиту от непогоды.`,
    },
    {
      title: "Преимущества арочного шатра 10×10",
      text: `Основные преимущества арочного шатра 10×10 включают в себя простоту и быстроту монтажа, что позволяет существенно сэкономить время при установке. 
Модульная система позволяет легко адаптировать шатёр под конкретные нужды вашего мероприятия, будь то банкет, выставка или концерт. 
Большая площадь шатра предоставляет возможность комфортного размещения гостей, оборудования и декораций.`,
    },
    {
      title: "Идеальные случаи для использования шатра",
      text: `Этот шатёр идеально подходит для проведения свадеб, корпоративных мероприятий, фестивалей, выставок и других массовых мероприятий. 
Его просторное внутреннее пространство и привлекательный внешний вид создадут незабываемую атмосферу и впечатление для всех участников.`,
    },
    {
      title: "Преимущества производства шатров от Mobile Tent",
      text: `Компания Mobile Tent специализируется на производстве тентовых конструкций с использованием самых современных технологий и материалов. 
Мы предлагаем изделия высочайшего качества, которые проходят строгий контроль на всех этапах производства. 
Наша продукция отличается долговечностью и надёжностью, что подтверждается многочисленными положительными отзывами наших клиентов.`,
    },
    {
      title: "Почему выбирают нас",
      text: `Mobile Tent — это не только качественные шатры, но и высококлассный сервис. 
Мы предлагаем полное сопровождение, от выбора модели до её монтажа на месте проведения мероприятия. 
Наша команда профессионалов всегда готова помочь вам с любыми вопросами и обеспечить идеальные условия для вашего события.

Арочный шатёр 10×10 от Mobile Tent — это надёжное, стильное и функциональное решение, которое сделает любое ваше мероприятие незабываемым. 
Выбирая нас, вы выбираете качество, надёжность и профессионализм.`,
    },
  ];

  // Default specs from your original code (10×10 — 100 м²)
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Квадрат" },
    { label: "Площадь", value: "100 м²" },
    { label: "Длина", value: "10 м" },
    { label: "Ширина", value: "10 м" },
    { label: "Высота входной арки", value: "4,5 м" },
    { label: "Высота в коньке", value: "3,2 м" },
    { label: "Вес конструкции", value: "1200 кг" },
    { label: "Нагрузка на опорную пятку", value: "300 кг" },
    { label: "Ветровая нагрузка", value: "24 м/сек" },
    { label: "Нагрузка подвеса на арку", value: "до 35 кг/п.м." },
    {
      label: "Основание",
      value: "Не требует специального фундамента, устанавливаются на любой земляной поверхности.",
    },
    {
      label: "Монтаж",
      value: "Монтируется и демонтируется без применения специальной техники в минимальный срок, без потери качества, любое количество раз.",
    },
    {
      label: "Модульность",
      value: 'Возможность увеличения площади путем соединения нескольких конструкций со стороной 10 м: "VIP-модуль 10×10 м", "VIP-модуль Дюна 10×10 м", "VIP-модуль 20×20 м", "VIP-модуль Гексагональ 20×17 м", "VIP Дополнительный модуль 10×5 м", "VIP-модуль Октогональ 26×24 м", "VIP-модуль 17×20 м LONG-1", "VIP-модуль 17×20 м LONG-2".',
    },
    {
      label: "Материалы тента",
      value: "Тентовое полотно и стены изготовлены из ПВХ французского производства Ferrari Precontrant. Класс пожарной безопасности М2, Г1.",
    },
    {
      label: "Каркас",
      value: "Все элементы каркаса конструкции изготовлены из оцинкованной стали.",
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
            <p className="font-normal text-lg leading-6 text-[#394355] [font-family:'Raleway',Helvetica] whitespace-pre-line">
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