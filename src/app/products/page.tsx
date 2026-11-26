import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconClock, IconStructural, IconCube, IconLayers } from '@/components/icons';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Shop — BESS Containers & Precision Components',
  description:
    'G Industries is building a dedicated product catalog — BESS containers, precision components, and custom enclosures, available now as custom fabrication.',
  path: '/products',
  image: '/images/og/products-shop.jpg',
  imageAlt: 'Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit',
});

const UPCOMING = [
  {
    Icon: IconStructural,
    title: 'BESS Containers',
    copy: '10-ft and 20-ft battery energy storage enclosures, engineered for structural integrity and thermal management.',
    href: '/bess-solutions',
    linkLabel: 'See BESS Solutions',
  },
  {
    Icon: IconCube,
    title: 'Precision Machined Components',
    copy: 'Brackets, housings, and formed assemblies turned and fabricated to exact tolerances.',
    href: '/manufacturing-fabrication',
    linkLabel: 'See Manufacturing & Fabrication',
  },
  {
    Icon: IconLayers,
    title: 'Custom Enclosures & Panels',
    copy: 'Modular enclosures and switchgear panels for electronics, EV, and industrial applications.',
    href: '/engineering-design',
    linkLabel: 'See Engineering & Design',
  },
];

const FAQS = [
  {
    q: 'Is the G Industries product catalog available yet?',
    a: "Not yet — it's in development. G Industries currently operates as a single-source custom fabrication partner, and a dedicated, orderable product catalog is being built out alongside the facility's expansion.",
  },
  {
    q: 'Can I still get a BESS container or custom component built today?',
    a: 'Yes — G Industries already designs and manufactures BESS containers, precision components, and custom enclosures to order. Reach out with your project details and the team will follow up directly.',
  },
  {
    q: 'How will I know when the product catalog launches?',
    a: 'Check back on this page, or get in touch — the team can keep you posted as standard product lines become available for order.',
  },
];

const SERVICE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom Fabrication & Manufacturing',
  name: 'G Industries Product Catalog',
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  areaServed: 'IN',
  description:
    'BESS containers, precision-machined components, and custom enclosures, available today as custom fabrication engagements ahead of a standard orderable catalog.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Products in development',
    itemListElement: UPCOMING.map((item, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: { '@type': 'Service', name: item.title, description: item.copy, url: `${SITE_URL}${item.href}` },
    })),
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <PageHero
        image="/quality-images/file_000000005b9481fabfbaf36350a99db5 (1).png"
        imageAlt="Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Shop' }]}
        eyebrow="Shop"
        title="Our product catalog is taking shape."
        subtitle="A dedicated lineup of ready-to-order products is in development. In the meantime, every item below is already available as a custom fabrication engagement."
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head center" style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Coming Soon</div>
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}>
              <span style={{ width: 32, height: 32, color: 'var(--gold-dim)', display: 'inline-flex' }}><IconClock /></span>
              A standard product catalog, built for ordering online
            </h2>
            <p>
              G&nbsp;Industries has spent years perfecting BESS containers, precision components, and custom
              enclosures for named clients. That same engineering is now being packaged into a catalog of
              standard, orderable products — launching here soon.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">In Development</div>
            <h2>What&apos;s coming to the catalog</h2>
            <p>Available today as custom fabrication — on the roadmap as standard, orderable products.</p>
          </Reveal>
          <div className="capability-grid reveal-group">
            {UPCOMING.map((item, i) => (
              <Reveal className="capability-card" index={i} key={item.title}>
                <div className="icon"><item.Icon /></div>
                <h3>{item.title}</h3>
                <p style={{ marginBottom: 'var(--space-3)' }}>{item.copy}</p>
                <Link href={item.href} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-950)' }}>
                  {item.linkLabel} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Products, answered" />

      <ContactCta
        heading={
          <>
            Need it before the catalog
            <br />
            launches? <em>Talk to us.</em>
          </>
        }
        subcopy="Every product in development is already available as a custom fabrication engagement — share your requirements and the team will follow up directly."
      />
    </>
  );
}
