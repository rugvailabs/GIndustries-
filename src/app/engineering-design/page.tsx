import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconCube, IconWave, IconStructural } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Engineering & Design',
  description:
    'Advanced CAD modeling, finite element analysis and structural simulation — how G Industries validates every design before a single piece of metal is cut.',
  path: '/engineering-design',
  image: '/images/IMG_20261021_104343.jpg',
  imageAlt: 'Precision-machined stainless steel bracket engineered at G Industries',
});

const FAQS = [
  {
    q: 'Does G Industries offer 3D CAD modeling and engineering design services?',
    a: 'Yes. G Industries provides full 3D parametric CAD modeling for complex assemblies, custom enclosures, and structural systems, engineering every component to the exact tolerances it needs to hold in service.',
  },
  {
    q: 'What is Finite Element Analysis (FEA), and why does it matter before fabrication?',
    a: 'FEA is computer-based stress, thermal, and structural simulation that tests how a design will behave under real operating conditions. G Industries runs FEA on every design before cutting metal, catching weaknesses early and reducing costly rework after fabrication has begun.',
  },
  {
    q: 'Can G Industries validate a design under real-world load and environmental conditions?',
    a: 'Yes — structural simulation and real-world load-case modelling are standard practice, particularly for severe-duty applications such as BESS enclosures and railway components that must perform reliably under extreme operational and environmental stress.',
  },
  {
    q: 'Is engineering and design handled in-house at G Industries?',
    a: 'Yes. Design and simulation are carried out internally, under the same roof as fabrication and finishing — so a validated CAD model moves directly into production without being handed off to a separate vendor. See Manufacturing & Fabrication for what happens after a design is approved.',
  },
];

const GALLERY = [
  { src: '/images/IMG_20261021_104343.jpg', alt: 'Precision-machined stainless steel bracket with sleeve, alternate angle' },
  { src: '/images/IMG_20261021_104353.jpg', alt: 'Precision-machined stainless steel T-bracket with sensor port cutout' },
  { src: '/images/IMG_20261021_104535.jpg', alt: 'Flanged cone component, top-down view showing bolt pattern' },
  { src: '/images/IMG_20261021_104554.jpg', alt: 'Flanged cone component with square mounting bracket and bolts' },
  { src: '/images/IMG_20261021_104750.jpg', alt: 'Formed steel bowl-shaped bracket component, side angle' },
  { src: '/images/IMG_20261021_104831.jpg', alt: 'Welded stainless steel mesh grille disc component, overhead view' },
];

export default function EngineeringDesignPage() {
  return (
    <>
      <PageHero
        image="/images/IMG_20261021_104343.jpg"
        imageAlt="Precision-machined stainless steel bracket engineered at G Industries"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }, { label: 'Engineering & Design' }]}
        eyebrow="Our Advantage"
        title="From complex concepts to rugged realities."
        subtitle="Every G Industries project begins at the design desk — full 3D modeling and simulation validate performance long before fabrication starts."
      />

      <section className="section-pad">
        <div className="container">
          <Reveal className="split-section">
            <div className="split-copy">
              <div className="eyebrow">Design</div>
              <h2>Advanced CAD Modeling</h2>
              <p>
                Full 3D parametric design for complex assemblies, custom enclosures, and structural systems —
                engineered to exact specifications. Every component is modeled to the tolerances it must hold in
                service, not approximated on the shop floor.
              </p>
              <p>
                This discipline underpins every capability that follows: the BESS container chassis, switchgear
                enclosures, and precision brackets shown across this site all begin as a fully specified CAD model.
              </p>
            </div>
            <div className="split-media">
              <Image src="/images/IMG_20261021_104523.jpg" alt="Fabricated stainless steel cone enclosure with mounting flange, engineered to a precise bolt pattern" width={1800} height={2400} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>Enclosure housing — flange and bolt pattern engineered to spec</figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="split-section reverse">
            <div className="split-copy">
              <div className="eyebrow">Simulate</div>
              <h2>Finite Element Analysis &amp; Structural Simulation</h2>
              <p>
                Stress, thermal, and structural simulation validates every design before a single piece of metal is
                cut — reducing risk and rework. Real-world load-case modelling ensures performance under extreme
                operational and environmental conditions.
              </p>
              <p>
                For severe-duty applications like BESS enclosures and railway components, this step catches design
                issues that would otherwise surface only after fabrication — when they are far more expensive to fix.
              </p>
            </div>
            <div className="split-media">
              <Image src="/images/IMG_20261021_104739.jpg" alt="Formed steel bowl-shaped bracket component engineered for load-bearing performance" width={1800} height={2400} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>Formed bracket — geometry shaped for structural load paths</figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Our Advantage</div>
            <h2>Design, simulate, then fabricate</h2>
            <p>One partner carries every design through to a validated, fabrication-ready specification.</p>
          </Reveal>
          <div className="capability-grid reveal-group">
            <Reveal className="capability-card" index={0}>
              <div className="icon"><IconCube /></div>
              <h3>Advanced CAD Modeling</h3>
              <p>Full 3D parametric design for complex assemblies, custom enclosures, and structural systems.</p>
            </Reveal>
            <Reveal className="capability-card" index={1}>
              <div className="icon"><IconWave /></div>
              <h3>Finite Element Analysis</h3>
              <p>Stress, thermal, and structural simulation validates every design before fabrication begins.</p>
            </Reveal>
            <Reveal className="capability-card" index={2}>
              <div className="icon"><IconStructural /></div>
              <h3>Structural Simulation</h3>
              <p>Real-world load-case modelling for performance under extreme operational conditions.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad precision-strip">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="eyebrow on-dark">Engineering Output</div>
            <h2>Precision carried from screen to shop floor</h2>
          </Reveal>
          <Reveal className="gallery-grid">
            {GALLERY.map((g) => (
              <figure key={g.src}><div className="gallery-media"><Image src={g.src} alt={g.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div></figure>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Engineering & design, answered" />

      <ContactCta image="/images/IMG_20261021_104523.jpg" />
    </>
  );
}
