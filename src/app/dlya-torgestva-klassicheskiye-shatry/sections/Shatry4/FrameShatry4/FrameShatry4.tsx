'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Классические шатры для праздников
      </h3>

      <p className="font-medium text-lg leading-6">
        Организация торжественного мероприятия требует внимания к каждой детали. 
        Классические шатры для праздников — мобильные конструкции, создающие комфортное 
        пространство на свежем воздухе. Они идеально подходят для свадеб, юбилеев, корпоративов, 
        презентаций и фестивалей.
      </p>

      <h4 className="font-semibold text-xl leading-6">Основные элементы конструкции</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Каркас:</span> металлический или алюминиевый, обеспечивает прочность и устойчивость.</li>
        <li><span className="font-semibold">Тентовое покрытие:</span> водонепроницаемое, защищает от дождя и ветра.</li>
        <li><span className="font-semibold">Декоративные элементы:</span> шторы, занавески, гирлянды, цветы для эстетики.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Где применяются</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Свадебные церемонии и банкеты</li>
        <li>Юбилеи и дни рождения</li>
        <li>Корпоративные вечеринки и презентации</li>
        <li>Фестивали и ярмарки</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества классических шатров</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Устойчивость и безопасность:</span> каркас и крепления выдерживают сильный ветер, тент защищает от осадков.</li>
        <li><span className="font-semibold">Привлекательность:</span> легко декорируются для создания элегантной атмосферы.</li>
        <li><span className="font-semibold">Функциональность:</span> быстро монтируются и адаптируются под сценарий мероприятия.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему купить, а не арендовать?</h4>
      <p className="font-medium text-lg leading-6">
        Покупка классического шатра — это долгосрочная инвестиция. Вы всегда готовы к событию, 
        выбираете модель под свои задачи и экономите на аренде при регулярных мероприятиях.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Хотите комфорт и элегантность на свежем воздухе? Купите классический шатёр для праздников — 
        сделайте своё мероприятие по-настоящему незабываемым!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Классические шатры для праздников
      </h3>
      <p className="font-medium text-sm leading-5">
        Комфорт, защита от непогоды и элегантность — идеальны для свадьбы, юбилея, корпоратива или фестиваля.
      </p>

      <h4 className="font-semibold text-base leading-5">Элементы конструкции:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Металлический/алюминиевый каркас</li>
        <li>Водонепроницаемое покрытие</li>
        <li>Декоративные шторы и занавески</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Устойчивость и безопасность</li>
        <li>Элегантный внешний вид</li>
        <li>Легкий монтаж и гибкость</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Хотите праздник без забот? Оставьте заявку — подберём классический шатёр под ваш формат.
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
            <span className="text-[#232c42]"> для праздников</span>
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
            <span className="text-[#232c42]"> для праздников</span>
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