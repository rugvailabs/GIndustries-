import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { MACHINERY_DEFAULTS } from '@/content/pages/machinery';

export const metadata = pageMetadata({
  title: 'Machinery & Equipment',
  description:
    'A continuously modernized machine shop — Senfeng laser cutting, CNC press braking, laser welding and power presses, anchored by recent 2022–2026 additions.',
  path: '/machinery',
  image: '/quality-images/file_000000009e1c8208ac1fd4174e502cda.png',
  imageAlt: 'Senfeng fiber laser cutting machine on the G Industries shop floor',
});

export default async function MachineryPage() {
  const content = await getPageContent('machinery', MACHINERY_DEFAULTS);
  const { hero, intro, machines, specRows, faqs, ctaImage } = content;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }, { label: 'Machinery & Equipment' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">On the Shop Floor</div>
            <h2>A continuously modernized machine shop</h2>
            <p>
              {intro} — powering the <Link href="/manufacturing-fabrication">structural fabrication</Link> and{' '}
              <Link href="/engineering-design">engineering &amp; design</Link> work carried out at the{' '}
              <Link href="/facilities">Hyderabad facility</Link>.
            </p>
          </Reveal>

          <div className="machine-grid reveal-group">
            {machines.map((m, i) => (
              <Reveal key={i} className="machine-card" index={i}>
                <figure>
                  <Image src={m.image.src} alt={m.image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                </figure>
                <div className="mc-body">
                  <h3>{m.title}</h3>
                  <div className="mc-meta">{m.meta}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="section-head" style={{ marginTop: 'var(--space-6)' }}>
            <div className="eyebrow">Full Equipment Register</div>
            <h2>Every machine, specified</h2>
          </Reveal>

          <Reveal className="spec-table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Specification</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.equipment}</td>
                    <td>{row.spec}</td>
                    <td className="yr">{row.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="Machinery & equipment, answered" surface />

      <ContactCta image={ctaImage.src} />
    </>
  );
}
