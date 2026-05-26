import { Services1 } from "./sections/Services1/Services1";
import { Services3 } from "./sections/Services3/Services3";
import { Services4 } from "./sections/Services4/Services4";
import { Footer } from "../../components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дополнительные услуги компании MOBILE TENT",
  description:
    "Брендирование, декорирование, освещение шатров, тентов и другие дополнительные услуги компании MOBILE TENT.",
  openGraph: {
    title: "Дополнительные услуги компании MOBILE TENT",
    description:
      "Брендирование, декорирование, освещение шатров, тентов и другие дополнительные услуги компании MOBILE TENT.",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content that grows to push footer down */}
      <div className="flex-1 flex flex-col w-full">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Desktop - with extra spacing for Services4 */}
          <div className="hidden md:flex flex-col w-full min-h-screen">
            <div className="flex-1">
              <Services1 />
              <Services3 />
            </div>
            {/* Services4 positioned to push footer down */}
            <div className="relative mt-auto pt-80 pb-32">
              <Services4 />
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden flex-col w-full">
            <Services1 />
            <Services3 />
            <Services4 />
          </div>
        </div>
      </div>

      {/* Footer - will be pushed down by Services4 on desktop */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}