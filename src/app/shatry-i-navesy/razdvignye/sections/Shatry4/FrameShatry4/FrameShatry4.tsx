'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[200px]">
        <div className="flex flex-col items-start gap-9 max-w-5xl [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Раздвижные шатры</span>{" "}
            <span className="text-[#232c42]">— портативные решения для любых задач</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Получить консультацию
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Складные шатры — портативные конструкции для временного укрытия на открытом воздухе. Они состоят из
              металлического каркаса и текстильного навеса (полиэстер и др. прочные материалы).
            </p>
            <p>
              Их задача — защита от непогоды, солнца и ветра: от open-air мероприятий и выставок до кемпинга и массовых
              событий. Компактность, лёгкость сборки и транспортировки — ключевые преимущества. Механизмы быстрого
              монтажа позволяют установить шатёр за несколько минут, без специальных инструментов.
            </p>
            <p>
              Формы и размеры варьируются под задачу: от одиночных решений до комплексов для крупных мероприятий.
            </p>

            <h3 className="font-semibold text-2xl">Где применяются складные шатры?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Мероприятия на свежем воздухе:</b> фестивали, концерты, ярмарки, праздники — укрытие гостей и участников.</li>
              <li><b>Выставки и ярмарки:</b> экспозиция товаров/услуг, защита от осадков, удобные зоны общения.</li>
              <li><b>Спортивные события:</b> временные раздевалки, зоны отдыха и питания.</li>
              <li><b>Кемпинг и туризм:</b> комфортное временное проживание и защита от погоды.</li>
              <li><b>Кафе и рестораны:</b> уличные веранды с защитой от солнца и дождя.</li>
              <li><b>Свадьбы и торжества:</b> площадки церемоний и банкетов с защитой гостей.</li>
              <li><b>Торговля и стенды:</b> уличные торговые точки и выставочные зоны.</li>
              <li><b>Временные склады и ангары:</b> хранение товаров/инвентаря на стройплощадках и производствах.</li>
              <li><b>Мероприятия в природе:</b> пикники, лагеря, экспедиции.</li>
              <li><b>Отдых и развлечения:</b> кинопоказы, фестивали и др. активности.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Преимущества покупки шатров-трансформеров в MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Дизайн:</b> передовые технологии и продуманный, удобный и стильный продукт.</li>
              <li><b>Материалы:</b> высокое качество и долговечность — служат годами.</li>
              <li><b>Компактность:</b> лёгко складываются и переносятся — идеальны для поездок.</li>
              <li><b>Покупка у производителя:</b> прямые условия, качество и поддержка от нашей команды.</li>
              <li><b>Сервис:</b> сопровождение на каждом этапе — от подбора до постпродажной помощи.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">Нужен совет по выбору?</p>
              <p>
                Специалисты MOBILE TENT подскажут оптимальную модель под вашу задачу и бюджет. Качество — на 100%.
              </p>
              <p className="text-[#527dc5] font-semibold">Свяжитесь с нами — подберём комплект и сроки поставки.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Раздвижные (складные) шатры
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Консультация и подбор
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Портативные конструкции с металлическим каркасом и тканевым навесом. Быстрый монтаж за минуты, без
              инструментов.
            </p>

            <h3 className="font-semibold">Где применяются</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Фестивали, концерты, ярмарки</li>
              <li>Выставки и торговля</li>
              <li>Спорт и кемпинг</li>
              <li>Кафе, рестораны, свадьбы</li>
              <li>Склады, стройплощадки</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Интеллектуальный дизайн</li>
              <li>Долговечные материалы</li>
              <li>Компактность и мобильность</li>
              <li>Покупка у производителя</li>
              <li>Поддержка на каждом этапе</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Оставьте заявку — подберём решение под ключ.</p>
              <p className="text-[#527dc5] font-semibold">MOBILE TENT — надёжно, удобно, красиво.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};