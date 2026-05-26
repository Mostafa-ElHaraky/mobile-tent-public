'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильный шатёр Slim Prof 4х4
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильный шатёр Slim Prof 4х4",
      text: "Технические характеристики и параметры модели ниже.",
    },
    {
      title: "Мобильный шатер Slim Prof 4x4 — надёжная основа для любого события",
      text:
        "Когда важна каждая деталь\n" +
        "В организации мероприятий мелочей не бывает. Первое, что видят гости — это площадка. Именно она задаёт тон всему событию, влияет на восприятие бренда и даже на настроение участников. Мобайл-тент предлагает решение, которое одинаково уместно на деловой выставке, городском фестивале, спортивном турнире или камерной презентации — мобильный шатер Slim Prof 4x4. Эта конструкция сочетает в себе современный дизайн, высокую прочность и мобильность, что делает её универсальной для любых форматов.",
    },
    {
      title: "Опыт, подтвержденный практикой и доверием клиентов",
      text:
        "За 12 лет работы мы реализовали более 800 проектов в 40 регионах России — от Сочи до Владивостока. Наши шатры защищали гостей от зноя и непогоды на фестивалях, создавали деловую атмосферу на форумах, служили торговыми павильонами и сценическими зонами.\n\n" +
        "Мобайл-тент обеспечивает:\n" +
        "• Быструю установку — за 30–60 минут без привлечения спецтехники.\n" +
        "• Конструкцию, выдерживающую ветер до 20 м/с и значительные снеговые нагрузки.\n" +
        "• Материалы с сертификатами безопасности и защитой от ультрафиолета.\n" +
        "• Гибкость конфигурации: можно увеличить или уменьшить площадь под задачу.\n\n" +
        "Недавний пример: для международного форума в Екатеринбурге мы установили шатёр для выездных мероприятий с брендированием, внутренним освещением и климат-контролем. Несмотря на капризную погоду, внутри было тепло, сухо и комфортно. Гости высоко оценили организацию, а заказчик продлил контракт на следующий год.",
    },
    {
      title: "Преимущества, которые выделяют нас среди конкурентов",
      text:
        "Шатёр — это не просто крыша над головой, а элемент, который работает на имидж, продажи и атмосферу мероприятия.\n\n" +
        "Почему наши клиенты возвращаются к нам снова:\n" +
        "• Дизайн, который работает на бренд — лаконичные линии, идеальные швы и белоснежное полотно создают ощущение премиальности.\n" +
        "• Разнообразие форматов применения — от промоакций до сезонных торговых площадок с использованием легкого шатра для бизнеса, который легко перевозить.\n" +
        "• Прочность — каждый шатер с алюминиевым каркасом рассчитан на многократную сборку-разборку и эксплуатацию в разных климатических условиях.\n" +
        "• Комплексный подход — доставка, монтаж, декор, демонтаж, техническая поддержка.\n" +
        "• Прозрачные условия — фиксированные цены, чёткие сроки, официальные договоры.\n\n" +
        "Когда вам нужен шатер для выставок, мы предлагаем готовое решение: от дизайна стендов до внутренней навигации. Всё под ключ, чтобы вы могли сосредоточиться на работе с клиентами.",
    },
    {
      title: "Простой и надёжный старт сотрудничества",
      text:
        "С нами вы получаете не просто оборудование, а команду профессионалов, которая берет ответственность за весь процесс:\n" +
        "• Персональный менеджер на весь проект.\n" +
        "• Гарантия на оборудование и услуги.\n" +
        "• Поддержка 24/7 в день мероприятия.\n" +
        "• Возможность срочного монтажа в течение суток.\n\n" +
        "Мобайл-тент регулярно обновляет парк шатров и тестирует их в реальных условиях, чтобы каждый заказчик был уверен в результате.",
    },
    {
      title: "FAQ",
      text:
        "Вопрос: Можно ли установить шатер зимой?\n" +
        "Ответ: Да. Конструкции рассчитаны на снеговую нагрузку, а мы дополнительно предложим утепленные панели, остекление и обогреватели, чтобы обеспечить комфорт.\n\n" +
        "Вопрос: Сколько времени занимает демонтаж?\n" +
        "Ответ: В среднем не более часа, даже для крупных комплексов. Это экономит ваше время и снижает затраты на логистику.\n\n" +
        "Вопрос: Можно ли брендировать шатёр под мой проект?\n" +
        "Ответ: Конечно. Мы используем печать на тканях, баннерных материалах и панелях, чтобы шатёр выглядел частью вашего бренда.",
    },
    {
      title: "Ваше событие — наш приоритет",
      text:
        "Представьте, что всё готово к открытию: шатёр установлен, оформление выполнено, оборудование подключено. Гости довольны, партнёры впечатлены, а вы спокойны, потому что доверили работу профессионалам.\n\n" +
        "Позвоните нам или оставьте заявку на сайте — и уже сегодня мы подберем оптимальное решение, адаптированное под ваш формат мероприятия, сроки и бюджет.",
    },
  ];

  // TECH SPECS — UPDATED for Slim Prof 4х4
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Slim Prof 4х4" },
    { label: "Площадь", value: "16 м²" },
    { label: "Размер", value: "4х4 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "385 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "30х30*1,2 мм" },
    { label: "Размер упаковки", value: "208 x 27 x 27 см" },
    { label: "Вес", value: "39 кг" },
    {
      label: "Свойства покрытия",
      value:
        "• Двойные швы.\n" +
        "• Стойкость к воздействию микроорганизмов (например, гниению).\n" +
        "• Огнестоек.\n" +
        "• Не продувается, водонепроницаем, износостоек.\n" +
        "• Простота обслуживания.\n" +
        "• Прекрасно подходит для качественной печати.\n" +
        "• Всегда в наличии палатки стандартных цветов.\n" +
        "• Крыша может быть изготовлена из полиэстера или поливинилхлорида, по желанию заказчика.",
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
