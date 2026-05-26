'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Гексагональные шатры для загородных домов
      </h3>
      <p className="font-medium text-lg leading-6">
        Хотите создать уютную зону отдыха на участке? Гексагональные шатры для загородных домов — это 
        не только защита от солнца и дождя, но и стильный элемент экстерьера. Они подходят для частного 
        использования, праздничных мероприятий и даже коммерческих целей.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему выбирают?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Устойчивость и долговечность:</span> каркас из алюминия или стали выдерживает ветер и осадки.</li>
        <li><span className="font-semibold">Эргономика пространства:</span> шестиугольная форма эффективно использует площадь.</li>
        <li><span className="font-semibold">Универсальность:</span> подходит для террас, садов, уличных кафе и банкетных зон.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Чтобы наслаждаться отдыхом на свежем воздухе в любое время года, стоит купить гексагональный шатёр для частного дома, 
        выбрав модель с подходящими размерами и материалами.
      </p>

      <h4 className="font-semibold text-xl leading-6">Применение</h4>
      <p className="font-medium text-lg leading-6">
        Гексагональные шатры удобны для семейных ужинов, праздников и торжеств.  
        Они создают комфорт на даче, у бассейна или в саду.  
        Закрытые модели защищают от осадков, а открытые версии идеально подходят для летнего отдыха.
      </p>
      <p className="font-medium text-lg leading-6">
        Если шатёр нужен на один день — аренда будет выгодным вариантом.  
        Для регулярного использования лучше купить шатёр для частного дома.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где купить?</h4>
      <p className="font-medium text-lg leading-6">
        В каталоге <span className="font-semibold">MOBILE TENT</span> представлен широкий ассортимент гексагональных шатров по доступным ценам.  
        Оставьте заявку на сайте или позвоните — мы подберём лучший вариант для вашего загородного участка.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Закажите гексагональный шатёр для дома и создайте комфортную атмосферу отдыха круглый год!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Гексагональные шатры для домов
      </h3>
      <p className="font-medium text-sm leading-5">
        Стильное и удобное укрытие для сада, террасы или у бассейна.  
        Подходит для семейных ужинов, торжеств и отдыха на свежем воздухе.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Прочный каркас из алюминия/стали</li>
        <li>Шестиугольная форма и простор</li>
        <li>Подходит для дачи и банкетов</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> большой выбор моделей — покупка и аренда доступны.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр и создайте уютную зону отдыха прямо на участке!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Гексагональные шатры</span>
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
            <span className="text-[#527dc5]">Гексагональные шатры</span>
            <span className="text-[#232c42]"> для домов</span>
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