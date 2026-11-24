'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type NavLeaf = { label: string; href: string };
type NavItem = NavLeaf | { label: string; children: NavLeaf[] };

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Capabilities',
    children: [
      { label: 'Engineering & Design', href: '/engineering-design' },
      { label: 'Manufacturing & Fabrication', href: '/manufacturing-fabrication' },
      { label: 'Machinery & Equipment', href: '/machinery' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Industries We Serve', href: '/industries' },
      { label: 'BESS Solutions', href: '/bess-solutions' },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Projects', href: '/projects' },
  { label: 'Quality', href: '/quality-certifications' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
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
  const isParentActive = (children: NavLeaf[]) => children.some((c) => c.href === pathname);

  return (
    <header ref={headerRef} className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="G Industries logo" />
        </Link>

        <nav className={`nav-links${mobileOpen ? ' is-open' : ''}`} id="navLinks">
          {NAV_ITEMS.map((item) => {
            if ('href' in item) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isLeafActive(item.href) ? 'is-active' : ''}
                  aria-current={isLeafActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            }
            const open = openDropdown === item.label;
            const active = isParentActive(item.children);
            return (
              <div
                key={item.label}
                className={`nav-dropdown${open ? ' is-open' : ''}${active ? ' has-active-child' : ''}`}
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
                  {item.label} <ChevronIcon />
                </button>
                <div className="nav-dropdown-panel">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className={isLeafActive(child.href) ? 'is-active' : ''}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="nav-cta">
          <Link href="/contact" className="btn btn-outline-light desktop-only">
            Talk to Us
          </Link>
          <button
            className="nav-toggle"
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
