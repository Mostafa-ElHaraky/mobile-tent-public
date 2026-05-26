'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Шатёр для мероприятий 10×35 м
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Шатёр для мероприятий 10×35 м",
      text: `Шатёр 10×35 м — мобильный тент площадью 350 м² для масштабных событий, где важны пространство, мобильность и эстетика. Это решение для банкетов, выставок, корпоративов, спортивных и культурных мероприятий. Конструкция защищает от ветра, дождя и солнца и позволяет быстро организовать площадку там, где это нужно.`,
    },
    {
      title: "Конструкция и материалы",
      text: `• Не требует специального фундамента — устанавливается на любой земляной (ровной) поверхности.
• Монтируется и демонтируется без применения спецтехники в минимальные сроки, без потери качества, многократно.
• Возможна модульная стыковка нескольких конструкций для увеличения площади.
• Тентовое полотно и стены — ПВХ DICKSON (Франция) с системой LoWick, класс пожарной безопасности М2, Г1.
• Тентовое покрытие — сертифицированное ПВХ-полотно с добавками, препятствующими горению (DIN 4102 B1), М2, 0,3 кН/м²; устойчиво к гниению.
• Каркас — анодированный алюминий (сплав 6063 DIN 573), сертификат QUALANOD.
• Крепёж — оцинкованная сталь DIN 50976.
• Особенности монтажа: обязательное крепление конструкции к поверхности установки или утяжеление бетонными блоками.`,
    },
    {
      title: "Шатёр 10×35 для мероприятий: когда пространство решает всё",
      text: `Когда на карту поставлены репутация бренда, комфорт гостей и безупречная логистика, компромиссов быть не может. Mobile-tent предлагает аренду и продажу шатров с установкой под ключ по всей России.`,
    },
    {
      title: "Опыт Mobile-tent",
      text: `С 2011 года мы реализовали более 1900 проектов — от бизнес-форумов до масштабных выставок, от корпоративов до спортивных мероприятий. Наши конструкции — не просто укрытие, а полноценные архитектурные объекты, соответствующие требованиям по безопасности, визуальному восприятию и функциональности.`,
    },
    {
      title: "Почему выбирают именно Mobile-tent?",
      text: `Надёжность, экспертиза и внимание к деталям — основа нашей работы:
• 13 лет на рынке событийной инфраструктуры;
• Конструкции соответствуют ГОСТ и требованиям ТР ТС;
• Профессиональный штат инженеров, монтажников, проектировщиков;
• Безопасная установка шатра 10×35 в любых погодных условиях;
• Поддержка на каждом этапе — от брифинга до демонтажа.
Мы предоставляем аренду и продажу. Вы можете купить шатёр 10×35 с обслуживанием, хранением и адаптацией под новые задачи. Каждое решение — индивидуальный проект.`,
    },
    {
      title: "Где и как используется шатёр 10×35?",
      text: `Шатёр легко масштабируется и конфигурируется под задачу: зона переговоров, банкет, выставочная экспозиция, интерактивная площадка.
Примеры применения:
• Для выставки — зонирование экспонентов, потолочное освещение, брендирование стен;
• Мероприятия на открытом воздухе — от фуршетов до fashion-показов;
• Для корпоративов — со сценой, экраном, барной зоной;
• Культурные фестивали, деловые сессии, спортивные события;
• Функциональные решения: склад, кухня, VIP-зона, backstage.
Мы учитываем климат, сезон, рельеф, логику движения гостей и требования ТБ. Всё — в одной смете, без «сюрпризов».`,
    },
    {
      title: "Что входит в аренду шатра 10×35?",
      text: `• Выезд специалиста на площадку и аудит (бесплатно по Москве и области);
• Подбор конфигурации: высота, количество выходов, вентиляция, пол;
• Монтаж шатра и дополнительных элементов — освещение, отопление, драпировка;
• Дежурная бригада при необходимости (на длительных мероприятиях);
• Демонтаж, уборка и вывоз — строго в согласованные сроки.
Все конструкции проходят техосмотр, дезинфекцию и упаковку после каждого мероприятия — мы гарантируем безопасность и чистоту.`,
    },
    {
      title: "Конкурентные преимущества Mobile-tent",
      text: `Мы интегрируем шатёр в концепцию события:
• Быстрый расчёт стоимости — за 30 минут после обращения;
• Брендирование шатра и фасадных панелей;
• Гибкие условия аренды: от 1 дня до 12 месяцев;
• Работа с подрядчиками заказчика — логистика, звук, свет, кейтеринг;
• Установка даже в сложных условиях — пляж, горы, парки.
Прозрачные условия — без скрытых пунктов, доплат за погоду или экстренный демонтаж.`,
    },
    {
      title: "Когда стоит купить шатёр для мероприятий?",
      text: `Если планируете серию событий, развиваете ивент-бизнес или хотите снизить расходы на аренду — покупка выгодна. Мы предлагаем:
• Полную техническую документацию;
• Доукомплектацию (освещение, пол, окна, утепление);
• Обслуживание и хранение вне сезона;
• Доставку в регионы собственным транспортом;
• Обучение вашей команды сборке.`,
    },
    {
      title: "FAQ",
      text: `Сколько человек помещается в шатре 10×35?
— До 300 при фуршете или около 200 за банкетными столами. Возможно зонирование на лаунж, сцену, переговорные.

Сколько времени занимает установка?
— От 6 до 10 часов в зависимости от условий площадки и выбранных опций.`,
    },
    {
      title: "Готовы к событию, которое запомнят?",
      text: `Идеальное мероприятие начинается с грамотной организации пространства. Шатёр 10×35 — универсальное решение, способное преобразить любую локацию. Mobile-tent — архитектура вашего события, на которую можно положиться.`,
    },
  ];

  // TECH SPECS — UPDATED for 10×35
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "350 м²" },
    { label: "Длина", value: "35 м" },
    { label: "Ширина", value: "10 м" },
    { label: "Высота стены (опоры)", value: "2,5 / 3 / 3,5 / 4 м" },
    { label: "Высота в коньке", value: "макс. 7,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "1925 кг" },
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
