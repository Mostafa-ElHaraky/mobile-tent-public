import { About1 } from "./sections/About1/About1";
import { About2 } from "./sections/About2/About2";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";
import AnimatedSection from "../../components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Реквизиты компании - Москва, Mobile Tent",
  description: "Здесь приведены реквизиты компании ООО Мобайл Тент, в случае необходимости. Юр. адрес: Московская обл., г. Красногорск, ш. Ильинское, д.1А, пом. 6.1В",
  // Optional: Add Open Graph tags
  openGraph: {
  title: "Реквизиты компании - Москва, Mobile Tent",
  description: "Здесь приведены реквизиты компании ООО Мобайл Тент, в случае необходимости. Юр. адрес: Московская обл., г. Красногорск, ш. Ильинское, д.1А, пом. 6.1В",
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