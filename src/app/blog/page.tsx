import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import { IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { BLOG_POSTS } from '@/lib/blog';

export const metadata = pageMetadata({
  title: 'Blog — Fabrication & BESS Engineering Insights',
  description:
    'Practical guides on BESS container specifications, welding processes, and manufacturing quality standards, from the G Industries engineering team in Hyderabad.',
  path: '/blog',
  image: '/images/og/about.jpg',
  imageAlt: 'The G Industries team on the shop floor at the Hyderabad facility',
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        image="/quality-images/9ab78c05-093b-405e-9850-54976077abdf.jpg"
        imageAlt="The G Industries team on the shop floor at the Hyderabad facility"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        eyebrow="Resources"
        title="Fabrication and BESS engineering, explained."
        subtitle="Practical guides from the G Industries engineering team — BESS container specifications, welding processes, and the quality standards behind every delivery."
      />

      <section className="section-pad">
        <div className="container">
          <div className="project-list reveal-group">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} className="project-row" index={i}>
                <div className="pnum">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="client">
                    {new Date(post.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                </div>
                <div>
                  <p className="desc">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-950)', display: 'inline-flex', alignItems: 'center', gap: '0.4em', marginTop: '0.6rem' }}>
                    Read article <IconArrowRight />
                  </Link>
                </div>
                <figure>
                  <div className="figure-media">
                    <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
