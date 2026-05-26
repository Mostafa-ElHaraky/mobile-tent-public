'use client';

import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";
import { ReactElement } from 'react';
import Image from 'next/image';
import HitSales from "@/components/ui/HitSales";

export const Element3 = (): ReactElement => {
  return (
    <main className="flex flex-col w-full max-w-[1440px] desktop:h-[3810px] h-auto bg-white mx-auto overflow-hidden">
      <section className="relative desktop:h-[3810px] h-auto rounded-[0px_0px_30px_30px] w-full">
        {/* Section 1 */}
        <section className="w-full">
          <GroupByAnima />
        </section>

        {/* Section 2 */}
        <section className="w-full">
          <HitSales />
        </section>

        {/* Section 3 */}
        <section className="w-full">
          <FrameWrapperByAnima />
        </section>

        {/* Section 4 */}
        <section className="w-full relative">
          {/* Background Image 1 - Responsive */}
          <div className="absolute lg:w-[356px] lg:h-[857px] w-[178px] h-[428px] lg:top-28 top-14 right-0 lg:blur-[35px] blur-[17px] z-0">
  <Image
    fill={true}  // Fills the parent container
    alt="Blue water splashing"
    src="/blue-water-splashing-alone--9-------2.webp"
    quality={80}  // Good for water textures
    loading="lazy"
    className="object-cover" // Maintains aspect ratio
    sizes="100vw" // Responsive to viewport width
  />
          </div>

          <GroupWrapperByAnima />
          <OverlapWrapperByAnima />

          <div className="relative">
            {/* Background Image 2 - Responsive */}
            <div className="absolute w-full lg:h-[488px] h-[244px] bottom-0 left-0 lg:blur-[25px] blur-[12px] z-0">
  <Image
    fill
    src="/blue-water-splashing-alone--9-------2.webp"
    alt="Blue water splashing"
    quality={85}
    loading="lazy"
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 80vw"
    style={{
      objectFit: 'cover',
      objectPosition: 'center'
    }}
  />
            </div>
            <OverlapGroupWrapperByAnima />
          </div>
        </section>
      </section>
    </main>
  );
};