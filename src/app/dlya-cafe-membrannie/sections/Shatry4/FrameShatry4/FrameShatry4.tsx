'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Мембранные шатры для кафе, ресторанов и торговых точек
      </h3>

      <p className="font-medium text-lg leading-6">
        Мембранные шатры являются инновационным решением для создания уникального и
        комфортного пространства для посетителей. Их преимущества можно перечислить следующим образом:
      </p>

      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Стильный дизайн:</span> современный и эстетичный вид, создающий уютную атмосферу.</li>
        <li><span className="font-semibold">Гибкость конструкции:</span> адаптация под обеденные зоны, мероприятия или отдых.</li>
        <li><span className="font-semibold">Удобство использования:</span> лёгкий монтаж и демонтаж, идеальны для сезонных площадок.</li>
        <li><span className="font-semibold">Защита от погоды:</span> материалы защищают от солнца, дождя и ветра.</li>
        <li><span className="font-semibold">Уникальность и маркетинг:</span> необычный дизайн привлекает гостей и внимание в соцсетях.</li>
        <li><span className="font-semibold">Прочность и надёжность:</span> долговечные материалы обеспечивают долгий срок службы.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Использование мембранных шатров выгодно и удобно — это уникальное и функциональное
        пространство для посетителей в любое время года.
      </p>

      <h4 className="font-semibold text-xl leading-6">Где купить мембранные шатры?</h4>
      <p className="font-medium text-lg leading-6">
        Обратитесь в <span className="font-semibold">MOBILE TENT</span> — мы специализируемся на
        производстве и продаже высококачественных мембранных шатров для кафе и ресторанов.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества покупки в MOBILE TENT:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Качество и прочность:</span> каркас из оцинкованной стали, крыша из ПВХ высокой плотности.</li>
        <li><span className="font-semibold">Огнестойкий материал:</span> безопасность для гостей и персонала.</li>
        <li><span className="font-semibold">Устойчивость к ветровой нагрузке:</span> стабильность даже в суровых условиях.</li>
        <li><span className="font-semibold">Индивидуальный подход:</span> проектирование под рельеф и потребности заказчика.</li>
        <li><span className="font-semibold">Доступные цены:</span> конкурентоспособные условия для любого бюджета.</li>
        <li><span className="font-semibold">Гибкий дизайн:</span> кастомизация под ваш бренд и стиль.</li>
        <li><span className="font-semibold">Простота в обслуживании:</span> лёгкая очистка и низкие эксплуатационные расходы.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Приобретение мембранных шатров в MOBILE TENT — гарантия качества, надёжности и безопасности.  
        Создайте стильное пространство для посетителей уже сегодня!
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Мембранные шатры для кафе и ресторанов
      </h3>
      <p className="font-medium text-sm leading-5">
        Современное решение для комфортных площадок. Стиль, защита от погоды и надёжность.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Стильный дизайн и уют</li>
        <li>Адаптация под разные зоны</li>
        <li>Простой монтаж и демонтаж</li>
        <li>Защита от солнца, дождя и ветра</li>
        <li>Эффектный внешний вид для маркетинга</li>
        <li>Прочность и долговечность</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Прочный стальной каркас + ПВХ крыша</li>
        <li>Огнестойкий материал</li>
        <li>Устойчивость к ветровым нагрузкам</li>
        <li>Проектирование под ваши потребности</li>
        <li>Доступные цены</li>
        <li>Кастомизация под бренд</li>
        <li>Простое обслуживание</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Закажите мембранные шатры в MOBILE TENT уже сегодня!
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Мембранные шатры</span>
            <span className="text-[#232c42]"> для кафе и ресторанов</span>
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
            <span className="text-[#527dc5]">Мембранные шатры</span>
            <span className="text-[#232c42]"> для кафе и ресторанов</span>
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