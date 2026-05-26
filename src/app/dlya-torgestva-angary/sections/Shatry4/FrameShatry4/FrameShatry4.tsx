'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight text-[#232c42]">
            Что такое <span className="text-[#527dc5]">арочные ангары?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать подробнее
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Арочные ангары представляют собой быстросборные тентовые сооружения с изогнутым каркасом, который создаёт арочную форму.
              Эти ангары используются для временного хранения и защиты различных материалов, техники, оборудования или других объектов от атмосферных воздействий.
            </p>

            <h3 className="font-semibold text-2xl">Основные характеристики арочных ангаров:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Каркас:</b> изготовлен из прочных материалов (алюминий или сталь), создающих арочную форму.</li>
              <li><b>Покрытие:</b> тентовое покрытие из ПВХ защищает от солнца, дождя, снега и других атмосферных явлений.</li>
              <li><b>Быстросборность:</b> ангары легко собираются и разбираются, удобны для временного использования.</li>
              <li><b>Прочность:</b> устойчивы к ветру и внешним воздействиям.</li>
              <li><b>Разнообразие размеров:</b> позволяют подобрать оптимальную модель под нужды заказчика.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где применяются арочные ангары?</h3>
            <p>
              Благодаря универсальности и быстрому монтажу арочные ангары нашли применение в разных сферах:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Промышленность:</b> склады, цеха, мастерские.</li>
              <li><b>Строительство:</b> временные склады стройматериалов, мастерские, офисы.</li>
              <li><b>Сельское хозяйство:</b> хранение техники, продукции, организация теплиц и ферм.</li>
              <li><b>Транспорт и логистика:</b> временные гаражи, зоны обслуживания транспорта, хранение грузов.</li>
              <li><b>Спортивные и культурные мероприятия:</b> временные павильоны, сцены, выставки.</li>
              <li><b>Экстренные ситуации:</b> временные укрытия и центры размещения.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Преимущества арочных ангаров от MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Высококачественные материалы:</b> анодированный алюминий и ПВХ с пожаробезопасными компонентами.</li>
              <li><b>Прочность и устойчивость:</b> конструкции выдерживают сильный ветер и осадки.</li>
              <li><b>Быстрый монтаж и демонтаж:</b> удобны при временных проектах.</li>
              <li><b>Модульная конструкция:</b> можно соединять несколько ангаров в одну систему.</li>
              <li><b>Индивидуальные заказы:</b> производство под размеры и требования заказчика.</li>
              <li><b>Дополнительные элементы:</b> освещение, отопление, мебель, напольные покрытия и многое другое.</li>
              <li><b>Долгий срок эксплуатации:</b> служат до 20 лет благодаря качественным материалам.</li>
              <li><b>Гарантия:</b> до 5 лет на все конструкции.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где купить арочные ангары?</h3>
            <p>
              Для приобретения арочных ангаров обращайтесь в компанию <b>MOBILE TENT</b>. Мы предоставляем ангары собственного производства,
              а также комплексные решения «под ключ». Специалисты помогут подобрать оптимальную модель и предложат дополнительные опции.
            </p>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                MOBILE TENT — ваш надёжный партнёр в создании прочных, функциональных и долговечных арочных ангаров.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Что такое арочные ангары?
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Арочные ангары — быстросборные тентовые конструкции с изогнутым каркасом, используемые для защиты техники, материалов и оборудования.
            </p>

            <h3 className="font-semibold">Характеристики</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Прочный каркас из стали или алюминия</li>
              <li>Тентовое покрытие из ПВХ</li>
              <li>Быстрый монтаж и демонтаж</li>
              <li>Разнообразие размеров</li>
            </ul>

            <h3 className="font-semibold">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Промышленные склады</li>
              <li>Строительные площадки</li>
              <li>Сельское хозяйство</li>
              <li>Транспорт и логистика</li>
              <li>Мероприятия и фестивали</li>
            </ul>

            <h3 className="font-semibold">Преимущества MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Качественные материалы</li>
              <li>Прочность и устойчивость</li>
              <li>Быстрая установка</li>
              <li>Модульная конструкция</li>
              <li>Гарантия до 5 лет</li>
            </ul>

            <h3 className="font-semibold">Где купить?</h3>
            <p>
              Обращайтесь в <b>MOBILE TENT</b> для заказа арочных ангаров под ключ. Мы подберём оптимальное решение для ваших задач.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};