'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight text-[#232c42]">
            Каркасные ангары <span className="text-[#527dc5]">MOBILE TENT</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать подробнее
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Каркасные ангары MOBILE TENT представляют собой оптимальное решение для тех, кто ищет
              надежные и эффективные по стоимости сооружения.
            </p>

            <h3 className="font-semibold text-2xl">Ключевые преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Экономия затрат:</b> высокое качество по разумным ценам — идеальный выбор для складов,
                производства и других коммерческих задач.
              </li>
              <li>
                <b>Простота и быстрота монтажа:</b> опытные специалисты MOBILE TENT обеспечивают быстрый
                монтаж, сокращая сроки и стоимость строительства.
              </li>
              <li>
                <b>Высокая мобильность и транспортируемость:</b> легкая и компактная конструкция легко
                демонтируется и перевозится при смене площадки.
              </li>
              <li>
                <b>Оптимальное использование пространства:</b> минимум опор — максимум полезной площади
                для работы и хранения.
              </li>
              <li>
                <b>Надежность и долговечность:</b> качественные материалы и производственные стандарты
                обеспечивают стойкость к погодным и физическим воздействиям.
              </li>
            </ul>

            <h3 className="font-semibold text-2xl">
              Где применяются шатровые ангары с каркасом?
            </h3>
            <p>
              Благодаря универсальности, мобильности и легкости установки каркасные шатровые ангары
              широко используются в разных сферах:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Промышленность и производство:</b> временные производственные зоны и склады для товаров,
                сырья и оборудования.
              </li>
              <li>
                <b>Сельское хозяйство:</b> хранение сельхозтехники, урожая и материалов.
              </li>
              <li>
                <b>Торговля и ярмарки:</b> временные торговые точки и ярмарочные павильоны.
              </li>
              <li>
                <b>Спортивные мероприятия:</b> временные площадки для тренировок и соревнований.
              </li>
              <li>
                <b>Мероприятия и выставки:</b> павильоны для экспозиций, фестивалей и концертов.
              </li>
              <li>
                <b>Военные нужды:</b> склады оборудования, командные и медицинские пункты.
              </li>
              <li>
                <b>Строительство:</b> размещение персонала, инструментов и стройматериалов на площадке.
              </li>
              <li>
                <b>События и развлечения:</b> крытые пространства для гостей на массовых мероприятиях.
              </li>
            </ul>

            <h3 className="font-semibold text-2xl">
              Где купить каркасные ангары под ключ?
            </h3>
            <p>
              В поиске надежных и качественных каркасных ангаров? Обратитесь в <b>MOBILE TENT</b> — это
              идеальное место для приобретения:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Инновационные металлоконструкции:</b> передовые технологии и тщательно продуманные
                узлы обеспечивают прочность и долговечность.
              </li>
              <li>
                <b>Каркасные арочные ангары:</b> эффективное использование пространства и устойчивость к
                погодным условиям — гармония эстетики и функциональности.
              </li>
              <li>
                <b>Быстровозводимые тентовые ангары:</b> оперативная сборка и демонтаж для максимальной
                гибкости в использовании площади.
              </li>
              <li>
                <b>Проекты под ключ:</b> консультация, проектирование, производство и монтаж с учетом
                ваших требований.
              </li>
              <li>
                <b>Гибкие цены:</b> выгодные условия при неизменно высоком качестве.
              </li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                MOBILE TENT — надежные каркасные ангары под ваши задачи: быстро, выгодно и надолго.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Каркасные ангары MOBILE TENT
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Каркасные ангары — надежное и экономичное решение для складов, производства и мероприятий.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Разумная стоимость и качество</li>
              <li>Быстрый монтаж и демонтаж</li>
              <li>Мобильность и транспортируемость</li>
              <li>Максимум полезной площади</li>
              <li>Долговечность и надежность</li>
            </ul>

            <h3 className="font-semibold">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Промзоны и склады</li>
              <li>Сельское хозяйство</li>
              <li>Торговля и ярмарки</li>
              <li>Спорт и мероприятия</li>
              <li>Стройплощадки и логистика</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Инновационные металлоконструкции</li>
              <li>Арочные и тентовые решения</li>
              <li>Проекты под ключ</li>
              <li>Гибкие цены</li>
            </ul>

            <p>
              Нужен ангар под ключ? Обращайтесь в <b>MOBILE TENT</b> — подберем решение под ваши задачи.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};