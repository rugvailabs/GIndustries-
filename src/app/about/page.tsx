import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconChain, IconShieldCheck, IconLayers, IconCube } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Us — ISO 9001 Manufacturer, Hyderabad',
  description:
    'G Industries — founded in 2021 in Hyderabad, Telangana, a single-source manufacturing partner built to redefine what a fabrication partner can deliver.',
  path: '/about',
  image: '/images/og/about.jpg',
  imageAlt: 'The G Industries team on the shop floor at the Hyderabad facility',
});

const JOURNEY = [
  { year: '2021', title: 'Founded', copy: 'G Industries founded in Dundigal, Gandi Maisamma, Hyderabad, Telangana.' },
  { year: '2022', title: 'Capacity Expansion', copy: 'Sheet rolling capability added, with 5mm forming capacity.' },
  { year: '2023', title: 'Welding Capability Added', copy: 'Laser welding and TIG/MIG/ARC welding capability commissioned across the shop floor.' },
  { year: '2024', title: 'Major Equipment Investment', copy: 'CNC press brake (Hindustan, 100T), Senfeng sheet & pipe laser cutting, and pipe bending equipment added.' },
  { year: '2025', title: 'Continued Expansion', copy: 'Additional MIG welding (200A), a 20-ton power press, and a drilling machine commissioned.' },
  { year: '2026', title: 'Unit 2 Commissioned', copy: 'Deburring machine and a 50-ton power press added; Unit 2 — a 30,000 sft BESS Container Manufacturing facility — under active expansion.' },
];

const FAQS = [
  {
    q: 'When was G Industries founded and where is it based?',
    a: 'G Industries was founded in 2021 in Dundigal, Gandi Maisamma, Hyderabad, Telangana. The company operates as a single-source manufacturing partner, bringing design, simulation, fabrication, and finishing together under one roof.',
  },
  {
    q: 'Is G Industries a certified and legally registered manufacturer?',
    a: 'Yes. G Industries is ISO 9001:2015 certified, GST registered, and registered under the Udyam/MSME scheme as a Micro Enterprise. Full registration numbers and validity dates are listed on our Quality & Certifications page.',
  },
  {
    q: 'How large is the G Industries team?',
    a: 'G Industries employs a 50+ strong workforce across its two operating units — Unit 1 (heavy fabrication) and Unit 2 (BESS container manufacturing).',
  },
  {
    q: 'What makes G Industries different from other fabrication companies?',
    a: 'Most fabrication projects stall when design, simulation, fabrication, and finishing sit with different vendors. G Industries eliminates that fragmentation by owning every stage of the Design → Simulate → Fabricate → Finish process internally, reducing handoffs, delays, and quality gaps.',
  },
  {
    q: 'Which industries and sectors does G Industries manufacture for?',
    a: 'G Industries manufactures precision components for Railways, Electric Vehicles, Electronics, Agri-Tech, Laboratory Equipment, and Switchgear Systems, with a particular specialization in BESS (Battery Energy Storage System) containers.',
  },
];

const PILLARS = [
  { Icon: IconChain, title: 'Single-Source Accountability', copy: 'One partner owns design, simulation, fabrication and finishing — no handoffs, no gaps between vendors.' },
  { Icon: IconShieldCheck, title: 'Documented Quality System', copy: 'Every delivery is governed by a certified ISO 9001:2015 Quality Management System.' },
  { Icon: IconCube, title: 'Continuous Reinvestment', copy: 'Machinery additions every year since 2022 keep tolerances tight and lead times short.' },
  { Icon: IconLayers, title: 'Multi-Sector Trust', copy: 'From railway PSUs to EV innovators, our capability spans the sectors that demand the most.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/team-shopfloor-hyderabad.jpg"
        imageAlt="The G Industries team on the shop floor at the Hyderabad facility"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        eyebrow="About Us"
        title="A single-source manufacturer, built since 2021."
        subtitle="A single-source manufacturing partner built in Hyderabad to redefine what a fabrication partner can deliver — from concept to completion, under one roof."
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="split-section">
            <div className="split-media">
              <Image
                src="/images/finished-components-dispatch-hyderabad.jpg"
                alt="Batch of finished precision stainless steel components ready for dispatch on the G Industries shop floor"
                width={2400}
                height={1800}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>Finished components staged for dispatch, Hyderabad facility</figcaption>
            </div>
            <div className="split-copy">
              <div className="eyebrow">Our Foundation</div>
              <h2>Built to redefine what a manufacturing partner delivers.</h2>
              <p>
                Founded in 2021 in Dundigal, Gandi Maisamma, Hyderabad, Telangana, G&nbsp;Industries was built to
                redefine what a manufacturing partner can deliver — from concept to completion, under one roof.
              </p>
              <p>
                <strong>Our Mission —</strong> To engineer, fabricate, and post-process industrial solutions that
                challenge industry standards and empower critical infrastructure across sectors, as a registered,
                ISO-certified manufacturing enterprise.
              </p>
              <div className="mini-stats">
                <div className="mini-stat">
                  <div className="stat-num">2021</div>
                  <div className="stat-label">Founded</div>
                </div>
                <div className="mini-stat">
                  <div className="stat-num">50+</div>
                  <div className="stat-label">Workforce</div>
                </div>
                <div className="mini-stat">
                  <div className="stat-num">ISO 9001</div>
                  <div className="stat-label">Certified</div>
                </div>
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
            {JOURNEY.map((item) => (
              <div className="timeline-item" key={item.year}>
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
            {PILLARS.map(({ Icon, title, copy }, i) => (
              <Reveal key={title} className="pillar" index={i}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        items={FAQS}
        eyebrow="Common Questions"
        title="About G Industries"
        surface
      />

      <ContactCta image="/images/fabrication-shop-floor-material-handling.jpg" />
    </>
  );
}
