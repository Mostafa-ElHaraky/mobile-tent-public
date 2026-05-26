'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Арочные шатры для ресторанов и кафе
      </h3>

      <p className="font-medium text-lg leading-6">
        Арочные шатры представляют собой элегантное и функциональное решение для создания
        уютных и привлекательных пространств на открытых террасах и площадках. Их изящный
        дизайн, сочетающий эстетику и практичность, делает их превосходным выбором для
        владельцев заведений общественного питания.
      </p>

      <h4 className="font-semibold text-xl leading-6">
        Основные преимущества арочных шатров:
      </h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Эстетика и стиль:</span> изящные дуги создают уникальный и уютный внешний вид.</li>
        <li><span className="font-semibold">Защита от погоды:</span> надёжная защита от солнца, дождя и ветра.</li>
        <li><span className="font-semibold">Гибкость:</span> лёгкая установка и демонтаж в зависимости от условий.</li>
        <li><span className="font-semibold">Увеличение вместимости:</span> дополнительное пространство на террасе.</li>
        <li><span className="font-semibold">Привлекательность для гостей:</span> создают атмосферу уюта и внимания к бренду.</li>
        <li><span className="font-semibold">Брендирование:</span> возможность нанесения логотипа и рекламы.</li>
        <li><span className="font-semibold">Прочность:</span> долговечные материалы и надёжная конструкция.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Это не только функциональное, но и стильное решение для комфортного пространства на
        открытых террасах и площадках.
      </p>

      <h4 className="font-semibold text-xl leading-6">
        Где купить арочные шатры для ресторана и кафе?
      </h4>
      <p className="font-medium text-lg leading-6">
        Обратитесь к нам в <span className="font-semibold">MOBILE TENT</span> — вашему
        надежному партнёру. Мы производим и поставляем арочные тенты, идеально подходящие для
        кафе и ресторанов.
      </p>

      <h4 className="font-semibold text-xl leading-6">
        Преимущества покупки в MOBILE TENT:
      </h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Качество и прочность:</span> современные материалы и технологии.</li>
        <li><span className="font-semibold">Индивидуальный заказ:</span> адаптация под ваши эскизы, цвет и дизайн.</li>
        <li><span className="font-semibold">Быстрая доставка и монтаж:</span> оперативность в любых регионах.</li>
        <li><span className="font-semibold">Надёжность:</span> долгий срок службы даже при интенсивной эксплуатации.</li>
        <li><span className="font-semibold">Привлекательная цена:</span> конкурентоспособные условия без потери качества.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Хотите обустроить летнюю веранду кафе или ресторана? Закажите арочные тенты у нас уже сегодня!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Арочные шатры для ресторанов и кафе
      </h3>
      <p className="font-medium text-sm leading-5">
        Элегантное и практичное решение для террас. Стильный дизайн и защита от погоды —
        идеальный выбор для кафе и ресторанов.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Эстетика и уют</li>
        <li>Защита от солнца и дождя</li>
        <li>Лёгкий монтаж и демонтаж</li>
        <li>Дополнительные места для гостей</li>
        <li>Возможность брендирования</li>
        <li>Прочные материалы</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Качественные материалы и технологии</li>
        <li>Индивидуальный заказ по вашим эскизам</li>
        <li>Быстрая доставка и монтаж</li>
        <li>Долговечность и надёжность</li>
        <li>Выгодная цена</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Оставьте заявку и обустройте летнюю веранду уже сегодня!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Арочные шатры</span>
            <span className="text-[#232c42]"> для кафе и ресторанов</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать подробнее
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Арочные шатры</span>
            <span className="text-[#232c42]"> для кафе и ресторанов</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Узнать подробнее
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};