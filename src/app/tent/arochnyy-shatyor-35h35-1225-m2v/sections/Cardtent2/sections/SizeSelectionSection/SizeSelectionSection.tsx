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
      title:
        "Арочный шатёр 3.5×3.5 — 12,25 м² от Мобайл-тент: надёжность, которую заслуживает ваш бизнес",
      text: `Компания Мобайл-тент с гордостью предлагает качественные и надёжные шатры для любых типов мероприятий. Мы понимаем, что для успешного события необходим не только правильный выбор места, но и идеальные условия для гостей, участников или сотрудников. Наши шатры гарантируют, что ваше мероприятие будет комфортным и безопасным вне зависимости от погодных условий.`,
    },
    {
      title: "Шатёр с ПВХ покрытием для защищённости от любых факторов",
      text: `Планируете организовать мероприятие на открытом воздухе в любое время года? Шатёр с ПВХ покрытием от Мобайл-тент обеспечит надёжную защиту не только от дождя и ветра, но и от прямых солнечных лучей. Такое покрытие имеет отличные теплоизоляционные свойства и способствует созданию комфортного микроклимата внутри шатра. Это особенно важно при организации корпоративных мероприятий, где каждый гость должен чувствовать себя удобно.

Наши шатры с ПВХ покрытием отлично подойдут для выездных свадеб, выставок и торговых точек на открытых площадках. Они подходят для использования в любую погоду и гарантируют долговечность на протяжении многих лет.`,
    },
    {
      title: "Металлический каркас: прочность и долговечность",
      text: `Когда речь идёт о шатре для крупных мероприятий, выездных работ или постоянных объектов, одним из важнейших факторов является прочность конструкции. Шатёр с металлическим каркасом от Мобайл-тент обеспечивает отличную устойчивость к любым внешним воздействиям. Такие конструкции обладают высокой долговечностью и могут выдерживать даже сильный ветер и снежные осадки.`,
    },
    {
      title: "Как выбрать подходящий шатёр для вашего мероприятия?",
      text: `Выбор шатра зависит от множества факторов, таких как размер пространства, тип мероприятия, погодные условия и предполагаемое количество гостей. Для малого и среднего масштаба событий оптимально подходит арочный шатёр 3,5×3,5, который обеспечивает достаточное пространство для гостей и легко устанавливается.

Если вы планируете крупную выставку или мероприятие, то лучше обратить внимание на шатры с металлическим каркасом. Такие конструкции обладают не только надёжностью, но и могут быть оснащены дополнительными элементами, такими как стены, окна и двери для улучшения микроклимата и комфорта.`,
    },
    {
      title: "Преимущества выбора шатров от Мобайл-тент",
      text: `• Гарантия качества: мы уверены в надёжности и долговечности наших шатров, поэтому предлагаем гарантии на все наши модели.
• Поддержка на всех этапах: наши специалисты помогут вам выбрать оптимальную модель шатра, организуют доставку и установку.
• Гибкость и адаптация под требования клиента: мы предлагаем разнообразие моделей, которые могут быть адаптированы под ваши потребности.
• Высококачественные материалы: каждый шатёр изготовлен из устойчивых к внешним воздействиям материалов, таких как ПВХ и металл.`,
    },
    {
      title: "Шатры для мероприятий любого масштаба",
      text: `Независимо от того, планируете ли вы провести свадебное торжество, организовать выставку или выездные работы, наши шатры удовлетворят любые потребности. Мобайл-тент предлагает конструктивные решения для мероприятий любого типа и масштаба. Мы подбираем модель шатра, которая идеально подходит для ваших целей.

Мобайл-тент — это компания, которой можно доверять. Мы работаем с клиентами по всей России, обеспечивая их надёжными решениями для мероприятий любого масштаба.`,
    },
    {
      title: "Часто задаваемые вопросы",
      text: `1. Какие материалы используются для производства шатров?
Мы используем только проверенные материалы, такие как ПВХ для покрытия и металл для каркасов, что гарантирует высокую прочность и долговечность наших шатров.

2. Могу ли я арендовать шатёр для мероприятия?
Да, мы предоставляем услугу аренды шатров для различных мероприятий. Вы можете арендовать шатёр на необходимый срок, и мы организуем доставку и установку.

3. Как выбрать подходящий шатёр для моего мероприятия?
Наши специалисты помогут вам выбрать оптимальный шатёр, учитывая размер мероприятия, предполагаемую нагрузку и погодные условия. Вы можете связаться с нами для консультации.

Компания Мобайл-тент уже более 10 лет предоставляет качественные шатры для мероприятий, выездных работ и выставок по всей России. Мы гордимся своей репутацией и предлагаем нашим клиентам только лучшие решения для их бизнеса и личных нужд. Если вам нужен шатёр для мероприятия или выездных работ, Мобайл-тент — ваш надёжный партнёр.

Закажите шатёр уже сегодня и убедитесь, почему тысячи клиентов доверяют нам!`,
    },
  ];

  // Default specs from your code (3.5×3.5 — 12.25 м²)
  const defaultSpecs: { label: string; value: string }[] = [
    { label: "Форма", value: "Квадрат" },
    { label: "Площадь", value: "12.25 м²" },
    { label: "Длина", value: "3.5 м" },
    { label: "Ширина", value: "3.5 м" },
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
        "Монтируется и демонтируется без применения специальной техники в минимальный срок, без потери качества, любое количество раз.",
    },
    {
      label: "Модульность",
      value:
        'Возможность увеличения площади путём соединения нескольких конструкций со стороной 3,5 м: "VIP 3,5×3,5 м".',
    },
    {
      label: "Материалы тента",
      value:
        "Тентовое полотно и стены изготовлены из ПВХ французского производства Ferrari Precontrant. Класс пожарной безопасности М2, Г1.",
    },
    {
      label: "Каркас",
      value: "Все элементы каркаса конструкции изготовлены из оцинкованной стали.",
    },
    { label: "Установка", value: "Устанавливается на тумбы высотой 0,5 м." },
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