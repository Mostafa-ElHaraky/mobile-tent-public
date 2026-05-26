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
            <span className="text-[#232c42]"> 25 м²</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в Mobile Tent
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочные шатры площадью 25 м² — это компактные и удобные сооружения, которые находят применение в самых различных областях. Они отлично подходят для проведения небольших мероприятий, торговли, отдыха или временного проживания.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Мобильность и легкость установки:</span> легко транспортируются и быстро монтируются.</li>
              <li><span className="font-semibold">Удобство и функциональность:</span> подходят как для мероприятий, так и для временного склада или торговой точки.</li>
              <li><span className="font-semibold">Эстетика и стиль:</span> современный дизайн с возможностью дополнительного оформления.</li>
              <li><span className="font-semibold">Надежность и прочность:</span> устойчивость к ветру и неблагоприятным условиям.</li>
              <li><span className="font-semibold">Экономичность:</span> выгодная альтернатива аренде помещений или капитальному строительству.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Применение</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Мероприятия и фестивали: выставки, ярмарки, праздники.</li>
              <li>Торговля и бизнес: магазины, кафе, стенды.</li>
              <li>Отдых и развлечения: летние площадки, игровые зоны.</li>
              <li>Спорт: временные площадки, раздевалки, точки продаж.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где купить?</h3>
            <p>
              Компания <span className="font-semibold">MOBILE TENT</span> предлагает широкий ассортимент арочных шатров 25 м² и других размеров, с доставкой и установкой по всей России.
            </p>

            <h3 className="font-semibold text-2xl">Почему выбирают нас</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Надёжность и качество материалов.</li>
              <li>Разнообразие моделей.</li>
              <li>Индивидуальный подход.</li>
              <li>Быстрая доставка и монтаж.</li>
              <li>Профессиональная поддержка и консультации.</li>
              <li>Отличная репутация на рынке.</li>
              <li>Долгосрочные отношения с клиентами.</li>
              <li>Инновационные решения в дизайне и производстве.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 25 м²
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
              Арочные шатры 25 м² — компактные и стильные конструкции для мероприятий, торговли и отдыха.
            </p>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Мобильность и лёгкий монтаж.</li>
              <li>Современный дизайн.</li>
              <li>Надёжная защита от погоды.</li>
              <li>Экономичность.</li>
            </ul>

            <h3 className="font-semibold text-base">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Малые мероприятия и фестивали.</li>
              <li>Торговые точки и кафе.</li>
              <li>Игровые зоны и отдых.</li>
              <li>Спортивные площадки и раздевалки.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Высокое качество.</li>
              <li>Индивидуальный подход.</li>
              <li>Быстрая доставка и монтаж.</li>
              <li>Профессиональная поддержка.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};