import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import { IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { BLOG_POSTS } from '@/lib/blog';
import { getPageContent } from '@/lib/content';
import { BLOG_INDEX_DEFAULTS } from '@/content/pages/blog';

export const metadata = pageMetadata({
  title: 'Blog — Fabrication & BESS Engineering Insights',
  description:
    'Practical guides on BESS container specifications, welding processes, and manufacturing quality standards, from the G Industries engineering team in Hyderabad.',
  path: '/blog',
  image: '/images/og/about.jpg',
  imageAlt: 'The G Industries team on the shop floor at the Hyderabad facility',
});

export default async function BlogIndexPage() {
  const content = await getPageContent('blog', BLOG_INDEX_DEFAULTS);
  const { hero, postOverrides } = content;
  const posts = BLOG_POSTS.map((post, i) => {
    const override = postOverrides[i];
    return {
      slug: post.slug,
      datePublished: post.datePublished,
      title: override?.title ?? post.title,
      excerpt: override?.excerpt ?? post.excerpt,
      image: override?.image.src ?? post.image,
      imageAlt: override?.image.alt ?? post.imageAlt,
    };
  });

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <div className="project-list reveal-group">
            {posts.map((post, i) => (
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
