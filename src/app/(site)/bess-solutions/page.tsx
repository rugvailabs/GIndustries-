import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconStructural, IconShieldCheck, IconDroplet } from '@/components/icons';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { BESS_SOLUTIONS_DEFAULTS } from '@/content/pages/bess-solutions';

export const metadata: Metadata = pageMetadata({
  title: 'BESS Container Manufacturer — Battery Storage Solutions',
  description:
    'BESS container manufacturer in Hyderabad — 10-ft and 20-ft enclosures engineered for thermal management, structural integrity and operational safety.',
  path: '/bess-solutions',
  image: '/images/og/bess-solutions.jpg',
  imageAlt: 'Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit',
});

const BESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'BESS Container Manufacturing',
  name: 'BESS Container Manufacturing',
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  areaServed: 'IN',
  description:
    'Custom-engineered BESS (Battery Energy Storage System) containers — 10-ft and 20-ft enclosures engineered for thermal management, structural integrity, and operational safety.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'BESS Container Configurations',
    itemListElement: [
      { '@type': 'Offer', position: 1, itemOffered: { '@type': 'Product', name: 'Compact BESS Container (10 ft)', description: 'Compact, high-performance energy storage enclosure for smaller deployments.' } },
      { '@type': 'Offer', position: 2, itemOffered: { '@type': 'Product', name: 'Full-Scale BESS Container (20 ft)', description: 'Full-scale industrial BESS infrastructure enclosure for large energy-storage deployments.' } },
    ],
  },
};

const FOCUS_ICONS = [IconStructural, IconDroplet, IconShieldCheck];

export default async function BessSolutionsPage() {
  const content = await getPageContent('bess-solutions', BESS_SOLUTIONS_DEFAULTS);
  const { hero, image1, caption1, image2, caption2, eyebrow, heading, copy, specs, focus, trackRecord, expansion, faqs, ctaImage } = content;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BESS_JSON_LD) }} />
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }, { label: 'BESS Solutions' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container bess-grid">
          <Reveal className="bess-media">
            <figure>
              <Image src={image1.src} alt={image1.alt} width={1448} height={1086} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>{caption1}</figcaption>
            </figure>
            <figure>
              <Image src={image2.src} alt={image2.alt} width={1448} height={1086} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>{caption2}</figcaption>
            </figure>
          </Reveal>
          <Reveal className="bess-copy">
            <div className="eyebrow">{eyebrow}</div>
            <h2>{heading}</h2>
            <p>{copy}</p>
            <div className="bess-specs">
              {specs.map((spec, i) => (
                <div className="bess-spec" key={i}>
                  <div className="tag">{spec.tag}</div>
                  <div>
                    <h4>{spec.title}</h4>
                    <p>{spec.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{focus.eyebrow}</div>
            <h2>{focus.heading}</h2>
          </Reveal>
          <div className="capability-grid reveal-group">
            {focus.items.map((item, i) => {
              const Icon = FOCUS_ICONS[i] ?? FOCUS_ICONS[FOCUS_ICONS.length - 1];
              return (
                <Reveal key={i} className="capability-card" index={i}>
                  <div className="icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Recent Track Record</div>
            <h2>Delivered: BESS Containers for {trackRecord.client}</h2>
          </Reveal>
          <Reveal className="project-list">
            <div className="project-row">
              <div className="pnum">01</div>
              <div>
                <div className="client">{trackRecord.client}</div>
                <h3>{trackRecord.title}</h3>
              </div>
              <p className="desc">{trackRecord.desc}</p>
              <figure>
                <div className="figure-media">
                  <Image src={trackRecord.image.src} alt={trackRecord.image.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
                </div>
                <figcaption>{trackRecord.caption}</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="facility-stat" style={{ border: '1px solid var(--line)', maxWidth: 420, textAlign: 'left', padding: 'var(--space-4)' }}>
            <div className="stat-num">{expansion.num}</div>
            <div className="stat-label">{expansion.label}</div>
          </Reveal>
          <p style={{ color: 'var(--ink-soft)', marginTop: 'var(--space-3)' }}>{expansion.note}</p>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="BESS containers, answered" />

      <ContactCta image={ctaImage.src} />
    </>
  );
}
