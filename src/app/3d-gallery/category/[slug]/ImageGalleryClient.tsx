'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface ImageGalleryClientProps {
  images: { src: string; alt: string }[];
}

export default function ImageGalleryClient({ images }: ImageGalleryClientProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((selectedIndex + 1) % images.length);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-pointer group"
            onClick={() => openLightbox(idx)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox modal - rendered via portal to body */}
      {mounted && selectedIndex !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            aria-label="Закрыть"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10"
                aria-label="Предыдущее"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10"
                aria-label="Следующее"
              >
                ›
              </button>
            </>
          )}

          <div className="relative w-full h-full max-w-5xl max-h-[80vh] m-4">
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-4 text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}