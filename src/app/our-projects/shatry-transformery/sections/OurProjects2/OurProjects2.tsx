'use client';

import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { ReactElement } from 'react';

export const OurProjects2 = (): ReactElement => {
  // Data for the photo sections
  const photoSections = [
    {
      id: "in-progress",
      title: [
        { text: "Фото ", color: "text-[#232c42]" },
        { text: "в процессе", color: "text-[#527dc5]" },
        { text: " работы", color: "text-[#232c42]" },
      ],
    },
    {
      id: "final",
      title: [
        { text: "Итоговые", color: "text-[#527dc5]" },
        { text: " фото", color: "text-[#232c42]" },
      ],
    },
  ];

  // Photo gallery images (same for both sections in this example)
  const photos = Array(3).fill("/RectangleOurProjects.png");

  return (
    <div className="relative w-full max-w-[1440px] h-[925px] bg-white overflow-hidden mx-auto">
      <div className="absolute w-full h-[412px] top-[3329px] left-0" />

      {photoSections.map((section, sectionIndex) => (
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
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_rgba(31,124,254,0.4)] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-105 transition-transform z-10"
              >
                <img 
                  className="w-3.5 h-6 transform rotate-180" 
                  alt="Previous slide" 
                  src="/GROP-11.png" 
                />
              </Button>
              
              {/* Next Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_rgba(31,124,254,0.4)] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] hover:scale-105 transition-transform z-10"
              >
                <img 
                  className="w-3.5 h-6" 
                  alt="Next slide" 
                  src="/GROP-11.png" 
                />
              </Button>
            </div>
          </div>

          <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
            {photos.map((photo, index) => (
              <Card key={index} className="border-none shadow-none">
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
      ))}
    </div>
  );
};