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
            <span className="text-[#232c42]"> 64 м²</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в Mobile Tent
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Арочные шатры площадью 64 м² предоставляют оптимальные условия для проведения мероприятий и создания временных коммерческих пространств. Они отличаются просторностью, надёжностью и элегантным дизайном.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества арочных шатров</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Просторность:</span> достаточно места для людей, оборудования и экспозиций.</li>
              <li><span className="font-semibold">Эстетичный дизайн:</span> стильный внешний вид, добавляющий ценность мероприятию.</li>
              <li><span className="font-semibold">Надёжность:</span> прочные каркасы и долговечные ПВХ покрытия.</li>
              <li><span className="font-semibold">Многофункциональность:</span> свадьбы, выставки, спорт, бизнес и хранение.</li>
              <li><span className="font-semibold">Простая установка:</span> быстрый монтаж и демонтаж для мобильного использования.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Области применения</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Свадьбы, корпоративы, концерты и фестивали.</li>
              <li>Выставки и ярмарки.</li>
              <li>Спортивные мероприятия и зоны отдыха.</li>
              <li>Временные склады и хранение.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать?</h3>
            <p>
              Компания <span className="font-semibold">MOBILE TENT</span> — ведущий производитель арочных шатров 64 м² и других размеров. Мы предоставляем аренду, продажу, доставку и монтаж по всей России.
            </p>

            <h3 className="font-semibold text-2xl">Наши преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Опыт и надёжная репутация.</li>
              <li>Индивидуальный подход.</li>
              <li>Высокое качество продукции.</li>
              <li>Быстрая доставка и монтаж.</li>
              <li>Гибкие условия сотрудничества.</li>
              <li>Широкий ассортимент моделей.</li>
              <li>Гарантия и поддержка.</li>
              <li>Положительные отзывы клиентов.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 64 м²
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
              Арочные шатры 64 м² — это просторные и надёжные конструкции для мероприятий, бизнеса и временных складов.
            </p>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Просторность и вместимость.</li>
              <li>Современный дизайн.</li>
              <li>Надёжные материалы.</li>
              <li>Быстрая установка.</li>
            </ul>

            <h3 className="font-semibold text-base">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Свадьбы и фестивали.</li>
              <li>Выставки и ярмарки.</li>
              <li>Спорт и зоны отдыха.</li>
              <li>Временные склады.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Опыт и репутация.</li>
              <li>Индивидуальный подход.</li>
              <li>Качество и гарантия.</li>
              <li>Быстрая доставка и монтаж.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};