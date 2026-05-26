'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Как выбрать и купить шестигранные шатры для торжеств
      </h3>

      <p className="font-medium text-lg leading-6">
        Шестигранные шатры — универсальные конструкции для свадьбы, юбилея, дня рождения
        или корпоратива. Они создают уютную праздничную атмосферу, защищают от непогоды и
        обеспечивают пространство для гостей — потому всё больше заказчиков выбирают именно их.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества шестигранных шатров</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>
          <span className="font-semibold">Устойчивость и безопасность:</span> шесть опорных точек
          равномерно распределяют нагрузку — устойчивость к ветру и внешним факторам, комфорт гостям.
        </li>
        <li>
          <span className="font-semibold">Привлекательность:</span> элегантный, необычный силуэт.
          Пространство легко декорировать — ткань, цветы, гирлянды, драпировки.
        </li>
        <li>
          <span className="font-semibold">Функциональность:</span> от камерных вечеров до крупных
          торжеств. Внутри — рассадка, танцпол, сцена, лаунж-зона.
        </li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Аренда или покупка</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Аренда:</span> выгодна при эпизодическом использовании — платите только за период события.</li>
        <li><span className="font-semibold">Покупка:</span> рациональна для регулярных мероприятий — свобода в оформлении и готовность «всегда под рукой».</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Простота установки и сервис</h4>
      <p className="font-medium text-lg leading-6">
        Шестигранные шатры просты в монтаже/демонтаже. Производители предоставляют инструкции,
        консультации и обслуживание — конструкция всегда в отличном состоянии и готова к празднику.
      </p>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Хотите незабываемое торжество? Купите шестигранный шатёр уже сейчас — устойчивость,
        эстетика и универсальность окупятся комфортом ваших гостей и яркими эмоциями.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шестигранные шатры для торжеств
      </h3>
      <p className="font-medium text-sm leading-5">
        Уют, защита от погоды и гибкая планировка — для свадьбы, юбилея, корпоратива.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Устойчивость и безопасность</li>
        <li>Элегантный внешний вид</li>
        <li>Свобода зонирования внутри</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Аренда / покупка:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Аренда — для разовых событий</li>
        <li>Покупка — для регулярных мероприятий</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Монтаж и сервис:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Быстрая сборка/разбор</li>
        <li>Инструкции и консультации</li>
        <li>Обслуживание при необходимости</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Готовы к празднику? Оставьте заявку — подберём размер, конфигурацию и декор.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Шестигранные шатры</span>
            <span className="text-[#232c42]"> для торжеств</span>
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
            <span className="text-[#527dc5]">Шестигранные шатры</span>
            <span className="text-[#232c42]"> для торжеств</span>
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