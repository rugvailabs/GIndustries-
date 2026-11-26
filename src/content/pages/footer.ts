import { z } from 'zod';
import type { FieldSchema } from '../fields';

export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };

export type FooterContent = {
  logo: { src: string; alt: string };
  tagline: string;
  columns: FooterColumn[];
  copyrightText: string;
  certsText: string;
};

export const FOOTER_DEFAULTS: FooterContent = {
  logo: { src: '/quality-images/logo.png', alt: 'G Industries logo' },
  tagline:
    'A single-source manufacturing partner for Railways, EV, Electronics, Agri-Tech and BESS energy storage — Hyderabad, Telangana, India.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Engineering & Design', href: '/engineering-design' },
        { label: 'Manufacturing & Fabrication', href: '/manufacturing-fabrication' },
        { label: 'Machinery & Equipment', href: '/machinery' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Projects', href: '/projects' },
        { label: 'Quality & Certifications', href: '/quality-certifications' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: 'Industries',
      links: [
        { label: 'Industries We Serve', href: '/industries' },
        { label: 'BESS Solutions', href: '/bess-solutions' },
        { label: 'Clients', href: '/clients' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      heading: 'Contact',
      links: [
        { label: 'mvskiran@gindustries.co.in', href: 'mailto:mvskiran@gindustries.co.in' },
        { label: '+91 89776 50585', href: 'tel:+918977650585' },
        { label: 'Gandi Maisamma, Dundigal, Hyderabad', href: '' },
      ],
    },
  ],
  copyrightText: 'G Industries. All rights reserved.',
  certsText: 'ISO 9001:2015 · GST Registered · Udyam/MSME Registered',
};

const linkSchema = z.object({ label: z.string().min(1), href: z.string() });
const columnSchema = z.object({ heading: z.string().min(1), links: z.array(linkSchema) });

export const FOOTER_SCHEMA = z.object({
  logo: z.object({ src: z.string().min(1), alt: z.string() }),
  tagline: z.string(),
  columns: z.array(columnSchema),
  copyrightText: z.string().min(1),
  certsText: z.string(),
}) satisfies z.ZodType<FooterContent>;

const linkFields: FieldSchema[] = [
  { type: 'text', key: 'label', label: 'Label' },
  { type: 'url', key: 'href', label: 'Link', hint: 'Leave blank to show as plain text (not a clickable link)' },
];

export const FOOTER_FIELDS: FieldSchema[] = [
  { type: 'image', key: 'logo', label: 'Logo' },
  { type: 'textarea', key: 'tagline', label: 'Tagline' },
  {
    type: 'list',
    key: 'columns',
    label: 'Footer columns',
    addLabel: 'Add column',
    itemFields: [
      { type: 'text', key: 'heading', label: 'Column heading' },
      { type: 'list', key: 'links', label: 'Links', addLabel: 'Add link', itemFields: linkFields },
    ],
  },
  { type: 'text', key: 'copyrightText', label: 'Copyright text', hint: 'Shown after "© {year}"' },
  { type: 'text', key: 'certsText', label: 'Certifications line' },
];
