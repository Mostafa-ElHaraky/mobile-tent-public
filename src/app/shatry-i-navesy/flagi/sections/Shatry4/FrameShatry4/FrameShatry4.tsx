'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Рекламные</span>{" "}
            <span className="text-[#232c42]">флаги и паруса</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] 
            text-white font-semibold text-lg"
          >
            Заказать флаг или парус
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <h3 className="font-semibold text-2xl">Флаги</h3>
            <p>
              Если мудрому человеку нужно купить недорого тенты и шатры в интернет-магазине, тогда он знает, 
              что за помощью нужно обращаться именно в <b>MOBILE TENT</b>. У нас самый большой каталог тентов 
              в стране и ряд полезных сопутствующих услуг, экономящих время и средства.
            </p>

            <h3 className="font-semibold text-2xl">Цены на рекламные флаги-паруса</h3>
            <p>
              Приобретая или арендуя тенты от <b>MOBILE TENT</b> для проведения рекламной акции, 
              Вы можете заказать <b>рекламные флаги и паруса</b>. Эта услуга сделает мероприятие ярким, 
              а цена приятно удивит.
            </p>

            <h3 className="font-semibold text-2xl">Рекламные флаги в Краснодаре и других городах</h3>
            <p>
              Представьте, как эффектно развеваются брендированные по Вашему заказу флаги. 
              Такая услуга доступна в Москве, СПб, Краснодаре и по всей России. Мы предлагаем широкий выбор продукции, 
              делая её доступной каждому.
            </p>

            <h3 className="font-semibold text-2xl">Как заказать?</h3>
            <p>
              Всё просто: свяжитесь с менеджерами сегодня или заполните заявку на сайте. 
              С Вами обязательно свяжутся. Сотрудничество с <b>MOBILE TENT</b> — это шаг к успеху, 
              в этом легко убедиться!
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Рекламные флаги и паруса
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] 
            text-white font-semibold text-sm self-center"
          >
            Заказать
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              <b>MOBILE TENT</b> предлагает не только шатры и тенты, но и <b>рекламные флаги и паруса</b>, 
              делающие любое мероприятие ярким и заметным.
            </p>
            <p>
              Заказать изготовление просто: звоните менеджерам или оставьте заявку на сайте. 
              Доставка доступна в Москве, СПб, Краснодаре и по всей России.
            </p>
            <p>
              Сотрудничество с <b>MOBILE TENT</b> — это выгодно и удобно. Убедитесь сами!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};