'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../../components/ui/carousel";
import { ReactElement } from 'react';

export const FrameOurProjects1 = (): ReactElement => {
const hotelImages = [
  { id: 1, src: "/shatyor10h15.jpg",   alt: "Шатёр для мероприятия Mercedes-Benz — общий вид" },
  { id: 2, src: "/shatyor10h15,2.jpg", alt: "Г-образная конфигурация из 6 модулей" },
  { id: 3, src: "/shatyor10h15,3.jpg", alt: "Интерьер: столы и диваны, зона для гостей" },
  { id: 4, src: "/shatyor10h15,4.jpg", alt: "Напольное покрытие с имитацией газона" },
  { id: 5, src: "/shatyor10h15,5.jpg", alt: "Электроснабжение: плазменные телевизоры и оборудование" },
  { id: 6, src: "/shatyor10h15,6.jpg", alt: "Декор: напольные вазоны с растениями" },
];

  return (
    <>
      {/* ===== Desktop (original, unchanged) ===== */}
      <div className="w-full max-w-[1440px] h-[899px] overflow-hidden mx-auto hidden md:block">
        <div className="relative w-full h-[1196px] top-[14px]">
          <Carousel className="absolute top-[300px] left-[50px] w/[1340px] w-[1340px] group">
            <CarouselContent className="gap-6">
              {hotelImages.map((image) => (
                <CarouselItem key={image.id} className="basis-1/2">
                  <Card className="border-0">
                    <CardContent className="p-0">
                      <img
                        className="w-full h-[469px] object-cover rounded-lg"
                        alt={image.alt}
                        src={image.src}
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext
              aria-label="Следующий слайд"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_rgba(31,124,254,0.4)] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-105 transition-transform z-10"
            >
              <img className="w-3.5 h-6" loading="lazy" alt="Next slide" src="/GROP-11.webp" />
            </CarouselNext>

            <CarouselPrevious
              aria-label="Предыдущий слайд"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_rgba(31,124,254,0.4)] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-105 transition-transform z-10"
            >
              <img className="w-3.5 h-6 rotate-180" alt="Previous slide" src="/GROP-11.webp" />
            </CarouselPrevious>
          </Carousel>
        </div>
      </div>

      {/* ===== Mobile (new, separate) ===== */}
      <div className="block md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {hotelImages.map((image) => (
              <CarouselItem key={image.id} className="basis-full">
                <Card className="border-0">
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[220px] sm:h-[260px] object-cover rounded-xl"
                      alt={image.alt}
                      src={image.src}
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};