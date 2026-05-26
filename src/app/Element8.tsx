'use client';

import { AboutUsSection } from "./sections/AboutUsSection";
import { ConsultationSection } from "./sections/ConsultationSection/ConsultationSection";
import { HeroSection1 } from "./sections/HeroSection1/HeroSection1";
import { ServicesSection1 } from "./sections/ServicesSection1/ServicesSection1";
import { ReactElement } from 'react';

// Define the contacts interface
interface ContactInfo {
  phone1?: string;
  phone2?: string;
  email?: string;
  telegram?: string;
  whatsapp?: string;
  office?: {
    name?: string;
    address?: string;
    map_url?: string;
    hours?: string;
    appointment?: string;
  };
  production?: {
    name?: string;
    address?: string;
    map_url?: string;
    hours?: string;
    appointment?: string;
  };
}

interface Element8Props {
  contacts?: ContactInfo;
}

export const Element8 = ({ contacts }: Element8Props): ReactElement => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden desktop:flex flex-col items-center w-full bg-white">
        <div className="w-full max-w-[1440px]">
          <HeroSection1 />
          <ServicesSection1 />
          {/* Pass contacts to AboutUsSection */}
          <AboutUsSection contacts={contacts} />
          <ConsultationSection />
        </div>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="flex desktop:hidden flex-col items-center w-full bg-white">
        <div className="w-full max-w-[1440px]">
          <HeroSection1 />
          <ServicesSection1 />
          {/* Pass contacts to AboutUsSection */}
          <AboutUsSection contacts={contacts} />
          <ConsultationSection />
        </div>
      </div>
    </>
  );
};