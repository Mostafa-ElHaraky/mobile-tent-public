'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильный шатёр Slim Prof 4х8
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильный шатёр Slim Prof 4х8",
      text: "Технические характеристики и параметры модели ниже.",
    },
    {
      title:
        "Мобильный шатёр Slim Prof 4х8 от Мобайл-тент — идеальное решение для крупных мероприятий",
      text: `Выберите шатёр, который работает на ваш успех.
В условиях стремительного развития event-индустрии и высокой конкуренции важно иметь надежное и функциональное оборудование. Компания Мобайл-тент более 10 лет успешно занимается производством мобильных шатров и заслужила репутацию эксперта в сфере шатров для выездных мероприятий и корпоративов. Наш мобильный шатер — это не просто конструкция, а проверенное временем решение, которое помогает организовать пространство быстро и эффективно, сохраняя при этом презентабельный внешний вид и безопасность. Мы предлагаем продукцию, которая учитывает все современные требования к мобильности и комфорту, а также соответствует стандартам безопасности и качества.`,
    },
    {
      title: "Технические характеристики и преимущества Slim Prof 4х8",
      text: `Отличается легкостью и практичностью, что позволяет использовать его для самых разных целей — от выставок до крупных корпоративных мероприятий. Особенности конструкции:

• Легкий алюминиевый каркас обеспечивает простоту транспортировки и быструю сборку, что особенно важно для выездных мероприятий, где скорость и мобильность играют ключевую роль.

• Водонепроницаемая ПВХ ткань высокого класса защиты гарантирует надежность даже при сильном дожде и ветре, позволяя не беспокоиться о погодных условиях.

• Уникальная система креплений позволяет фиксировать шатёр на любом типе поверхности без ущерба для устойчивости, что делает его универсальным для городских площадок, парков и загородных территорий.

Наш мобильный шатер для корпоративов прошел многочисленные испытания в реальных условиях и успешно используется на мероприятиях по всей России, что подтверждается отзывами и рекомендациями клиентов.`,
    },
    {
      title: "Как шатер для крупных мероприятий изменит ваш бизнес",
      text: `Представьте, как изменится ваш бизнес, когда вы сможете за считанные минуты организовать комфортную и безопасную площадку для десятков или даже сотен гостей. Благодаря мобильному шатру вы создадите пространство, которое идеально подойдет для выставок, презентаций и выездных мероприятий. Легкий шатер для выездов позволит снизить затраты на логистику и монтаж, а также обеспечит комфорт участников в любую погоду.`,
    },
    {
      title: "Почему выбирают именно шатры от Мобайл-тент:",
      text: `• Проверенное качество и соответствие строгим стандартам безопасности, подтвержденное сертификатами и лицензиями.

• Гарантии на все модели и прозрачные условия сотрудничества, что исключает любые риски для заказчика.

• Более 500 довольных клиентов и сотни реализованных проектов — мы гордимся своим опытом и репутацией.

• Индивидуальный подход к каждому заказу, возможность адаптации шатра под конкретные требования мероприятия и задачи бизнеса.

Используя шатры от Мобайл-тент, вы получаете надежного партнера, который понимает важность безупречной организации каждого события.`,
    },
    {
      title: "Часто задаваемые вопросы",
      text: `Вопрос: Насколько быстро устанавливается шатер?
Ответ: Установка занимает не более 20 минут благодаря продуманной конструкции и легкому каркасу, что особенно важно для выездных мероприятий с ограниченным временем.

Вопрос: Можно ли использовать шатер для корпоративных мероприятий в любое время года?
Ответ: Да, материалы шатра обеспечивают защиту от дождя и солнца, а также выдерживают порывы ветра, что делает его универсальным для разных сезонов и погодных условий.`,
    },
    {
      title: "Сделайте шаг к успешному мероприятию с Мобайл-тент",
      text: `Выбирайте Мобайл-тент — лидера в производстве мобильных шатров для крупных мероприятий. Закажите шатёр Slim Prof сегодня и обеспечьте своему событию надежность, комфорт и профессиональный внешний вид! Мы гарантируем качество, скорость и индивидуальный подход к каждому клиенту.`,
    },
  ];

  // TECH SPECS — UPDATED for Slim Prof 4х8
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Slim Prof 4х8" },
    { label: "Площадь", value: "32 м²" },
    { label: "Размер", value: "4х8 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "385 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "30х30*1,2 мм" },
    { label: "Размер упаковки", value: "208 x 48 x 27 см" },
    { label: "Вес", value: "58 кг" },
    {
      label: "Свойства покрытия",
      value: `• Двойные швы.
• Стойкость к воздействию микроорганизмов (например, гниению).
• Огнестоек.
• Не продувается, водонепроницаем, износостоек.
• Простота обслуживания.
• Прекрасно подходит для качественной печати.
• Всегда в наличии палатки стандартных цветов.
• Крыша может быть изготовлена из полиэстера или поливинилхлорида, по желанию заказчика.`,
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
