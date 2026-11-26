import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import { IconPin, IconMail, IconPhone, IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { CONTACT_DEFAULTS } from '@/content/pages/contact';

export const metadata = pageMetadata({
  title: 'Contact Us — Hyderabad Manufacturing Facility',
  description:
    'Reach G Industries at its Hyderabad facility — Gandi Maisamma, Dundigal, Telangana 500043 — by phone or email.',
  path: '/contact',
  image: '/images/og/contact.jpg',
  imageAlt: 'Wide view of the G Industries fabrication shop floor',
});

export default async function ContactPage() {
  const content = await getPageContent('contact', CONTACT_DEFAULTS);
  const { hero, formHeading, formIntro, addressLine1, addressLine2, email, email2, phone, sidebar, sidebarNote, faqs, certifiedHeading, certifiedCopy } = content;

  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(`${addressLine1} ${addressLine2}`);
  const telHref = `tel:${phone.replace(/\s+/g, '')}`;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        editSlug="contact"
        imagePath="hero.image"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        eyebrow={<EditableText slug="contact" path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug="contact" path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug="contact" path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
      />

      <section className="section-pad">
        <div className="container with-sidebar">
          <div>
            <Reveal style={{ marginBottom: '2rem' }}>
              <div className="eyebrow">Send a Message</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', marginBottom: '0.75rem' }}><EditableText slug="contact" path="formHeading">{formHeading}</EditableText></h2>
              <p style={{ color: 'var(--ink-soft)', marginBottom: '1.5rem' }}><EditableText slug="contact" path="formIntro" multiline>{formIntro}</EditableText></p>
              <ContactForm />
            </Reveal>

            <Reveal
              className="contact-grid"
              style={{
                textAlign: 'left',
                borderTop: '1px solid var(--line)',
                paddingTop: 'var(--space-4)',
                marginTop: 'var(--space-6)',
              }}
            >
              <div className="contact-item" style={{ color: 'inherit' }}>
                <div className="icon" style={{ color: 'var(--gold-dim)' }}><IconPin /></div>
                <h4 style={{ color: 'var(--navy-950)' }}>Location</h4>
                <p style={{ color: 'var(--ink-soft)' }}>
                  <EditableText slug="contact" path="addressLine1">{addressLine1}</EditableText>
                  <br />
                  <EditableText slug="contact" path="addressLine2">{addressLine2}</EditableText>
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ marginTop: '1rem', padding: '0.6em 1.1em', fontSize: '0.85rem', color: 'var(--navy-950)' }}
                >
                  View on Google Maps
                </a>
              </div>
              <div className="contact-item" style={{ color: 'inherit' }}>
                <div className="icon" style={{ color: 'var(--gold-dim)' }}><IconMail /></div>
                <h4 style={{ color: 'var(--navy-950)' }}>Email</h4>
                <a href={`mailto:${email}`} style={{ color: 'var(--ink-soft)' }}><EditableText slug="contact" path="email">{email}</EditableText></a>
                <a href={`mailto:${email2}`} style={{ color: 'var(--ink-soft)' }}><EditableText slug="contact" path="email2">{email2}</EditableText></a>
              </div>
              <div className="contact-item" style={{ color: 'inherit' }}>
                <div className="icon" style={{ color: 'var(--gold-dim)' }}><IconPhone /></div>
                <h4 style={{ color: 'var(--navy-950)' }}>Phone</h4>
                <a href={telHref} style={{ color: 'var(--ink-soft)' }}><EditableText slug="contact" path="phone">{phone}</EditableText></a>
              </div>
            </Reveal>
          </div>

          <Reveal className="sidebar-card">
            <h4>Quick Facts</h4>
            {sidebar.map((s, i) => (
              <div className="sidebar-stat" key={i}>
                <span className="label"><EditableText slug="contact" path={`sidebar.${i}.label`}>{s.label}</EditableText></span>
                <span className="value"><EditableText slug="contact" path={`sidebar.${i}.value`}>{s.value}</EditableText></span>
              </div>
            ))}
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', marginTop: '1rem' }}><EditableText slug="contact" path="sidebarNote" multiline>{sidebarNote}</EditableText></p>
          </Reveal>
        </div>
      </section>

      <FAQSection
        items={faqs.map((f, i) => ({
          q: <EditableText slug="contact" path={`faqs.${i}.q`}>{f.q}</EditableText>,
          qText: f.q,
          a: <EditableText slug="contact" path={`faqs.${i}.a`} multiline>{f.a}</EditableText>,
          aText: f.a,
        }))}
        eyebrow="Before You Reach Out"
        title="What to expect"
        surface
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Certified Partner</div>
            <h2><EditableText slug="contact" path="certifiedHeading">{certifiedHeading}</EditableText></h2>
            <p><EditableText slug="contact" path="certifiedCopy" multiline>{certifiedCopy}</EditableText></p>
          </Reveal>
          <Link href="/quality-certifications" className="btn btn-outline-dark">
            View Certifications <IconArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
