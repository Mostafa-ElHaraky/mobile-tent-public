'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Гексагональный тент для временного ангара
      </h3>
      <p className="font-medium text-lg leading-6">
        Гексагональные тенты подходят для складов, производственных зон и сельского хозяйства. 
        Каркас из алюминия или стали выдерживает ветер и снеговые нагрузки, а ПВХ-покрытие защищает от дождя и солнца. 
        Купить гексагональный тент для временного ангара — разумное решение, если нужен надёжный, быстро монтируемый навес 
        для хранения техники, стройматериалов или товаров.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где используют гексагональные тенты?</h4>
      <p className="font-medium text-lg leading-6">
        Шестиугольная форма равномерно распределяет нагрузку, обеспечивая устойчивость к погодным условиям. 
        Цены зависят от размеров, материала каркаса и плотности покрытия, но даже базовые модели защищают от осадков.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Быстрая установка — монтаж за 1–2 дня</li>
        <li>Просторное пространство без внутренних опор</li>
        <li>Высокая устойчивость к нагрузкам</li>
        <li>Экономичность — дешевле капитальных строений</li>
        <li>Долговечность — срок службы до 15 лет</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Как выбрать?</h4>
      <p className="font-medium text-lg leading-6">
        Размер, материал каркаса и плотность покрытия — ключевые параметры при выборе. 
        Стоимость варьируется, но конструкции остаются надёжными и функциональными во всех вариантах.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где купить?</h4>
      <p className="font-medium text-lg leading-6">
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает качественные модели с доставкой и монтажом.  
        Оставьте заявку на сайте, чтобы получить консультацию и подобрать оптимальный вариант.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Гексагональные тенты от <span className="font-semibold">MOBILE TENT</span> — это надёжность, практичность и экономия для вашего бизнеса.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Гексагональные тенты для ангаров
      </h3>
      <p className="font-medium text-sm leading-5">
        Прочные тенты для складов, стройматериалов и техники. 
        Каркас из стали или алюминия, ПВХ-покрытие защищает от осадков и солнца.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Монтаж за 1–2 дня</li>
        <li>Без внутренних опор</li>
        <li>Устойчивость к нагрузкам</li>
        <li>До 15 лет службы</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> доступны разные размеры и комплектации. 
        Доставка и монтаж включены.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите гексагональный тент для временного ангара прямо сейчас!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Гексагональные тенты</span>
            <span className="text-[#232c42]"> для ангаров</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать тент
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Гексагональные тенты</span>
            <span className="text-[#232c42]"> для ангаров</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать тент
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};