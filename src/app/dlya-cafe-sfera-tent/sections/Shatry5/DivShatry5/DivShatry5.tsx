'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { Alert, AlertDescription } from "../../../../../components/ui/alert";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const DivShatry5 = (): ReactElement => {
  const comparisonData = [
    {
      type: "our-plotter",
      title: "Наша компания",
      subtitle: "Вырезаем на плоттере с ЧПУ с точностью до 0.001мм.",
      description: (
        <>
          Это дает мощное натяжение при любой погоде
          <br />и ветре. Тент не провисает. Стоимость плоттера{" "}
          <strong>5+ млн. руб.</strong>
        </>
      ),
      imageSrc: "/rectangle-49.webp",
      isDark: false,
    },
    {
      type: "others-templates",
      title: "Другие компании",
      subtitle:
        "Используют лекала. Вручную обводят ручкой и вырезают ножницами прямо на полу.",
      description:
        "Получаются элементы разные по размеру. Натяжение в одном месте хорошее, в другом тент провисает",
      imageSrc: "/rectangle-51.webp",
      isDark: true,
    },
    // NEW CARDS BELOW — to test navigation
    {
      type: "our-welding",
      title: "Наша сварка швов",
      subtitle: "ПВХ-швы выполняем на высокочастотной сварке (HF).",
      description:
        "Ровные и герметичные стыки без прожогов. Контроль температуры и давления по каждому проходу.",
      imageSrc: "/kopal1.webp",
      isDark: false,
    },
    {
      type: "others-welding",
      title: "Сварка у посредников",
      subtitle: "Непостоянная температура, ручные «латки».",
      description:
        "Швы неровные, возможны микропротечки. Через сезон появляются заломы и разрывы.",
      imageSrc: "/krugly2.webp",
      isDark: true,
    },
    {
      type: "our-hardware",
      title: "Наша фурнитура",
      subtitle: "Оцинкованные/нерж. кольца, ремни, промышленная стропа.",
      description:
        "Держит экстремальные нагрузки, не ржавеет, не растягивается. Срок службы — годы.",
      imageSrc: "/glemping2.webp",
      isDark: false,
    },
    {
      type: "others-hardware",
      title: "Дешевая фурнитура",
      subtitle: "Китайские аналоги без сертификатов.",
      description:
        "Быстро рвутся и ржавеют, тент «гуляет» по ветру — теряется геометрия и безопасность.",
      imageSrc: "/hexag1.webp",
      isDark: true,
    },
  ];

  // --- Carousel state & helpers ---
  const [index, setIndex] = useState(0);

  const total = comparisonData.length;

  // Modified to move by 2 items at a time
  const next = useCallback(() => {
    setIndex((i) => (i + 2) % total);
  }, [total]);

  // Modified to move by 2 items at a time
  const prev = useCallback(() => {
    setIndex((i) => (i - 2 + total) % total);
  }, [total]);

  // show 2 on desktop, 1 on mobile — we render two sections with same index
  const desktopItems = useMemo(() => {
    const a = comparisonData[index];
    const b = comparisonData[(index + 1) % total];
    return [a, b];
  }, [comparisonData, index, total]);

  const mobileItem = useMemo(() => comparisonData[index], [comparisonData, index]);

  // Optional: keyboard navigation (Left/Right arrows) - also modified for 2-step navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:flex flex-col items-start gap-9 w-full max-w-[1344px] mx-auto my-12">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex flex-col max-w-[774px] items-start gap-3">
              <h2 className="font-normal text-4xl leading-normal font-['Raleway',Helvetica]">
                <span className="font-semibold text-[#527dc5]">
                  Будьте осторожны
                </span>
                <span className="font-medium text-[#232c42]">
                  , не нарвитесь на кустарное производство или посредников
                </span>
              </h2>
            </div>

            <Alert className="flex items-start gap-2.5 px-4 py-1.5 bg-[#f7e8e8] rounded-[10px] border-none">
              <div className="relative w-6 h-6">
                <div className="relative w-[17px] h-[15px] top-1 left-1 bg-[url(/DOCvector-1.webp)] bg-[100%_100%]">
                  <Image
                    fill={false}
                    width={2}
                    height={9}
                    alt="Warning icon"
                    src="/DOCgroup-4.webp"
                    className="absolute w-0.5 h-[9px] top-1 left-2"
                    loading="lazy"
                  />
                </div>
              </div>
              <AlertDescription className="font-semibold text-[#cf2a2a] text-xl leading-6 whitespace-nowrap font-['Raleway',Helvetica]">
                Обычно они выделяются низкой ценой и «сладкими обещаниями»
              </AlertDescription>
            </Alert>
          </div>

          <div className="flex items-center gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous slide"
              className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
            >
              <Image loading="lazy" width={14} height={24} alt="Previous slide" src="/GROP-10.webp" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next slide"
              className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
            >
              <Image loading="lazy" width={14} height={24} alt="Next slide" src="/GROP-11.webp" />
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-6 w-full">
          {desktopItems.map((item) => (
            <Card
              key={item.type}
              className={`w-full max-w-[660px] h-[660px] rounded-[20px] border-0 ${
                item.isDark
                  ? "bg-white border border-solid border-[#cecece] shadow-[var(--)] backdrop-blur-[79px]"
                  : "bg-[#6FA7FF] shadow-2"
              }`}
            >
              <CardContent className="p-0">
                <div className="p-10">
                  <div className="flex flex-col items-start gap-6">
                    <h3
                      className={`font-bold text-2xl leading-6 whitespace-nowrap font-['Raleway',Helvetica] ${
                        item.isDark ? "text-[#394355]" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`font-semibold text-lg leading-6 font-['Raleway',Helvetica] ${
                        item.isDark ? "text-[#394355]" : "text-white"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                    <p
                      className={`font-medium text-base leading-6 font-['Raleway',Helvetica] ${
                        item.isDark ? "text-[#394355]" : "text-white"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="relative w-[580px] h-[389px] mx-auto mt-[-10px] rounded-3xl overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={`${item.title} illustration`}
                    fill
                    className={`rounded-3xl object-cover ${
                      item.isDark ? "grayscale brightness-75" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple desktop indicators */}
        <div className="flex items-center gap-2 self-center">
          {comparisonData.map((_, i) => {
            // Only show indicators for every 2 items (first of each pair)
            if (i % 2 === 0) {
              const active = i === index;
              return (
                <button
                  key={`dot-${i}`}
                  aria-label={`Go to slide pair ${Math.floor(i/2) + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-[#3C6CEC]' : 'bg-gray-300'}`}
                />
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden flex flex-col items-start gap-6 w-full px-4 my-8">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col items-start gap-3 w-full">
            <h2 className="font-normal text-2xl leading-normal font-['Raleway',Helvetica]">
              <span className="font-semibold text-[#527dc5]">
                Будьте осторожны
              </span>
              <span className="font-medium text-[#232c42]">
                , не нарвитесь на кустарное производство или посредников
              </span>
            </h2>
          </div>

          <Alert className="flex items-start gap-2.5 px-4 py-1.5 bg-[#f7e8e8] rounded-[10px] border-none w-full">
            <div className="relative w-6 h-6">
              <div className="relative w-[17px] h-[15px] top-1 left-1 bg-[url(/DOCvector-1.webp)] bg-[100%_100%]">
                <Image
                  fill={false}
                  width={2}
                  height={9}
                  alt="Warning icon"
                  src="/DOCgroup-4.webp"
                  className="absolute w-0.5 h-[9px] top-1 left-2"
                  loading="lazy"
                />
              </div>
            </div>
            <AlertDescription className="font-semibold text-[#cf2a2a] text-lg leading-6 font-['Raleway',Helvetica]">
              Обычно они выделяются низкой ценой и «сладкими обещаниями»
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <Card
            key={mobileItem.type}
            className={`w-full h-auto rounded-[20px] border-0 ${
              mobileItem.isDark
                ? "bg-white border border-solid border-[#cecece] shadow-[var(--)] backdrop-blur-[79px]"
                : "bg-[#6FA7FF] shadow-2"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-start gap-4">
                <h3
                  className={`font-bold text-xl leading-6 font-['Raleway',Helvetica] ${
                    mobileItem.isDark ? "text-[#394355]" : "text-white"
                  }`}
                >
                  {mobileItem.title}
                </h3>
                <p
                  className={`font-semibold text-base leading-6 font-['Raleway',Helvetica] ${
                    mobileItem.isDark ? "text-[#394355]" : "text-white"
                  }`}
                >
                  {mobileItem.subtitle}
                </p>
                <p
                  className={`font-medium text-sm leading-6 font-['Raleway',Helvetica] ${
                    mobileItem.isDark ? "text-[#394355]" : "text-white"
                  }`}
                >
                  {mobileItem.description}
                </p>
              </div>
              <div className="relative w-full h-[240px] mt-4 rounded-xl overflow-hidden">
                <Image
                  src={mobileItem.imageSrc}
                  alt={`${mobileItem.title} illustration`}
                  fill
                  className={`rounded-xl object-cover ${
                    mobileItem.isDark ? "grayscale brightness-75" : ""
                  }`}
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center gap-6 w-full mt-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            aria-label="Previous slide"
            className="w-12 h-12 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
          >
            <Image loading="lazy" width={12} height={20} alt="Previous slide" src="/GROP-10.webp" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            aria-label="Next slide"
            className="w-12 h-12 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
          >
            <Image loading="lazy" width={12} height={20} alt="Next slide" src="/GROP-11.webp" />
          </Button>
        </div>

        {/* Mobile dots - For mobile we keep showing all dots since we show one card at a time */}
        <div className="flex items-center gap-2 self-center">
          {comparisonData.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={`m-dot-${i}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-[#3C6CEC]' : 'bg-gray-300'}`}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};