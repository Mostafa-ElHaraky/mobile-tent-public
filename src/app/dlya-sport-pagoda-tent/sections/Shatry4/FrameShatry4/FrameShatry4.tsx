'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатры «Пагода» для спорта
      </h3>

      <p className="font-medium text-lg leading-6">
        Спортивные шатры «Пагода» — оптимальное решение для создания комфортных условий на
        спортивных мероприятиях. Прочные конструкции защищают участников и зрителей от солнца,
        ветра и дождя. Их стильный вид и лёгкий монтаж делают их востребованными для турниров,
        соревнований и массовых событий на открытых площадках.
      </p>

      <p className="font-medium text-lg leading-6">
        Шатры соответствуют требованиям спортивных событий: долговечные материалы, продуманный
        каркас, высокая устойчивость. Это выгодный выбор для организаторов, стремящихся создать
        безопасное и удобное пространство.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где применяются шатры «Пагода»:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Зоны отдыха и восстановления спортсменов</li>
        <li>Места регистрации участников</li>
        <li>Укрытия для зрителей и гостей</li>
        <li>Элемент брендирования и оформления мероприятия</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <p className="font-medium text-lg leading-6">
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает шатры «Пагода» для
        аренды и покупки по выгодным ценам. Мы предоставляем конструкции для любых спортивных
        мероприятий, обеспечиваем гибкие условия сотрудничества и высокое качество продукции.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Хотите купить шатры «Пагода» для спорта? Свяжитесь с нами — мы подберём решение под ваши
        задачи и обеспечим комфорт участников и зрителей.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры «Пагода» для спорта
      </h3>
      <p className="font-medium text-sm leading-5">
        Стильные и прочные шатры для защиты от солнца, ветра и дождя. Идеальны для спортивных турниров
        и массовых мероприятий.
      </p>

      <h4 className="font-semibold text-base leading-5">Применение:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Зоны отдыха спортсменов</li>
        <li>Регистрация участников</li>
        <li>Укрытия для зрителей</li>
        <li>Брендирование под стиль события</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Продажа и аренда шатров</li>
        <li>Качество и устойчивость</li>
        <li>Гибкие условия сотрудничества</li>
        <li>Доступные цены</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Свяжитесь с MOBILE TENT — подберём шатры «Пагода» для ваших спортивных мероприятий.
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
            <span className="text-[#527dc5]">Шатры «Пагода»</span>
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