'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Спортивные ангары, навесы и шатры от MOBILE TENT
      </h3>

      <p className="font-medium text-lg leading-6">
        Ангары спортивные — универсальные и практичные сооружения для создания больших крытых
        пространств: от футбольных полей и теннисных кортов до хоккейных арен, баскетбольных
        площадок и беговых дорожек. Их сильные стороны — прочность, быстрая установка и
        устойчивость к суровой погоде.
      </p>

      <h4 className="font-semibold text-xl leading-6">Навесы: что учитывать при выборе</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Материалы:</span> металл и прочные полимеры защищают от дождя, снега и ветра.</li>
        <li><span className="font-semibold">Конструкция:</span> достаточно прочная для нагрузок и легкая для мобильности.</li>
        <li><span className="font-semibold">Размер и дизайн:</span> гармоничная интеграция в пространство объекта.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Шатры для спорта</h4>
      <p className="font-medium text-lg leading-6">
        Спортивные шатры — отличный вариант для временных мероприятий и тренировок на воздухе:
        быстро ставятся/разбираются, мобильны и подходят как площадки или зоны отдыха/укрытия
        для зрителей.
      </p>

      <p className="font-medium text-lg leading-6">
        Ангары, навесы и шатры помогают расширить инфраструктуру и проводить спортмероприятия
        круглый год, не завися от погоды.
      </p>

      <h4 className="font-semibold text-xl leading-6">
        Преимущества покупки у производителя MOBILE TENT
      </h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Гарантированное качество:</span> контроль всех этапов — от материалов до сборки.</li>
        <li><span className="font-semibold">Индивидуальные решения:</span> типовые модели и проекты под ваши задачи.</li>
        <li><span className="font-semibold">Простая установка/демонтаж:</span> быстро, без спецнавыков и оборудования.</li>
        <li><span className="font-semibold">Прочность и устойчивость:</span> стойкость к ветру, дождю, снегу — круглогодично.</li>
        <li><span className="font-semibold">Современный дизайн:</span> аккуратный внешний вид, поддержка стилистики объекта.</li>
        <li><span className="font-semibold">Экономичность:</span> прямые цены производителя, без посредников.</li>
        <li><span className="font-semibold">Техническая поддержка:</span> помощь с установкой и эксплуатацией, сервис.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Планируете новый спортивный объект или модернизацию? Оставьте заявку — подберём ангар,
        навес или шатёр под ваши требования и бюджет.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Спортивные ангары, навесы и шатры
      </h3>
      <p className="font-medium text-sm leading-5">
        Большие крытые пространства, быстрая установка и устойчивость к погоде — решение для спорта круглый год.
      </p>

      <h4 className="font-semibold text-base leading-5">Навесы — важно:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Надёжные материалы (металл/полимеры)</li>
        <li>Прочность и мобильность конструкции</li>
        <li>Размер и дизайн под объект</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Шатры для спорта:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Быстрый монтаж/демонтаж</li>
        <li>Мобильность и транспортировка</li>
        <li>Площадки, зоны отдыха, укрытие</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Контроль качества и гарантия</li>
        <li>Индивидуальные проекты</li>
        <li>Быстрая установка</li>
        <li>Прочность и всепогодность</li>
        <li>Дизайн и экономичность</li>
        <li>Техподдержка и сервис</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Оставьте заявку — подберём ангар, навес или шатёр под ваши задачи.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop (centered, max width 1440px) */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] px-10 flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Спортивные сооружения</span>
            <span className="text-[#232c42]">: ангары, навесы, шатры</span>
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

      {/* Mobile (responsive layout) */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Ангары, навесы, шатры</span>
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
