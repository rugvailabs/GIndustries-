import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
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

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="split-section">
            <div className="split-media">
              <Image src={foundation.image.src} alt={foundation.image.alt} width={1744} height={992} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>{foundation.caption}</figcaption>
            </div>
            <div className="split-copy">
              <div className="eyebrow">{foundation.eyebrow}</div>
              <h2>{foundation.heading}</h2>
              <p>{foundation.introText}</p>
              <p>
                <strong>{foundation.missionLabel}</strong> {foundation.missionText}
              </p>
              <div className="mini-stats">
                {foundation.stats.map((s, i) => (
                  <div className="mini-stat" key={i}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
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
                <div className="tl-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
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
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="About G Industries" surface />

      <ContactCta image={ctaImage.src} />
    </>
  );
}
