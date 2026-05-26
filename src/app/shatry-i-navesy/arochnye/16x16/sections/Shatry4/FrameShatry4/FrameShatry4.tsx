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
            <span className="text-[#232c42]"> 16×16 м</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в Mobile Tent
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочные шатры размером 16×16 метров представляют собой внушительные и функциональные сооружения, которые находят широкое применение в различных областях. Эти конструкции обладают рядом преимуществ, делая их идеальным выбором для мероприятий, торговли, промышленности и других сфер.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Просторное внутреннее пространство:</span> подходит для крупных мероприятий, конференций, выставок и ярмарок.</li>
              <li><span className="font-semibold">Эстетичный дизайн:</span> современный и стильный внешний вид, пространство для рекламы.</li>
              <li><span className="font-semibold">Быстрый монтаж и демонтаж:</span> несмотря на размеры, легко устанавливаются и переносятся.</li>
              <li><span className="font-semibold">Прочная конструкция:</span> качественные материалы и устойчивость к погодным условиям.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Применение</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Мероприятия и развлечения: концерты, фестивали, свадьбы, ярмарки.</li>
              <li>Торговля и бизнес: павильоны, рестораны, кафе, магазины.</li>
              <li>Промышленность: временные склады, мастерские, производственные помещения.</li>
              <li>Спорт и отдых: крытые площадки, фитнес-центры, лагеря, зоны для активного отдыха.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать арочные шатры 16×16 м?</h3>
            <p>
              Если вам нужны шатры размером 16×16 метров, вы можете заказать их в компании <span className="font-semibold">Mobile Tent</span> — одного из ведущих производителей шатровых конструкций в России.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества Mobile Tent</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Индивидуальный подход и учет требований клиента.</li>
              <li>Высокое качество и долговечность продукции.</li>
              <li>Быстрая установка и обслуживание профессиональной командой.</li>
              <li>Широкий выбор моделей и размеров.</li>
              <li>Большой опыт и надёжная репутация на рынке.</li>
              <li>Высококвалифицированные специалисты: инженеры, дизайнеры, монтажники.</li>
              <li>Быстрое исполнение заказов даже в сжатые сроки.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 16×16 м
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
              Арочные шатры 16×16 м — просторные и надёжные сооружения для мероприятий, торговли, промышленности и спорта.
            </p>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Большое внутреннее пространство.</li>
              <li>Современный дизайн.</li>
              <li>Быстрый монтаж.</li>
              <li>Прочная и устойчивая конструкция.</li>
            </ul>

            <h3 className="font-semibold text-base">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Крупные мероприятия и торжества.</li>
              <li>Торговые павильоны и кафе.</li>
              <li>Временные склады и мастерские.</li>
              <li>Спортивные и рекреационные зоны.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Индивидуальный подход.</li>
              <li>Качество и долговечность.</li>
              <li>Быстрая установка.</li>
              <li>Широкий ассортимент.</li>
              <li>Опыт и репутация.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};