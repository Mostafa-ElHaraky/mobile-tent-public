'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Купольный шатёр Ø6 м (MOBILE TENT)
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Купольный шатёр, диаметр 6 м",
      text: `Купольные шатры диаметром 6 м от компании MOBILE TENT — идеальное решение для вашего отдыха и бизнеса.

В поисках надежного укрытия для природы или организации камерных мероприятий? Мы более 10 лет на рынке и зарекомендовали себя как производитель с множеством успешных проектов.

Купольные шатры Ø6 м — это элегантная форма и просторное внутреннее пространство для создания комфортной атмосферы гостей. Конструкция легко устанавливается и подходит для самых разных событий: от свадеб до выставок. Прочные материалы защищают от непогоды, а стильный дизайн добавляет изысканности.`,
    },
    {
      title: "Шатры для вашего мероприятия",
      text: `Купольные решения становятся всё популярнее у организаторов благодаря своей форме и функциональности. Ø6 м — универсальный и компактный размер для открытых площадок и indoor-пространств: свадьбы, корпоративы, выставки, приватные вечеринки.`,
    },
    {
      title: "Преимущества",
      text: `• Простор внутри: при небольшом диаметре купольная форма даёт ощущение объёма. Вмещает ~30–40 человек в зависимости от конфигурации мебели.
• Защита от погоды: устойчив к ветру и дождю.
• Модульность и комфорт: опциональные окна, двери, вентиляция, утепление, освещение и декор под тематику события.

Это не просто укрытие — это стильный элемент пространства. Идеален для кемпинга, пикников или зоны у бассейна; форма купола отлично отводит дождь и закрывает от ветра.`,
    },
    {
      title: "Почему MOBILE TENT",
      text: `Опыт и экспертиза
Свыше 500 довольных клиентов по всей стране. Поможем подобрать оптимальную конфигурацию под ваши задачи.

Качество материалов
Используем сертифицированные ткани и каркасные системы, устойчивые к внешним воздействиям — долговечность и безопасность.

Прозрачные условия
Детализируем стоимость и логистику заранее. Без скрытых платежей — вы всегда понимаете, за что платите.

Спешите заказать купольный шатёр Ø6 м в нашей компании!`,
    },
  ];

  // TECH SPECS — Updated for Ø6 м
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Купольная (геодезический купол)" },
    { label: "Диаметр", value: "6 м" },
    { label: "Площадь", value: "около 28,3 м²" }, // π·3² ≈ 28.27 м²
    { label: "Вместимость", value: "до 30–40 человек (в зависимости от рассадки)" },
    { label: "Монтаж", value: "Быстрый; возможна самостоятельная установка по инструкции" },
    { label: "Эксплуатация", value: "Сезонная или круглогодичная при утеплении и вентиляции" },
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
                  <span className="text-[#394355] text-lg font-semibold">
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
