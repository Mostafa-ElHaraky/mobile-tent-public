'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Классические шатры для загородных домов
      </h3>
      <p className="font-medium text-lg leading-6">
        Классические шатры — прочные каркасные конструкции с тентовым покрытием или поликарбонатом. 
        Их назначение — создать крытое пространство на участке, защищённое от дождя, ветра и солнца.
      </p>

      <h4 className="font-semibold text-xl leading-6">Конструкция включает:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Каркас из стали или алюминия — устойчивость и долговечность.</li>
        <li>Тентовое покрытие (ПВХ, полиэстер) — влагостойкость и защита от ультрафиолета.</li>
        <li>Крепежная система — фиксация к грунту, бетону или настилу.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Где используют шатры?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Летние беседки для отдыха</li>
        <li>Свадьбы и праздники</li>
        <li>Зона у бассейна</li>
        <li>Летние кафе и веранды</li>
        <li>Выставки и ярмарки</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Защита от солнца и осадков</li>
        <li>Прочность и устойчивость</li>
        <li>Эстетичный внешний вид</li>
        <li>Мобильность и простота установки</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Как выбрать шатёр?</h4>
      <p className="font-medium text-lg leading-6">
        Учитывайте размер участка, материал каркаса, плотность тента и дополнительные элементы 
        (москитные сетки, прозрачные стенки, утеплители). Аренда удобна для разовых мероприятий, 
        но покупка выгоднее при регулярном использовании.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему MOBILE TENT?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Гарантия качества и надёжные материалы</li>
        <li>Быстрая доставка</li>
        <li>Индивидуальный подбор под ваши требования</li>
        <li>Консультация специалистов</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Хотите купить классический шатёр для дома?  
        Обращайтесь в <span className="font-semibold">MOBILE TENT</span> — доставим и установим в удобное время!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Классические шатры для дома
      </h3>
      <p className="font-medium text-sm leading-5">
        Прочные каркасные шатры с тентовым покрытием — защита от дождя, ветра и солнца. 
        Отличное решение для дачи, сада или у бассейна.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Защита от непогоды</li>
        <li>Прочность и надёжность</li>
        <li>Эстетичный дизайн</li>
        <li>Быстрая установка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> большой выбор шатров.  
        Аренда — для разовых мероприятий, покупка — для регулярного использования.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр для загородного дома уже сегодня!
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
            <span className="text-[#232c42]"> для загородных домов</span>
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
            <span className="text-[#527dc5]">Классические шатры</span>
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