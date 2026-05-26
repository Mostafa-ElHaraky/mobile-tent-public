'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шестигранные шатры для ресторанов и кафе
      </h3>

      <p className="font-medium text-lg leading-6">
        Шестигранные шатры представляют собой удивительное сочетание эстетики, удобства и
        практичности. С их помощью можно превратить открытую площадку в комфортное и уютное
        место, обеспечивая защиту от погоды и создавая приятную атмосферу для посетителей.
      </p>

      <h4 className="font-semibold text-xl leading-6">Основные преимущества:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Эстетика и стиль:</span> необычная форма делает кафе запоминающимся.</li>
        <li><span className="font-semibold">Защита от погоды:</span> надёжная защита от дождя, солнца и ветра.</li>
        <li><span className="font-semibold">Гибкость использования:</span> лёгкая установка и демонтаж для сезонных площадок.</li>
        <li><span className="font-semibold">Простота в уходе:</span> легко чистятся и обслуживаются, долговечны.</li>
        <li><span className="font-semibold">Рекламный эффект:</span> брендирование привлекает новых клиентов.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Это не просто конструкции, а целый комплекс преимуществ, делающих их идеальным выбором
        для кафе и ресторанов.
      </p>

      <h4 className="font-semibold text-xl leading-6">
        Где купить шестигранные шатры?
      </h4>
      <p className="font-medium text-lg leading-6">
        Обратитесь в <span className="font-semibold">MOBILE TENT</span> — надёжного партнёра по
        производству и поставке высококачественных шестигранных шатров.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Качество и прочность:</span> современные материалы и технологии.</li>
        <li><span className="font-semibold">Индивидуальный подход:</span> конструкция под ваши эскизы и предпочтения.</li>
        <li><span className="font-semibold">Быстрая доставка и монтаж:</span> оперативность в любом регионе.</li>
        <li><span className="font-semibold">Широкий ассортимент:</span> разные модели и размеры для любых задач.</li>
        <li><span className="font-semibold">Привлекательная цена:</span> конкурентоспособная стоимость при высоком качестве.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Создайте уникальное пространство — закажите гексагональные тенты уже сегодня!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шестигранные шатры для ресторанов и кафе
      </h3>
      <p className="font-medium text-sm leading-5">
        Эстетика, удобство и практичность. Защита от погоды и уютная атмосфера для ваших гостей.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Необычная форма и стиль</li>
        <li>Защита от дождя, солнца и ветра</li>
        <li>Лёгкая установка и демонтаж</li>
        <li>Простота ухода и долговечность</li>
        <li>Рекламный эффект и брендирование</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Качественные материалы и технологии</li>
        <li>Индивидуальный подход к заказу</li>
        <li>Быстрая доставка и монтаж</li>
        <li>Разнообразие моделей и размеров</li>
        <li>Доступные цены</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите гексагональные тенты для кафе уже сегодня!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шестигранные шатры</span>
            <span className="text-[#232c42]"> для кафе и ресторанов</span>
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
            <span className="text-[#527dc5]">Шестигранные шатры</span>
            <span className="text-[#232c42]"> для кафе и ресторанов</span>
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