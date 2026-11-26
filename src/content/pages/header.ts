import { z } from 'zod';
import type { FieldSchema } from '../fields';

export type HeaderNavItem = {
  label: string;
  href: string;
  children: { label: string; href: string }[];
};

export type HeaderContent = {
  logo: { src: string; alt: string };
  navItems: HeaderNavItem[];
  ctaLabel: string;
  ctaHref: string;
};

export const HEADER_DEFAULTS: HeaderContent = {
  logo: { src: '/quality-images/logo.png', alt: 'G Industries logo' },
  navItems: [
    { label: 'About', href: '/about', children: [] },
    {
      label: 'Capabilities',
      href: '',
      children: [
        { label: 'Engineering & Design', href: '/engineering-design' },
        { label: 'Manufacturing & Fabrication', href: '/manufacturing-fabrication' },
        { label: 'Machinery & Equipment', href: '/machinery' },
      ],
    },
    {
      label: 'Industries',
      href: '',
      children: [
        { label: 'Industries We Serve', href: '/industries' },
        { label: 'BESS Solutions', href: '/bess-solutions' },
      ],
    },
    { label: 'Shop', href: '/products', children: [] },
    { label: 'Facilities', href: '/facilities', children: [] },
    { label: 'Projects', href: '/projects', children: [] },
    { label: 'Quality', href: '/quality-certifications', children: [] },
    { label: 'Clients', href: '/clients', children: [] },
    { label: 'Blog', href: '/blog', children: [] },
    { label: 'Contact', href: '/contact', children: [] },
  ],
  ctaLabel: 'Talk to Us',
  ctaHref: '/contact',
};

const navChildSchema = z.object({ label: z.string().min(1), href: z.string().min(1) });
const navItemSchema = z.object({ label: z.string().min(1), href: z.string(), children: z.array(navChildSchema) });

export const HEADER_SCHEMA = z.object({
  logo: z.object({ src: z.string().min(1), alt: z.string() }),
  navItems: z.array(navItemSchema),
  ctaLabel: z.string().min(1),
  ctaHref: z.string().min(1),
}) satisfies z.ZodType<HeaderContent>;

export const HEADER_FIELDS: FieldSchema[] = [
  { type: 'image', key: 'logo', label: 'Logo' },
  {
    type: 'list',
    key: 'navItems',
    label: 'Navigation items',
    addLabel: 'Add nav item',
    itemFields: [
      { type: 'text', key: 'label', label: 'Label' },
      { type: 'url', key: 'href', label: 'Link', hint: 'Leave blank if this item only has dropdown sub-items below' },
      {
        type: 'list',
        key: 'children',
        label: 'Dropdown sub-items',
        addLabel: 'Add sub-item',
        itemFields: [
          { type: 'text', key: 'label', label: 'Label' },
          { type: 'url', key: 'href', label: 'Link' },
        ],
      },
    ],
  },
  { type: 'text', key: 'ctaLabel', label: 'Button text' },
  { type: 'url', key: 'ctaHref', label: 'Button link' },
];
