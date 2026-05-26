'use client';

import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { ReactElement } from 'react';

export const Element4 = (): ReactElement => {
  return (
    <main
      className="
        flex flex-col 
        w-full 
        min-h-screen 
        bg-white 
        mx-auto 
        max-w-[1440px]   /* keep centered on large screens */
      "
    >
<section
  className="
    relative 
    w-full 
    min-h-auto        /* auto height for mobile/tablet */
    desktop:min-h-screen  /* reset to full screen height on desktop */
    desktop:bottom-[80px] 
    rounded-b-[30px]
  "
>
        <HeroSection />
        <CallToActionSection />
        <ServicesSection />
        <TestimonialsSection />
        <FeaturesSection />
      </section>
    </main>
  );
};
