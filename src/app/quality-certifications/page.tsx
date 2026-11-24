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

export const metadata = pageMetadata({
  title: 'Quality & Certifications',
  description:
    'G Industries is ISO 9001:2015 certified, GST registered, and Udyam/MSME registered — a formally registered manufacturing enterprise in Hyderabad, Telangana.',
  path: '/quality-certifications',
  image: '/images/IMG_20261021_091907.jpg',
  imageAlt: 'Quality Department entrance with safety signage at the G Industries facility',
});

const PILLARS = [
  { Icon: IconMagnifierCheck, title: 'Dimensional Inspection', copy: 'Every delivery is inspected before it leaves the facility.' },
  { Icon: IconClock, title: 'On-Time Delivery', copy: 'A core commitment of the documented Quality Policy.' },
  { Icon: IconDocCheck, title: 'Continual Improvement', copy: 'The Quality Management System is continually reviewed and improved, with quality objectives formally established and tracked.' },
];

const FAQS = [
  {
    q: 'Is G Industries ISO certified?',
    a: 'Yes — G Industries holds ISO 9001:2015 Quality Management System certification (Cert. No. QMS-MMXXII-04-12580), valid through April 2029, covering all fabrication works and the manufacture of electronic & electrical enclosures.',
  },
  {
    q: 'Is G Industries a registered business entity?',
    a: 'Yes — G Industries is GST registered under Form GST REG-06 as a proprietorship enterprise in Telangana (Reg. No. 36CIXPM4532Q1Z8), and is classified as a Micro Enterprise under the Ministry of MSME, Government of India (UDYAM-TS-20-0052717).',
  },
  {
    q: 'What does the Quality Management System cover?',
    a: 'On-time delivery, compliance with ISO 9001:2015 and all applicable statutory and regulatory requirements, continual improvement of the QMS, employee competency and involvement, and a documented framework for setting and reviewing quality objectives.',
  },
  {
    q: 'Why does ISO 9001:2015 certification matter when choosing a fabrication partner?',
    a: 'ISO 9001:2015 certification means a supplier’s quality processes — inspection, documentation, on-time delivery, and continual improvement — are independently verified rather than self-declared. For fabrication and engineering work, that reduces the risk of dimensional errors, missed specifications, and late deliveries reaching the client.',
  },
  {
    q: 'What statutory and regulatory requirements does G Industries comply with?',
    a: 'Beyond ISO 9001:2015, G Industries complies with GST registration requirements and is registered under the Udyam/MSME scheme — alongside all other statutory and regulatory obligations referenced in its documented Quality Policy.',
  },
];

export default function QualityCertificationsPage() {
  return (
    <>
      <PageHero
        image="/images/IMG_20261021_091907.jpg"
        imageAlt="Quality Department entrance with safety signage at the G Industries facility"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Quality & Certifications' }]}
        eyebrow="Accreditations"
        title="Registered, certified, compliant."
        subtitle="G Industries operates as a formally registered manufacturing enterprise, holding current certifications across quality, tax, and government enterprise classifications."
      />

      <section className="section-pad">
        <div className="container">
          <Reveal>
            <blockquote className="quality-quote">
              &ldquo;At G&nbsp;Industries, we focus on customer satisfaction by manufacturing and supplying
              high-quality engineering and fabrication products that consistently meet customer requirements. We
              accomplish this by ensuring on-time delivery, complying with ISO 9001:2015 and all applicable
              statutory and regulatory requirements, continually improving the effectiveness of our Quality
              Management System, fostering employee competency and involvement, and providing a framework for
              establishing and reviewing quality objectives.&rdquo;
              <br />
              <br />
              &ldquo;Our relentless pursuit of excellence ensures that every product we deliver is crafted with
              the utmost precision and attention to detail — partnering with clients for unparalleled quality and
              customer-centric engineering solutions tailored to their exact needs.&rdquo;
              <cite>Quality Policy, G Industries</cite>
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
            <Reveal className="cert-card" index={0}>
              <div className="icon"><IconShieldCheck /></div>
              <h3>ISO 9001:2015</h3>
              <p>Quality Management System certification for all fabrication works and manufacture of electronic &amp; electrical enclosures.</p>
              <span className="cert-no">Cert. No. QMS-MMXXII-04-12580 · Valid through Apr 2029</span>
            </Reveal>
            <Reveal className="cert-card" index={1}>
              <div className="icon"><IconGst /></div>
              <h3>GST Registered</h3>
              <p>Registered under Form GST REG-06 as a proprietorship enterprise in Telangana.</p>
              <span className="cert-no">Reg. No. 36CIXPM4532Q1Z8</span>
            </Reveal>
            <Reveal className="cert-card" index={2}>
              <div className="icon"><IconBuilding /></div>
              <h3>Udyam / MSME Registered</h3>
              <p>Classified as a Micro Enterprise under the Ministry of MSME, Government of India — Manufacturing.</p>
              <span className="cert-no">UDYAM-TS-20-0052717</span>
            </Reveal>
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
            {PILLARS.map(({ Icon, title, copy }, i) => (
              <Reveal className="pillar" index={i} key={title}>
                <div className="icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
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
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/IMG_20261021_091907.jpg" alt="Quality Department entrance with safety signage" />
              <figcaption>Quality Department, Unit 1</figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/file_00000000a890820a9306d10de46aeddb.jpg"
                alt="Quality Department entrance, alternate view with plant layout plaque visible"
              />
              <figcaption>Quality Department Entrance</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Certifications, answered" />

      <ContactCta image="/images/IMG_20261021_103212.jpg" />
    </>
  );
}
