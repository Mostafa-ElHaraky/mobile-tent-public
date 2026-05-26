'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  const RussianContentDesktop = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-4">
      <h3 className="font-semibold text-2xl leading-7">
        Шестигранные шатры «Гексагональ» от Mobile Tent
      </h3>

      <p className="font-medium text-lg leading-6">
        Шатры «Гексагональ» сочетают инновационный дизайн и практичность. Шестигранная форма
        не только эффектно выглядит, но и повышает устойчивость к внешним воздействиям —
        идеальное решение для стильного и надёжного укрытия на любых событиях.
      </p>

      <h4 className="font-semibold text-xl leading-6">Технические характеристики:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Каркас из высокопрочного алюминия — долговечность и стабильность.</li>
        <li>Водонепроницаемое ПВХ-покрытие, защита от дождя и ветра.</li>
        <li>Антивандальное покрытие для дополнительной безопасности.</li>
        <li>Система быстрой сборки/демонтажа — установка за минимальное время.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Преимущества «Гексагонали»:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Универсальность: спорт, фестивали, выставки, корпоративы.</li>
        <li>Модульность: объединение нескольких шатров для увеличения площади.</li>
        <li>Высокая защита от погодных условий для открытых площадок.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Применение:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Спортивные зоны и штабы соревнований.</li>
        <li>Фестивальные лаунжи и концертные площадки.</li>
        <li>Выставочные павильоны и ярмарочные стенды.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Производство Mobile Tent:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Передовые технологии и сертифицированные материалы.</li>
        <li>Многоступенчатый контроль качества на каждом этапе.</li>
        <li>Индивидуальные проекты и гибкие условия сотрудничества.</li>
      </ul>

      <h4 className="font-semibold text-xl leading-6">Почему Mobile Tent:</h4>
      <ul className="list-disc pl-6 font-medium text-lg leading-6 space-y-2">
        <li>Гарантии качества и надёжности.</li>
        <li>Комплекс: консалтинг, проектирование, поддержка на всех этапах.</li>
        <li>Команда профессионалов и лучшие решения под задачу.</li>
      </ul>

      <p className="font-medium text-lg leading-6 text-[#527dc5]">
        Шестигранные шатры «Гексагональ» — совершенство для любых событий. Обеспечьте комфорт и
        защиту гостям, создайте атмосферу, которую запомнят. Оставьте заявку — мы поможем
        выбрать идеальную конфигурацию.
      </p>
    </div>
  );

  const RussianContentMobile = () => (
    <div className="w-full [font-family:'Raleway',Helvetica] text-[#394355] space-y-3">
      <h3 className="font-semibold text-lg leading-6">
        Шатры «Гексагональ» (шестигранные)
      </h3>
      <p className="font-medium text-sm leading-5">
        Инновационный дизайн + практичность: устойчивые, модульные и быстрые в установке.
      </p>

      <h4 className="font-semibold text-base leading-5">Технически:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Алюминиевый каркас</li>
        <li>ПВХ-покрытие (водонепроницаемо)</li>
        <li>Антивандальная защита</li>
        <li>Быстрая сборка/разбор</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Плюсы и применение:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Спорт, фестивали, выставки, корпоративы</li>
        <li>Модульность и расширение площади</li>
        <li>Защита от непогоды на открытом воздухе</li>
      </ul>

      <h4 className="font-semibold text-base leading-5">Mobile Tent:</h4>
      <ul className="list-disc pl-5 font-medium text-sm leading-5 space-y-1.5">
        <li>Качество и контроль на производстве</li>
        <li>Индивидуальные проекты</li>
        <li>Сопровождение на всех этапах</li>
      </ul>

      <p className="font-medium text-sm leading-5 text-[#527dc5]">
        Нужен гексагональный шатёр? Оставьте заявку — подберём решение под событие.
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
            <span className="text-[#232c42]"> «Гексагональ»</span>
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
            <span className="text-[#232c42]"> «Гексагональ»</span>
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