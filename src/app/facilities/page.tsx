import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { pageMetadata } from '@/lib/seo';

const FAQS = [
  {
    q: 'What is the total manufacturing area of the G Industries facility?',
    a: 'The Hyderabad facility spans 13,000 sft (Unit 1, covered fabrication area) and 30,000 sft (Unit 2, BESS container manufacturing), with a further 40,000 sft available for expansion.',
  },
  {
    q: 'What is each unit of the G Industries facility used for?',
    a: 'Unit 1 houses heavy structural fabrication and welding, and Unit 2 is purpose-built for BESS (Battery Energy Storage System) container manufacturing.',
  },
  {
    q: 'Is G Industries currently expanding its manufacturing capacity?',
    a: 'Yes. Unit 2 (BESS Container Manufacturing) is an active expansion project currently being built out alongside the established Unit 1 fabrication shop, with 40,000 sft of additional land available for further growth.',
  },
  {
    q: 'Does the facility have a dedicated quality inspection area?',
    a: 'Yes — the registered plant layout includes a dedicated QA / Final Inspection area alongside Fabrication & Welding, Stores, Office, and Dispatch sections, all organized around a single-source production workflow.',
  },
];

export const metadata = pageMetadata({
  title: 'Infrastructure & Facilities',
  description:
    'A continuously modernized facility in Hyderabad — Unit 1 fabrication and Unit 2 BESS container manufacturing, with 40,000 sft available for expansion.',
  path: '/facilities',
  image: '/images/og/facilities.jpg',
  imageAlt: 'Wide view of the G Industries fabrication shop floor aisle with material handling area',
});

const FACILITY_STATS = [
  { num: '13,000 sft', label: 'Unit 1 Covered Area' },
  { num: '30,000 sft', label: 'Unit 2 — BESS Container Mfg.' },
  { num: '40,000 sft', label: 'Available for Expansion' },
];

const UTILITY_GALLERY = [
  {
    src: '/quality-images/file_00000000e1d88208bd9b5a11439c3e7b.png',
    alt: "Compressed air treatment skid with storage tanks supporting the fabrication shop",
    cap: 'Compressed Air Treatment Skid',
  },
  {
    src: '/quality-images/Factory image.png',
    alt: 'Fabrication shop floor aisle with raw material staging',
    cap: 'Material Handling Aisle, Unit 1',
  },
  {
    src: '/quality-images/Inspection room.png',
    alt: 'Quality Department entrance, alternate view',
    cap: 'Quality Department, Unit 1',
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        image="/quality-images/Factory image.png"
        imageAlt="Wide view of the G Industries fabrication shop floor aisle with material handling area"
        eyebrow="Facilities"
        title="Built for scale. Engineered for precision."
        subtitle="A continuously modernized facility footprint across Hyderabad, purpose-built for heavy fabrication and BESS container manufacturing."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Facilities' }]}
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="facility-stats">
            {FACILITY_STATS.map((s) => (
              <div className="facility-stat" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <p style={{ color: 'var(--ink-soft)', maxWidth: '72ch' }}>
              Unit 2 (BESS Container Manufacturing) is an active expansion project — currently being built out
              to extend G Industries&apos; single-source capability, alongside the established Unit 1 fabrication shop.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container with-sidebar">
          <Reveal>
            <div className="eyebrow">Registered Facility</div>
            <h2>A purpose-built home for precision manufacturing</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem', marginBottom: 'var(--space-3)' }}>
              The registered plant sits on Sy. 710, Gandimaisamma Mandal, Dundigal, Hyderabad, Medchal Malkajgiri,
              Telangana — comprising Shed-2 and Shed-2A, with dedicated Fabrication &amp; Welding, Stores, Office,
              QA / Final Inspection, and Dispatch areas.
            </p>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem' }}>
              Every area of the facility is organized around the single-source workflow — raw material intake,
              fabrication and welding, quality inspection, and dispatch — keeping design, fabrication, and
              finishing under one roof.
            </p>
          </Reveal>
          <Reveal>
            <div className="sidebar-card">
              <h4>At a Glance</h4>
              <div className="sidebar-stat">
                <span className="label">Founded</span>
                <span className="value">2021</span>
              </div>
              <div className="sidebar-stat">
                <span className="label">Workforce</span>
                <span className="value">50+</span>
              </div>
              <div className="sidebar-stat">
                <span className="label">Quality System</span>
                <span className="value">ISO 9001:2015</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">On Site</div>
            <h2>Registered plant layout</h2>
            <p>The facility&apos;s official layout plan and key operational areas.</p>
          </Reveal>
          <Reveal className="facility-gallery">
            <figure>
              <Image
                src="/quality-images/file_0000000053588208905e9a3ed5bd2593.png"
                alt="Official G Industries registered plant layout plaque, showing Shed 2, Shed 2A, and a Finished Goods Storage Area sign"
                width={2400}
                height={1800}
                sizes="(max-width: 900px) 100vw, 43vw"
              />
              <figcaption className="gallery-cap">
                Registered plant layout — Shed-2 / Shed-2A, Sy. 710, Gandimaisamma Mandal, Dundigal
              </figcaption>
            </figure>
            <div className="stack">
              <figure>
                <Image
                  src="/quality-images/Inspection room.png"
                  alt="Quality Department entrance with safety signage at the G Industries facility"
                  width={1800}
                  height={2400}
                  sizes="(max-width: 900px) 50vw, 28vw"
                />
              </figure>
              <figure>
                <Image
                  src="/quality-images/file_00000000c78c8208b0ae8e848644d348.png"
                  alt="Store Room and Managing Director office entrances on the production floor"
                  width={2400}
                  height={1800}
                  sizes="(max-width: 900px) 50vw, 28vw"
                />
              </figure>
            </div>
            <div className="stack">
              <figure>
                <Image
                  src="/quality-images/file_0000000009f08208b341c7d33a036206.png"
                  alt="Fire extinguisher safety signage mounted on the facility wall"
                  width={1800}
                  height={2400}
                  sizes="(max-width: 900px) 50vw, 28vw"
                />
              </figure>
              <figure>
                <Image
                  src="/quality-images/file_00000000bf3c82088057776799a11bec.png"
                  alt="Industrial air compressor and dryer unit supporting the facility's pneumatic systems"
                  width={2400}
                  height={1800}
                  sizes="(max-width: 900px) 50vw, 28vw"
                />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Utilities &amp; Shop Infrastructure</div>
            <h2>Supporting systems behind every delivery</h2>
            <p>Compressed air, material handling, and laser cutting run alongside the full <Link href="/machinery">machinery and equipment list</Link> on the shop floor.</p>
          </Reveal>
          <div className="gallery-grid reveal-group">
            {UTILITY_GALLERY.map((item, i) => (
              <Reveal key={item.src} index={i}>
                <figure>
                  <div className="gallery-media">
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                  </div>
                  <figcaption>{item.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Facilities, answered" />

      <ContactCta />
    </>
  );
}
