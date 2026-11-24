import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { pageMetadata } from '@/lib/seo';

const FAQS = [
  {
    q: 'What laser cutting equipment does G Industries operate?',
    a: 'G Industries runs Senfeng 3 kW fiber laser cutting machines for both sheet and pipe cutting, commissioned in 2024, giving tight-tolerance cutting across a wide range of sheet metal and tubular stock.',
  },
  {
    q: 'What is the tonnage of the CNC press brake used for sheet metal bending?',
    a: 'G Industries operates a Hindustan Hydraulics 100-ton CNC press brake, commissioned in 2024, for precision bending of sheet metal components and enclosures.',
  },
  {
    q: 'What welding processes does G Industries support?',
    a: 'TIG welding (500 Amp AC/DC), MIG welding (400A and 200A, multiple units), ARC welding (200 Amp), and laser welding (1.5 kW, five installed stations) — covering heavy structural welds through to fine, precision joins.',
  },
  {
    q: 'How often does G Industries invest in new manufacturing equipment?',
    a: 'The machine shop has been continuously modernized with new equipment added every year since 2022, including a 50-ton power press and deburring machine commissioned in 2026 — keeping tolerances tight and lead times short.',
  },
];

export const metadata = pageMetadata({
  title: 'Machinery & Equipment',
  description:
    'A continuously modernized machine shop at G Industries — Senfeng laser cutting, CNC press braking, laser welding, power presses and more, anchored by recent 2022–2026 additions.',
  path: '/machinery',
  image: '/images/IMG_20261021_105113.jpg',
  imageAlt: 'Senfeng fiber laser cutting machine on the G Industries shop floor',
});

const MACHINES = [
  {
    src: '/images/IMG_20261021_105113.jpg',
    alt: 'Senfeng fiber laser cutting machine on the shop floor',
    title: 'Sheet & Pipe Laser Cutting',
    meta: 'Senfeng, 3 kW · 2024',
  },
  {
    src: '/images/IMG_20261021_103106.jpg',
    alt: 'Hindustan Hydraulics Swift 100-31 CNC press brake machine',
    title: 'CNC Press Brake',
    meta: 'Hindustan, 100T · 2024',
  },
  {
    src: '/images/IMG_20261021_103828.jpg',
    alt: 'IPG Photonics LightWeld handheld laser welding system in use',
    title: 'Laser Welding',
    meta: '1.5 kW · 2023, 25 & 26',
  },
  {
    src: '/images/file_00000000046c820aa9597951eafb2253.jpg',
    alt: 'Tinex power press machines and a pillar drilling machine on the shop floor',
    title: 'Power Press & Drilling',
    meta: '50T / 20T · Ø36mm · 2024–26',
  },
  {
    src: '/images/IMG_20261021_103124.jpg',
    alt: 'Tinex power press machines beside a Pipe Rolling Machine (PR/001) station',
    title: 'Power Press & Pipe Rolling',
    meta: 'Pipe Rolling, PR/001',
  },
  {
    src: '/images/IMG_20261021_103749.jpg',
    alt: 'Row of laser welding stations in the LW/002 work area',
    title: 'Laser Welding Stations',
    meta: '5 Nos. installed',
  },
  {
    src: '/images/IMG_20261021_104031.jpg',
    alt: 'MIG and TIG welding bay with gas cylinders',
    title: 'TIG / MIG / ARC Welding',
    meta: '500A AC/DC · 400A · 200A',
  },
  {
    src: '/images/IMG_20261021_103245.jpg',
    alt: 'Industrial air compressor and dryer unit supporting the fabrication shop',
    title: 'Compressed Air System',
    meta: 'Utility infrastructure',
  },
];

const SPEC_ROWS: [string, string, string][] = [
  ['Sheet Laser Cutting', 'Senfeng, 3 kW', '2024'],
  ['Pipe Laser Cutting', 'Senfeng, 3 kW', '2024'],
  ['Plasma Cutting', 'Power Plus, 100mm', '2020'],
  ['CNC Press Brake', 'Hindustan, 100T', '2024'],
  ['Sheet Rolling', 'Capacity 5mm', '2022'],
  ['Pipe Bending', 'Gujarath, 40mm', '2024'],
  ['Deburring Machine', '75mm Thickness', '2026'],
  ['Laser Welding', '5 Nos., 1.5 kW', '2023, 25 & 26'],
  ['TIG Welding Set', '500 Amp AC/DC', '2023'],
  ['MIG Welding', '5 Nos., 400 A', '2023'],
  ['MIG Welding', '2 Nos., 200 Amp', '2025'],
  ['ARC Welding', '200 Amp', '2023'],
  ['Power Press', '50 Ton', '2026'],
  ['Power Press', '20 Ton', '2025'],
  ['Fly Press', '10', '2024'],
  ['Drilling Machine', 'Ø36 mm', '2025'],
];

export default function MachineryPage() {
  return (
    <>
      <PageHero
        image="/images/IMG_20261021_105113.jpg"
        imageAlt="Senfeng fiber laser cutting machine on the G Industries shop floor, with nesting layout visible on the control screen"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }, { label: 'Machinery & Equipment' }]}
        eyebrow="Manufacturing Equipment"
        title="Modern machinery. Precision-grade output."
        subtitle="A continuously modernized machine shop — anchored by recent (2022–2026) additions — gives G Industries the range to cut, weld, form, and finish to exacting tolerances."
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">On the Shop Floor</div>
            <h2>A continuously modernized machine shop</h2>
            <p>
              Anchored by recent (2022–2026) additions, this equipment base gives G&nbsp;Industries the range to
              cut, weld, form, and finish to exacting tolerances across every unit.
            </p>
          </Reveal>

          <div className="machine-grid reveal-group">
            {MACHINES.map((m, i) => (
              <Reveal key={m.title} className="machine-card" index={i}>
                <figure>
                  <Image src={m.src} alt={m.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
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
                {SPEC_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td className="yr">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Machinery & equipment, answered" surface />

      <ContactCta image="/images/IMG_20261021_103212.jpg" />
    </>
  );
}
