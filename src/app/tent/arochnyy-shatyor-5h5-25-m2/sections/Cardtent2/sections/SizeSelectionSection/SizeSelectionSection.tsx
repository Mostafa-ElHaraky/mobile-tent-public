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
      text:
        "Арочный шатер 5х5 — 25 м² от Mobile Tent сочетает в себе элегантность и функциональность, что делает его идеальным решением для самых разнообразных мероприятий. Благодаря арочной конструкции шатер не только выглядит стильно, но и обладает повышенной устойчивостью к погодным условиям. Просторное внутреннее пространство площадью 25 м² позволяет комфортно разместить гостей или оборудование, обеспечивая удобство и безопасность.",
    },
    {
      title: "Преимущества арочного шатра от Mobile Tent",
      text:
        "Одним из ключевых преимуществ арочного шатра 5х5 — 25 м² является его высокое качество. Используемые материалы и прочный каркас гарантируют долговечность и надежность конструкции. Благодаря арочной форме шатер обеспечивает естественное освещение и хорошую вентиляцию, создавая комфорт внутри. Легкость монтажа и демонтажа позволяет быстро установить шатер практически в любом месте.",
    },
    {
      title: "Идеальные решения для различных мероприятий",
      text:
        "Шатер 5х5 — 25 м² подходит для небольших свадеб и семейных торжеств, корпоративных мероприятий, презентаций и деловых встреч. Он также отлично проявляет себя на ярмарках, фестивалях и выставках, где важны комфортные условия для участников и посетителей.",
    },
    {
      title: "Преимущества производства арочных шатров компанией Mobile Tent",
      text:
        "Мы используем передовые технологии и качественные материалы. Каждый шатер проходит строгий контроль качества на всех этапах производства, что гарантирует надежность и долговечность. Индивидуальный подход и гибкие условия сотрудничества позволяют удовлетворять даже самые требовательные запросы.",
    },
    {
      title: "Почему Mobile Tent — ваш лучший выбор",
      text:
        "Вы получаете гарантии качества и комплексные решения: консультирование, индивидуальные проекты и поддержку на всех этапах реализации. Мы делаем всё, чтобы ваше мероприятие прошло идеально.",
    },
    {
      title: "Ограничения использования арочных шатров",
      text:
        "Для мероприятий с очень большим числом гостей или в экстремальных климатических условиях стандартная вместимость и устойчивость могут быть недостаточны. В условиях сильного ветра или снегопадов рекомендуем дополнительные меры безопасности или более защищённые типы укрытий.",
    },
    {
      title: "Арочные шатры Mobile Tent: надежность и комфорт",
      text:
        "Выбирая арочные шатры 5х5 — 25 м² от Mobile Tent, вы выбираете качество, надежность и стиль. Наши решения обеспечат комфорт и защиту гостям, создадут запоминающуюся атмосферу и помогут насладиться каждым моментом события.",
    },
  ];

  // TECH SPECS
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Квадрат" },
    { label: "Площадь", value: "25 м²" },
    { label: "Длина", value: "5 м" },
    { label: "Ширина", value: "5 м" },
    { label: "Высота входной арки", value: "регулируемая 2,9–4,4 м" },
    { label: "Высота в коньке", value: "регулируемая 2,40–3,9 м" },
    { label: "Вес конструкции", value: "270 кг" },
    { label: "Нагрузка на опорную пятку", value: "68 кг" },
    { label: "Ветровая нагрузка", value: "24 м/сек" },
    { label: "Нагрузка подвеса на арку", value: "до 10 кг/п.м." },
    {
      label: "Основание",
      value:
        "Не требует спецфундамента, установка на любой земляной поверхности",
    },
    {
      label: "Монтаж",
      value:
        "Монтируется/демонтируется без спецтехники за минимальный срок, многократно",
    },
    {
      label: "Модульность",
      value:
        "Возможность объединения конструкций со стороной 5 м (например, «VIP 5×5 м»)",
    },
    {
      label: "Материалы тента",
      value:
        "ПВХ Ferrari Precontraint (Франция), класс пожарной безопасности М2, Г1",
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