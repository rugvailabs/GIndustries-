'use client';

import { useState, type ReactNode } from 'react';

type AccordionEntry = { q: ReactNode; a: ReactNode };

export default function Accordion({ items }: { items: AccordionEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={`accordion-item${open ? ' is-open' : ''}`} key={i}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {item.q}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="accordion-panel">
              <div className="accordion-panel-inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
