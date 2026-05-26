'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильные шатры-трансформеры Prof 4×6
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильные шатры-трансформеры Prof 4×6 — пространство, которое работает на ваш успех",
      text: `Площадка, которая задает тон мероприятию.
В организации событий каждая деталь имеет значение. Первая встреча гостей с пространством формирует их впечатление и напрямую влияет на восприятие бренда. Мобайл-тент предлагает решение, проверенное сотнями проектов — мобильный шатер Hard Prof 4×6. Он объединяет в себе прочность, мобильность и стиль, создавая идеальные условия для работы, отдыха или презентации.`,
    },
    {
      title: "Опыт, которому доверяют",
      text: `Мы более 12 лет создаем временные архитектурные конструкции для бизнеса, государственных структур и частных заказчиков. Реализовано более 800 проектов в 40 регионах России.`,
    },
    {
      title: "Что мы предлагаем",
      text: `• Монтаж за 40–60 минут без спецтехники.
• Конструкции, устойчивые к ветру до 20 м/с и снеговой нагрузке.
• Сертифицированные материалы, безопасные для людей.
• Гибкую конфигурацию под формат события.`,
    },
    {
      title: "Кейсы",
      text: `В 2024 году мы устанавливали шатер Prof 4×6 для международного спортивного форума в Казани. Несмотря на дождь и сильный ветер, внутри сохранялся комфорт, а конструкция отработала три дня без нареканий.

Другой пример: для крупного автосалона в Новосибирске мы смонтировали павильон под тест-драйвы, использовав комбинацию прозрачных стен и брендированных баннеров. Благодаря быстрой установке, клиент сэкономил два дня подготовки и смог открыть мероприятие точно в срок. Такой опыт укрепляет статус Мобайл-тент как надёжного партнёра.`,
    },
    {
      title: "Преимущества, которые выделяют нас среди конкурентов",
      text: `Наши конструкции — это не просто навес, а инструмент, который помогает укрепить ваш имидж и обеспечить функциональность.

Почему выбирают нас:
• Надёжность в любых условиях — каждый шатёр с усиленной конструкцией рассчитан на интенсивную эксплуатацию.
• Эстетика и дизайн — белоснежное полотно, аккуратные швы, современный внешний вид.
• Универсальность применения — от свадеб до крупных фестивалей и выставок.
• Комплекс услуг — доставка, монтаж, оформление, демонтаж.
• Прозрачные условия — четкие сроки, фиксированные цены, официальные договоры.

Если нужен шатер для аренды на сезон, мы обеспечим его доставку и обслуживание. Для масштабных событий — предложим шатёр для больших мероприятий с дополнительными опциями: остекление, брендирование, декоративная подсветка.

Мы понимаем, что каждая минута важна: план мероприятий жёсткий, а задержки неприемлемы. Поэтому все этапы — от проектирования до демонтажа — выполняются по заранее согласованному графику.`,
    },
    {
      title: "Как мы работаем с вами",
      text: `Заказывая шатры в Мобайл-тент, вы получаете:
• Персонального менеджера, который ведет проект от заявки до демонтажа.
• Гарантию на оборудование и обслуживание.
• Поддержку 24/7 в день мероприятия.`,
    },
    {
      title: "Материалы и безопасность",
      text: `При изготовлении мы используем только проверенные материалы, включая шатёр с ПВХ-тканью, устойчивой к влаге, ультрафиолету и температурным перепадам. Все элементы проходят контроль качества и соответствуют требованиям пожарной безопасности.`,
    },
    {
      title: "Часто задаваемые вопросы (FAQ)",
      text: `Вопрос: Можно ли использовать шатер-трансформер зимой?
Ответ: Да. Конструкции рассчитаны на снеговую нагрузку, а мы предоставим утеплённые панели, остекление и обогрев.

Вопрос: Сколько времени занимает демонтаж?
Ответ: В среднем до часа, даже для крупных шатров. Это экономит время и ресурсы.

Вопрос: Можно ли брендировать шатер под фирменный стиль?
Ответ: Конечно. Мы печатаем баннеры, наносим логотипы, используем цветовые решения под корпоративную палитру. Это усиливает визуальное восприятие вашего бренда.`,
    },
    {
      title: "Ваше событие в надёжных руках",
      text: `Представьте, что всё готово: шатёр установлен, оформление выполнено, оборудование подключено. Вы встречаете гостей без спешки и лишнего стресса, а мы берём на себя все технические задачи.

Оставьте заявку прямо сейчас, и уже сегодня мы подберем оптимальное решение под ваши задачи, бюджет и сроки. С нами ваши мероприятия проходят так, как вы планируете — без сюрпризов и компромиссов.`,
    },
  ];

  // TECH SPECS — UPDATED for Prof 4×6
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Prof 4×6" },
    { label: "Тип", value: "Мобильный шатёр-трансформер (складной)" },
    { label: "Площадь", value: "24 м²" },
    { label: "Размер", value: "6×4 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "385 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "40×40×2 мм" },
    { label: "Размер упаковки", value: "208 × 38 × 27 см" },
    { label: "Вес", value: "44 кг" },
    {
      label: "Свойства покрытия",
      value:
        "• Двойные швы.\n• Стойкость к воздействию микроорганизмов (например, гниению).\n• Огнестоек.\n• Не продувается, водонепроницаем, износостоек.\n• Простота обслуживания.\n• Прекрасно подходит для качественной печати.\n• Всегда в наличии палатки стандартных цветов.\n• Крыша может быть изготовлена из полиэстера или поливинилхлорида, по желанию заказчика.",
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
