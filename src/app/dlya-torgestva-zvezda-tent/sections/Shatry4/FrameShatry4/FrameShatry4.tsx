'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шатры звезда для праздников: как выбрать и купить
      </h3>
      <p className="font-medium text-lg leading-6">
        Шатры звезда — современные и элегантные конструкции для мероприятий на свежем воздухе. 
        Уникальная форма в виде звезды с центральной опорой и растяжками обеспечивает устойчивость и стильный внешний вид. 
        Такие шатры защищают от непогоды и становятся украшением любого торжества.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где применяются шатры звезда</h4>
      <p className="font-medium text-lg leading-6">
        Шатры звезда создают комфортное и уютное пространство для любых мероприятий на открытом воздухе. 
        Они подходят для свадеб, корпоративов, юбилеев, выставок и частных вечеринок.
      </p>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Свадьбы и юбилеи:</span> романтическая атмосфера и защита от непогоды.</li>
        <li><span className="font-semibold">Корпоративные мероприятия:</span> конференции, тимбилдинги, презентации.</li>
        <li><span className="font-semibold">Фестивали и ярмарки:</span> зоны отдыха, торговые павильоны, выставочные стенды.</li>
        <li><span className="font-semibold">Частные вечеринки:</span> барбекю, пикники, праздники на природе.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества шатров звезда</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Уникальный дизайн:</span> привлекает внимание и украшает мероприятие.</li>
        <li><span className="font-semibold">Простота установки:</span> быстрый монтаж и демонтаж.</li>
        <li><span className="font-semibold">Устойчивость к погоде:</span> защита от солнца, дождя и ветра.</li>
        <li><span className="font-semibold">Мобильность:</span> использование на любой площадке, удобная транспортировка.</li>
        <li><span className="font-semibold">Вместительность:</span> подходят для мероприятий с большим числом гостей.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Купить шатры звезда для торжеств</h4>
      <p className="font-medium text-lg leading-6">
        На <span className="font-semibold">MOBILE TENT</span> представлен широкий ассортимент шатров звезда разных размеров и конфигураций. 
        Мы предлагаем долговечные и качественные конструкции, которые прослужат долгие годы и создадут незабываемую атмосферу для вашего праздника.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества покупки шатра звезда</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Долговременное использование</li>
        <li>Экономия при регулярных мероприятиях</li>
        <li>Персонализация и украшение под стиль события</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Для разовых мероприятий доступна аренда шатров звезда. Это выгодное решение, позволяющее 
        получить все преимущества конструкции без значительных затрат. Мы предлагаем гибкие условия аренды и индивидуальный подход.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сделайте ваше мероприятие незабываемым — купите или арендуйте шатры звезда в <span className="font-semibold">MOBILE TENT</span>! 
        Наши специалисты помогут подобрать шатёр и ответят на все вопросы.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры звезда для праздников
      </h3>
      <p className="font-medium text-sm leading-5">
        Элегантные шатры уникальной формы, защищающие от солнца, дождя и ветра. 
        Подходят для свадеб, корпоративов, фестивалей и вечеринок.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Стильный дизайн</li>
        <li>Быстрая установка</li>
        <li>Защита от непогоды</li>
        <li>Мобильность и вместительность</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> доступны покупка и аренда шатров звезда разных размеров. 
        Отличное решение для любого торжества!
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатры звезда прямо сейчас — сделайте праздник незабываемым!
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
            <span className="text-[#232c42]"> для праздников</span>
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
            <span className="text-[#232c42]"> для праздников</span>
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