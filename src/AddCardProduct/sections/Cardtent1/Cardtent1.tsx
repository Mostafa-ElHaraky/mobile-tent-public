'use client';

import { useRef, useEffect } from "react";
import { ReactElement } from 'react';
import { PricingSection } from "./sections/PricingSection";
import Header from '@/components/ui/Header';
import Link from 'next/link';

// Import types from page.tsx
interface ProductSpecs {
  productCode: string;
  size: string;
  area: number;
  shape: "Прямоугольник" | "Квадрат";
  images: string[];
  url3d: string;
  capacity: string;
  width: number;
  length: number;
  archHeight: number;
  ridgeHeight: number;
  inStock: "Да" | "Под заказ";
}

interface PriceConfiguration {
  name: string;
  isActive: boolean;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  description: string;
}

interface ContactInfo {
  phone1: string;
  phone2: string;
  email: string;
  telegram: string;
  whatsapp: string;
  office: {
    name: string;
    address: string;
    map_url: string;
    hours: string;
    appointment: string;
  };
  production: {
    name: string;
    address: string;
    map_url: string;
    hours: string;
    appointment: string;
  };
}

// Add ThreeDConfig interface
interface ThreeDConfig {
  enabled: boolean;
  basePath?: string;
  totalFrames?: number;
  frameRate?: number;
}

interface Cardtent1Props {
  seoH1?: string;
  pageName?: string;
  specs?: ProductSpecs;
  priceConfigurations?: PriceConfiguration[];
  contacts?: ContactInfo;
  imagePaths?: string[];
  mainImagePath?: string;
  threed?: ThreeDConfig;
  breadcrumbTitle?: string;  // Category title
  breadcrumbSlug?: string;   // Category slug (dynamic)
}

export const Cardtent1 = ({ 
  seoH1, 
  pageName, 
  specs,
  priceConfigurations,
  contacts,
  imagePaths,
  mainImagePath,
  threed,
  breadcrumbTitle,
  breadcrumbSlug
}: Cardtent1Props): ReactElement => {
  const catalogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // Handle click outside if needed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Breadcrumb display values - all dynamic
  const displayBreadcrumbTitle = breadcrumbTitle || pageName?.split(' ').slice(0, 2).join(' ') || "Товар";
  const displayBreadcrumbSlug = breadcrumbSlug || "arochnye"; // Default to arochnye if not provided

  return (
    <main className="relative w-full bg-white mx-auto">
      {/* ========== Desktop Version ========== */}
      <div className="hidden md:block">
        <section className="relative w-full">
          <div className="absolute inset-0 z-0 h-[1669px]">
            <div className="w-full h-full [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />
          </div>

          {/* Breadcrumbs - Desktop */}
          <div className="relative top-[215px] z-20 max-w-[1440px] mx-auto px-12">
            <nav className="flex items-center gap-2 text-sm text-gray-600 [font-family:'Raleway',Helvetica]">
              <Link href="/" className="hover:text-[#335dc2] transition-colors">
                Главная
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#335dc2] font-medium">
                {pageName || "Товар"}
              </span>
            </nav>
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto rounded-b-[30px]">
            <div className="relative h-[1669px]">
              <div className="relative w-full h-[1275px] top-[-194px]">
                <PricingSection 
                  pageName={pageName}
                  priceConfigurations={priceConfigurations}
                  contacts={contacts}
                  specs={specs}
                  imagePaths={imagePaths}
                  mainImagePath={mainImagePath}
                  threed={threed}
                  images={specs?.images}
                />
                <div className="absolute w-[1440px] h-[689px] top-[586px] left-0 rounded-b-[20px] overflow-hidden" />
              </div>

              <div className="relative bottom-[215px]">
                <Header />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========== Mobile Version ========== */}
      <div className="md:hidden w-full bg-white">
        <div className="relative">
          <div className="w-full bg-white py-4 px-4 shadow-sm">
            <Header />
          </div>

          <section className="flex flex-col gap-10 py-6 px-4 w-full max-w-full mx-0 box-border bg-[#f8fafc] min-h-screen">
            <PricingSection 
              pageName={pageName}
              priceConfigurations={priceConfigurations}
              contacts={contacts}
              specs={specs}
              imagePaths={imagePaths}
              mainImagePath={mainImagePath}
              threed={threed}
              images={specs?.images}
            />
          </section>
        </div>
      </div>
    </main>
  );
};