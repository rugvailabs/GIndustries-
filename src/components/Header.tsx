'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { HeaderContent } from '@/content/pages/header';
import EditableText from '@/components/edit/EditableText';
import EditableImage from '@/components/edit/EditableImage';

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header({ content }: { content: HeaderContent }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- closing the nav on route change is a one-time reaction to navigation, not a render loop
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const isLeafActive = (href: string) => pathname === href;
  const isParentActive = (children: { href: string }[]) => children.some((c) => c.href === pathname);

  return (
    <header ref={headerRef} className={`site-header${scrolled ? ' is-scrolled' : ''}${mobileOpen ? ' nav-open' : ''}`}>
      <div className="container">
        <Link href="/" className="brand">
          <EditableImage slug="global.header" path="logo" src={content.logo.src} alt={content.logo.alt} width={450} height={300} priority />
        </Link>

        <nav className={`nav-links${mobileOpen ? ' is-open' : ''}`} id="navLinks">
          {content.navItems.map((item, i) => {
            if (item.children.length === 0) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={isLeafActive(item.href) ? 'is-active' : ''}
                  aria-current={isLeafActive(item.href) ? 'page' : undefined}
                >
                  <EditableText slug="global.header" path={`navItems.${i}.label`}>{item.label}</EditableText>
                </Link>
              );
            }
            const open = openDropdown === item.label;
            const active = isParentActive(item.children);
            return (
              <div
                key={item.label}
                className={`nav-dropdown${open ? ' is-open' : ''}${active ? ' has-active-child' : ''}`}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown((current) => (current === item.label ? null : current))}
              >
                <button
                  type="button"
                  className="nav-dropdown-toggle"
                  aria-expanded={open}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(open ? null : item.label);
                  }}
                >
                  <EditableText slug="global.header" path={`navItems.${i}.label`}>{item.label}</EditableText> <ChevronIcon />
                </button>
                <div className="nav-dropdown-panel">
                  {item.children.map((child, j) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={isLeafActive(child.href) ? 'is-active' : ''}
                      onClick={(e) => {
                        setOpenDropdown(null);
                        // A clicked link keeps DOM focus after client-side navigation
                        // (the anchor isn't recreated), which would otherwise keep the
                        // panel open via the :focus-within accessibility rule below.
                        e.currentTarget.blur();
                      }}
                    >
                      <EditableText slug="global.header" path={`navItems.${i}.children.${j}.label`}>{child.label}</EditableText>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="nav-cta">
          <Link href={content.ctaHref} className="btn btn-outline-light desktop-only">
            <EditableText slug="global.header" path="ctaLabel">{content.ctaLabel}</EditableText>
          </Link>
          <button
            className={`nav-toggle${mobileOpen ? ' is-open' : ''}`}
            id="navToggle"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
