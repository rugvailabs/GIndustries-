import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconStructural, IconShieldCheck, IconDroplet } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';

const FAQS = [
  {
    q: 'What is a BESS container, and why does it need specialized fabrication?',
    a: 'A BESS (Battery Energy Storage System) container is a structural enclosure that houses battery modules for grid-scale or industrial energy storage. Because it must manage heat, protect sensitive electronics, and carry significant structural load over years of continuous duty, it requires purpose-engineered fabrication rather than a standard shipping container.',
  },
  {
    q: 'What container sizes does G Industries manufacture for battery energy storage systems?',
    a: 'G Industries manufactures both 10-ft compact BESS containers for smaller, high-performance deployments and 20-ft full-scale BESS containers for large industrial energy-storage infrastructure.',
  },
  {
    q: 'What engineering factors go into a G Industries BESS container design?',
    a: 'Every BESS container is engineered around three priorities: structural integrity (steel I-beam chassis construction built for heavy, continuous loads), thermal management (enclosure design suited to battery heat demands), and operational safety (fabricated and inspected under the same ISO 9001:2015 Quality Management System as all other work).',
  },
  {
    q: 'Has G Industries delivered BESS containers for a real energy storage project?',
    a: 'Yes — G Industries manufactured custom 10-foot and 20-foot BESS containers for Medha Servo Drives, a project spanning large-scale energy storage, railways, and EV applications.',
  },
];

export const metadata: Metadata = pageMetadata({
  title: 'BESS Solutions',
  description:
    'G Industries specializes in heavily optimized enclosure systems for Battery Energy Storage Systems (BESS) — 10-ft and 20-ft containers engineered for thermal management, structural integrity, and operational safety.',
  path: '/bess-solutions',
  image: '/images/file_00000000686081fa8ef0d50efda247d2.jpg',
  imageAlt: 'Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit',
});

export default function BessSolutionsPage() {
  return (
    <>
      <PageHero
        image="/images/file_00000000686081fa8ef0d50efda247d2.jpg"
        imageAlt="Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }, { label: 'BESS Solutions' }]}
        eyebrow="Key Specialization"
        title="BESS container systems, engineered for severe duty."
        subtitle="Custom-engineered container ecosystems for Battery Energy Storage Systems (BESS) and severe-duty industrial applications — engineered for thermal management, structural integrity, and operational safety."
      />

      <section className="section-pad">
        <div className="container bess-grid">
          <Reveal className="bess-media">
            <figure>
              <Image src="/images/file_00000000686081fa8ef0d50efda247d2.jpg" alt="Large welded steel container chassis under fabrication, with G Industries signage visible" width={1448} height={1086} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>Container structural base under fabrication — Unit 3, BESS Manufacturing</figcaption>
            </figure>
            <figure>
              <Image src="/images/file_000000005b9481fabfbaf36350a99db5.jpg" alt="Steel I-beam chassis frame for a battery energy storage container, raised on support legs" width={1448} height={1086} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>I-beam chassis, engineered for heavy structural loads</figcaption>
            </figure>
          </Reveal>
          <Reveal className="bess-copy">
            <div className="eyebrow">Custom-Engineered Container Ecosystems</div>
            <h2>Built for thermal management and structural integrity</h2>
            <p>
              G&nbsp;Industries specializes in heavily optimized enclosure systems for Battery Energy Storage
              Systems (BESS) and severe-duty industrial applications — engineered for thermal management,
              structural integrity, and operational safety.
            </p>
            <div className="bess-specs">
              <div className="bess-spec">
                <div className="tag">10 ft</div>
                <div>
                  <h4>Compact BESS Containers</h4>
                  <p>Compact, high-performance energy storage enclosures.</p>
                </div>
              </div>
              <div className="bess-spec">
                <div className="tag">20 ft</div>
                <div>
                  <h4>Full-Scale BESS Containers</h4>
                  <p>Full-scale industrial BESS infrastructure solutions.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Engineering Focus</div>
            <h2>Every container is a structural project, not a box</h2>
          </Reveal>
          <div className="capability-grid reveal-group">
            <Reveal className="capability-card" index={0}>
              <div className="icon"><IconStructural /></div>
              <h3>Structural Integrity</h3>
              <p>Steel I-beam chassis construction engineered for heavy structural loads and long service life.</p>
            </Reveal>
            <Reveal className="capability-card" index={1}>
              <div className="icon"><IconDroplet /></div>
              <h3>Thermal Management</h3>
              <p>Enclosure design accounts for the thermal demands of battery energy storage in continuous duty.</p>
            </Reveal>
            <Reveal className="capability-card" index={2}>
              <div className="icon"><IconShieldCheck /></div>
              <h3>Operational Safety</h3>
              <p>Built and inspected under the same ISO 9001:2015 Quality Management System as every delivery.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Recent Track Record</div>
            <h2>Delivered: BESS Containers for Medha Servo Drives</h2>
          </Reveal>
          <Reveal className="project-list">
            <div className="project-row">
              <div className="pnum">01</div>
              <div>
                <div className="client">Medha Servo Drives</div>
                <h3>BESS Container, Railways &amp; EV</h3>
              </div>
              <p className="desc">
                Manufactured custom 10-foot and 20-foot BESS Containers for large-scale energy storage deployments.
              </p>
              <figure>
                <div className="figure-media">
                  <Image src="/images/file_000000005b9481fabfbaf36350a99db5.jpg" alt="Steel I-beam chassis frame for a battery energy storage container" fill sizes="(max-width: 900px) 100vw, 25vw" />
                </div>
                <figcaption>I-beam chassis, Unit 3</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="facility-stat" style={{ border: '1px solid var(--line)', maxWidth: 420, textAlign: 'left', padding: 'var(--space-4)' }}>
            <div className="stat-num">30,000 sft</div>
            <div className="stat-label">Unit 3 — BESS Container Manufacturing (active expansion)</div>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="BESS containers, answered" />

      <ContactCta image="/images/file_00000000686081fa8ef0d50efda247d2.jpg" />
    </>
  );
}
