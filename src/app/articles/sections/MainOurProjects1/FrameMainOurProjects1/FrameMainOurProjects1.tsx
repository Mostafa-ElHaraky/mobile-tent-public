'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Button } from "../../../../../components/ui/button";
import { Checkbox } from "../../../../../components/ui/checkbox";
import { Card, CardContent } from "../../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import Link from 'next/link';

// Types for our data
type TentType =
  | 'frame'
  | 'stretch'
  | 'inflatable'
  | 'marquee'
  | 'arched'     // Арочные шатры
  | 'mobile'     // Мобильные шатры
  | 'pagoda'     // Пагода шатры
  | 'event';     // Шатры для мероприятий

type TentArea = 'small' | 'medium' | 'large' | 'xlarge';
type EventType = 'wedding' | 'corporate' | 'festival' | 'exhibition' | 'sport';
type ConstructionType = 'tents' | 'hangars';

interface Project {
  id: number;
  title: string;
  city: string;
  area: string;
  image: string;
  type: TentType;
  event: EventType;
  construction: ConstructionType;
  actualArea: TentArea;
  date: string;
  link: string;
  service: string;
}

// Moved projects array outside the component to prevent re-creation on every render
const staticProjects: Project[] = [
  {
    id: 1,
    title: "Арочный шатер для «Ольшанец-Парк»",
    city: "—",
    area: "уточняйте у менеджера",
    image: "/761-arochnyy-shater-dlya-olshanec-park.webp",
    type: 'arched',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'medium',
    date: "сб, 06/15/2019",
    link: "/our-projects/arochnyy-shater-dlya-olshanec-park",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 2,
    title: "Шатёр для отеля «Байкальская резиденция»",
    city: "—",
    area: "18 м² (3×6 м)",
    image: "/20-shater-dlya-otelya-baykalskaya-rezidenciya.webp",
    type: 'mobile',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'small',
    date: "вс, 06/05/2016",
    link: "/our-projects/shatyor-dlya-otelya-baykalskaya-rezidenciya",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 3,
    title: "Шатры для выставок и ярмарок",
    city: "—",
    area: "уточняйте у менеджера",
    image: "/19-shatry-dlya-vystavok-i-yarmarok.webp",
    type: 'pagoda',
    event: 'exhibition',
    construction: 'tents',
    actualArea: 'medium',
    date: "вс, 06/05/2016",
    link: "/our-projects/shatry-dlya-vystavok-i-yarmarok",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 4,
    title: "Шатры представительского класса в Архангельске",
    city: "Архангельск",
    area: "уточняйте у менеджера",
    image: "/18-shatry-predstavitelskogo-klassa-v-arhangelske.webp",
    type: 'event',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'large',
    date: "вс, 06/05/2016",
    link: "/our-projects/shatry-predstavitelskogo-klassa-v-arhangelske",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 5,
    title: "Шатёр для мероприятия Mercedes-Benz",
    city: "—",
    area: "уточняйте у менеджера",
    image: "/17-shater-dlya-meropriyatiya-mercedes-benz.webp",
    type: 'event',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'large',
    date: "вс, 06/05/2016",
    link: "/our-projects/shatyor-dlya-meropriyatiya-mercedes-benz",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 6,
    title: "Мобильный шатёр JACOBS",
    city: "—",
    area: "уточняйте у менеджера",
    image: "/16-mobilnyy-shater-jacobs.webp",
    type: 'mobile',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'small',
    date: "чт, 05/05/2016",
    link: "/our-projects/mobilnyy-shatyor-jacobs",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
];

export const FrameMainOurProjects1 = () => {
  // State for filter controls
  const [constructionTypes, setConstructionTypes] = useState<ConstructionType[]>(['tents']);
  const [tentType, setTentType] = useState<TentType | 'all'>('all');
  const [tentArea, setTentArea] = useState<TentArea | 'all'>('all');
  const [eventType, setEventType] = useState<EventType | 'all'>('all');

  // State for filtered projects
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // SAFETY: unlock any accidental global scroll locks left by other components
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (getComputedStyle(html).overflow === 'hidden') html.style.overflow = '';
    if (getComputedStyle(body).overflow === 'hidden') body.style.overflow = '';

    if (getComputedStyle(body).position === 'fixed') {
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, 0);
    }
  }, []);

  // Available options for dropdowns
  const tentTypeOptions = useMemo(() => [
    { value: 'all', label: 'Все типы' },
    { value: 'arched', label: 'Арочные' },
    { value: 'mobile', label: 'Мобильные' },
    { value: 'pagoda', label: 'Пагода' },
    { value: 'event', label: 'Для мероприятий' },
    // keep legacy options if needed
    { value: 'frame', label: 'Каркасные' },
    { value: 'stretch', label: 'Тентовые' },
    { value: 'inflatable', label: 'Надувные' },
    { value: 'marquee', label: 'Маркизы' },
  ], []);

  const tentAreaOptions = useMemo(() => [
    { value: 'all', label: 'Любая площадь' },
    { value: 'small', label: 'До 50 м²' },
    { value: 'medium', label: '50-100 м²' },
    { value: 'large', label: '100-200 м²' },
    { value: 'xlarge', label: 'Более 200 м²' },
  ], []);

  const eventTypeOptions = useMemo(() => [
    { value: 'all', label: 'Любое мероприятие' },
    { value: 'wedding', label: 'Свадьба' },
    { value: 'corporate', label: 'Корпоратив' },
    { value: 'festival', label: 'Фестиваль' },
    { value: 'exhibition', label: 'Выставка' },
    { value: 'sport', label: 'Спортивное' },
  ], []);

  // Filter projects whenever filter criteria change
  useEffect(() => {
    const filtered = staticProjects.filter(project => {
      if (!constructionTypes.includes(project.construction)) return false;
      if (tentType !== 'all' && project.type !== tentType) return false;
      if (tentArea !== 'all' && project.actualArea !== tentArea) return false;
      if (eventType !== 'all' && project.event !== eventType) return false;
      return true;
    });

    setFilteredProjects(filtered);
  }, [constructionTypes, tentType, tentArea, eventType]);

  const handleConstructionChange = (type: ConstructionType) => {
    setConstructionTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const resetFilters = () => {
    setConstructionTypes(['tents']);
    setTentType('all');
    setTentArea('all');
    setEventType('all');
  };

  const rows: Project[][] = [];
  for (let i = 0; i < filteredProjects.length; i += 3) {
    rows.push(filteredProjects.slice(i, i + 3));
  }

  return (
    <div className="relative w-full min-h-screen py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Desktop Version */}
        {/* FIX: use margin instead of relative+top to avoid invisible overlay */}
        <div className="hidden md:block mt-[250px] relative bottom-[250px]">
          {/* Breadcrumb navigation */}
          <div className="relative bottom-[220px] right-[25px] ">
            <div className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
              <div className="relative w-fit mt-[-1.00px] font-normal text-[#394355] text-xs">
                <Link href="/" className="font-normal text-[#394355] text-xs hover:underline">
                  Главная &gt;{"  "}
                </Link>
                <span className="font-medium underline">Портфолио</span>
              </div>
            </div>
          </div>

          <div className="text-3xl md:text-4xl font-bold text-[#232c42] mb-8">Наши проекты</div>

          {/* Filter section */}
          <div className="rounded-2xl border-0 p-6 mb-10">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Construction type checkboxes */}
              <div className="w-full md:w-1/4">
                <h2 className="text-lg font-semibold text-[#232c42] mb-4">Конструкция</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="tents"
                      checked={constructionTypes.includes('tents')}
                      onCheckedChange={() => handleConstructionChange('tents')}
                      className="w-6 h-6 rounded-lg border-2 border-[#dddddd] data-[state=checked]:bg-[#527dc5]"
                    />
                    <label htmlFor="tents" className="font-medium text-[#394355] text-base cursor-pointer">
                      Шатры
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="hangars"
                      checked={constructionTypes.includes('hangars')}
                      onCheckedChange={() => handleConstructionChange('hangars')}
                      className="w-6 h-6 rounded-lg border-2 border-[#dddddd] data-[state=checked]:bg-[#527dc5]"
                    />
                    <label htmlFor="hangars" className="font-medium text-[#394355] text-base cursor-pointer">
                      Ангары
                    </label>
                  </div>
                </div>
              </div>

              {/* Dropdown filters */}
              <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Tent Type */}
                <div>
                  <label className="block text-sm font-medium text-[#394355] mb-2">Тип шатра</label>
                  <Select value={tentType} onValueChange={(value: TentType | 'all') => setTentType(value)}>
                    <SelectTrigger className="w-full h-12 p-3 rounded-lg border-2 border-[#dddddd] font-medium text-[#394355] text-base bg-white">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-lg shadow-lg">
                      {tentTypeOptions.map(option => (
                        <SelectItem key={option.value} value={option.value} className="hover:bg-gray-100">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* Tent Area */}
                <div>
                  <label className="block text-sm font-medium text-[#394355] mb-2">Площадь шатра</label>
                  <Select value={tentArea} onValueChange={(value: TentArea | 'all') => setTentArea(value)}>
                    <SelectTrigger className="w-full h-12 p-3 rounded-lg border-2 border-[#dddddd] font-medium text-[#394355] text-base bg-white">
                      <SelectValue placeholder="Выберите площадь" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-lg shadow-lg">
                      {tentAreaOptions.map(option => (
                        <SelectItem key={option.value} value={option.value} className="hover:bg-gray-100">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* Event Type */}
                <div>
                  <label className="block text-sm font-medium text-[#394355] mb-2">Для какого мероприятия</label>
                  <Select value={eventType} onValueChange={(value: EventType | 'all') => setEventType(value)}>
                    <SelectTrigger className="w-full h-12 p-3 rounded-lg border-2 border-[#dddddd] font-medium text-[#394355] text-base bg-white">
                      <SelectValue placeholder="Выберите мероприятие" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-lg shadow-lg">
                      {eventTypeOptions.map(option => (
                        <SelectItem key={option.value} value={option.value} className="hover:bg-gray-100">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button onClick={resetFilters} variant="link" className="font-bold text-[#527dc5] underline p-0 h-auto">
                Сбросить фильтр
              </Button>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#232c42]">{filteredProjects.length} проектов</h2>
            <div className="text-sm text-[#527dc5]">Показаны результаты по вашим фильтрам</div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-[#394355] mb-4">Проекты не найдены</h3>
              <p className="text-[#6c757d] mb-6">Попробуйте изменить параметры фильтра</p>
              <Button onClick={resetFilters} className="bg-[#527dc5] text-white">Сбросить фильтры</Button>
            </div>
          ) : (
            <div className="relative">
              <section className="grid grid-cols-1 gap-6 w-full">
                {(() => {
                  const rows: Project[][] = [];
                  for (let i = 0; i < filteredProjects.length; i += 3) {
                    rows.push(filteredProjects.slice(i, i + 3));
                  }
                  return rows.map((row, rowIndex) => (
                    <div key={`row-${rowIndex}`} className="flex justify-center gap-6">
                      {row.map((project) => (
                        <Link
                          key={project.id}
                          href={project.link}
                          className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#527dc5] rounded-xl"
                          aria-label={`Открыть проект: ${project.title}`}
                        >
                          <Card
                            className="w-[432px] h-[309px] bg-cover bg-center border-0 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{ backgroundImage: `url(${project.image})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <CardContent className="p-0 h-full">
                              <div className="flex flex-col h-[255px] justify-between p-[30px] relative z-10">
                                <div className="flex flex-col gap-5">
                                  <h3 className="font-semibold text-white text-xl">{project.title}</h3>
                                  <div className="flex flex-col gap-1.5">
                                    <div className="flex gap-2">
                                      <span className="font-normal text-white text-base">Город:</span>
                                      <span className="font-semibold text-white text-base">{project.city}</span>
                                    </div>
                                    <div className="flex gap-2">
                                      <span className="font-normal text-white text-base">Площадь:</span>
                                      <span className="font-semibold text-white text-base">{project.area}</span>
                                    </div>
                                  </div>
                                </div>
                                <span className="font-semibold text-white text-lg hover:text-blue-200 underline">
                                  Подробнее
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  ));
                })()}
              </section>
            </div>
          )}
        </div>

        {/* Mobile Version */}
        <div className="block md:hidden">
          <div className="text-2xl font-bold text-[#232c42] mb-6">Наши проекты</div>

          {/* Filters mobile */}
          <div className="rounded-xl border-0 p-4 mb-6 bg-white shadow-sm">
            <div className="space-y-4">
              {/* Construction */}
              <div>
                <h2 className="text-base font-semibold text-[#232c42] mb-3">Конструкция</h2>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="tents-m"
                      checked={constructionTypes.includes('tents')}
                      onCheckedChange={() => handleConstructionChange('tents')}
                      className="w-5 h-5 rounded border-[#dddddd] data-[state=checked]:bg-[#527dc5]"
                    />
                    <label htmlFor="tents-m" className="text-sm font-medium">Шатры</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="hangars-m"
                      checked={constructionTypes.includes('hangars')}
                      onCheckedChange={() => handleConstructionChange('hangars')}
                      className="w-5 h-5 rounded border-[#dddddd] data-[state=checked]:bg-[#527dc5]"
                    />
                    <label htmlFor="hangars-m" className="text-sm font-medium">Ангары</label>
                  </div>
                </div>
              </div>

              {/* Dropdowns */}
              <div>
                <label className="block text-sm font-medium text-[#394355] mb-2">Тип шатра</label>
                <Select value={tentType} onValueChange={(value: TentType | 'all') => setTentType(value)}>
                  <SelectTrigger className="w-full h-10 px-3 rounded border border-[#dddddd] text-sm">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded shadow-md">
                    {tentTypeOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#394355] mb-2">Площадь шатра</label>
                <Select value={tentArea} onValueChange={(value: TentArea | 'all') => setTentArea(value)}>
                  <SelectTrigger className="w-full h-10 px-3 rounded border border-[#dddddd] text-sm">
                    <SelectValue placeholder="Выберите площадь" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded shadow-md">
                    {tentAreaOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#394355] mb-2">Для какого мероприятия</label>
                <Select value={eventType} onValueChange={(value: EventType | 'all') => setEventType(value)}>
                  <SelectTrigger className="w-full h-10 px-3 rounded border border-[#dddddd] text-sm">
                    <SelectValue placeholder="Выберите мероприятие" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded shadow-md">
                    {eventTypeOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button onClick={resetFilters} variant="link" className="text-[#527dc5] text-sm underline">
                Сбросить фильтр
              </Button>
            </div>
          </div>

          {/* Projects Mobile */}
          <h2 className="text-lg font-semibold mb-4">{filteredProjects.length} проектов</h2>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-base font-medium mb-3">Проекты не найдены</h3>
              <p className="text-sm text-[#6c757d] mb-4">Попробуйте изменить параметры фильтра</p>
              <Button onClick={resetFilters} className="bg-[#527dc5] text-white text-sm px-4 py-2">
                Сбросить фильтры
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredProjects.map(project => (
                <Link
                  key={project.id}
                  href={project.link}
                  className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#527dc5] rounded-lg"
                  aria-label={`Открыть проект: ${project.title}`}
                >
                  <Card
                    className="w-full h-[250px] bg-cover bg-center relative overflow-hidden rounded-lg shadow-md"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <CardContent className="p-0 h-full">
                      <div className="flex flex-col h-full justify-between p-4 relative z-10">
                        <div className="flex flex-col gap-3">
                          <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                          <div className="text-xs text-white space-y-1">
                            <div>Город: <span className="font-semibold">{project.city}</span></div>
                            <div>Площадь: <span className="font-semibold">{project.area}</span></div>
                          </div>
                        </div>
                        <span className="text-white text-sm font-medium underline">Подробнее</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};