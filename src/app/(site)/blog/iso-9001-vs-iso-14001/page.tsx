import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { getBlogPost } from '@/lib/blog';

const post = getBlogPost('iso-9001-vs-iso-14001')!;

export const metadata = pageMetadata({
  title: post.title,
  description:
    'ISO 9001 certifies quality management; ISO 14001 certifies environmental management. Here is what each actually covers for manufacturers.',
  path: '/blog/iso-9001-vs-iso-14001',
  image: '/images/og/quality-certifications.jpg',
  imageAlt: post.imageAlt,
});

const FAQS = [
  {
    q: 'Is ISO 9001 or ISO 14001 more important for a fabrication supplier?',
    a: 'They answer different questions, so "more important" depends on what a buyer is evaluating — ISO 9001 speaks to whether a supplier’s processes reliably produce conforming parts; ISO 14001 speaks to how that supplier manages its environmental impact. Many buyers require ISO 9001 as a baseline and treat ISO 14001 as an additional differentiator.',
  },
  {
    q: 'Can a company hold both ISO 9001 and ISO 14001 at once?',
    a: 'Yes — the two standards share a common high-level structure (Annex SL) specifically so organizations can run them as an integrated management system rather than two unrelated programs.',
  },
  {
    q: 'Is G Industries ISO 9001 certified?',
    a: 'Yes — G Industries holds ISO 9001:2015 Quality Management System certification, covering all fabrication works and the manufacture of electronic and electrical enclosures. See Quality & Certifications for the certificate number and validity date.',
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
  mainEntityOfPage: `${SITE_URL}/blog/iso-9001-vs-iso-14001`,
};

export default function Iso9001VsIso14001Post() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <PageHero
        image={post.image}
        imageAlt={post.imageAlt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'ISO 9001 vs ISO 14001' }]}
        eyebrow="Resources"
        title="ISO 9001 vs ISO 14001: what's the difference for manufacturers?"
        subtitle="Two of the most common ISO certifications a fabrication partner can hold — one governs quality management, the other environmental management. Here is what each actually covers."
      />

      <section className="section-pad">
        <div className="container" style={{ maxWidth: '72ch' }}>
          <Reveal>
            <p style={{ fontSize: '1.08rem', color: 'var(--ink-soft)' }}>
              Both ISO 9001 and ISO 14001 are management-system standards published by the International Organization
              for Standardization, and both get referenced constantly in manufacturing and procurement — but they
              certify two completely different things.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>ISO 9001: Quality Management System</h2>
            <p>
              ISO 9001 certifies that an organization has a documented, consistently applied Quality Management
              System (QMS) — covering how it plans work, controls processes, inspects output, handles
              non-conformances, and drives continual improvement. For a fabrication supplier, this is what a buyer is
              relying on when they expect dimensional accuracy, on-time delivery, and consistent output across
              repeat orders, rather than quality that depends on which shift happened to run the job.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>ISO 14001: Environmental Management System</h2>
            <p>
              ISO 14001 certifies an Environmental Management System (EMS) — how an organization identifies,
              controls, and reduces the environmental impact of its operations, from waste and emissions handling to
              resource use and regulatory compliance. It does not certify product quality at all; it certifies how
              responsibly the facility producing that product is run.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>Why the distinction matters when choosing a supplier</h2>
            <p>
              A supplier can be excellent at one and not certified in the other — ISO 9001 without ISO 14001 is
              common among smaller fabricators, and says nothing bad about their quality processes. When evaluating a
              manufacturing partner, it helps to be specific about which claim is actually being verified: ISO 9001
              certification is independent verification of process and output consistency; it is not an
              environmental claim, and should not be read as one.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>They share a common structure</h2>
            <p>
              Since 2015, both standards have followed the same high-level structure (Annex SL), which is why many
              organizations run them as a single integrated management system rather than two disconnected programs
              — the overlap in documentation, internal audit, and management-review requirements makes holding both
              more efficient than pursuing them separately.
            </p>
          </Reveal>

          <Reveal>
            <p style={{ marginTop: 'var(--space-5)' }}>
              G&nbsp;Industries holds ISO 9001:2015 Quality Management System certification, independently verified
              and covering all fabrication works and the manufacture of electronic and electrical enclosures. See{' '}
              <Link href="/quality-certifications">Quality &amp; Certifications</Link> for the certificate number,
              validity date, and full registration details.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="ISO certifications, answered" />

      <ContactCta
        heading={<>Need a certified <br /> manufacturing partner?</>}
        subcopy="Share your project requirements and the team will follow up with capability and compliance details."
      />
    </>
  );
}
