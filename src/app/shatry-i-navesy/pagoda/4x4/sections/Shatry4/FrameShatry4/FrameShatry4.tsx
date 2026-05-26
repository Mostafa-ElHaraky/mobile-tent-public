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
            <span className="text-[#527dc5]">Шатры Пагода 4×4</span>{" "}
            <span className="text-[#232c42]">от Mobile-tent: функциональность, надёжность и стиль</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Получить расчёт и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Организация open-air мероприятий требует продуманных решений, где всё — от визуала до микроклимата —
              работает на успех события. Формат <b>Пагода 4×4</b> — оптимальный размер для камерных и
              среднеформатных мероприятий, презентаций, ярмарок и частных праздников. <b>Mobile-tent</b> предоставляет
              аренду и продажу с полным сопровождением — от консультации до установки.
            </p>

            <h3 className="font-semibold text-2xl">Почему выбирают Mobile-tent: опыт, экспертиза, доверие</h3>
            <p>
              Мы — не просто поставщик, а эксперт с девятилетним опытом мобильных решений. Реализовано
              <b> 1400+ проектов</b> в <b>48 регионах</b> России: корпоративные заказчики, агентства, органы власти,
              выставочные центры, владельцы загородных домов. Работаем по договору, предоставляем паспорт изделия и
              сертификаты, проверяем конструкции перед сдачей. Монтажники с опытом от 3 лет, собственная логистика —
              в срок даже в пик сезона.
            </p>

            <h3 className="font-semibold text-2xl">Где применим шатёр и чем он выгоден</h3>
            <p>
              Архитектура «Пагоды» — высокая крыша с центральной точкой, строгие линии, прочный каркас — одновременно
              эффектна и практична: устойчивость к ветру, осадкам и солнцу, комфорт внутри.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Быстрый монтаж:</b> установка за 1–2 часа без спецтехники.</li>
              <li><b>Надёжность:</b> алюминиевый каркас, огнестойкая ткань с защитой от УФ и влаги.</li>
              <li><b>Универсальность:</b> ивенты, выставки, частные площадки.</li>
              <li><b>Инфраструктура:</b> брендирование, подключение света и отопления.</li>
              <li><b>Модульность:</b> объединение нескольких шатров в единый комплекс.</li>
            </ul>
            <p>
              Пагода 4×4 — временная сцена, VIP-зона, фуршет, экспозиция. Может стоять отдельно или быть частью
              комплексного решения.
            </p>

            <h3 className="font-semibold text-2xl">Что выбрать: аренда или покупка?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#f6f8ff]">
                <p className="font-semibold mb-2">Аренда 4×4</p>
                <p>
                  Идеально для единичных мероприятий: доставка, монтаж, техконтроль, демонтаж — строго по графику и без
                  сюрпризов.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#f6f8ff]">
                <p className="font-semibold mb-2">Покупка 4×4</p>
                <p>
                  Выгодно при регулярных событиях или для дачи: при правильной эксплуатации прослужит много сезонов.
                </p>
              </div>
            </div>

            <h3 className="font-semibold text-2xl">Как мы работаем: чёткий процесс</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Консультация и подбор решения.</li>
              <li>Договор с фиксированными сроками и стоимостью.</li>
              <li>Подготовка и проверка шатра (для аренды).</li>
              <li>Доставка и установка (выезды по регионам).</li>
              <li>Поддержка на всех этапах — от монтажа до эксплуатации.</li>
            </ol>
            <p>
              Мы не скрываем цен, не навязываем услуги и открыты к диалогу. <b>87%</b> новых клиентов приходят по
              рекомендации.
            </p>

            <h3 className="font-semibold text-2xl">Где чаще всего используется</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Выставки и компактные стенды с брендированием</li>
              <li>Торговые и ремесленные ярмарки</li>
              <li>Летние сцены и концертные точки</li>
              <li>VIP-зоны на фестивалях</li>
              <li>Семейные праздники, свадьбы, юбилеи</li>
              <li>Лаунж-зоны и точки питания на open-air</li>
            </ul>

            <h3 className="font-semibold text-2xl">FAQ — ответы на частые вопросы</h3>
            <p>
              <b>Можно ли зимой или в непогоду?</b> Да. С боковыми стенками и обогревом шатёр устойчив к ветру и
              осадкам. Предоставим схему и рекомендации по размещению.
            </p>
            <p>
              <b>Сколько человек вмещает?</b> Обычно до <b>25–30</b> гостей (зависит от планировки). Подходит для
              фуршета, презентаций, зоны регистрации или буфета.
            </p>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">Представьте своё событие с Mobile-tent</p>
              <p>
                Белоснежная Пагода с вашим логотипом привлекает гостей. Внутри — светло, уютно, всё подключено и
                готово к работе. Или дача, где Пагода — постоянная летняя зона отдыха в любую погоду. Мы делаем эти
                сценарии реальностью — точно в срок.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Заполните форму на сайте или позвоните — подготовим смету и план реализации под ваш формат.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Пагода 4×4 — аренда и покупка
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Узнать цену и сроки
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Оптимальный формат для выставок, маркетов и частных праздников. Быстрый монтаж (1–2 ч), алюминиевый
              каркас, огнестойкая ткань, брендирование, свет и отопление.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Без спецтехники</li>
              <li>УФ/влагозащита, огнестойкость</li>
              <li>Модульность и объединение</li>
              <li>Для ивентов и частных площадок</li>
            </ul>

            <h3 className="font-semibold">Аренда или покупка</h3>
            <p><b>Аренда:</b> привоз, монтаж, контроль, демонтаж.</p>
            <p><b>Покупка:</b> выгодно при регулярных событиях/для дачи.</p>

            <h3 className="font-semibold">Применение</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Стенд/ярмарка</li>
              <li>VIP/лаунж-зона</li>
              <li>Летняя сцена</li>
              <li>Свадьба/семейный праздник</li>
            </ul>

            <h3 className="font-semibold">FAQ</h3>
            <p><b>Зима?</b> Да, со стенками и обогревом.</p>
            <p><b>Вместимость?</b> Около 25–30 гостей.</p>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Mobile-tent — решения под ключ.</p>
              <p className="text-[#527dc5] font-semibold">Оставьте заявку — всё организуем вовремя.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};