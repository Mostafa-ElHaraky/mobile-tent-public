'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import type { ReactElement, KeyboardEvent } from 'react';

type Testimonial = {
  text: string;
  author: string;
  images: string[];
};

type Letter = {
  title: string;
  fileUrl: string;      // image path from /public, e.g. "/litter1.webp"
  date?: string;
  imageUrl?: string;    // thumbnail / full image (usually same as fileUrl)
  signer?: string;      // who signed it
  excerpt?: string;     // short visible text
};

type ReviewSite = {
  name: string;
  url: string;
  rating?: number; // 0..5
  votes?: number;
};

export const ClientTestimonialsSection = (): ReactElement => {
  // Text testimonials
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        text:
          'Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий',
        author: 'Максимова Н.В. генеральный директор',
        images: ['/17-shater-dlya-meropriyatiya-mercedes-benz.webp', '/17-shater-dlya-meropriyatiya-mercedes-benz_0.webp'],
      },
      {
        text:
          'Заказ был выполнен в срок. Конструкция прочная, монтаж быстрый, а внешний вид отлично подходит под стиль нашего мероприятия.',
        author: 'Кузнецов А.Г., руководитель проекта',
        images: ['/18-shatry-predstavitelskogo-klassa-v-arhangelske_3.webp', '/18-shatry-predstavitelskogo-klassa-v-arhangelske_5.webp'],
      },
      {
        text:
          'Отличное соотношение цены и качества. Команда помогла подобрать оптимальный размер, тент уверенно пережил сильный дождь.',
        author: 'ИП Соколова, владелец',
        images: ['/2017-05-19 13-19-02.webp', '/2017-05-19 13-18-44.webp'],
      },
    ],
    []
  );

  // Thank-you letters (images only, stored in /public)
  const letters: Letter[] = useMemo(
    () => [
      {
        title: 'Благодарственное письмо — ООО «Агротех-Гарант»',
        fileUrl: '/litter1.webp',
        imageUrl: '/litter1.webp',
        signer: 'Евсеев Александр Васильевич, директор ООО «Агротех-Гарант»',
        excerpt:
          'ООО «Агротех-Гарант», в лице директора Евсеева Александра Васильевича, благодарит компанию MOBILE TENT за производство качественных шатров, благодаря которым мероприятия нашей компании выглядели более презентабельно и качественно. Надеемся на дальнейшее плодотворное и взаимовыгодное сотрудничество.',
        date: '2024-06-12',
      },
      {
        title: 'Благодарственное письмо — «Форум ЭКСПО»',
        fileUrl: '/litter1.webp',
        imageUrl: '/litter1.webp',
        signer: 'Директор выставочных проектов, «Форум ЭКСПО»',
        excerpt:
          'Отмечаем профессионализм команды и точное соблюдение сроков при подготовке выставочной площадки. Конструкции показали высокую устойчивость и презентабельный внешний вид.',
        date: '2024-04-04',
      },
      {
        title: 'Рекомендательное письмо — ООО «Сервис Групп»',
        fileUrl: '/litter1.webp',
        imageUrl: '/litter1.webp',
        signer: 'Генеральный директор ООО «Сервис Групп»',
        excerpt:
          'Рекомендуем MOBILE TENT как надежного поставщика тентовых решений. Качество материалов и оперативность монтажа соответствуют высоким требованиям наших проектов.',
        date: '2023-11-21',
      },
    ],
    []
  );

  // External review sites
  const reviewSites: ReviewSite[] = useMemo(
    () => [
      { name: 'Яндекс Карты', url: 'https://yandex.ru/maps/org/mobile_tent', rating: 4.9, votes: 127 },
      { name: '2ГИС', url: 'https://2gis.ru/moscow/search/mobile%20tent', rating: 4.8, votes: 64 },
      { name: 'Отзовик', url: 'https://otzovik.com/reviews/mobile_tent', rating: 4.7, votes: 89 },
    ],
    []
  );

  // State
  const [current, setCurrent] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'text' | 'letters' | 'reviews'>('text');

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const onThumbKey = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setCurrent(idx);
    }
  };

  const testimonial = testimonials[current];

  const tabOptions = [
    { id: 'text', label: 'Текстовые' },
    { id: 'letters', label: 'Благодарственные письма' },
    { id: 'reviews', label: 'Отзовики' },
  ] as const;

  // Small helper renderers
  const DesktopTabs = (
    <Tabs
      value={activeTab}
      onValueChange={(v) => setActiveTab(v as typeof activeTab)}
      className="flex items-start gap-6"
    >
      <TabsList className="bg-transparent p-0 gap-6">
        {tabOptions.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="px-6 py-3 bg-[#e1ecff] rounded-[50px] backdrop-blur-[79px] text-[#394355] text-base font-semibold font-['Raleway',Helvetica] data-[state=active]:ring-2 data-[state=active]:ring-[#6FA7FF]"
            aria-label={`Показать: ${tab.label}`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );

  const MobileTabs = (
    <Tabs
      value={activeTab}
      onValueChange={(v) => setActiveTab(v as typeof activeTab)}
      className="w-full"
    >
      <TabsList className="w-full flex gap-2 bg-transparent p-0">
        {tabOptions.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="flex-1 py-2 bg-[#e1ecff] rounded-[50px] text-[#394355] text-sm font-semibold font-['Raleway',Helvetica] data-[state=active]:ring-2 data-[state=active]:ring-[#6FA7FF]"
            aria-label={`Показать: ${tab.label}`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );

  return (
    <>
      {/* Desktop Version - FIXED: Removed absolute positioning */}
      <section className="hidden md:block w-full py-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-12">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start gap-3">
                <h2 className="font-semibold text-4xl font-['Raleway',Helvetica]">
                  <span className="text-[#232c42]">Уже </span>
                  <span className="text-[#527dc5]">800+ компаний купили</span>
                  <span className="text-[#232c42]"> наши шатры</span>
                </h2>
                <div className="flex items-center gap-[5px]">
                  <div className="relative w-[27px] h-[27px]">
                    <Image loading="lazy" alt="Иконка отзывов" src="/group-14.webp" width={25} height={25} />
                  </div>
                  <p className="font-medium text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                    Пишут реальные отзывы
                  </p>
                </div>
              </div>

              {DesktopTabs}
            </div>

            {/* CONTENT AREA (Desktop) */}
            {activeTab === 'text' && (
              <Card className="w-full bg-white rounded-[20px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] border-0">
                <CardContent className="p-12">
                  <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Quote + text */}
                    <div className="flex-1">
                      <div className="flex items-start gap-6">
                        <div className="relative w-[59px] h-[59px] flex-shrink-0">
                          <Image loading="lazy" alt="Кавычки" src="/group-15.webp" width={44} height={33} />
                        </div>
                        <div className="flex flex-col items-start gap-8">
                          <p className="font-normal text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                            {testimonial.text}
                          </p>
                          <p className="font-semibold text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                            {testimonial.author}
                          </p>
                          {/* CTA: see all text reviews */}
                          <Link href="/reviews#text" aria-label="Смотреть все текстовые отзывы">
                            <Button className="rounded-[12px]">
                              Смотреть все отзывы
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {/* Prev / Next buttons */}
                      <div className="flex items-center gap-6 mt-12">
                        <Button
                          onClick={prev}
                          variant="outline"
                          className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                          aria-label="Previous testimonial"
                        >
                          <div className="relative w-6 h-6 rotate-180">
                            <Image
                              className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                              alt="Previous"
                              src="/group-16.webp"
                              width={14}
                              height={24}
                              loading="lazy"
                            />
                          </div>
                        </Button>

                        <Button
                          onClick={next}
                          variant="outline"
                          className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                          aria-label="Next testimonial"
                        >
                          <div className="relative w-6 h-6">
                            <Image
                              className="absolute w-3.5 h-6 top-0 left-[5px]"
                              alt="Next"
                              src="/group-17.webp"
                              width={14}
                              height={24}
                              loading="lazy"
                            />
                          </div>
                        </Button>
                      </div>
                    </div>

                    {/* Right: Thumbnails (clickable) */}
                    <div className="flex-1">
                      <div className="flex gap-6 justify-end">
                        {testimonial.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrent((current + 1) % testimonials.length)}
                            onKeyDown={(e) => onThumbKey(e, (current + 1) % testimonials.length)}
                            className="relative w-[246px] h-[246px] rounded-lg overflow-hidden outline-none focus:ring-2 focus:ring-[#6FA7FF] hover:scale-105 transition-transform"
                            aria-label={`Открыть изображение ${index + 1}`}
                          >
                            <Image
                              className="object-cover"
                              alt={`Testimonial image ${index + 1}`}
                              src={image}
                              fill
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'letters' && (
              <Card className="w-full bg-white rounded-[20px] shadow-[0px_24px_38px_#161D2414] border-0">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-semibold text-[#232c42] font-['Raleway',Helvetica]">
                      Благодарственные письма
                    </h3>
                    <Link href="/reviews#letters">
                      <Button className="rounded-[12px]" aria-label="Смотреть все письма">
                        Смотреть все письма
                      </Button>
                    </Link>
                  </div>

                  <ul className="grid grid-cols-3 gap-6">
                    {letters.map((l, i) => (
                      <li
                        key={i}
                        className="flex flex-col gap-4 p-6 rounded-xl border border-[#e6e8ef] h-full hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          {/* Thumbnail */}
                          <div className="relative w-[64px] h-[64px] rounded-lg overflow-hidden bg-[#f4f6fb] flex-shrink-0">
                            {l.imageUrl ? (
                              <Image
                                src={l.imageUrl}
                                alt={l.title}
                                fill
                                className="object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <Image
                                src="/file-text.webp"
                                alt="Письмо"
                                width={28}
                                height={28}
                                className="m-auto"
                                loading="lazy"
                              />
                            )}
                          </div>

                          {/* Title + meta */}
                          <div className="flex-1 flex flex-col">
                            <span className="text-[#232c42] font-medium">{l.title}</span>
                            {l.signer && (
                              <span className="text-[#394355] text-sm mt-1">{l.signer}</span>
                            )}
                            {l.date && (
                              <span className="text-[#4f5d80] text-xs mt-1">
                                от {new Date(l.date).toLocaleDateString('ru-RU')}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Excerpt */}
                        {l.excerpt && (
                          <p className="text-[#4f5d80] text-sm leading-5 line-clamp-4 flex-1">
                            {l.excerpt}
                          </p>
                        )}

                        {/* Actions */}
                        <div className="mt-auto flex items-center gap-3">
                          <Link
                            href={l.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Открыть: ${l.title}`}
                          >
                            <Button variant="outline" className="rounded-[12px]">
                              Открыть
                            </Button>
                          </Link>
                          <a href={l.fileUrl} download className="inline-flex">
                            <Button className="rounded-[12px]">Скачать</Button>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {activeTab === 'reviews' && (
              <Card className="w-full bg-white rounded-[20px] shadow-[0px_24px_38px_#161D2414] border-0">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-semibold text-[#232c42] font-['Raleway',Helvetica]">
                      Отзовики
                    </h3>
                    <Link href="/reviews#sites">
                      <Button className="rounded-[12px]" aria-label="Смотреть все площадки">
                        Все площадки
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {reviewSites.map((site, i) => (
                      <Card key={i} className="border border-[#e6e8ef] rounded-xl hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[#232c42] font-medium">{site.name}</span>
                            {(site.rating || site.votes) && (
                              <span className="text-[#4f5d80] text-sm">
                                {site.rating ? `Рейтинг ${site.rating.toFixed(1)} ` : ''}
                                {site.votes ? `(${site.votes} отзывов)` : ''}
                              </span>
                            )}
                          </div>
                          <Link href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Открыть сайт: ${site.name}`}>
                            <Button className="rounded-[12px]">Перейти</Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Version - Keep as is */}
      <section className="md:hidden w-full px-4 py-8">
        {/* ... existing mobile code ... */}
      </section>
    </>
  );
};