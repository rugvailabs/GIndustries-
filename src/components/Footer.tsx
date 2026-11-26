import Link from 'next/link';
import type { FooterContent } from '@/content/pages/footer';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';

function FooterLinkItem({ label, href, path }: { label: string; href: string; path: string }) {
  const text = <EditableText slug="global.footer" path={`${path}.label`}>{label}</EditableText>;
  if (!href) return <li>{text}</li>;
  const isInternal = href.startsWith('/');
  return <li>{isInternal ? <Link href={href}>{text}</Link> : <a href={href}>{text}</a>}</li>;
}

export default function Footer({ content }: { content: FooterContent }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <EditableImage slug="global.footer" path="logo" src={content.logo.src} alt={content.logo.alt} width={450} height={300} />
            </div>
            <p><EditableText slug="global.footer" path="tagline" multiline>{content.tagline}</EditableText></p>
          </div>
          {content.columns.map((column, ci) => (
            <div className="footer-col" key={column.heading}>
              <h5><EditableText slug="global.footer" path={`columns.${ci}.heading`}>{column.heading}</EditableText></h5>
              <ul>
                {column.links.map((link, li) => (
                  <FooterLinkItem key={link.label} label={link.label} href={link.href} path={`columns.${ci}.links.${li}`} />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} <EditableText slug="global.footer" path="copyrightText">{content.copyrightText}</EditableText></span>
          <span className="certs"><EditableText slug="global.footer" path="certsText">{content.certsText}</EditableText></span>
        </div>
      </div>
    </footer>
  );
}
