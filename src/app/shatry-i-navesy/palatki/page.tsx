import { Shatry1 } from "./sections/Shatry1/Shatry1";
import { Shatry2 } from "./sections/Shatry2/Shatry2";
import { Shatry3 } from "./sections/Shatry3/Shatry3";
import { Shatry4 } from "./sections/Shatry4/Shatry4";
import { Shatry5 } from "./sections/Shatry5/Shatry5";
import { Shatry6 } from "./sections/Shatry6/Shatry6";
import { Shatry7 } from "./sections/Shatry7/Shatry7";
import { Shatry8 } from "./sections/Shatry8/Shatry8";
import { Footer } from "../../../components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Быстросборные палатки | Mobile Tent",
  description: "Здесь вы можете приобрести быстросборные палатки, складные шатры и тенты от производителя Мобайл Тент. Доступные цены. Гарантия качества. Доставка по России",
  // Optional: Add Open Graph tags
  openGraph: {
  title: "Быстросборные палатки | Mobile Tent",
  description: "Здесь вы можете приобрести быстросборные палатки, складные шатры и тенты от производителя Мобайл Тент. Доступные цены. Гарантия качества. Доставка по России",
  },
};

export default function ShatryPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      <Shatry1 />

      <Shatry2 />
      
      <Shatry3 />
      
      <Shatry4 />
      
      <Shatry5 />
      
      <Shatry6 />
      
      <Shatry7 />
      
      <Shatry8 />      
     
      <Footer />

    </div>
  );
};