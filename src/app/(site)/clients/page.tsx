import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactCta from '@/components/ContactCta';
import FAQSection from '@/components/FAQSection';
import { IconUsers, IconRail, IconShieldCheck, IconArrowRight } from '@/components/icons';
import { pageMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { CLIENTS_DEFAULTS } from '@/content/pages/clients';

export const metadata = pageMetadata({
  title: 'Our Clients — Railways, EV & BESS Energy Partners',
  description:
    'G Industries serves 25+ organizations across India’s most demanding sectors — railway PSUs, defence-linked enterprises, EV innovators, and energy pioneers.',
  path: '/clients',
  image: '/images/og/clients.jpg',
  imageAlt: 'Wide view of the G Industries fabrication shop floor, where client deliveries are manufactured',
});

const STAT_ICONS = [IconUsers, IconRail, IconShieldCheck];

export default async function ClientsPage() {
  const content = await getPageContent('clients', CLIENTS_DEFAULTS);
  const { hero, stats, featured, other, note, why, faqs, ctaImage } = content;

  return (
    <>
      <PageHero
        image={hero.image.src}
        imageAlt={hero.image.alt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Clients' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="section-pad">
        <div className="container">
          <div className="pillar-grid reveal-group">
            {stats.map((item, i) => {
              const Icon = STAT_ICONS[i] ?? STAT_ICONS[STAT_ICONS.length - 1];
              return (
                <Reveal className="pillar" index={i} key={i}>
                  <div className="icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad clients">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">The Client Wall</div>
            <h2>Organizations we work with</h2>
          </Reveal>
          <Reveal className="client-wall">
            {featured.map((c, i) => (
              <span className="client-pill featured" key={`f${i}`}>{c.name}</span>
            ))}
            {other.map((c, i) => (
              <span className="client-pill" key={`o${i}`}>{c.name}</span>
            ))}
          </Reveal>
          <p className="client-note">{note}</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">{why.eyebrow}</div>
            <h2>{why.heading}</h2>
            <p>{why.copy}</p>
          </Reveal>
          <Link href="/projects" className="btn btn-outline-dark">
            See Project Case Studies <IconArrowRight />
          </Link>
        </div>
      </section>

      <FAQSection items={faqs} eyebrow="Common Questions" title="Clients & partnerships, answered" />

      <ContactCta
        image={ctaImage.src}
        heading={
          <>
            Become our next
            <br />
            <em>valued partner.</em>
          </>
        }
      />
    </>
  );
}
