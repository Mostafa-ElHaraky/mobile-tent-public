'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import { ReactElement } from 'react';

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal]">
            <span className="text-[#527dc5]">Арочные шатры</span>
            <span className="text-[#232c42]"> 10×3 м</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в MOBILE TENT
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочные шатры размером 10×3 метра представляют собой универсальные и стильные конструкции, которые могут быть использованы в самых разнообразных сферах. Они сочетают в себе прочность, эстетичность и функциональность, что делает их отличным выбором для временных и постоянных нужд.
            </p>

            <h3 className="font-semibold text-2xl">Особенности конструкции</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Каркас:</span> арочный из стальных или алюминиевых труб, устойчив к ветровым и снеговым нагрузкам.</li>
              <li><span className="font-semibold">Покрытие:</span> прочный ПВХ или другой водоотталкивающий материал, защищающий от осадков и УФ-лучей.</li>
              <li><span className="font-semibold">Мобильность:</span> легкий монтаж и демонтаж.</li>
              <li><span className="font-semibold">Эстетика:</span> современный внешний вид, подходящий для мероприятий любого уровня.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Быстрая установка — не требует спецнавыков и инструментов.</li>
              <li>Экономичность — дешевле капитальных строений аналогичного размера.</li>
              <li>Универсальность применения.</li>
              <li>Простота обслуживания и ухода.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Применение</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Мероприятия и торжества:</span> свадьбы, корпоративы, выставки, ярмарки.</li>
              <li><span className="font-semibold">Коммерческая деятельность:</span> торговые палатки, кафе, мобильные офисы.</li>
              <li><span className="font-semibold">Сельское хозяйство:</span> укрытия для техники, продукции или животных.</li>
              <li><span className="font-semibold">Спорт и развлечения:</span> тренировочные площадки, игровые зоны, летние лагеря.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать арочные шатры 10×3 м?</h3>
            <p>
              <span className="font-semibold">MOBILE TENT</span> — один из ведущих производителей шатров и тентовых конструкций в России. Мы предлагаем широкий ассортимент арочных шатров, подходящих для различных нужд и мероприятий.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества сотрудничества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Индивидуальный подход и гибкие решения.</li>
              <li>Сертифицированные и проверенные материалы.</li>
              <li>Быстрая установка и демонтаж силами команды.</li>
              <li>Конкурентные цены и выгодные условия сотрудничества.</li>
              <li>Возможность брендирования для рекламы.</li>
              <li>Качественное обслуживание и консультации специалистов.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 10×3 м
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm [font-family:'Raleway',Helvetica]"
            >
              Заказать в MOBILE TENT
            </Button>
          </div>

          <div className="w-full font-medium text-sm leading-5 [font-family:'Raleway',Helvetica] text-[#394355] text-justify space-y-4">
            <p>
              Арочные шатры 10×3 м — универсальные конструкции для мероприятий, бизнеса, сельского хозяйства и спорта.
            </p>

            <h3 className="font-semibold text-base">Особенности</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Каркас из стали или алюминия.</li>
              <li>Прочное ПВХ-покрытие.</li>
              <li>Легкий монтаж и демонтаж.</li>
              <li>Современный внешний вид.</li>
            </ul>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Быстрая установка.</li>
              <li>Экономичность.</li>
              <li>Универсальность.</li>
              <li>Простота обслуживания.</li>
            </ul>

            <h3 className="font-semibold text-base">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Свадьбы, выставки, ярмарки.</li>
              <li>Кафе, торговые точки, офисы.</li>
              <li>Сельхозтехника и продукция.</li>
              <li>Спорт и детские зоны.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Индивидуальный подход.</li>
              <li>Сертифицированные материалы.</li>
              <li>Быстрый монтаж.</li>
              <li>Конкурентные цены.</li>
              <li>Возможность брендирования.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};