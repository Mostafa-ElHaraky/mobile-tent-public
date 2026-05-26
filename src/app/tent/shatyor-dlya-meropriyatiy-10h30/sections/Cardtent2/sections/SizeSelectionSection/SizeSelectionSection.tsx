'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Шатёр для мероприятий 10×30 м
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Шатёр для мероприятий 10×30 м",
      text: `Шатёр 10×30 м — высококачественный мобильный тент площадью 300 м². Это универсальная площадка под банкеты, выставки, концерты, спортивные и деловые события. Конструкция защищает от ветра, дождя и прямых солнечных лучей, помогает сэкономить на аренде стационарных помещений и размещаться там, где удобно.`,
    },
    {
      title: "Конструкция и материалы",
      text: `• Не требует специального фундамента — устанавливается на любой земляной/ровной поверхности.
• Монтируется и демонтируется без спецтехники в минимальные сроки, без потери качества, многократно.
• Возможна модульная стыковка нескольких конструкций для увеличения площади.
• Тентовое полотно и стены — ПВХ DICKSON (Франция) с системой LoWick, класс пожарной безопасности М2, Г1.
• Тентовое покрытие — сертифицированное ПВХ-полотно с добавками, препятствующими горению (DIN 4102 B1), М2, 0,3 кН/м²; устойчиво к гниению.
• Каркас — анодированный алюминий (сплав 6063 DIN 573), сертификат QUALANOD.
• Крепёж — оцинкованная сталь DIN 50976.
• Особенности монтажа: обязательное крепление конструкции к поверхности установки или утяжеление бетонными блоками.`,
    },
    {
      title: "Пространство, которое работает на ваш результат",
      text: `Представьте площадку, которая собирается за часы, адаптируется под любые задачи и легко трансформируется прямо в ходе события. Модульный шатёр 10×30 — решение, проверенное сотнями кейсов. Mobile-tent предоставляет аренду и продажу по всей России, обеспечивая точность, безопасность и визуальное превосходство.`,
    },
    {
      title: "Почему именно шатёр 10×30?",
      text: `Это универсальное решение на 100–250 гостей. Форматы: банкетная зона, выставочный павильон, концертная сцена, уличная студия. 300 м² — достаточно для комфортной и эстетичной планировки.

В отличие от стационарных объектов, шатёр:
• Быстро монтируется и демонтируется;
• Устанавливается на любой ровной поверхности;
• Масштабируется за счёт модульности;
• Дополняется полами, отоплением, светом, текстилем и брендированием.`,
    },
    {
      title: "Опыт Mobile-tent",
      text: `За 13 лет реализовано свыше 2000 проектов для B2B, ивент-агентств и госструктур. Мы фокусируемся на результате, который видит ваш гость — имидж, комфорт и ROI.`,
    },
    {
      title: "Кейсы, подтверждённые практикой",
      text: `• 2023: концерт под шатром 10×30 на городской набережной. Сроки — 14 часов от выгрузки до запуска, включая сцену, звук, свет и оформление. Посетителей — более 1800 за 3 дня. Поддержка в три смены.
• Зимняя свадьба в Подмосковье: продажа шатра 10×30 в стиле «зимний сад». Прозрачные панели, система отопления, инженерное освещение, текстиль, подиум, танцпол и VIP-зона.`,
    },
    {
      title: "Что входит в аренду шатра 10×30?",
      text: `• Бесплатная консультация и выезд инженера (в пределах региона);
• Подбор технической конфигурации;
• Проектирование в 3D с визуализацией и планом расстановки;
• Доставка, монтаж, подключение оборудования;
• Контроль безопасности, соблюдение СНиП и ТР ТС;
• Демонтаж, уборка, вывоз.

Все работы выполняет штатная команда — без «наёмных монтажников». Мы отвечаем за каждое действие.`,
    },
    {
      title: "Конкурентные преимущества Mobile-tent",
      text: `• Скорость — монтаж за 8–10 часов;
• Гарантия безопасности — сертифицированные конструкции, расчёты нагрузок;
• Прозрачные цены — без скрытых пунктов в договоре;
• Гибкость — аренда или продажа, короткий и длинный срок;
• Сопровождение — от заявки до демонтажа всегда на связи.`,
    },
    {
      title: "Когда стоит купить шатёр?",
      text: `Покупка выгодна, если:
• вы регулярно проводите мероприятия;
• есть собственная площадка;
• хотите снизить будущие расходы на аренду;
• нужен индивидуальный дизайн и брендирование.`,
    },
    {
      title: "Использование на выставках",
      text: `Выставочный формат требует чистоты линий, грамотной экспозиции, коммуникаций и света. Наши конструкции легко адаптируются: шатёр может быть автономным павильоном или частью внешней площадки. Используем алюминиевые профили с высокими нагрузочными характеристиками и тенты, устойчивые к УФ и осадкам.`,
    },
    {
      title: "FAQ",
      text: `Нужно ли разрешение на установку?
— В ряде случаев (городская черта, массовые мероприятия) требуется. Помогаем с документацией и техпаспортами.

Можно ли обогреть шатёр зимой?
— Да. Устанавливаем дизельные или электрические тепловые пушки с расчётом мощности под объём шатра.`,
    },
    {
      title: "Ваше событие начинается с правильного выбора",
      text: `С Mobile-tent вы получаете не просто шатёр, а надёжную инфраструктуру под ключ. Оставьте заявку — получите расчёт стоимости, 3D-схему и рекомендации бесплатно. Мы берём на себя техническую часть, чтобы вы сосредоточились на важном.`,
    },
  ];

  // TECH SPECS — UPDATED for 10×30
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "300 м²" },
    { label: "Длина", value: "30 м" },
    { label: "Ширина", value: "10 м" },
    { label: "Высота стены (опоры)", value: "2,5 / 3 / 3,5 / 4 м" },
    { label: "Высота в коньке", value: "макс. 7,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "1650 кг" },
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
