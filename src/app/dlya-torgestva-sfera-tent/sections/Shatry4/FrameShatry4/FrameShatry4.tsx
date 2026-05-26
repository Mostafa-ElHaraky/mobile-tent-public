'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Сферические шатры для праздников
      </h3>
      <p className="font-medium text-lg leading-6">
        Сферические шатры для праздников — это стильные и функциональные конструкции, подходящие для мероприятий на открытом воздухе. 
        Они привлекают дизайном и создают комфорт при любых погодных условиях. Компания <span className="font-semibold">MOBILE TENT</span> предлагает купить сферические шатры для торжеств или взять их в аренду, что делает такие шатры доступными для самых разных событий.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества сферических шатров</h4>
      <p className="font-medium text-lg leading-6">
        Уникальная форма придаёт им высокую устойчивость к погодным изменениям. 
        Купить сферические шатры для торжеств — значит выбрать конструкцию, подходящую для всех сезонов: шатры можно оснастить отоплением для зимы и кондиционерами для лета. 
        Это делает их удобными для свадеб, юбилеев, корпоративных мероприятий и выставок.
      </p>

      <p className="font-medium text-lg leading-6">
        Сферические шатры подходят как для частных, так и для корпоративных мероприятий. 
        Они гармонично впишутся в любую обстановку, создавая стильное и уютное пространство. 
        Аренда сферических шатров у <span className="font-semibold">MOBILE TENT</span> помогает провести торжество с минимальными затратами. 
        Мы предлагаем шатры разных размеров, что позволяет легко подобрать вариант под любое событие.
      </p>

      <h4 className="font-semibold text-xl leading-6">Купить сферические шатры для торжеств в MOBILE TENT</h4>
      <p className="font-medium text-lg leading-6">
        Компания <span className="font-semibold">MOBILE TENT</span> предоставляет качественные сферические шатры, выполненные из прочных и безопасных материалов. 
        Мы предлагаем аренду и покупку шатров по доступным ценам, помогая эффективно использовать бюджет. 
        Наши специалисты помогут подобрать нужный шатёр и проконсультируют по всем вопросам. 
        Обращайтесь, чтобы узнать больше и заказать сферический шатёр для праздника!
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сделайте ваш праздник незабываемым — выберите сферический шатёр в <span className="font-semibold">MOBILE TENT</span> прямо сейчас!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Сферические шатры для праздников
      </h3>
      <p className="font-medium text-sm leading-5">
        Стильные и надёжные конструкции для мероприятий на открытом воздухе. 
        Подходят для свадеб, юбилеев, корпоративов и выставок.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Устойчивость к погоде</li>
        <li>Использование в любое время года</li>
        <li>Возможность отопления и кондиционирования</li>
        <li>Аренда и покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает сферические шатры разных размеров. 
        Доступны аренда и покупка по выгодным условиям.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите сферический шатёр для вашего торжества уже сегодня!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Сферические шатры</span>
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
            <span className="text-[#527dc5]">Сферические шатры</span>
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