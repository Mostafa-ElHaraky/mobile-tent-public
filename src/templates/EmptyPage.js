'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export default function EmptyPage({ data }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // If you still need the HEADER_HEIGHT constant, you can define it here
  const HEADER_HEIGHT = -800; // adjust as needed

  return (
    <>
      {/* ===== DESKTOP VERSION (>= lg) ===== */}
      <div className="hidden lg:block">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Header positioned 1080px from top */}
          <div className="relative top-[1080px] w-full max-w-[1440px] mx-auto z-40">
            <Header />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full bg-[#e8eef8]">
            {/* Background Gradient */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent h-[calc(100%-200px)]" />

            {/* Desktop Content */}
            <div
              className="relative z-10 max-w-[1440px] mx-auto px-4"
              style={{ marginTop: `calc(1080px + ${HEADER_HEIGHT}px)` }}
            >
              {/* Render the HTML content from CMS */}
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* ===== MOBILE VERSION (< lg) ===== */}
      <div className="block lg:hidden">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Mobile Header with hide/show */}
          <div
            className={`
              fixed top-0 left-0 right-0 z-40
              bg-white shadow-lg border-b border-gray-200
              transition-transform duration-300 ease-in-out
              ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
          >
            <Header />
          </div>

          {/* Spacer for fixed header */}
          <div
            className={`
              transition-all duration-300
              ${isHeaderVisible ? 'h-20' : 'h-0'}
            `}
          ></div>

          {/* Main Content Area */}
          <div className="flex-1 w-full bg-[#e8eef8] relative">
            {/* Background Gradient */}
            <div
              className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent"
              style={{ height: 'calc(100% - 200px)' }}
            />

            {/* Mobile Content */}
            <div className="relative z-10 px-4 pt-56 pb-8">
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-20 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}