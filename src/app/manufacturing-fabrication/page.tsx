import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconSpark, IconDroplet, IconMagnifierCheck } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Manufacturing & Fabrication',
  description:
    'Turnkey heavy fabrication and advanced post-processing at G Industries — structural fabrication, surface treatments, and rigorous QC testing under one roof in Hyderabad.',
  path: '/manufacturing-fabrication',
  image: '/images/IMG_20261021_103924.jpg',
  imageAlt: 'Batch of finished precision stainless steel components ready for dispatch on the G Industries shop floor',
});

const FAQS = [
  {
    q: 'What sheet metal fabrication services does G Industries offer?',
    a: 'G Industries provides heavy-duty structural fabrication — cutting, forming, welding, and assembly — for industrial-grade components and systems, including enclosures, container chassis, and precision brackets, out of its Unit 1 facility in Hyderabad.',
  },
  {
    q: 'Does G Industries handle surface treatment and finishing after fabrication?',
    a: 'Yes. Every fabricated part moves through precision machining, coating, and finishing for corrosion resistance and longevity before it is considered complete — fabrication and finishing both happen under one roof.',
  },
  {
    q: 'What quality checks happen before a fabricated component is delivered?',
    a: 'Every delivery undergoes dimensional inspection, backed by a documented ISO 9001:2015 Quality Management System, before it leaves the shop floor.',
  },
  {
    q: 'Why choose a single-source fabrication partner instead of multiple vendors?',
    a: 'Splitting design, fabrication, and finishing across separate vendors introduces delays, quality gaps, and accountability failures. G Industries keeps every stage — from CAD and simulation through welding and QC — in-house, so projects do not stall on a fragmented supply chain.',
  },
];

const GALLERY = [
  { src: '/images/file_000000001d6c82088552d2bbb4554572.jpg', alt: 'Stacked laser-cut and welded sheet metal enclosures ready for assembly' },
  { src: '/images/file_00000000046c820aa9597951eafb2253.jpg', alt: 'Tinex power press machines and a pillar drilling machine on the shop floor' },
];

export default function ManufacturingFabricationPage() {
  return (
    <>
      <PageHero
        image="/images/IMG_20261021_103924.jpg"
        imageAlt="Batch of finished precision stainless steel components ready for dispatch on the G Industries shop floor"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }, { label: 'Manufacturing & Fabrication' }]}
        eyebrow="Fabrication & Post-Processing"
        title="Turnkey heavy fabrication. Negligible compromise."
        subtitle="High-capability structural fabrication, paired with advanced post-processing, ensures that every deliverable meets the most demanding standards for durability and precision."
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Our Process</div>
            <h2>From raw sheet to finished, inspected component</h2>
            <p>
              Unit 1 at our Hyderabad facility runs heavy-duty welding, cutting, and assembly for industrial-grade
              components and systems — then carries every part through surface treatment and dimensional
              inspection before it leaves the shop floor.
            </p>
          </Reveal>

          <div className="capability-grid reveal-group">
            <Reveal className="capability-card" index={0}>
              <div className="icon"><IconSpark /></div>
              <h3>Structural Fabrication</h3>
              <p>Heavy-duty welding, cutting, and assembly for industrial-grade components and systems.</p>
            </Reveal>
            <Reveal className="capability-card" index={1}>
              <div className="icon"><IconDroplet /></div>
              <h3>Surface Treatments</h3>
              <p>Precision machining, coating, and finishing for corrosion resistance and longevity.</p>
            </Reveal>
            <Reveal className="capability-card" index={2}>
              <div className="icon"><IconMagnifierCheck /></div>
              <h3>Rigorous QC Testing</h3>
              <p>Dimensional inspection before every delivery, backed by a documented Quality Management System.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="split-section">
            <div className="split-media">
              <Image src="/images/IMG_20261021_103942.jpg" alt="Stacked laser-cut and welded sheet metal enclosures ready for assembly" width={2400} height={1800} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>Sheet-metal enclosures staged for assembly, Unit 1</figcaption>
            </div>
            <div className="split-copy">
              <div className="eyebrow">One Partner. Every Capability.</div>
              <h2>Design, simulate, fabricate, finish — under one roof</h2>
              <p>
                G&nbsp;Industries is a single-source, end-to-end manufacturing partner — bridging conceptual
                design, structural simulation, heavy fabrication, and precise post-processing seamlessly, so
                projects never stall waiting on a fragmented supply chain.
              </p>
              <p>
                Batch runs — from switchgear enclosures to BESS container components — move through cutting,
                forming, and welding stations in Unit 1 before final QC sign-off.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">On The Shop Floor</div>
            <h2>Fabrication, in production</h2>
          </Reveal>
          <Reveal className="gallery-grid gallery-pair">
            {GALLERY.map((g) => (
              <figure key={g.src}><div className="gallery-media"><Image src={g.src} alt={g.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div></figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <blockquote className="quality-quote">
              &ldquo;Our relentless pursuit of excellence ensures that every product we deliver is crafted with the
              utmost precision and attention to detail.&rdquo;
              <cite>Quality Policy, G Industries</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Manufacturing & fabrication, answered" />

      <ContactCta image="/images/IMG_20261021_103212.jpg" />
    </>
  );
}
