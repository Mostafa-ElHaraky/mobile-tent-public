'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Классический тент для временного ангара
      </h3>
      <p className="font-medium text-lg leading-6">
        Классический тент — это надёжное укрытие для техники, оборудования и материалов. 
        Прочный каркас и ПВХ-покрытие выдерживают ветер, снег и дождь. 
        Компактные в сложенном виде, такие конструкции легко перевозятся и быстро устанавливаются.  
        Если требуется купить классический тент для временного ангара, важно учитывать размеры, ветровую нагрузку и условия эксплуатации.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где применяются?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Сельское хозяйство:</span> хранение зерна, кормов, удобрений.</li>
        <li><span className="font-semibold">Строительство:</span> защита стройматериалов и техники.</li>
        <li><span className="font-semibold">Логистика:</span> организация складов.</li>
        <li><span className="font-semibold">Промышленность:</span> укрытие для оборудования.</li>
        <li><span className="font-semibold">Авиация и транспорт:</span> навесы для техники и грузов.</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает конструкции, адаптированные под климатические условия.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества классических тентов</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Снижение затрат — дешевле капитальных строений</li>
        <li>Быстрая установка — монтаж за несколько дней</li>
        <li>Минимальное обслуживание — ПВХ-покрытие устойчиво к влаге и УФ</li>
        <li>Мобильность — легко перевозятся и монтируются на новом месте</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Как выбрать и заказать?</h4>
      <p className="font-medium text-lg leading-6">
        При выборе учитывают площадь, снеговую и ветровую нагрузку, частоту перемещений.  
        <span className="font-semibold">MOBILE TENT</span> подберёт решение под ваши задачи.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Уточните цены и получите консультацию.  
        Закажите классический тент для временного ангара уже сегодня — защитите имущество от непогоды!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Классические тенты для ангаров
      </h3>
      <p className="font-medium text-sm leading-5">
        Надёжные укрытия для техники и материалов.  
        Прочный каркас + ПВХ-покрытие защищают от ветра, снега и дождя. 
        Быстрый монтаж и удобная перевозка.
      </p>

      <h4 className="font-semibold text-base leading-5">Применение:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Сельское хозяйство</li>
        <li>Строительство</li>
        <li>Склады и логистика</li>
        <li>Промышленность</li>
        <li>Авиация и транспорт</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Дешевле капитальных строений</li>
        <li>Монтаж за несколько дней</li>
        <li>Устойчивы к влаге и УФ</li>
        <li>Легко перевозятся</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите тент в <span className="font-semibold">MOBILE TENT</span> и получите защиту для вашего имущества!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Классические тенты</span>
            <span className="text-[#232c42]"> для временных ангаров</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать тент
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Классические тенты</span>
            <span className="text-[#232c42]"> для ангаров</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать тент
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};