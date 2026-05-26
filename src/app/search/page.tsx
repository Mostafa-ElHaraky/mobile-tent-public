'use client';

import React, { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { SearchContent } from './SearchContent';
import { Footer } from '../../components/ui/Footer';
import { Header } from '../../components/ui/Header';
import Application from '@/components/ui/Application';
import { SearchErrorBoundary } from '../../components/ui/SearchErrorBoundary';

// Create a wrapper component that handles the async searchParams
function SearchPageContent({ searchQuery }: { searchQuery: string }) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const scrollYRef = useRef<number>(0);
  // Add these states for header visibility
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Optimized header hide/show on scroll logic
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    
    ticking.current = true;
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Don't hide header at the very top of the page
      if (currentScrollY <= 0) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }
      
      // Calculate scroll direction with threshold
      const scrollThreshold = 5; // Minimum pixels to consider as a scroll
      const isScrollingDown = currentScrollY > lastScrollY.current + scrollThreshold;
      const isScrollingUp = currentScrollY < lastScrollY.current - scrollThreshold;
      
      // Show/hide based on scroll direction
      if (isScrollingDown && currentScrollY > 50) {
        // Hide header when scrolling down (except at top)
        setIsHeaderVisible(false);
      } else if (isScrollingUp) {
        // Show header when scrolling up
        setIsHeaderVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
      ticking.current = false;
    });
  }, []);

  // Header hide/show on scroll logic
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Reset header visibility when modal opens/closes
  useEffect(() => {
    if (!isHelpOpen) {
      setIsHeaderVisible(true);
    }
  }, [isHelpOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isHelpOpen) {
        setIsHelpOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isHelpOpen]);

  // ✅ iOS-safe scroll lock & restore (double rAF + overflow hidden)
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const anyOpen = isHelpOpen;

    if (anyOpen) {
      // Save current scroll
      scrollYRef.current = window.scrollY;

      // Prevent layout jump from scrollbar disappearance (desktop)
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Disable smooth scroll temporarily (prevents weird snap-back)
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';

      // Lock page
      body.style.position = 'fixed';
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';     // important for mobile Safari
      body.style.touchAction = 'none';    // prevents overscroll/zoom on iOS

      // Restore previous scroll behavior on cleanup of this branch
      return () => {
        html.style.scrollBehavior = prevScrollBehavior;
      };
    } else {
      const y = scrollYRef.current || 0;

      // Clear styles first
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.touchAction = '';
      body.style.paddingRight = '';

      // Restore scroll on the next frame *twice* (mobile Safari reliability)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
        });
      });
    }
  }, [isHelpOpen]);

  return (
    <>
      {/* ===== DESKTOP VERSION (>= lg) ===== */}
      <div className="hidden desktop:block">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Header positioned 1080px from top but scrolls normally */}
          <div className="relative top-[1080px] w-full max-w-[1440px] mx-auto z-40">
            <Header />
          </div>

          {/* Main Content Area - Starts below header */}
          <div className="flex-1 w-full bg-[#e8eef8]">
            {/* Background Gradient - FIXED: Only covers content area, not footer */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent h-[calc(100%-200px)]" />

            {/* Content Container - Starts at 200px from top of content area */}
<div className="relative top-[200px] z-10 w-full max-w-[1440px] mx-auto pt-4 pb-36">
  <SearchErrorBoundary>
    <Suspense fallback={<SearchSkeleton />}>
      <SearchContent 
        searchQuery={searchQuery} 
        onOpenApplication={() => setIsHelpOpen(true)}
      />
    </Suspense>
  </SearchErrorBoundary>
</div>
          </div>

          {/* Footer - Will be pushed down by content */}
          <div className="relative z-10 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* ===== MOBILE VERSION (< lg) ===== */}
      <div className="block desktop:hidden">
        <div className="min-h-screen flex flex-col bg-white">
          {/* Mobile Header - Fixed at top with hide/show on scroll */}
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

          {/* Spacer for fixed mobile header - dynamic height */}
          <div 
            className={`
              transition-all duration-300 
              ${isHeaderVisible ? 'h-20' : 'h-0'}
            `}
          ></div>

          {/* Main Content Area */}
          <div className="flex-1 w-full bg-[#e8eef8] relative">
            {/* Background Gradient - FIXED: Only covers content area, not footer */}
            <div 
              className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#e8eef8] via-[#e8eef8]/70 to-transparent"
              style={{ height: 'calc(100% - 200px)' }}
            />

            {/* Content Container */}
<div className="relative top-[150px] z-10 w-full max-w-screen-sm mx-auto pt-4 px-4 pb-32">
  <SearchErrorBoundary>
    <Suspense fallback={<SearchSkeletonMobile />}>
      <SearchContent 
        searchQuery={searchQuery} 
        onOpenApplication={() => setIsHelpOpen(true)}
      />
    </Suspense>
  </SearchErrorBoundary>
</div>
          </div>

          {/* Footer - FIXED: Ensure it's above the gradient */}
          <div className="relative z-20 bg-white mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* Global Application Popup - Rendered at page level */}
      {isHelpOpen && (
        <>
          {/* Desktop */}
          <div className="hidden md:block fixed inset-0 z-50">
            <div className="inline-flex flex-col items-start gap-1.5 absolute top-[19px] left-[782px] z-50">
              <Application
                showMobileModal={false}
                onClose={() => setIsHelpOpen(false)}
              />
            </div>
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsHelpOpen(false)}
            />
          </div>

          {/* Mobile */}
          <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <Application
              showMobileModal={true}
              onClose={() => setIsHelpOpen(false)}
            />
          </div>
        </>
      )}
    </>
  );
}

