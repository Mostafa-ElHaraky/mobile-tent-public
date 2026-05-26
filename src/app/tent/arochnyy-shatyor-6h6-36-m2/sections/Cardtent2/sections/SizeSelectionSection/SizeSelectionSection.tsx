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
      title: "Арочный шатёр 6×6 — 36 м²: идеальное решение для вашего мероприятия",
      text: `В современном мире организации мероприятий, будь то свадьба, корпоратив, выставка или праздник на свежем воздухе, важным аспектом является выбор подходящего места и оборудования. Одним из самых универсальных и практичных решений является арочный шатёр 6×6 — он идеально подходит для различных мероприятий и предлагает множество преимуществ. Отлично подходит для проведения праздников и деловых встреч на свежем воздухе. Его устойчивый каркас и износостойкий материал гарантируют защиту от непогоды. Благодаря просторной площади внутри, шатёр обеспечивает комфортное размещение гостей, а изящные арки придают конструкции привлекательный и современный облик.`
    },
    {
      title: "Почему стоит выбрать?",
      text: `Это не просто временная конструкция, а стильное и функциональное решение для вашего мероприятия. Его арочная форма обеспечивает отличную устойчивость к ветру и осадкам, что делает его идеальным выбором для использования на открытом воздухе. Благодаря площади 36 м² он может вместить до 30–40 человек, что подходит как для камерных встреч, так и для более масштабных событий.`
    },
    {
      title: "Где купить арочный шатёр 6×6 — 36 м²?",
      text: `Компания Mobile Tent предлагает широкий ассортимент товаров высокого качества с доставкой и установкой.`
    },
    {
      title: "Как выбрать?",
      text: `При выборе важно учитывать несколько факторов:
1) Материалы — конструкция должна быть из качественных материалов, устойчивых к воздействию внешней среды.
2) Устойчивость — обратите внимание на дополнительные крепления и системы защиты от ветра.
3) Дизайн — подберите цвет и стиль шатра под тему вашего мероприятия.
4) Доп. опции — возможна установка освещения или обогрева внутри шатра.`
    },
    {
      title: "Преимущества использования",
      text: `1) Универсальность — подходят для любых мероприятий: от свадеб до выставок.
2) Легкость установки — большинство моделей монтируются без спецоборудования.
3) Эстетика — арочная форма придаёт мероприятию стильный вид.
4) Защита от непогоды — укрывает от дождя и солнца, создавая комфортные условия для гостей.`
    },
    {
      title: "Арочный шатёр 6×6 — 36 м²: цена",
      text: `Цена зависит от производителя, качества материалов и опций. При покупке вы получаете не только сам шатёр, но и возможность многократного использования для разных событий. Наша компания предлагает широкий ассортимент: новые модели и б/у варианты по более низкой цене. Также предоставляем доставку и установку на площадке.`
    },
    {
      title: "FAQ: О чём чаще всего спрашивают",
      text: `Вопрос: Возможна ли доставка и установка в других регионах?
Ответ: Да, мы работаем по всей России, организуя доставку и профессиональный монтаж.
Вопрос: Что входит в стоимость шатра?
Ответ: Шатёр, каркас, тент, крепёжные элементы, доставка и, при необходимости, установка.`
    },
    {
      title: "Итог",
      text: `Если вы планируете мероприятие и хотите создать комфортное пространство для ваших гостей, эта покупка — отличное решение. Универсальный вариант обеспечит защиту от непогоды и создаст уютную атмосферу для общения. Не упустите возможность сделать ваше событие незабываемым — выберите надёжного поставщика и наслаждайтесь праздником! Представьте, как ваше мероприятие заиграет новыми красками с элегантным и функциональным шатром: изящная форма, надёжная конструкция и современные материалы — идеальный выбор для любого проекта. Станьте частью тысяч довольных клиентов!`
    },
  ];

  // TECH SPECS — UPDATED (6×6 — 36 м²)
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Квадрат" },
    { label: "Площадь", value: "36 м²" },
    { label: "Длина", value: "6 м" },
    { label: "Ширина", value: "6 м" },
    { label: "Высота входной арки", value: "3,2 м" },
    { label: "Высота в коньке", value: "3,8 м" },
    { label: "Вес конструкции", value: "675 кг" },
    { label: "Нагрузка на опорную пятку", value: "169 кг" },
    { label: "Ветровая нагрузка", value: "24 м/сек" },
    { label: "Нагрузка подвеса на арку", value: "до 25 кг/п.м." },
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
        'Возможность увеличения площади путём соединения нескольких конструкций со стороной 6 м: "VIP 6×6 м", "VIP Дюна 6×6 м", "VIP 12×12 м".',
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