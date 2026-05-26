'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Гексагональный шатер для выставки
      </h3>
      <p className="font-medium text-lg leading-6">
        Гексагональный шатер – это уникальная конструкция в форме шестиугольника, 
        созданная для временных, но функциональных и привлекательных пространств. 
        Он идеально подходит для выставок, ярмарок, презентаций и других событий.
      </p>

      <h4 className="font-semibold text-xl leading-6">Устройство шатра</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Прочный каркас из металла или алюминия.</li>
        <li>Покрытие из высококачественного тента, защищающего от непогоды.</li>
        <li>Надёжность, долговечность и простота сборки/разборки.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Благодаря шестиугольной форме шатры обеспечивают больше полезной площади, чем традиционные конструкции.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где применяются</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Выставки и ярмарки</li>
        <li>Презентации и показы</li>
        <li>Корпоративные мероприятия</li>
        <li>Свадьбы и частные торжества</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Гексагональные шатры отлично подходят для экспозиций, переговорных зон и лаунж-пространств. 
        Они создают уникальную атмосферу и оставляют незабываемые впечатления у гостей.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Просторность: больше полезной площади.</li>
        <li>Устойчивость к ветровым нагрузкам.</li>
        <li>Эстетичный внешний вид и современный дизайн.</li>
        <li>Лёгкий монтаж и демонтаж.</li>
        <li>Многофункциональность и адаптивность.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Купить гексагональный шатер</h4>
      <p className="font-medium text-lg leading-6">
        На <span className="font-semibold">MOBILE TENT</span> вы найдёте широкий ассортимент гексагональных шатров 
        по доступным ценам. Мы предлагаем конструкции разных размеров и дизайнов, а также услуги аренды.
      </p>

      <p className="font-medium text-lg leading-6">
        Аренда — лучшее решение для разовых мероприятий: доставка, монтаж и демонтаж включены. 
        Покупка выгодна для регулярных событий: шатёр можно использовать многократно, адаптировать под свои задачи и персонализировать.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества покупки</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Экономия на аренде при регулярном использовании.</li>
        <li>Гибкость и независимость в эксплуатации.</li>
        <li>Персонализация под стиль мероприятия.</li>
        <li>Инвестиция в долгосрочную перспективу.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сделайте ваше мероприятие успешным и незабываемым — купите или арендуйте гексагональный шатер в 
        <span className="font-semibold"> MOBILE TENT</span> уже сегодня! Мы предлагаем быстрый сервис и профессиональную помощь.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Гексагональный шатер для выставки
      </h3>
      <p className="font-medium text-sm leading-5">
        Шатры шестиугольной формы — больше пространства, современный вид и защита от непогоды. 
        Отличный выбор для выставок, ярмарок, корпоративов и свадеб.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Просторность и устойчивость</li>
        <li>Стильный внешний вид</li>
        <li>Лёгкая установка</li>
        <li>Аренда и покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> доступны гексагональные шатры разных размеров. 
        Доступна покупка и аренда под любые мероприятия.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите гексагональный шатер прямо сейчас и сделайте событие незабываемым!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Гексагональные шатры</span>
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
            <span className="text-[#527dc5]">Гексагональные шатры</span>
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