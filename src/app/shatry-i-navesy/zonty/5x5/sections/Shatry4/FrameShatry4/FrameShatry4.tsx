'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Уличные зонты 5×5 м</span>{" "}
            <span className="text-[#232c42]">— стиль и комфорт для открытых террас</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать цену и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Уличные зонты <b>5×5 метров</b> — элегантное и функциональное решение для создания комфортных открытых пространств
              в кафе и ресторанах. Изготовленные из высококачественных материалов, они устойчивы к погодным условиям и добавляют
              вашему заведению шарм и стиль.
            </p>

            <h3 className="font-semibold text-2xl">Почему это выгодно</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Большая площадь:</b> просторная тень, больше посадочных мест, эффективное использование территории.</li>
              <li><b>Защита от погоды:</b> комфорт при солнце, дожде и ветре.</li>
              <li><b>Стойкость и долговечность:</b> прочные материалы и надёжный каркас снижают расходы на замену/ремонт.</li>
              <li><b>Эстетика и дизайн:</b> цвет и стиль под вашу концепцию, создают приглашающую атмосферу.</li>
              <li><b>Вариативность использования:</b> банкеты, свадьбы, корпоративы и другие open-air события.</li>
              <li><b>Опции:</b> встроенный свет, обогреватели, системы охлаждения и др. — комфорт в любое время года.</li>
            </ul>

            <p>
              Такая конструкция помогает увеличить посадку и привлечь новых гостей — будь это кафе, ресторан или бар.
            </p>

            <h3 className="font-semibold text-2xl">Где купить уличные зонты 5×5 м?</h3>
            <p>
              Покупка в <b>MOBILE TENT</b> — это преимущества на каждом этапе:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Широкий ассортимент:</b> множество моделей 5×5 под разные задачи и стили.</li>
              <li><b>Качество материалов и конструкции:</b> долговечные ткани и устойчивый каркас.</li>
              <li><b>Дополнительный функционал:</b> свет, обогрев, охлаждение и другие опции.</li>
              <li><b>Индивидуальный дизайн:</b> адаптация под бренд и архитектуру площадки.</li>
              <li><b>Консультации и сервис:</b> профессиональный подбор, установка и постпродажная поддержка.</li>
              <li><b>Доступные цены и гибкая оплата:</b> конкурентные условия для бизнеса любого масштаба.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">
                Создайте уютные и стильные открытые зоны с зонтами <b>5×5 м</b> от MOBILE TENT — комфорт гостей и выгодная посадка.
              </p>
              <p className="text-[#527dc5] font-semibold">Оставьте заявку — подберём конфигурацию, рассчитаем смету и сроки.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Уличные зонты 5×5 м — для кафе и ресторанов
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и подбор
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Большая тень, защита от погоды и стильная терраса. Прочные материалы, удобный сервис и опции — свет, обогрев, охлаждение.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Площадь покрытия 25 м²</li>
              <li>Надёжность и долговечность</li>
              <li>Цвета и дизайн под бренд</li>
              <li>Опции: свет/обогрев/охлаждение</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Большой выбор и кастомизация</li>
              <li>Консультации и монтаж</li>
              <li>Гибкие цены и оплата</li>
              <li>Поддержка после покупки</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Оставьте заявку — подготовим смету и сроки поставки.</p>
              <p className="text-[#527dc5] font-semibold">MOBILE TENT — практично, стильно, надёжно.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};