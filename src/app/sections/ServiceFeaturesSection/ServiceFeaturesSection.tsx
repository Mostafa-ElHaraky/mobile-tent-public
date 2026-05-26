'use client';

import { ReactElement } from "react";
import Image from "next/image";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../../components/ui/carousel";

export const ServiceFeaturesSection = (): ReactElement => {
  return (
    <>
      {/* Desktop Version - remains unchanged */}
      <div className="relative w-full max-w-[1314px] mx-auto h-auto mt-[-268px] hidden md:block">
        {/* Heading */}
        <div className="flex flex-col w-full items-start gap-6 mb-6 relative top-[30px] right-[10px]">
          <h2 className="w-full font-['Raleway',Helvetica] font-semibold text-4xl leading-normal">
            <span className="text-[#232c42]">Сложности сборки и разборки </span>
            <span className="text-[#527dc5]">- исключены</span>
          </h2>
        </div>

        {/* Main content row */}
        <div className="flex flex-row gap-8 justify-between relative">
          {/* Card */}
          <Card className="relative top-[150px] w-[542px] h-[156px] rounded-[16px] overflow-hidden shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0 ">
            <CardContent className="p-6">
              <div className="flex flex-col w-full items-start gap-[10px]">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-xl leading-6">
                  Все пазы и отверстия точно подходят друг другу
                </h3>
                <p className="w-full font-['Raleway',Helvetica] text-sm leading-5">
                  <span className="font-bold text-[#527dc5]">
                    Не надо сверлить новые, чтобы собрать.
                  </span>
                  <span className="font-medium text-[#4f5d80]">
                    {" "}
                    Используем лазерный труборез с ЧПУ. Если вы собирали мебель с
                    неправильными отверстиями, поймете о чем речь
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Carousel block */}
          <div className="relative w-[517px] h-[366px] rounded-[20px] overflow-hidden">
            <Carousel className="w-full h-full">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 1"
                    src="/orig-------1.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 2"
                    src="/collect1.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 3"
                    src="/collect2.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 4"
                    src="/collect3.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 5"
                    src="/collect4.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 6"
                    src="/collect5.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 7"
                    src="/collect6.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>

              {/* Prev / Next buttons (functional) */}
              <CarouselPrevious
                aria-label="Previous slide"
                className="absolute top-1/2 left-2 -translate-y-1/2 z-10 w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              >
                <Image loading="lazy" width={14} height={24} alt="Previous" src="/GROP-10.webp" />
              </CarouselPrevious>

              <CarouselNext
                aria-label="Next slide"
                className="absolute top-1/2 right-2 -translate-y-1/2 z-10 w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              >
                <Image loading="lazy" width={14} height={24} alt="Next" src="/GROP-11.webp" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Mobile Version - new responsive version */}
      <div className="block md:hidden w-full px-4 pb-6 -mt-25">
        {/* Heading */}
        <div className="flex flex-col w-full items-start gap-1 mb-4 ml-2">
          <h2 className="w-full font-['Raleway',Helvetica] font-semibold text-2xl leading-normal text-left flex flex-col">
            <span className="text-[#232c42]">Сложности сборки</span>
            <div className="flex items-baseline gap-1">
              <span className="text-[#232c42]">и разборки</span>
              <span className="text-[#527dc5]">- исключены</span>
            </div>
          </h2>
        </div>

        {/* Main content column */}
        <div className="flex flex-col gap-6 relative">
          {/* Carousel block - moved to top on mobile */}
          <div className="relative w-full h-[250px] rounded-[20px] overflow-hidden">
            <Carousel className="w-full h-full">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 1"
                    src="/orig-------1.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 2"
                    src="/collect1.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 3"
                    src="/collect2.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 4"
                    src="/collect3.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 5"
                    src="/collect4.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 6"
                    src="/collect5.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={517}
                    height={366}
                    alt="Металлическая конструкция 7"
                    src="/collect6.webp"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="lazy"
                  />
                </CarouselItem>
              </CarouselContent>

              {/* Prev / Next buttons (functional) */}
              <CarouselPrevious
                aria-label="Previous slide"
                className="absolute top-1/2 left-2 -translate-y-1/2 z-10 w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              >
                <Image loading="lazy" width={10} height={18} alt="Previous" src="/GROP-10.webp" />
              </CarouselPrevious>

              <CarouselNext
                aria-label="Next slide"
                className="absolute top-1/2 right-2 -translate-y-1/2 z-10 w-10 h-10 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              >
                <Image loading="lazy" width={10} height={18} alt="Next" src="/GROP-11.webp" />
              </CarouselNext>
            </Carousel>
          </div>

          {/* Card - moved below carousel on mobile */}
          <Card className="w-full h-auto rounded-[16px] overflow-hidden shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-0">
            <CardContent className="p-4">
              <div className="flex flex-col w-full items-start gap-[8px]">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-lg leading-5">
                  Все пазы и отверстия точно подходят друг другу
                </h3>
                <p className="w-full font-['Raleway',Helvetica] text-xs leading-4">
                  <span className="font-bold text-[#527dc5]">
                    Не надо сверлить новые, чтобы собрать.
                  </span>
                  <span className="font-medium text-[#4f5d80]">
                    {" "}
                    Используем лазерный труборез с ЧПУ. Если вы собирали мебель с
                    неправильными отверстиями, поймете о чем речь
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
