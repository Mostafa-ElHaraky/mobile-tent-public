'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Для спортивно-массовых мероприятий — натяжные шатры
      </h3>

      <p className="font-medium text-lg leading-6">
        Натяжные шатры для спорта от <span className="font-semibold">MOBILE TENT</span> —
        это современные конструкции, которые обеспечивают защиту от непогоды, комфорт
        и мобильность для участников и зрителей.
      </p>

      <h4 className="font-semibold text-xl leading-6">Основные преимущества:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Защита:</span> надёжно укрывают от дождя, ветра и солнца.</li>
        <li><span className="font-semibold">Лёгкость монтажа:</span> быстрый монтаж и демонтаж для временных мероприятий.</li>
        <li><span className="font-semibold">Мобильность:</span> легко перемещаются между площадками.</li>
        <li><span className="font-semibold">Эстетика:</span> современный дизайн и брендирование для стильной атмосферы.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Применение:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Спортивные мероприятия:</span> раздевалки, пункты питания, зоны отдыха.</li>
        <li><span className="font-semibold">Тренировочные лагеря:</span> временные сооружения для проживания, питания и тренировок.</li>
        <li><span className="font-semibold">Спортивные клубы:</span> дополнительные зоны для тренировок и соревнований.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Качество:</span> сертифицированные материалы для долговечности.</li>
        <li><span className="font-semibold">Прочность:</span> каркасы из алюминия и стали.</li>
        <li><span className="font-semibold">Быстрый монтаж:</span> профессиональная установка на объекте.</li>
        <li><span className="font-semibold">Индивидуальность:</span> размеры по заказу, брендирование, логотипы.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        <span className="font-semibold">Цены:</span> зависят от размеров, материалов и опций (брендирование, дизайн).
        Свяжитесь с нами для консультации и точного расчёта.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Натяжные шатры от MOBILE TENT — надёжное, функциональное и стильное решение для спорта.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Натяжные шатры для спорта
      </h3>
      <p className="font-medium text-sm leading-5">
        Комфорт, защита и мобильность для спортивных мероприятий — выбор от MOBILE TENT.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Защита от дождя, ветра и солнца</li>
        <li>Быстрый монтаж/демонтаж</li>
        <li>Мобильность и перенос</li>
        <li>Современный дизайн и брендирование</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Применение:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Зоны для спортсменов и зрителей</li>
        <li>Тренировочные лагеря</li>
        <li>Расширение клубных площадок</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Качественные сертифицированные материалы</li>
        <li>Прочные каркасы из алюминия и стали</li>
        <li>Быстрый монтаж специалистами</li>
        <li>Индивидуальные размеры и брендирование</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Цены зависят от параметров и опций. Оставьте заявку — мы рассчитаем стоимость.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Натяжные шатры</span>
            <span className="text-[#232c42]"> для спорта</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать подробнее
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Натяжные шатры</span>
            <span className="text-[#232c42]"> для спорта</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Узнать подробнее
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};