'use client';

import { Card, CardContent } from "../../../../components/ui/card";
import { ReactElement } from 'react';
import Image from 'next/image';

export const Frame1Proizvodstvoshatrov = (): ReactElement => {
  const visualizationImages = [
    { src: "/rectangle-96.webp", alt: "3D Visualization 1" },
    { src: "/rectangle-97.webp", alt: "3D Visualization 2" },
    { src: "/rectangle-98.webp", alt: "3D Visualization 3" },
  ];

  return (
    <>
      {/* ================= Desktop (unchanged) ================= */}
      <section className="hidden md:flex flex-col items-start gap-[45px] w-full py-8">
        <h2 className="w-full font-semibold text-4xl leading-normal font-['Raleway',Helvetica] tracking-[0]">
          <span className="text-[#527dc5]">Итоговой частью</span>
          <span className="text-[#232c42]"> становится 3D визуализация</span>
        </h2>

        <div className="flex flex-wrap items-start gap-[26px] w-full">
          {visualizationImages.map((image, index) => (
            <Card key={index} className="border-none shadow-none flex-1 min-w-[300px]">
              <CardContent className="p-0">
                <div className="relative w-full h-[424px]">
                  <Image className="object-cover" loading="lazy" alt={image.alt} src={image.src} fill />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= Mobile (new) ================= */}
      <section className="md:hidden flex flex-col items-center gap-6 w-full px-4 py-8">
        <h2 className="text-2xl font-semibold text-center [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Итоговой частью</span>
          <span className="text-[#232c42]"> становится 3D визуализация</span>
        </h2>

        {/* Horizontal scroll gallery */}
        <div className="flex overflow-x-auto gap-4 w-full snap-x snap-mandatory scrollbar-hide">
          {visualizationImages.map((image, index) => (
            <Card key={index} className="min-w-[85%] rounded-2xl border-none shadow-md snap-center">
              <CardContent className="p-0">
                <div className="relative w-full h-60 sm:h-72 rounded-2xl overflow-hidden">
                  <Image src={image.src} loading="lazy" alt={image.alt} fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};