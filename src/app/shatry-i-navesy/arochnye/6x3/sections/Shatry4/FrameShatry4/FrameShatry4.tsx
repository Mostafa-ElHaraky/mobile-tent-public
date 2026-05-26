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
            <span className="text-[#232c42]"> 6×3 м</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в MOBILE TENT
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочные шатры размером 6×3 метра представляют собой компактные и удобные конструкции, идеально подходящие для проведения небольших мероприятий и временных коммерческих объектов. Вот почему они пользуются широкой популярностью как у компаний, так и у частных лиц.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Компактность и удобство:</span> оптимальны для небольших участков земли, обеспечивая достаточно пространства для мероприятий или коммерческих задач.</li>
              <li><span className="font-semibold">Эстетичный дизайн:</span> стильный и современный вид добавляет привлекательности любому событию или бизнес-объекту.</li>
              <li><span className="font-semibold">Прочность и надежность:</span> металлический каркас и долговечное покрытие выдерживают разные погодные условия и служат долго.</li>
              <li><span className="font-semibold">Универсальность:</span> подходят для выставок, ярмарок, торговых точек, временных складов или зон отдыха.</li>
              <li><span className="font-semibold">Простота монтажа и демонтажа:</span> установка и разборка занимают минимум времени и усилий.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Области применения:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Малые мероприятия:</span> вечеринки, корпоративы, детские праздники.</li>
              <li><span className="font-semibold">Торговля:</span> временные торговые точки на рынках, ярмарках, фестивалях.</li>
              <li><span className="font-semibold">Временные склады:</span> хранение товаров и оборудования при стройке или организации мероприятий.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать?</h3>
            <p>
              Арочные конструкции 6×3 м вы можете заказать у нас в компании <span className="font-semibold">MOBILE TENT</span>.
            </p>

            <h3 className="font-semibold text-2xl">Наши преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Опыт и надежность — многолетняя работа и отличная репутация.</li>
              <li>Индивидуальный подход к каждому проекту.</li>
              <li>Высокое качество благодаря современным технологиям и материалам.</li>
              <li>Быстрая доставка и профессиональный монтаж.</li>
              <li>Гибкие условия сотрудничества и конкурентные цены.</li>
              <li>Широкий ассортимент моделей и конфигураций.</li>
              <li>Гарантия и постпродажная поддержка.</li>
              <li>Профессиональные консультации специалистов.</li>
              <li>Инновационные решения с учётом трендов.</li>
              <li>Множество довольных клиентов по всей России.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 6×3 м
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
              Арочные шатры 6×3 м — компактные и удобные конструкции для небольших мероприятий и временных коммерческих объектов.
            </p>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Компактность и удобство.</li>
              <li>Стильный дизайн.</li>
              <li>Прочность и надежность.</li>
              <li>Универсальность применения.</li>
              <li>Быстрый монтаж и демонтаж.</li>
            </ul>

            <h3 className="font-semibold text-base">Области применения</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Небольшие мероприятия.</li>
              <li>Торговые точки и ярмарки.</li>
              <li>Временные склады и павильоны.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Опыт и репутация.</li>
              <li>Индивидуальный подход.</li>
              <li>Высокое качество материалов.</li>
              <li>Быстрая доставка и монтаж.</li>
              <li>Гарантия и поддержка.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};