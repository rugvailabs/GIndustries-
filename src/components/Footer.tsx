import Image from 'next/image';
import Link from 'next/link';
import type { FooterContent } from '@/content/pages/footer';

function FooterLinkItem({ label, href }: { label: string; href: string }) {
  if (!href) return <li>{label}</li>;
  const isInternal = href.startsWith('/');
  return <li>{isInternal ? <Link href={href}>{label}</Link> : <a href={href}>{label}</a>}</li>;
}

export default function Footer({ content }: { content: FooterContent }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <Image src={content.logo.src} alt={content.logo.alt} width={450} height={300} />
            </div>
            <p>{content.tagline}</p>
          </div>
          {content.columns.map((column) => (
            <div className="footer-col" key={column.heading}>
              <h5>{column.heading}</h5>
              <ul>
                {column.links.map((link) => (
                  <FooterLinkItem key={link.label} label={link.label} href={link.href} />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} {content.copyrightText}</span>
          <span className="certs">{content.certsText}</span>
        </div>
      </div>
    </footer>
  );
}
