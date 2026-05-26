'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import { ReactElement } from 'react';

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal]">
            <span className="text-[#527dc5]">Арочные шатры</span>
            <span className="text-[#232c42]"> 5×5 м</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg [font-family:'Raleway',Helvetica]"
          >
            Заказать в MOBILE TENT
          </Button>

          <div className="w-full font-medium text-lg leading-7 [font-family:'Raleway',Helvetica] text-[#394355] space-y-6">
            <p>
              Современные арочные шатровые конструкции 5 на 5 м отличаются презентабельным видом, разумной ценой и не требуют тщательной подготовки основания перед монтажом. Компания MOBILE TENT изготавливает арочные шатры 5х5 м под заказ, осуществляет их аренду и продажу, оказывает услуги по брендированию, доставке и монтажу в Москве и других городах России.
            </p>
            <p>
              Купить арочный шатер, как правило, решают предприниматели, занимающиеся организацией выездных мероприятий, а также собственники загородных коттеджей, отелей и туристических баз. Компания MOBILE TENT предлагает приобрести или арендовать на любое время арочные шатры 5 на 5 м собственного производства.
            </p>

            <h3 className="font-semibold text-2xl">Сферы использования арочных шатров 5×5 м</h3>
            <p>
              Оформляя заявку на изготовление арочного шатра 5×5 метров под заказ, вы получаете широкие возможности для проведения досуговых, корпоративных, деловых и других мероприятий на природе. Арочные каркасные конструкции успешно используются предпринимателями при организации летних площадок рядом с кафе или рестораном. Частные лица приобретают шатры в качестве альтернативы громоздким беседкам.
            </p>
            <p>
              Поскольку цена арочных шатров пять на пять метров в России намного ниже, чем затраты на строительство капитального сооружения, они применяются для:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>проведения выездных мероприятий;</li>
              <li>организации праздников, корпоративов, презентаций, семейных торжеств;</li>
              <li>создания бизнеса в общепите на летний период;</li>
              <li>оснащения выставок, промо-мероприятий.</li>
            </ul>
            <p>
              В каталоге компании представлены готовые модели арочных шатров, также мы предоставляем услуги по индивидуальному проектированию.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества нашей продукции</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Прочные (срок эксплуатации до 20 лет).</li>
              <li>Ветроустойчивые.</li>
              <li>Пожаробезопасные (подтверждено сертификатами).</li>
              <li>Надежно защищают от дождя, солнца и ветра.</li>
              <li>Легко монтируются и разбираются.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Как мы работаем</h3>
            <p>
              После получения заявки с клиентом связывается менеджер для уточнения деталей. Затем разрабатывается проект при участии инженеров и дизайнеров. На изготовление шатра уходит несколько дней, после чего мастера доставляют и собирают готовую конструкцию.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества заказа шатра 5×5 м в MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Высокая скорость изготовления и доставки.</li>
              <li>Надежность продукции (подтверждено отзывами клиентов).</li>
              <li>Официальная гарантия до 5 лет.</li>
            </ul>
            <p>
              Благодаря собственному производству мы выполняем проекты под ключ – от проектирования до обслуживания шатровых конструкций в Москве и регионах РФ.
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold [font-family:'Raleway',Helvetica] leading-tight text-center w-full">
            Арочные шатры 5×5 м
          </h2>

          <div className="w-full text-center">
            <Button
              variant="link"
              className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm [font-family:'Raleway',Helvetica]"
            >
              Заказать в MOBILE TENT
            </Button>
          </div>

          <div className="w-full font-medium text-sm leading-5 [font-family:'Raleway',Helvetica] text-[#394355] text-justify space-y-4">
            <p>
              Арочные шатры 5×5 м отличаются презентабельным видом, доступной ценой и простотой монтажа. MOBILE TENT предлагает аренду, продажу, брендирование и доставку по всей России.
            </p>
            <p>
              Их выбирают предприниматели для мероприятий, а также владельцы коттеджей, отелей и баз отдыха.
            </p>

            <h3 className="font-semibold text-base">Сферы применения</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Выездные мероприятия.</li>
              <li>Праздники, корпоративы, презентации.</li>
              <li>Летние площадки общепита.</li>
              <li>Выставки и промо-мероприятия.</li>
            </ul>

            <h3 className="font-semibold text-base">Преимущества продукции</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Прочность до 20 лет эксплуатации.</li>
              <li>Ветроустойчивость.</li>
              <li>Пожаробезопасность.</li>
              <li>Защита от солнца и дождя.</li>
              <li>Быстрый монтаж и демонтаж.</li>
            </ul>

            <h3 className="font-semibold text-base">Почему выбирают MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Быстрая доставка и изготовление.</li>
              <li>Надежная продукция с отзывами.</li>
              <li>Официальная гарантия до 5 лет.</li>
              <li>Проекты под ключ по всей России.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};