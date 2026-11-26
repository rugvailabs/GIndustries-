import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';
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
        eyebrow={<EditableText slug="projects" path="hero.eyebrow">{hero.eyebrow}</EditableText>}
        title={<EditableText slug="projects" path="hero.title">{hero.title}</EditableText>}
        subtitle={<EditableText slug="projects" path="hero.subtitle" multiline>{hero.subtitle}</EditableText>}
        editSlug="projects"
        imagePath="hero.image"
      />

      <section className="section-pad">
        <div className="container">
          <div className="project-list reveal-group">
            {items.map((p, i) => (
              <Reveal key={i} className="project-row" index={i}>
                <div className="pnum"><EditableText slug="projects" path={`items.${i}.num`}>{p.num}</EditableText></div>
                <div>
                  <div className="client"><EditableText slug="projects" path={`items.${i}.client`}>{p.client}</EditableText></div>
                  <h3><EditableText slug="projects" path={`items.${i}.title`}>{p.title}</EditableText></h3>
                </div>
                <div>
                  <p className="desc"><EditableText slug="projects" path={`items.${i}.desc`} multiline>{p.desc}</EditableText></p>
                  <p className="desc" style={{ marginTop: '0.6rem' }}><EditableText slug="projects" path={`items.${i}.note`} multiline>{p.note}</EditableText></p>
                </div>
                <figure>
                  <div className="figure-media">
                    <EditableImage slug="projects" path={`items.${i}.image`} src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
                  <figcaption><EditableText slug="projects" path={`items.${i}.cap`}>{p.cap}</EditableText></figcaption>
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
                <p style={{ color: 'var(--ink-soft)', fontSize: '1.04rem', maxWidth: '62ch' }}>
                  <EditableText slug="projects" path="summary" multiline>{summary}</EditableText>
                </p>
                <Link href="/clients" className="btn btn-outline-dark" style={{ marginTop: 'var(--space-3)' }}>
                  See all clients <IconArrowRight />
                </Link>
              </div>
              <div className="sidebar-card">
                <h4>At a Glance</h4>
                {sidebarStats.map((s, i) => (
                  <div className="sidebar-stat" key={i}>
                    <span className="label"><EditableText slug="projects" path={`sidebarStats.${i}.label`}>{s.label}</EditableText></span>
                    <span className="value"><EditableText slug="projects" path={`sidebarStats.${i}.value`}>{s.value}</EditableText></span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection
        items={faqs.map((f, i) => ({
          q: <EditableText slug="projects" path={`faqs.${i}.q`}>{f.q}</EditableText>,
          qText: f.q,
          a: <EditableText slug="projects" path={`faqs.${i}.a`} multiline>{f.a}</EditableText>,
          aText: f.a,
        }))}
        eyebrow="Common Questions"
        title="Projects & case studies, answered"
      />

      <ContactCta />
    </>
  );
}
