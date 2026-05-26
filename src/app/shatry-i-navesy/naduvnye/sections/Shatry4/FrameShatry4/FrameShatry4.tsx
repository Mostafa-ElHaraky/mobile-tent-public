'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Что такое</span>{" "}
            <span className="text-[#232c42]">надувные шатры?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о надувных шатрах
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Надувной шатер — это инновационная конструкция, представляющая собой временное сооружение,
              которое поддерживается за счет воздушного давления. Основной элемент такого шатра —
              надувной каркас, который наполняется воздухом для создания необходимой формы и жёсткости конструкции.
              Вместо традиционных металлических или деревянных каркасов, надувные шатры используют герметичные
              полиэтиленовые виниловые (ПВХ) тенты.
            </p>

            <h3 className="font-semibold text-2xl">Важные характеристики надувных шатров:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Отсутствие фундамента — упрощённая установка.</li>
              <li>Быстрый монтаж за счет надувного каркаса.</li>
              <li>Мобильность и лёгкость транспортировки.</li>
              <li>Устойчивость к погодным условиям благодаря ПВХ.</li>
              <li>Разнообразие форм и размеров.</li>
            </ul>

            <p>
              Надувные шатры применяются для ярмарок, выставок, фестивалей, временных торговых павильонов, кафе и
              множества других целей. Это удобное и эффективное решение для организации пространства под открытым небом.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества надувных шатров MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Для мероприятий:</b> стиль, удобство и комфорт для фестивалей, ярмарок и корпоративов.</li>
              <li><b>Широкий выбор размеров:</b> от малых до больших конструкций.</li>
              <li><b>Доступные цены:</b> оптимальное соотношение цены и качества.</li>
              <li><b>Легкость транспортировки и монтажа:</b> быстрый монтаж без лишних трудозатрат.</li>
              <li><b>Высококачественные материалы:</b> прочный ПВХ, долговечность и устойчивость.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Этапы сотрудничества с MOBILE TENT</h3>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Консультация и заявка.</li>
              <li>Индивидуальный проект.</li>
              <li>Оценка и согласование.</li>
              <li>Оформление договора.</li>
              <li>Производство.</li>
              <li>Брендирование (по желанию).</li>
              <li>Доставка и монтаж.</li>
              <li>Техническое обслуживание.</li>
              <li>Послепродажная поддержка.</li>
              <li>Успешное сотрудничество.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                MOBILE TENT — это не просто место, где можно купить надувные шатры. Это ваш ключ к созданию
                уникальных событий. Доверьтесь нам — и ваши идеи станут реальностью!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Надувные шатры
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Инновационные конструкции с надувным каркасом из ПВХ. Быстро собираются, устойчивы к погоде и удобны
              для транспортировки.
            </p>

            <h3 className="font-semibold">Характеристики</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Нет фундамента</li>
              <li>Быстрый монтаж</li>
              <li>Мобильность</li>
              <li>Прочность и долговечность</li>
              <li>Разные размеры и формы</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Для мероприятий любого масштаба</li>
              <li>Большой выбор размеров</li>
              <li>Доступные цены</li>
              <li>Легкий монтаж и перевозка</li>
              <li>Прочные материалы (ПВХ)</li>
              <li>Брендирование по заказу</li>
              <li>Техническая поддержка</li>
            </ul>

            <h3 className="font-semibold">Этапы сотрудничества</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Консультация</li>
              <li>Проектирование</li>
              <li>Оценка и согласование</li>
              <li>Договор</li>
              <li>Производство</li>
              <li>Доставка и монтаж</li>
              <li>Обслуживание</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};
