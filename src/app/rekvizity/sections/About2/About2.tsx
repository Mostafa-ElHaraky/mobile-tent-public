'use client';

import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { ReactElement } from 'react';

export const About2 = (): ReactElement => {

  return(
    <main className="w-full min-h-screen bg-white overflow-hidden">
      <div className="flex flex-col w-full">
        <TestimonialsSection />
        <HeroSection />
        <FeaturesSection />
      </div>
    </main>
  );
};
