'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Мобильные шатры для спорта: тренировки, соревнования, выездные события
      </h3>

      <p className="font-medium text-lg leading-6">
        Мобильные спортивные шатры — современное и удобное решение для оперативной организации
        площадок и укрытий, независимо от сезона и погоды. Позволяют быстро развернуть
        пространство для занятий спортом и зрительских зон.
      </p>

      <h4 className="font-semibold text-xl leading-6">Главное преимущество — мобильность</h4>
      <p className="font-medium text-lg leading-6">
        Лёгкая установка на разных площадках, быстрый демонтаж и перенос. Идеально для выездных
        мероприятий, временных тренировочных баз и расширения инфраструктуры крупных комплексов.
      </p>

      <h4 className="font-semibold text-xl leading-6">Как выбрать мобильный шатёр</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Прочность и надёжность:</span> качественные материалы и крепёж, стойкость к ветру и дождю.</li>
        <li><span className="font-semibold">Размер и функциональность:</span> габариты под ваши виды спорта; опции вентиляции, освещения, отопления/кондиционирования.</li>
        <li><span className="font-semibold">Бюджет:</span> цена зависит от размеров, материалов, бренда и опций — от базовых до комплексных решений.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Инвестиции в качественный мобильный шатёр окупаются универсальностью и длительным сроком службы.
      </p>

      <h4 className="font-semibold text-xl leading-6">
        Почему спортивные мобильные шатры от производителя MOBILE TENT
      </h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Высокое качество и надёжность:</span> материалы, рассчитанные на суровые погодные условия и интенсивную эксплуатацию.</li>
        <li><span className="font-semibold">Широкий ассортимент:</span> от компактных тренировочных решений до крупных комплексов для турниров.</li>
        <li><span className="font-semibold">Лёгкая сборка и мобильность:</span> быстрый монтаж/демонтаж без сложной техники.</li>
        <li><span className="font-semibold">Индивидуальные проекты:</span> размеры, цвет, брендирование и оснащение под задачу.</li>
        <li><span className="font-semibold">Конкурентные цены:</span> высокий класс исполнения в рамках бюджета.</li>
        <li><span className="font-semibold">Экспертная поддержка:</span> помощь на всех этапах — от подбора до эксплуатации.</li>
        <li><span className="font-semibold">Гарантия и безопасность:</span> соответствие стандартам и сертификаты.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Нужен мобильный спортивный шатёр? Оставьте заявку — подберём оптимальную конфигурацию и сроки поставки.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Мобильные шатры для спорта
      </h3>
      <p className="font-medium text-sm leading-5">
        Быстрый запуск площадок в любую погоду. Подходят для тренировок, турниров и выездных событий.
      </p>

      <h4 className="font-semibold text-base leading-5">Выбор шатра:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Прочность и надёжный крепёж</li>
        <li>Размеры и опции (вентиляция, свет, отопление)</li>
        <li>Бюджет и комплектация</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Материалы для тяжёлой погоды</li>
        <li>Большой выбор типоразмеров</li>
        <li>Быстрый монтаж/демонтаж</li>
        <li>Индивидуальные проекты и брендирование</li>
        <li>Конкурентные цены и гарантия</li>
        <li>Экспертная поддержка</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Оставьте заявку — соберём решение под ваш вид спорта и площадку.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Мобильные шатры</span>
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
            <span className="text-[#527dc5]">Мобильные шатры</span>
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