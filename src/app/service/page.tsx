import { Services1 } from "./sections/Services1/Services1";
import { Services2 } from "./sections/Services2/Services2";
import { Services3 } from "./sections/Services3/Services3";
import { Services4 } from "./sections/Services4/Services4";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дополнительные услуги компании MOBILE TENT",
  description: "Брендирование, декорирование, освещение шатров, тентов и другие дополнительные услуги компании MOBILE TENT.",
  // Optional: Add Open Graph tags
  openGraph: {
  title: "Дополнительные услуги компании MOBILE TENT",
  description: "Брендирование, декорирование, освещение шатров, тентов и другие дополнительные услуги компании MOBILE TENT.",
  },
};

export default function ServicePage() {
  return (
    <div className="flex flex-col w-full ">
      
      <Services1 />
      <Services2 />
      <Services3 />
      <Services4 />

      <div className="relative top-[350px] right-[60px]">
      <Footer />
      </div>
      
    </div>
  );
};
