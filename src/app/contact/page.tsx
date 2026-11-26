import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import { IconPin, IconMail, IconPhone, IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact Us — Hyderabad Manufacturing Facility',
  description:
    'Reach G Industries at its Hyderabad facility — Gandi Maisamma, Dundigal, Telangana 500043 — by phone or email.',
  path: '/contact',
  image: '/images/og/contact.jpg',
  imageAlt: 'Wide view of the G Industries fabrication shop floor',
});

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Gandi Maisamma, Dundigal, Hyderabad, Telangana 500043');

const FAQS = [
  {
    q: 'What information should I include when I reach out?',
    a: 'A short description of your project, the industry or application it serves, and any drawings or specifications you already have — email or call directly and the team will follow up.',
  },
  {
    q: 'Does G Industries handle the full project, from design to delivery?',
    a: 'Yes — G Industries is a single-source manufacturing partner bridging conceptual design, structural simulation, heavy fabrication, and precise post-processing under one roof.',
  },
  {
    q: 'Where is G Industries located?',
    a: 'Gandi Maisamma, Dundigal, Hyderabad, Telangana 500043, India — the facility spans three units (13,000 sft, 10,000 sft, and 30,000 sft) with 40,000 sft available for expansion.',
  },
  {
    q: 'Can I request a quote for a custom fabrication or BESS container project?',
    a: 'Yes — submit the contact form with your project details, industry, and any drawings or specifications you already have, or reach out directly by email or phone, and the team will follow up with next steps.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/quality-images/Factory image.png"
        imageAlt="Wide view of the G Industries fabrication shop floor"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        eyebrow="Get In Touch"
        title="Challenge everything with G Industries."
        subtitle="Ready to elevate your next project? Partner with a manufacturer built to meet the most demanding engineering challenges — end to end."
      />

      <section className="section-pad">
        <div className="container with-sidebar">
          <div>
            <Reveal style={{ marginBottom: '2rem' }}>
              <div className="eyebrow">Send a Message</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', marginBottom: '0.75rem' }}>Tell us about your project</h2>
              <p style={{ color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
                Share a few details and our team will follow up directly — or use the phone/email below if you'd rather reach us that way.
              </p>
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
                  Gandi Maisamma, Dundigal,
                  <br />
                  Hyderabad, Telangana 500043
                </p>
                <a
                  href={MAPS_URL}
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
                <a href="mailto:mvskiran@gindustries.co.in" style={{ color: 'var(--ink-soft)' }}>mvskiran@gindustries.co.in</a>
                <a href="mailto:gindustries.md@gmail.com" style={{ color: 'var(--ink-soft)' }}>gindustries.md@gmail.com</a>
              </div>
              <div className="contact-item" style={{ color: 'inherit' }}>
                <div className="icon" style={{ color: 'var(--gold-dim)' }}><IconPhone /></div>
                <h4 style={{ color: 'var(--navy-950)' }}>Phone</h4>
                <a href="tel:+918977650585" style={{ color: 'var(--ink-soft)' }}>+91 89776 50585</a>
              </div>
            </Reveal>
          </div>

          <Reveal className="sidebar-card">
            <h4>Quick Facts</h4>
            <div className="sidebar-stat">
              <span className="label">Founded</span>
              <span className="value">2021</span>
            </div>
            <div className="sidebar-stat">
              <span className="label">Workforce</span>
              <span className="value">50+</span>
            </div>
            <div className="sidebar-stat">
              <span className="label">Certification</span>
              <span className="value">ISO 9001:2015</span>
            </div>
            <div className="sidebar-stat">
              <span className="label">Registered</span>
              <span className="value">GST · Udyam/MSME</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', marginTop: '1rem' }}>
              Registered vendor — Railway Tenders. Engaging with Defence Sector Projects.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Before You Reach Out" title="What to expect" surface />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Certified Partner</div>
            <h2>ISO 9001:2015 · GST Registered · Udyam/MSME Registered</h2>
            <p>A registered, ISO-certified manufacturing enterprise based in Hyderabad, Telangana.</p>
          </Reveal>
          <Link href="/quality-certifications" className="btn btn-outline-dark">
            View Certifications <IconArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
