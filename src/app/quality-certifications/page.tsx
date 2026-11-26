import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import {
  IconShieldCheck,
  IconGst,
  IconBuilding,
  IconMagnifierCheck,
  IconClock,
  IconDocCheck,
} from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { QUALITY_CERTIFICATIONS_DEFAULTS } from '@/content/pages/quality-certifications';

export const metadata = pageMetadata({
  title: 'Quality & Certifications',
  description:
    'G Industries is ISO 9001:2015 certified, GST registered, and Udyam/MSME registered — a formally registered manufacturing enterprise in Hyderabad, Telangana.',
  path: '/quality-certifications',
  image: '/images/og/quality-certifications.jpg',
  imageAlt: 'Quality Department entrance with safety signage at the G Industries facility',
});

const CERT_ICONS = [IconShieldCheck, IconGst, IconBuilding];
const PILLAR_ICONS = [IconMagnifierCheck, IconClock, IconDocCheck];

export default async function QualityCertificationsPage() {
  const content = await getPageContent('quality-certifications', QUALITY_CERTIFICATIONS_DEFAULTS);
  const { hero, quotePart1, quotePart2, quoteCite, certs, pillars, galleryImages, faqs, ctaImage } = content;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Quality & Certifications' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <Reveal>
            <blockquote className="quality-quote">
              &ldquo;{quotePart1}&rdquo;
              <br />
              <br />
              &ldquo;{quotePart2}&rdquo;
              <cite>{quoteCite}</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Accreditations</div>
            <h2>Current certifications</h2>
          </Reveal>
          <div className="cert-grid reveal-group">
            {certs.map((c, i) => {
              const Icon = CERT_ICONS[i] ?? CERT_ICONS[CERT_ICONS.length - 1];
              return (
                <Reveal className="cert-card" index={i} key={i}>
                  <div className="icon"><Icon /></div>
                  <h3>{c.title}</h3>
                  <p>{c.copy}</p>
                  <span className="cert-no">{c.certNo}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">How Quality Is Enforced</div>
            <h2>Built into every delivery</h2>
          </Reveal>
          <div className="pillar-grid reveal-group">
            {pillars.map((item, i) => {
              const Icon = PILLAR_ICONS[i] ?? PILLAR_ICONS[PILLAR_ICONS.length - 1];
              return (
                <Reveal className="pillar" index={i} key={i}>
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
          <Reveal className="section-head">
            <div className="eyebrow">On Site</div>
            <h2>The Quality Department</h2>
          </Reveal>
          <Reveal className="gallery-grid">
            {galleryImages.map((g, i) => (
              <figure key={i}>
                <div className="gallery-media">
                  <Image src={g.image.src} alt={g.image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                </div>
                <figcaption>{g.cap}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="Certifications, answered" />

      <ContactCta image={ctaImage.src} />
    </>
  );
}
