import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';
import Accordion from '@/components/Accordion';

export type FAQItem = {
  q: string;
  a: ReactNode;
  /** Plain-text answer for FAQPage JSON-LD — required only when `a` isn't a plain string (e.g. contains a link). */
  aText?: string;
};

type FAQSectionProps = {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  surface?: boolean;
};

/**
 * Renders an FAQ accordion plus matching FAQPage JSON-LD so the same
 * question/answer pairs that visitors read are also eligible for
 * search-engine rich results. Keep items factual — this schema is
 * machine-read by Google as well as humans.
 */
export default function FAQSection({
  items,
  eyebrow = 'Frequently Asked Questions',
  title = 'Common questions',
  intro,
  surface = false,
}: FAQSectionProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.aText ?? (typeof item.a === 'string' ? item.a : ''),
      },
    })),
  };

  return (
    <section className="section-pad" style={surface ? { background: 'var(--surface)' } : undefined}>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </Reveal>
        <Reveal>
          <Accordion items={items} />
        </Reveal>
      </div>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
