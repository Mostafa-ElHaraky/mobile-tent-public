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
            <span className="text-[#527dc5]">Арочный шатер</span>
            <span className="text-[#232c42]"> 10×10 м</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в Mobile Tent
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочный шатер 10×10 от компании Mobile Tent — это воплощение элегантности и функциональности. Он идеально подходит для свадеб, корпоративных праздников, выставок и фестивалей. Благодаря арочной конструкции шатер эстетически привлекателен, устойчив и защищает от любых погодных условий.
            </p>

            <h3 className="font-semibold text-2xl">Уникальные особенности</h3>
            <p>
              Просторный внутренний объем позволяет разместить большое количество гостей или оборудования. Конструкция обеспечивает отличную вентиляцию и освещение. Шатер легко модифицируется: можно добавить прозрачные стенки или декоративные элементы.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества шатра от Mobile Tent</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Высококачественные материалы, долговечность и надежность.</li>
              <li>Устойчивость к ветру и осадкам.</li>
              <li>Прочный каркас и защита от ультрафиолета.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Идеальные решения для событий</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Свадьбы и торжества — уютная и праздничная атмосфера.</li>
              <li>Корпоративные мероприятия и выставки — простор и функциональность.</li>
              <li>Фестивали и массовые события — вместимость и защита.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Производство Mobile Tent</h3>
            <p>
              Мы используем только проверенные материалы и современные технологии. На каждом этапе проводится строгий контроль качества. Индивидуальный подход и гибкие условия сотрудничества позволяют удовлетворить самые требовательные запросы.
            </p>

            <h3 className="font-semibold text-2xl">Почему Mobile Tent</h3>
            <p>
              Наши специалисты помогут выбрать оптимальное решение. <span className="font-semibold">Mobile Tent</span> — это качество, надежность и инновации. Мы делаем всё, чтобы ваше мероприятие прошло на высшем уровне.
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочный шатер 10×10 м
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
              Арочный шатер 10×10 — элегантное и функциональное решение для свадеб, корпоративов, выставок и фестивалей.
            </p>

            <h3 className="font-semibold text-base">Особенности</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Просторный внутренний объем.</li>
              <li>Хорошая вентиляция и освещение.</li>
              <li>Возможность модификаций.</li>
            </ul>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Долговечные материалы.</li>
              <li>Устойчивость к ветру и осадкам.</li>
              <li>Прочный каркас и защита от УФ.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Современные технологии производства.</li>
              <li>Строгий контроль качества.</li>
              <li>Индивидуальный подход.</li>
              <li>Гибкие условия сотрудничества.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};