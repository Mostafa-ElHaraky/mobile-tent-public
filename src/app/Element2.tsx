'use client';

import { ReactElement } from 'react';
import Image from 'next/image';
import { Promotion } from "../components/ui/promotion";
import { FeatureCards } from "../components/ui/feature_cards";
import { ProcessSteps } from "../components/ui/process_steps";

export const Element2 = (): ReactElement => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden desktop:block">
        <main className="relative w-full max-w-[1440px] min-h-[1400px] bg-white mx-auto overflow-x-hidden pb-16">
          
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

      {/* Mobile/Tablet Version */}
      <div className="block desktop:hidden px-4 md:px-12 py-12">
        <main className="relative w-full bg-white mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-16 md:gap-24">
            <div className="relative w-full overflow-hidden">
              <FeatureCards />
            </div>
            
            <div className="relative w-full overflow-hidden flex justify-center bg-[#f8fafc] md:bg-transparent rounded-3xl p-6 md:p-0">
              <Promotion isMobile={true} />
            </div>
            
            <div className="relative w-full overflow-hidden border-t border-gray-100 pt-12 md:pt-20">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-[#232c42] [font-family:'Raleway',Helvetica]">Как мы работаем</h2>
              </div>
              <ProcessSteps />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};