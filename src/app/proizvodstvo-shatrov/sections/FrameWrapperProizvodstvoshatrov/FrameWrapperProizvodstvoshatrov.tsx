'use client';

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../../../../components/ui/breadcrumb";
import { useRef, useEffect, useState } from "react";
import { ReactElement } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from "../../../../components/ui/Header";

export const FrameWrapperProizvodstvoshatrov = (): ReactElement => {
  const catalogRef = useRef<HTMLDivElement | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();

  // Manually defined URLs for tent types
  const tentUrls = {
    "Арочные шатры": "/shatry-i-navesy/arochnye",
    "Глэмпинг": "/shatry-i-navesy/glehmping",
    "Купольные конструкции": "/shatry-i-navesy/kruglye",
    "Мембранные шатры": "/shatry-i-navesy/membrannye",
    "Мобильные шатры": "/shatry-i-navesy/mobilnye",
    "Надувные шатры": "/shatry-i-navesy/naduvnye",
    "Натяжные шатры": "/shatry-i-navesy/natyagnye",
    "Пагода шатры": "/shatry-i-navesy/pagoda",
    "Сферические шатры": "/shatry-i-navesy/kruglye",
    "Шатер звезда": "/shatry-i-navesy/shater-zvezda",
  } as const;

  // Manually defined URLs for other constructions
  const constructionUrls = {
    "Перголы": "/pergoly",
    "Тентовые ангары": "/shatry-i-navesy/tentovye-angary",
    "Арочные ангары": "/shatry-i-navesy/angary_arochnye",
    "Каркасные ангары": "/shatry-i-navesy/angary_karkasnye",
    "Зонты": "/shatry-i-navesy/zonty",
  } as const;

  // Data for tent types
  const tentTypes: string[][] = [
    [
      "Арочные шатры",
      "Глэмпинг",
      "Купольные конструкции",
      "Мембранные шатры",
    ],
    [
      "Мобильные шатры",
      "Надувные шатры",
      "Натяжные шатры",
      "Пагода шатры",
      "Сферические шатры",
      "Шатер звезда",
    ],
  ];

  // Data for other tent constructions
  const otherConstructions: string[][] = [
    ["Перголы", "Тентовые ангары", "Арочные ангары"],
    ["Каркасные ангары", "Зонты"],
  ];

  // Data for the feature points
  const features = [
    {
      id: 1,
      icon: "/About2-group-16.webp",
      title: "Проектирование",
      description: "за 5-7 дней",
    },
    {
      id: 2,
      icon: "/About2-group-16.webp",
      title: "Изготовление",
      description: "до 30 дней",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // noop
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* SINGLE SEO-OPTIMIZED H1 TAG - VISIBLE ON BOTH DESKTOP AND MOBILE */}
      <div className="sr-only">Производство тентовых конструкций любой сложности</div>

      {/* === DESKTOP ========================== */}
      <div className="hidden md:flex flex-col items-center gap-[65px] relative top-[160px] w-full">
        {/* Header section */}
        <div className="relative top-[25px] left-[-600px]">
          <Breadcrumb>
            <BreadcrumbList className="bg-[#4f5d801a] rounded">
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => router.push('/')}
                  className="font-normal text-[#394355] text-xs [font-family:'Raleway',Helvetica] hover:cursor-pointer hover:underline"
                >
                  Главная
                </BreadcrumbLink>
                <span className="mx-1">/</span>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-medium underline text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                  Производство
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <div className="relative w-full h-[458px] bg-[url(/rectangle-93.webp)] bg-cover bg-[50%_50%] rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#232C42] to[rgba(89,113,168,0.47)]" />
          <div className="flex flex-col items-start gap-[45px] absolute top-[104px] left-[47px]">
            <div className="flex flex-col w-[557px] items-start gap-7">
              <div className="flex flex-col w-[532px] items-start gap-[22px]">
                <div className="flex flex-col items-start gap-3">
                  {/* Visual heading - not an H1 */}
                  <div className="font-semibold text-3xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="text-[#7aacff]">Производство тентовых<br/>конструкций </span>
                    <span className="text-white">любой сложности</span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex flex-col items-start gap-9">
                    <div className="flex flex-col items-start gap-1.5">
                      <div className="flex flex-col items-start gap-6">
                        <Button className="flex items-start gap-2.5 px-3 py-1.5 rounded-lg [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                          <span className="font-medium text-white text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                            собственном производстве в г. Калуга
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex flex-col w-[155px] items-start gap-[51px]">
                  <div className="flex items-center gap-3">
                    <div className="relative w-6 h-6">
                      <Image className="absolute w-6 h-[17px] top-[3px] left-0" priority alt={`Feature icon ${feature.id}`} src={feature.icon} width={24} height={17} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="relative w-[119px] mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                      <span className="font-semibold">{feature.title}<br/></span>
                      <span className="[font-family:'Raleway',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">{feature.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VIDEO CARD - fixed overlay clicks, autoplay */}
          <Card className="absolute w=[502px] w-[502px] h-[362px] top-[47px] left-[885px] border-0 bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] overflow-hidden">
            {/* Decorative background must ignore pointer events */}
            <div className="absolute inset-0 bg-[url('/About2-rectangle-65.webp')] rounded-2xl border-0 bg-cover bg-center opacity-80 pointer-events-none" />
            <CardContent className="p-0 h-full flex items-center justify-center relative">
              {showVideo ? (
                <iframe
                  className="w-full h-full rounded-[20px]"
                  src="https://rutube.ru/play/embed/51679662e77a22b3b4df5ba3e06d0bc0?autoplay=1"
                  title="Производство — видео"
                  frameBorder={0}
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="relative w-[57px] h-[57px] bg-[#f5f6ff] rounded-[28.72px] flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6FA7FF]"
                >
                  <Image className="w-[19px] h-[22px]" alt="Play button" priority src="/About1-polygon-2.webp" width={19} height={22} />
                </button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Monthly capacity */}
        <div className="flex flex-col items-center gap-11 w-full px-12">
          <h2 className="text-4xl font-semibold [font-family:'Raleway',Helvetica]"><span className="text-[#527dc5]">Ежемесячные </span><span className="text-[#232c42]">мощности</span></h2>
          <div className="flex gap-8 justify-center w-full">
            <div className="bg-white p-8 rounded-[20px] shadow-xl w-[450px]">
              <div className="text-[80px] font-bold bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] bg-clip-text text-transparent">40 000<span className="text-3xl">тонн</span></div>
              <div className="text-xl font-semibold text-[#4f5d80] mt-4">сборных металлоконструкций</div>
            </div>
            <div className="bg-gradient-to-b from-[#243057] to-[#374255] p-8 rounded-[20px] shadow-xl w-[450px]">
              <div className="text-[80px] font-bold text-[#8cb7ff]">50 000<span className="text-3xl">+</span></div>
              <div className="text-xl font-semibold text-white mt-4">тентовых покрытий</div>
            </div>
          </div>
        </div>

        <div className="relative bottom-[65px] right-[730px]"><Header /></div>

        {/* What we produce */}
        <section className="w-full h-[540px] bg-[#eef1f8] rounded-[20px] p-12 pt-16">
          <div className="flex flex-col gap-9">
            <h2 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">Что предлагаем</h2>
            <div className="flex gap-6">
              {/* Left card */}
              <Card className="w-[888px] h-[362px] bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 ">
                <CardContent className="p-7">
                  <div className="flex flex-col gap-[21px]">
                    <h3 className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica]">Шатры</h3>
                    <div className="flex gap-[61px]">
                      {tentTypes.map((column, columnIndex) => (
                        <div key={`tent-column-${columnIndex}`} className="flex flex-col gap-3">
                          {column.map((item, itemIndex) => (
                            <a key={`tent-item-${columnIndex}-${itemIndex}`} href={(tentUrls as any)[item] || "#"} className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] w-[169px]">
                              {item}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute w-[366px] h-[296px] top-[23px] right-5 rounded-[20px]" style={{ background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #4778C7 95.5%)' }}>
                    <Image className="ml-[30px]" priority alt="Event tent" src="/event-tent-i02-1.webp" width={336} height={296} />
                  </div>
                </CardContent>
              </Card>

              {/* Right card */}
              <Card className="w-[432px] h-[362px] bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-0 ">
                <CardContent className="p-7">
                  <div className="flex flex-col gap-[21px]">
                    <h3 className="font-bold text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica]">Другие тентовые конструкции</h3>
                    <div className="flex gap-[61px]">
                      {otherConstructions.map((column, columnIndex) => (
                        <div key={`construction-column-${columnIndex}`} className="flex flex-col gap-3">
                          {column.map((item, itemIndex) => (
                            <a key={`construction-item-${columnIndex}-${itemIndex}`} href={(constructionUrls as any)[item] || "#"} className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] w-[169px]">
                              {item}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute w-[386px] h-[132px] bottom-[23px] left-[23px] rounded-[20px]" style={{ background: 'linear-gradient(108.32deg, #243057 -27.58%, #374255 107.93%)' }}>
                    <Image className="mt-3 ml-[33px]" priority alt="Bessonneau hangar" src="/bessonneau-hangar-i01-1.webp" width={320} height={112} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* === MOBILE =============================== */}
      <div className="md:hidden flex flex-col items-stretch gap-8 relative w-full px-4">
        
        <div className="relative top-[250px]">
        {/* Breadcrumbs */}
        <div className="pt-4 relative bottom-[15px]">
          <Breadcrumb>
            <BreadcrumbList className=" rounded px-2 py-1">
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => router.push('/')} className="text-xs text-[#394355] underline">
                  Главная
                </BreadcrumbLink>
                <span className="mx-1">/</span>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-xs text-[#394355] font-medium underline">
                  Производство
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <div className="relative w-full rounded-2xl overflow-hidden">
          <div className="w-full h-[380px] bg-[url(/rectangle-93.webp)] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#232C42]/90 to-[rgba(89,113,168,0.55)]" />

          <div className="absolute inset-0 p-5 flex flex-col justify-between">
            <div className="max-w-[90%]">
              {/* Visual heading - not an H1 */}
              <div className="font-semibold text-2xl leading-snug text-white [font-family:'Raleway',Helvetica]">
                <span className="text-[#7aacff]">Производство тентовых </span>
                конструкций любой сложности
              </div>
              <Button className="mt-4 px-3 py-1.5 rounded-lg [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <span className="text-white text-sm">собственном производстве в г. Калуга</span>
              </Button>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {features.map((f) => (
                <div key={f.id} className="flex items-center gap-2">
                  <Image alt="ico" src={f.icon} priority width={24} height={24} />
                  <div className="text-white text-xs leading-5">
                    <span className="font-semibold">{f.title}</span>
                    <div>{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video card floating at bottom-right replaced with full-width below on mobile */}
        </div>

        {/* Video card (full-width, fixed overlay clicks, autoplay) */}
        <Card className="w-full border-0 bg-white rounded-2xl overflow-hidden">
          {/* When video is showing, maintain 16:9 with padding-bottom */}
          <div className={`relative w-full ${showVideo ? 'pb-[56.25%]' : 'pb-0'}`}>
            {/* Decorative bg; ignore pointer events to not swallow clicks */}
            <div className="absolute inset-0 bg-[url('/About2-rectangle-65.webp')] bg-cover bg-center opacity-80 pointer-events-none" />
            <CardContent className={`p-0 ${showVideo ? 'absolute inset-0' : 'py-10 flex items-center justify-center relative'}`}>
              {showVideo ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://rutube.ru/play/embed/51679662e77a22b3b4df5ba3e06d0bc0?autoplay=1"
                  title="Производство — видео"
                  frameBorder={0}
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="w-14 h-14 bg-[#f5f6ff] rounded-full flex items-center justify-center active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6FA7FF]"
                >
                  <Image alt="Play" priority src="/About1-polygon-2.webp" width={19} height={22} />
                </button>
              )}
            </CardContent>
          </div>
        </Card>

        {/* Monthly capacity */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold [font-family:'Raleway',Helvetica]"><span className="text-[#527dc5]">Ежемесячные </span><span className="text-[#232c42]">мощности</span></h2>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-5xl font-bold bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] bg-clip-text text-transparent">40 000<span className="text-lg">тонн</span></div>
              <div className="text-base font-semibold text-[#4f5d80] mt-2">сборных металлоконструкций</div>
            </div>
            <div className="bg-gradient-to-b from-[#243057] to-[#374255] p-6 rounded-2xl shadow-sm">
              <div className="text-5xl font-bold text-[#8cb7ff]">50 000<span className="text-lg">+</span></div>
              <div className="text-base font-semibold text-white mt-2">тентовых покрытий</div>
            </div>
          </div>
        </div>
</div>

        {/* Optional header placement on mobile (no offsets) */}
        <div className="mt-2"><Header /></div>

        {/* What we produce */}
        <section className="w-full bg-[#eef1f8] rounded-2xl p-5">
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-[#232c42] text-2xl [font-family:'Raleway',Helvetica]">Что предлагаем</h2>

            {/* Card: Шатры */}
            <Card className="w-full bg-white border-0 rounded-2xl">
              <CardContent className="p-5">
                <h3 className="font-bold text-[#527dc5] text-lg [font-family:'Raleway',Helvetica] mb-4">Шатры</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {tentTypes.flat().map((item, idx) => (
                    <a key={`tent-item-mobile-${idx}`} href={(tentUrls as any)[item] || '#'} className="text-sm text-[#394355] underline">
                      {item}
                    </a>
                  ))}
                </div>
                <div className="mt-5 w-full rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #4778C7 95.5%)' }}>
                  <Image alt="Event tent" priority src="/event-tent-i02-1.webp" width={800} height={600} className="w-full h-40 object-contain" />
                </div>
              </CardContent>
            </Card>

            {/* Card: Другие конструкции */}
            <Card className="w-full bg-white border-0 rounded-2xl">
              <CardContent className="p-5">
                <h3 className="font-bold text-[#232c42] text-lg [font-family:'Raleway',Helvetica] mb-4">Другие тентовые конструкции</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {otherConstructions.flat().map((item, idx) => (
                    <a key={`other-item-mobile-${idx}`} href={(constructionUrls as any)[item] || '#'} className="text-sm text-[#394355] underline">
                      {item}
                    </a>
                  ))}
                </div>
                <div className="mt-5 w-full rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(108.32deg, #243057 -27.58%, #374255 107.93%)' }}>
                  <Image alt="Bessonneau hangar" priority src="/bessonneau-hangar-i01-1.webp" width={800} height={300} className="w-full h-28 object-contain" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};