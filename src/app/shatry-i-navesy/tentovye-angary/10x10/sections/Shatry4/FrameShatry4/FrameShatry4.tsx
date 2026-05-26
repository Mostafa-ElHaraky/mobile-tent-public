'use client';

import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import { ReactElement } from "react";
import Link from "next/link";

export const FrameShatry4 = (): ReactElement => {
  // Quick filter links data - all subcategories for tentovye-angary
  const quickFilterLinks = [
    { title: "Тентовые ангары 10x10", path: "/shatry-i-navesy/tentovye-angary/10x10" },
    { title: "Тентовые ангары 15x20", path: "/shatry-i-navesy/tentovye-angary/15x20" }
  ];

  return (
    <>
      {/* === Desktop version === */}
      <section className="hidden md:block relative bottom-[90px] w-full">
        <div className="mx-auto max-w-[1440px] flex flex-col items-start gap-9 px-10">
          <h2 className="w-fit font-semibold text-4xl [font-family:'Raleway',Helvetica] leading-tight text-[#232c42]">
            Что такое <span className="text-[#527dc5]">тентовые ангары?</span>
          </h2>

          <Button
            variant="link"
            className="px-6 py-3 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-lg"
          >
            Узнать подробнее
          </Button>

          <div className="w-full font-medium text-lg leading-7 text-[#394355] space-y-6">
            <p>
              Тентовые ангары — это универсальные сооружения, обладающие рядом преимуществ, которые делают их востребованными в различных сферах деятельности.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества тентовых ангаров</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Гибкость и универсальность:</b> легко устанавливаются и снимаются, идеально подходят для временного использования и быстрой организации дополнительного пространства.
              </li>
              <li>
                <b>Экономичность:</b> дешевле традиционных строений как в изготовлении, так и в эксплуатации — идеальное решение для складов, мастерских и выставок.
              </li>
              <li>
                <b>Прочность и надежность:</b> изготавливаются из ПВХ-тканей и алюминиевого каркаса, устойчивы к ветру, снегу и неблагоприятным погодным условиям.
              </li>
              <li>
                <b>Широкий выбор размеров:</b> ангары доступны в разных конфигурациях — от компактных временных конструкций до больших складских помещений.
              </li>
            </ul>

            <h3 className="font-semibold text-2xl">Стандартные размеры и конфигурации</h3>
            <p>
              Мы предлагаем тентовые ангары в различных размерах для решения разнообразных задач:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>10x10 метров</b> - компактное решение для небольших складов, мастерских или выставочных пространств</li>
              <li><b>15x20 метров</b> - просторный ангар для промышленного использования, хранения крупной техники или организации производственных площадей</li>
            </ul>
            <p>
              Каждый размер может быть адаптирован под конкретные требования заказчика с возможностью добавления дополнительных опций.
            </p>

            <h3 className="font-semibold text-2xl">Технические особенности</h3>
            <p>
              Тентовые ангары MOBILE TENT отличаются продуманной конструкцией и качественными материалами:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Каркас:</b> алюминиевый профиль с антикоррозийным покрытием</li>
              <li><b>Тент:</b> высокопрочная ПВХ-ткань с УФ-защитой и огнестойкими свойствами</li>
              <li><b>Система крепления:</b> надежные анкерные соединения для устойчивости</li>
              <li><b>Дополнительные опции:</b> системы вентиляции, освещения, утепления</li>
              <li><b>Срок службы:</b> до 15 лет при правильной эксплуатации</li>
            </ul>

            <h3 className="font-semibold text-2xl">Где используются тентовые ангары?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Промышленность:</b> временные склады для хранения сырья, продукции и оборудования, а также временные цеха и мастерские.
              </li>
              <li>
                <b>Сельское хозяйство:</b> склады для техники, амбары для урожая и временные сооружения для животных.
              </li>
              <li>
                <b>Мероприятия и выставки:</b> временные павильоны, сцены, ярмарки, спортивные и культурные мероприятия.
              </li>
              <li>
                <b>Строительство:</b> склады стройматериалов, временные офисы, бытовки и зоны отдыха для рабочих.
              </li>
            </ul>

            <p>
              Тентовые ангары — это удобное и экономически выгодное решение для создания временных или постоянных сооружений. Их прочность, гибкость и доступность делают их идеальным выбором для различных задач.
            </p>

            <h3 className="font-semibold text-2xl">Где купить тентовые ангары?</h3>
            <p>
              Высококачественные тентовые ангары доступны для приобретения в компании <b>MOBILE TENT</b> — вашем надежном партнере в сфере быстровозводимых конструкций.
            </p>

            <h3 className="font-semibold text-2xl">Преимущества приобретения у MOBILE TENT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <b>Широкий выбор моделей и размеров:</b> подберем ангар под любые задачи и изготовим по индивидуальному проекту.
              </li>
              <li>
                <b>Высокое качество материалов:</b> прочная ПВХ-ткань и надежный алюминиевый профиль обеспечивают долговечность и устойчивость конструкции.
              </li>
              <li>
                <b>Быстрая поставка и монтаж:</b> простая конструкция и понятные инструкции позволяют установить ангар на любой площадке в короткие сроки.
              </li>
              <li>
                <b>Конкурентоспособные цены:</b> предлагаем лучшее соотношение цены и качества на рынке.
              </li>
              <li>
                <b>Индивидуальный подход:</b> разрабатываем проекты с учетом особенностей вашего бизнеса и объекта.
              </li>
            </ul>

            {/* ✅ NEW SEO QUICK FILTER LINKS SECTION - Desktop */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
              <h3 className="font-bold text-2xl text-[#232c42] mb-6 text-center [font-family:'Raleway',Helvetica]">
                Быстрый выбор тентовых ангаров по размерам
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
                MOBILE TENT — надежное решение для временного и постоянного использования. Сделайте правильный выбор уже сегодня!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Mobile version === */}
      <section className="block md:hidden px-4 py-6 bg-white rounded-lg shadow-sm mx-4 my-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center leading-tight">
            Тентовые ангары MOBILE TENT
          </h2>

          <Button
            variant="link"
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec] text-white font-semibold text-sm self-center"
          >
            Подробнее
          </Button>

          <div className="font-medium text-sm leading-5 text-[#394355] text-justify space-y-4">
            <p>
              Тентовые ангары — универсальные, надежные и экономичные сооружения, востребованные во многих сферах.
            </p>

            <h3 className="font-semibold">Преимущества</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Гибкость и мобильность</li>
              <li>Экономичность</li>
              <li>Прочность и устойчивость</li>
              <li>Широкий выбор размеров</li>
            </ul>

            <h3 className="font-semibold">Стандартные размеры</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>10x10 метров - для небольших складов и мастерских</li>
              <li>15x20 метров - для промышленного использования</li>
            </ul>

            <h3 className="font-semibold">Технические особенности</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Алюминиевый каркас</li>
              <li>ПВХ-ткань с УФ-защитой</li>
              <li>Надежная система крепления</li>
              <li>Срок службы до 15 лет</li>
            </ul>

            <h3 className="font-semibold">Области применения</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Промышленность и склады</li>
              <li>Сельское хозяйство</li>
              <li>Мероприятия и выставки</li>
              <li>Строительные площадки</li>
            </ul>

            <h3 className="font-semibold">Почему MOBILE TENT</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Широкий выбор моделей</li>
              <li>Высокое качество материалов</li>
              <li>Быстрая сборка</li>
              <li>Доступные цены</li>
              <li>Индивидуальные проекты</li>
            </ul>

            {/* ✅ NEW SEO QUICK FILTER LINKS SECTION - Mobile */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <h3 className="font-bold text-base text-[#232c42] mb-4 text-center">
                Тентовые ангары по размерам
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

            <p>
              Покупайте тентовые ангары в <b>MOBILE TENT</b> — мы предложим надежное решение под ваши задачи.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};