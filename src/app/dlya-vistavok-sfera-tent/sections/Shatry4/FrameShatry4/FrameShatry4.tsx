'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Сферические шатры для выставок
      </h3>
      <p className="font-medium text-lg leading-6">
        Сферические шатры для выставок от компании <span className="font-semibold">MOBILE TENT</span> — 
        это надёжные, стильные и функциональные конструкции, которые подходят для любых мероприятий. 
        Уникальная форма обеспечивает устойчивость к погодным условиям, а прочные материалы защищают от ветра и дождя. 
        Отсутствие внутренних опор позволяет максимально эффективно использовать пространство внутри шатра.
      </p>

      <p className="font-medium text-lg leading-6">
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает широкий выбор сферических шатров, 
        доступных для аренды и покупки. Покупка выгодна для регулярных мероприятий, а аренда — для разовых проектов. 
        Сборка и разборка шатров проста и быстра, что экономит время при подготовке к выставке. 
        Конструкции можно брендировать логотипами и рекламными материалами, усиливая эффект от участия.
      </p>

      <h4 className="font-semibold text-xl leading-6">Как заказать сферический шатёр?</h4>
      <p className="font-medium text-lg leading-6">
        Если вам нужно купить или арендовать сферический шатёр для выставки, 
        обратитесь в <span className="font-semibold">MOBILE TENT</span>. 
        Мы предложим оптимальное решение под ваш бюджет и обеспечим профессиональный сервис. 
        Наши шатры сделают ваше мероприятие запоминающимся и комфортным.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Закажите сферический шатёр в <span className="font-semibold">MOBILE TENT</span> уже сегодня — 
        создайте стильное и надёжное пространство для вашей выставки!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Сферические шатры для выставок
      </h3>
      <p className="font-medium text-sm leading-5">
        Надёжные и стильные конструкции от <span className="font-semibold">MOBILE TENT</span>. 
        Устойчивы к погоде, быстро монтируются и брендируются для привлечения внимания.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Устойчивость и надёжность</li>
        <li>Максимум пространства без опор</li>
        <li>Быстрый монтаж</li>
        <li>Аренда и покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        Покупка — для регулярных мероприятий, аренда — для разовых. 
        В <span className="font-semibold">MOBILE TENT</span> вы найдёте оптимальное решение под ваш бюджет.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите сферический шатёр прямо сейчас и сделайте выставку запоминающейся!
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
            <span className="text-[#527dc5]">Сферические шатры</span>
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