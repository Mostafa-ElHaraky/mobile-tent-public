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
            <span className="text-[#232c42]"> 20×20 м</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в Mobile Tent
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Современные арочные шатровые конструкции 20×20 м отличаются презентабельным видом, разумной ценой и не требуют тщательной подготовки основания перед монтажом. Компания <span className="font-semibold">MOBILE TENT</span> изготавливает арочные шатры под заказ, сдаёт в аренду и продаёт, а также оказывает услуги по брендированию, доставке и монтажу в Москве и других городах России.
            </p>
            <p>
              Такие шатры выбирают предприниматели для организации выездных мероприятий, а также владельцы коттеджей, отелей и турбаз. <span className="font-semibold">MOBILE TENT</span> предлагает купить или арендовать конструкции 20×20 м собственного производства.
            </p>

            <h3 className="font-semibold text-2xl">Сферы применения</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Проведение выездных мероприятий.</li>
              <li>Организация праздников, корпоративов, презентаций.</li>
              <li>Создание летних кафе, ресторанных площадок.</li>
              <li>Выставки и промо-мероприятия.</li>
            </ul>
            <p>
              В каталоге представлены готовые модели и услуги по индивидуальному проектированию.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества продукции</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Прочность (эксплуатация до 20 лет).</li>
              <li>Ветроустойчивость.</li>
              <li>Пожаробезопасность (сертификаты).</li>
              <li>Надёжная защита от дождя, солнца и ветра.</li>
              <li>Лёгкий монтаж и демонтаж.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Как мы работаем</h3>
            <p>
              После заявки менеджер уточняет детали, инженеры и дизайнеры разрабатывают проект. На изготовление уходит несколько дней, затем мастера доставляют и монтируют конструкцию.
            </p>

            <h3 className="font-semibold text-2xl">Почему выбирают Mobile Tent</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Высокая скорость изготовления и доставки.</li>
              <li>Надёжность продукции, подтверждённая отзывами.</li>
              <li>Официальная гарантия до 5 лет.</li>
              <li>Собственное производство и проекты под ключ.</li>
              <li>Обслуживание в Москве и по всей России.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 20×20 м
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
              Арочные шатры 20×20 м — это прочные и вместительные конструкции для мероприятий, бизнеса и промышленности.
            </p>

            <h3 className="font-semibold text-base">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>До 20 лет эксплуатации.</li>
              <li>Устойчивость к ветру и огню.</li>
              <li>Защита от дождя и солнца.</li>
              <li>Быстрый монтаж и демонтаж.</li>
            </ul>

            <h3 className="font-semibold text-base">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Корпоративы, свадьбы, выставки.</li>
              <li>Летние кафе и рестораны.</li>
              <li>Выставки и промо-мероприятия.</li>
              <li>Временные склады и мастерские.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему Mobile Tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Скорость изготовления и доставки.</li>
              <li>Официальная гарантия до 5 лет.</li>
              <li>Собственное производство.</li>
              <li>Репутация и доверие клиентов.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};