'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатры «Звезда» для кафе и ресторанов
      </h3>

      <p className="font-medium text-lg leading-6">
        Шатры «Звезда» — инновационное решение, которое набирает популярность среди кафе и
        ресторанов. Их необычная архитектура с центральным столбом и расходящимися опорами
        создаёт просторное внутреннее пространство и эффектный внешний вид.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему это выгодно:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Эстетика и внимание:</span> уникальный силуэт привлекает клиентов и выделяет заведение.</li>
        <li><span className="font-semibold">Функциональность:</span> подходят для обеденных зон, концертов, свадеб и вечеринок.</li>
        <li><span className="font-semibold">Защита от непогоды:</span> прочные материалы укроют гостей от солнца, ветра и дождя.</li>
        <li><span className="font-semibold">Гибкость использования:</span> можно быстро расширить зону кафе в сезон.</li>
        <li><span className="font-semibold">Доп. опции:</span> освещение, вентиляция, стенки — для максимального комфорта.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Вложение в шатёр-звезду окупается за счёт увеличения числа посетителей и возможностей для проведения мероприятий.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где купить шатры «Звезда»?</h4>
      <p className="font-medium text-lg leading-6">
        Обратитесь в <span className="font-semibold">MOBILE TENT</span> — мы предлагаем широкий ассортимент шатров-звезда, которые подойдут именно для вашего заведения.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Качество и надёжность:</span> устойчивость к ветру и дождю, долговечные материалы.</li>
        <li><span className="font-semibold">Универсальность:</span> для кафе, мероприятий и зон отдыха.</li>
        <li><span className="font-semibold">Современный дизайн:</span> разные цвета и варианты оформления.</li>
        <li><span className="font-semibold">Быстрый монтаж:</span> простая установка с инструкциями.</li>
        <li><span className="font-semibold">Выгодные цены:</span> отличное соотношение цена-качество.</li>
        <li><span className="font-semibold">Поддержка клиентов:</span> консультации, помощь в выборе и эксплуатации.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сделайте кафе ярким и узнаваемым — закажите шатёр-звезду в MOBILE TENT уже сегодня!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры «Звезда» для кафе и ресторанов
      </h3>
      <p className="font-medium text-sm leading-5">
        Уникальная архитектура, просторное внутреннее пространство и защита от непогоды.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Эффектный внешний вид</li>
        <li>Зоны для обедов и мероприятий</li>
        <li>Надёжная защита от дождя и солнца</li>
        <li>Лёгкая установка</li>
        <li>Возможность доп. оснащения</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Качественные и прочные материалы</li>
        <li>Современный дизайн</li>
        <li>Удобный монтаж</li>
        <li>Доступные цены</li>
        <li>Консультации и поддержка</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр-звезду — и привлеките больше гостей в ваше кафе!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шатры «Звезда»</span>
            <span className="text-[#232c42]"> для кафе и ресторанов</span>
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
            <span className="text-[#527dc5]">Шатры «Звезда»</span>
            <span className="text-[#232c42]"> для кафе и ресторанов</span>
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