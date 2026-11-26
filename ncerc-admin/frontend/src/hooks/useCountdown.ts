'use client';
import { useEffect, useState } from 'react';

/** Seconds left until an ISO time (0 when it has passed or when there is no time). Ticks once a second. */
export function useCountdown(targetIso?: string | null): number {
  const calc = () => (targetIso ? Math.max(0, Math.ceil((new Date(targetIso).getTime() - Date.now()) / 1000)) : 0);
  const [seconds, setSeconds] = useState(calc);

  useEffect(() => {
    setSeconds(calc());
    if (!targetIso) return;
    const id = setInterval(() => {
      const left = calc();
      setSeconds(left);
      if (left === 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIso]);

  return seconds;
}

export const mmss = (total: number): string => `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
