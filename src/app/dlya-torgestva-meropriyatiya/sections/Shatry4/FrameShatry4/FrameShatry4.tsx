'use client';

import React from "react";
import { Button } from "../../../../../components/ui/button";
import type { ReactElement } from "react";

export const FrameShatry4 = (): ReactElement => {
  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10 [font-family:'Raleway',Helvetica]">
          <h2 className="w-fit font-semibold text-4xl leading-tight">
            <span className="text-[#527dc5]">Шатры для свадьбы</span>{" "}
            <span className="text-[#232c42]">— создайте идеальную атмосферу вашего праздника!</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Получить консультацию
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Привлеките внимание: свадьба в шатре — это мечта! Мечтаете о торжестве на природе без зависимости от
              погоды? Белоснежные, воздушные и изящные банкетные шатры от <b>MOBILE TENT</b> превратят ваш день в сказку.
            </p>

            <h3 className="font-semibold text-2xl">Зачем выбирать шатёр для свадьбы?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Универсальность:</b> площадку легко адаптировать под любой формат.</li>
              <li><b>Защита от непогоды:</b> ни дождь, ни солнце не испортят праздник.</li>
              <li><b>Эстетика:</b> белые потолки, лёгкие текстили, ощущение роскоши.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Создайте идеальную атмосферу с MOBILE TENT</h3>
            <p>
              Свадьба — момент на всю жизнь. Мы предлагаем уникальные решения, соответствующие высоким стандартам,
              чтобы ваш день был по-настоящему идеальным.
            </p>
            <p className="text-[#527dc5] font-semibold">
              Сделайте вашу свадьбу сказочной! Звоните и заказывайте прямо сейчас — ваш праздник достоин лучшей площадки!
            </p>

            <h3 className="font-semibold text-2xl">Почему выбирают нас?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Опыт и профессионализм:</b> 10+ лет работы и 700+ свадебных проектов.</li>
              <li><b>Качество и надёжность:</b> высококлассные материалы и гарантия на изделия.</li>
              <li><b>Индивидуальный подход:</b> подберём банкетный шатёр под ваши пожелания и бюджет.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Разнообразие наших шатров</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Банкетные шатры:</b> для больших торжеств.</li>
              <li><b>Шатры на природе:</b> романтика и свежий воздух.</li>
              <li><b>Мобильные конструкции:</b> быстрый монтаж/демонтаж для выездных мероприятий.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Как выбрать шатёр?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Количество гостей:</b> оцените требуемую площадь.</li>
              <li><b>Локация:</b> убедитесь, что площадка подходит для установки.</li>
              <li><b>Тематика:</b> подберите стиль шатра под оформление праздника.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Преимущества работы с нами</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>10+ лет опыта организации свадебных площадок.</li>
              <li>Собственный парк шатров в Москве и МО.</li>
              <li>Выгодные цены без скрытых платежей.</li>
              <li>Сертифицированные конструкции и гарантийный сервис.</li>
              <li>95% клиентов рекомендуют нас друзьям и близким.</li>
              <li>Все необходимые лицензии и сертификаты.</li>
            </ul>

            <h3 className="font-semibold text-2xl">FAQ</h3>
            <p><b>Цена большого шатра?</b> Зависит от размера и комплектации. Стандартные модели — самые доступные.</p>
            <p><b>Аренда возможна?</b> Да, предлагаем аренду на срок вашего мероприятия.</p>

            <h3 className="font-semibold text-2xl">Наше уникальное предложение</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Продажа и аренда — протестируйте решение перед покупкой.</li>
              <li>Доставка и профессиональный монтаж — всё под ключ.</li>
            </ul>

            <div className="p-5 rounded-xl bg-[#f6f8ff] space-y-2">
              <p>
                <b>MOBILE TENT</b> — ваш надёжный партнёр для свадеб и торжеств любого масштаба.
                Прозрачные условия и индивидуальный подход.
              </p>
              <p className="text-[#527dc5] font-semibold">
                Закажите свой свадебный шатёр уже сегодня — создадим незабываемую атмосферу!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4 [font-family:'Raleway',Helvetica]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Шатры для свадьбы — MOBILE TENT
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подбор и смета
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Белоснежные шатры для идеального праздника на природе. Защита от погоды, уют и стиль — для свадеб любого масштаба.
            </p>

            <h3 className="font-semibold">Почему мы</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>10+ лет опыта</li>
              <li>700+ свадеб</li>
              <li>Сертифицированные конструкции</li>
              <li>Индивидуальные решения</li>
            </ul>

            <h3 className="font-semibold">Ассортимент</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Банкетные шатры</li>
              <li>Шатры на природе</li>
              <li>Мобильные конструкции</li>
            </ul>

            <h3 className="font-semibold">Как выбрать</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Количество гостей</li>
              <li>Площадка и логистика</li>
              <li>Тематика и стиль</li>
            </ul>

            <h3 className="font-semibold">FAQ</h3>
            <p><b>Цена?</b> Зависит от размера и комплектации.</p>
            <p><b>Аренда?</b> Да, на срок вашего события.</p>

            <div className="p-4 rounded-lg bg-[#f6f8ff] text-center">
              <p className="font-semibold">Готовы к сказочной свадьбе?</p>
              <p className="text-[#527dc5] font-semibold">
                Свяжитесь с нами — подберём шатёр и рассчитаем смету бесплатно.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
