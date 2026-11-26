import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconSpark, IconDroplet, IconMagnifierCheck } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { MANUFACTURING_FABRICATION_DEFAULTS } from '@/content/pages/manufacturing-fabrication';

export const metadata: Metadata = pageMetadata({
  title: 'Manufacturing & Fabrication',
  description:
    'Turnkey heavy fabrication and post-processing in Hyderabad — structural fabrication, surface treatments, and rigorous QC testing under one roof.',
  path: '/manufacturing-fabrication',
  image: '/quality-images/Products2.png',
  imageAlt: 'Batch of finished precision stainless steel components ready for dispatch on the G Industries shop floor',
});

const PROCESS_ICONS = [IconSpark, IconDroplet, IconMagnifierCheck];

export default async function ManufacturingFabricationPage() {
  const content = await getPageContent('manufacturing-fabrication', MANUFACTURING_FABRICATION_DEFAULTS);
  const { hero, process, split, shopGallery, quote, quoteCite, faqs, ctaImage } = content;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }, { label: 'Manufacturing & Fabrication' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{process.eyebrow}</div>
            <h2>{process.heading}</h2>
            <p>{process.intro}</p>
          </Reveal>

          <div className="capability-grid reveal-group">
            {process.items.map((item, i) => {
              const Icon = PROCESS_ICONS[i] ?? PROCESS_ICONS[PROCESS_ICONS.length - 1];
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

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="split-section">
            <div className="split-media">
              <Image src={split.image.src} alt={split.image.alt} width={2400} height={1800} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>{split.caption}</figcaption>
            </div>
            <div className="split-copy">
              <div className="eyebrow">{split.eyebrow}</div>
              <h2>{split.heading}</h2>
              <p>{split.para1}</p>
              <p>{split.para2}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">On The Shop Floor</div>
            <h2>Fabrication, in production</h2>
          </Reveal>
          <Reveal className="gallery-grid gallery-pair">
            {shopGallery.map((g, i) => (
              <figure key={i}><div className="gallery-media"><Image src={g.image.src} alt={g.image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div></figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <blockquote className="quality-quote">
              &ldquo;{quote}&rdquo;
              <cite>{quoteCite}</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="Manufacturing & fabrication, answered" />

      <ContactCta image={ctaImage.src} />
    </>
  );
}
