'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатры пагоды для выставок
      </h3>
      <p className="font-medium text-lg leading-6">
        Шатры пагоды для выставок — это элегантные и функциональные решения, 
        сочетающие стиль и практичность. Их уникальная форма привлекает внимание, 
        а высокая устойчивость к погодным условиям обеспечивает комфорт и безопасность участников. 
        Такие шатры легко монтируются и надёжно защищают даже при сильном ветре или дожде.
      </p>

      <h4 className="font-semibold text-xl leading-6">Как выбрать шатёр пагоду?</h4>
      <p className="font-medium text-lg leading-6">
        Выбор зависит от формата мероприятия и числа гостей. 
        Для крупных событий выбирайте более просторные модели. 
        Важный аспект — возможность брендирования: нанесение логотипов и корпоративных цветов повышает узнаваемость бренда.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где применяются шатры пагоды</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Выставки и ярмарки</li>
        <li>Корпоративные мероприятия</li>
        <li>Презентации и промо-акции</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Интерьер шатра предоставляет достаточно места для экспонатов и оборудования, 
        а высокая крыша создаёт простор и ощущение свободы. 
        Эти характеристики делают шатры пагоды незаменимыми для успешных выставок.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT?</h4>
      <p className="font-medium text-lg leading-6">
        При одноразовых мероприятиях аренда выгоднее. 
        Но если вы часто проводите выставки, покупка шатра становится более рациональной и экономичной. 
        Она позволяет контролировать дизайн и комплектацию, а также использовать шатёр многократно.
      </p>

      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Высокая прочность и долговечность</li>
        <li>Эстетичный внешний вид</li>
        <li>Разные размеры и комплектации</li>
        <li>Конкурентные цены</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Шатры пагоды от <span className="font-semibold">MOBILE TENT</span> — это гарантия качества и стиля.  
        Купите или арендуйте шатёр сегодня и подчеркните престиж вашего мероприятия!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры пагоды для выставок
      </h3>
      <p className="font-medium text-sm leading-5">
        Элегантные шатры, устойчивые к погоде, с уникальной формой и возможностью брендирования. 
        Отличный выбор для выставок и корпоративных мероприятий.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Надёжность и защита</li>
        <li>Эстетичный дизайн</li>
        <li>Лёгкий монтаж</li>
        <li>Аренда и покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> вы найдёте шатры пагоды разных размеров и конфигураций. 
        Подходят для выставок, ярмарок и промо-акций.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр пагоду уже сегодня и сделайте мероприятие престижным!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шатры пагоды</span>
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
            <span className="text-[#527dc5]">Шатры пагоды</span>
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