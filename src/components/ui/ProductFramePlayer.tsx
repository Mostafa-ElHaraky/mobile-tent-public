'use client';

import React, { useEffect, useRef } from 'react';

type Sequence = {
  basePath: string;      // e.g. "/HEXA_walls/HEXA_walls_Interactive-LightMix"
  totalFrames: number;   // e.g. 180
  frameRate: number;     // e.g. 24
};

export type ProductFramePlayerProps = {
  sequences: Sequence[];
  className?: string;
};

export default function ProductFramePlayer({
  sequences,
  className = '',
}: ProductFramePlayerProps) {
  const seq = sequences[0];
  const { basePath, totalFrames, frameRate } = seq;

  const imgRef = useRef<HTMLImageElement | null>(null);
  const nextImgRef = useRef<HTMLImageElement | null>(null);
  const frameRef = useRef(1);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const frameIntervalMs = 1000 / Math.max(1, frameRate);

  const getSrc = (i: number) => `${basePath}${String(i).padStart(4, '0')}.webp`;

  const preload = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const im = new Image();
      im.src = src;
      im.onload = async () => {
        try {
          if ('decode' in im && typeof (im as any).decode === 'function') {
            await (im as any).decode();
          }
        } catch {
          // ignore decode errors
        }
        resolve(im);
      };
      im.onerror = reject;
    });

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (!imgRef.current) return;
      imgRef.current.src = getSrc(frameRef.current); // show first immediately
      try {
        const nextIndex = frameRef.current + 1 > totalFrames ? 1 : frameRef.current + 1;
        nextImgRef.current = await preload(getSrc(nextIndex));
      } catch {
        nextImgRef.current = null;
      }
      start();
    };

    const tick = async (t: number) => {
      if (!mounted) return;
      if (!lastTimeRef.current) lastTimeRef.current = t;

      const elapsed = t - lastTimeRef.current;
      if (elapsed >= frameIntervalMs) {
        if (nextImgRef.current && imgRef.current) {
          imgRef.current.src = nextImgRef.current.src;
          const cur = parseInt(nextImgRef.current.src.match(/(\d{4})\.webp$/)?.[1] || '1', 10);
          frameRef.current = cur;

          const following = frameRef.current + 1 > totalFrames ? 1 : frameRef.current + 1;
          preload(getSrc(following))
            .then((im) => { nextImgRef.current = im; })
            .catch(() => { nextImgRef.current = null; });
        }
        lastTimeRef.current = t;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    init();
    return () => { mounted = false; stop(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePath, totalFrames, frameRate]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <img
        ref={imgRef}
        alt="3D frame"
        className="
          absolute inset-0 w-full h-full top-25 object-contain
          will-change-transform
          [transform:translateZ(0)]
          [backface-visibility:hidden]
        "
        decoding="async"
        
      />
    </div>
  );
}
