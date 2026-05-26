'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильный шатёр Hard Prof 4х8
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильный шатёр Hard Prof 4х8 от Мобайл-тент — ваш надежный партнер для крупных мероприятий",
      text:
        "Компания Мобайл-тент — эксперт с более чем 12-летним опытом в производстве мобильных шатров с усиленной конструкцией. Мы предлагаем профессиональное решение — мобильный шатер, специально разработанный для крупных мероприятий, аренды и выездных событий. Этот шатёр с ПВХ тканью сочетает в себе максимальную прочность и удобство использования, что выгодно отличает его от конкурентов и делает оптимальным выбором для вашего бизнеса.",
    },
    {
      title: "Особенности и преимущества",
      text:
        "Шатер от Мобайл-тент — это не просто навес, а технологически продуманная конструкция, способная выдерживать сильные ветры и осадки. Каркас из усиленного алюминия обеспечивает устойчивость и безопасность, а качественная ПВХ ткань гарантирует защиту от ультрафиолета и влаги. Такие характеристики особенно важны для мероприятий на открытом воздухе, где требуется надежная защита и комфорт.\n\n• Легкий, но прочный каркас обеспечивает простую транспортировку и быструю установку.\n\n• ПВХ ткань с двойным швом повышает долговечность и износостойкость.\n\n• Универсальность конструкции позволяет использовать шатер для аренды, корпоративных событий, выставок и презентаций.\n\nМы гордимся тем, что более 600 клиентов выбрали Мобайл-тент для организации своих событий по всей России.",
    },
    {
      title: "Почему именно шатёр Hard Prof 4х8?",
      text:
        "Шатры от Мобайл-тент отличаются усиленной конструкцией и высококачественной ПВХ тканью, что обеспечивает надежную защиту и долговечность. Их легко транспортировать и быстро устанавливать, что особенно важно для аренды и выездных мероприятий. Выбирая мобильный шатер, вы получаете комфортное и безопасное пространство для любых крупных событий.",
    },
    {
      title: "Как шатер для крупных мероприятий помогает вашему бизнесу?",
      text:
        "Представьте, как ваш бизнес выходит на новый уровень благодаря надежному пространству для гостей и клиентов. Мобильный шатер создаёт комфортную и безопасную зону для любых масштабных мероприятий — от фестивалей до выставок. Быстрая сборка и прочность конструкции позволяют сосредоточиться на главном — развитии бизнеса, а не решении технических проблем.",
    },
    {
      title: "Преимущества шатра с усиленной конструкцией для аренды и выездов",
      text:
        "• Гарантированная безопасность даже при неблагоприятных погодных условиях.\n\n• Привлекательный и презентабельный внешний вид повышает доверие клиентов.\n\n• Возможность брендирования ткани для усиления маркетингового эффекта.\n\n• Значительная экономия времени и средств на логистику и монтаж.",
    },
    {
      title: "Почему выбирают Мобайл-тент?",
      text:
        "Компания Мобайл-тент — лидер рынка мобильных шатров с усиленной конструкцией и признанный поставщик в России. Мы не только производим надежные шатры, но и предоставляем полный сервис: консультации, гарантийное обслуживание и поддержку на всех этапах сотрудничества. Наши специалисты помогут подобрать оптимальное решение с учётом региональных особенностей и специфики вашего бизнеса.",
    },
    {
      title: "Часто задаваемые вопросы",
      text:
        "Вопрос: Насколько быстро можно собрать шатёр?\nОтвет: Благодаря продуманной конструкции и легкому каркасу сборка занимает не более 15 минут и не требует специального инструмента.\n\nВопрос: Можно ли использовать шатер с ПВХ тканью круглый год?\nОтвет: Да, материалы устойчивы к ультрафиолету и влаге, что позволяет эксплуатировать шатёр в любых погодных условиях.",
    },
    {
      title: "Мобайл-тент — надежный партнер вашего бизнеса",
      text:
        "Закажите шатер уже сегодня и получите индивидуальное предложение, которое позволит быстро и эффективно организовать любое крупное мероприятие. Свяжитесь с нами, чтобы получить консультацию и сделать заказ с гарантией качества и сервиса.",
    },
  ];

  // TECH SPECS — UPDATED for Hard Prof 4х8
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Hard Prof 4х8" },
    { label: "Тип", value: "Мобильный шатёр (складной)" },
    { label: "Площадь", value: "32 м²" },
    { label: "Размер", value: "8х4 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "385 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "50 Hex *2 мм" },
    { label: "Размер упаковки", value: "208 x 53 x 32 см" },
    { label: "Вес", value: "60 кг" },
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
