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
            <span className="text-[#232c42]">шестигранные шатры?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о шестигранных шатрах
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Шестигранные шатры являются популярным выбором для создания комфортных и стильных пространств на открытом воздухе.
              Их уникальная форма и многофункциональность делают их идеальным решением для широкого спектра событий и мероприятий.
            </p>

            <h3 className="font-semibold text-2xl">Основные преимущества шестигранных шатров</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Эстетика и стиль:</b> элегантная форма добавляет шарма любому мероприятию.</li>
              <li><b>Защита от погодных условий:</b> надежное укрытие от солнца, дождя и ветра.</li>
              <li><b>Многофункциональность:</b> свадьбы, корпоративы, выставки, ярмарки, фестивали и др.</li>
              <li><b>Увеличение вместимости:</b> расширение посадочных зон ресторанов и кафе.</li>
              <li><b>Брендирование и реклама:</b> нанесение логотипов и рекламных сообщений.</li>
              <li><b>Гибкость в установке:</b> лёгкий монтаж и демонтаж.</li>
              <li><b>Индивидуальный дизайн:</b> кастомизация под стиль мероприятия или бренда.</li>
              <li><b>Вариативность размеров:</b> разные форматы для любых задач.</li>
              <li><b>Легкость транспортировки и хранения:</b> компактная перевозка и хранение.</li>
              <li><b>Защита от ультрафиолета:</b> специальные покрытия для комфорта гостей.</li>
              <li><b>Совмещение с другими конструкциями:</b> интеграция со сценами, мебелью и декором.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                Шестигранные шатры — это стильное, функциональное и универсальное решение для создания уютных и привлекательных пространств на открытом воздухе.
              </p>
            </div>

            <h3 className="font-semibold text-2xl">Где купить шестигранные шатры?</h3>
            <p>
              Мы предлагаем широкий выбор высококачественных шестигранных шатров, идеально подходящих для различных мероприятий и нужд.
            </p>

            <h3 className="font-semibold text-2xl">Почему стоит выбрать шестигранные тенты от MOBILE TENT?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Качество и надёжность:</b> долговечные материалы и защита от погодных условий.</li>
              <li><b>Индивидуальный подход:</b> выбор цвета, размера и дизайна.</li>
              <li><b>Быстрая доставка и монтаж:</b> профессиональная установка на месте.</li>
              <li><b>Широкий выбор размеров:</b> под любые объёмы мероприятий.</li>
              <li><b>Привлекательная цена:</b> оптимальное сочетание стоимости и качества.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                Не упустите возможность приобрести качественные шестигранные тенты от MOBILE TENT для вашего следующего мероприятия!
                Свяжитесь с нами прямо сейчас и сделайте его незабываемым.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Шестигранные шатры
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Уникальная форма, элегантный дизайн и многофункциональность делают шестигранные шатры идеальными для мероприятий любого формата.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Стиль и защита от непогоды</li>
              <li>Использование для свадеб, корпоративов, выставок</li>
              <li>Увеличение вместимости площадок</li>
              <li>Возможность брендирования</li>
              <li>Гибкая установка и индивидуальный дизайн</li>
              <li>Разные размеры и лёгкая транспортировка</li>
              <li>Защита от ультрафиолета</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Надёжные материалы и долговечность</li>
              <li>Индивидуальный подход к заказу</li>
              <li>Быстрая доставка и монтаж</li>
              <li>Широкий выбор размеров</li>
              <li>Привлекательная цена</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
