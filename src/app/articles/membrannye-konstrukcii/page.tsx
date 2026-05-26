import { MainOurProjects1 } from "./sections/MainOurProjects1/MainOurProjects1";
import { MainOurProjects3 } from "./sections/MainOurProjects3/MainOurProjects3";
import { MainOurProjects4 } from "./sections/MainOurProjects4/MainOurProjects4";
import FilterTent from "../../../components/ui/FilterTent";
import { Footer } from "../../../components/ui/Footer";
import AnimatedSection from "../../../components/ui/AnimatedSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мембранные конструкции | Mobile Tent",
  description: "Мембранные конструкции - сложный вид тентовой архитектуры с уникальными формами: паруса, конусы, воронки, зонты. Производство и установка мембранных конструкций от компании Mobile Tent.",
  keywords: "мембранные конструкции, тентовые конструкции, архитектурные мембраны, натяжные тенты, Mobile Tent",
  openGraph: {
    title: "Мембранные конструкции | Mobile Tent",
    description: "Мембранные конструкции - сложный вид тентовой архитектуры с уникальными формами: паруса, конусы, воронки, зонты. Производство от Mobile Tent.",
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