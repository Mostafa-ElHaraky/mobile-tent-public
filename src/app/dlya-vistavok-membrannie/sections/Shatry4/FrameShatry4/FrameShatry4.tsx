'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Для выставок, рекламных и промоакций — Мембранные шатры
      </h3>
      <p className="font-medium text-lg leading-6">
        Мембранные шатры для выставок – это современное решение для создания уникального и 
        функционального пространства. Они привлекают внимание дизайном и обеспечивают высокую надёжность, 
        необходимую для успешного проведения мероприятий. Если цель – выделить бренд и создать комфортную атмосферу, 
        мембранные шатры станут идеальным выбором.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества мембранных шатров</h4>
      <p className="font-medium text-lg leading-6">
        Главный плюс – эстетика. Плавные линии и современные формы выгодно выделяют их на фоне традиционных павильонов. 
        Но дизайн – не единственное достоинство:
      </p>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Прочность и устойчивость к ветру, дождю и солнцу</li>
        <li>Быстрый монтаж и демонтаж</li>
        <li>Возможность адаптации под разные масштабы событий</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        MOBILE TENT предлагает широкий выбор моделей — от компактных для корпоративов до крупных выставочных решений.
      </p>

      <h4 className="font-semibold text-xl leading-6">Как выбрать шатёр?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Определите размеры и форму под масштаб мероприятия</li>
        <li>Проверьте качество материалов — долговечные мембранные ткани</li>
        <li>Выбирайте надёжного производителя</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Покупка и аренда</h4>
      <p className="font-medium text-lg leading-6">
        Покупка мембранного шатра — инвестиция на годы, выгодная для регулярных мероприятий.  
        Аренда — оптимальный вариант для разовых событий: без затрат на хранение и обслуживание, с монтажом от специалистов MOBILE TENT.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему выбирают MOBILE TENT?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Индивидуальный подход и подбор оптимального решения</li>
        <li>Широкий выбор моделей и размеров</li>
        <li>Конкурентные цены на покупку и аренду</li>
        <li>Надёжность и качество продукции</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Мембранные шатры от <span className="font-semibold">MOBILE TENT</span> — это сочетание дизайна, прочности и удобства.  
        Купите или арендуйте шатёр уже сегодня и сделайте ваше мероприятие незабываемым!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Мембранные шатры для выставок
      </h3>
      <p className="font-medium text-sm leading-5">
        Современные конструкции для выставок и промоакций. 
        Отличаются стильным дизайном, прочностью и защитой от непогоды.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Эстетичный внешний вид</li>
        <li>Прочность и долговечность</li>
        <li>Быстрая установка</li>
        <li>Аренда и покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> доступны шатры разных размеров. 
        Покупка для регулярных мероприятий, аренда — для разовых.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите мембранный шатёр прямо сейчас и выделите ваш бренд!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Мембранные шатры</span>
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
            <span className="text-[#527dc5]">Мембранные шатры</span>
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