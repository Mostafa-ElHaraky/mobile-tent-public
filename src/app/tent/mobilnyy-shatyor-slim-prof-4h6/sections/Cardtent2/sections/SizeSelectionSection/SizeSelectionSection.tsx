'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильный шатёр Slim Prof 4х6
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильный шатёр Slim Prof 4х6",
      text: "Технические характеристики и параметры модели ниже.",
    },
    {
      title:
        "Мобильный шатер Slim Prof 4х6 от Мобайл-тент — оптимальное решение для бизнеса на выездных мероприятиях",
      text:
        "Почему это выбор профессионалов?\n" +
        "Компания Мобайл-тент, лидер на рынке мобильных шатров с более чем 10-летним опытом, предлагает инновационное решение — мобильный шатёр Slim Prof 4х6. Этот легкий шатер — уникальный продукт, сочетающий прочность и мобильность. Мы изготавливаем шатры для выездных мероприятий, которые уже завоевали доверие сотен клиентов по всей России благодаря своему качеству, надежности и удобству эксплуатации.",
    },
    {
      title: "Что отличает от других?",
      text:
        "• Алюминиевый каркас — легкий, но при этом максимально прочный. Такой каркас выдерживает сильные ветры и осадки, сохраняя целостность конструкции.\n\n" +
        "• Мобильность и компактность — шатер легко транспортировать даже в небольшом автомобиле, а сборка и разборка не займут больше 10 минут.\n\n" +
        "• Используются только качественные, устойчивые к ультрафиолету и влаге материалы, которые гарантируют длительный срок службы.\n\n" +
        "• Подтвержденное качество — мы имеем все необходимые сертификаты и лицензии, что повышает уровень доверия наших клиентов.\n\n" +
        "• Прозрачные условия сотрудничества — гарантия и сервисное обслуживание включены в стоимость.",
    },
    {
      title: "Для кого предназначен мобильный шатер для бизнеса?",
      text:
        "• Выездные ярмарки и торговые точки, где важна оперативность и презентабельность.\n\n" +
        "• Корпоративные ивенты и презентации, требующие быстрой установки и мобильности.\n\n" +
        "• Рекламные акции и промо-мероприятия, где шатер с алюминиевым каркасом обеспечивает узнаваемость бренда и удобство для посетителей.\n\n" +
        "• Любые выездные мероприятия, где важна легкость, надежность и эстетика.\n\n" +
        "Это решение для тех, кто ценит время и хочет сделать свой бизнес мобильным и эффективным.",
    },
    {
      title: "Как мобильный шатер помогает бизнесу?",
      text:
        "Представьте, что ваш торговый или промо-объект мгновенно появляется там, где вам нужно — будь то фестиваль, уличная ярмарка или корпоративное мероприятие. Мобильный шатер для бизнеса от Мобайл-тент создает удобную и привлекательную зону для клиентов, защищая от солнца и дождя.",
    },
    {
      title: "Ключевые выгоды использования",
      text:
        "• Экономия времени: быстрая сборка и разборка без специальных навыков и инструментов.\n\n" +
        "• Минимизация затрат на логистику: легкий шатер 4x6 сокращает расходы на транспортировку.\n\n" +
        "• Увеличение продаж: комфорт и презентабельность привлекают больше посетителей и повышают конверсию.\n\n" +
        "• Универсальность: шатёр подходит для использования в любых климатических условиях, от жаркого лета до прохладной осени.",
    },
    {
      title: "FAQ",
      text:
        "Вопрос: Можно ли использовать шатер в зимнее время?\n" +
        "Ответ: Да, шатёр с алюминиевым каркасом от Мобайл-тент предназначен для круглогодичного использования. Он выдерживает снег и ветер, если правильно закреплен.\n\n" +
        "Вопрос: Какие есть варианты комплектации шатра?\n" +
        "Ответ: Мы предлагаем несколько вариантов комплектов, включая стенки, брендированные тенты и дополнительные аксессуары, которые можно подобрать под задачи вашего бизнеса.",
    },
    {
      title: "Почему стоит выбрать именно Мобайл-тент?",
      text:
        "• Мы — эксперты с большим опытом производства и поставок мобильных шатров.\n\n" +
        "• Предлагаем индивидуальный подход и консультируем на всех этапах покупки.\n\n" +
        "• Обеспечиваем гарантию и сервисное обслуживание.\n\n" +
        "• Реализуем шатры с учетом особенностей регионального рынка, включая логистику и поддержку.\n\n" +
        "• Наша продукция — это сочетание современных технологий и высокого качества, подтвержденное отзывами и сертификатами.",
    },
    {
      title:
        "Мобайл-тент — ваш надежный партнер в создании мобильных зон комфорта!",
      text:
        "Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию и оформить заказ с выгодными условиями!",
    },
  ];

  // TECH SPECS — UPDATED for Slim Prof 4х6
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Slim Prof 4х6" },
    { label: "Площадь", value: "24 м²" },
    { label: "Размер", value: "6х4 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "385 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "30х30*1,2 мм" },
    { label: "Размер упаковки", value: "208 x 38 x 27 см" },
    { label: "Вес", value: "44 кг" },
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
