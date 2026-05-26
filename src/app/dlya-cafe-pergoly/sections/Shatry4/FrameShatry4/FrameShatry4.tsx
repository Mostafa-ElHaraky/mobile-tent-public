'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Перголы для ресторанов и кафе
      </h3>

      <p className="font-medium text-lg leading-6">
        Перголы — это не только практичное, но и стильное решение для создания комфортной
        атмосферы в заведениях. Они помогают обустроить привлекательные зоны как на улице, так и в интерьере.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества пергол:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Защита от погоды:</span> дождь и солнце не мешают гостям наслаждаться трапезой.</li>
        <li><span className="font-semibold">Увеличение посадочных мест:</span> расширение полезной площади и рост прибыли.</li>
        <li><span className="font-semibold">Уютная атмосфера:</span> зелень, цветы и декор делают пространство привлекательным.</li>
        <li><span className="font-semibold">День и ночь:</span> защита от солнца днём и уютное освещение вечером.</li>
        <li><span className="font-semibold">Привлечение клиентов:</span> стильная архитектура привлекает внимание прохожих.</li>
        <li><span className="font-semibold">Многофункциональность:</span> пространство для свадеб, корпоративов и банкетов.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Где купить перголу?</h4>
      <p className="font-medium text-lg leading-6">
        Обратитесь в <span className="font-semibold">MOBILE TENT</span> — мы производим и поставляем
        качественные перголы, идеально подходящие для ресторанов и кафе.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Инновационный дизайн:</span> стильные и современные решения.</li>
        <li><span className="font-semibold">Широкий выбор моделей:</span> от классики до ультрасовременных конструкций.</li>
        <li><span className="font-semibold">Высокое качество материалов:</span> долговечность и надёжность.</li>
        <li><span className="font-semibold">Устойчивость к погоде:</span> защита от солнца, ветра и дождя круглый год.</li>
        <li><span className="font-semibold">Доступные цены:</span> конкурентные условия для заведений любого уровня.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Сделайте ваше кафе уютнее и привлекательнее — закажите перголы в MOBILE TENT уже сегодня!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Перголы для кафе и ресторанов
      </h3>
      <p className="font-medium text-sm leading-5">
        Практичное и стильное решение: защита от погоды, уют и рост числа посадочных мест.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Защита от солнца и дождя</li>
        <li>Больше мест для гостей</li>
        <li>Уютная атмосфера с декором</li>
        <li>Подходят днём и ночью</li>
        <li>Привлекают внимание клиентов</li>
        <li>Использование для мероприятий</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Современный дизайн</li>
        <li>Разнообразие моделей</li>
        <li>Долговечные материалы</li>
        <li>Защита от погоды круглый год</li>
        <li>Доступные цены</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите перголу для вашего заведения в MOBILE TENT прямо сейчас!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Перголы</span>
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
            <span className="text-[#527dc5]">Перголы</span>
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