'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Выставочные шатры</span>{" "}
            <span className="text-[#232c42]">от MOBILE TENT</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] 
            text-white font-semibold text-lg"
          >
            Заказать выставочный шатёр
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              <b>Выставочные шатры</b> – это специально разработанные конструкции для проведения выставок,
              презентаций, ярмарок и других мероприятий, где важно достойно представить продукты, искусство или инновации.
            </p>

            <h3 className="font-semibold text-2xl">Что это и зачем они нужны?</h3>
            <p>
              Это мобильные площадки разных размеров и форм, создающие атмосферу значимости и стиля. 
              Они позволяют организаторам гибко управлять пространством и условиями мероприятия.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Гибкость и мобильность – лёгкий монтаж и демонтаж;</li>
              <li>Привлекательный дизайн – адаптируется под концепцию выставки;</li>
              <li>Защита от непогоды – надёжные материалы и конструкция;</li>
              <li>Полный контроль над средой – свет, звук и атмосфера;</li>
              <li>Эффективное пространство для экспозиций и презентаций.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать?</h3>
            <p>
              Идеальные выставочные шатры доступны в компании <b>MOBILE TENT</b>. Мы учитываем потребности клиентов и предлагаем лучшие решения.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Индивидуальный подход к каждому проекту;</li>
              <li>Качество и надёжность, подтверждённые практикой;</li>
              <li>Опыт и экспертиза в шатрах и павильонах;</li>
              <li>Комплексные услуги: от консультации до монтажа;</li>
              <li>Инновационные решения и современные модели.</li>
            </ul>

            <p className="pt-4">
              Выберите <b>выставочные шатры</b> от MOBILE TENT и создайте идеальное пространство для представления ваших идей и продуктов.
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Выставочные шатры от MOBILE TENT
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] 
            text-white font-semibold text-sm self-center"
          >
            Заказать шатёр
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              <b>Выставочные шатры</b> – это мобильные конструкции для выставок, презентаций и ярмарок.
              Гибкие по форме и размерам, они создают стильное и удобное пространство.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Лёгкий монтаж и перенос;</li>
              <li>Современный дизайн;</li>
              <li>Защита от дождя, ветра и солнца;</li>
              <li>Полный контроль над атмосферой;</li>
              <li>Оптимальное использование пространства.</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT?</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Индивидуальный подход;</li>
              <li>Высокое качество и надёжность;</li>
              <li>Опыт и экспертиза;</li>
              <li>Комплексные услуги;</li>
              <li>Инновационные модели.</li>
            </ul>

            <p>
              С <b>MOBILE TENT</b> вы создадите идеальное выставочное пространство для любых идей.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};