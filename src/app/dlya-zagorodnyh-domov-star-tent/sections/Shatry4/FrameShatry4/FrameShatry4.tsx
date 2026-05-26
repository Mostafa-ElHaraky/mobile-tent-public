'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатры «Звезда» для загородного дома
      </h3>

      <p className="font-medium text-lg leading-6">
        Шатёр «Звезда» — стильная и функциональная конструкция для отдыха на свежем воздухе. 
        Прочный металлический каркас с антикоррозийным покрытием и влагостойкий тент обеспечивают 
        защиту от солнца, дождя и ветра.
      </p>

      <p className="font-medium text-lg leading-6">
        Форма шатра напоминает лучевую звезду, что делает его визуально привлекательным и повышает устойчивость к порывам ветра. 
        Такие шатры идеально подходят для загородных домов, создавая комфортную зону отдыха.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где используют шатры «Звезда»?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Зоны отдыха:</span> мебель, шезлонги, летняя кухня.</li>
        <li><span className="font-semibold">Мероприятия:</span> вечеринки, барбекю, свадьбы, семейные праздники.</li>
        <li><span className="font-semibold">Коммерция:</span> выставки, презентации, выездные акции.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Эстетичный внешний вид — стильное украшение участка.</li>
        <li>Простая и быстрая установка.</li>
        <li>Устойчивость к погодным условиям.</li>
        <li>Компактность при хранении и транспортировке.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Цены и комплектация</h4>
      <p className="font-medium text-lg leading-6">
        Стоимость зависит от размеров, материалов и оснащения. 
        Доступны модели вместимостью от <span className="font-semibold">10–15</span> до <span className="font-semibold">50+ гостей</span>.
      </p>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Размер шатра — основной фактор цены.</li>
        <li>Каркас: алюминий дороже стали, но легче и долговечнее.</li>
        <li>Тент: ПВХ прочнее стандартной ткани.</li>
        <li>Доп. опции: прозрачные стенки, москитные сетки.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему Mobile Tent?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Прочные материалы и надёжные конструкции.</li>
        <li>Большой выбор моделей.</li>
        <li>Доставка по всей России.</li>
        <li>Гарантия и консультации специалистов.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Закажите шатёр «Звезда» для загородного дома в Mobile Tent — создайте стильное и комфортное пространство для отдыха и мероприятий!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры «Звезда» для дома
      </h3>
      <p className="font-medium text-sm leading-5">
        Стильные конструкции с каркасом из металла и влагостойким тентом. Защита от солнца, дождя и ветра.
      </p>

      <h4 className="font-semibold text-base leading-5">Использование:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Зона отдыха</li>
        <li>Свадьбы и праздники</li>
        <li>Выставки и промо</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Плюсы:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Стильный дизайн</li>
        <li>Устойчивая конструкция</li>
        <li>Простая установка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        Вместимость от 10 до 50+ гостей. Разные материалы и комплектации.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр «Звезда» в Mobile Tent уже сегодня!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шатры «Звезда»</span>
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
            <span className="text-[#527dc5]">Шатры «Звезда»</span>
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