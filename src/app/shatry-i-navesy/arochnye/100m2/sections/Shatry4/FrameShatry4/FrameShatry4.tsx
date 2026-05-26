'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal]">
            <span className="text-[#527dc5]">Арочные ангары</span>
            <span className="text-[#232c42]"> 100 м²</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в Mobile Tent
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочные ангары площадью 100 м² — универсальные и функциональные сооружения для бизнеса, сельского хозяйства и мероприятий. Они позволяют быстро и экономично возводить надёжные помещения.
            </p>

            <h3 className="font-semibold text-2xl">Конструкция и материалы</h3>
            <p>
              Каркас из стали или алюминия обеспечивает прочность и долговечность. Обшивка может быть из металла, поликарбоната или ПВХ. Возможна установка утеплённых панелей для эксплуатации в любых климатических условиях.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества арочных ангаров</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Быстрота монтажа:</span> установка за считанные дни или недели.</li>
              <li><span className="font-semibold">Экономичность:</span> дешевле строительства капитальных зданий.</li>
              <li><span className="font-semibold">Универсальность:</span> склады, производства, сельское хозяйство, спорт и торговля.</li>
              <li><span className="font-semibold">Мобильность:</span> легко демонтируются и перемещаются.</li>
              <li><span className="font-semibold">Надёжность:</span> выдерживают снег, ветер и дождь, срок службы десятки лет.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Применение</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Хранение техники, зерна и кормов.</li>
              <li>Животноводческие помещения.</li>
              <li>Склады и производственные цеха.</li>
              <li>Выставочные павильоны и торговые площадки.</li>
              <li>Спортивные сооружения и фитнес-залы.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать?</h3>
            <p>
              Компания <span className="font-semibold">MOBILE TENT</span> производит и устанавливает арочные ангары 100 м², предоставляя полный цикл услуг: проектирование, изготовление, монтаж.
            </p>

            <h3 className="font-semibold text-2xl">Наши преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Индивидуальный подход к каждому проекту.</li>
              <li>Сертифицированные и надёжные материалы.</li>
              <li>Быстрое изготовление и монтаж.</li>
              <li>Конкурентоспособные цены.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные ангары 100 м²
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm [font-family:'Raleway',Helvetica]"
            >
              Заказать в Mobile Tent
            </Button>
          </div>

          <div className="w-full font-medium text-sm leading-5 [font-family:'Raleway',Helvetica] text-[#394355] text-justify space-y-4">
            <p>
              Ангары 100 м² — это быстрые в монтаже, прочные и экономичные сооружения для бизнеса, агро- и спортсферы.
            </p>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Быстрый монтаж.</li>
              <li>Экономичность.</li>
              <li>Универсальность применения.</li>
              <li>Мобильность.</li>
              <li>Надёжность и долговечность.</li>
            </ul>

            <h3 className="font-semibold text-base">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Сельское хозяйство.</li>
              <li>Склады и производство.</li>
              <li>Торговля и выставки.</li>
              <li>Спорт и фитнес.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Индивидуальные проекты.</li>
              <li>Качественные материалы.</li>
              <li>Быстрая установка.</li>
              <li>Выгодные цены.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};