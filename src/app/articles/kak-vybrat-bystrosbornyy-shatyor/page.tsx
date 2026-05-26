import { MainOurProjects1 } from "./sections/MainOurProjects1/MainOurProjects1";
import { MainOurProjects3 } from "./sections/MainOurProjects3/MainOurProjects3";
import { MainOurProjects4 } from "./sections/MainOurProjects4/MainOurProjects4";
import FilterTent from "../../../components/ui/FilterTent";
import { Footer } from "../../../components/ui/Footer";
import AnimatedSection from "../../../components/ui/AnimatedSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как выбрать быстросборный шатёр | Mobile Tent",
  description: "Руководство по выбору быстросборного шатра от MobileTent. Основные критерии выбора: скорость сборки, надежность конструкции, качество материалов. Производство каркасно-тентовых конструкций разного назначения.",
  openGraph: {
    title: "Как выбрать быстросборный шатёр | Mobile Tent",
    description: "Руководство по выбору быстросборного шатра от MobileTent. Основные критерии выбора: скорость сборки, надежность конструкции, качество материалов.",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 - Main Projects */}
      <AnimatedSection>
        <MainOurProjects1 />
      </AnimatedSection>

      {/* Section 2 - Projects Gallery */}
      <AnimatedSection delay={0.1}>   
        <MainOurProjects3 />
      </AnimatedSection>

      {/* Section 3 - Filter Section */}
      <AnimatedSection delay={0.1}>
        <section className="w-full max-w-[1440px] mx-auto px-12 py-16 min-h-[600px]">
          <FilterTent />
        </section>        
      </AnimatedSection>

      {/* Section 4 - Additional Projects */}
      <AnimatedSection delay={0.1}>
        <MainOurProjects4 />
      </AnimatedSection>
                          
      {/* Footer */}
      <AnimatedSection delay={0.1}>
        <div className="mt-16">
          <Footer />
        </div>
      </AnimatedSection>
    </div>
  );
}