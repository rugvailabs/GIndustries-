import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
import { IconChain, IconShieldCheck, IconLayers, IconCube } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { ABOUT_DEFAULTS } from '@/content/pages/about';

export const metadata: Metadata = pageMetadata({
  title: 'About Us — ISO 9001 Manufacturer, Hyderabad',
  description:
    'G Industries — founded in 2021 in Hyderabad, Telangana, a single-source manufacturing partner built to redefine what a fabrication partner can deliver.',
  path: '/about',
  image: '/images/og/about.jpg',
  imageAlt: 'The G Industries team on the shop floor at the Hyderabad facility',
});

const PILLAR_ICONS = [IconChain, IconShieldCheck, IconCube, IconLayers];

export default async function AboutPage() {
  const content = await getPageContent('about', ABOUT_DEFAULTS);
  const { hero, foundation, journey, pillars, faqs, ctaImage } = content;

  const faqItems = faqs.map((f, i) => ({
    q: <EditableText slug="about" path={`faqs.${i}.q`}>{f.q}</EditableText>,
    qText: f.q,
    a: <EditableText slug="about" path={`faqs.${i}.a`} multiline>{f.a}</EditableText>,
    aText: f.a,
  }));

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        eyebrow={<EditableText slug="about" path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug="about" path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug="about" path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
        editSlug="about"
        imagePath="hero.image"
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="split-section">
            <div className="split-media">
              <EditableImage
                slug="about"
                path="foundation.image"
                src={foundation.image.src}
                alt={foundation.image.alt}
                width={1744}
                height={992}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption><EditableText slug="about" path="foundation.caption">{foundation.caption}</EditableText></figcaption>
            </div>
            <div className="split-copy">
              <div className="eyebrow"><EditableText slug="about" path="foundation.eyebrow">{foundation.eyebrow}</EditableText></div>
              <h2><EditableText slug="about" path="foundation.heading">{foundation.heading}</EditableText></h2>
              <p><EditableText slug="about" path="foundation.introText" multiline>{foundation.introText}</EditableText></p>
              <p>
                <strong><EditableText slug="about" path="foundation.missionLabel">{foundation.missionLabel}</EditableText></strong>{' '}
                <EditableText slug="about" path="foundation.missionText" multiline>{foundation.missionText}</EditableText>
              </p>
              <div className="mini-stats">
                {foundation.stats.map((s, i) => (
                  <div className="mini-stat" key={i}>
                    <div className="stat-num"><EditableText slug="about" path={`foundation.stats.${i}.num`}>{s.num}</EditableText></div>
                    <div className="stat-label"><EditableText slug="about" path={`foundation.stats.${i}.label`}>{s.label}</EditableText></div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Our Journey</div>
            <h2>Growing capability, year on year.</h2>
            <p>Six years of continuous investment in people and machinery.</p>
          </Reveal>
          <Reveal className="timeline">
            {journey.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="tl-year"><EditableText slug="about" path={`journey.${i}.year`}>{item.year}</EditableText></div>
                <h3><EditableText slug="about" path={`journey.${i}.title`}>{item.title}</EditableText></h3>
                <p><EditableText slug="about" path={`journey.${i}.copy`} multiline>{item.copy}</EditableText></p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">What Drives Us</div>
            <h2>Built on precision, proven by delivery.</h2>
          </Reveal>
          <div className="pillar-grid reveal-group">
            {pillars.map((item, i) => {
              const Icon = PILLAR_ICONS[i] ?? PILLAR_ICONS[PILLAR_ICONS.length - 1];
              return (
                <Reveal key={i} className="pillar" index={i}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <h3><EditableText slug="about" path={`pillars.${i}.title`}>{item.title}</EditableText></h3>
                  <p><EditableText slug="about" path={`pillars.${i}.copy`} multiline>{item.copy}</EditableText></p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} eyebrow="Common Questions" title="About G Industries" surface />

      <ContactCta image={ctaImage.src} editSlug="about" imagePath="ctaImage" />
    </>
  );
}
