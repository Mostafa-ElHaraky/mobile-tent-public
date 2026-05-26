'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Перголы для выставок от Mobile Tent
      </h3>
      <p className="font-medium text-lg leading-6">
        Перголы для выставок — популярное решение для создания привлекательных и функциональных экспозиций. 
        Они защищают посетителей от солнца и дождя, подчеркивают стиль стенда и помогают выделиться среди конкурентов. 
        Купить перголу для выставки — это шаг к созданию комфортных условий и запоминающегося пространства.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества пергол</h4>
      <p className="font-medium text-lg leading-6">
        Главный плюс — универсальность. Конструкции подходят как для открытых, так и для закрытых площадок, 
        создают уютное и стильное пространство для общения с клиентами. 
        Перголы могут быть выполнены в разных стилях и цветах, что позволяет адаптировать их под ваш бренд.
      </p>

      <h4 className="font-semibold text-xl leading-6">Какие перголы выбрать?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Стационарные:</span> обеспечивают максимальную устойчивость для долгосрочных мероприятий.</li>
        <li><span className="font-semibold">Мобильные:</span> лёгкие и удобные для быстрого монтажа и временных событий.</li>
        <li><span className="font-semibold">Материалы:</span> дерево создаёт уют, металл — долговечность и минимальный уход.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Выбирая материалы и тип конструкции, учитывайте формат мероприятия, бюджет и корпоративный стиль.
      </p>

      <h4 className="font-semibold text-xl leading-6">Покупка или аренда?</h4>
      <p className="font-medium text-lg leading-6">
        Для краткосрочных мероприятий аренда — экономичное решение.  
        Для регулярных событий покупка — выгодная долгосрочная инвестиция.  
        Стоимость зависит от размеров, материалов и дополнительных опций.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему Mobile Tent?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Широкий выбор пергол для выставок</li>
        <li>Индивидуальный подбор под задачи клиента</li>
        <li>Конкурентные цены на покупку и аренду</li>
        <li>Надёжность и долговечность конструкций</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Перголы от <span className="font-semibold">Mobile Tent</span> — это комфорт, защита и стиль.  
        Купите или арендуйте перголу уже сегодня, чтобы выделить ваш стенд и сделать мероприятие успешным!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Перголы для выставок
      </h3>
      <p className="font-medium text-sm leading-5">
        Перголы создают комфортное и стильное пространство на выставках. 
        Подходят для улицы и помещений, защищают от солнца и дождя.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Универсальность</li>
        <li>Индивидуальный дизайн</li>
        <li>Прочность и долговечность</li>
        <li>Аренда и покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">Mobile Tent</span> вы найдёте перголы разных форматов и стилей. 
        Отличное решение для экспозиций и мероприятий.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите перголу для выставки прямо сейчас и выделите ваш бренд!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Перголы</span>
            <span className="text-[#232c42]"> для выставок</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Подобрать перголу
          </Button>

          <RussianContentDesktop />
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Перголы</span>
            <span className="text-[#232c42]"> для выставок</span>
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] text-white font-semibold text-sm"
            >
              Подобрать перголу
            </Button>
          </div>

          <RussianContentMobile />
        </div>
      </section>
    </>
  );
};