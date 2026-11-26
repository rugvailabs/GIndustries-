import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
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

const SLUG = 'engineering-design';
const CAPABILITY_ICONS = [IconCube, IconWave, IconStructural];

export default async function EngineeringDesignPage() {
  const content = await getPageContent(SLUG, ENGINEERING_DESIGN_DEFAULTS);
  const { hero, design, simulate, capabilities, gallery, faqs, ctaImage } = content;

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
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }, { label: 'Engineering & Design' }]}
        eyebrow={<EditableText slug={SLUG} path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug={SLUG} path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug={SLUG} path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
        editSlug={SLUG}
        imagePath="hero.image"
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="split-section">
            <div className="split-copy">
              <div className="eyebrow"><EditableText slug={SLUG} path="design.eyebrow">{design.eyebrow}</EditableText></div>
              <h2><EditableText slug={SLUG} path="design.heading">{design.heading}</EditableText></h2>
              <p><EditableText slug={SLUG} path="design.para1" multiline>{design.para1}</EditableText></p>
              <p><EditableText slug={SLUG} path="design.para2" multiline>{design.para2}</EditableText></p>
            </div>
            <div className="split-media">
              <EditableImage slug={SLUG} path="design.image" src={design.image.src} alt={design.image.alt} width={1800} height={2400} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption><EditableText slug={SLUG} path="design.caption">{design.caption}</EditableText></figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="split-section reverse">
            <div className="split-copy">
              <div className="eyebrow"><EditableText slug={SLUG} path="simulate.eyebrow">{simulate.eyebrow}</EditableText></div>
              <h2><EditableText slug={SLUG} path="simulate.heading">{simulate.heading}</EditableText></h2>
              <p><EditableText slug={SLUG} path="simulate.para1" multiline>{simulate.para1}</EditableText></p>
              <p><EditableText slug={SLUG} path="simulate.para2" multiline>{simulate.para2}</EditableText></p>
            </div>
            <div className="split-media">
              <EditableImage slug={SLUG} path="simulate.image" src={simulate.image.src} alt={simulate.image.alt} width={1800} height={2400} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption><EditableText slug={SLUG} path="simulate.caption">{simulate.caption}</EditableText></figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow"><EditableText slug={SLUG} path="capabilities.eyebrow">{capabilities.eyebrow}</EditableText></div>
            <h2><EditableText slug={SLUG} path="capabilities.heading">{capabilities.heading}</EditableText></h2>
            <p><EditableText slug={SLUG} path="capabilities.intro" multiline>{capabilities.intro}</EditableText></p>
          </Reveal>
          <div className="capability-grid reveal-group">
            {capabilities.items.map((item, i) => {
              const Icon = CAPABILITY_ICONS[i] ?? CAPABILITY_ICONS[CAPABILITY_ICONS.length - 1];
              return (
                <Reveal key={i} className="capability-card" index={i}>
                  <div className="icon"><Icon /></div>
                  <h3><EditableText slug={SLUG} path={`capabilities.items.${i}.title`}>{item.title}</EditableText></h3>
                  <p><EditableText slug={SLUG} path={`capabilities.items.${i}.copy`} multiline>{item.copy}</EditableText></p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad precision-strip">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="eyebrow on-dark"><EditableText slug={SLUG} path="gallery.eyebrow">{gallery.eyebrow}</EditableText></div>
            <h2><EditableText slug={SLUG} path="gallery.heading">{gallery.heading}</EditableText></h2>
          </Reveal>
          <Reveal className="gallery-grid">
            {gallery.images.map((g, i) => (
              <figure key={i}>
                <div className="gallery-media">
                  <EditableImage slug={SLUG} path={`gallery.images.${i}.image`} src={g.image.src} alt={g.image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                </div>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqItems} eyebrow="Common Questions" title="Engineering & design, answered" />

      <ContactCta image={ctaImage.src} editSlug={SLUG} imagePath="ctaImage" />
    </>
  );
}
