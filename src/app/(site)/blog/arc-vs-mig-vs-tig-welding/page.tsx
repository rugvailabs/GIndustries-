import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { getBlogPost } from '@/lib/blog';

const post = getBlogPost('arc-vs-mig-vs-tig-welding')!;

export const metadata = pageMetadata({
  title: post.title,
  description:
    'A plain-language guide to ARC, MIG, and TIG welding — what each process does best, and when a fabricator chooses one over the others.',
  path: '/blog/arc-vs-mig-vs-tig-welding',
  image: '/images/og/engineering-design.jpg',
  imageAlt: post.imageAlt,
});

const FAQS = [
  {
    q: 'Which welding process is strongest?',
    a: 'All three can produce strong, code-compliant welds when used correctly — strength depends more on joint design, material, and welder skill than the process itself. The real question is usually which process suits the material thickness, finish requirement, and production volume.',
  },
  {
    q: 'Which welding process is fastest for production work?',
    a: 'MIG welding is generally the fastest of the three for medium-thickness sheet metal and structural work, since the wire feed is continuous — this is why it is the default choice for high-volume fabrication.',
  },
  {
    q: 'What welding equipment does G Industries operate?',
    a: 'TIG welding (500 Amp AC/DC), MIG welding (400A and 200A, multiple units), ARC welding (200 Amp), and laser welding (1.5 kW, five installed stations) — covering heavy structural welds through to fine, precision joins. See Machinery & Equipment for details.',
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
  mainEntityOfPage: `${SITE_URL}/blog/arc-vs-mig-vs-tig-welding`,
};

export default function ArcVsMigVsTigPost() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <PageHero
        image={post.image}
        imageAlt={post.imageAlt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'ARC vs MIG vs TIG Welding' }]}
        eyebrow="Resources"
        title="ARC vs MIG vs TIG welding: what's the difference?"
        subtitle="Three welding processes, three very different jobs. A plain-language guide to when a fabricator reaches for stick, wire-fed, or tungsten-arc welding — and why."
      />

      <section className="section-pad">
        <div className="container" style={{ maxWidth: '72ch' }}>
          <Reveal>
            <p style={{ fontSize: '1.08rem', color: 'var(--ink-soft)' }}>
              ARC, MIG, and TIG are the three welding processes behind most fabrication work, and the choice between
              them is rarely about which is &ldquo;best&rdquo; — it is about matching the process to the material,
              joint, and finish the job actually calls for.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>ARC welding (Shielded Metal Arc Welding / &ldquo;stick&rdquo;)</h2>
            <p>
              ARC welding strikes an electric arc between a consumable, flux-coated electrode and the workpiece —
              the flux coating burns off to shield the weld pool from contamination, so no separate shielding gas is
              needed. That makes it rugged and well suited to outdoor or less-controlled environments, thicker
              structural steel, and heavy-duty repair work. It is slower and leaves rougher, less precise welds than
              MIG or TIG, which is why it is typically chosen for strength and durability over finish.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>MIG welding (Gas Metal Arc Welding)</h2>
            <p>
              MIG welding feeds a continuous wire electrode through a welding gun, shielded by an externally supplied
              inert gas. The continuous feed makes it considerably faster than ARC or TIG, and the shielding gas
              produces a cleaner weld with less spatter — which is why MIG is the default choice for medium-gauge
              sheet metal and structural fabrication at production volume, including enclosures, brackets, and
              container chassis work.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>TIG welding (Gas Tungsten Arc Welding)</h2>
            <p>
              TIG welding uses a non-consumable tungsten electrode and a separate filler rod, with inert gas
              shielding and far more manual control over the arc than MIG or ARC. That control produces the
              cleanest, most precise welds of the three — but it is also the slowest and the most dependent on
              operator skill. TIG is the usual choice for thin materials, visible welds where finish matters, and
              joins where precision outweighs speed.
            </p>
          </Reveal>

          <Reveal>
            <h2 style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-2)' }}>Choosing between them</h2>
            <p>
              In practice, a single fabrication project often uses more than one process: ARC or MIG for the heavy
              structural chassis, and TIG for visible joints or thinner enclosure panels where finish quality
              matters. The deciding factors are almost always material thickness, required finish, and production
              volume — not which process is inherently &ldquo;better.&rdquo;
            </p>
          </Reveal>

          <Reveal>
            <p style={{ marginTop: 'var(--space-5)' }}>
              G&nbsp;Industries runs all three processes in-house — TIG (500 Amp AC/DC), MIG (400A and 200A, multiple
              units), and ARC (200 Amp) — alongside laser welding for fine, precision joins. See{' '}
              <Link href="/machinery">Machinery &amp; Equipment</Link> for the full equipment list, or{' '}
              <Link href="/manufacturing-fabrication">Manufacturing &amp; Fabrication</Link> for how welding fits into
              the broader fabrication process.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQSection items={FAQS} eyebrow="Common Questions" title="Welding processes, answered" />

      <ContactCta
        heading={<>Need a welding process <br /> matched to your job?</>}
        subcopy="Share your material, thickness, and finish requirements and the team will recommend the right process."
      />
    </>
  );
}
