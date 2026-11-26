import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { FACILITIES_DEFAULTS } from '@/content/pages/facilities';

const SLUG = 'facilities';

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

  const faqItems = faqs.map((f, i) => ({
    q: <EditableText slug={SLUG} path={`faqs.${i}.q`}>{f.q}</EditableText>,
    qText: f.q,
    a: <EditableText slug={SLUG} path={`faqs.${i}.a`} multiline>{f.a}</EditableText>,
    aText: f.a,
  }));

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        eyebrow={<EditableText slug={SLUG} path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug={SLUG} path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug={SLUG} path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Facilities' }]}
        editSlug={SLUG}
        imagePath="hero.image"
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="facility-stats">
            {stats.map((s, i) => (
              <div className="facility-stat" key={i}>
                <div className="stat-num"><EditableText slug={SLUG} path={`stats.${i}.num`}>{s.num}</EditableText></div>
                <div className="stat-label"><EditableText slug={SLUG} path={`stats.${i}.label`}>{s.label}</EditableText></div>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '72ch' }}><EditableText slug={SLUG} path="expansionNote" multiline>{expansionNote}</EditableText></p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container with-sidebar">
          <Reveal>
            <div className="eyebrow"><EditableText slug={SLUG} path="registered.eyebrow">{registered.eyebrow}</EditableText></div>
            <h2><EditableText slug={SLUG} path="registered.heading">{registered.heading}</EditableText></h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem', marginBottom: 'var(--space-3)' }}><EditableText slug={SLUG} path="registered.para1" multiline>{registered.para1}</EditableText></p>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem' }}><EditableText slug={SLUG} path="registered.para2" multiline>{registered.para2}</EditableText></p>
          </Reveal>
          <Reveal>
            <div className="sidebar-card">
              <h4>At a Glance</h4>
              {registered.sidebarStats.map((s, i) => (
                <div className="sidebar-stat" key={i}>
                  <span className="label"><EditableText slug={SLUG} path={`registered.sidebarStats.${i}.label`}>{s.label}</EditableText></span>
                  <span className="value"><EditableText slug={SLUG} path={`registered.sidebarStats.${i}.value`}>{s.value}</EditableText></span>
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
              <EditableImage slug={SLUG} path="layoutImages.0.image" src={layoutImages[0].image.src} alt={layoutImages[0].image.alt} width={2400} height={1800} sizes="(max-width: 900px) 100vw, 43vw" />
              <figcaption className="gallery-cap"><EditableText slug={SLUG} path="layoutCaption">{layoutCaption}</EditableText></figcaption>
            </figure>
            <div className="stack">
              {layoutImages.slice(1, 3).map((g, i) => (
                <figure key={i}>
                  <EditableImage slug={SLUG} path={`layoutImages.${i + 1}.image`} src={g.image.src} alt={g.image.alt} width={2400} height={1800} sizes="(max-width: 900px) 50vw, 28vw" />
                </figure>
              ))}
            </div>
            <div className="stack">
              {layoutImages.slice(3, 5).map((g, i) => (
                <figure key={i}>
                  <EditableImage slug={SLUG} path={`layoutImages.${i + 3}.image`} src={g.image.src} alt={g.image.alt} width={2400} height={1800} sizes="(max-width: 900px) 50vw, 28vw" />
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
                    <EditableImage slug={SLUG} path={`utilities.${i}.image`} src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                  </div>
                  <figcaption><EditableText slug={SLUG} path={`utilities.${i}.cap`}>{item.cap}</EditableText></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} eyebrow="Common Questions" title="Facilities, answered" />

      <ContactCta image={ctaImage.src} editSlug={SLUG} imagePath="ctaImage" />
    </>
  );
}
