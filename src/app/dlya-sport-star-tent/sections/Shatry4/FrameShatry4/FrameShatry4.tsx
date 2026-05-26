'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатры «Звезда» спортивные для мероприятий на открытом воздухе
      </h3>

      <p className="font-medium text-lg leading-6">
        Шатры «Звезда» — изысканные конструкции в форме звезды, объединяющие элегантный дизайн
        и функциональность. Они создают неповторимое пространство и подходят для турниров,
        тренировок, корпоративных событий, выставок и свадеб — везде, где важны стиль и комфорт.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где применяются:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Спортивные турниры и соревнования на открытом воздухе</li>
        <li>Временные спортивные базы и зоны восстановления</li>
        <li>Зоны отдыха для спортсменов и зрителей</li>
        <li>Регистрация участников, фуд-корты, инфо-точки</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества шатров «Звезда»:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Эстетика и оригинальность:</span> уникальная форма — центр притяжения события.</li>
        <li><span className="font-semibold">Удобство и комфорт:</span> просторная внутренняя зона для отдыха, сцен, инвентаря.</li>
        <li><span className="font-semibold">Защита от погоды:</span> прочные материалы и устойчивость к дождю, ветру и солнцу.</li>
        <li><span className="font-semibold">Универсальность:</span> павильоны, лаунжи, сцены — под любые сценарии.</li>
        <li><span className="font-semibold">Индивидуальность:</span> брендирование под фирменный стиль и спонсоров.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Качество и надёжность:</span> проверенные материалы и технологии, долгий срок службы.</li>
        <li><span className="font-semibold">Индивидуальный подход:</span> размеры, цвета, комплектация — под ваши требования.</li>
        <li><span className="font-semibold">Большой ассортимент:</span> модели и дизайны на любой формат события.</li>
        <li><span className="font-semibold">Опыт и профессионализм:</span> многолетняя экспертиза производства и сервиса.</li>
        <li><span className="font-semibold">Комплексный сервис:</span> консультация, проект, монтаж/демонтаж и поддержка.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Шатры «Звезда» от MOBILE TENT — идеальное решение для спортивных мероприятий на открытом воздухе.
        Свяжитесь с нами за консультацией и подбором оптимальной модели — сделаем ваше событие незабываемым.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры «Звезда» для спорта
      </h3>
      <p className="font-medium text-sm leading-5">
        Эффектный дизайн + функциональность: комфортные зоны для турниров, тренировок и зрителей.
      </p>

      <h4 className="font-semibold text-base leading-5">Где применяются:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Соревнования и турниры</li>
        <li>Временные базы и зоны отдыха</li>
        <li>Пункты регистрации и питания</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Уникальная форма и вау-эффект</li>
        <li>Простор и комфорт внутри</li>
        <li>Защита от солнца, ветра, дождя</li>
        <li>Брендирование под стиль события</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Качество и долговечность</li>
        <li>Индивидуальные размеры и комплектация</li>
        <li>Ассортимент моделей</li>
        <li>Проект, монтаж и сервис</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Нужен шатёр «Звезда»? Оставьте заявку — подберём лучшее решение под ваш формат.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шатры «Звезда»</span>
            <span className="text-[#232c42]"> для спорта</span>
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
            <span className="text-[#527dc5]">Шатры «Звезда»</span>
            <span className="text-[#232c42]"> для спорта</span>
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