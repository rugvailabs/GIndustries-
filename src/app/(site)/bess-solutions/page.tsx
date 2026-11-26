import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
import { IconStructural, IconShieldCheck, IconDroplet } from '@/components/icons';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { BESS_SOLUTIONS_DEFAULTS } from '@/content/pages/bess-solutions';

const SLUG = 'bess-solutions';

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

  const faqItems = faqs.map((f, i) => ({
    q: <EditableText slug={SLUG} path={`faqs.${i}.q`}>{f.q}</EditableText>,
    qText: f.q,
    a: <EditableText slug={SLUG} path={`faqs.${i}.a`} multiline>{f.a}</EditableText>,
    aText: f.a,
  }));

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BESS_JSON_LD) }} />
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }, { label: 'BESS Solutions' }]}
        eyebrow={<EditableText slug={SLUG} path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug={SLUG} path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug={SLUG} path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
        editSlug={SLUG}
        imagePath="hero.image"
      />

      <section className="section-pad">
        <div className="container bess-grid">
          <Reveal className="bess-media">
            <figure>
              <EditableImage slug={SLUG} path="image1" src={image1.src} alt={image1.alt} width={1448} height={1086} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption><EditableText slug={SLUG} path="caption1">{caption1}</EditableText></figcaption>
            </figure>
            <figure>
              <EditableImage slug={SLUG} path="image2" src={image2.src} alt={image2.alt} width={1448} height={1086} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption><EditableText slug={SLUG} path="caption2">{caption2}</EditableText></figcaption>
            </figure>
          </Reveal>
          <Reveal className="bess-copy">
            <div className="eyebrow"><EditableText slug={SLUG} path="eyebrow">{eyebrow}</EditableText></div>
            <h2><EditableText slug={SLUG} path="heading">{heading}</EditableText></h2>
            <p><EditableText slug={SLUG} path="copy" multiline>{copy}</EditableText></p>
            <div className="bess-specs">
              {specs.map((spec, i) => (
                <div className="bess-spec" key={i}>
                  <div className="tag"><EditableText slug={SLUG} path={`specs.${i}.tag`}>{spec.tag}</EditableText></div>
                  <div>
                    <h4><EditableText slug={SLUG} path={`specs.${i}.title`}>{spec.title}</EditableText></h4>
                    <p><EditableText slug={SLUG} path={`specs.${i}.copy`} multiline>{spec.copy}</EditableText></p>
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
            <div className="eyebrow"><EditableText slug={SLUG} path="focus.eyebrow">{focus.eyebrow}</EditableText></div>
            <h2><EditableText slug={SLUG} path="focus.heading">{focus.heading}</EditableText></h2>
          </Reveal>
          <div className="capability-grid reveal-group">
            {focus.items.map((item, i) => {
              const Icon = FOCUS_ICONS[i] ?? FOCUS_ICONS[FOCUS_ICONS.length - 1];
              return (
                <Reveal key={i} className="capability-card" index={i}>
                  <div className="icon"><Icon /></div>
                  <h3><EditableText slug={SLUG} path={`focus.items.${i}.title`}>{item.title}</EditableText></h3>
                  <p><EditableText slug={SLUG} path={`focus.items.${i}.copy`} multiline>{item.copy}</EditableText></p>
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
            <h2>Delivered: BESS Containers for <EditableText slug={SLUG} path="trackRecord.client">{trackRecord.client}</EditableText></h2>
          </Reveal>
          <Reveal className="project-list">
            <div className="project-row">
              <div className="pnum">01</div>
              <div>
                <div className="client"><EditableText slug={SLUG} path="trackRecord.client">{trackRecord.client}</EditableText></div>
                <h3><EditableText slug={SLUG} path="trackRecord.title">{trackRecord.title}</EditableText></h3>
              </div>
              <p className="desc"><EditableText slug={SLUG} path="trackRecord.desc" multiline>{trackRecord.desc}</EditableText></p>
              <figure>
                <div className="figure-media">
                  <EditableImage slug={SLUG} path="trackRecord.image" src={trackRecord.image.src} alt={trackRecord.image.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
                </div>
                <figcaption><EditableText slug={SLUG} path="trackRecord.caption">{trackRecord.caption}</EditableText></figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="facility-stat" style={{ border: '1px solid var(--line)', maxWidth: 420, textAlign: 'left', padding: 'var(--space-4)' }}>
            <div className="stat-num"><EditableText slug={SLUG} path="expansion.num">{expansion.num}</EditableText></div>
            <div className="stat-label"><EditableText slug={SLUG} path="expansion.label">{expansion.label}</EditableText></div>
          </Reveal>
          <p style={{ color: 'var(--ink-soft)', marginTop: 'var(--space-3)' }}><EditableText slug={SLUG} path="expansion.note" multiline>{expansion.note}</EditableText></p>
        </div>
      </section>

      <FAQSection items={faqItems} eyebrow="Common Questions" title="BESS containers, answered" />

      <ContactCta image={ctaImage.src} editSlug={SLUG} imagePath="ctaImage" />
    </>
  );
}
