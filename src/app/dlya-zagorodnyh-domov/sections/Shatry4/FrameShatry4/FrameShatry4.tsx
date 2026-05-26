'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Тенты и шатры для дачи
      </h3>
      <p className="font-medium text-lg leading-6">
        Летний отдых на даче приходится по душе многим россиянам. На природе просто не обойтись 
        без тента или навеса — сложно хорошо провести время, если мешает дождь или палящее солнце. 
        Чтобы неблагоприятные погодные условия не испортили отдых, стоит купить тент или шатёр на дачу.
      </p>
      <p className="font-medium text-lg leading-6">
        Деревянная беседка — отличный вариант, но не всегда доступный. 
        Тенты и шатры продаются по доступным ценам и легко монтируются за несколько шагов даже без навыков.
      </p>

      <h4 className="font-semibold text-xl leading-6">Как выбрать?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Габариты и вместимость — для больших компаний нужен просторный шатёр.</li>
        <li>Качество и прочность материалов — важен вес и надёжность.</li>
        <li>Простота монтажа — удобство при установке и хранении.</li>
      </ul>
      <p className="font-medium text-lg leading-6">
        В каталоге MOBILE TENT представлены навесы разных размеров и форм: 
        прямоугольные, круглые, квадратные, многогранные.  
        Все модели выполнены из качественных материалов и имеют длительный срок службы.
      </p>

      <h4 className="font-semibold text-xl leading-6">Классификация конструкций</h4>
      <p className="font-medium text-lg leading-6">
        Каркас может быть металлическим или деревянным.  
        По форме — тенты бывают прямоугольные, круглые, квадратные или многогранные.  
        Лёгкие ткани подходят для защиты от солнца, а плотные водонепроницаемые материалы — от дождя.
      </p>

      <h4 className="font-semibold text-xl leading-6">Почему выбирают у нас?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Большой выбор по фото и описаниям</li>
        <li>Прочные материалы и долговечность</li>
        <li>Широкая цветовая гамма и возможность подобрать под стиль участка</li>
        <li>Быстрый монтаж и удобство транспортировки</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Купить шатры и тенты для дачи в Москве и СПб легко — звоните нам по телефону 
        <span className="font-semibold"> +7 (495) 125-04-45</span>, и консультанты помогут подобрать оптимальную модель.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Выберите и закажите тент или шатёр для дачи прямо сейчас!  
        Отдыхайте с комфортом вместе с <span className="font-semibold">MOBILE TENT</span>.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Тенты и шатры для дачи
      </h3>
      <p className="font-medium text-sm leading-5">
        Удобное укрытие от солнца и дождя.  
        Быстрый монтаж, доступная цена и разные размеры — от компактных тентов до садовых павильонов.
      </p>

      <h4 className="font-semibold text-base leading-5">Критерии выбора:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Габариты и вместимость</li>
        <li>Прочность и надёжность материалов</li>
        <li>Лёгкость монтажа</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> большой выбор моделей и цветов.  
        Подберём навес под ваш участок и бюджет.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр для дачи и отдыхайте комфортно уже этим летом!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop (centered, max width 1440px) */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] px-10 flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Тенты и шатры</span>
            <span className="text-[#232c42]"> для дачи</span>
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
            <span className="text-[#527dc5]">Тенты и шатры</span>
            <span className="text-[#232c42]"> для дачи</span>
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
