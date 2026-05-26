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
            <span className="text-[#527dc5]">Аренда и покупка</span>{" "}
            <span className="text-[#232c42]">шатра Пагода 3×3 от Mobile-tent</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Получить предложение
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Проведение open-air мероприятий требует комфорта, эстетики и защиты от погоды.
              Компактный и эффектный шатёр <b>Пагода 3×3</b> — идеальный выбор для свадеб, корпоративов,
              выставок, маркетов и камерных торжеств. <b>Mobile-tent</b> предлагает аренду и продажу с полным циклом обслуживания.
            </p>

            <h3 className="font-semibold text-2xl">Почему именно Пагода 3×3?</h3>
            <p>
              Характерная пирамидальная крыша, устойчивость к ветровым нагрузкам и универсальность.
              Строгая геометрия и элегантный вид уместны на событиях любых форматов.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Надёжная конструкция:</b> алюминиевый профиль для многократного использования.</li>
              <li><b>Материалы:</b> огнестойкие и водонепроницаемые, сертифицированные для массовых мероприятий.</li>
              <li><b>Монтаж:</b> быстрая установка без спецтехники.</li>
              <li><b>Брендирование:</b> оформление под корпоративный стиль и тематику события.</li>
              <li><b>Логистика:</b> удобство транспортировки и хранения.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Аренда или покупка — что выбрать?</h3>
            <p>
              <b>Аренда</b> — оптимально для одноразовых и редких событий:
              включены доставка, монтаж, демонтаж и полное сопровождение по договору с техпаспортом изделия.
            </p>
            <p>
              <b>Покупка</b> — выгодна при регулярных активностях (кейтеринг, выставки, маркетинг, загородные площадки):
              вложения окупаются уже после <b>3–4 мероприятий</b>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#f6f8ff]">
                <p className="font-semibold">Гарантии Mobile-tent</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Юридическая прозрачность</li>
                  <li>Персональный менеджер</li>
                  <li>Обучение установке (при покупке)</li>
                  <li>Ремонт и сервис</li>
                </ul>
              </div>
            </div>

            <h3 className="font-semibold text-2xl">Где и как использовать 3×3</h3>
            <p>Несмотря на компактные размеры, внутреннее пространство легко организовать под мебель, оборудование и декор.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Свадьба:</b> зона регистрации, фотозона, лаунж, фуршет.</li>
              <li><b>Промостенд:</b> фасадное брендирование, логотипы, POS-материалы.</li>
              <li><b>Торговая точка:</b> кассовая/товарная зона на ярмарках и маркетах.</li>
              <li><b>Лекторий:</b> мини-презентации и выступления на фестивалях.</li>
            </ul>
            <p>
              Дополнительно предоставляем: напольные покрытия, освещение, отопление, мебель, текстиль, баннеры —
              подбор под формат, сезон и бюджет.
            </p>

            <h3 className="font-semibold text-2xl">Почему выбирают Mobile-tent</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>9+ лет на рынке мобильных конструкций</li>
              <li>Команда, обученная по международным стандартам</li>
              <li>Точность сроков и соблюдение технорм</li>
              <li>Гибкая ценовая политика, работа с НДС</li>
              <li>Готовность к срочным выездам и форс-мажорам</li>
              <li>Собственные склады и логистика — без посредников</li>
            </ul>
            <p>
              Участвуем в профильных выставках, имеем положительные отзывы и упоминания в деловых СМИ —
              это формирует высокий уровень доверия и подтверждает нашу экспертность.
            </p>

            <h3 className="font-semibold text-2xl">FAQ — частые вопросы</h3>
            <p>
              <b>Можно ли использовать зимой?</b> Да. Ставим боковые панели, подключаем обогреватели
              — создаём тёплое пространство даже в межсезонье.
            </p>
            <p>
              <b>Сложно ли с установкой?</b> Нет. Монтаж выполняет сертифицированная бригада по чек-листам и регламентам —
              без сюрпризов и задержек.
            </p>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">
                Сделайте уверенный шаг к профессиональной организации вашего мероприятия.
              </p>
              <p>
                Позвоните нам, оставьте заявку на сайте или закажите обратный звонок — подготовим смету
                и подберём лучшее решение под ваш формат.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Mobile-tent — ваш надёжный партнёр. Мы не обещаем — мы делаем. Уже сегодня.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Пагода 3×3 — аренда и покупка
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Рассчитать стоимость
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Компактный, элегантный шатёр для свадеб, корпоративов, выставок и маркетов. Быстрый монтаж, сертифицированные материалы, брендирование под ваш стиль.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Алюминиевый профиль, долговечность</li>
              <li>Огнестойкие/водонепроницаемые ткани</li>
              <li>Установка без спецтехники</li>
              <li>Брендирование и декор</li>
              <li>Удобная логистика</li>
            </ul>

            <h3 className="font-semibold">Аренда или покупка</h3>
            <p><b>Аренда:</b> доставка, монтаж/демонтаж, сопровождение.</p>
            <p><b>Покупка:</b> окупаемость за 3–4 мероприятия.</p>

            <h3 className="font-semibold">Где использовать</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Зона регистрации/фотозона</li>
              <li>Промостенд бренда</li>
              <li>Торговая точка/касса</li>
              <li>Лекторий/мини-сцена</li>
            </ul>

            <h3 className="font-semibold">Почему Mobile-tent</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>9+ лет на рынке</li>
              <li>Сроки и технормы</li>
              <li>НДС, гибкие цены</li>
              <li>Собственные склады</li>
            </ul>

            <h3 className="font-semibold">FAQ</h3>
            <p><b>Зимой можно?</b> Да, с боковыми панелями и обогревом.</p>
            <p><b>Кто монтирует?</b> Сертифицированная бригада по регламенту.</p>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Готовое решение «под ключ» — от сметы до сервиса.</p>
              <p className="text-[#527dc5] font-semibold">Оставьте заявку — мы всё организуем.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};