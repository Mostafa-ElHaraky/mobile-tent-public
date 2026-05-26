import { MainOurProjects1 } from "./sections/MainOurProjects1/MainOurProjects1";
import { MainOurProjects3 } from "./sections/MainOurProjects3/MainOurProjects3";
import { MainOurProjects4 } from "./sections/MainOurProjects4/MainOurProjects4";
import FilterTent from "../../components/ui/FilterTent";
import { Footer } from "../../components/ui/Footer";
import AnimatedSection from "../../components/ui/AnimatedSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио проектов | Mobile Tent",
  description: "Портфолио реализованных проектов по установке шатров и тентовых конструкций. Примеры работ для мероприятий, корпоративов, выставок и свадеб от компании Mobile Tent.",
  keywords: "портфолио проектов, установка шатров, тентовые конструкции, реализованные проекты, Mobile Tent, наши работы",
  openGraph: {
    title: "Портфолио проектов | Mobile Tent",
    description: "Портфолио реализованных проектов по установке шатров и тентовых конструкций. Примеры работ для мероприятий, корпоративов, выставок и свадеб.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* SINGLE SEO-OPTIMIZED H1 - Placed at the VERY TOP of the entire page */}
      <h1 className="sr-only">Портфолио проектов - реализованные работы по установке шатров и тентовых конструкций от MobileTent</h1>
      
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
    </>
  );
}