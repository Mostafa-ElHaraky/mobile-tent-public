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
            <span className="text-[#527dc5]">Пространство, где события обретают масштаб:</span>{" "}
            <span className="text-[#232c42]">шатёр Пагода 100 м²</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Получить расчёт и сроки
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Когда на мероприятии важна каждая деталь — от логистики до визуального восприятия, правильный выбор шатра становится стратегическим решением. Пагода <b>100 м²</b> — это конструкция, проверенная сотнями кейсов: вмещает до 100 человек, защищает от осадков и ветра, создаёт статусную зону под любое событие — от бизнес-форума до open-air фестиваля.
            </p>
            <p>
              Компания <b>Mobile-tent</b> предлагает аренду и продажу шатров с полной технической поддержкой: от подбора конфигурации до установки и обслуживания. Работаем по всей России, включая Москву и регионы ЦФО.
            </p>

            <h3 className="font-semibold text-2xl">Почему нам доверяют масштабные события?</h3>
            <p><b>10+ лет опыта = профессионализм без компромиссов</b></p>
            <p>
              С <b>2013 года</b> мы реализовали более <b>1500 проектов</b>: городские концерты, конференции, международные выставки, свадьбы на 200 гостей и даже мобильные медцентры. Это не просто аренда — это решение задач заказчика через архитектуру и точность.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Сертифицированные конструкции по стандартам безопасности;</li>
              <li>Монтаж за 2–3 часа в любой точке России;</li>
              <li>Команда 30+ специалистов: инженеры, проектировщики, монтажники;</li>
              <li>Свой автопарк и склад шатров в Москве;</li>
              <li>Гарантия на материалы, тенты и крепёж.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где востребован шатер Пагода 100 м²?</h3>
            <p>
              Формат подходит для масштабных ивентов, где важна вместимость и внешний облик. Высокий конус крыши создаёт архитектурный акцент и подчёркивает статус мероприятия.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Свадьбы open-air с полом, светом и декором;</li>
              <li>Выставки: павильон, бренд-зона, точка продаж;</li>
              <li>Концерты: backstage, фудкорт, регистрация;</li>
              <li>Временные павильоны ярмарок, форумов, кинофестивалей;</li>
              <li>Кейтеринг, пресс-центры, технические блоки.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Купить или арендовать? Поможем выбрать</h3>
            <p>
              Для единичных мероприятий выгодна аренда с обслуживанием. Для агентств и операторов — покупка с модификацией и брендированием.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Индивидуальный подбор комплектации;</li>
              <li>Долгосрочная аренда и выкуп после проката;</li>
              <li>Поддержка на всём жизненном цикле шатра;</li>
              <li>Хранение на наших складах в межсезонье.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Монтаж и обслуживание: быстро, точно, безопасно</h3>
            <p>
              Монтаж занимает 2–4 часа. Учитываем климат, грунт и окружение. В услугу входит:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Выбор места и крепежей (балласт, анкеры);</li>
              <li>Транспортировка из московского хаба;</li>
              <li>Монтаж с контролем инженера;</li>
              <li>Установка света, климата, декора;</li>
              <li>Демонтаж и вывоз.</li>
            </ul>
            <p>Все фиксируется договором с гарантиями. Без скрытых платежей и рисков.</p>

            <h3 className="font-semibold text-2xl">Конкурентные преимущества Mobile-tent</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Гарантированная герметичность шатров;</li>
              <li>Модульность — объединение для увеличения площади;</li>
              <li>Эстетика без компромиссов: белый ПВХ, ровная геометрия;</li>
              <li>Вежливые монтажники;</li>
              <li>Поддержка 24/7 до, во время и после события.</li>
            </ul>

            <h3 className="font-semibold text-2xl">FAQ</h3>
            <p><b>Можно ли использовать шатер зимой?</b> Да, при тепловых пушках и подготовке площадки. ПВХ выдерживает до −30 °С.</p>
            <p><b>Что входит в аренду?</b> Базово шатёр, доставка, монтаж. Дополнительно — свет, пол, отопление, мебель, брендирование. Прозрачная смета без скрытых платежей.</p>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p className="font-semibold">Готовы к событию, которое запомнят?</p>
              <p>
                Ваша выставка, свадьба или деловая встреча в просторной Пагоде: чисто, комфортно, красиво. Всё вовремя, всё работает.
              </p>
              <p className="text-[#527dc5] font-semibold">Mobile-tent — когда форма соответствует содержанию.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Пагода 100 м² — аренда и покупка
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Узнать цену и сроки
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Просторная Пагода 100 м² — до 100 гостей, монтаж 2–4 часа, модульность, брендирование и полный сервис под ключ.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>10+ лет опыта, 1500 проектов</li>
              <li>Монтаж за 2–3 часа</li>
              <li>Сертифицированный ПВХ и алюминий</li>
              <li>Хранение и поддержка</li>
            </ul>

            <h3 className="font-semibold">Сценарии</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Свадьбы open-air</li>
              <li>Выставки и бренд-зоны</li>
              <li>Фестивали и ярмарки</li>
              <li>Backstage, фудкорт</li>
            </ul>

            <h3 className="font-semibold">FAQ</h3>
            <p><b>Зимой?</b> Да, до −30 °С с обогревом.</p>
            <p><b>Аренда включает?</b> Шатёр, доставку, монтаж. Опции — пол, свет, мебель, брендирование.</p>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Mobile-tent — архитектура, которая работает.</p>
              <p className="text-[#527dc5] font-semibold">Оставьте заявку — всё организуем вовремя.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};