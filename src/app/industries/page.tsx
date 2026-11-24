import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconRail, IconBolt, IconChip, IconLeaf, IconFlask, IconShieldBolt, IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Industries We Serve',
  description:
    'From railway infrastructure to next-generation EVs and energy systems, G Industries manufactures high-precision components across Railways, EV, Electronics, Agri-Tech, Laboratory Equipment and Switchgear Systems.',
  path: '/industries',
  image: '/images/IMG_20261021_103942.jpg',
  imageAlt: 'Stacked laser-cut and welded sheet metal enclosures ready for assembly',
});

const FAQS = [
  {
    q: 'Does G Industries manufacture components for the railway industry?',
    a: 'Yes. G Industries is a registered vendor executing railway tender orders, and has manufactured custom BESS containers for Medha Servo Drives — a project spanning railway, EV, and energy-storage work.',
  },
  {
    q: 'What electric vehicle (EV) components does G Industries fabricate?',
    a: 'G Industries fabricates precision EV enclosures and structural components, engineered through the same CAD-to-QC process — design, simulation, fabrication, and finishing — used across every project.',
  },
  {
    q: 'Does G Industries build electronics enclosures and control consoles?',
    a: 'Yes. Modular enclosures and engineering consoles are fabricated and finished at Unit 2, G Industries’ dedicated 10,000 sft electronics facility.',
  },
  {
    q: 'What switchgear and electrical panel fabrication services are available?',
    a: 'G Industries fabricates switchgear and electrical panels as a core part of its Unit 1 and Unit 2 production lines, built to the same dimensional and quality standards applied across all industrial work.',
  },
  {
    q: 'Does G Industries manufacture for agri-tech or laboratory equipment applications?',
    a: 'Yes — G Industries fabricates structures for agricultural technology systems and custom enclosures and assemblies for laboratory equipment, both built to the same structural and dimensional standards as its heavier industrial work.',
  },
];

const INDUSTRIES = [
  {
    Icon: IconRail,
    title: 'Railways',
    copy: 'Registered vendor executing railway tender orders. G Industries manufactured custom BESS containers for Medha Servo Drives, which spans Railways, EV and energy storage work.',
    note: 'Registered vendor — Railway Tenders',
  },
  {
    Icon: IconBolt,
    title: 'Electric Vehicles',
    copy: 'Precision EV enclosures & structural components, engineered to the same CAD-to-QC process used across every project.',
  },
  {
    Icon: IconChip,
    title: 'Electronics',
    copy: 'Modular enclosures & engineering consoles — fabricated and finished at Unit 2, our dedicated electronics facility.',
  },
  {
    Icon: IconLeaf,
    title: 'Agri-Tech',
    copy: 'Fabrication for agricultural technology systems, built to the same structural and dimensional standards as our industrial work.',
  },
  {
    Icon: IconFlask,
    title: 'Laboratory Equipment',
    copy: 'Custom lab enclosures & assemblies, precision-fabricated for controlled environments.',
  },
  {
    Icon: IconShieldBolt,
    title: 'Switchgear Systems',
    copy: 'Electrical & switchgear panel fabrication — a core part of our Unit 1 and Unit 2 production lines.',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        image="/images/IMG_20261021_103942.jpg"
        imageAlt="Stacked laser-cut and welded sheet metal enclosures ready for assembly"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries We Serve' }]}
        eyebrow="Industries We Serve"
        title="Precision components across critical sectors."
        subtitle="From railway infrastructure to next-generation EVs and energy systems, G Industries manufactures high-precision components for national and international industries under stringent quality and compliance standards."
      />

      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gap: 'var(--space-4)' }} className="reveal-group">
            {INDUSTRIES.map(({ Icon, title, copy, note }, i) => (
              <Reveal
                key={title}
                index={i}
                className="industry-card"
                style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 'var(--space-4)', alignItems: 'start', padding: 'var(--space-4)' }}
              >
                <div className="icon" style={{ width: 48, height: 48 }}>
                  <Icon />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ marginBottom: note ? '0.6rem' : 0 }}>{copy}</p>
                  {note && <span className="cert-no">{note}</span>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad why-strip">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal className="section-head center">
            <div className="eyebrow on-dark">Trusted Across Sectors</div>
            <h2 style={{ color: 'var(--white)' }}>25+ organizations, one single-source partner</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)' }}>
              From railway PSUs and defence-linked enterprises to EV innovators and energy pioneers.
            </p>
          </Reveal>
          <Link href="/clients" className="btn btn-gold">
            See Our Clients <IconArrowRight />
          </Link>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Industries we serve, answered" />

      <ContactCta image="/images/file_00000000686081fa8ef0d50efda247d2.png" />
    </>
  );
}
