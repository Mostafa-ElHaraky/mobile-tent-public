'use client';

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  MapPin,
  Award,
  Calendar,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from 'next/link';

/* ========= Types ========= */

type Category = {
  id: number;
  name: string;
  icon: string;
  description: string;
};

type Department = {
  id: number;
  name: string;
  width?: string;
  description: string;
};

type Linkset = {
  linkedin?: string;
  website?: string;
  email?: string;
};

type Member = {
  id: number;
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
  department?: string;
  location?: string;
  tenureYears?: number;
  experience?: string;
  skills?: string[];
  achievements?: string[];
  links?: Linkset;
};

/* ========= Component ========= */

export const Commanda = (): ReactElement => {
  /* ---- Static data ---- */
  const teamMembers: Member[] = [
    {
      id: 1,
      name: "Бородин Андрей",
      role: "Генеральный директор",
      image: "/borodin_aa.webp",
      objectPosition: "center 40%",
      department: "Руководство",
      location: "Москва",
      tenureYears: 12,
      achievements: [
        "Запустил 3 производственные площадки",
        "Внедрил KPI-систему и бережливое производство",
      ],
      skills: ["Стратегическое планирование", "P&L управление", "Операционное управление", "Развитие бизнеса", "B2B"],
      links: { email: "info@grand-tent.ru" },
    },
    {
      id: 2,
      name: "Бутырин Сергей",
      role: "Руководитель отдела маркетинга",
      image: "/Бутырин Сергей.webp",
      objectPosition: "center 40%",
      department: "Маркетинг",
      location: "Москва",
      tenureYears: 7,
      achievements: [
        "Рост входящих лидов на 140%",
        "Систематизация контент-воронки",
      ],
      skills: ["Цифровой маркетинг", "Performance Marketing", "Аналитика (Google Analytics, Яндекс.Метрика)", "Управление командой", "Контент-стратегия"],
      links: { email: "marketing@grand-tent.ru" },
    },
    {
      id: 3,
      name: "Демидова Юлия",
      role: "Исполнительный директор",
      image: "/Демидова Юлия.webp",
      objectPosition: "center 40%",
      department: "Операционный блок",
      location: "Москва", // Changed from "Санкт-Петербург" to "Москва"
      tenureYears: 9,
      achievements: ["Сократила сроки поставки на 22%", "Запустила PPM-планирование"],
      skills: ["Управление проектами (PPM)", "Оптимизация процессов", "Логистика", "Управление производством", "Управление изменениями"],
    },
    {
      id: 4,
      name: "Арина Клементьева",
      role: "HR",
      image: "/Арина Клементьева.webp",
      objectPosition: "center 40%",
      department: "HR / Персонал",
      location: "Москва",
      tenureYears: 4,
      achievements: ["Внедрение системы онбординга", "Координация кадрового документооборота"],
      skills: ["Подбор персонала", "Онбординг", "Кадровое делопроизводство", "HR-администрирование", "Коммуникация"],
    },
    {
      id: 5,
      name: "Альхераки Мостафа",
      role: "Full Stack разработчик",
      image: "/Альхераки Мостафа.webp",
      objectPosition: "center 40%",
      department: "IT / Разработка",
      location: "Москва",
      tenureYears: 6,
      achievements: ["Разработка внутренней ERP-системы", "Миграция легаси-кода на современный стек"],
      skills: ["JavaScript/TypeScript", "React", "Node.js", "Next.js", "PostgreSQL"],
    },
    {
      id: 6,
      name: "Михаил Листопадов",
      role: "3D дизайнер", // Changed from "Дизайнер"
      image: "/Михаил Листопадов.webp",
      department: "Дизайн",
      location: "Москва", // Changed from "Удалённо" to "Москва"
      tenureYears: 8,
      experience: "3D дизайн и моделирование с 2017 года", // Updated experience
      achievements: ["Создание 3D-моделей", "Визуализация проектов для клиентов"],
      skills: ["3ds Max", "3D моделирование", "Визуализация"], // Updated skills
    },
    {
      id: 7,
      name: "Павел Харитонов",
      role: "SEO специалист",
      image: "/Павел Харитонов.webp",
      department: "Маркетинг / SEO",
      location: "Москва",
      tenureYears: 7,
      experience: "SEO-оптимизация и цифровой маркетинг с 2018 года",
      achievements: ["Увеличение органического трафика на 300%", "Вывод сайта в ТОП-3 по высокочастотным запросам"],
      skills: ["SEO-аудит", "Технический SEO", "Контент-стратегия", "Анализ конкурентов (Ahrefs, Serpstat)", "Веб-аналитика"],
    },
  ];

  const teamCategories: Category[] = [
    { id: 1, name: "Дизайнеры", icon: "/About1-group-19.webp", description: "Проектируют внешний вид и эргономику шатров, подбирают материалы, готовят макеты брендирования." },
    { id: 2, name: "Технологи, конструктора", icon: "/About1-group-20.webp", description: "Разрабатывают конструктивные узлы, расчёты прочности и технологические карты производства." },
    { id: 3, name: "Проектировщики", icon: "/About1-group-21.webp", description: "Готовят рабочую документацию, 3D-схемы и спецификации для производства и монтажа." },
    { id: 4, name: "Геодезисты", icon: "/About1-group-22.webp", description: "Проводят разбивку и контроль геометрии на площадке, обеспечивая точность монтажа." },
  ];

  const departments: Department[] = [
    { id: 1, name: "Отдел проектирования", width: "222px", description: "Отвечает за архитектурные решения, чертежи и согласование ТЗ с заказчиком." },
    { id: 2, name: "Отдел контроля качества", width: "222px", description: "Многоступенчатый контроль: входные материалы, процесс производства и итоговая приёмка." },
    { id: 3, name: "Отдел монтажа", width: "143px", description: "Сертифицированные бригады, соблюдение техники безопасности, строгие сроки развёртывания." },
    { id: 4, name: "Отдел сертификации изделий", width: "272px", description: "Обеспечивает соответствие ГОСТ/ТР ТС, ведёт паспорта изделий и протоколы испытаний." },
  ];

  const moreRolesBody = (
    <ul className="list-disc pl-5 space-y-1 text-[#394355]">
      <li>Сметчики</li>
      <li>Инженеры ПТО</li>
      <li>Производственники</li>
      <li>Логисты</li>
      <li>Специалисты по снабжению</li>
    </ul>
  );

  const moreFactoriesBody = (
    <div className="space-y-2 text-[#394355]">
      <p><span className="font-semibold">Металлоцех:</span> гибка, сварка, порошковая окраска.</p>
      <p><span className="font-semibold">Швейный участок:</span> тентовые ПВХ-полотна, ПВХ-сварка, усиление швов.</p>
      <p><span className="font-semibold">Склад и логистика:</span> комплектация, упаковка, отгрузка по РФ и СНГ.</p>
    </div>
  );

  /* ---- Carousel state ---- */
  const visibleCount = 3;
  const mobileVisibleCount = 1;
  const len = teamMembers.length;

  const [startIndex, setStartIndex] = useState(0);
  const [mobileStartIndex, setMobileStartIndex] = useState(0);

  const getCircularSlice = useCallback(
    (from: number, count: number) => {
      const items: Member[] = [];
      for (let i = 0; i < count; i++) items.push(teamMembers[(from + i) % len]);
      return items;
    },
    [len, teamMembers]
  );

  const visibleMembers = useMemo(
    () => getCircularSlice(startIndex, visibleCount),
    [getCircularSlice, startIndex]
  );

  const mobileVisibleMembers = useMemo(
    () => getCircularSlice(mobileStartIndex, mobileVisibleCount),
    [getCircularSlice, mobileStartIndex]
  );

  const handlePrev = () => setStartIndex((p) => (p - 1 + len) % len);
  const handleNext = () => setStartIndex((p) => (p + 1) % len);
  const handleMobilePrev = () => setMobileStartIndex((p) => (p - 1 + len) % len);
  const handleMobileNext = () => setMobileStartIndex((p) => (p + 1) % len);

  // Keyboard arrows (desktop)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Autoplay with pause on hover (desktop)
  const desktopWrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let paused = false;
    const el = desktopWrapRef.current;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);

    const id = setInterval(() => {
      if (!paused) setStartIndex((p) => (p + 1) % len);
    }, 3500);

    return () => {
      clearInterval(id);
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    };
  }, [len]);

  // Swipe on mobile
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) handleMobilePrev();
    if (dx < -40) handleMobileNext();
    touchStartX.current = null;
  };

  // Image loading shimmer flags
  const [loadedIds, setLoadedIds] = useState<Record<number, boolean>>({});
  const markLoaded = (id: number) =>
    setLoadedIds((s) => (s[id] ? s : { ...s, [id]: true }));

  /* ---- Helpers ---- */

  const renderSkills = (skills?: string[], limit = 4) => {
    if (!skills || skills.length === 0) return null;
    const shown = skills.slice(0, limit);
    const rest = skills.length - shown.length;
    return (
      <div className="flex flex-wrap gap-2">
        {shown.map((s) => (
          <span
            key={s}
            className="inline-flex items-center rounded-full bg-[#f5f6ff] text-[#394355] px-3 py-1 text-xs font-medium"
          >
            {s}
          </span>
        ))}
        {rest > 0 && (
          <span className="inline-flex items-center rounded-full bg-[#e8eef8] text-[#394355] px-3 py-1 text-xs font-semibold">
            +{rest}
          </span>
        )}
      </div>
    );
  };

  const renderMeta = (m: Member) => (
    <div className="flex flex-wrap items-center gap-3 text-[#394355] text-xs">
      {m.location && (
        <span className="inline-flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {m.location}
        </span>
      )}
      {typeof m.tenureYears === "number" && (
        <span className="inline-flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {m.tenureYears}+ лет в отрасли
        </span>
      )}
      {m.department && (
        <span className="inline-flex items-center gap-1">
          <Award className="w-4 h-4" />
          {m.department}
        </span>
      )}
    </div>
  );

  /* ---- Modals (separate + simple) ---- */

  // Info modal (title + custom body)
  const [infoOpen, setInfoOpen] = useState(false);
  const [infoTitle, setInfoTitle] = useState("");
  const [infoBody, setInfoBody] = useState<React.ReactNode>(null);

  const openInfo = (title: string, body: React.ReactNode) => {
    setInfoTitle(title);
    setInfoBody(body);
    setInfoOpen(true);
  };

  const closeInfo = () => setInfoOpen(false);

  // Member modal
  const [memberOpen, setMemberOpen] = useState(false);
  const [modalMember, setModalMember] = useState<Member | null>(null);

  const openMember = (m: Member) => {
    setModalMember(m);
    setMemberOpen(true);
  };
  const closeMember = () => setMemberOpen(false);

  /* ========= Render ========= */

  return (
    <>
      {/* ======= Hero (centered, max width, no absolute offsets) ======= */}
      <main className="w-full">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="relative top-[25px]">
            <div className="inline-flex items-center gap-2.5 p-1 bg-[#4f5d801a] rounded">
              <div className="text-xs text-[#394355] font-raleway">
                <Link href="/" className="hover:underline">
                  Главная &gt;{" "}
                </Link>
                <span className="font-medium underline">команда</span>
              </div>
            </div>
          </div>
          
          {/* Desktop / Tablet */}
          <section className="hidden desktop:block py-16">
            <div className="flex items-start gap-12">
              {/* Left content */}
              <div className="flex-1 min-w-0 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h2 className="font-semibold text-4xl leading-normal tracking-[0] [font-family:'Raleway',Helvetica] text-[#394355]">
                    <span className="text-[#527dc5]">Экспертная команда </span>
                    воплотит мечты
                    <br />
                    об идеальном шатре под ваши задачи
                  </h2>

                  <p className="w-full max-w-[640px] text-base leading-6 text-[#394355] [font-family:'Raleway',Helvetica]">
                    <span className="font-bold">Работает, как единый организм</span>{" "}
                    <span className="font-medium">
                      из 80 человек с высшим строительным и инженерным образованием и
                      опытом от 10 лет
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-start gap-6">
                    {teamCategories.slice(0, 3).map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => openInfo(category.name, <p className="text-[#394355]">{category.description}</p>)}
                        className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 hover:opacity-90 cursor-pointer"
                        aria-label={`Подробнее: ${category.name}`}
                      >
                        <span className="relative w-6 h-6 shrink-0">
                          <Image
                            alt={`${category.name} icon`}
                            src={category.icon}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </span>
                        <span className="[font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          {category.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <button
                      type="button"
                      onClick={() =>
                        openInfo(
                          "Геодезисты",
                          <p className="text-[#394355]">
                            {teamCategories.find((t) => t.name === "Геодезисты")?.description}
                          </p>
                        )
                      }
                      className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 hover:opacity-90 cursor-pointer"
                      aria-label="Подробнее: Геодезисты"
                    >
                      <span className="relative w-6 h-6 shrink-0">
                        <Image alt="Геодезисты icon" src="/About1-group-22.webp" fill style={{ objectFit: "contain" }} />
                      </span>
                      <span className="[font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Геодезисты
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openInfo("Другие должности", moreRolesBody)}
                      className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 hover:opacity-90 cursor-pointer"
                      aria-label="Посмотреть другие должности"
                    >
                      <span className="font-semibold text-[#527dc5] text-sm leading-5 underline whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                        и еще 5+ должностей разного уровня
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right card */}
              <Card className="w-[640px] bg-white rounded-[20px] border-0 shadow-lg">
                <CardContent className="flex flex-col items-center justify-center gap-9 py-7 px-4">
                  <div className="flex flex-wrap w-full items-start justify-center gap-3">
                    {departments.map((department) => (
                      <button
                        key={department.id}
                        type="button"
                        onClick={() => openInfo(department.name, <p className="text-[#394355]">{department.description}</p>)}
                        className="flex flex-col items-start gap-2.5 p-4 bg-[#f5f6ff] rounded-[10px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] cursor-pointer"
                        style={{ width: department.width }}
                        aria-label={`Подробнее: ${department.name}`}
                      >
                        <div className="flex flex-col items-center justify-center gap-2 w-full">
                          <div className="font-bold text-[#527dc5] text-lg text-center whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] leading-6">
                            {department.name}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openInfo("Дополнительно: производства", moreFactoriesBody)}
                    className="w-[432px] font-bold text-[#394355] text-base text-center leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 cursor-pointer"
                    aria-label="Посмотреть дополнительные производства"
                  >
                    + еще 3 производства
                  </button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mobile */}
          <section className="desktop:hidden py-10">
            <div className="flex flex-col items-center gap-8 w-full">
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col items-center gap-4 w-full">
                  <h2 className="font-semibold text-2xl md:text-3xl text-center leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="text-[#527dc5]">Экспертная команда </span>
                    <span className="text-[#394355]">
                      воплотит мечты об идеальном шатре под ваши задачи
                    </span>
                  </h2>
                </div>

                <p className="w-full max-w-[680px] text-[#394355] text-sm md:text-base text-center leading-6 [font-family:'Raleway',Helvetica]">
                  <span className="font-bold">Работает, как единый организм</span>{" "}
                  <span className="font-medium">
                    из 80 человек с высшим строительным и инженерным образованием и
                    опытом от 10 лет
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center gap-6 w-full">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {teamCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => openInfo(category.name, <p className="text-[#394355]">{category.description}</p>)}
                      className="flex items-center gap-3 justify-center bg-transparent hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-2 py-2 cursor-pointer"
                      aria-label={`Подробнее: ${category.name}`}
                    >
                      <span className="relative w-6 h-6">
                        <Image alt={`${category.name} icon`} src={category.icon} fill style={{ objectFit: "contain" }} />
                      </span>
                      <span className="[font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-center w-full">
                  <button
                    type="button"
                    onClick={() => openInfo("Другие должности", moreRolesBody)}
                    className="font-semibold text-[#527dc5] text-sm leading-5 underline [font-family:'Raleway',Helvetica] tracking-[0] text-center hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 cursor-pointer"
                    aria-label="Посмотреть другие должности"
                  >
                    и еще 5+ должностей разного уровня
                  </button>
                </div>
              </div>

              <Card className="w-full bg-white rounded-[20px] border-0 shadow-lg">
                <CardContent className="flex flex-col items-center justify-center gap-6 py-6 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {departments.map((department) => (
                      <button
                        key={department.id}
                        type="button"
                        onClick={() => openInfo(department.name, <p className="text-[#394355]">{department.description}</p>)}
                        className="flex flex-col items-start gap-2.5 p-4 bg-[#f5f6ff] rounded-[10px] w-full hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] cursor-pointer"
                        aria-label={`Подробнее: ${department.name}`}
                      >
                        <div className="flex flex-col items-center justify-center gap-2 w-full">
                          <div className="font-bold text-[#527dc5] text-base md:text-lg text-center [font-family:'Raleway',Helvetica] tracking-[0] leading-6">
                            {department.name}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openInfo("Дополнительно: производства", moreFactoriesBody)}
                    className="w-full font-bold text-[#394355] text-base text-center leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5] rounded-md px-1 py-1 cursor-pointer"
                  >
                    + еще 3 производства
                  </button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* ======= Team Carousel ======= */}
      {/* Desktop */}
      <section className="w-full py-12 hidden md:block relative bottom-[80px] ">
        <div ref={desktopWrapRef} className="relative mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8 overflow-visible">
          <div className="flex justify-center gap-7 transition-all duration-300 ease-out">
            {visibleMembers.map((m) => (
              <Card
                key={m.id}
                className="group relative w-[429px] h-[590px] bg-white/90 backdrop-blur border-0 rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] hover:shadow-[0_30px_60px_rgba(22,29,36,0.12)] hover:-translate-y-1 transition-transform"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-black/5" />
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative w-full pt-[24px]">
                    {/* Updated image container - changed object-fit to contain */}
                    <div className="w-[367px] h-[267px] relative overflow-hidden rounded-xl mx-auto">
                      {!loadedIds[m.id] && (
                        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#eef2f8] to-[#e8eef8]" />
                      )}
                      <Image
                        src={m.image}
                        alt={`${m.name} portrait`}
                        fill
                        className="rounded-xl object-contain" 
                        style={m.objectPosition ? { objectPosition: m.objectPosition } : undefined}
                        sizes="(min-width: 1024px) 367px, 50vw"
                        onLoadingComplete={() => markLoaded(m.id)}
                        priority={m.id <= 3}
                        quality={90} 
                      />
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/25 via-transparent to-transparent rounded-xl" />
                    </div>

                    {/* Quick actions */}
                    <div className="absolute right-[24px] top-[24px] flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/90 hover:bg-white shadow-sm"
                        onClick={() => openMember(m)}
                        aria-label={`Подробнее о сотруднике ${m.name}`}
                      >
                        Подробнее
                      </Button>
                      {m.links?.email && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full bg-white/90 hover:bg-white shadow-sm"
                          asChild
                          aria-label={`Написать ${m.name}`}
                        >
                          <a href={`mailto:${m.links.email}`}><Mail className="w-4 h-4" /></a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 px-8 mt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                          {m.name}
                        </h3>
                        <div className="mt-1">{renderMeta(m)}</div>
                      </div>
                      <Badge className="bg-[#f5f6ff] text-[#394355] px-3 py-1.5 rounded-lg font-medium text-xs leading-5 [font-family:'Raleway',Helvetica] whitespace-normal text-right">
                        {m.role}
                      </Badge>
                    </div>

                    {m.experience && (
                      <p className="text-[#394355] text-sm leading-5">{m.experience}</p>
                    )}

                    {renderSkills(m.skills)}

                    {(m.links?.website || m.links?.linkedin) && (
                      <div className="mt-2">
                        <a
                          href={m.links.website || m.links.linkedin!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[#527dc5] underline hover:opacity-90"
                          aria-label={`Открыть профиль ${m.name}`}
                        >
                          Профиль <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="px-8 mt-auto mb-[22px]">
                    <Button className="w-full rounded-xl" onClick={() => openMember(m)}>
                      Посмотреть профиль
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Nav */}
          <div className="flex w-full items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 px-4 z-10">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="w-14 h-14 border-0 rounded-[50px] shadow-[0px_15px_44px_rgba(31,124,254,0.4)] bg-white hover:scale-105 transition-transform"
              aria-label="Предыдущие сотрудники"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="w-14 h-14 border-0 rounded-[50px] shadow-[0px_15px_44px_rgba(31,124,254,0.4)] bg-white hover:scale-105 transition-transform"
              aria-label="Следующие сотрудники"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile carousel */}
      <section
        className="md:hidden w-full py-8"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative mx-auto w-full max-w-[640px] px-3 overflow-hidden">
          <div className="flex justify-center items-center transition-all duration-300 ease-out relative min-h-[460px]">
            <Button
              onClick={handleMobilePrev}
              variant="outline"
              size="icon"
              className="w-10 h-10 border-0 rounded-full shadow-[0px_6px_16px_rgba(31,124,254,0.4)] bg-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ml-2"
              aria-label="Предыдущий"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>

            <div className="w-full max-w-[92vw] mx-auto">
              {mobileVisibleMembers.map((m) => (
                <Card key={m.id} className="group w-full h-auto bg-white/95 border-0 rounded-2xl shadow-[0px_20px_35px_0px_rgba(22,29,36,0.12)]">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="flex justify-center pt-6 pb-4">
                      {/* Updated mobile image container */}
                      <div className="w-[86%] h-[320px] relative overflow-hidden rounded-xl">
                        {!loadedIds[m.id] && (
                          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#eef2f8] to-[#e8eef8]" />
                        )}
                        <Image
                          src={m.image}
                          alt={`${m.name} portrait`}
                          fill
                          className="rounded-xl object-contain" 
                          style={m.objectPosition ? { objectPosition: m.objectPosition } : undefined}
                          sizes="(max-width: 400px) 92vw, 92vw"
                          onLoadingComplete={() => markLoaded(m.id)}
                          quality={90} 
                        />
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/25 via-transparent to-transparent rounded-xl" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 px-5 pb-6 text-center">
                      <div className="flex flex-col gap-1 w-full items-center">
                        <h3 className="font-semibold text-[#394355] text-xl leading-tight [font-family:'Raleway',Helvetica]">
                          {m.name}
                        </h3>
                        <Badge className="bg-[#f5f6ff] text-[#394355] px-3 py-1.5 rounded-lg font-medium text-xs [font-family:'Raleway',Helvetica] whitespace-normal text-center max-w-full">
                          {m.role}
                        </Badge>
                      </div>

                      <div className="mt-1">{renderMeta(m)}</div>

                      {m.experience && (
                        <p className="font-normal text-[#394355] text-sm leading-relaxed [font-family:'Raleway',Helvetica] mt-1 max-w-[90%]">
                          {m.experience}
                        </p>
                      )}

                      {renderSkills(m.skills)}

                      <div className="flex gap-2 mt-2">
                        <Button size="sm" className="rounded-full" onClick={() => openMember(m)}>
                          Подробнее
                        </Button>
                        {m.links?.email && (
                          <Button size="icon" variant="secondary" className="rounded-full" asChild aria-label={`Написать ${m.name}`}>
                            <a href={`mailto:${m.links.email}`}><Mail className="w-4 h-4" /></a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={handleMobileNext}
              variant="outline"
              size="icon"
              className="w-10 h-10 border-0 rounded-full shadow-[0px_6px_16px_rgba(31,124,254,0.4)] bg-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mr-2"
              aria-label="Следующий"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-5">
            <div className="text-sm text-[#394355] [font-family:'Raleway',Helvetica] bg-[#f5f6ff] px-4 py-2 rounded-lg font-medium">
              {mobileStartIndex + 1} / {teamMembers.length}
            </div>
          </div>
        </div>
      </section>

      {/* ======= Info Modal ======= */}
      {infoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          <button aria-label="Закрыть" className="absolute inset-0 bg-black/40" onClick={closeInfo} />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-[92%] p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 id="about-modal-title" className="text-xl font-semibold text-[#394355]">
                {infoTitle}
              </h3>
              <button
                onClick={closeInfo}
                aria-label="Закрыть модальное окно"
                className="rounded-md px-2 py-1 hover:bg-[#f5f6ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5]"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 text-base leading-6">{infoBody}</div>
            <div className="mt-6 flex justify-end">
              <Button onClick={closeInfo} className="rounded-md">Понятно</Button>
            </div>
          </div>
        </div>
      )}

      {/* ======= Member Modal ======= */}
      {memberOpen && modalMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          <button aria-label="Закрыть" className="absolute inset-0 bg-black/40" onClick={closeMember} />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-xl w-[92%] p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 id="member-modal-title" className="text-xl font-semibold text-[#394355]">
                {modalMember.name}
              </h3>
              <button
                onClick={closeMember}
                aria-label="Закрыть модальное окно"
                className="rounded-md px-2 py-1 hover:bg-[#f5f6ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5]"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 flex items-start gap-4">
              {/* Updated modal image */}
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={modalMember.image}
                  alt={`${modalMember.name} portrait`}
                  fill
                  className="object-contain" 
                  style={modalMember.objectPosition ? { objectPosition: modalMember.objectPosition } : undefined}
                  sizes="96px"
                  quality={90} 
                />
              </div>

              <div className="text-[#394355] flex-1">
                <div className="mb-1">
                  <Badge className="bg-[#f5f6ff] text-[#394355] rounded-md">{modalMember.role}</Badge>
                </div>
                {renderMeta(modalMember)}
                {modalMember.experience && <p className="mt-2 leading-6">{modalMember.experience}</p>}

                {modalMember.achievements && modalMember.achievements.length > 0 && (
                  <div className="mt-3">
                    <h4 className="font-semibold mb-1">Достижения:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {modalMember.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(modalMember.links?.website || modalMember.links?.linkedin) && (
                  <div className="mt-3">
                    <a
                      href={modalMember.links.website || modalMember.links.linkedin!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#527dc5] underline hover:opacity-90"
                    >
                      Открыть профиль <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              {modalMember.links?.email && (
                <Button variant="secondary" asChild className="rounded-md">
                  <a href={`mailto:${modalMember.links.email}`}>
                    <Mail className="w-4 h-4 mr-1" />
                    Связаться
                  </a>
                </Button>
              )}
              <Button onClick={closeMember} className="rounded-md">Понятно</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};