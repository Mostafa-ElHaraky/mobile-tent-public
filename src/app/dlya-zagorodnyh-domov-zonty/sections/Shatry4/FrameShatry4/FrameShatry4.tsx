'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Садовые зонты и тенты для дачи
      </h3>

      <p className="font-medium text-lg leading-6">
        Чтобы сделать дачу удобной и комфортной, важно продумать каждую деталь. 
        В жару защитят от солнца, а в непогоду от дождя — садовые зонты и тенты. 
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает большой выбор решений, 
        которые создадут приятную атмосферу на участке.
      </p>

      <h4 className="font-semibold text-xl leading-6">Какими бывают зонты?</h4>
      <p className="font-medium text-lg leading-6">
        Садовые зонты бывают разных форм — круглые, квадратные — и делятся по типу конструкции:
      </p>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Стандартные:</span> классическая форма, удобные и доступные.</li>
        <li><span className="font-semibold">Телескопические:</span> легко открываются и закрываются без перемещения.</li>
        <li><span className="font-semibold">Консольные:</span> с боковой опорой, освобождающей полезное пространство.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Материалы и дизайн</h4>
      <p className="font-medium text-lg leading-6">
        Тенты зонтов изготавливаются из <span className="font-semibold">ПВХ-ткани</span>, устойчивой к ультрафиолету, 
        прочной и долговечной. Каркас выполняется из металла, стойкого к коррозии. 
        Цветовая гамма — самая разнообразная, возможен индивидуальный заказ с декором и логотипами.
      </p>

      <h4 className="font-semibold text-xl leading-6">Удобство использования</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Монтаж занимает до 15 минут.</li>
        <li>Зонт легко переставить в другое место.</li>
        <li>Конструкции удобны в эксплуатации и мобильны.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT?</h4>
      <p className="font-medium text-lg leading-6">
        Мы производим качественные тенты и зонты для дачи с использованием современных технологий. 
        При доступной стоимости вы получаете долговечные и стильные конструкции, 
        делающие ваш участок удобным для жизни и отдыха.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Оформите заказ на сайте <span className="font-semibold">MOBILE TENT</span> и создайте уютное место для отдыха уже этим летом!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Садовые зонты и тенты
      </h3>
      <p className="font-medium text-sm leading-5">
        Уют и защита на даче: от солнца и дождя. Быстрая установка, стильный дизайн.
      </p>

      <h4 className="font-semibold text-base leading-5">Виды зонтов:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Стандартные</li>
        <li>Телескопические</li>
        <li>Консольные</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Прочные материалы</li>
        <li>Устойчивость к солнцу и влаге</li>
        <li>Быстрый монтаж</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Купите зонт или тент для дачи в <span className="font-semibold">MOBILE TENT</span> и создайте уют на участке!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Зонты и тенты</span>
            <span className="text-[#232c42]"> для дачи</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать вариант
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Зонты и тенты</span>
            <span className="text-[#232c42]"> для дачи</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать вариант
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};