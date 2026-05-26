'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильные шатры-трансформеры Prof 4х8
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильные шатры-трансформеры Prof 4х8 от Мобайл-тент — идеальное решение для масштабных мероприятий",
      text: `Компания Мобайл-тент — признанный эксперт на рынке мобильных конструкций с опытом более 12 лет. Мы специализируемся на производстве и поставке мобильных шатров 4x8, которые незаменимы для организаций, проводящих масштабные и массовые мероприятия. Наши шатры — это не просто тенты, а продуманные конструкции, способные быстро развернуться и обеспечить надежную защиту от погодных условий.

Мы уже помогли более 700 клиентам по всей России организовать пространство для выставок, фестивалей и больших мероприятий, гарантируя качество, удобство и безопасность.`,
    },
    {
      title: "Почему стоит выбрать шатер трансформер от Мобайл-тент?",
      text: `• Прочная, легкая и устойчивая конструкция — шатер трансформер 4 x 8 изготовлен из алюминиевого каркаса с усиленными элементами, что обеспечивает стабильность при ветре и осадках.
• Молниеносный монтаж — установка занимает не более 15 минут, что критично для организации больших событий.
• Многофункциональность — шатёр для выставок и презентаций легко адаптируется под разные задачи: стенки снимаются или крепятся, пространство трансформируется.
• Проверенные материалы с водоотталкивающим покрытием и защитой от ультрафиолета позволяют использовать шатер круглый год.
• Все изделия сопровождаются официальными сертификатами, лицензиями и имеют гарантийное обслуживание от Мобайл-тент.`,
    },
    {
      title: "Шатры для больших мероприятий: стабильность и безопасность",
      text: `Шатры от Мобайл-тент обеспечивают стабильность и безопасность даже в сложных погодных условиях, что особенно важно для крупных мероприятий на открытом воздухе. Благодаря инновационной системе трансформации шатёр адаптируется под любые задачи — от выставочных стендов до зоны отдыха для гостей. Использование качественных материалов и современного производства гарантирует долговечность и минимальные затраты на обслуживание.`,
    },
    {
      title: "Преимущества использования мобильного шатра на больших мероприятиях",
      text: `Для организаторов больших событий важны не только надежность, но и скорость развертывания, а также привлекательный внешний вид. Наши шатры обеспечивают:
• Просторное и комфортное пространство для посетителей и экспонентов.
• Возможность быстро изменить конфигурацию шатра под различные форматы.
• Значительное повышение имиджа мероприятия благодаря стильному дизайну.
• Экономию бюджета на аренду стационарных площадок и монтаж.

Пример из практики: организаторы фестиваля в Санкт-Петербурге выбрали шатёр для больших мероприятий от Мобайл-тент, что позволило им оперативно развернуть павильон для 150 гостей и обеспечить комфорт даже при непредсказуемой погоде.`,
    },
    {
      title: "Как заказать шатер от Мобайл-тент?",
      text: `Свяжитесь с менеджерами Мобайл-тент через сайт или по телефону, чтобы получить профессиональную консультацию и подобрать шатер, идеально подходящий для ваших задач. Мы предлагаем индивидуальный подход, учитывая особенности вашего региона и формата мероприятий.`,
    },
    {
      title: "FAQ — ответы на важные вопросы",
      text: `Вопрос: Каковы габариты и вес мобильного шатра 4x8?
Ответ: Шатер имеет оптимальные размеры для вместительности и при этом легкий — общий вес не превышает 50 кг, что облегчает транспортировку и монтаж.

Вопрос: Можно ли брендировать шатёр для выставок?
Ответ: Да, мы предлагаем услуги по нанесению логотипов и брендированной печати, что позволяет выделиться на любом мероприятии.`,
    },
    {
      title: "Ваш надежный партнер",
      text: `Мобайл-тент — ваш надежный партнер в организации массовых и выставочных мероприятий! Выбирайте мобильные шатры-трансформеры Prof 4х8 и создавайте комфортные пространства быстро и эффективно. Закажите консультацию прямо сейчас и получите выгодные условия сотрудничества.`,
    },
  ];

  // TECH SPECS — UPDATED for Prof 4х8
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Prof 4х8" },
    { label: "Тип", value: "Мобильный шатёр-трансформер (складной)" },
    { label: "Площадь", value: "32 м²" },
    { label: "Размер", value: "4х8 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "385 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "40х40*2 мм" },
    { label: "Размер упаковки", value: "208 x 48 x 27 см" },
    { label: "Вес", value: "58 кг" },
    {
      label: "Свойства покрытия",
      value:
        "• Двойные швы.\n• Стойкость к воздействию микроорганизмов (например, гниению).\n• Огнестоек.\n• Простота обслуживания.\n• Прекрасно подходит для качественной печати.\n• Всегда в наличии палатки стандартных цветов.\n• Крыша может быть изготовлена из полиэстера или поливинилхлорида, по желанию заказчика.",
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
