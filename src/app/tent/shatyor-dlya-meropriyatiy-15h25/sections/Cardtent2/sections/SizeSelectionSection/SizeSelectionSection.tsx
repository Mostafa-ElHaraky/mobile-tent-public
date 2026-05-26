'use client';

import React, { ReactElement, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../../components/ui/tabs";

export const SizeSelectionSection = (): ReactElement => {
  // MARKETING / DESCRIPTION — UPDATED for Шатёр для мероприятий 15×25 м
  const descriptionBlocks: { title?: string; text: string }[] = [
    {
      title: "Шатёр для мероприятий 15×25 м",
      text: `Шатёр 15×25 для мероприятий — пространство, которое адаптируется под ваши цели.

От Mobile-tent — экспертного лидера в сфере мобильных конструкций.

Если вы организуете масштабное событие и ищете универсальное, эстетичное и быстро монтируемое решение — шатёр 15×25 для мероприятий от компании Mobile-tent станет стратегическим выбором. Пространство трансформируется под любые форматы: от деловых конференций до частных торжеств, от выставок до корпоративов.

С 2010 года мы реализовали более 1800 проектов по всей России. Нас выбирают за предсказуемо высокий результат. В штате Mobile-tent — инженеры, логисты, дизайнеры и монтажные бригады, которые действуют как единый механизм.`,
    },
    {
      title: "Универсальное решение для событий разного масштаба",
      text: `Оптимален для мероприятий от 150 до 300 человек. За счёт модульности легко расширяется или уменьшается, создавая чёткую логистику движения внутри, зонирование и комфортную посадку.

Примеры применения:
• Корпоративы и деловые встречи;
• Выставочные и демонстрационные павильоны;
• Свадьбы, юбилеи, вечеринки;
• Концерты, кинопоказы, шоурумы;
• Промо-акции и фуд-корты.

Mobile-tent — не просто поставщик. Мы берём на себя технический блок мероприятия, чтобы вы сосредоточились на главном: контенте и гостях.`,
    },
    {
      title: "Почему выбирают нас: опыт, гарантии, результат",
      text: `Мы выстраиваем доверие через прозрачность и практику. За 14 лет:
• Проведено более 1800 мероприятий;
• Работаем с брендами и ведущими ивент-агентствами;
• Все конструкции проходят сертификацию по ТР ТС;
• Реализуем монтаж в любых погодных условиях;
• Предоставляем официальную гарантию и техническую поддержку 24/7.

Mobile-tent — это не временное решение. Это устойчивая система, отвечающая за комфорт и безопасность каждого гостя.`,
    },
    {
      title: "Кейсы из практики",
      text: `• 2024 — корпоратив фармацевтической компании: шатёр 15×25, VIP-зона, отопление, LED-освещение, площадка для шоу-программы. Монтаж менее чем за сутки. Вместимость — 280 гостей. Высокие оценки руководства и гостей.

• Свадьба на побережье: прозрачные стены, деревянный настил, ночная подсветка, изолированная зона кейтеринга. Конструкция выдержала порывистый ветер и перепады температуры. Результат — безупречная реализация и восторженные отзывы.`,
    },
    {
      title: "Аренда или покупка: что выгоднее?",
      text: `Если вы — организатор мероприятий, владелец площадки или ивент-агентство, стоит рассмотреть покупку шатра 15×25 как бизнес-инвестицию. Это позволит:
• Снизить затраты при регулярном использовании;
• Персонализировать шатёр под бренд;
• Самостоятельно управлять логистикой;
• Быстро развернуть площадку в любом регионе.

Mobile-tent поставляет шатры с комплектом документации, схемами сборки, обучением команды и сопровождением по гарантии.`,
    },
    {
      title: "Особенности конструкции и комплектации",
      text: `Что входит в стандартное предложение:
• Каркас из алюминия промышленного стандарта;
• Надёжный ПВХ-тент с защитой от УФ и осадков;
• Настил или платформа (по запросу);
• Отопление, освещение, кондиционирование;
• Декор, мебель, брендирование.

Плюс — инженерный выезд, проектирование расстановки зон, адаптация под ландшафт.`,
    },
    {
      title: "Шатёр для выставки: имидж имеет значение",
      text: `Выставочное пространство требует чёткого визуального кода: чистые линии, высота потолка, правильная организация света и коммуникаций. Конструкция подходит для:
• Автомобильных и строительных выставок;
• Сельскохозяйственных и промышленных форумов;
• Арт-проектов и галерей под открытым небом.`,
    },
    {
      title: "Конструкция и материалы",
      text: `• Не требует специального фундамента, устанавливается на любой земляной поверхности.
• Монтируется и демонтируется без применения спецтехники в минимальный срок, без потери качества, любое количество раз.
• Возможность увеличения площади путём соединения нескольких конструкций.
• Тентовое полотно и стены — ПВХ DICKSON (Франция) с системой LoWick, класс пожарной безопасности М2, Г1.
• Тентовое покрытие — сертифицированное ПВХ-полотно с добавками, препятствующими горению (DIN 4102 B1), M2, 0,3 кН/м²; устойчиво к гниению.
• Все элементы каркаса — анодированный алюминий (сплав 6063 DIN 573), сертификат QUALANOD.
• Крепёжные элементы — оцинкованная сталь DIN 50976.
• Особенности монтажа: обязательное крепление конструкции к поверхности или утяжеление бетонными блоками.`,
    },
    {
      title: "FAQ — отвечаем на частые вопросы",
      text: `Сколько времени занимает установка?
• Монтаж стандартного шатра занимает от 8 до 14 часов в зависимости от комплектации и погодных условий.

Можно ли использовать шатёр зимой?
• Да. Конструкции устойчивы к снеговой и ветровой нагрузке, возможно подключение обогрева и утепление стен.`,
    },
    {
      title: "Сделайте первый шаг к идеальному мероприятию",
      text: `Вы ищете решение, которое будет работать без сбоев, выглядеть безупречно и адаптироваться под любые задачи? Мы уже готовы приступить. Mobile-tent — это не просто аренда шатров, это надёжный технический партнёр, который берёт на себя всё.

Оставьте заявку сегодня — получите предварительную смету и 3D-схему бесплатно.
Работаете в B2B? У нас есть специальные условия для агентств и корпоративных клиентов.
Уточните географию доставки, и мы рассчитаем логистику индивидуально.

Mobile-tent — решения, которые становятся стандартом в вашей отрасли.`,
    },
  ];

  // TECH SPECS — UPDATED for 15×25
  const specs: { label: string; value: string }[] = [
    { label: "Форма", value: "Прямоугольная" },
    { label: "Площадь", value: "375 м²" },
    { label: "Длина", value: "25 м" },
    { label: "Ширина", value: "15 м" },
    { label: "Высота стены (опоры)", value: "2,5 / 3 / 3,5 / 4 м" },
    { label: "Высота в коньке", value: "макс. 7,5 м" },
    { label: "Ветровая нагрузка", value: "30 м/сек" },
    { label: "Вес конструкции", value: "2062 кг" },
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
