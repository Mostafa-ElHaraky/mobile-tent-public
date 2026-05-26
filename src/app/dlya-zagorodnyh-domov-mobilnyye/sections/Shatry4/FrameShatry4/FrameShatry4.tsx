'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Мобильный шатёр для загородного дома
      </h3>
      <p className="font-medium text-lg leading-6">
        Отдых на даче должен быть комфортным при любой погоде. 
        Мобильный шатёр для загородного дома — удобное решение, которое защитит от солнца, дождя и ветра. 
        Он легко устанавливается, компактно складывается и подходит как для семейных ужинов, так и для масштабных мероприятий.
      </p>
      <p className="font-medium text-lg leading-6">
        Сборная конструкция включает металлический каркас (стальной — прочный, алюминиевый — лёгкий и устойчивый к коррозии) 
        и водонепроницаемый тент из ПВХ или полиэстера. Внутри можно разместить садовую мебель, мангал или летнюю кухню.  
        Для дачи и загородного дома шатёр становится отличной альтернативой стационарной беседке.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества мобильных шатров</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Простая установка — сборка за 5–15 минут</li>
        <li>Защита от солнца и осадков — тент с водоотталкивающим покрытием</li>
        <li>Компактность — легко складывается и хранится</li>
        <li>Разнообразие моделей — размеры, формы, цвета</li>
        <li>Прочность — устойчивый каркас и плотный тент</li>
        <li>Дополнительно — боковые стенки и москитные сетки</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Как выбрать шатёр?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Размер — 3×3 м для семьи, 5×5 м и больше для мероприятий</li>
        <li>Каркас — стальной долговечнее, алюминиевый легче в перевозке</li>
        <li>Тент — ПВХ долговечен, полиэстер легче и быстрее сохнет</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        Перед покупкой сравните модели и цены на мобильные шатры для загородных домов, чтобы выбрать оптимальный вариант.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Надёжные конструкции и проверенные материалы</li>
        <li>Доставка по России удобными способами</li>
        <li>Консультации и помощь специалистов</li>
        <li>Разные способы оплаты и скидки на оптовые заказы</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Закажите мобильный шатёр для загородного дома в <span className="font-semibold">MOBILE TENT</span> — 
        создайте комфортную зону отдыха при любой погоде!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Мобильные шатры для дома
      </h3>
      <p className="font-medium text-sm leading-5">
        Удобное укрытие для дачи: быстро ставится, защищает от солнца и дождя, легко складывается и хранится.
      </p>

      <h4 className="font-semibold text-base leading-5">Плюсы:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Сборка за 5–15 минут</li>
        <li>Прочный каркас (сталь или алюминий)</li>
        <li>Тент ПВХ или полиэстер с защитой</li>
        <li>Компактное хранение</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> большой выбор шатров, доставка по России и помощь в подборе.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите мобильный шатёр для дачи прямо сейчас!
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
            <span className="text-[#232c42]"> для загородного дома</span>
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
            <span className="text-[#527dc5]">Мобильные шатры</span>
            <span className="text-[#232c42]"> для дома</span>
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