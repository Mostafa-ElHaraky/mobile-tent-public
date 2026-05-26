'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Натяжные шатры для загородных домов
      </h3>
      <p className="font-medium text-lg leading-6">
        Загородный дом — это место отдыха и уединения. 
        Натяжные шатры дополняют ландшафт, удобны в установке и обладают высокой прочностью.  
        Они создают комфортное пространство для отдыха и мероприятий на свежем воздухе.
      </p>

      <h4 className="font-semibold text-xl leading-6">Основные особенности конструкции:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Каркас из алюминия или стали для устойчивости</li>
        <li>Покрытие из ПВХ или полиэстера — защита от осадков, ветра и ультрафиолета</li>
        <li>Разнообразие форм: арочные, купольные, асимметричные</li>
        <li>Мобильность: простая установка и демонтаж</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        В отличие от беседок и навесов, натяжные шатры легче, не требуют фундамента 
        и могут использоваться сезонно или круглый год.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества натяжных шатров</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Надёжность и долговечность — устойчивы к коррозии и нагрузкам</li>
        <li>Быстрая установка — от нескольких часов до одного дня</li>
        <li>Эффективная защита от солнца, дождя, снега и ветра</li>
        <li>Эстетика — выбор форм, размеров и цветов</li>
        <li>Экономичность — дешевле капитальных построек</li>
        <li>Мобильность — легко разобрать и переместить</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Купить натяжной шатёр в Mobile Tent</h4>
      <p className="font-medium text-lg leading-6">
        Цены зависят от размера, формы, материалов и сложности монтажа.  
        В <span className="font-semibold">Mobile Tent</span> — широкий выбор натяжных шатров с доставкой и установкой.  
        Наши специалисты помогут подобрать оптимальный вариант для вашего дома.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему выбирают нас?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Качественные материалы — прочные каркасы и тенты</li>
        <li>Широкий ассортимент форм и размеров</li>
        <li>Быстрый монтаж — установка за 1 день</li>
        <li>Гарантия надёжности и долгий срок службы</li>
        <li>Консультация специалистов для выбора шатра</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Выбирайте натяжные шатры в <span className="font-semibold">Mobile Tent</span> — 
        создайте комфортное пространство для отдыха и мероприятий!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Натяжные шатры для дома
      </h3>
      <p className="font-medium text-sm leading-5">
        Лёгкие и прочные конструкции для отдыха на даче: быстро ставятся, защищают от дождя, солнца и ветра.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Монтаж за 1 день</li>
        <li>Прочный каркас (алюминий или сталь)</li>
        <li>Тент ПВХ или полиэстер</li>
        <li>Защита от непогоды</li>
        <li>Современный дизайн</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">Mobile Tent</span> широкий выбор форм и размеров, доставка и монтаж по России.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите натяжной шатёр для загородного дома уже сегодня!
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
            <span className="text-[#232c42]"> для загородных домов</span>
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
            <span className="text-[#527dc5]">Натяжные шатры</span>
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