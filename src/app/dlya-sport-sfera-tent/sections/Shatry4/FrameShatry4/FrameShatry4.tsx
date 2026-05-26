'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Сферические шатры для спорта
      </h3>

      <p className="font-medium text-lg leading-6">
        Сферические шатры для спорта востребованы организаторами и спортшколами за счёт
        надёжности и универсальности. Конструкции от <span className="font-semibold">MOBILE TENT</span>
        подходят для соревнований и тренировок в комфортных условиях круглый год. Хотите купить
        сферический спортивный шатёр? Мы подберём решение под любые задачи и бюджет.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества сферических шатров:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Устойчивость к погоде:</span> купольная форма хорошо держит ветер и снег.</li>
        <li><span className="font-semibold">Защита и комфорт:</span> материалы защищают от дождя, солнца и внешних факторов — круглый год.</li>
        <li><span className="font-semibold">Гибкость эксплуатации:</span> подходят для постоянного или сезонного использования.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Размеры и конфигурации:</span> большой выбор под любые виды спорта и площадки.</li>
        <li><span className="font-semibold">Аренда и монтаж:</span> доступны услуги аренды и профессиональная установка.</li>
        <li><span className="font-semibold">Надёжность:</span> качественные материалы и продуманная конструкция.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сферические шатры от MOBILE TENT — проверенное решение для любых погодных условий.
        Закажите шатёр сейчас и обеспечьте комфорт и безопасность на мероприятиях. Узнайте актуальные
        цены на сайте или свяжитесь с нашими специалистами.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Сферические шатры для спорта
      </h3>
      <p className="font-medium text-sm leading-5">
        Купольная устойчивость, защита в любую погоду и варианты для круглогодичной эксплуатации.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Держат ветер и снег</li>
        <li>Защита от дождя и солнца</li>
        <li>Постоянное или сезонное использование</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Размеры и конфигурации под задачу</li>
        <li>Аренда и профессиональный монтаж</li>
        <li>Надёжные материалы</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Узнайте цены и сроки — оставьте заявку, мы подберём оптимальный вариант.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Сферические шатры</span>
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
            <span className="text-[#527dc5]">Сферические шатры</span>
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