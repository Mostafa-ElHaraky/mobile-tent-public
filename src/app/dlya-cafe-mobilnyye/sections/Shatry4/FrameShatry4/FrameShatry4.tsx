'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Мобильные шатры для ресторанов и кафе
      </h3>

      <p className="font-medium text-lg leading-6">
        Мобильные шатры — инновационное и удобное решение для создания дополнительного
        пространства обслуживания. Благодаря мобильности, универсальности и функциональности
        они востребованы у предпринимателей в сфере общепита.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества мобильных шатров:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Мобильность конструкции:</span> легко перемещаются и устанавливаются в разных локациях — удобно для пиковых часов и спецмероприятий.</li>
        <li><span className="font-semibold">Универсальность:</span> подходят для летних террас, банкетов, свадеб, корпоративов и фестивалей.</li>
        <li><span className="font-semibold">Быстрый монтаж:</span> сборка/разбор без спецнавыков и инструментов — экономия времени и ресурсов.</li>
        <li><span className="font-semibold">Надёжность и безопасность:</span> прочная конструкция и материалы для круглогодичного использования и защиты гостей/персонала.</li>
        <li><span className="font-semibold">Маркетинговый эффект:</span> эффектный внешний вид, фото-локация для соцсетей, приток новых гостей.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        В итоге мобильные шатры — оптимальный способ быстро расширить пространство и улучшить
        комфорт гостей с минимальными издержками и максимальной гибкостью.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где купить мобильные шатры?</h4>
      <p className="font-medium text-lg leading-6">
        Обратитесь в <span className="font-semibold">MOBILE TENT</span>. Мы предлагаем широкий
        выбор прочных и функциональных мобильных шатров для любых форматов кафе и ресторанов.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Высокое качество:</span> долговечные материалы, устойчивые к погоде.</li>
        <li><span className="font-semibold">Разнообразие моделей:</span> подберём оптимальное решение под ваш формат и стиль.</li>
        <li><span className="font-semibold">Доступные цены:</span> конкурентоспособные условия для бизнеса любого масштаба.</li>
        <li><span className="font-semibold">Профессиональный сервис:</span> консультации по выбору и установке, сопровождение.</li>
        <li><span className="font-semibold">Мобильность и удобство:</span> быстрый перенос и монтаж под текущие задачи.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сделайте ваше кафе ещё удобнее и привлекательнее — закажите мобильные шатры в MOBILE TENT уже сегодня!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Мобильные шатры для кафе и ресторанов
      </h3>
      <p className="font-medium text-sm leading-5">
        Быстрое расширение посадки, гибкая конфигурация и защита в любую погоду.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Лёгкий перенос и установка</li>
        <li>Для террас, банкетов и мероприятий</li>
        <li>Быстрый монтаж/демонтаж</li>
        <li>Прочная и безопасная конструкция</li>
        <li>Эффектная «витрина» для соцсетей</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Качественные материалы</li>
        <li>Много моделей и размеров</li>
        <li>Хорошие цены</li>
        <li>Экспертная консультация и помощь с установкой</li>
        <li>Максимальная мобильность</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Оставьте заявку — подберём решение под ваш формат.
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
            <span className="text-[#527dc5]">Мобильные шатры</span>
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