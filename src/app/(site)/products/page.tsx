import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
import { IconClock, IconStructural, IconCube, IconLayers } from '@/components/icons';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { PRODUCTS_DEFAULTS } from '@/content/pages/products';

export const metadata = pageMetadata({
  title: 'Shop — BESS Containers & Precision Components',
  description:
    'G Industries is building a dedicated product catalog — BESS containers, precision components, and custom enclosures, available now as custom fabrication.',
  path: '/products',
  image: '/images/og/products-shop.jpg',
  imageAlt: 'Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit',
});

const UPCOMING_ICONS = [IconStructural, IconCube, IconLayers];

export default async function ProductsPage() {
  const content = await getPageContent('products', PRODUCTS_DEFAULTS);
  const { hero, catalog, comingSoon, upcoming, faqs, ctaHeadingLine1, ctaHeadingLine2, ctaHeadingEm, ctaSubcopy } = content;

  const serviceJsonLd = {
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
      itemListElement: upcoming.map((item, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: { '@type': 'Service', name: item.title, description: item.copy, url: `${SITE_URL}${item.href}` },
      })),
    },
  };

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Shop' }]}
        editSlug="products"
        imagePath="hero.image"
        eyebrow={<EditableText slug="products" path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug="products" path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug="products" path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow"><EditableText slug="products" path="catalog.eyebrow">{catalog.eyebrow}</EditableText></div>
            <h2><EditableText slug="products" path="catalog.heading">{catalog.heading}</EditableText></h2>
            <p><EditableText slug="products" path="catalog.intro" multiline>{catalog.intro}</EditableText></p>
          </Reveal>
          <div className="product-grid reveal-group">
            {catalog.items.map((item, i) => (
              <Reveal className="product-card" index={i} key={i}>
                <figure>
                  <EditableImage
                    slug="products"
                    path={`catalog.items.${i}.image`}
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </figure>
                <div className="pc-body">
                  <div className="pc-tag"><EditableText slug="products" path={`catalog.items.${i}.tag`}>{item.tag}</EditableText></div>
                  <h3><EditableText slug="products" path={`catalog.items.${i}.name`}>{item.name}</EditableText></h3>
                  <p><EditableText slug="products" path={`catalog.items.${i}.description`} multiline>{item.description}</EditableText></p>
                  <Link href="/contact#contact" className="pc-enquire">Enquire <span aria-hidden>→</span></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head center" style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Coming Soon</div>
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}>
              <span style={{ width: 32, height: 32, color: 'var(--gold-dim)', display: 'inline-flex' }}><IconClock /></span>
              <EditableText slug="products" path="comingSoon.heading">{comingSoon.heading}</EditableText>
            </h2>
            <p><EditableText slug="products" path="comingSoon.copy" multiline>{comingSoon.copy}</EditableText></p>
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
            {upcoming.map((item, i) => {
              const Icon = UPCOMING_ICONS[i] ?? UPCOMING_ICONS[UPCOMING_ICONS.length - 1];
              return (
                <Reveal className="capability-card" index={i} key={i}>
                  <div className="icon"><Icon /></div>
                  <h3><EditableText slug="products" path={`upcoming.${i}.title`}>{item.title}</EditableText></h3>
                  <p style={{ marginBottom: 'var(--space-3)' }}><EditableText slug="products" path={`upcoming.${i}.copy`} multiline>{item.copy}</EditableText></p>
                  <Link href={item.href} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-950)' }}>
                    <EditableText slug="products" path={`upcoming.${i}.linkLabel`}>{item.linkLabel}</EditableText> →
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection
        items={faqs.map((f, i) => ({
          q: <EditableText slug="products" path={`faqs.${i}.q`}>{f.q}</EditableText>,
          qText: f.q,
          a: <EditableText slug="products" path={`faqs.${i}.a`} multiline>{f.a}</EditableText>,
          aText: f.a,
        }))}
        eyebrow="Common Questions"
        title="Products, answered"
      />

      <ContactCta
        heading={
          <>
            <EditableText slug="products" path="ctaHeadingLine1">{ctaHeadingLine1}</EditableText>
            <br />
            <EditableText slug="products" path="ctaHeadingLine2">{ctaHeadingLine2}</EditableText>{' '}
            <em><EditableText slug="products" path="ctaHeadingEm">{ctaHeadingEm}</EditableText></em>
          </>
        }
        subcopy={<EditableText slug="products" path="ctaSubcopy" multiline>{ctaSubcopy}</EditableText>}
      />
    </>
  );
}
