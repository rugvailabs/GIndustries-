import Link from 'next/link';

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
  return (
    <section className="page-hero">
      <div className="page-hero-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} />
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
    </section>
  );
}
