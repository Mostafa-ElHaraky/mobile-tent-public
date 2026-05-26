'use client';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPin,
  Award,
  Calendar,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

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
  objectPosition?: string; // e.g. "center 40%"
  department?: string;
  location?: string;
  tenureYears?: number;      // e.g. 8 -> "с 2017 года"
  experience?: string;       // free text (shown if provided)
  skills?: string[];         // chips
  achievements?: string[];   // bullets in modal
  links?: Linkset;
};

export const OverlapGroupWrapperAbout1 = (): ReactElement => {
  const visibleCount = 3;
  const mobileVisibleCount = 1;

  // --- DATA (add/adjust freely)
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

  // --- Carousel state
  const [startIndex, setStartIndex] = useState<number>(0);
  const [mobileStartIndex, setMobileStartIndex] = useState<number>(0);
  const len = teamMembers.length;

  const getCircularSlice = useCallback((from: number, count: number) => {
    const items: Member[] = [];
    for (let i = 0; i < count; i++) items.push(teamMembers[(from + i) % len]);
    return items;
  }, [len, teamMembers]);

  const visibleMembers = useMemo(
    () => getCircularSlice(startIndex, visibleCount),
    [getCircularSlice, startIndex]
  );
  const mobileVisibleMembers = useMemo(
    () => getCircularSlice(mobileStartIndex, mobileVisibleCount),
    [getCircularSlice, mobileStartIndex]
  );

  // --- Controls
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
  }, [len]);

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

  // --- Modal
  const [isOpen, setIsOpen] = useState(false);
  const [modalMember, setModalMember] = useState<Member | null>(null);
  const openModal = (m: Member) => { setModalMember(m); setIsOpen(true); };
  const closeModal = () => setIsOpen(false);

  // helper
  const renderSkills = (skills?: string[], limit = 4) => {
    if (!skills || skills.length === 0) return null;
    const shown = skills.slice(0, limit);
    const rest = skills.length - shown.length;
    return (
      <div className="flex flex-wrap gap-2">
        {shown.map((s) => (
          <span key={s} className="inline-flex items-center rounded-full bg-[#f5f6ff] text-[#394355] px-3 py-1 text-xs font-medium">
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

  // Image skeleton state map
  const [loadedIds, setLoadedIds] = useState<Record<number, boolean>>({});
  const markLoaded = (id: number) => setLoadedIds((s) => ({ ...s, [id]: true }));

  return (
    <>
      {/* Desktop */}
      <section className="relative w-full py-10 top-[608px] hidden md:block">
        <div ref={desktopWrapRef} className="relative max-w-[1401px] mx-auto overflow-visible">
          <div className="flex justify-center gap-7 transition-all duration-300 ease-out">
            {visibleMembers.map((m) => (
              <Card
                key={m.id}
                className="group relative w-[429px] h-[520px] bg-white/90 backdrop-blur border-0 rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] hover:shadow-[0_30px_60px_rgba(22,29,36,0.12)] hover:-translate-y-1 transition-transform"
              >
                {/* gradient edge */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-black/5" />
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative w-full pt-[24px]">
                    {/* Updated image container - removed fixed height and changed object-fit */}
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
                        loading="lazy"
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
                        onClick={() => openModal(m)}
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
                      <p className="text-[#394355] text-sm leading-5">
                        {m.experience}
                      </p>
                    )}

                    {renderSkills(m.skills)}

                    {/* Optional external links */}
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
                    <Button className="w-full rounded-xl" onClick={() => openModal(m)}>
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

      {/* Mobile */}
      <section className="relative w-full py-8 md:hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="relative max-w-full mx-auto overflow-hidden px-3">
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
                          loading="lazy"
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
                        <Button size="sm" className="rounded-full" onClick={() => openModal(m)}>
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

      {/* Modal */}
      {isOpen && modalMember && (
        <div role="dialog" aria-modal="true" aria-labelledby="member-modal-title" className="fixed inset-0 z-[100] flex items-center justify-center">
          <button aria-label="Закрыть" className="absolute inset-0 bg-black/40" onClick={closeModal} />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-xl w-[92%] p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 id="member-modal-title" className="text-xl font-semibold text-[#394355]">
                {modalMember.name}
              </h3>
              <button
                onClick={closeModal}
                aria-label="Закрыть модальное окно"
                className="rounded-md px-2 py-1 hover:bg-[#f5f6ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#527dc5]"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 flex items-start gap-4">
              {/* Updated modal image container */}
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={modalMember.image}
                  alt={`${modalMember.name} portrait`}
                  fill
                  className="object-contain"
                  style={modalMember.objectPosition ? { objectPosition: modalMember.objectPosition } : undefined}
                  sizes="96px"
                  loading="lazy"
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
                      {modalMember.achievements.map((a, i) => <li key={i}>{a}</li>)}
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
                  <a href={`mailto:${modalMember.links.email}`}><Mail className="w-4 h-4 mr-1" />Связаться</a>
                </Button>
              )}
              <Button onClick={closeModal} className="rounded-md">Понятно</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};