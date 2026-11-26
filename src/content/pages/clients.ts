import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type ClientsContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  stats: { title: string; copy: string }[];
  featured: { name: string }[];
  other: { name: string }[];
  note: string;
  why: { eyebrow: string; heading: string; copy: string };
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const CLIENTS_DEFAULTS: ClientsContent = {
  hero: {
    image: { src: '/quality-images/Factory image.png', alt: 'Wide view of the G Industries fabrication shop floor, where client deliveries are manufactured' },
    eyebrow: 'Our Valued Customers',
    title: 'Trusted by industry leaders.',
    subtitle: "From railway PSUs and defence-linked enterprises to EV innovators and energy pioneers, G Industries is proud to serve 25+ organizations across India's most demanding sectors.",
  },
  stats: [
    { title: '25+', copy: 'Organizations served across railway, defence, energy, EV, and electronics sectors.' },
    { title: 'Registered Vendor', copy: 'G Industries executes railway tender orders as a registered vendor.' },
    { title: 'Engaged', copy: 'Actively engaging with defence-linked project work.' },
  ],
  featured: ['Medha Servo Drives', 'BHEL', 'HBL', 'VEM Technologies', 'ECIL'].map((name) => ({ name })),
  other: [
    'RCF Kapurthala', 'Medha — Powering Mobility', 'Medha Electrical Contractors', 'Medha Marine',
    'BHEL — R&D Balanagar', 'BHEL — RC Puram', 'Cygni Energy', 'Nexigo Energy', 'Axonify Tech Systems',
    'Hemair Systems', 'Keto Motors', 'Neural Foundry', 'Quantum EV', 'Smart Lab', 'SLN Electricals',
    'Polmon Instruments', 'Rotomag', 'SGD Pharma', 'Stability Automation', 'XMachines', 'Venjay Automation',
  ].map((name) => ({ name })),
  note: 'Registered vendor — Railway Tenders | Engaging with Defence Sector Projects',
  why: {
    eyebrow: 'Why Clients Choose Us',
    heading: 'Built to be a single-source partner',
    copy: 'End-to-end capability from design through finishing, ISO 9001:2015 certified quality, multi-sector expertise, and a proven delivery record with BHEL, VEM Technologies, Medha, ECIL and more.',
  },
  faqs: [
    { q: 'How many organizations does G Industries serve as clients?', a: 'G Industries serves 25+ organizations across railway, defence, energy, EV, and electronics sectors, ranging from large public-sector enterprises to specialized technology companies.' },
    { q: 'Which major organizations has G Industries worked with?', a: 'Clients include Medha Servo Drives, BHEL, HBL, VEM Technologies, and ECIL, among 25+ organizations served across India’s most demanding industrial sectors.' },
    { q: 'Is G Industries a registered vendor for Indian Railways tenders?', a: 'Yes — G Industries is a registered vendor executing railway tender orders, and counts Rail Coach Factory (RCF) Kapurthala among the organizations it serves.' },
    { q: 'Does G Industries work on defence sector projects?', a: 'G Industries is actively engaging with defence-linked project work, alongside its established client base in energy, EV, and electronics manufacturing.' },
  ],
  ctaImage: { src: '/quality-images/Factory image.png', alt: '' },
};

export const CLIENTS_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  stats: z.array(z.object({ title: z.string(), copy: z.string() })),
  featured: z.array(z.object({ name: z.string().min(1) })),
  other: z.array(z.object({ name: z.string().min(1) })),
  note: z.string(),
  why: z.object({ eyebrow: z.string(), heading: z.string(), copy: z.string() }),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<ClientsContent>;

export const CLIENTS_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'list', key: 'stats', label: 'Stat pillars (icons fixed — edit text only, do not add/remove)', itemFields: [
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'copy', label: 'Description' },
  ] },
  { type: 'list', key: 'featured', label: 'Featured clients', addLabel: 'Add client', itemFields: [{ type: 'text', key: 'name', label: 'Name' }] },
  { type: 'list', key: 'other', label: 'Other clients', addLabel: 'Add client', itemFields: [{ type: 'text', key: 'name', label: 'Name' }] },
  { type: 'text', key: 'note', label: 'Note line' },
  { type: 'object', key: 'why', label: 'Why Clients Choose Us section', fields: [
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'copy', label: 'Copy' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image' },
];
