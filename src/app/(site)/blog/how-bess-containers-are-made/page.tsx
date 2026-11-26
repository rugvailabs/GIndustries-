import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { getBlogPost } from '@/lib/blog';

const post = getBlogPost('how-bess-containers-are-made')!;

export const metadata = pageMetadata({
  title: post.title,
  description:
    'From CAD model to dispatch — the design, fabrication, and finishing stages a BESS container goes through before it reaches the field.',
  path: '/blog/how-bess-containers-are-made',
  image: '/images/og/bess-solutions.jpg',
  imageAlt: post.imageAlt,
});

const FAQS = [
  {
    q: 'How long does it take to manufacture a BESS container?',
    a: 'Timelines depend on container size, specification complexity, and current shop load — structural simulation and design sign-off happen before fabrication begins, so an accurate schedule is usually only possible once the specification is finalized.',
  },
  {
    q: 'Is structural simulation really necessary before fabrication starts?',
    a: 'Yes. Finite Element Analysis (FEA) tests how the chassis and enclosure will behave under real operating loads before any steel is cut — catching a structural weakness on a CAD model is far cheaper than catching it after fabrication.',
  },
  {
    q: 'Does G Industries handle the full BESS container build in-house?',
    a: 'Yes — design, structural simulation, fabrication, and finishing are all carried out under one roof, so a validated design moves directly into production without being handed off between vendors.',
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
  mainEntityOfPage: `${SITE_URL}/blog/how-bess-containers-are-made`,
};

export default function HowBessContainersAreMadePost() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <PageHero
        image={post.image}
        imageAlt={post.imageAlt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'How BESS Containers Are Made' }]}
        eyebrow="Resources"
        title="How battery energy storage containers are manufactured."
        subtitle="From CAD model to dispatch — the design, fabrication, and finishing stages a BESS container goes through before it is ready to house battery modules in the field."
      />

      <section className="section-pad">
        <div className="container" style={{ maxWidth: '72ch' }}>
          <Reveal>
            <p style={{ fontSize: '1.08rem', color: 'var(--ink-soft)' }}>
              A finished BESS container is the end of a process that starts well before any sheet metal gets cut.
              Here is what that process actually looks like, stage by stage.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>1. Design and structural simulation</h2>
            <p>
              Every BESS container starts as a 3D parametric CAD model, built around the client&apos;s capacity,
              footprint, and site requirements. Before any fabrication begins, the design goes through Finite
              Element Analysis (FEA) — computer-based stress, thermal, and structural simulation that tests how the
              chassis and enclosure will behave under real operating and transport loads. This is where a structural
              weakness gets caught and corrected, while it still only costs a design revision rather than rework on
              finished steel. See <Link href="/engineering-design">Engineering &amp; Design</Link> for more on how
              this stage works.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>2. Chassis fabrication</h2>
            <p>
              Once the design is validated, fabrication starts with the structural base — a steel I-beam chassis cut,
              formed, and welded to carry the full loaded weight of the battery racks it will eventually hold. This
              stage uses the same heavy-duty cutting, forming, and welding capability behind every structural job on
              the shop floor: laser or plasma cutting for dimensional accuracy, CNC press braking for panel forming,
              and MIG, TIG, or ARC welding depending on the joint and material thickness involved. See{' '}
              <Link href="/machinery">Machinery &amp; Equipment</Link> for the specific equipment used at each step.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>3. Enclosure panels and assembly</h2>
            <p>
              With the chassis complete, the outer enclosure panels are formed, welded, and fitted — including the
              access doors, ventilation and cable-entry points, and any thermal-management hardware the specification
              calls for. Panel joints are sealed to control humidity ingress, and mounting points for electrical and
              battery racking are fitted at this stage so there is no on-site drilling or modification once the
              container ships.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>4. Finishing and surface treatment</h2>
            <p>
              Every welded structure moves through surface treatment — cleaning, coating, and finishing — for
              corrosion resistance appropriate to the deployment environment. Fabrication and finishing happen under
              one roof specifically so this step is never skipped or outsourced on a tight schedule.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>5. Quality inspection and dispatch</h2>
            <p>
              Before a container leaves the facility, it goes through dimensional inspection against the original
              CAD specification, backed by a documented ISO 9001:2015 Quality Management System. Only after
              sign-off does the unit move to dispatch. See{' '}
              <Link href="/quality-certifications">Quality &amp; Certifications</Link> for how this inspection stage
              is governed.
            </p>
          </Reveal>

          <Reveal>
            <p style={{ marginTop: 'var(--space-5)' }}>
              G&nbsp;Industries carries out every one of these stages internally — design, simulation, fabrication,
              and finishing — so a validated BESS container design moves directly into production without being
              handed off between separate vendors. See <Link href="/bess-solutions">BESS Solutions</Link> for current
              capability and container sizes.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="BESS container manufacturing, answered" />

      <ContactCta
        heading={<>Ready to build your <br /> BESS container?</>}
        subcopy="Share your project requirements and the team will walk you through design, timeline, and specification."
      />
    </>
  );
}
