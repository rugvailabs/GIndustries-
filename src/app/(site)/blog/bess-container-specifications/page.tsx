import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { getBlogPost } from '@/lib/blog';

const post = getBlogPost('bess-container-specifications')!;

export const metadata = pageMetadata({
  title: post.title,
  description:
    'What goes into a BESS container spec — standard sizes, typical capacity ranges, and the structural and safety requirements that matter.',
  path: '/blog/bess-container-specifications',
  image: '/images/og/bess-solutions.jpg',
  imageAlt: post.imageAlt,
});

const FAQS = [
  {
    q: 'What is the standard size of a BESS container?',
    a: 'The two most common form factors are 10-ft and 20-ft ISO-style containers, matching standard shipping container footprints so they integrate with existing lifting, transport, and site-layout equipment. Larger multi-container arrays are typically built from repeated 10-ft or 20-ft units rather than one oversized enclosure.',
  },
  {
    q: 'How much battery capacity fits in a 10-ft vs 20-ft container?',
    a: 'Capacity depends on the battery chemistry and module density chosen by the system integrator, not the container alone — a 20-ft container roughly doubles the usable floor area of a 10-ft unit, so it typically houses proportionally more battery racks, though exact kWh figures vary by project.',
  },
  {
    q: 'Does G Industries manufacture BESS containers to custom specifications?',
    a: 'Yes — every BESS container G Industries builds is fabricated to the client’s structural, thermal, and electrical requirements, in both 10-ft and 20-ft formats. See BESS Solutions for current capability details.',
  },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: `${SITE_URL}${post.image}`,
  datePublished: post.datePublished,
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}/blog/bess-container-specifications`,
};

export default function BessContainerSpecificationsPost() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <PageHero
        image={post.image}
        imageAlt={post.imageAlt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'BESS Container Specifications' }]}
        eyebrow="Resources"
        title="BESS container specifications: sizes, capacity & key requirements."
        subtitle="What actually goes into a spec sheet for a battery energy storage container — and why a purpose-built enclosure is not the same thing as a standard shipping container."
      />

      <section className="section-pad">
        <div className="container" style={{ maxWidth: '72ch' }}>
          <Reveal>
            <p style={{ fontSize: '1.08rem', color: 'var(--ink-soft)' }}>
              A Battery Energy Storage System (BESS) container looks, from the outside, like an oversized shipping
              container. Inside, it is closer to an industrial control room — one that has to survive years of
              continuous vibration, heat cycling, and electrical load without a single structural or thermal
              failure. The specification that governs a BESS enclosure reflects that gap.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>Standard container sizes</h2>
            <p>
              Most BESS deployments use one of two standard footprints, both derived from ISO shipping container
              dimensions so they remain compatible with existing cranes, flatbeds, and site layouts:
            </p>
            <ul style={{ margin: '1rem 0', paddingLeft: '1.4rem', color: 'var(--ink-soft)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>10-ft containers</strong> — compact, high-density footprint suited to smaller commercial or distributed-energy sites where floor space is limited.</li>
              <li><strong>20-ft containers</strong> — roughly double the usable floor area, used for larger industrial or grid-scale deployments that need more battery racks per enclosure.</li>
            </ul>
            <p>
              Larger projects typically scale by adding more 10-ft or 20-ft units side by side rather than building a
              single oversized enclosure — it keeps transport, installation, and maintenance predictable.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>Capacity: why kWh figures vary</h2>
            <p>
              The energy capacity housed inside a given container size is determined by the battery modules and
              system integrator, not the enclosure itself — the same 20-ft footprint can hold meaningfully different
              kWh totals depending on cell chemistry, module density, and rack spacing required for cooling. Anyone
              quoting a single fixed kWh number for &ldquo;a 20-ft BESS container&rdquo; is simplifying; the
              container is the structural and thermal shell, and the real capacity figure comes from the battery
              system integrated into it.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>Structural requirements</h2>
            <p>
              A BESS container has to support the static weight of fully loaded battery racks — often several
              tonnes — for years without deflection or fatigue. That typically means:
            </p>
            <ul style={{ margin: '1rem 0', paddingLeft: '1.4rem', color: 'var(--ink-soft)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Steel I-beam chassis construction</strong>, engineered for continuous heavy structural loads rather than the lighter corrugated floors used in cargo containers.</li>
              <li style={{ marginBottom: '0.5rem' }}>Reinforced lifting and anchor points sized for the loaded (not empty) weight of the unit.</li>
              <li>Corrosion-resistant finishing appropriate to the deployment environment — coastal, industrial, or high-humidity sites each call for different treatment.</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>Thermal management and safety</h2>
            <p>
              Battery modules generate heat under load and are sensitive to it in storage — the enclosure design has
              to manage both. That usually involves climate control sized to the battery chemistry&apos;s operating
              window, sealed and gasketed panel joints to control humidity ingress, and fire-safety provisions
              (detection, suppression, and ventilation) appropriate to the energy density housed inside. None of
              this is optional: it is the difference between a BESS container and a standard shipping container with
              batteries bolted inside it.
            </p>
          </Reveal>

          <Reveal>
            <p style={{ marginTop: 'var(--space-5)' }}>
              G&nbsp;Industries manufactures both 10-ft and 20-ft BESS containers, engineered around structural
              integrity, thermal management, and operational safety under the same ISO 9001:2015 Quality Management
              System applied to every delivery. See <Link href="/bess-solutions">BESS Solutions</Link> for current
              capability details, or <Link href="/manufacturing-fabrication">Manufacturing &amp; Fabrication</Link>{' '}
              for how the structural chassis itself gets built.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="BESS container specs, answered" />

      <ContactCta
        heading={<>Have a BESS container <br /> spec to quote?</>}
        subcopy="Share your capacity, footprint, and site requirements and the team will follow up directly."
      />
    </>
  );
}