// Main page component - handles the async searchParams
export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  // Use React.use() to unwrap the Promise
  const params = React.use(searchParams);
  const searchQuery = params.q || '';

  return <SearchPageContent searchQuery={searchQuery} />;
}

// Desktop Skeleton (unchanged)
function SearchSkeleton() {
  return (
    <div className="min-h-screen pb-36">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-8">
        
        {/* Search Header Skeleton */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <div className="h-8 bg-gray-300 rounded w-64 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-48 animate-pulse"></div>
            </div>
            
            {/* Search Box Skeleton */}
            <div className="flex gap-2 max-w-md w-full">
              <div className="flex-1 h-12 bg-gray-300 rounded-[50px] animate-pulse"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-[50px] animate-pulse"></div>
            </div>
          </div>

          {/* Filters Skeleton */}
          <div className="hidden lg:flex items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-sm animate-pulse">
            <div className="flex items-center gap-4">
              <div className="h-4 bg-gray-300 rounded w-20"></div>
              <div className="h-10 bg-gray-300 rounded-lg w-40"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-4 bg-gray-300 rounded w-12"></div>
              <div className="flex items-center gap-2">
                <div className="h-10 bg-gray-300 rounded-lg w-24"></div>
                <div className="h-4 bg-gray-300 rounded w-4"></div>
                <div className="h-10 bg-gray-300 rounded-lg w-24"></div>
              </div>
            </div>
          </div>

          {/* Mobile Filters Skeleton */}
          <div className="desktop:hidden flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm animate-pulse">
            <div className="h-10 bg-gray-300 rounded-lg w-32"></div>
            <div className="h-10 bg-gray-300 rounded-lg w-32"></div>
          </div>
        </div>

        {/* Results Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-gray-300 rounded w-20"></div>
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mobile Skeleton
function SearchSkeletonMobile() {
  return (
    <div className="min-h-screen pb-32">
      <div className="w-full max-w-screen-sm mx-auto px-4 pt-4">
        
        {/* Search Header Skeleton */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <div className="h-7 bg-gray-300 rounded w-48 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-36 animate-pulse"></div>
            </div>
            
            {/* Search Box Skeleton */}
            <div className="flex gap-2 w-full">
              <div className="flex-1 h-12 bg-gray-300 rounded-[50px] animate-pulse"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-[50px] animate-pulse"></div>
            </div>
          </div>

          {/* Mobile Filter Toggle Skeleton */}
          <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm animate-pulse">
            <div className="h-10 bg-gray-300 rounded-lg w-32"></div>
            <div className="h-10 bg-gray-300 rounded-lg w-32"></div>
          </div>
        </div>

        {/* Results Grid Skeleton */}
        <div className="grid grid-cols-1 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
              <div className="h-40 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                  <div className="h-6 bg-gray-300 rounded w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}