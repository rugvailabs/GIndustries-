import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';

const FAQS = [
  {
    q: 'What kind of projects has G Industries delivered?',
    a: 'Documented deliveries span BESS (Battery Energy Storage System) containers for Medha Servo Drives, heavy industrial power containers for BHEL, and a precision CNC machine body for VEM Technologies — covering energy storage, railways, EV, and heavy machinery sectors.',
  },
  {
    q: 'Has G Industries worked with BHEL?',
    a: 'Yes. G Industries successfully delivered two heavy industrial-grade specialized power containers for Bharat Heavy Electricals Limited (BHEL), one of India’s largest power-sector public sector enterprises.',
  },
  {
    q: 'Does G Industries manufacture precision CNC machine bodies?',
    a: 'Yes — G Industries engineered and manufactured a high-precision CNC Machine Body for VEM Technologies, a deliverable that called on the full design-to-finish chain, from structural simulation through final dimensional inspection.',
  },
  {
    q: 'Can G Industries handle large-scale, multi-sector industrial contracts?',
    a: 'Yes. The Medha Servo Drives engagement alone spanned three sectors — BESS energy storage, railways, and electric vehicles — demonstrating the single-source capability that now supports 25+ organizations across multiple industries.',
  },
];

export const metadata: Metadata = pageMetadata({
  title: 'Projects & Case Studies',
  description:
    'Documented engineering and fabrication deliveries from G Industries — BESS containers for Medha Servo Drives, power containers for BHEL, and a precision CNC machine body for VEM Technologies.',
  path: '/projects',
  image: '/images/file_00000000686081fa8ef0d50efda247d2.png',
  imageAlt: 'BESS container chassis fabrication on the G Industries shop floor',
});

const PROJECTS = [
  {
    num: '01',
    client: 'Medha Servo Drives',
    title: 'BESS Container, Railways & EV',
    desc: 'Manufactured custom 10-foot and 20-foot BESS Containers for large-scale energy storage deployments.',
    note: "Spanning three of G Industries' core sectors — BESS energy storage, railways, and electric vehicles — in a single engagement.",
    src: '/images/file_00000000686081fa8ef0d50efda247d2.png',
    alt: 'BESS container chassis fabrication on the shop floor',
    cap: 'Container chassis fabrication, Unit 3',
  },
  {
    num: '02',
    client: 'BHEL',
    title: 'Power Containers',
    desc: 'Successfully delivered two heavy industrial-grade specialized containers for Bharat Heavy Electricals Limited.',
    note: 'BHEL is one of India’s largest power-sector public sector enterprises, engaged in heavy electrical equipment manufacturing.',
    src: '/images/IMG_20261021_103942.jpg',
    alt: 'Stacked laser-cut and welded sheet metal enclosures ready for assembly',
    cap: 'Sheet-metal enclosure fabrication, Unit 1',
  },
  {
    num: '03',
    client: 'VEM Technologies',
    title: 'CNC Machine Body',
    desc: 'Engineered and manufactured a high-precision CNC Machine Body to exacting tolerances.',
    note: 'A deliverable that called on the full design-to-finish chain, from structural simulation through to final dimensional inspection.',
    src: '/images/IMG_20261021_104523.jpg',
    alt: 'Precision-machined flanged housing component',
    cap: 'Precision-machined component, ex-works',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        image="/images/file_00000000686081fa8ef0d50efda247d2.png"
        imageAlt="BESS container chassis fabrication on the G Industries shop floor, with G Industries signage visible"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        eyebrow="Recent Track Record"
        title="Proven capabilities. Delivered."
        subtitle="From energy storage to heavy industrial machinery, G Industries has a growing portfolio of high-stakes, high-precision deliveries."
      />

      <section className="section-pad">
        <div className="container">
          <div className="project-list reveal-group">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.num} className="project-row" index={i}>
                <div className="pnum">{p.num}</div>
                <div>
                  <div className="client">{p.client}</div>
                  <h3>{p.title}</h3>
                </div>
                <div>
                  <p className="desc">{p.desc}</p>
                  <p className="desc" style={{ marginTop: '0.6rem' }}>{p.note}</p>
                </div>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} loading="lazy" alt={p.alt} />
                  <figcaption>{p.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="with-sidebar">
              <div>
                <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem', maxWidth: '62ch' }}>
                  These three engagements represent G&nbsp;Industries&apos; documented track record to date — but
                  the same single-source capability (design, simulation, fabrication, and finishing under one roof)
                  now supports 25+ organizations across railways, EV, electronics, agri-tech, and switchgear
                  sectors.
                </p>
                <Link href="/clients" className="btn btn-outline-dark" style={{ marginTop: 'var(--space-3)' }}>
                  See all clients <IconArrowRight />
                </Link>
              </div>
              <div className="sidebar-card">
                <h4>At a Glance</h4>
                <div className="sidebar-stat">
                  <span className="label">Founded</span>
                  <span className="value">2021</span>
                </div>
                <div className="sidebar-stat">
                  <span className="label">Quality System</span>
                  <span className="value">ISO 9001:2015</span>
                </div>
                <div className="sidebar-stat">
                  <span className="label">Workforce</span>
                  <span className="value">110+</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Projects & case studies, answered" />

      <ContactCta />
    </>
  );
}
