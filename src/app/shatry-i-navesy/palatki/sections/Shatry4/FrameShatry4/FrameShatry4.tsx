'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Быстросборные палатки</span>{" "}
            <span className="text-[#232c42]">— просто, удобно и надёжно</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Получить консультацию
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Возможно, вы никогда не считали покупку через интернет-магазин хорошей идеей, но мы готовы убедить вас:
              приобретение быстросборной палатки может быть простым и удачным.
            </p>

            <p>
              Сайт навесов <b>MOBILE TENT</b> предлагает выгодно вложить средства и купить продукт, который радует
              презентабельным внешним видом и долговечностью. Мы работаем только с качественными материалами, ответственно
              относимся к задачам и обеспечиваем индивидуальный подход каждому клиенту.
            </p>

            <h3 className="font-semibold text-2xl">Почему быстросборные палатки — это удобно</h3>
            <p>
              Быстровозводимые тенты — оптимальное решение как для семейного отдыха, так и для продвижения бизнеса. Такие
              накрытия универсальны: особенно популярны в торговле, но при необходимости им всегда можно найти своё,
              более оригинальное применение.
            </p>

            <h3 className="font-semibold text-2xl">Желаете купить быстросборные палатки?</h3>
            <p>
              Мы позаботились о простоте выбора: на сайте — удобный, категоризованный каталог, где вы можете без труда
              отыскать и купить подходящую модель, а также ознакомиться со всем спектром предлагаемых услуг.
            </p>

            <h3 className="font-semibold text-2xl">Интернет-магазин быстросборных палаток</h3>
            <p>
              Быстросборные палатки/шатры/тенты — отличная альтернатива отдыху на природе вне стен душных ресторанов и
              офисов. Они защитят вас и имущество от солнца и непогоды благодаря прочным материалам, используемым в
              производстве. С изделиями <b>MOBILE TENT</b> вы надёжно защищены.
            </p>

            <h3 className="font-semibold text-2xl">Нужна помощь с выбором?</h3>
            <p>
              Наши специалисты с радостью ответят на вопросы и подскажут оптимальное решение по выбору складной
              быстросборной палатки. Покупка навесов в интернет-магазине — выгодно как никогда: приобретая нашу продукцию,
              вы можете быть уверены в её качестве на <b>100%</b>. Обращайтесь — мы обязательно поможем!
            </p>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">Готовы подобрать палатку под вашу задачу</p>
              <p>
                Перейдите в каталог, сравните модели и оставьте заявку — подготовим предложение и поможем с комплектацией.
              </p>
              <p className="text-[#527dc5] font-semibold">MOBILE TENT — надёжность и сервис без компромиссов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Быстросборные палатки — просто и выгодно
          </h2>

        <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и подбор
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Онлайн-покупка может быть простой и удачной. <b>MOBILE TENT</b> — качественные материалы, индивидуальный
              подход и долговечные решения.
            </p>

            <h3 className="font-semibold">Зачем нужны</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Семейный отдых и пикники</li>
              <li>Торговля и промо-акции</li>
              <li>Выездные мероприятия</li>
              <li>Любые нестандартные задачи</li>
            </ul>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Прочные ткани, защита от непогоды</li>
              <li>Быстрый монтаж и компактность</li>
              <li>Каталог с удобной навигацией</li>
              <li>Гарантированное качество</li>
            </ul>

            <h3 className="font-semibold">Нужна помощь?</h3>
            <p>
              Ответим на вопросы и подберём решение под бюджет и задачу. Качество — на 100%.
            </p>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Перейдите в каталог и оставьте заявку.</p>
              <p className="text-[#527dc5] font-semibold">Мы свяжемся и поможем с выбором.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};