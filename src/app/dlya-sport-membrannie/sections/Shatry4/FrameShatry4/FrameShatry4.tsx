'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Для спортивно-массовых мероприятий — мембранные шатры
      </h3>

      <p className="font-medium text-lg leading-6">
        Построить постоянный объект дорого и долго. Мембранные шатры объединяют функциональность,
        мобильность и экономичность — идеальны как временное или полупостоянное спортивное
        пространство.
      </p>

      <p className="font-medium text-lg leading-6">
        Мембранные конструкции из прочных эластичных материалов (ПВХ/полимеры) позволяют перекрывать
        большие пролёты без внутренних опор — удобно для игр, соревнований и тренировок с
        беспрепятственным перемещением спортсменов и зрителей.
      </p>

      <h4 className="font-semibold text-xl leading-6">Подбор и стоимость:</h4>
      <p className="font-medium text-lg leading-6">
        Размеры, формы и конфигурации адаптируются под задачи (теннис, футбол и т. д.). Цена зависит
        от габаритов, материалов, технологий и сложности монтажа.
      </p>

      <h4 className="font-semibold text-xl leading-6">Ключевые преимущества:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Быстрый монтаж:</span> считанные дни/недели вместо месяцев строительства.</li>
        <li><span className="font-semibold">Круглогодичность:</span> защита от дождя, ветра и снега — мероприятия в любое время.</li>
        <li><span className="font-semibold">Экономичность:</span> ниже CAPEX и OPEX по сравнению со стационарными зданиями.</li>
        <li><span className="font-semibold">Мобильность:</span> демонтаж и перенос на другую площадку при необходимости.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Высокое качество и долговечность:</span> каркасы и мембраны выдерживают экстремальные температуры, ветер, дождь и снег.</li>
        <li><span className="font-semibold">Быстрая и лёгкая установка:</span> модульная система — оперативный запуск объекта.</li>
        <li><span className="font-semibold">Гибкость и адаптивность:</span> размеры/формы под футбольные поля, корты, площадки; лёгкий перенос.</li>
        <li><span className="font-semibold">Экономическая выгода:</span> ниже, чем строительство; минимальные затраты на обслуживание.</li>
        <li><span className="font-semibold">Современный дизайн:</span> эстетика, которая повышает привлекательность спортивного объекта.</li>
        <li><span className="font-semibold">Поддержка и сервис:</span> монтаж, обслуживание и ремонт; эксперты на связи.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Нужен мембранный спортивный шатёр? Оставьте заявку — подберём оптимальную конфигурацию под ваши виды спорта и сроки.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Мембранные шатры для спорта
      </h3>
      <p className="font-medium text-sm leading-5">
        Быстрый монтаж, большие пролёты без опор, защита в любую погоду — идеальны для тренировок и соревнований.
      </p>

      <h4 className="font-semibold text-base leading-5">Плюсы:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Ставятся за дни/недели</li>
        <li>Круглогодичная эксплуатация</li>
        <li>Экономичнее стационара</li>
        <li>Перенос и повторный монтаж</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Прочные каркасы и мембраны</li>
        <li>Модульная, быстрая сборка</li>
        <li>Размеры и формы под задачи</li>
        <li>Низкие расходы на обслуживание</li>
        <li>Сервис: монтаж, ТО, ремонт</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Оставьте заявку — соберём решение под ваш спорт и площадку.
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
            <span className="text-[#232c42]"> для спорта и мероприятий</span>
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
            <span className="text-[#527dc5]">Мембранные шатры</span>
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