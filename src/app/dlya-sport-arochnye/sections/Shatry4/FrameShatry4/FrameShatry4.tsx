'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Спортивные арочные шатры для тренировок, соревнований и мероприятий
      </h3>

      <p className="font-medium text-lg leading-6">
        Спортивные арочные шатры — универсальные и прочные конструкции для проведения
        тренировок, соревнований и массовых активностей. Арочная форма оптимизирует
        пространство и позволяет разместить под одной крышей площадки и оборудование.
      </p>

      <h4 className="font-semibold text-xl leading-6">Преимущества для спорта:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Универсальность:</span> футбол, баскетбол, теннис, гимнастика, лёгкая атлетика и др.; конфигурация под задачу.</li>
        <li><span className="font-semibold">Мобильность и скорость:</span> быстрый монтаж/демонтаж и перенос на новые площадки.</li>
        <li><span className="font-semibold">Прочность и надёжность:</span> устойчивость к ветру, снегу, дождю и экстремальным температурам — круглый год.</li>
        <li><span className="font-semibold">Экономичность:</span> дешевле строительства стационарных сооружений и их содержания.</li>
        <li><span className="font-semibold">Комфорт и безопасность:</span> защищённое, функциональное пространство для спортсменов и зрителей.</li>
      </ul>

      <p className="font-medium text-lg leading-6">
        Купить арочный шатёр для спорта — разумное решение для школ, вузов, фитнес-центров,
        федераций и организаторов соревнований.
      </p>

      <h4 className="font-semibold text-xl leading-6">
        Почему спортивные шатры от производителя MOBILE TENT
      </h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li><span className="font-semibold">Материалы премиум-класса:</span> каркас из стали/алюминия; ПВХ-покрытия с УФ-стойкостью и высокой износостойкостью.</li>
        <li><span className="font-semibold">Быстрая установка:</span> продуманная система креплений — интуитивный и оперативный монтаж.</li>
        <li><span className="font-semibold">Гибкость дизайна:</span> широкий выбор размеров/форм, цвета, брендирование, дополнительные элементы.</li>
        <li><span className="font-semibold">Безопасность:</span> расчёты на ветровые/снеговые нагрузки, надёжные узлы крепления.</li>
        <li><span className="font-semibold">Долговечность и низкие OPEX:</span> минимальное обслуживание и длительный срок службы.</li>
        <li><span className="font-semibold">Сервис и поддержка:</span> помощь на всех этапах — от подбора до эксплуатации.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Хотите быстро создать комфортный спортивный комплекс? Оставьте заявку — MOBILE TENT подберёт оптимальную конфигурацию и сроки поставки.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Спортивные арочные шатры
      </h3>
      <p className="font-medium text-sm leading-5">
        Универсальные, прочные, быстрые в установке. Идеальны для тренировок, соревнований и событий круглый год.
      </p>

      <h4 className="font-semibold text-base leading-5">Преимущества:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Для разных видов спорта</li>
        <li>Быстрый монтаж/демонтаж</li>
        <li>Устойчивость к погоде</li>
        <li>Экономичнее стационара</li>
        <li>Комфорт и безопасность</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Почему MOBILE TENT:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Сталь/алюминий + ПВХ с УФ-стойкостью</li>
        <li>Широкий размерный ряд и брендирование</li>
        <li>Расчёты на нагрузки и надёжные крепления</li>
        <li>Долговечность и низкие расходы</li>
        <li>Экспертный сервис</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Нужен спортивный шатёр? Оставьте заявку — подберём решение под ваши задачи.
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9">
          <h2 className="w-fit relative font-semibold text-4xl [font-family:'Raleway',Helvetica]">
            <span className="text-[#527dc5]">Арочные шатры</span>
            <span className="text-[#232c42]"> для спорта и мероприятий</span>
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
            <span className="text-[#527dc5]">Арочные шатры</span>
            <span className="text-[#232c42]"> для спорта и мероприятий</span>
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