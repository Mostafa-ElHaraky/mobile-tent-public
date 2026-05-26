'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Спортивные классические шатры для мероприятий и активного отдыха
      </h3>

      <p className="font-medium text-lg leading-6">
        Классические шатры — важный элемент организации спортивных событий, тренировок и активного отдыха.
        Они обеспечивают укрытие от дождя, ветра и солнца, создавая комфорт для спортсменов, зрителей и организаторов.
      </p>

      <h4 className="font-semibold text-xl leading-6">Что учитывать при выборе:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Размер:</span> шатры бывают от компактных до огромных, для турниров и марафонов.</li>
        <li><span className="font-semibold">Прочность и устойчивость:</span> каркас из стали/алюминия выдерживает ветер, дождь и снег.</li>
        <li><span className="font-semibold">Материалы:</span> водонепроницаемые, огнестойкие ткани с защитой от УФ-лучей.</li>
        <li><span className="font-semibold">Дополнительные элементы:</span> боковые стенки, москитные сетки, обогрев и вентиляция.</li>
        <li><span className="font-semibold">Стоимость:</span> цена зависит от размера, материалов и оснащения.</li>
        <li><span className="font-semibold">Эстетика:</span> шатёр можно декорировать шторами, гирляндами и элементами бренда.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Качество производства:</span> прочные каркасы, водонепроницаемые ткани, строгий контроль.</li>
        <li><span className="font-semibold">Прочность и устойчивость:</span> рассчитаны на экстремальные погодные условия.</li>
        <li><span className="font-semibold">Защита от осадков и УФ:</span> материалы водонепроницаемы и защищают от солнца.</li>
        <li><span className="font-semibold">Широкий выбор:</span> от маленьких шатров до масштабных конструкций.</li>
        <li><span className="font-semibold">Лёгкость сборки:</span> быстрый монтаж и демонтаж.</li>
        <li><span className="font-semibold">Гибкость:</span> подходят для спорта, ярмарок, выставок и корпоративов.</li>
        <li><span className="font-semibold">Дополнительные опции:</span> стенки, вентиляция, отопление, декор.</li>
        <li><span className="font-semibold">Выгодные цены и гарантия:</span> оптимальное соотношение цена–качество, официальная гарантия.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Хотите надёжный шатёр для спортивных мероприятий? Закажите его в MOBILE TENT — мы предложим
        оптимальное решение под ваши задачи!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Спортивные классические шатры
      </h3>
      <p className="font-medium text-sm leading-5">
        Укрытие от дождя, ветра и солнца. Идеальны для соревнований, тренировок и активного отдыха.
      </p>

      <h4 className="font-semibold text-base leading-5">Ключевые факторы:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Размеры от малых до крупных</li>
        <li>Прочный каркас (сталь/алюминий)</li>
        <li>Водонепроницаемые ткани</li>
        <li>Доп. опции: стенки, сетки, обогрев</li>
        <li>Возможность декора</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Высокое качество и контроль</li>
        <li>Устойчивость к экстремальной погоде</li>
        <li>Защита от воды и УФ</li>
        <li>Быстрая сборка и мобильность</li>
        <li>Доп. аксессуары и декор</li>
        <li>Доступные цены и гарантия</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите спортивный шатёр в MOBILE TENT — комфорт и надёжность для любого мероприятия!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Классические шатры</span>
            <span className="text-[#232c42]"> для спортивных мероприятий</span>
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
            <span className="text-[#527dc5]">Классические шатры</span>
            <span className="text-[#232c42]"> для спорта</span>
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