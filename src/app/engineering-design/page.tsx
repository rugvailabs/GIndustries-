import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconCube, IconWave, IconStructural } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { ENGINEERING_DESIGN_DEFAULTS } from '@/content/pages/engineering-design';

export const metadata: Metadata = pageMetadata({
  title: 'Engineering & Design',
  description:
    'Advanced CAD modeling, finite element analysis and structural simulation — how G Industries validates every design before a single piece of metal is cut.',
  path: '/engineering-design',
  image: '/images/og/engineering-design.jpg',
  imageAlt: 'Precision-machined stainless steel bracket engineered at G Industries',
});

const CAPABILITY_ICONS = [IconCube, IconWave, IconStructural];

export default async function EngineeringDesignPage() {
  const content = await getPageContent('engineering-design', ENGINEERING_DESIGN_DEFAULTS);
  const { hero, design, simulate, capabilities, gallery, faqs, ctaImage } = content;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }, { label: 'Engineering & Design' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="split-section">
            <div className="split-copy">
              <div className="eyebrow">{design.eyebrow}</div>
              <h2>{design.heading}</h2>
              <p>{design.para1}</p>
              <p>{design.para2}</p>
            </div>
            <div className="split-media">
              <Image src={design.image.src} alt={design.image.alt} width={1800} height={2400} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>{design.caption}</figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="split-section reverse">
            <div className="split-copy">
              <div className="eyebrow">{simulate.eyebrow}</div>
              <h2>{simulate.heading}</h2>
              <p>{simulate.para1}</p>
              <p>{simulate.para2}</p>
            </div>
            <div className="split-media">
              <Image src={simulate.image.src} alt={simulate.image.alt} width={1800} height={2400} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>{simulate.caption}</figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{capabilities.eyebrow}</div>
            <h2>{capabilities.heading}</h2>
            <p>{capabilities.intro}</p>
          </Reveal>
          <div className="capability-grid reveal-group">
            {capabilities.items.map((item, i) => {
              const Icon = CAPABILITY_ICONS[i] ?? CAPABILITY_ICONS[CAPABILITY_ICONS.length - 1];
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

      <section className="section-pad precision-strip">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="eyebrow on-dark">{gallery.eyebrow}</div>
            <h2>{gallery.heading}</h2>
          </Reveal>
          <Reveal className="gallery-grid">
            {gallery.images.map((g, i) => (
              <figure key={i}><div className="gallery-media"><Image src={g.image.src} alt={g.image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div></figure>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="Engineering & design, answered" />

      <ContactCta image={ctaImage.src} />
    </>
  );
}
