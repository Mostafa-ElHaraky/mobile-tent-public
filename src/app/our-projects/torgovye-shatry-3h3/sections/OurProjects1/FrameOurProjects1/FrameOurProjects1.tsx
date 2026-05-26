'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../../../../../../components/ui/breadcrumb";
import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../../../components/ui/carousel";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from 'react';


export const FrameOurProjects1 = (): ReactElement => {
  // Hotel images data for carousel
  const hotelImages = [
    { id: 1, src: "/RectangleOurProjects.png", alt: "Hotel view" },
    { id: 2, src: "/RectangleOurProjects.png", alt: "Hotel view" },
  ];

  return (
    <div className="w-full max-w-[1440px] h-[899px] overflow-hidden mx-auto">
      <div className="relative w-full h-[1196px] top-[14px]">
        {/* Background clouds */}
        <img
          className="absolute w-[719px] h-[643px] top-[194px] left-0 object-cover"
          alt="Element clouds"
          src="/08-clouds-2.png"
        />

        {/* Breadcrumb navigation */}
        <div className="absolute top-[172px] left-[46px]">
          <Breadcrumb className="p-1 bg-[#4f5d801a] rounded">
            <BreadcrumbList className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink className="font-['Raleway',Helvetica] font-normal text-[#394355] text-xs">
                  Главная
                </BreadcrumbLink>
              </BreadcrumbItem>
              <span className="mx-1 text-xs text-[#394355]">&gt;</span>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-['Raleway',Helvetica] font-medium text-[#394355] text-xs underline">
                  Торговые шатры 3х3
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

{/* Hotel images carousel */}
<Carousel className="absolute top-[300px] left-[50px] w-[1340px]  group">
  <CarouselContent className="gap-6">
    {hotelImages.map((image) => (
      <CarouselItem key={image.id} className="basis-1/2">
        <Card className="border-0">
          <CardContent className="p-0">
            <img
              className="w-full h-[469px] object-cover rounded-lg"
              alt={image.alt}
              src={image.src}
            />
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  
  {/* Previous Button */}

  <Button
    variant="outline"
    size="icon"
    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_rgba(31,124,254,0.4)] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-105 transition-transform z-10"
  >
    <img 
      className="w-3.5 h-6" 
      alt="Next slide" 
      src="/GROP-11.png" 
    />
  </Button> 


  {/* Next Button */}
  <Button
    variant="outline"
    size="icon"
    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_rgba(31,124,254,0.4)] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-105 transition-transform z-10"
  >
    <img 
      className="w-3.5 h-6 transform rotate-180" 
      alt="Previous slide" 
      src="/GROP-11.png" 
    />
  </Button>
</Carousel>

        {/* Bottom grass decoration */}
        <img
          className="absolute w-[318px] h-10 top-[1053px] left-0"
          alt="Decorative grass"
          src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
        />
      </div>
    </div>
  );
};
