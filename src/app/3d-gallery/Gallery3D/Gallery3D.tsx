'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Категории (уникальные, без повторов)
const categories = [
  {
    name: 'Тенты для социальных объектов',
    slug: 'tenty-dlya-sotsialnykh-obektov',
    description: 'Надежные тентовые решения для школ, больниц и муниципальных учреждений.',
    image: '/images/gallery/social/tenty-dlya-socialnyh-obektov-010-grand-tent-ru.webp',
  },
  {
    name: 'Тенты для ресторации',
    slug: 'tenty-dlya-restoratsii',
    description: 'Эстетичные навесы для летних веранд, кафе и ресторанов.',
    image: '/images/gallery/restoration/tenty-dlya-restoracii-024-grand-tent-ru.webp',
  },
  {
    name: 'Тенты для зоны бассейна',
    slug: 'tenty-dlya-zony-basseyna',
    description: 'Защита бассейнов от мусора и ультрафиолета, создание комфортной зоны отдыха.',
    image: '/images/gallery/pool/tenty-dlya-zony-basseyna-015-grand-tent-ru.webp',
  },
  {
    name: 'Тентовые сооружения без внутренних опор',
    slug: 'tentovye-sooruzheniya-bez-opor',
    description: 'Свободное пространство внутри – идеально для мероприятий и складов.',
    image: '/images/gallery/no-pillars/tentovye-soorujeniya-bez-vnutrennih-opor-011-grand-tent-ru.webp',
  },
  {
    name: 'Тентовые входные группы',
    slug: 'tentovye-vkhodnye-gruppy',
    description: 'Эффектные козырьки и тамбуры для офисов, отелей и торговых центров.',
    image: '/images/gallery/entrance/tentovye-vhodnye-gruppy-014-grand-tent-ru.webp',
  },
  {
    name: 'Тентовые ансамбли',
    slug: 'tentovye-ansambli',
    description: 'Комплексные решения из нескольких тентов для больших территорий.',
    image: '/images/gallery/ensemble/tentovye-ansambli-007-grand-tent-ru.webp',
  },
  {
    name: 'Теневые навесы',
    slug: 'tenevye-navesy',
    description: 'Легкие конструкции для защиты от солнца на детских площадках и в парках.',
    image: '/images/gallery/shade/tenevye-navesy-012-grand-tent-ru.webp',
  },
  {
    name: 'Натяжные тенты',
    slug: 'natyazhnye-tenty',
    description: 'Современные тканевые натяжные системы для любых архитектурных форм.',
    image: '/images/gallery/stretch/natyajnye-tenty-003-grand-tent-ru.webp',
  },
  {
    name: 'Натяжные системы',
    slug: 'natyazhnye-sistemy',
    description: 'Профессиональные решения для стадионов, выставочных павильонов.',
    image: '/images/gallery/stretch-systems/natyajnye-sistemy-029-grand-tent-ru.webp',
  },
  {
    name: 'Навесы трибун стадионов',
    slug: 'navesy-tribun-stadionov',
    description: 'Надежная защита зрителей от осадков и солнца на спортивных аренах.',
    image: '/images/gallery/stadium/navesy-tribun-stadionov-040-grand-tent-ru.webp',
  },
  {
    name: 'Навесы для рынков',
    slug: 'navesy-dlya-rynkov',
    description: 'Практичные тенты для торговых рядов и ярмарок.',
    image: '/images/gallery/market/navesy-dlya-rynkov-051-grand-tent-ru.webp',
  },
  {
    name: 'Навесы для пеших зон',
    slug: 'navesy-dlya-pexih-zon',
    description: 'Укрытия для пешеходных улиц, остановок и переходов.',
    image: '/images/gallery/pedestrian/navesy-dlya-peshih-zon-011-grand-tent-ru.webp',
  },
  {
    name: 'Навесы для крыш и балконов',
    slug: 'navesy-dlya-krysh-i-balkonov',
    description: 'Защита террас, балконов и мансард от непогоды.',
    image: '/images/gallery/roof/navesy-dlya-krysh-i-balkonov-041-grand-tent-ru.webp',
  },
  {
    name: 'Навесы для автомобильных парковок',
    slug: 'navesy-dlya-avtoparkovok',
    description: 'Прочные навесы для парковок легковых и грузовых автомобилей.',
    image: '/images/gallery/parking/navesy-dlya-avtomobilnyh-parkovok-048-grand-tent-ru.webp',
  },
  {
    name: 'Модульные шатры',
    slug: 'modulnye-shatry',
    description: 'Быстровозводимые конструкции для временных и постоянных объектов.',
    image: '/images/gallery/modular/modulnye-shatry-023-grand-tent-ru.webp',
  },
  {
    name: 'Концертные площадки',
    slug: 'kontsertnye-ploshchadki',
    description: 'Акустические тенты и сценические навесы для open-air мероприятий.',
    image: '/images/gallery/concert/koncertnye-ploschadki-029-grand-tent-ru.webp',
  },
  {
    name: 'Большие комплексы',
    slug: 'bolshie-kompleksy',
    description: 'Масштабные тентовые сооружения для спорта, логистики и индустрии.',
    image: '/images/gallery/large/bolshie-kompleksy-012-grand-tent-ru.webp',
  },
];

export default function Gallery3D() {
  return (
    <section className="py-16 bg-gradient-to-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">3D решения</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите интересующее вас направление – мы реализовали сотни проектов по всей России.
          </p>
        </div>

        {/* Сетка категорий */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/3d-gallery/category/${cat.slug}`}
              className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-blue-100">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-semibold text-lg drop-shadow-md line-clamp-2">
                    {cat.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2">{cat.description}</p>
                <span className="mt-3 inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                  Смотреть проекты
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Не нашли подходящую категорию? Мы реализуем индивидуальные проекты.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-lg shadow-blue-200 transition-colors"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}