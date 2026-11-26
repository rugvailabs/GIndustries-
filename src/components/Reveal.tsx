'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index within a reveal-group — adds a matching transition delay. */
  index?: number;
  style?: CSSProperties;
};

// A single IntersectionObserver shared by every <Reveal> on the page, instead
// of one per instance (a page can easily mount dozens). Each observed element
// carries its own reveal callback in a WeakMap, so this still behaves like an
// independent observer per component from the outside.
let sharedObserver: IntersectionObserver | null = null;
const revealCallbacks = new WeakMap<Element, () => void>();

function getSharedObserver(): IntersectionObserver | null {
  if (sharedObserver) return sharedObserver;
  if (typeof IntersectionObserver === 'undefined') return null;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealCallbacks.get(entry.target)?.();
        sharedObserver?.unobserve(entry.target);
        revealCallbacks.delete(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  return sharedObserver;
}

export default function Reveal({ children, className = '', index, style }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = reduceMotion ? null : getSharedObserver();
    if (!observer) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync of a browser-only preference after mount; intentional, not a cascading-render loop
      setVisible(true);
      return;
    }
    revealCallbacks.set(el, () => setVisible(true));
    observer.observe(el);
    return () => {
      observer.unobserve(el);
      revealCallbacks.delete(el);
    };
  }, []);

  const delayStyle = typeof index === 'number' ? { transitionDelay: `${Math.min(index, 5) * 90}ms` } : undefined;
  const mergedStyle = style || delayStyle ? { ...style, ...delayStyle } : undefined;

  return (
    <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`} style={mergedStyle}>
      {children}
    </div>
  );
}
