'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Арочные навесы для ангаров
      </h3>
      <p className="font-medium text-lg leading-6">
        Временные арочные навесы — прочные конструкции для защиты техники, материалов и продукции. 
        Они подходят для складов, производственных площадок и сельского хозяйства. 
        Купить арочный навес для ангаров выгодно: он быстро устанавливается, не требует капитальных вложений 
        и легко разбирается при необходимости.
      </p>

      <h4 className="font-semibold text-xl leading-6">Особенности конструкции</h4>
      <p className="font-medium text-lg leading-6">
        Ферменная арочная система выдерживает снеговую и ветровую нагрузку, равномерно распределяя давление.  
        Каркас из оцинкованной стали не ржавеет, а покрытие из тента или металла устойчиво к влаге и солнцу.  
        Цены на такие навесы ниже, чем на капитальные сооружения, а срок службы достигает 20 лет.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где используют арочные навесы?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Сельское хозяйство:</span> укрытие для зерна, фуража, техники.</li>
        <li><span className="font-semibold">Логистика:</span> мобильные склады, перевалочные базы.</li>
        <li><span className="font-semibold">Промышленность:</span> цеха, ремонтные боксы.</li>
        <li><span className="font-semibold">Строительство:</span> временные площадки для хранения материалов.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Арочные навесы собираются за несколько дней без фундамента. 
        Разборная конструкция удобна для транспортировки и повторного монтажа. 
        Цена зависит от размера, покрытия и дополнительных элементов, но остаётся доступной для бизнеса.
      </p>

      <h4 className="font-semibold text-xl leading-6">Заказать арочный навес</h4>
      <p className="font-medium text-lg leading-6">
        Компания <span className="font-semibold">MOBILE TENT</span> предлагает прочные арочные навесы с гарантией.  
        Мы поможем выбрать модель, рассчитаем стоимость, организуем доставку и монтаж.  
        Уточните цены на арочные навесы для временных ангаров, оставив заявку на сайте.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Арочные навесы от <span className="font-semibold">MOBILE TENT</span> — надёжное решение для бизнеса, 
        которое экономит время и средства.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Арочные навесы для ангаров
      </h3>
      <p className="font-medium text-sm leading-5">
        Прочные конструкции для складов, логистики, сельского хозяйства и стройплощадок. 
        Быстрый монтаж без фундамента, срок службы до 20 лет.
      </p>

      <h4 className="font-semibold text-base leading-5">Где используют:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Сельхозтехника и зерно</li>
        <li>Мобильные склады</li>
        <li>Промышленные цеха</li>
        <li>Стройматериалы</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        Каркас из оцинкованной стали, тентовое или металлическое покрытие. 
        Разборные конструкции удобны для перевозки и монтажа.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите арочный навес в <span className="font-semibold">MOBILE TENT</span> и получите надёжное укрытие для вашего бизнеса.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Арочные навесы</span>
            <span className="text-[#232c42]"> для ангаров</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать навес
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Арочные навесы</span>
            <span className="text-[#232c42]"> для ангаров</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать навес
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};