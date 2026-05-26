'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильный шатёр Slim Prof 3х6
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильный шатёр Slim Prof 3х6",
      text: "Технические характеристики и параметры модели ниже.",
    },
    {
      title: "Мобильные шатры от Мобайл-тент: Качество, Надежность, Простота",
      text:
        "Компания Мобайл-тент — лидер на рынке мобильных конструкций, предлагает вам широкий выбор шатров для любых нужд. Независимо от того, нужен ли вам шатёр для дачи, для выездных работ или для крупных мероприятий, мы обеспечим вас решениями, которые гарантируют комфорт и защиту от непогоды. Все наши шатры проходят тщательную проверку качества и соответствуют самым высоким стандартам.",
    },
    {
      title: "Шатёр Slim 3x6: Идеальное решение для вашего мероприятия",
      text:
        "Шатёр Slim 3x6 от Мобайл-тент — это компактное и лёгкое решение для всех, кто ищет мобильность и удобство. Он идеально подходит для небольших мероприятий, выездных работ или дач. Благодаря алюминиевому каркасу, шатёр быстро устанавливается и легко переносится. Этот лёгкий шатёр с алюминиевым каркасом обеспечит вам защиту от солнца и дождя, не занимая много места при транспортировке.",
    },
    {
      title: "Почему выбирают шатры от Мобайл-тент?",
      text:
        "Надежность и долговечность. Все наши мобильные шатры для мероприятий изготовлены из прочных и стойких материалов, которые обеспечивают долговечность и устойчивость к любым погодным условиям. Шатёр для выездных работ или дачи прослужит вам много лет, оставаясь в идеальном состоянии.\n\nГибкость в использовании. Шатры от Мобайл-тент подходят не только для мероприятий, но и для других целей. Например, шатёр для дачи может служить отличным укрытием для отдыха на природе или временным хранилищем для инструментов. Мобильный шатёр для мероприятий быстро собирается и разбирается, что делает его удобным для любых ситуаций.\n\nЛегкость в установке. Наши шатры — это лёгкие и компактные конструкции, которые можно установить за несколько минут. Даже шатёр Slim 3x6 можно собрать без особых усилий, что делает его отличным выбором для личных и деловых мероприятий.\n\nИдеальный вариант для дачи. Если вы ищете шатёр для дачи, Мобайл-тент предложит вам отличные модели, которые легко устанавливаются и служат отличным укрытием от непогоды. Компактные и лёгкие шатры обеспечат вам комфорт, даже если на вашем участке нет много места.\n\nУдобство и мобильность. Все шатры можно легко переносить, что делает их идеальными для выездных работ и сезонного использования на даче. Мы предоставляем шатры, которые идеально подойдут для вашего бизнеса или дачи.",
    },
    {
      title: "Преимущества шатров от Мобайл-тент",
      text:
        "Качество и проверенные материалы. Мы используем только лучшие материалы, что позволяет нам гарантировать долговечность и надежность наших шатров. Все конструкции проходят тестирование на устойчивость к внешним воздействиям.\n\nУдобство транспортировки. Легкие шатры, такие как шатёр Slim 3x6 или другие модели с алюминиевым каркасом, удобно перевозить и хранить. Эти шатры идеально подходят для людей, которым важна мобильность и практичность.\n\nЭстетика и функциональность. Мы предлагаем не только функциональные, но и эстетически привлекательные шатры, которые могут стать настоящим украшением вашего мероприятия или дачного участка.\n\nГарантия качества. На все наши шатры предоставляется гарантия. Мы уверены в их качестве, и если возникнут любые вопросы, мы всегда готовы предоставить помощь и решить их.",
    },
    {
      title: "Часто задаваемые вопросы (FAQ)",
      text:
        "Как выбрать подходящий шатёр для мероприятия?\nПри выборе шатра важно учитывать количество участников, размер территории и особенности мероприятия. Например, если вам нужно укрытие для небольшого события, идеален шатёр Slim 3x6. Для более масштабных мероприятий можно рассмотреть шатры большего размера.\n\nКакие преимущества мобильных шатров для выездных работ?\nМобильные шатры обеспечивают защиту от дождя и солнца, при этом легко устанавливаются и транспортируются. Они обеспечивают комфортное пространство для работы и отдыха в любых условиях, будь то строительные объекты или временные выставки.\n\nМогу ли я использовать шатёр на даче?\nДа, наши шатры идеально подходят для дачи. Компактные и лёгкие конструкции удобно устанавливаются и обеспечивают необходимую защиту от погодных условий. Например, лёгкий шатёр с алюминиевым каркасом будет идеален для вашего дачного участка.",
    },
    {
      title: "Заключение",
      text:
        "Компания Мобайл-тент уже много лет работает на рынке мобильных конструкций и шатров. Мы предлагаем широкий выбор продукции для самых различных нужд: от шатров для мероприятий до шатров для дачи и выездных работ. Мы гордимся своей репутацией, обеспечиваем качество и гарантию на каждый продукт.\n\nНе упустите возможность приобрести качественный шатёр от Мобайл-тент! Выберите подходящую модель и сделайте ваш проект ещё более успешным.",
    },
  ];

  // TECH SPECS — UPDATED for Slim Prof 3х6
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Slim Prof 3х6" },
    { label: "Площадь", value: "18 м²" },
    { label: "Размер", value: "3х6 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "330 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "30х30*1,2 мм" },
    { label: "Размер упаковки", value: "163 x 48 x 27 см" },
    { label: "Вес", value: "48 кг" },
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
