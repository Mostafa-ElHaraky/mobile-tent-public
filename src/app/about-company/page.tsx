import { About1 } from "./sections/About1/About1";
import { About2 } from "./sections/About2/About2";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";
import AnimatedSection from "../../components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "О компании - Москва, Mobile Tent",
  description: "Компания MOBILE TENT - ведущий производитель шатров, тентов и навесов в Москве, предоставляет услуги аренды и монтажа конструкций, их украшения и дизайна",
  openGraph: {
    title: "О компании - Москва, Mobile Tent",
    description: "Компания MOBILE TENT - ведущий производитель шатров, тентов и навесов в Москве, предоставляет услуги аренды и монтажа конструкций, их украшения и дизайна",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <AnimatedSection>
        <About1 />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <About2 />
      </AnimatedSection>

      {/* Footer stays at the bottom with no extra spacing */}
      <Footer />
    </div>
  );
};