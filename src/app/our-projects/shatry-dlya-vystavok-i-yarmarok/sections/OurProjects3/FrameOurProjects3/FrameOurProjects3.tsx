'use client';

import { Card, CardContent } from "../../../../../../components/ui/card";
import { ReactElement } from 'react';

// Data for reviews to enable mapping
const reviews = [
  {
    text: "Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий",
    author: "Максимова Н.В. генеральный директор",
    images: ["/collect2.webp", "/collect3.webp"],
  },
];

export const FrameOurProjects3 = (): ReactElement => {
  return (
    <>
      {/* ===== Desktop (original — unchanged) ===== */}
      <div className="hidden md:flex flex-col gap-6">
        {reviews.map((review, index) => (
          <Card
            key={index}
            className="w-[1343px] h-[326px] bg-white rounded-[20px] border-0 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
          >
            <CardContent className="p-0">
              <div className="flex items-start gap-6 absolute top-[43px] left-10">
                <div className="relative w-[59px] h-[59px] -rotate-180">
                  <img
                    className="absolute w-11 h-[33px] top-[18px] left-[7px] rotate-180"
                    alt="Quote icon"
                    src={`/reviews1-group-${index + 1}.webp`}
                  />
                </div>
                <div className="flex flex-col gap-9">
                  <p className="w-[570px] font-normal text-lg text-[#4f5d80] leading-6 [font-family:'Raleway',Helvetica]">
                    {review.text}
                  </p>
                  <p className="font-semibold text-lg text-[#4f5d80] leading-6 [font-family:'Raleway',Helvetica]">
                    {review.author}
                  </p>
                </div>
              </div>
              <div className="flex gap-[26px] absolute top-10 left-[785px]">
                {review.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    className="w-[246px] h-[246px] object-cover"
                    alt={`Tent image ${imgIndex + 1}`}
                    src={image}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ===== Mobile (new version) ===== */}
      <div className="block md:hidden w-full px-4 py-6 space-y-6">
        {reviews.map((review, index) => (
          <Card
            key={index}
            className="w-full bg-white rounded-2xl border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
          >
            <CardContent className="p-5 flex flex-col gap-4">
              {/* Quote icon */}
              <div className="flex justify-start">
                <img
                  className="w-8 h-8"
                  alt="Quote icon"
                  src={`/reviews1-group-${index + 1}.webp`}
                />
              </div>

              {/* Text */}
              <p className="text-sm text-[#4f5d80] leading-6 [font-family:'Raleway',Helvetica]">
                {review.text}
              </p>

              {/* Author */}
              <p className="font-semibold text-sm text-[#4f5d80] leading-5 [font-family:'Raleway',Helvetica]">
                {review.author}
              </p>

              {/* Images stacked horizontally and scrollable */}
              <div className="flex gap-3 overflow-x-auto mt-2 pb-2">
                {review.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    className="w-[160px] h-[160px] rounded-xl object-cover flex-shrink-0"
                    alt={`Tent image ${imgIndex + 1}`}
                    src={image}
                    loading="lazy"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
