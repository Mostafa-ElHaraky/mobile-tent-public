'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатры пагода для загородных домов
      </h3>
      <p className="font-medium text-lg leading-6">
        Шатры пагода – стильные и функциональные конструкции, подходящие для загородных домов, ресторанов и мероприятий. 
        Изящная форма, прочный каркас и защита от непогоды делают их идеальным решением для отдыха и работы на свежем воздухе.
      </p>

      <h4 className="font-semibold text-xl leading-6">Как используются шатры пагода?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Летние террасы и беседки</li>
        <li>Свадьбы и корпоративные площадки</li>
        <li>Открытые кафе и рестораны</li>
        <li>Зоны отдыха в загородных клубах и отелях</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества шатров пагода</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Прочный каркас:</span> алюминий или оцинкованная сталь</li>
        <li><span className="font-semibold">Мобильность:</span> лёгкий монтаж и перенос</li>
        <li><span className="font-semibold">Защита от непогоды:</span> тентовая крыша блокирует дождь и UV</li>
        <li><span className="font-semibold">Стильный внешний вид:</span> заострённая крыша и возможность штор</li>
        <li><span className="font-semibold">Универсальность:</span> круглогодичное использование, опции утепления</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Варианты конструкции и материалы</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Каркас:</span> алюминий (лёгкий), сталь (прочный), дерево (экологичный)</li>
        <li><span className="font-semibold">Покрытие:</span> ПВХ-плёнка или полиэстер</li>
        <li><span className="font-semibold">Размеры:</span> от 9 до 25 м² — на 6–20 человек</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Факторы, влияющие на цену</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Материалы каркаса и покрытия</li>
        <li>Наличие стенок, штор, москитных сеток</li>
        <li>Опции: утепление, освещение</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему Mobile Tent?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Прочные каркасы и долговечные тенты</li>
        <li>Разнообразие моделей и размеров</li>
        <li>Доступные цены и широкий выбор</li>
        <li>Быстрая доставка по всей России</li>
        <li>Гарантия качества и консультации специалистов</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Создайте идеальное место для отдыха уже сегодня!  
        Закажите шатёр пагоду в <span className="font-semibold">Mobile Tent</span> — оставьте заявку или позвоните.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры пагода для дома
      </h3>
      <p className="font-medium text-sm leading-5">
        Стильные шатры с заострённой крышей — защита от дождя и солнца, уютное пространство для отдыха и мероприятий.
      </p>

      <h4 className="font-semibold text-base leading-5">Плюсы:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Прочный каркас (сталь/алюминий)</li>
        <li>Быстрая установка и перенос</li>
        <li>Тент защищает от непогоды</li>
        <li>Эффектный восточный дизайн</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">Mobile Tent</span> широкий выбор шатров пагода, доставка и монтаж по всей России.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр пагоду для загородного дома прямо сейчас!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шатры пагода</span>
            <span className="text-[#232c42]"> для загородных домов</span>
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
            <span className="text-[#527dc5]">Шатры пагода</span>
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