import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
import { IconSpark, IconDroplet, IconMagnifierCheck } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { MANUFACTURING_FABRICATION_DEFAULTS } from '@/content/pages/manufacturing-fabrication';

const SLUG = 'manufacturing-fabrication';

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
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }, { label: 'Manufacturing & Fabrication' }]}
        eyebrow={<EditableText slug={SLUG} path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug={SLUG} path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug={SLUG} path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
        editSlug={SLUG}
        imagePath="hero.image"
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow"><EditableText slug={SLUG} path="process.eyebrow">{process.eyebrow}</EditableText></div>
            <h2><EditableText slug={SLUG} path="process.heading">{process.heading}</EditableText></h2>
            <p><EditableText slug={SLUG} path="process.intro" multiline>{process.intro}</EditableText></p>
          </Reveal>

          <div className="capability-grid reveal-group">
            {process.items.map((item, i) => {
              const Icon = PROCESS_ICONS[i] ?? PROCESS_ICONS[PROCESS_ICONS.length - 1];
              return (
                <Reveal key={i} className="capability-card" index={i}>
                  <div className="icon"><Icon /></div>
                  <h3><EditableText slug={SLUG} path={`process.items.${i}.title`}>{item.title}</EditableText></h3>
                  <p><EditableText slug={SLUG} path={`process.items.${i}.copy`} multiline>{item.copy}</EditableText></p>
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
              <EditableImage slug={SLUG} path="split.image" src={split.image.src} alt={split.image.alt} width={2400} height={1800} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption><EditableText slug={SLUG} path="split.caption">{split.caption}</EditableText></figcaption>
            </div>
            <div className="split-copy">
              <div className="eyebrow"><EditableText slug={SLUG} path="split.eyebrow">{split.eyebrow}</EditableText></div>
              <h2><EditableText slug={SLUG} path="split.heading">{split.heading}</EditableText></h2>
              <p><EditableText slug={SLUG} path="split.para1" multiline>{split.para1}</EditableText></p>
              <p><EditableText slug={SLUG} path="split.para2" multiline>{split.para2}</EditableText></p>
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
              <figure key={i}><div className="gallery-media"><EditableImage slug={SLUG} path={`shopGallery.${i}.image`} src={g.image.src} alt={g.image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div></figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <blockquote className="quality-quote">
              &ldquo;<EditableText slug={SLUG} path="quote" multiline>{quote}</EditableText>&rdquo;
              <cite><EditableText slug={SLUG} path="quoteCite">{quoteCite}</EditableText></cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqItems} eyebrow="Common Questions" title="Manufacturing & fabrication, answered" />

      <ContactCta image={ctaImage.src} editSlug={SLUG} imagePath="ctaImage" />
    </>
  );
}
