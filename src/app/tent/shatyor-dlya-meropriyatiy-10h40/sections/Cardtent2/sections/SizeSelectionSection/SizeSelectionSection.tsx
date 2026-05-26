'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Шатёр для мероприятий 10×40 м
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Шатёр для мероприятий 10×40 м",
      text: `Шатёр 10×40 м — мобильный тент площадью 400 м² для событий, где важны масштаб, мобильность и эстетика. Решение подходит для выставок, банкетов, корпоративов, конференций и фестивалей. Конструкция защищает от ветра, дождя и солнца и позволяет оперативно организовать площадку там, где это нужно.`,
    },
    {
      title: "Конструкция и материалы",
      text: `• Не требует специального фундамента — устанавливается на любой ровной земляной поверхности.
• Монтируется и демонтируется без применения спецтехники в минимальные сроки, без потери качества, многократно.
• Возможность увеличения площади путём соединения нескольких конструкций.
• Тентовое полотно и стены — ПВХ DICKSON (Франция) с системой LoWick, класс пожарной безопасности М2, Г1.
• Тентовое покрытие — сертифицированное ПВХ-полотно с добавками, препятствующими горению (DIN 4102 B1), M2, 0,3 кН/м²; устойчиво к гниению.
• Каркас — анодированный алюминий (сплав 6063 DIN 573), сертификат QUALANOD.
• Крепёж — оцинкованная сталь DIN 50976.
• Особенности монтажа: обязательное крепление конструкции к поверхности установки или утяжеление бетонными блоками.`,
    },
    {
      title: "Пространство, которое работает на вас: шатёр 10×40 от Mobile-tent",
      text: `Организуйте мероприятие без компромиссов. Представьте: просторный шатёр 10×40, который идеально вписывается в формат вашего события — от деловой выставки и торжественной свадьбы до корпоративного праздника на открытом воздухе. Это не просто временная конструкция, а инструмент, повышающий статус мероприятия, комфорт гостей и уровень организации.`,
    },
    {
      title: "Опыт Mobile-tent",
      text: `Компания Mobile-tent более 12 лет специализируется на проектировании, установке и аренде шатров по всей России. Реализовано более 1500 проектов — от камерных частных мероприятий до федеральных деловых событий. Мы создаём надёжное, эстетичное и функциональное пространство под ключ с учётом задач клиента и особенностей площадки.`,
    },
    {
      title: "Почему шатёр 10×40 — это решение для профессионалов: многофункциональность",
      text: `• Подходит для выставок, свадеб, корпоративов, конференций, банкетов, презентаций, автосалонов и др.
• Вместимость — до 400 гостей в банкетной рассадке и до 800 в формате «театр».
• Возможна установка на газон, плитку, асфальт, бетон (при соблюдении требований к ровности основания).`,
    },
    {
      title: "Прочная конструкция",
      text: `• Каркас из алюминия промышленного класса.
• Тентовая ткань — ПВХ высокого давления, устойчива к износу, УФ-лучам и влаге.
• Соответствие ГОСТ и международным нормам безопасности.`,
    },
    {
      title: "Быстрая установка под ключ",
      text: `• Монтаж занимает от 6 часов до одного дня — в зависимости от условий площадки.
• Работы выполняет собственная команда монтажников с опытом более 7 лет.
• Возможен экспресс-монтаж в течение 24 часов.`,
    },
    {
      title: "Преимущества сотрудничества с Mobile-tent",
      text: `Опыт и доверие:
• 12 лет на рынке, более 1500 успешно завершённых проектов.

Прозрачные условия:
• Работа по официальному договору; стоимость рассчитывается заранее, без скрытых платежей; возможна безналичная оплата с учётом требований.

Легальность и безопасность:
• Все конструкции сертифицированы, компания входит в СРО, персонал проходит регулярную аттестацию; предоставляем паспорта безопасности и техдокументацию по запросу.

Комплексное обслуживание:
• Один подрядчик решает все задачи: консультация, согласование с площадкой, декор, электроподключение, обслуживание, демонтаж и вывоз.`,
    },
    {
      title: "FAQ",
      text: `Можно ли использовать зимой или в плохую погоду?
— Да. При наличии боковых стенок и обогрева шатёр устойчив к ветру и осадкам. Предоставим техническую схему и рекомендации по размещению в зимний период.

Какой минимальный срок аренды?
— Минимум одни сутки. В стоимость включены доставка, установка и демонтаж. Цена зависит от сезона, региона и комплектации.`,
    },
    {
      title: "Цифры, которые говорят за нас",
      text: `• 12 лет на рынке
• Более 1500 реализованных проектов
• 92% клиентов обращаются повторно
• Среди клиентов — Газпром, Яндекс, Роснефть, Альфа-Банк
• В наличии 20 шатров, готовых к немедленной доставке`,
    },
    {
      title: "Готовы перейти к делу?",
      text: `Закажите шатёр 10×40 от Mobile-tent и получите не просто конструкцию, а полноценную платформу для успешного события. Оставьте заявку — подготовим смету, предложим оптимальное решение и ответим на вопросы.
Mobile-tent — профессиональное пространство для значимых событий. Оформите заказ уже сегодня и получите бесплатную консультацию с 3D-визуализацией вашего проекта.`,
    },
  ];

  // TECH SPECS — UPDATED for 10×40
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "400 м²" },
    { label: "Длина", value: "40 м" },
    { label: "Ширина", value: "10 м" },
    { label: "Высота стены (опоры)", value: "2,5 / 3 / 3,5 / 4 м" },
    { label: "Высота в коньке", value: "макс. 7,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "2200 кг" },
    { label: "Нагрузка подвеса на арку", value: "до 30 кг/п.м." },
    { label: "Основной рамный профиль", value: "166 × 89 × 3,00, сертификат QUALANOD" },
    { label: "Дополнительный профиль", value: "100 × 48 × 3,00, сертификат QUALANOD" },
    { label: "Профиль прогонов", value: "50 × 50 × 3,00, сертификат QUALANOD" },
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
            {specs.length > 0 ? (
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
            ) : (
              <p className="text-[#4f5d80] text-lg">Характеристики будут добавлены позже.</p>
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
