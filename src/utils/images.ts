// src/utils/images.ts
export const CMS_BASE_URL = '';

/**
 * Get full image URL from CMS
 * If the path already has http/https, return as is
 * If it starts with /upload, prepend CMS_BASE_URL
 * Otherwise, return as is (for local images)
 */
export function getImageUrl(path?: string): string {
  if (!path) return '/fallback.webp';

  // If it's already a full URL, return it
  if (path.startsWith('http')) return path;

  // If it's a CMS upload path, prepend CMS base URL
  if (path.startsWith('/upload')) {
    return `${CMS_BASE_URL}${path}`;
  }

  // Otherwise, assume it's a local image
  return path;
}

/**
 * Next.js image loader for external images
 */
export const cmsImageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const url = getImageUrl(src);
  // If it's from CMS, add optimization parameters if supported
  if (url.startsWith(CMS_BASE_URL)) {
    return `${url}?w=${width}&q=${quality || 75}`;
  }
  return url;
};