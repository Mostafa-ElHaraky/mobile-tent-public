import { Shatry1 } from "./sections/Shatry1/Shatry1";
import { Shatry2 } from "./sections/Shatry2/Shatry2";
import { Shatry3 } from "./sections/Shatry3/Shatry3";
import { Shatry4 } from "./sections/Shatry4/Shatry4";
import { Shatry5 } from "./sections/Shatry5/Shatry5";
import { Shatry6 } from "./sections/Shatry6/Shatry6";
import { Shatry7 } from "./sections/Shatry7/Shatry7";
import { Shatry8 } from "./sections/Shatry8/Shatry8";
import { Footer } from "../../../../components/ui/Footer";
import type { Metadata } from "next";
import AnimatedSection from "../../../../components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Шатер Пагода 25 м² купить недорого с гарантией качества в MOBILE TENT",
  description: "Предлагаем шатры Пагода размером 25 м². Высококачественные материалы, индивидуальный подход, услуги по установке и обслуживанию. Гибкие условия сотрудничества для вашего удобства.",
  // Optional: Add Open Graph tags
  openGraph: {
  title: "Шатер Пагода 25 м² купить недорого с гарантией качества в MOBILE TENT",
  description: "Предлагаем шатры Пагода размером 25 м². Высококачественные материалы, индивидуальный подход, услуги по установке и обслуживанию. Гибкие условия сотрудничества для вашего удобства.",
  },
};

export default function ShatryPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

<AnimatedSection delay={0.2}>
      <Shatry1 />
</AnimatedSection>

<AnimatedSection delay={0.2}>
      <Shatry3 />
</AnimatedSection>

<AnimatedSection delay={0.2}>
      <Shatry2 />
</AnimatedSection>
      
<AnimatedSection delay={0.2}>
      <Shatry4 />
</AnimatedSection>
      
<AnimatedSection delay={0.2}>
      <Shatry5 />
</AnimatedSection>
      
<AnimatedSection delay={0.2}>
      <Shatry6 />
</AnimatedSection>

<AnimatedSection delay={0.2}>
      <Shatry7 />
</AnimatedSection>

<AnimatedSection delay={0.2}>
      <Shatry8 />      
</AnimatedSection>

      <Footer />

    </div>
  );
};