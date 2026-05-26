'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатры «Пагода» для кафе и ресторанов
      </h3>

      <p className="font-medium text-lg leading-6">
        Шатры «Пагода» — элегантное и практичное решение для обустройства кафе и ресторанов.
        Их уникальный дизайн и функциональность помогают создавать комфортное и стильное
        пространство.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества шатров «Пагода»:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>
          <span className="font-semibold">Эстетика и стиль:</span> характерная форма с четырьмя
          столбами и пирамидальным верхом придаёт изысканный вид и создаёт уютную атмосферу.
        </li>
        <li>
          <span className="font-semibold">Защита круглый год:</span> комфорт посетителей при солнце,
          дожде и ветре.
        </li>
        <li>
          <span className="font-semibold">Гибкость и универсальность:</span> установка на террасах и
          внутри помещений; зонирование под обеды, ужины и мероприятия.
        </li>
        <li>
          <span className="font-semibold">Доп. оснащение:</span> освещение, отопление, вентиляция —
          для полноценного круглогодичного использования.
        </li>
        <li>
          <span className="font-semibold">Маркетинговый эффект:</span> выразительный внешний вид,
          фото-контент и рост узнаваемости бренда в соцсетях.
        </li>
      </ul>

      <p className="font-medium text-lg leading-6">
        В целом «Пагода» — идеальное решение для создания уютного и запоминающегося пространства
        для гостей.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где купить «Пагода» для кафе и ресторана?</h4>
      <p className="font-medium text-lg leading-6">
        Обратитесь в <span className="font-semibold">MOBILE TENT</span> — мы производим и продаём
        качественные пагодные шатры, идеально подходящие для заведений.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Широкий выбор моделей:</span> от компактных до просторных, под разные задачи.</li>
        <li><span className="font-semibold">Высокое качество материалов:</span> прочность и долговечность в эксплуатации.</li>
        <li><span className="font-semibold">Устойчивость к погоде:</span> защита от солнца, дождя и ветра круглый год.</li>
        <li><span className="font-semibold">Конкурентные цены:</span> доступные решения для разных бюджетов.</li>
        <li><span className="font-semibold">Профессиональный сервис:</span> консультации по выбору и установке.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Улучшите ваше кафе/ресторан стильными и функциональными шатрами «Пагода» от MOBILE TENT —
        создайте уютное и привлекательное пространство для гостей!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры «Пагода» для кафе и ресторанов
      </h3>
      <p className="font-medium text-sm leading-5">
        Элегантная форма, защита в любую погоду и гибкая конфигурация для террас и залов.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Изысканный дизайн и уют</li>
        <li>Комфорт круглый год</li>
        <li>Установка на улице и внутри</li>
        <li>Освещение/отопление/вентиляция</li>
        <li>Маркетинговый эффект и узнаваемость</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Модели под любые задачи</li>
        <li>Прочные, долговечные материалы</li>
        <li>Защита от солнца/дождя/ветра</li>
        <li>Доступные цены</li>
        <li>Профконсультации и помощь с установкой</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Оставьте заявку — подберём оптимальную «Пагоду» под ваш формат.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шатры «Пагода»</span>
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
            <span className="text-[#527dc5]">Шатры «Пагода»</span>
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