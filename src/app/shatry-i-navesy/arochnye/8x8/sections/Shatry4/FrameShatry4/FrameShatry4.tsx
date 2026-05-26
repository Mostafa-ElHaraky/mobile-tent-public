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
            <span className="text-[#232c42]"> 8×8 м</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в MOBILE TENT
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочные шатры размером 8×8 метров представляют собой впечатляющие конструкции, которые идеально подходят для широкого спектра мероприятий и коммерческих целей. Эти шатры сочетают в себе пространство, эстетику и функциональность, обеспечивая участникам и гостям комфорт и защиту от погодных условий.
            </p>
            <p>
              Независимо от того, проводите ли вы свадьбу, выставку, ярмарку или другое мероприятие, арочные шатры 8×8 метров станут незаменимым помощником.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Простор и удобство:</span> достаточно места для гостей, оборудования и товаров.</li>
              <li><span className="font-semibold">Впечатляющий дизайн:</span> стильный и элегантный внешний вид с изогнутыми формами.</li>
              <li><span className="font-semibold">Прочность и надежность:</span> прочные металлические каркасы и ПВХ/полиэстеровые покрытия защищают от ветра, дождя и солнца.</li>
              <li><span className="font-semibold">Многофункциональность:</span> подходят для свадеб, выставок, ярмарок, концертов, корпоративов и спортивных событий.</li>
              <li><span className="font-semibold">Простота установки:</span> инновационная конструкция позволяет быстро монтировать и демонтировать шатры.</li>
              <li><span className="font-semibold">Гибкость конфигурации:</span> можно соединять шатры для увеличения площади или делить зоны перегородками.</li>
              <li><span className="font-semibold">Освещение и обогрев:</span> возможно оснащение современными системами комфорта.</li>
              <li><span className="font-semibold">Персонализация:</span> брендирование, логотипы, цветовые схемы.</li>
              <li><span className="font-semibold">Соотношение цены и качества:</span> выгодное решение для бизнеса и частных клиентов.</li>
            </ul>

            <p>
              Арочные шатры 8×8 метров — это не только практичное решение, но и инструмент для создания уникальных впечатлений у гостей.
            </p>

            <h3 className="font-semibold text-2xl">Где купить арочные шатры 8×8?</h3>
            <p>
              Приобретайте арочные шатры размером 8×8 м в компании <span className="font-semibold">MOBILE TENT</span>.
            </p>

            <h3 className="font-semibold text-2xl">Наши преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Широкий выбор моделей для разных задач.</li>
              <li>Высокое качество и надежность, подтвержденные технологиями.</li>
              <li>Профессиональный монтаж и безопасность эксплуатации.</li>
              <li>Индивидуальный подход к каждому клиенту.</li>
              <li>Гибкие условия оплаты и конкурентные цены.</li>
              <li>Квалифицированные консультации специалистов.</li>
              <li>Быстрая доставка в любые регионы.</li>
              <li>Современный и эстетичный дизайн конструкций.</li>
              <li>Постоянное обновление ассортимента.</li>
              <li>Уникальные решения и индивидуальные проекты.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 8×8 м
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
              Арочные шатры 8×8 м — просторные, стильные и надежные конструкции для свадеб, выставок, ярмарок и других мероприятий.
            </p>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Большое пространство и комфорт.</li>
              <li>Элегантный дизайн.</li>
              <li>Прочные материалы и защита от погоды.</li>
              <li>Универсальность применения.</li>
              <li>Быстрый монтаж и демонтаж.</li>
              <li>Брендирование и персонализация.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Широкий выбор моделей.</li>
              <li>Гарантированное качество и надежность.</li>
              <li>Профессиональный монтаж.</li>
              <li>Индивидуальный подход и консультации.</li>
              <li>Быстрая доставка и гибкие условия оплаты.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};