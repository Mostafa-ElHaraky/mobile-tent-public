'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Мобильные шатры</span>{" "}
            <span className="text-[#232c42]">4×8 м</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Заказать шатёр 4×8
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Мобильные шатры размером 4×8 м — универсальные конструкции для мероприятий на открытом воздухе.
              Благодаря габаритам обеспечивают просторное укрытие, защищая от непогоды и создавая комфорт гостям.
            </p>

            <h3 className="font-semibold text-2xl">Конструкция и материалы</h3>
            <p>
              Каркас изготовлен из прочного металла для устойчивости и долговечности. Тентовое покрытие — из
              высококачественного ПВХ, устойчивого к возгоранию и неблагоприятной погоде. <b>Гарантийный срок — 5 лет.</b>
            </p>

            <h3 className="font-semibold text-2xl">Применение</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Свадьбы и частные торжества:</b> уютное пространство на свежем воздухе.</li>
              <li><b>Корпоративные мероприятия:</b> презентации, тимбилдинги и деловые события.</li>
              <li><b>Выставки и ярмарки:</b> торговые точки или инфо-стенды.</li>
              <li><b>Фестивали и концерты:</b> зоны для зрителей и участников.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Покупка в MOBILE TENT</h3>
            <p>
              Предлагаем шатры 4×8 м из сертифицированных европейских материалов. Тенты и стенки устойчивы к возгоранию
              и погоде, гарантия 5 лет. Раскладные шатры снабжены утяжелителями и надёжными креплениями — выдерживают
              сильный порывистый ветер.
            </p>
            <p>
              Помимо продажи — <b>доставка</b>, <b>установка</b> и <b>брендирование</b> в корпоративные цвета и символику.
              Опытные специалисты выполняют заказы качественно и в срок.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества 4×8 от MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Индивидуальный подход:</b> полная кастомизация — цвет, логотипы, фирменный стиль.</li>
              <li><b>Комплексный сервис:</b> продажа, аренда, консультация, монтаж/демонтаж.</li>
              <li><b>Гарантия качества:</b> расширенная гарантия и сервисное сопровождение.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                Мероприятия с MOBILE TENT проходят на высшем уровне независимо от погоды: вы получаете качественный
                продукт и полный спектр услуг для успешного события.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Мобильные шатры 4×8 м
          </h2>

        <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Заказать 4×8
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Универсальные и просторные шатры для любых open-air мероприятий. Металлический каркас + ПВХ-тент,
              устойчивый к возгоранию и погоде. Гарантия 5 лет.
            </p>

            <h3 className="font-semibold">Где использовать</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Свадьбы и частные события</li>
              <li>Корпоративы, презентации, тимбилдинги</li>
              <li>Выставки и ярмарки</li>
              <li>Фестивали и концерты</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Европейские сертифицированные материалы</li>
              <li>Утяжелители и крепления — стойкость к ветру</li>
              <li>Доставка, установка, брендирование</li>
              <li>Кастомизация и расширенная гарантия</li>
            </ul>

            <p>
              Получите не только продукт, но и полный сервис для успешного мероприятия — от консультации до демонтажа.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
