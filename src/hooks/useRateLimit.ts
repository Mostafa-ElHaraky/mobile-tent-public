// hooks/useRateLimit.ts
import { useRef } from 'react';

export const useRateLimit = (limit: number, windowMs: number) => {
  const attempts = useRef<number[]>([]);
  
  const isAllowed = (): boolean => {
    const now = Date.now();
    attempts.current = attempts.current.filter(time => now - time < windowMs);
    
    if (attempts.current.length < limit) {
      attempts.current.push(now);
      return true;
    }
    return false;
  };
  
  return { isAllowed };
};