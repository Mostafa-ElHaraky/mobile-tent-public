import { OurProjects1 } from "./sections/OurProjects1/OurProjects1";
import { Footer } from "../../components/ui/Footer";
import Header from '../../components/ui/Header';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Готовые проекты компании - Москва, Mobile Tent",
  description:
    "Здесь Вы можете ознакомится с готовыми проектами компании «Мобайл Тент». Продажа, доставка и монтаж шатров по всей России по доступным ценам",
  openGraph: {
    title: "Готовые проекты компании - Москва, Mobile Tent",
    description:
      "Здесь Вы можете ознакомится с готовыми проектами компании «Мобайл Тент». Продажа, доставка и монтаж шатров по всей России по доступным ценам",
  },
};

export default function OurProjectsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Header centered + capped to 1440 */}
      <div className="w-full">
        <div className="z-50 mx-auto w-full max-w-[1440px] px-4 lg:px-6 relative">
          <Header />
        </div>
      </div>

      {/* Main content */}
      <OurProjects1 />

      {/* Footer centered + capped */}
      <div className="w-full">
        <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
