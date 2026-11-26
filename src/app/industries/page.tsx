import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconRail, IconBolt, IconChip, IconLeaf, IconFlask, IconShieldBolt, IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { INDUSTRIES_DEFAULTS } from '@/content/pages/industries';

export const metadata: Metadata = pageMetadata({
  title: 'Industries We Serve',
  description:
    'G Industries manufactures precision components for Railways, EV, Electronics, Agri-Tech, Laboratory Equipment and Switchgear Systems across India.',
  path: '/industries',
  image: '/quality-images/IMG_20261021_103942.jpg',
  imageAlt: 'Stacked laser-cut and welded sheet metal enclosures ready for assembly',
});

const INDUSTRY_ICONS = [IconRail, IconBolt, IconChip, IconLeaf, IconFlask, IconShieldBolt];

export default async function IndustriesPage() {
  const content = await getPageContent('industries', INDUSTRIES_DEFAULTS);
  const { hero, items, trusted, faqs, ctaImage } = content;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries We Serve' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gap: 'var(--space-4)' }} className="reveal-group">
            {items.map((item, i) => {
              const Icon = INDUSTRY_ICONS[i] ?? INDUSTRY_ICONS[INDUSTRY_ICONS.length - 1];
              return (
                <Reveal
                  key={i}
                  index={i}
                  className="industry-card"
                  style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 'var(--space-4)', alignItems: 'start', padding: 'var(--space-4)' }}
                >
                  <div className="icon" style={{ width: 48, height: 48 }}>
                    <Icon />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ marginBottom: item.note ? '0.6rem' : 0 }}>{item.copy}</p>
                    {item.note && <span className="cert-no">{item.note}</span>}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad why-strip">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal className="section-head center">
            <div className="eyebrow on-dark">{trusted.eyebrow}</div>
            <h2 style={{ color: 'var(--white)' }}>{trusted.heading}</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)' }}>{trusted.copy}</p>
          </Reveal>
          <Link href="/clients" className="btn btn-gold">
            See Our Clients <IconArrowRight />
          </Link>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="Industries we serve, answered" />

      <ContactCta image={ctaImage.src} />
    </>
  );
}
