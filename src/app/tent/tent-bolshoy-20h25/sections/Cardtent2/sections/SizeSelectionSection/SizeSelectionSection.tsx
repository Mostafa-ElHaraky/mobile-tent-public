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
  // MARKETING / DESCRIPTION — UPDATED for Тент большой 20×25
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Тент большой 20×25 — классическое решение для мероприятий",
      text: `Прямоугольный шатёр площадью 500 м² позволяет проводить масштабные события на открытом воздухе и защищает гостей от непогоды. 
      
Шатёр 20×25 м подходит для спортивных и культурных мероприятий, выездных конференций, торговли и фуршетов. Приобретая конструкцию в собственность или арендуя её, вы получаете мобильное помещение с широкими возможностями кастомизации.`,
    },
    {
      title: "Технические характеристики и преимущества",
      text: `• Общая площадь — 500 м². 
• Стены могут быть с окнами и без них; количество и конфигурацию оконных и дверных проёмов согласуем при заказе.
• Широкая цветовая палитра; возможно нанесение логотипа на тент. 
• ПВХ-полотно пропитано огнеупорным составом (класс М2, Г1), защищает от дождя и солнца.
• Конструкция устойчива к ветровой нагрузке и рассчитана на многократные циклы монтажа/демонтажа.`,
    },
    {
      title: "Особенности монтажа",
      text: `• Фундамент не требуется: установка на любой ровной земляной поверхности. 
• Монтаж и демонтаж выполняются без применения спецтехники, быстро и без потери качества. 
• Для защиты от порывов ветра рекомендуется утяжеление бетонными блоками; после закрепления следует проверить надёжность установки. 
• Конструкция компактна в перевозке и транспортируется обычным грузовым транспортом.
• Возможно увеличение площади путём соединения нескольких конструкций.`,
    },
    {
      title: "Как заказать",
      text: `Купить или арендовать большой шатёр 20×25 м можно прямо сейчас: позвоните или напишите нам, и менеджер подготовит предложение под вашу задачу.`,
    },
  ];

  // TECH SPECS — UPDATED for Тент большой 20×25
  const specs: { label: string; value: string }[] = [
    { label: "Модель", value: "Тент большой 20×25" },
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "500 м²" },
    { label: "Длина", value: "25 м" },
    { label: "Ширина", value: "20 м" },
    { label: "Высота стены (опоры)", value: "3 / 3,5 / 4 / 4,5 / 5 м" },
    { label: "Высота в коньке", value: "макс. 8,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "7500 кг" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    { label: "Основной рамный профиль", value: "240 × 100 × 5,00 мм, сертификат QUALANOD" },
    { label: "Дополнительный профиль", value: "166 × 89 × 4,00 мм, сертификат QUALANOD" },
    { label: "Профиль прогонов", value: "60 × 60 × 4,00 мм, сертификат QUALANOD" },
    { label: "Требования к основанию", value: "Фундамент не требуется; установка на любой земляной поверхности" },
    { label: "Монтаж/демонтаж", value: "Без применения спецтехники; в минимальные сроки; многократно" },
    { label: "Возможность расширения", value: "Увеличение площади путём соединения нескольких конструкций" },
    { label: "Материал тента и стен", value: "ПВХ DICKSON (Франция) с системой LoWick, класс М2, Г1" },
    { label: "Тентовое покрытие", value: "ПВХ DIN 4102 B1; стойкость к гниению; ≈ 20,3 кН/м²" },
    { label: "Каркас и сплав", value: "Анодированный алюминий, сплав 6063 DIN 573, QUALANOD" },
    { label: "Крепёж", value: "Оцинкованная сталь DIN 50976" },
    { label: "Особенности монтажа", value: "Обязательное крепление к основанию или утяжеление бетонными блоками" },
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
    
    // Default content
    return (
      <div className="flex flex-col gap-10">
        {descriptionBlocks.map((block, idx) => (
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
        {descriptionBlocks.map((block, idx) => (
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
            {specs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {specs.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[#4f5d80] text-lg font-normal [font-family:'Raleway',Helvetica]">
                      {item.label}
                    </span>
                    <span className="text-[#394355] text-lg font-semibold whitespace-pre-line [font-family:'Raleway',Helvetica]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#4f5d80] text-lg [font-family:'Raleway',Helvetica]">
                Характеристики будут добавлены позже.
              </p>
            )}
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
              {specs.map((item, i) => (
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