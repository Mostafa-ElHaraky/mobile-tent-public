'use client';

import { Footer } from '../../components/ui/Footer';
import { Header } from '../../components/ui/Header';
import HangarCalculator from './HangarCalculator/HangarCalculator';
import Image from 'next/image';

export default function Page() {
  return (
    <>
        <h1 className="sr-only">
            Калькулятор стоимости ангара
        </h1>
      {/* ===== DESKTOP VERSION (>= lg) ===== */}
      <div className="hidden desktop:block">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Header positioned 1080px from top but scrolls normally */}
          <div className="relative top-[1080px] w-full max-w-[1440px] mx-auto z-40">
            <Header />
          </div>

          {/* Image above Hangar Calculator */}
          <div className="relative z-10 mt-[135px] flex justify-center">
            <div className="w-full max-w-[1440px] mx-auto px-4">
              <Image
                src="/calcangar.webp"
                alt="Калькулятор ангара"
                width={1200}
                height={400}
                className="w-full h-auto relative top-[75px] object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Hangar Calculator - Using margin instead of top */}
          <div className="relative bottom-[50px] z-10">
            <HangarCalculator />
          </div>

          <div className="flex-1 w-full bg-[#e8eef8] relative">
            {/* Background Gradient - LIMITED to content area only */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent" 
                 style={{ height: 'calc(100vh - 200px)' }} />
          </div>

          {/* Footer - Will be pushed down by content */}
          <div className="relative z-20 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* ===== MOBILE VERSION (< lg) ===== */}
      <div className="block desktop:hidden">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Mobile Header - Fixed at top */}
          <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200">
            <Header />
          </div>
          {/* Spacer for fixed mobile header */}
          <div className="h-60"></div>
          
          {/* Image above Hangar Calculator - Mobile version */}
          <div className="relative z-10 mt-25 flex justify-center px-4">
            <div className="w-full">
              <Image
                src="/calcangar.webp"
                alt="Калькулятор ангара"
                width={800}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-sm"
                priority
              />
            </div>
          </div>
          
          {/* Hangar Calculator */}
          <div className="relative z-10 mt-6">
            <HangarCalculator />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full bg-[#e8eef8] relative">
            {/* Background Gradient - LIMITED to content area only */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent" 
                 style={{ height: 'calc(100vh - 150px)' }} />
          </div>
          
          {/* Footer - Increased z-index to be above gradient */}
          <div className="relative z-20 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}