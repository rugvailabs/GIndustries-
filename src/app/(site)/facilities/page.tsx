import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { FACILITIES_DEFAULTS } from '@/content/pages/facilities';

export const metadata = pageMetadata({
  title: 'Infrastructure & Facilities',
  description:
    'A continuously modernized facility in Hyderabad — Unit 1 fabrication and Unit 2 BESS container manufacturing, with 40,000 sft available for expansion.',
  path: '/facilities',
  image: '/images/og/facilities.jpg',
  imageAlt: 'Wide view of the G Industries fabrication shop floor aisle with material handling area',
});

export default async function FacilitiesPage() {
  const content = await getPageContent('facilities', FACILITIES_DEFAULTS);
  const { hero, stats, expansionNote, registered, layoutImages, layoutCaption, utilities, faqs, ctaImage } = content;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Facilities' }]}
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="facility-stats">
            {stats.map((s, i) => (
              <div className="facility-stat" key={i}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '72ch' }}>{expansionNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container with-sidebar">
          <Reveal>
            <div className="eyebrow">{registered.eyebrow}</div>
            <h2>{registered.heading}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem', marginBottom: 'var(--space-3)' }}>{registered.para1}</p>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem' }}>{registered.para2}</p>
          </Reveal>
          <Reveal>
            <div className="sidebar-card">
              <h4>At a Glance</h4>
              {registered.sidebarStats.map((s, i) => (
                <div className="sidebar-stat" key={i}>
                  <span className="label">{s.label}</span>
                  <span className="value">{s.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">On Site</div>
            <h2>Registered plant layout</h2>
            <p>The facility&apos;s official layout plan and key operational areas.</p>
          </Reveal>
          <Reveal className="facility-gallery">
            <figure>
              <Image src={layoutImages[0].image.src} alt={layoutImages[0].image.alt} width={2400} height={1800} sizes="(max-width: 900px) 100vw, 43vw" />
              <figcaption className="gallery-cap">{layoutCaption}</figcaption>
            </figure>
            <div className="stack">
              {layoutImages.slice(1, 3).map((g, i) => (
                <figure key={i}>
                  <Image src={g.image.src} alt={g.image.alt} width={2400} height={1800} sizes="(max-width: 900px) 50vw, 28vw" />
                </figure>
              ))}
            </div>
            <div className="stack">
              {layoutImages.slice(3, 5).map((g, i) => (
                <figure key={i}>
                  <Image src={g.image.src} alt={g.image.alt} width={2400} height={1800} sizes="(max-width: 900px) 50vw, 28vw" />
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Utilities &amp; Shop Infrastructure</div>
            <h2>Supporting systems behind every delivery</h2>
            <p>Compressed air, material handling, and laser cutting run alongside the full <Link href="/machinery">machinery and equipment list</Link> on the shop floor.</p>
          </Reveal>
          <div className="gallery-grid reveal-group">
            {utilities.map((item, i) => (
              <Reveal key={i} index={i}>
                <figure>
                  <div className="gallery-media">
                    <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                  </div>
                  <figcaption>{item.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="Facilities, answered" />

      <ContactCta image={ctaImage.src} />
    </>
  );
}
