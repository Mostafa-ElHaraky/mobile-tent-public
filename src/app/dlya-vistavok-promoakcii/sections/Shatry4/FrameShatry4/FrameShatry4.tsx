'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Как выбрать шатры для выставок и промоакций
      </h3>
      <p className="font-medium text-lg leading-6">
        Шатры для выставок становятся всё более популярными среди организаторов мероприятий.
        Они обеспечивают надёжное укрытие для экспонатов, создают комфорт для общения и
        привлекают внимание посетителей.
        Шатры от <span className="font-semibold">MOBILE TENT</span> отличаются качеством и надёжностью,
        подходят как для улицы, так и для помещений, и доступны в разных формах и размерах.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества шатров</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Защита от непогоды для экспонатов и оборудования</li>
        <li>Эстетичное оформление пространства</li>
        <li>Быстрая установка и демонтаж</li>
        <li>Возможность брендирования для усиления маркетинга</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Шатры становятся мощным инструментом продвижения, помогая привлечь внимание к бренду
        и создать уникальное пространство для клиентов.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где применяются?</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Корпоративные мероприятия</li>
        <li>Уличные промоакции</li>
        <li>Торговые выставки</li>
        <li>Презентации и ярмарки</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Цены и варианты</h4>
      <p className="font-medium text-lg leading-6">
        Стоимость зависит от размеров, материалов и опций.
        <span className="font-semibold"> MOBILE TENT</span> предлагает решения под любой бюджет:
        от доступных моделей до премиум-шатров для крупных мероприятий.
        Это не просто укрытие, а инвестиция в успех.
      </p>

      <h4 className="font-semibold text-xl leading-6">Покупка или аренда?</h4>
      <p className="font-medium text-lg leading-6">
        <span className="font-semibold">Покупка</span> выгодна для регулярных событий: шатёр можно брендировать и использовать многократно.
        <span className="font-semibold"> Аренда</span> подходит для разовых мероприятий, позволяя снизить затраты на покупку и обслуживание.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Выбирая шатры от <span className="font-semibold">MOBILE TENT</span>, вы получаете надёжное и качественное решение.
        Купите или арендуйте шатёр для выставок и промоакций, чтобы ваше мероприятие стало ярким и запоминающимся!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры для выставок и промоакций
      </h3>
      <p className="font-medium text-sm leading-5">
        Надёжные конструкции для экспозиций и акций.
        Защита от погоды, быстрый монтаж и брендирование под ваш стиль.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Надёжность и комфорт</li>
        <li>Привлекательный дизайн</li>
        <li>Удобный монтаж</li>
        <li>Аренда или покупка</li>
      </ul>

      <p className="font-medium text-sm leading-5">
        В <span className="font-semibold">MOBILE TENT</span> доступны шатры любых размеров и форм.
        Отличное решение для выставок и акций.
      </p>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите шатёр прямо сейчас и сделайте ваше мероприятие успешным!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop (centered, max width 1440px) */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] px-10 flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шатры</span>
            <span className="text-[#232c42]"> для выставок и промоакций</span>
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

      {/* Mobile (responsive layout) */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold text-center w-full">
            <span className="text-[#527dc5]">Шатры</span>
            <span className="text-[#232c42]"> для выставок и промоакций</span>
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
