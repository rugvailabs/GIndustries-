import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '@/lib/seo';

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs: Crumb[];
};

export default function PageHero({ image, imageAlt, eyebrow, title, subtitle, crumbs }: PageHeroProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  return (
    <section className="page-hero">
      <div className="page-hero-media">
        <Image src={image} alt={imageAlt} fill sizes="100vw" priority quality={80} />
      </div>
      <div className="page-hero-content container">
        <div className="breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {i > 0 && <span className="sep">/</span>}
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </span>
          ))}
        </div>
        <div className="eyebrow on-dark">{eyebrow}</div>
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      </div>
      {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </section>
  );
}
