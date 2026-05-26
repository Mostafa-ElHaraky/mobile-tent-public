'use client';

import { ReactElement } from 'react';
import Image from 'next/image';
import { Promotion } from "../../../../components/ui/promotion";
import { FeatureCards } from "../../../../components/ui/feature_cards";
import { ProcessSteps } from "../../../../components/ui/process_steps";

export const Shatry2 = (): ReactElement => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block">
        <main className="relative w-full max-w-[1440px] min-h-[1400px] bottom-[70px] bg-white mx-auto overflow-x-hidden pb-16">
          
          {/* Background decoration */}
          <div className="absolute left-[766px] top-0 w-[661px] h-[851px] pointer-events-none z-0">
            <Image
              className="w-full h-full blur-[35px] object-cover"
              alt="Blue water splashing"
              src="/blue-water-splashing-alone--9-------1-3.webp"
              width={661}
              height={851}
              loading="lazy"
            />
          </div>
          <div className="relative w-full max-w-[1440px] mx-auto flex flex-col gap-12 z-10">
            <FeatureCards /> 
              <Promotion /> 
          <div className="mt-[500px]"> 
            <ProcessSteps />  
          </div>    
          </div>
        </main>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden p-4">
        <main className="relative w-full bg-white mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-full overflow-hidden">
              <FeatureCards />
            </div>
            <div className="relative w-full overflow-hidden">
              <Promotion isMobile={true} />
            </div>
            <div className="relative w-full overflow-hidden">
              <ProcessSteps />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};