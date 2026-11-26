import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
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

  const faqItems = faqs.map((f, i) => ({
    q: <EditableText slug="quality-certifications" path={`faqs.${i}.q`}>{f.q}</EditableText>,
    qText: f.q,
    a: <EditableText slug="quality-certifications" path={`faqs.${i}.a`} multiline>{f.a}</EditableText>,
    aText: f.a,
  }));

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Quality & Certifications' }]}
        eyebrow={<EditableText slug="quality-certifications" path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug="quality-certifications" path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug="quality-certifications" path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
        editSlug="quality-certifications"
        imagePath="hero.image"
      />

      <section className="section-pad">
        <div className="container">
          <Reveal>
            <blockquote className="quality-quote">
              &ldquo;<EditableText slug="quality-certifications" path="quotePart1" multiline>{quotePart1}</EditableText>&rdquo;
              <br />
              <br />
              &ldquo;<EditableText slug="quality-certifications" path="quotePart2" multiline>{quotePart2}</EditableText>&rdquo;
              <cite><EditableText slug="quality-certifications" path="quoteCite">{quoteCite}</EditableText></cite>
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
                  <h3><EditableText slug="quality-certifications" path={`certs.${i}.title`}>{c.title}</EditableText></h3>
                  <p><EditableText slug="quality-certifications" path={`certs.${i}.copy`} multiline>{c.copy}</EditableText></p>
                  <span className="cert-no"><EditableText slug="quality-certifications" path={`certs.${i}.certNo`}>{c.certNo}</EditableText></span>
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
                  <h3><EditableText slug="quality-certifications" path={`pillars.${i}.title`}>{item.title}</EditableText></h3>
                  <p><EditableText slug="quality-certifications" path={`pillars.${i}.copy`} multiline>{item.copy}</EditableText></p>
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
                  <EditableImage slug="quality-certifications" path={`galleryImages.${i}.image`} src={g.image.src} alt={g.image.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                </div>
                <figcaption><EditableText slug="quality-certifications" path={`galleryImages.${i}.cap`}>{g.cap}</EditableText></figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqItems} eyebrow="Common Questions" title="Certifications, answered" />

      <ContactCta image={ctaImage.src} editSlug="quality-certifications" imagePath="ctaImage" />
    </>
  );
}
