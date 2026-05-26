'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Купольные шатры</span>{" "}
            <span className="text-[#232c42]">от компании MOBILE TENT</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о купольных шатрах
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Купольные шатры — это не просто временные конструкции, а стильное и функциональное решение для различных мероприятий. 
              Они идеально подходят как для частных праздников, так и для корпоративных событий. Наша компания предлагает широкий ассортимент купольных шатров, 
              которые помогут вам создать уникальную атмосферу на вашем мероприятии.
            </p>

            <p>
              Уникальная форма обеспечивает отличную устойчивость к ветру и осадкам, создавая уютное пространство для гостей. 
              Легкость установки и разнообразие дизайна позволяют адаптировать шатер под любые нужды, будь то свадьба, фестиваль или корпоратив.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества купольных шатров</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Устойчивость к погодным условиям:</b> выдерживают сильный ветер и дождь.</li>
              <li><b>Эстетика:</b> стильный и современный дизайн для свадеб, корпоративов и фестивалей.</li>
              <li><b>Простота установки:</b> быстрая сборка и демонтаж.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Как выбрать?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Размер:</b> учитывайте количество гостей.</li>
              <li><b>Место установки:</b> выбирайте подходящую площадку.</li>
              <li><b>Тематика мероприятия:</b> стиль и цвет шатра должны гармонировать с оформлением.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Разнообразие моделей</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Для бассейна — идеален для летних вечеринок у воды.</li>
              <li>Для кемпинга — лёгкий и мобильный вариант.</li>
              <li>Шатер-ресторан — создаёт уникальную атмосферу в заведении.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Опыт и профессионализм</h3>
            <p>
              Более 10 лет на рынке и свыше 1000 успешных мероприятий. 
              Наша команда экспертов знает все тонкости установки и эксплуатации купольных шатров.
            </p>

            <h3 className="font-semibold text-2xl">Доверие к нашей компании</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Гарантии:</b> уверенность в качестве изделий.</li>
              <li><b>Лицензии и сертификаты:</b> официальные документы.</li>
              <li><b>Прозрачные условия:</b> открытый диалог и честное сотрудничество.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                Компания MOBILE TENT — ваш надежный партнёр в организации мероприятий любого масштаба. 
                Свяжитесь с нами сегодня и сделайте ваш праздник незабываемым!
              </p>
            </div>

            <h3 className="font-semibold text-2xl">Идеальное решение для вашего пространства</h3>
            <p>
              Купольные шатры подходят для природы и города, обеспечивая уютное и функциональное пространство для любых условий.
            </p>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Купольные шатры
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Купольные шатры — стильное и функциональное решение для мероприятий любого формата. 
              Устойчивость к погоде, эстетика и лёгкость установки делают их идеальными.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Устойчивость к ветру и дождю</li>
              <li>Современный стиль и эстетика</li>
              <li>Быстрая установка и демонтаж</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Гарантии и качество</li>
              <li>Лицензии и сертификаты</li>
              <li>Опыт более 10 лет</li>
              <li>Прозрачные условия сотрудничества</li>
            </ul>

            <div className="p-4 rounded-lg bg-[#f6f8ff]">
              <p className="font-semibold text-center">
                Закажите купольный шатёр прямо сейчас и создайте атмосферу, о которой мечтали!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
