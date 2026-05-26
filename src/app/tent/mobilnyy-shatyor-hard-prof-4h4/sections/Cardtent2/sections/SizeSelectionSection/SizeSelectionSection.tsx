'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING CONTENT — UPDATED for Мобильный шатёр Hard Prof 4х4
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Мобильный шатёр Hard Prof 4х4",
      text:
        "Мобильный шатер Hard Prof 4x4 — пространство, которое работает на ваш успех.",
    },
    {
      title: "Когда событие должно произвести впечатление",
      text:
        "В мире бизнеса и организации мероприятий нет второго шанса создать первое впечатление. Каждая деталь — от оформления до комфорта гостей — формирует мнение о вас и вашем бренде. Мобайл-тент предлагает решение, которое уже оценили более 500 корпоративных клиентов, государственных структур и десятки ивент-агентств по всей России — мобильный шатер Hard Prof 4x4. Это не просто конструкция, а гибкий инструмент, который подстраивается под формат вашего события: от камерной презентации до масштабного фестиваля с тысячами участников.",
    },
    {
      title: "Опыт и компетенции, которым доверяют",
      text:
        "Мы работаем на рынке шатров и мобильных конструкций более 12 лет. За это время реализовали проекты в 36 регионах страны. Устанавливали временные павильоны для городских праздников, концертные площадки, выставочные зоны и шатры для частных и корпоративных мероприятий.",
    },
    {
      title: "Наши шатры — это:",
      text:
        "• Усиленные алюминиевые рамы, рассчитанные на ветер до 20 м/с и снеговую нагрузку.\n\n• Профессиональный ПВХ-тент с защитой от ультрафиолета и влаги.\n\n• Быстрый монтаж за 30–60 минут без привлечения спецтехники.\n\n• Возможность масштабирования конструкции до нужного формата.",
    },
    {
      title: "Кейс из практики",
      text:
        "Например, в прошлом году мы устанавливали шатер для крупных мероприятий на набережной Казани. Несмотря на шквалистый ветер и дождь, конструкция отработала три дня без единой поломки. Гости чувствовали себя комфортно, а организаторы получили десятки благодарных отзывов. Именно такие кейсы укрепляют репутацию Мобайл-тент как надёжного партнёра, который берет ответственность за результат.",
    },
    {
      title: "Зачем выбирать именно нас",
      text:
        "• Гибкость формата — можно использовать как шатёр для аренды, так и для постоянного размещения.\n\n• Презентабельный внешний вид — белоснежное полотно и аккуратные швы идеально подходят для деловых встреч, свадеб, VIP-мероприятий.\n\n• Расширенные опции — остекление, брендирование, утепление, декоративное освещение.\n\n• Безопасность и качество — все конструкции сертифицированы, есть лицензии и страховка ответственности.\n\n• Опыт в сложных условиях — если вам нужен шатер с усиленной конструкцией для экстремального климата, мы обеспечим надежность и адаптацию под местность.\n\nМы работаем как с крупным бизнесом, так и с небольшими компаниями. Для кого-то важно произвести вау-эффект, для кого-то — обеспечить функциональность при минимальных затратах. В любом случае мы предложим оптимальное решение.",
    },
    {
      title: "Действие: сделайте шаг к безупречному событию",
      text:
        "Закажите у нас шатёр для корпоративов — и вы получите:\n\n• Полную организацию монтажа и демонтажа.\n\n• Персонального менеджера для решения любых вопросов.\n\n• Гарантию на оборудование и прозрачный договор.\n\n• Поддержку 24/7 на время эксплуатации шатра.\n\nМобайл-тент — это не просто прокат конструкций, а команда, которая берёт на себя заботу о вашем мероприятии от первой консультации до финального отчёта. Мы всегда рядом, чтобы ваше событие прошло идеально.",
    },
    {
      title: "FAQ",
      text:
        "Вопрос: Можно ли установить шатер зимой?\nОтвет: Да. Конструкции выдерживают снеговую нагрузку, а мы предложим утепленные стенки, обогреватели и двойное остекление.\n\nВопрос: Что делать, если мероприятие переносится?\nОтвет: Мы гибко переносим даты и перераспределяем оборудование без штрафов, если предупреждаете за 48 часов.",
    },
    {
      title: "Ваше событие заслуживает надёжного партнёра",
      text:
        "Представьте, как спокойно вы будете готовиться к мероприятию, зная, что техническая часть в надёжных руках. Гости будут говорить о вашем событии, а не о накладках с организацией.\nПозвоните нам прямо сейчас или оставьте заявку на сайте — и уже сегодня мы подберем оптимальное решение, подходящее именно вам.",
    },
  ];

  // TECH SPECS — UPDATED for Hard Prof 4х4
  const specs: { label: string; value: string }[] = [
    { label: "Серия/Модель", value: "Hard Prof 4х4" },
    { label: "Тип", value: "Мобильный шатёр (складной)" },
    { label: "Площадь", value: "16 м²" },
    { label: "Размер", value: "4х4 м" },
    { label: "Высота стенки", value: "2.15 м" },
    { label: "Высота в коньке", value: "385 см" },
    { label: "Профиль", value: "анодированный алюминий" },
    { label: "Размер профиля", value: "50 Hex *2 мм" },
    { label: "Размер упаковки", value: "208 x 32 x 32 см" },
    { label: "Вес", value: "35 кг" },
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
