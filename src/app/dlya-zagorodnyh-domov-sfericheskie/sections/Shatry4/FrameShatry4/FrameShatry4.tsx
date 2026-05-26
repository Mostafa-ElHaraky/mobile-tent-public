'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Сферические шатры для дома
      </h3>

      <p className="font-medium text-lg leading-6">
        Сферические шатры — это конструкции с полусферическим каркасом, покрытые прочной тканью или полимером. 
        Они ветроустойчивы, выдерживают снеговые нагрузки и подходят для круглогодичного использования. 
        Хотите купить сферический шатёр для дома? Разберём ключевые особенности выбора.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Прочность: алюминий или сталь выдерживают большие нагрузки.</li>
        <li>Эстетика: современный дизайн украшает участок.</li>
        <li>Функциональность: отдых, бизнес или мероприятия.</li>
        <li>Быстрый монтаж: сборка за несколько часов.</li>
        <li>Экономия пространства: внутренняя площадь используется максимально эффективно.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Где использовать?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">На участке:</span> летняя кухня, зона отдыха, мини-оранжерея.</li>
        <li><span className="font-semibold">Для мероприятий:</span> банкеты, свадьбы, семейные торжества.</li>
        <li><span className="font-semibold">Коммерция:</span> летнее кафе, павильон, глэмпинг, выставки.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Как выбрать шатёр</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Размер — диаметр от 6 до 35 м.</li>
        <li>Каркас — алюминий (лёгкий) или сталь (максимальная прочность).</li>
        <li>Покрытие — ПВХ или поликарбонат.</li>
        <li>Срок службы — до 10 лет при уходе.</li>
        <li>Опции — окна, двери, вентиляция, утепление.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Цены и условия</h4>
      <p className="font-medium text-lg leading-6">
        Стоимость сферических шатров начинается от <span className="font-semibold">300 000 ₽</span>. 
        В комплект входят каркас, тент и комплектующие.  
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает:
      </p>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Гарантированные качественные конструкции.</li>
        <li>Доставку и профессиональную сборку.</li>
        <li>Консультации специалистов.</li>
        <li>Индивидуальный подбор под задачи клиента.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Чтобы купить сферический шатёр для дома, оставьте заявку на сайте или позвоните менеджеру — мы подберём модель именно для вас.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Сферические шатры для дома
      </h3>
      <p className="font-medium text-sm leading-5">
        Прочные конструкции с полусферическим каркасом: устойчивы к ветру и снегу, подходят для круглогодичного использования.
      </p>

      <h4 className="font-semibold text-base leading-5">Плюсы:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Каркас из алюминия или стали</li>
        <li>Современный дизайн</li>
        <li>Быстрый монтаж</li>
        <li>До 10 лет службы</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Применение:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Зона отдыха на участке</li>
        <li>Банкеты и свадьбы</li>
        <li>Летнее кафе или павильон</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        Цены от <span className="font-semibold">300 000 ₽</span>.  
        В <span className="font-semibold">MOBILE TENT</span> — доставка, монтаж и консультации специалистов.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите сферический шатёр для дома прямо сейчас!
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
            <span className="text-[#232c42]"> для дома</span>
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
            <span className="text-[#527dc5]">Сферические шатры</span>
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