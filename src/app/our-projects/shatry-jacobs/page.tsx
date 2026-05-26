import { OurProjects1 } from "./sections/OurProjects1/OurProjects1";
import { OurProjects2 } from "./sections/OurProjects2/OurProjects2";
import { OurProjects3 } from "./sections/OurProjects3/OurProjects3";
import { OurProjects4 } from "./sections/OurProjects4/OurProjects4";
import { Footer } from "../../../components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Шатры JACOBS - Москва, Mobile Tent",
  description: "Шатры JACOBS - Москва, Mobile Tent",
  // Optional: Add Open Graph tags
  openGraph: {
  title: "Шатры JACOBS - Москва, Mobile Tent",
  description: "Шатры JACOBS - Москва, Mobile Tent",
  },
};

export default function CardOurProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      <OurProjects1 />
      <OurProjects2 />
      <OurProjects3 />
      <OurProjects4 />
      <Footer />

    </div>
  );
};
