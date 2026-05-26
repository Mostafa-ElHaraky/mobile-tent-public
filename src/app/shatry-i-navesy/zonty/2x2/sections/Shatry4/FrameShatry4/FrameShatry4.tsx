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
            <span className="text-[#527dc5]">Уличные зонты 2×2 м</span>{" "}
            <span className="text-[#232c42]">— стиль и комфорт для террас</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать цену и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Уличные зонты <b>2×2 м</b> — элегантное и функциональное решение для кафе и ресторанов, стремящихся создать
              уютное пространство для гостей. Компактные зонты повышают комфорт и добавляют шарм заведению.
            </p>

            <h3 className="font-semibold text-2xl">Что это и зачем нужны?</h3>
            <p>
              Это изысканные конструкции для террас и внешних площадок, создающие уют и защиту от внешних факторов. В любую
              погоду гости могут наслаждаться трапезой или отдыхом под зонтами, не опасаясь солнца и дождя.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества уличных зонтов</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Эстетика и компактность:</b> подчёркивают стиль заведения и экономят пространство.</li>
              <li><b>Защита от солнца и дождя:</b> надёжное укрытие от природных условий.</li>
              <li><b>Простота установки и использования:</b> быстрый монтаж и мобильность, легко переставлять.</li>
              <li><b>Уют и комфорт:</b> формируют приятную атмосферу для гостей.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать зонт 2×2 м?</h3>
            <p>
              Ищете сочетание стиля и функциональности? Ваш выбор — <b>MOBILE TENT</b>. Мы предлагаем уличные зонты 2×2 м,
              созданные с учётом актуального дизайна и с применением передовых технологий.
            </p>

            <h3 className="font-semibold text-2xl">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Инновации в производстве:</b> широкий выбор дизайнов, цветов и материалов.</li>
              <li><b>Гарантия качества:</b> строгий контроль и гарантийные обязательства.</li>
              <li><b>Индивидуальный подход:</b> консультации и решения под особенности площадки.</li>
              <li><b>Экологическая ответственность:</b> экологичные материалы и устойчивые практики.</li>
              <li><b>Комплексное обслуживание:</b> от заказа до установки и сопровождения.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">
                Выбирая <b>MOBILE TENT</b>, вы инвестируете в зонты, которые служат долго и поддерживают комфорт гостей.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Оставьте заявку — подберём идеальные зонты 2×2 м для вашей террасы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Уличные зонты 2×2 м — для кафе и ресторанов
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и подбор
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Компактные и стильные зонты для террас: защита от солнца и дождя, мобильность и простой уход.
            </p>

            <h3 className="font-semibold">Плюсы</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Эстетика и экономия места</li>
              <li>Надёжная защита гостей</li>
              <li>Лёгкий монтаж/перестановка</li>
              <li>Уютный микроклимат</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Современный дизайн и материалы</li>
              <li>Гарантия качества</li>
              <li>Индивидуальные решения</li>
              <li>Эко-материалы</li>
              <li>Сервис «под ключ»</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Оставьте заявку — подберём зонты 2×2 м под ваш стиль и бюджет.</p>
              <p className="text-[#527dc5] font-semibold">MOBILE TENT — практично и красиво.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};