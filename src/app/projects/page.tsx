import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { PROJECTS_DEFAULTS } from '@/content/pages/projects';

export const metadata: Metadata = pageMetadata({
  title: 'Projects & Case Studies',
  description:
    'Deliveries from G Industries — BESS containers for Medha Servo Drives, power containers for BHEL, and a CNC machine body for VEM Technologies.',
  path: '/projects',
  image: '/images/og/projects.jpg',
  imageAlt: 'BESS container chassis fabrication on the G Industries shop floor',
});

export default async function ProjectsPage() {
  const content = await getPageContent('projects', PROJECTS_DEFAULTS);
  const { hero, items, summary, sidebarStats, faqs } = content;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <div className="project-list reveal-group">
            {items.map((p, i) => (
              <Reveal key={i} className="project-row" index={i}>
                <div className="pnum">{p.num}</div>
                <div>
                  <div className="client">{p.client}</div>
                  <h3>{p.title}</h3>
                </div>
                <div>
                  <p className="desc">{p.desc}</p>
                  <p className="desc" style={{ marginTop: '0.6rem' }}>{p.note}</p>
                </div>
                <figure>
                  <div className="figure-media">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
                  <figcaption>{p.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="with-sidebar">
              <div>
                <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem', maxWidth: '62ch' }}>{summary}</p>
                <Link href="/clients" className="btn btn-outline-dark" style={{ marginTop: 'var(--space-3)' }}>
                  See all clients <IconArrowRight />
                </Link>
              </div>
              <div className="sidebar-card">
                <h4>At a Glance</h4>
                {sidebarStats.map((s, i) => (
                  <div className="sidebar-stat" key={i}>
                    <span className="label">{s.label}</span>
                    <span className="value">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="Projects & case studies, answered" />

      <ContactCta />
    </>
  );
}
