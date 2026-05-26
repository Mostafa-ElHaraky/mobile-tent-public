import { MainOurProjects1 } from "./sections/MainOurProjects1/MainOurProjects1";
import { MainOurProjects3 } from "./sections/MainOurProjects3/MainOurProjects3";
import { MainOurProjects4 } from "./sections/MainOurProjects4/MainOurProjects4";
import FilterTent from "../../../components/ui/FilterTent";
import { Footer } from "../../../components/ui/Footer";
import AnimatedSection from "../../../components/ui/AnimatedSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тентовая архитектура | Mobile Tent",
  description: "Тентовая архитектура - быстровозводимые каркасные сооружения с преимуществами: низкая стоимость, мобильность, скорость монтажа. Производство тентовых конструкций от компании Mobile Tent.",
  keywords: "тентовая архитектура, каркасно-тентовые сооружения, тентовые конструкции, быстровозводимые сооружения, Mobile Tent",
  openGraph: {
    title: "Тентовая архитектура | Mobile Tent",
    description: "Тентовая архитектура - быстровозводимые каркасные сооружения с преимуществами: низкая стоимость, мобильность, скорость монтажа.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 - Header with Gradient */}
      <AnimatedSection>
        <MainOurProjects1 />
      </AnimatedSection>

      {/* Section 2 - Projects Content */}
      <AnimatedSection delay={0.1}>   
        <MainOurProjects3 />
      </AnimatedSection>

      {/* Section 3 - Filter Section */}
      <AnimatedSection delay={0.1}>
        <section className="w-full max-w-[1440px] mx-auto px-12 py-20 min-h-[400px]">
          <FilterTent />
        </section>        
      </AnimatedSection>

      {/* Section 4 - Additional Projects */}
      <AnimatedSection delay={0.1}>
        <MainOurProjects4 />
      </AnimatedSection>
                          
      {/* Footer */}
      <AnimatedSection delay={0.1}>
        <div className="mt-20">
          <Footer />
        </div>
      </AnimatedSection>
    </div>
  );
}