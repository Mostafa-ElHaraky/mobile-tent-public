'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Мембранные шатры для частного дома
      </h3>
      <p className="font-medium text-lg leading-6">
        Мембранные шатры — современное решение для обустройства загородного участка.  
        Они защищают от солнца, ветра и дождя, создают уютное пространство для отдыха и гармонично вписываются в ландшафтный дизайн.
      </p>
      <p className="font-medium text-lg leading-6">
        Каркас из алюминия или стали и покрытие из ПВХ-мембраны обеспечивают долговечность и защиту от ультрафиолета.  
        Такие шатры лёгкие, но прочные, и подходят для использования в любое время года.
      </p>

      <h4 className="font-semibold text-xl leading-6">Основные характеристики:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Размер: от 3×3 м до 10×10 м и более</li>
        <li>Каркас: алюминиевый или стальной</li>
        <li>Мембрана: двухслойная с защитным покрытием</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Где применяются?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Зона отдыха с мебелью и мангалом</li>
        <li>Навес для автомобиля или бассейна</li>
        <li>Летняя кухня или беседка</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        В отличие от деревянных навесов, мембранный шатёр не требует сложного ухода и быстро устанавливается на участке.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Прочность и устойчивость — выдерживает снеговые и ветровые нагрузки</li>
        <li>Долговечность — мембрана не выгорает и не деформируется</li>
        <li>Быстрый монтаж — установка за несколько часов или 1–2 дня</li>
        <li>Современный дизайн — элегантно дополняет участок</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Где купить?</h4>
      <p className="font-medium text-lg leading-6">
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает широкий ассортимент мембранных шатров с доставкой по России.  
        Мы предоставляем гарантию качества, индивидуальные решения и услуги профессионального монтажа.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Закажите мембранный шатёр в <span className="font-semibold">MOBILE TENT</span> — создайте современное и удобное пространство для вашего загородного дома!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Мембранные шатры для дома
      </h3>
      <p className="font-medium text-sm leading-5">
        Современные шатры для дачи и дома: защита от солнца, ветра и дождя, стильный дизайн и простая установка.
      </p>

      <h4 className="font-semibold text-base leading-5">Характеристики:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Размеры от 3×3 м</li>
        <li>Каркас: алюминий или сталь</li>
        <li>Мембрана ПВХ с защитой от УФ</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Прочные и долговечные</li>
        <li>Монтаж за 1–2 дня</li>
        <li>Современный внешний вид</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> можно купить или заказать под ваши параметры.  
        Доставка и монтаж по России.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите мембранный шатёр уже сегодня!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Мембранные шатры</span>
            <span className="text-[#232c42]"> для частного дома</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать шатёр
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Мембранные шатры</span>
            <span className="text-[#232c42]"> для дома</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать шатёр
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};