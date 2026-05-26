// src/components/ui/CMSImage.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getImageUrl, cmsImageLoader } from '@/utils/images';

interface CMSImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  [key: string]: any;
}

export default function CMSImage({ 
  src, 
  alt, 
  width, 
  height, 
  fill = false, 
  className = '',
  priority = false,
  ...props 
}: CMSImageProps) {
  const [imgSrc, setImgSrc] = useState(getImageUrl(src));
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
      setImgSrc('/fallback.webp');
    }
  };

  if (!src) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{ width, height }}>
        <span className="text-gray-400 text-sm">No image</span>
      </div>
    );
  }

  const imageProps = fill ? { fill } : { width, height };

  return (
    <Image
      {...imageProps}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loader={cmsImageLoader}
      priority={priority}
      {...props}
    />
  );
}