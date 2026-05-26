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
            <span className="text-[#527dc5]">Что такое</span>{" "}
            <span className="text-[#232c42]">натяжные тенты?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о натяжных тентах
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Натяжной тент – туристический или коммерческий вариант палатки,
              предназначенный как способ укрыться от дождя или от солнца на
              стоянке автомобилей, садовом либо дачном участке.
            </p>

            <p>
              Мы предлагаем выбрать подходящий вариант конструкции и оформить
              курьерскую отправку по Москве либо доставку в Душанбе, Ташкент,
              Баку, Ереван, Бишкек, Кишинев. Подробнее о наших возможностях
              можно уточнить на сайте.
            </p>

            <h3 className="font-semibold text-2xl">Что собой представляют?</h3>
            <p>
              Тенты с натяжением у нас представлены в ассортименте из ПВХ,
              которое имеет особенную формулу, позволяющую:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Выдерживать перепады температур;</li>
              <li>Не бояться дождя и прочих осадков;</li>
              <li>Не плавиться и не деформироваться от солнца;</li>
              <li>Выдерживать сильные порывы ветра.</li>
            </ul>
            <p>Имеются модификации с пологами, маркизами и козырьком.</p>

            <h3 className="font-semibold text-2xl">Кого заинтересует предложение?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Для дачи;</li>
              <li>Для загородных развлекательных, ресторанных и отельных комплексов;</li>
              <li>С целью организации кейтеринговых мероприятий.</li>
            </ul>
            <p>
              Наш товар прошел все необходимые сертификационные процедуры, на
              100% качественный, надежный и долговечный.
            </p>

            <h3 className="font-semibold text-2xl">Что мы можем предложить?</h3>
            <p>
              Полный перечень натяжных навесов имеется в данном разделе, но также
              в каталоге много других вариантов укрытий:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Мобильные шатры;</li>
              <li>Пагоды;</li>
              <li>Беседки;</li>
              <li>Перголы;</li>
              <li>Зонты;</li>
              <li>Выставочные палатки и прочее.</li>
            </ul>
            <p>
              Наш интернет-магазин работает как фирменный маркет от производителя,
              чем и объясняются столь низкие цены и солидный ассортимент.
            </p>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                Если вас заинтересовали наши предложения, свяжитесь с нами, и мы
                расскажем о них более подробно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Натяжные тенты
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Натяжной тент – это туристическая или коммерческая палатка для
              защиты от дождя и солнца. Легко устанавливается и выдерживает
              перепады температур и сильный ветер.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Материал ПВХ, устойчивый к осадкам и солнцу</li>
              <li>Выдерживает сильный ветер</li>
              <li>Есть варианты с пологами, маркизами, козырьком</li>
            </ul>

            <h3 className="font-semibold">Для кого</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Дачи и загородные участки</li>
              <li>Рестораны, отели, развлекательные комплексы</li>
              <li>Кейтеринговые мероприятия</li>
            </ul>

            <h3 className="font-semibold">Что ещё у нас есть</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Мобильные шатры</li>
              <li>Пагоды</li>
              <li>Беседки, перголы, зонты</li>
              <li>Выставочные палатки</li>
            </ul>

            <p>
              Наш магазин работает напрямую от производителя: низкие цены и
              широкий ассортимент. Свяжитесь с нами для подробностей!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
