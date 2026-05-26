'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Пивные шатры от MOBILE TENT
      </h3>

      <p className="font-medium text-lg leading-6">
        Купить пивной шатёр — это разумное решение, которое позволит сэкономить и работать
        в нормальном режиме. Мы предлагаем клиентам только высокосортные пивные шатры по
        доступной цене — идеальное соотношение цены и качества.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему пивные шатры популярны:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Доступность:</span> металлический каркас и ПВХ-ткань делают конструкцию недорогой.</li>
        <li><span className="font-semibold">Мобильность:</span> лёгкий монтаж и демонтаж, возможность перемещения шатра.</li>
        <li><span className="font-semibold">Долговечность:</span> материалы выдерживают активное использование и легко обслуживаются.</li>
        <li><span className="font-semibold">Брендирование:</span> нанесём логотип или надпись на шатёр для привлечения клиентов.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Помимо шатров, у нас можно купить и зонты от солнца по доступной цене — стильное и
        практичное решение для летних площадок. Это создаёт уют и повышает привлекательность
        заведения.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему выбирают нас:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Оперативная обработка заявок</li>
        <li>Быстрая доставка по всей России</li>
        <li>Квалифицированная помощь в подборе</li>
        <li>Возможность брендирования шатров</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Позаботьтесь о своём бизнесе вместе с <span className="font-semibold">MOBILE TENT</span> — звоните и мы сразу возьмёмся за ваш заказ!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Пивные шатры для кафе и ресторанов
      </h3>
      <p className="font-medium text-sm leading-5">
        Доступные шатры из прочных материалов: удобный монтаж, долговечность и возможность брендирования.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Низкая цена</li>
        <li>Простая установка и перенос</li>
        <li>Долговечные материалы</li>
        <li>Лёгкое обслуживание</li>
        <li>Логотип или надпись на шатре</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        Также у нас есть зонты от солнца для летних площадок по доступным ценам.
      </p>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Быстрая доставка</li>
        <li>Квалифицированная помощь</li>
        <li>Оперативная обработка заявок</li>
        <li>Выгодные цены</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите пивной шатёр — MOBILE TENT сделает ваш бизнес уютнее и прибыльнее!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Пивные шатры</span>
            <span className="text-[#232c42]"> от MOBILE TENT</span>
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
            <span className="text-[#527dc5]">Пивные шатры</span>
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