'use client';

import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from "react";
import Link from "next/link";

export const FrameShatry4 = (): ReactElement => {
  // Quick filter links data - all subcategories for shater-zvezda шатры
  const quickFilterLinks = [
    { title: "Шатер Звезда 14x9", path: "/shatry-i-navesy/shater-zvezda/14x9" },
    { title: "Шатер Звезда 14x14", path: "/shatry-i-navesy/shater-zvezda/14x14" }
  ];

  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight">
            <span className="text-[#527dc5]">Что такое</span>{" "}
            <span className="text-[#232c42]">шатры «Звезда»?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать о шатрах «Звезда»
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Шатры «Звезда» представляют собой величественные сооружения, объединяющие в себе изысканный дизайн и
              уникальные функциональные возможности. Эти шатры созданы для того, чтобы сделать каждое мероприятие
              запоминающимся, обеспечивая уютное и стильное пространство под открытым небом.
            </p>

            <h3 className="font-semibold text-2xl">
              Что из себя представляют шатры «Звезда» и зачем они нужны?
            </h3>
            <p>
              Это монументальные конструкции с уникальной формой звезды. Архитектурный шедевр, который служит не
              только элементом декора, но и практичным пространством для проведения свадеб, корпоративов,
              выставок и культурных событий.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества шатров «Звезда»</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Великолепный дизайн:</b> уникальная форма звезды привносит особую изюминку.</li>
              <li><b>Большое внутреннее пространство:</b> достаточно места для множества гостей и декора.</li>
              <li><b>Защита от погоды:</b> прочные материалы и надёжная конструкция.</li>
              <li><b>Разнообразие использования:</b> свадьбы, корпоративы, выставки, культурные события.</li>
              <li><b>Индивидуальность:</b> добавляют мероприятию эксклюзивный характер.</li>
            </ul>

            <h3 className="font-semibold text-2xl">Размеры и конфигурации</h3>
            <p>
              Шатры «Звезда» доступны в различных размерах, что позволяет подобрать оптимальный вариант для любого мероприятия:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>14x9 метров</b> - идеальный размер для средних мероприятий до 80-100 гостей</li>
              <li><b>14x14 метров</b> - просторная конструкция для масштабных событий до 150 гостей</li>
            </ul>
            <p>
              Каждый размер предлагает уникальные возможности для планировки пространства и создания комфортной атмосферы.
            </p>

            <h3 className="font-semibold text-2xl">Особенности конструкции</h3>
            <p>
              Шатры «Звезда» отличаются не только внешней привлекательностью, но и продуманной инженерной конструкцией:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Многоугольная форма:</b> создает интересные геометрические перспективы</li>
              <li><b>Высокие центральные опоры:</b> обеспечивают просторное внутреннее пространство</li>
              <li><b>Сложная система растяжек:</b> гарантирует устойчивость даже при сильном ветре</li>
              <li><b>Модульная конструкция:</b> позволяет комбинировать несколько шатров для создания больших площадей</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где заказать шатры «Звезда»?</h3>
            <p>
              Если вы ищете идеальные шатры «Звезда», ваш выбор — компания <b>MOBILE TENT</b>.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Качество и надёжность:</b> соответствие высоким стандартам и долгий срок службы.</li>
              <li><b>Индивидуальный подход:</b> уникальные решения под ваши задачи.</li>
              <li><b>Богатый ассортимент:</b> разные дизайны и размеры.</li>
              <li><b>Опыт и профессионализм:</b> многолетний опыт в производстве и обслуживании шатров.</li>
              <li><b>Комплексные услуги:</b> консультация, проектирование, установка «под ключ».</li>
            </ul>

            {/* ✅ NEW SEO QUICK FILTER LINKS SECTION - Desktop */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
              <h3 className="font-bold text-2xl text-[#232c42] mb-6 text-center [font-family:'Raleway',Helvetica]">
                Быстрый выбор шатров «Звезда» по размерам
              </h3>
              <p className="text-lg text-[#394355] mb-8 text-center">
                Выберите подкатегорию для просмотра конкретных моделей и характеристик
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                {quickFilterLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="group flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] no-underline"
                    aria-label={`Перейти к ${link.title}`}
                    title={link.title}
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="font-medium text-[#394355] text-base group-hover:text-blue-600 transition-colors [font-family:'Raleway',Helvetica] leading-tight">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 text-center">
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f6f8ff]">
              <p className="font-semibold">
                Выберите шатры «Звезда» от MOBILE TENT, чтобы создать впечатляющее пространство для ваших гостей.
                Обратитесь к нам, и мы с удовольствием поможем вам воплотить в жизнь ваши идеи и планы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Шатры «Звезда»
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Величественные конструкции в форме звезды, создающие стильное и уютное пространство для мероприятий.
              Подходят для свадеб, корпоративов, выставок и культурных событий.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Уникальный дизайн</li>
              <li>Большое внутреннее пространство</li>
              <li>Защита от дождя и солнца</li>
              <li>Индивидуальность и эксклюзивность</li>
            </ul>

            <h3 className="font-semibold">Размеры</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>14x9 метров - для мероприятий до 100 гостей</li>
              <li>14x14 метров - для масштабных событий до 150 гостей</li>
            </ul>

            <h3 className="font-semibold">Особенности</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Многоугольная форма</li>
              <li>Высокие центральные опоры</li>
              <li>Устойчивая конструкция</li>
              <li>Модульная система</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Высокое качество и надёжность</li>
              <li>Индивидуальный подход</li>
              <li>Разные размеры и дизайны</li>
              <li>Многолетний опыт</li>
              <li>Полный цикл услуг — от консультации до установки</li>
            </ul>

            {/* ✅ NEW SEO QUICK FILTER LINKS SECTION - Mobile */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <h3 className="font-bold text-base text-[#232c42] mb-4 text-center">
                Шатры «Звезда» по размерам
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {quickFilterLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="flex items-center p-4 bg-white rounded-lg border border-gray-200 active:bg-blue-50 transition-colors no-underline"
                    aria-label={`Перейти к ${link.title}`}
                    title={link.title}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium text-[#394355] text-sm [font-family:'Raleway',Helvetica]">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};