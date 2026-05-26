'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Для выставок, рекламных и промоакций — Натяжные шатры
      </h3>
      <p className="font-medium text-lg leading-6">
        Планируя участие в выставке, важно выбрать правильное оборудование. 
        Натяжные шатры для выставок — современное решение для создания привлекательного и функционального пространства. 
        Лёгкость монтажа, универсальность и эстетика делают их идеальными для любых мероприятий.
      </p>

      <p className="font-medium text-lg leading-6">
        Натяжные шатры — это каркасные конструкции, обтянутые прочной тканью. 
        Они защищают экспонаты и гостей от непогоды и одновременно служат ярким рекламным носителем. 
        Шатры легко монтируются и демонтируются, что особенно важно для мобильных мероприятий.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где использовать натяжные шатры</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Выставки и презентации</li>
        <li>Промо-акции</li>
        <li>Корпоративные мероприятия</li>
        <li>Фестивали и события на открытом воздухе</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Купив натяжной шатёр, вы сможете использовать его многократно, что делает его выгодным вложением. 
        Для разовых мероприятий доступна аренда, но она ограничивает возможности брендирования.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества от MOBILE TENT</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Прочные и долговечные материалы</li>
        <li>Лёгкая настройка под ваши задачи</li>
        <li>Возможность индивидуального дизайна</li>
        <li>Выбор цвета, размера, формы</li>
        <li>Брендирование: логотипы и фирменный стиль</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Натяжные шатры от <span className="font-semibold">MOBILE TENT</span> помогают создать уникальный выставочный стенд, 
        который привлекает внимание и подчёркивает имидж компании.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Хотите выделиться среди конкурентов? Купите или арендуйте натяжной шатёр в 
        <span className="font-semibold"> MOBILE TENT</span> и сделайте ваше участие в выставке успешным! 
        Наши специалисты помогут выбрать оптимальное решение.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Натяжные шатры для выставок
      </h3>
      <p className="font-medium text-sm leading-5">
        Современные шатры для выставок и промо-акций. Лёгкие, универсальные и брендируемые конструкции, 
        создающие комфорт и стиль.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Быстрая установка</li>
        <li>Прочные материалы</li>
        <li>Индивидуальный дизайн</li>
        <li>Покупка и аренда</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> доступны натяжные шатры разных форм и размеров. 
        Идеально для выставок, акций и корпоративов.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите натяжной шатёр прямо сейчас и выделите ваш бренд!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Натяжные шатры</span>
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
            <span className="text-[#527dc5]">Натяжные шатры</span>
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