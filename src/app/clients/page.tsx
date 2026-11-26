import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconUsers, IconRail, IconShieldCheck, IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';

const FAQS = [
  {
    q: 'How many organizations does G Industries serve as clients?',
    a: 'G Industries serves 25+ organizations across railway, defence, energy, EV, and electronics sectors, ranging from large public-sector enterprises to specialized technology companies.',
  },
  {
    q: 'Which major organizations has G Industries worked with?',
    a: 'Clients include Medha Servo Drives, BHEL, HBL, VEM Technologies, and ECIL, among 25+ organizations served across India’s most demanding industrial sectors.',
  },
  {
    q: 'Is G Industries a registered vendor for Indian Railways tenders?',
    a: 'Yes — G Industries is a registered vendor executing railway tender orders, and counts Rail Coach Factory (RCF) Kapurthala among the organizations it serves.',
  },
  {
    q: 'Does G Industries work on defence sector projects?',
    a: 'G Industries is actively engaging with defence-linked project work, alongside its established client base in energy, EV, and electronics manufacturing.',
  },
];

export const metadata = pageMetadata({
  title: 'Our Clients — Railways, EV & BESS Energy Partners',
  description:
    'G Industries serves 25+ organizations across India’s most demanding sectors — railway PSUs, defence-linked enterprises, EV innovators, and energy pioneers.',
  path: '/clients',
  image: '/images/og/clients.jpg',
  imageAlt: 'Wide view of the G Industries fabrication shop floor, where client deliveries are manufactured',
});

const FEATURED = ['Medha Servo Drives', 'BHEL', 'HBL', 'VEM Technologies', 'ECIL'];
const OTHERS = [
  'RCF Kapurthala', 'Medha — Powering Mobility', 'Medha Electrical Contractors', 'Medha Marine',
  'BHEL — R&D Balanagar', 'BHEL — RC Puram', 'Cygni Energy', 'Nexigo Energy', 'Axonify Tech Systems',
  'Hemair Systems', 'Keto Motors', 'Neural Foundry', 'Quantum EV', 'Smart Lab', 'SLN Electricals',
  'Polmon Instruments', 'Rotomag', 'SGD Pharma', 'Stability Automation', 'XMachines', 'Venjay Automation',
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        image="/quality-images/Factory image.png"
        imageAlt="Wide view of the G Industries fabrication shop floor, where client deliveries are manufactured"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Clients' }]}
        eyebrow="Our Valued Customers"
        title="Trusted by industry leaders."
        subtitle="From railway PSUs and defence-linked enterprises to EV innovators and energy pioneers, G Industries is proud to serve 25+ organizations across India's most demanding sectors."
      />

      <section className="section-pad">
        <div className="container">
          <div className="pillar-grid reveal-group">
            <Reveal className="pillar" index={0}>
              <div className="icon"><IconUsers /></div>
              <h3>25+</h3>
              <p>Organizations served across railway, defence, energy, EV, and electronics sectors.</p>
            </Reveal>
            <Reveal className="pillar" index={1}>
              <div className="icon"><IconRail /></div>
              <h3>Registered Vendor</h3>
              <p>G Industries executes railway tender orders as a registered vendor.</p>
            </Reveal>
            <Reveal className="pillar" index={2}>
              <div className="icon"><IconShieldCheck /></div>
              <h3>Engaged</h3>
              <p>Actively engaging with defence-linked project work.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad clients">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">The Client Wall</div>
            <h2>Organizations we work with</h2>
          </Reveal>
          <Reveal className="client-wall">
            {FEATURED.map((c) => (
              <span className="client-pill featured" key={c}>{c}</span>
            ))}
            {OTHERS.map((c) => (
              <span className="client-pill" key={c}>{c}</span>
            ))}
          </Reveal>
          <p className="client-note">
            <strong>Registered vendor</strong> — Railway Tenders &nbsp;|&nbsp; Engaging with Defence Sector Projects
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Why Clients Choose Us</div>
            <h2>Built to be a single-source partner</h2>
            <p>
              End-to-end capability from design through finishing, ISO 9001:2015 certified quality, multi-sector
              expertise, and a proven delivery record with BHEL, VEM Technologies, Medha, ECIL and more.
            </p>
          </Reveal>
          <Link href="/projects" className="btn btn-outline-dark">
            See Project Case Studies <IconArrowRight />
          </Link>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Clients & partnerships, answered" />

      <ContactCta
        image="/quality-images/Factory image.png"
        heading={
          <>
            Become our next
            <br />
            <em>valued partner.</em>
          </>
        }
      />
    </>
  );
}
