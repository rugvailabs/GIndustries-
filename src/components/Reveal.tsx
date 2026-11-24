'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index within a reveal-group — adds a matching transition delay. */
  index?: number;
  style?: CSSProperties;
};

export default function Reveal({ children, className = '', index, style }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync of a browser-only preference after mount; intentional, not a cascading-render loop
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayStyle = typeof index === 'number' ? { transitionDelay: `${Math.min(index, 5) * 90}ms` } : undefined;
  const mergedStyle = style || delayStyle ? { ...style, ...delayStyle } : undefined;

  return (
    <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`} style={mergedStyle}>
      {children}
    </div>
  );
}
