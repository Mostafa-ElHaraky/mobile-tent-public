'use client';

import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection/ClientTestimonialsSection";
import { CompanyOverviewSection } from "./sections/CompanyOverviewSection";
import { ContactInformationSection } from "./sections/ContactInformationSection/ContactInformationSection";
import { HeroImageSection } from "./sections/HeroImageSection";
import { ServiceFeaturesSection } from "./sections/ServiceFeaturesSection/ServiceFeaturesSection";
import { ReactElement } from 'react';

export const Element7 = (): ReactElement => {
  return (
    <div className="flex justify-center items-center bg-white">
      {/* Desktop Version - REMOVED FIXED HEIGHT */}
      <section className="hidden md:block relative w-full max-w-[1440px] min-h-screen mt-[195px]">
        <div className="flex flex-col gap-16"> {/* Added gap for spacing */}
          <ServiceFeaturesSection />
          <HeroImageSection />
          <CompanyOverviewSection />
          <ClientTestimonialsSection />
          <ContactInformationSection />
        </div>
      </section>

      {/* Mobile Version */}
      <section className="block md:hidden relative w-full h-auto py-10 px-4">
        <div className="flex flex-col gap-8 sm:gap-12">
          <ServiceFeaturesSection />
          <HeroImageSection />
          <CompanyOverviewSection />
          <ClientTestimonialsSection />
          <ContactInformationSection />
        </div>
      </section>
    </div>
  );
};