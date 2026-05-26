'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Надувной шатер 8х8
  // MARKETING CONTENT — UPDATED for Надувной шатер 12х12
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Надувной шатёр 12х12",
      text: "Технические характеристики и параметры модели ниже.",
    },
    {
      title:
        "Надувной шатёр 12х12 от Мобайл-тент — быстрое и удобное решение для мероприятий",
      text: `Выберите шатёр, который работает на ваш успех.  
Надувные шатры отлично подходят для выставок, презентаций, спортивных событий и выездных мероприятий. Конструкция легко монтируется и не требует специальных навыков для установки — достаточно подключить насос, и шатёр будет готов к использованию в считанные минуты.  
Компания Мобайл-тент более 10 лет успешно занимается производством шатров и заслужила доверие клиентов по всей России.`,
    },
    {
      title: "Технические характеристики и преимущества Надувного шатра 12х12",
      text: `Особенности конструкции:

• Быстрая установка (20–25 минут) с помощью электрического насоса.  
• Прочный ПВХ-материал устойчив к влаге и ультрафиолету.  
• Высокая устойчивость к ветровым нагрузкам.  
• Компактная упаковка и удобная транспортировка.  

Шатёр прошел испытания на различных мероприятиях и показал себя надежным и удобным решением.`,
    },
    {
      title: "Как надувной шатёр изменит ваш бизнес",
      text: `Надувной шатёр позволяет создавать яркое и заметное пространство для привлечения клиентов. Он станет идеальным решением для выездных презентаций, спортивных событий и промо-акций. Компактность и мобильность конструкции сокращают затраты на монтаж и логистику.`,
    },
    {
      title: "Почему выбирают именно надувные шатры от Мобайл-тент:",
      text: `• Проверенные материалы и надежность.  
• Быстрая установка без инструментов.  
• Возможность брендирования шатра под ваш бизнес.  
• Подходит для мероприятий разного масштаба.`,
    },
    {
      title: "Часто задаваемые вопросы",
      text: `Вопрос: Сколько времени занимает установка шатра?  
Ответ: Не более 25 минут.  

Вопрос: Насколько прочный шатёр?  
Ответ: Конструкция выполнена из усиленного ПВХ и выдерживает нагрузку ветра и дождя.`,
    },
    {
      title: "Сделайте шаг к успешному мероприятию с Мобайл-тент",
      text: `Закажите надувной шатёр 12х12 сегодня и обеспечьте своему событию надежное и стильное пространство!`,
    },
  ];

  // TECH SPECS — UPDATED for Надувной шатер 12х12
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Надувной шатёр 12х12" },
    { label: "Площадь", value: "144 м²" },
    { label: "Размер", value: "12х12 м" },
    { label: "Высота стенки", value: "около 3.5–4 м" },
    { label: "Высота в коньке", value: "около 5.5 м" },
    { label: "Материал конструкции", value: "армированный ПВХ" },
    { label: "Цвета", value: "стандартные и брендированные под заказ" },
    { label: "Комплектация", value: "шатёр, насос, сумка для переноски" },
    { label: "Вес", value: "около 110 кг" },
    {
      label: "Свойства покрытия",
      value: `• Водонепроницаемость и устойчивость к ультрафиолету.  
• Огнестойкость.  
• Возможность брендирования (печать логотипов).  
• Быстрая очистка и простое обслуживание.`,
    },
  ];

  const [activeTab, setActiveTab] = useState("description");

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
          </TabsContent>

          <TabsContent value="characteristics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {specs.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#4f5d80] text-lg font-normal">
                    {item.label}
                  </span>
                  <span className="text-[#394355] text-lg font-semibold whitespace-pre-line">
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
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-2 font-semibold text-base text-[#394355] data-[state=active]:text-[#394355] data-[state=inactive]:text-[#4f5d8094] rounded-md"
            >
              Описание
            </TabsTrigger>
            <TabsTrigger
              value="characteristics"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-2 font-semibold text-base text-[#4f5d8094] data-[state=active]:text-[#394355] rounded-md"
            >
              Характеристики
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-4">
            <div className="flex flex-col gap-6">
              {descriptionBlocks.map((block, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  {block.title && (
                    <h3 className="font-semibold text-lg leading-6 text-[#394355]">
                      {block.title}
                    </h3>
                  )}
                  <p className="font-normal text-base leading-6 text-[#394355] whitespace-pre-line">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="characteristics">
            <div className="grid grid-cols-1 gap-4">
              {specs.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-[#4f5d80] text-base font-normal">
                    {item.label}
                  </span>
                  <span className="text-[#394355] text-base font-semibold">
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
