'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильный шатёр Hard Prof 4х6
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильный шатёр Hard Prof 4х6 — оптимальное решение для крупных мероприятий",
      text:
        "Если вы ищете шатёр для больших мероприятий, способный выдержать любые погодные условия и при этом выглядеть презентабельно — обратите внимание на мобильный шатёр от компании Мобайл-тент. Это решение, проверенное временем и опытом, идеально подходит для выставок, корпоративов, фестивалей и уличных акций.",
    },
    {
      title: "Почему выбирают Мобайл-тент?",
      text:
        "Компания Мобайл-тент успешно работает на рынке более 12 лет, предоставляя качественные шатры с усиленной конструкцией. За это время мы обслужили свыше 900 клиентов из Москвы, Санкт-Петербурга и других регионов России, подтвердив статус эксперта в области мобильных павильонов.",
    },
    {
      title: "Наши проекты включают:",
      text:
        "• Участие в организации масштабного городского фестиваля «Лето в парке» с использованием шатров с ПВХ тканью, обеспечив надежную защиту от дождя и ветра.\n\n• Оборудование площадки для крупного автосалона в Подмосковье, где шатёр Hard 4x6 стал центром презентаций и переговоров.\n\nКаждый шатёр для аренды из нашего парка проходит строгий контроль качества и сертифицирован согласно ГОСТам, что гарантирует безопасность и долговечность.\n\nКомпания Мобайл-тент регулярно обновляет ассортимент, внедряя инновационные материалы и технологии, чтобы обеспечить максимальную надежность и удобство эксплуатации. Мы понимаем, что каждое мероприятие уникально, поэтому предлагаем индивидуальный подход и гибкие условия сотрудничества. Выбирая шатёр Hard 4x6 от Мобайл-тент, вы инвестируете в качество, проверенное временем и тысячами довольных клиентов.",
    },
    {
      title: "Преимущества мобильного шатра",
      text:
        "• Усиленная конструкция из прочной стали позволяет эксплуатировать шатры в любых условиях — от солнечной жары до сильного ветра.\n\n• Обшивка из износостойкой ПВХ ткани с водо- и ультрафиолетовой защитой сохраняет внешний вид даже после многолетнего использования.\n\n• Быстрый и простой монтаж (от 1 часа) с возможностью частичной или полной комплектации аксессуарами — освещение, окна, вентиляция.\n\n• Идеально подходит для больших корпоративов и мероприятий с высоким потоком гостей благодаря оптимальному размеру 4х6 метров.\n\n• Возможность брендирования под ваш корпоративный стиль — нанесение логотипов и фирменных цветов.\n\nКомпания Мобайл-тент выделяется среди конкурентов благодаря комплексному сервису: мы не просто продаём или сдаём шатры в аренду, а предлагаем полноценное сопровождение от подбора оборудования до сервисного обслуживания на месте.",
    },
    {
      title: "Как заказать шатер у Мобайл-тент?",
      text:
        "• Позвоните нашим специалистам или оставьте заявку на сайте.\n\n• Получите бесплатную консультацию и подбор оптимальной модели под ваш проект.\n\n• Заключите официальный договор — мы гарантируем прозрачные условия и фиксированную цену.\n\n• Определитесь со сроками монтажа — мы оперативно доставим шатёр в любой регион России.\n\n• Наслаждайтесь результатом: надежная конструкция, профессиональный монтаж и круглосуточная поддержка.",
    },
    {
      title: "FAQ — ответы на популярные вопросы",
      text:
        "Вопрос: Можно ли арендовать шатёр на один день?\nОтвет: Да, компания Мобайл-тент предлагает гибкие условия аренды от одного дня до нескольких месяцев.\n\nВопрос: Шатры выдерживают сильный ветер?\nОтвет: Безусловно, конструкция разработана с учетом повышенных ветровых нагрузок и прошла испытания в реальных условиях.\n\nВопрос: Какие документы подтверждают качество?\nОтвет: Все шатры сертифицированы, есть лицензии и гарантийные обязательства, что подтверждает надежность оборудования.",
    },
    {
      title: "Доверяйте профессионалам — выбирайте Мобайл-тент",
      text:
        "Представьте, как ваше мероприятие проходит без технических сбоев, а гости чувствуют себя комфортно под надежным навесом. С мобильным шатром Hard Prof 4х6 вы получаете не просто навес — вы получаете уверенность и стабильность.\n\nЗвоните прямо сейчас, и специалисты Мобайл-тент подберут решение, которое идеально впишется в ваши задачи и бюджет. Сделайте первый шаг к успешному событию уже сегодня!",
    },
  ];

  // TECH SPECS — UPDATED for Hard Prof 4х6
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Hard Prof 4х6" },
    { label: "Тип", value: "Мобильный шатёр (складной)" },
    { label: "Площадь", value: "24 м²" },
    { label: "Размер", value: "6х4 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "385 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "50 Hex *2 мм" },
    { label: "Размер упаковки", value: "208 x 40 x 32 см" },
    { label: "Вес", value: "47 кг" },
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
