import { MainOurProjects1 } from "./sections/MainOurProjects1/MainOurProjects1";
import { MainOurProjects3 } from "./sections/MainOurProjects3/MainOurProjects3";
import { MainOurProjects4 } from "./sections/MainOurProjects4/MainOurProjects4";
import FilterTent from "../../../components/ui/FilterTent";
import { Footer } from "../../../components/ui/Footer";
import AnimatedSection from "../../../components/ui/AnimatedSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Многогранные шатры | Mobile Tent",
  description: "Многогранные шатры с плавной формой для устойчивости к ветру. Идеальны для зимних мероприятий, экономичны в обогреве. Производство и аренда многогранных шатров от компании Mobile Tent.",
  keywords: "многогранные шатры, шатры для мероприятий, зимние шатры, навесные конструкции, Mobile Tent",
  openGraph: {
    title: "Многогранные шатры | Mobile Tent",
    description: "Многогранные шатры с плавной формой для устойчивости к ветру. Идеальны для зимних мероприятий, экономичны в обогреве.",
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