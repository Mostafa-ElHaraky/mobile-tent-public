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
            <span className="text-[#232c42]"> 36 м²</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в Mobile Tent
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочные шатры площадью 36 м² — это просторные и многофункциональные конструкции, идеально подходящие для мероприятий, бизнеса и временных решений. Они предоставляют достаточно места для гостей, оборудования или товаров, защищая от любых погодных условий.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Просторность и вместительность:</span> достаточно места для людей, оборудования и товаров.</li>
              <li><span className="font-semibold">Эстетичный дизайн:</span> современный вид и элегантные формы.</li>
              <li><span className="font-semibold">Прочность и надежность:</span> качественные каркасы и ПВХ-тенты для любых условий.</li>
              <li><span className="font-semibold">Универсальность:</span> подходят для мероприятий, складов и торговых точек.</li>
              <li><span className="font-semibold">Быстрый монтаж и демонтаж:</span> удобные для временного использования.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Применение</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Свадьбы, корпоративы, концерты, фестивали.</li>
              <li>Выставки и презентации продукции.</li>
              <li>Временные торговые точки, кафе и павильоны.</li>
              <li>Спортивные и развлекательные мероприятия.</li>
              <li>Склады и временное хранение.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать?</h3>
            <p>
              Компания <span className="font-semibold">MOBILE TENT</span> — ведущий производитель арочных шатров 36 м² и других размеров. Мы предлагаем аренду, продажу, доставку и монтаж по всей России.
            </p>

            <h3 className="font-semibold text-2xl">Наши преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Большой опыт и надёжная репутация.</li>
              <li>Быстрая доставка и профессиональный монтаж.</li>
              <li>Широкий ассортимент моделей.</li>
              <li>Современные технологии производства.</li>
              <li>Гарантия и поддержка клиентов.</li>
              <li>Положительные отзывы и доверие.</li>
              <li>Возможность дополнительного оборудования (отопление, освещение, вентиляция).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 36 м²
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
              Арочные шатры 36 м² — универсальные конструкции для мероприятий, бизнеса и хранения. Просторные, стильные и надёжные.
            </p>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Простор и вместительность.</li>
              <li>Современный дизайн.</li>
              <li>Надёжные материалы.</li>
              <li>Быстрый монтаж.</li>
            </ul>

            <h3 className="font-semibold text-base">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Свадьбы, фестивали, корпоративы.</li>
              <li>Выставки и презентации.</li>
              <li>Торговые павильоны и кафе.</li>
              <li>Склады и спортмероприятия.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Опыт и репутация.</li>
              <li>Быстрая доставка и монтаж.</li>
              <li>Широкий ассортимент.</li>
              <li>Гарантия и поддержка.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};