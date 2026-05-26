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
  // Default content from your code (3.5×3.5 — 12.25 м²)
  const defaultDescriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Описание",
      text: `Арочный шатёр 3,5×3,5 — 12,25 м² для вашего события от компании Мобайл-Тент.
Когда наступает момент выбора идеального шатра для мероприятия — свадьбы, корпоратива или выставки — важно быть уверенным в качестве и безопасности. Компания Мобайл-Тент более 10 лет на рынке аренды шатров и предлагает современные арочные конструкции с металлическим каркасом для любых событий.`,
    },
    {
      title: "Почему стоит выбрать Мобайл-Тент?",
      text: `• Гарантия безопасности и долговечности — прочные металлические каркасы, продуманная конструкция.
• Широкий ассортимент — в том числе компактный арочный шатёр 3,5×3,5 м.
• Качество материалов — высококачественный ПВХ, устойчивый к внешней среде.
• Поддержка на всех этапах — доставка, установка и демонтаж под ключ.`,
    },
    {
      title: "Преимущества",
      text: `1) Уникальное качество и практика: шатры проверены в реальных условиях, более 5000 успешных кейсов.
2) Высокая степень доверия: прозрачные условия, вся документация, лицензии и сертификаты.
3) Поддержка экспертов: опытная команда обеспечивает безупречный монтаж и сервис.
4) Индивидуальный подход: гибкие условия аренды, удобные сроки доставки/монтажа/демонтажа.`,
    },
    {
      title: "Сферы применения",
      text: `• Шатёр для свадеб — идеален для выездной церемонии или камерного банкета.
• Шатёр для мероприятий — деловые встречи, презентации, частные и городские праздники.
• Шатёр для аренды — гибкие сроки, настройка под задачу.
• Шатёр с металлическим каркасом — устойчивость и надёжность при непогоде.
Каждый шатёр можно адаптировать: изменить конфигурацию, цвет, дополнить мебелью и аксессуарами.`,
    },
    {
      title: "Часто задаваемые вопросы",
      text: `Как быстро можно получить шатёр?
— Обычно доставка и установка занимают 1–2 дня после заявки (в зависимости от региона).

Что входит в стоимость аренды?
— Шатёр, доставка, установка и демонтаж. Мебель, освещение и прочие опции — дополнительно.

Как гарантируется безопасность при непогоде?
— Прочные каркасы и тентовые материалы, монтаж с учётом местных условий и требований безопасности.`,
    },
    {
      title: "Заключение",
      text: `С Мобайл-Тент ваше мероприятие будет защищено от капризов погоды и выиграет в стиле. Оставьте заявку — подберём оптимальное решение под вашу задачу.`,
    },
  ];

  // Default specs from your code (3.5×3.5 — 12.25 м²)
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Квадрат" },
    { label: "Площадь", value: "12,25 м²" },
    { label: "Длина", value: "3,5 м" },
    { label: "Ширина", value: "3,5 м" },
    { label: "Высота входной арки", value: "регулируемая от 3 до 4 м" },
    { label: "Высота в коньке", value: "регулируемая от 3 до 4 м" },
    { label: "Вес конструкции", value: "200 кг" },
    { label: "Нагрузка на опорную пятку", value: "50 кг" },
    { label: "Ветровая нагрузка", value: "24 м/сек" },
    { label: "Нагрузка подвеса на арку", value: "до 10 кг/п.м." },
    {
      label: "Основание",
      value:
        "Не требует специального фундамента, устанавливается на любой земляной поверхности.",
    },
    {
      label: "Монтаж",
      value:
        "Монтируется и демонтируется без спецтехники в минимальный срок, без потери качества, любое количество раз.",
    },
    {
      label: "Модульность",
      value:
        'Возможность увеличения площади путём соединения нескольких конструкций со стороной 3,5 м: "VIP 3,5×3,5 м".',
    },
    {
      label: "Материалы тента",
      value:
        "ПВХ Ferrari Precontraint (Франция). Класс пожарной безопасности М2, Г1.",
    },
    {
      label: "Каркас",
      value: "Все элементы каркаса изготовлены из оцинкованной стали.",
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