'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Перголы для загородных домов
      </h3>

      <p className="font-medium text-lg leading-6">
        Как выбрать и купить перголу для дома, чтобы создать уютное пространство на участке?
        Пергола — элегантное и функциональное дополнение: защищает от солнца, добавляет уюта
        и делает отдых на свежем воздухе комфортным.
      </p>

      <h4 className="font-semibold text-xl leading-6">Что такое пергола</h4>
      <p className="font-medium text-lg leading-6">
        Пергола — садовая конструкция с вертикальными опорами и перекрытиями для защиты от солнца
        и украшения участка. Её устанавливают на террасах, у бассейна, в кафе, гостиницах и на базах отдыха.
        Конструкцию легко дополнять шторами, растениями и подсветкой.
      </p>

      <h4 className="font-semibold text-xl leading-6">Виды пергол</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Классические:</span> деревянные или металлические каркасы с решётчатыми перекрытиями.</li>
        <li><span className="font-semibold">Автоматизированные:</span> регулируемые ламели или раздвижные тенты.</li>
        <li><span className="font-semibold">Пристенные:</span> у стены дома — создают уютную террасу.</li>
        <li><span className="font-semibold">Отдельно стоящие:</span> в саду или у бассейна — как альтернатива беседке.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества пергол</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Комфортная тень без «утяжеления» пространства.</li>
        <li>Стиль под любой ландшафт — от классики до модерна.</li>
        <li>Устойчивость к жаре, дождю и ветру (современные материалы).</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        Деревянные модели — тёплые и натуральные, но требуют ухода.
        Металлические — прочные и устойчивые к влаге и повреждениям.
      </p>

      <h4 className="font-semibold text-xl leading-6">Особенности монтажа</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Материал:</span> дерево нуждается в уходе; металл устойчив к погоде.</li>
        <li><span className="font-semibold">Размер:</span> зависит от площади зоны отдыха и количества опор.</li>
        <li><span className="font-semibold">Форма:</span> прямоугольная, арочная или сложная конфигурация.</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        Установка возможна самостоятельно или с привлечением специалистов.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему покупать в MOBILE TENT</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Гарантия качества — проверенные материалы и надёжные конструкции.</li>
        <li>Доставка и установка — оперативный монтаж с соблюдением стандартов.</li>
        <li>Индивидуальный подход — проектирование под ваши задачи и бюджет.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Выбирайте перголы для загородных домов в <span className="font-semibold">MOBILE TENT</span> —
        создайте стильное и комфортное пространство для отдыха и мероприятий!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Перголы для загородных домов
      </h3>
      <p className="font-medium text-sm leading-5">
        Пергола создаёт тень и уют на участке. Лёгкая установка, прочные материалы, варианты для террасы,
        сада и у бассейна.
      </p>

      <h4 className="font-semibold text-base leading-5">Виды:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Классические</li>
        <li>Автоматизированные</li>
        <li>Пристенные</li>
        <li>Отдельно стоящие</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Плюсы:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Комфортная тень</li>
        <li>Стильный вид</li>
        <li>Устойчивость к погоде</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> — гарантия качества, доставка и установка, индивидуальные решения.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Подберите перголу под ваш участок — поможем с выбором!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Перголы</span>
            <span className="text-[#232c42]"> для загородных домов</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать перголу
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Перголы</span>
            <span className="text-[#232c42]"> для дома</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать перголу
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};