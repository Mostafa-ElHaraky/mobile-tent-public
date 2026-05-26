'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатёр звезда для выставки
      </h3>
      <p className="font-medium text-lg leading-6">
        Для мероприятий на открытом воздухе шатёр звезда становится незаменимым элементом. 
        Его уникальная конструкция привлекает внимание и обеспечивает комфорт для посетителей. 
        Купив шатёр звезда для выставки, вы получите центральный элемент стенда, создающий запоминающийся образ компании. 
        Устойчивость, долговечность и стильный дизайн делают такие шатры оптимальным выбором для выставочных мероприятий.
      </p>

      <h4 className="font-semibold text-xl leading-6">Конструкция шатра звезда</h4>
      <p className="font-medium text-lg leading-6">
        Шатёр состоит из центральной мачты и радиальных креплений, формирующих купол в форме звезды. 
        Такая форма эффектна визуально и рационально использует пространство. 
        Конструкция обеспечивает защиту от солнца и осадков и устойчива даже при сильном ветре. 
        При этом шатёр легко устанавливается и демонтируется, что важно для организаторов выставок.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где можно использовать?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Выставки и презентации</li>
        <li>Корпоративные мероприятия</li>
        <li>Фестивали и ярмарки</li>
        <li>Зоны отдыха и VIP-пространства</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Если шатёр нужен разово, возможна аренда. 
        <span className="font-semibold"> MOBILE TENT</span> предлагает гибкие условия аренды и покупки.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Широкий ассортимент шатров звезда</li>
        <li>Конкурентные цены и гибкие условия</li>
        <li>Прочные и надёжные конструкции</li>
        <li>Консультации и помощь специалистов</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Купите шатёр звезда в <span className="font-semibold">MOBILE TENT</span> и получите стильное и надёжное решение.  
        Мы гарантируем лучшее качество и сервис. Свяжитесь с нами, чтобы обсудить детали и оформить заказ уже сегодня!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры звезда для выставок
      </h3>
      <p className="font-medium text-sm leading-5">
        Уникальная форма, надёжность и быстрый монтаж. 
        Отличное решение для выставок, фестивалей и корпоративных мероприятий.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Эффектный дизайн</li>
        <li>Защита от солнца и дождя</li>
        <li>Устойчивость при ветре</li>
        <li>Аренда или покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> вы найдёте шатры звезда разных размеров и комплектаций.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр звезда прямо сейчас и сделайте выставку незабываемой!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шатры звезда</span>
            <span className="text-[#232c42]"> для выставок</span>
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
            <span className="text-[#527dc5]">Шатры звезда</span>
            <span className="text-[#232c42]"> для выставок</span>
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