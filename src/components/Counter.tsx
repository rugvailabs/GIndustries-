'use client';

import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  to: number;
  suffix?: string;
  noGroup?: boolean;
};

export default function Counter({ to, suffix = '', noGroup = false }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync of a browser-only preference after mount; intentional, not a cascading-render loop
      setValue(to);
      return;
    }
    const animate = () => {
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(to * eased));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  const formatted = noGroup ? String(value) : value.toLocaleString('en-IN');

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
