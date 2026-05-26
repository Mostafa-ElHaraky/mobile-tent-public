'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Каталог</span>{" "}
            <span className="text-[#232c42]">тент-шатров любых размеров от производителя</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать подробнее
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Мы предлагаем разнообразие конструкций любых размеров, созданных специально для вашего комфорта на любом мероприятии. Наши тент-шатры сочетают в себе стиль, надежность и высокое качество.
            </p>

            <h3 className="font-semibold text-2xl">Почему выбор наших тент-шатров — это правильное решение?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Широкий ассортимент размеров:</b> представлены тент-шатры различных масштабов.</li>
              <li><b>Прочная защита от непогоды:</b> защита от ветра, дождя и солнца.</li>
              <li><b>Индивидуальные заказы:</b> изготовление по вашим параметрам.</li>
              <li><b>Профессиональное изготовление:</b> опытные специалисты, качественные материалы.</li>
              <li><b>Эстетика и стиль:</b> привлекательный дизайн для особой атмосферы.</li>
            </ul>

            <p>
              Выберите наши тент-шатры, чтобы создать комфортное и запоминающееся пространство для вашего мероприятия.
            </p>

            <h3 className="font-semibold text-2xl">Для чего используются тентовые шатры?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Мероприятия на открытом воздухе:</b> свадьбы, корпораты, концерты, фестивали.</li>
              <li><b>Рестораны и кафе:</b> уютные зоны под открытым небом.</li>
              <li><b>Спортивные мероприятия:</b> временные площадки и укрытия.</li>
              <li><b>Пикники и отдых:</b> кемпинг, фестивали, защита от солнца/дождя.</li>
              <li><b>Рынки и ярмарки:</b> временные торговые павильоны.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Преимущества компании MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Надежные поставщики:</b> материалы из Италии, Китая, Польши и России.</li>
              <li><b>Конкурентоспособные цены:</b> прямое сотрудничество без посредников.</li>
              <li><b>Сертифицированное качество:</b> соответствие стандартам безопасности.</li>
              <li><b>Гарантия:</b> предоставляем гарантию на все услуги.</li>
              <li><b>Доставка:</b> оперативная и удобная для клиента.</li>
              <li><b>Обучение и сопровождение:</b> мастер-классы и консультации.</li>
              <li><b>Широкий спектр услуг:</b> монтаж полов, кондиционирование, мебель и др.</li>
              <li><b>Персонализированный подход:</b> индивидуальное решение для каждого клиента.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                MOBILE TENT стремится предоставить клиентам комплексный сервис с высоким уровнем качества и внимания к деталям.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Каталог тент-шатров от производителя
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Разнообразие конструкций любых размеров. Стиль, надежность и высокое качество для ваших мероприятий.
            </p>

            <h3 className="font-semibold">Почему выбрать нас</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ассортимент размеров</li>
              <li>Защита от непогоды</li>
              <li>Индивидуальные заказы</li>
              <li>Качественные материалы</li>
              <li>Эстетика и стиль</li>
            </ul>

            <h3 className="font-semibold">Области применения</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Свадьбы, концерты, фестивали</li>
              <li>Кафе и рестораны</li>
              <li>Спортивные мероприятия</li>
              <li>Пикники и кемпинг</li>
              <li>Рынки и ярмарки</li>
            </ul>

            <h3 className="font-semibold">Наши преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Материалы из Европы и Азии</li>
              <li>Конкурентные цены</li>
              <li>Сертифицированное качество</li>
              <li>Гарантия и доставка</li>
              <li>Обучение и сопровождение</li>
              <li>Широкий спектр услуг</li>
              <li>Индивидуальный подход</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
