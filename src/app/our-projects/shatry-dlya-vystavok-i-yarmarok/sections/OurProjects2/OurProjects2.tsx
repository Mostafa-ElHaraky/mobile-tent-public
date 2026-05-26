'use client';

import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement, useMemo, useState } from 'react';

export const OurProjects2 = (): ReactElement => {
  // Data for the photo sections
  const photoSections = [
    {
      id: "in-progress" as const,
      title: [
        { text: "Фото ", color: "text-[#232c42]" },
        { text: "в процессе", color: "text-[#527dc5]" },
        { text: " работы", color: "text-[#232c42]" },
      ],
    },
    {
      id: "final" as const,
      title: [
        { text: "Итоговые", color: "text-[#527dc5]" },
        { text: " фото", color: "text-[#232c42]" },
      ],
    },
  ];

  // More images per section
  const sectionPhotos: Record<typeof photoSections[number]['id'], string[]> = useMemo(() => ({
    "in-progress": [
      "/19-shatry-dlya-vystavok-i-yarmarok_5.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_6.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_7.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_8.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_9.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_0.webp",
    ],
    "final": [
      "/19-shatry-dlya-vystavok-i-yarmarok_5.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_6.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_7.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_8.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_9.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok.webp",
      "/19-shatry-dlya-vystavok-i-yarmarok_0.webp",
    ],
  }), []);

  // Track current start index for each section's carousel
  const [startIndex, setStartIndex] = useState<Record<string, number>>({
    "in-progress": 0,
    "final": 0,
  });

  const visibleCount = 3; // desktop: show 3 cards per row

  const getVisible = (all: string[], start: number) => {
    // Return a circular window of length `visibleCount`
    const result: string[] = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(all[(start + i) % all.length]);
    }
    return result;
  };

  const handlePrev = (sectionId: string) => {
    const all = sectionPhotos[sectionId as keyof typeof sectionPhotos];
    setStartIndex((prev) => {
      const cur = prev[sectionId] ?? 0;
      const next = (cur - 1 + all.length) % all.length;
      return { ...prev, [sectionId]: next };
    });
  };

  const handleNext = (sectionId: string) => {
    const all = sectionPhotos[sectionId as keyof typeof sectionPhotos];
    setStartIndex((prev) => {
      const cur = prev[sectionId] ?? 0;
      const next = (cur + 1) % all.length;
      return { ...prev, [sectionId]: next };
    });
  };

  return (
    <>
      {/* ===== Desktop (ORIGINAL — UNCHANGED) ===== */}
      <div className="relative w-full max-w-[1440px] h-[925px] bg-white overflow-hidden mx-auto hidden md:block">
        <div className="absolute w-full h-[412px] top-[3329px] left-0" />

        {photoSections.map((section, sectionIndex) => {
          const all = sectionPhotos[section.id];
          const current = startIndex[section.id] ?? 0;
          const photosToShow = getVisible(all, current);

          return (
            <div
              key={section.id}
              className="inline-flex flex-col items-start gap-[30px] absolute left-12"
              style={{ top: sectionIndex === 0 ? "37px" : "482px" }}
            >
              <div className="inline-flex items-start gap-[595px] relative flex-[0_0_auto] w-full">
                <div className="relative w-[611px] mt-[-1.00px] font-['Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-normal">
                  {section.title.map((part, index) => (
                    <span key={index} className={part.color}>
                      {part.text}
                    </span>
                  ))}
                </div>

                <div className="flex w-[138px] items-start justify-between relative">
                  {/* Previous Button */}
                  <Button
                    aria-label="Previous"
                    variant="outline"
                    size="icon"
                    onClick={() => handlePrev(section.id)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_rgba(31,124,254,0.4)] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-105 transition-transform z-10"
                  >
                    <img
                      className="w-3.5 h-6 transform rotate-180"
                      alt="Previous slide"
                      src="/GROP-11.webp"
                    />
                  </Button>

                  {/* Next Button */}
                  <Button
                    aria-label="Next"
                    variant="outline"
                    size="icon"
                    onClick={() => handleNext(section.id)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_rgba(31,124,254,0.4)] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-105 transition-transform z-10"
                  >
                    <img
                      className="w-3.5 h-6"
                      alt="Next slide"
                      src="/GROP-11.webp"
                    />
                  </Button>
                </div>
              </div>

              <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
                {photosToShow.map((photo, index) => (
                  <Card key={`${section.id}-${current}-${index}`} className="border-none shadow-none">
                    <CardContent className="p-0">
                      <div
                        className="w-[432px] h-[309px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${photo})` }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== Mobile (NEW, separate render) ===== */}
      <div className="block md:hidden w-full bg-white">
        <div className="max-w-[440px] mx-auto w-full px-4 py-8 space-y-10">
          {photoSections.map((section) => {
            const all = sectionPhotos[section.id];
            const current = startIndex[section.id] ?? 0;
            const currentPhoto = all[current];

            return (
              <section key={section.id} className="space-y-4">
                {/* Title */}
                <h2 className="text-xl font-semibold [font-family:'Raleway',Helvetica] leading-tight">
                  {section.title.map((part, i) => (
                    <span key={i} className={part.color}>{part.text}</span>
                  ))}
                </h2>

                {/* Single-image carousel view */}
                <Card className="border-0 shadow-none rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[220px] sm:h-[260px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${currentPhoto})` }}
                    />
                  </CardContent>
                </Card>

                {/* Controls + simple index indicator */}
                <div className="flex items-center justify-between">
                  <Button
                    aria-label="Previous"
                    variant="outline"
                    size="icon"
                    onClick={() => handlePrev(section.id)}
                    className="w-12 h-12 rounded-full shadow p-0 border-0 bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                    <img className="w-3.5 h-6 rotate-180" alt="Prev" src="/GROP-11.webp" />
                  </Button>

                  <div className="text-xs text-[#394355] [font-family:'Raleway',Helvetica]">
                    {current + 1} / {all.length}
                  </div>

                  <Button
                    aria-label="Next"
                    variant="outline"
                    size="icon"
                    onClick={() => handleNext(section.id)}
                    className="w-12 h-12 rounded-full shadow p-0 border-0 bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                    <img className="w-3.5 h-6" alt="Next" src="/GROP-11.webp" />
                  </Button>
                </div>

                {/* Optional: tiny thumbnails row */}
                <div className="mt-3 flex gap-2 overflow-x-auto">
                  {all.map((src, idx) => (
                    <button
                      key={src}
                      onClick={() =>
                        setStartIndex((prev) => ({ ...prev, [section.id]: idx }))
                      }
                      className={`shrink-0 w-16 h-12 rounded-lg bg-cover bg-center border
                        ${idx === current ? 'border-[#527dc5]' : 'border-transparent'}`}
                      style={{ backgroundImage: `url(${src})` }}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};
