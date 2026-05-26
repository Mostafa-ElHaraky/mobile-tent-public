'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ContactSection } from "./sections/ContactSection/ContactSection";
import Link from 'next/link';

// Define the types for Bitrix contacts data
interface ContactsData {
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

// Props interface
interface Thank1Props {
  contacts?: ContactsData;
}

export const Thank1 = ({ contacts }: Thank1Props) => {
  const catalogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        // Handle click outside logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-[1440px] min-h-screen mx-auto bg-transparent">
      
      {/* === Fullscreen gradient background (desktop only) === */}
      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-[#e8eef8] to-transparent -z-10 md:block hidden pointer-events-none" />

      {/* === Desktop Version === */}
      <div className="hidden md:block relative z-10">
        {/* Header Section with Background */}
        <section className="relative h-[317px] rounded-[0px_0px_30px_30px] overflow-hidden">
          
          {/* Background Clouds */}
          <Image
            src="/reviews1-08-clouds-2.webp"
            alt="Clouds background"
            width={719}
            height={643}
            className="absolute top-[194px] left-0 object-cover"
            priority
          />

          {/* Foreground Grass */}
          <Image
            src="/reviews1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.webp"
            alt="Grass foreground"
            width={318}
            height={306}
            className="absolute bottom-[295px] left-0 z-10"
          />
        </section>

        {/* Contact Section */}
        <ContactSection contacts={contacts} />

        {/* Breadcrumbs - Positioned absolutely at the top */}
        <div className="absolute top-[200px] left-[50px]">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2.5 p-1 bg-[#4f5d801a] rounded hover:bg-[#4f5d8030] transition-colors"
          >
            <span className="font-raleway text-xs text-[#394355] hover:underline">
              Главная &gt;
            </span>
            <span className="font-raleway font-medium text-xs text-[#394355] underline">
              страница спасибо
            </span>
          </Link>
        </div>
      </div>

      {/* === Mobile Version === */}
      <div className="md:hidden w-full min-h-screen bg-white">
        {/* Header Section بدون Background */}

        {/* Breadcrumbs */}
        <div className="w-full flex justify-start mt-58">
          <div className="relative top-[100px]">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-[#4f5d801a] rounded-lg px-2 py-1 hover:bg-[#4f5d8030] transition-colors"
            >
              <span className="font-raleway text-xs text-[#394355] hover:underline">
                Главная &gt;
              </span>
              <span className="font-raleway font-medium text-xs text-[#394355] underline">
                страница спасибо
              </span>
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-4">
          <ContactSection contacts={contacts} />
        </div>
      </div>

    </div>
  );
};