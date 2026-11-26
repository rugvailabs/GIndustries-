import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
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
        eyebrow={<EditableText slug="machinery" path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug="machinery" path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug="machinery" path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
        editSlug="machinery"
        imagePath="hero.image"
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">On the Shop Floor</div>
            <h2>A continuously modernized machine shop</h2>
            <p>
              <EditableText slug="machinery" path="intro" multiline>{intro}</EditableText> — powering the <Link href="/manufacturing-fabrication">structural fabrication</Link> and{' '}
              <Link href="/engineering-design">engineering &amp; design</Link> work carried out at the{' '}
              <Link href="/facilities">Hyderabad facility</Link>.
            </p>
          </Reveal>

          <div className="machine-grid reveal-group">
            {machines.map((m, i) => (
              <Reveal key={i} className="machine-card" index={i}>
                <figure>
                  <EditableImage slug="machinery" path={`machines.${i}.image`} src={m.image.src} alt={m.image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                </figure>
                <div className="mc-body">
                  <h3><EditableText slug="machinery" path={`machines.${i}.title`}>{m.title}</EditableText></h3>
                  <div className="mc-meta"><EditableText slug="machinery" path={`machines.${i}.meta`}>{m.meta}</EditableText></div>
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
                    <td><EditableText slug="machinery" path={`specRows.${i}.equipment`}>{row.equipment}</EditableText></td>
                    <td><EditableText slug="machinery" path={`specRows.${i}.spec`}>{row.spec}</EditableText></td>
                    <td className="yr"><EditableText slug="machinery" path={`specRows.${i}.year`}>{row.year}</EditableText></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <FAQSection
        items={faqs.map((f, i) => ({
          q: <EditableText slug="machinery" path={`faqs.${i}.q`}>{f.q}</EditableText>,
          qText: f.q,
          a: <EditableText slug="machinery" path={`faqs.${i}.a`} multiline>{f.a}</EditableText>,
          aText: f.a,
        }))}
        eyebrow="Common Questions"
        title="Machinery & equipment, answered"
        surface
      />

      <ContactCta image={ctaImage.src} editSlug="machinery" imagePath="ctaImage" />
    </>
  );
}
