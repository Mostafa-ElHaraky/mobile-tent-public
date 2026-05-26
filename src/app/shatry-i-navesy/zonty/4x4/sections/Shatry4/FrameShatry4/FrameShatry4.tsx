'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Уличные зонты 3 м²</span>{" "}
            <span className="text-[#232c42]">для кафе и ресторанов — стиль и комфорт</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать цену и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Уличные зонты для кафе и ресторанов — не только функциональный элемент, но и стильный аксессуар,
              придающий уникальный шарм любому месту. Они помогают создать уютное и комфортное пространство для гостей.
            </p>

            <h3 className="font-semibold text-2xl">Что это и зачем нужны?</h3>
            <p>
              Уличные зонты — компактные и эффективные средства создания тени и защиты от ультрафиолета. Они формируют
              комфортную среду на террасах, позволяя гостям наслаждаться едой и отдыхом на свежем воздухе без
              воздействия палящего солнца и осадков.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества зонтов 3 м²</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Эстетика и стиль:</b> создают атмосферу уюта и подчёркивают характер заведения.</li>
              <li><b>Защита от солнца и дождя:</b> надёжный комфорт для посетителей.</li>
              <li><b>Мобильность и лёгкость:</b> быстро устанавливаются и легко переставляются по необходимости.</li>
              <li><b>Простор:</b> площадь 3 м² достаточна для комфортного размещения гостей.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать зонты 3 м²?</h3>
            <p>
              Когда важны качество и надёжность, выбирайте <b>MOBILE TENT</b>. Мы предлагаем стильные уличные зонты 3 м²,
              созданные с учётом современных тенденций дизайна и передовых технологий.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Технологии и материалы:</b> долговечность и защита от внешних воздействий.</li>
              <li><b>Широкий выбор дизайнов и цветов:</b> гармония со стилем вашего заведения.</li>
              <li><b>Индивидуальный подход:</b> адаптация решения под условия эксплуатации.</li>
              <li><b>Профессиональные консультации:</b> помощь в подборе, установке и уходе.</li>
              <li><b>Надёжность и гарантия качества:</b> строгий контроль и гарантийные обязательства.</li>
              <li><b>Опыт на рынке:</b> доверие клиентов и отлаженная логистика.</li>
              <li><b>Экологичные материалы:</b> ответственность и безопасность для окружающей среды.</li>
              <li><b>Комплексное обслуживание:</b> поставка, монтаж и постгарантийная поддержка.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">
                С <b>MOBILE TENT</b> вы инвестируете в долговечные зонты, которые придают заведению шарм и поддерживают комфорт гостей.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Оставьте заявку — подберём идеальные зонты 3 м² под ваш стиль и бюджет.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Уличные зонты 3 м² — для кафе и ресторанов
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и подбор
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Компактные, стильные и мобильные зонты: тень, защита от дождя и уютный микроклимат на террасе.
            </p>

            <h3 className="font-semibold">Плюсы</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Эстетика и фирменный стиль</li>
              <li>Защита от солнца и осадков</li>
              <li>Быстрая установка и перестановка</li>
              <li>Площадь купола 3 м²</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Качественные материалы и технологии</li>
              <li>Большой выбор цветов и дизайнов</li>
              <li>Индивидуальные решения и консультации</li>
              <li>Экологичные материалы</li>
              <li>Комплексный сервис: поставка и монтаж</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Оставьте заявку — поможем с выбором зонтов 3 м².</p>
              <p className="text-[#527dc5] font-semibold">MOBILE TENT — практично, стильно, надёжно.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};