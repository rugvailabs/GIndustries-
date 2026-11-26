import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type IndustriesContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  items: { title: string; copy: string; note: string }[];
  trusted: { eyebrow: string; heading: string; copy: string };
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const INDUSTRIES_DEFAULTS: IndustriesContent = {
  hero: {
    image: { src: '/quality-images/IMG_20261021_103942.jpg', alt: 'Stacked laser-cut and welded sheet metal enclosures ready for assembly' },
    eyebrow: 'Industries We Serve',
    title: 'Precision components across critical sectors.',
    subtitle: 'From railway infrastructure to next-generation EVs and energy systems, G Industries manufactures high-precision components for national and international industries under stringent quality and compliance standards.',
  },
  items: [
    { title: 'Railways', copy: 'Registered vendor executing railway tender orders. G Industries manufactured custom BESS containers for Medha Servo Drives, which spans Railways, EV and energy storage work.', note: 'Registered vendor — Railway Tenders' },
    { title: 'Electric Vehicles', copy: 'Precision EV enclosures & structural components, engineered to the same CAD-to-QC process used across every project.', note: '' },
    { title: 'Electronics', copy: 'Modular enclosures & engineering consoles — fabricated and finished at our Hyderabad facility, to the same quality standards as all industrial work.', note: '' },
    { title: 'Agri-Tech', copy: 'Fabrication for agricultural technology systems, built to the same structural and dimensional standards as our industrial work.', note: '' },
    { title: 'Laboratory Equipment', copy: 'Custom lab enclosures & assemblies, precision-fabricated for controlled environments.', note: '' },
    { title: 'Switchgear Systems', copy: 'Electrical & switchgear panel fabrication — a core part of our Unit 1 production lines.', note: '' },
  ],
  trusted: {
    eyebrow: 'Trusted Across Sectors',
    heading: '25+ organizations, one single-source partner',
    copy: 'From railway PSUs and defence-linked enterprises to EV innovators and energy pioneers.',
  },
  faqs: [
    { q: 'Does G Industries manufacture components for the railway industry?', a: 'Yes. G Industries is a registered vendor executing railway tender orders, and has manufactured custom BESS containers for Medha Servo Drives — a project spanning railway, EV, and energy-storage work.' },
    { q: 'What electric vehicle (EV) components does G Industries fabricate?', a: 'G Industries fabricates precision EV enclosures and structural components, engineered through the same CAD-to-QC process — design, simulation, fabrication, and finishing — used across every project.' },
    { q: 'Does G Industries build electronics enclosures and control consoles?', a: 'Yes. Modular enclosures and engineering consoles are fabricated and finished at G Industries’ Hyderabad facility, to the same dimensional and quality standards applied across all industrial work.' },
    { q: 'What switchgear and electrical panel fabrication services are available?', a: 'G Industries fabricates switchgear and electrical panels as a core part of its Unit 1 production lines, built to the same dimensional and quality standards applied across all industrial work.' },
    { q: 'Does G Industries manufacture for agri-tech or laboratory equipment applications?', a: 'Yes — G Industries fabricates structures for agricultural technology systems and custom enclosures and assemblies for laboratory equipment, both built to the same structural and dimensional standards as its heavier industrial work.' },
  ],
  ctaImage: { src: '/quality-images/file_000000005b9481fabfbaf36350a99db5 (1).png', alt: '' },
};

export const INDUSTRIES_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  items: z.array(z.object({ title: z.string(), copy: z.string(), note: z.string() })),
  trusted: z.object({ eyebrow: z.string(), heading: z.string(), copy: z.string() }),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<IndustriesContent>;

export const INDUSTRIES_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'list', key: 'items', label: 'Industry cards (icons fixed — edit text only, do not add/remove)', itemFields: [
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'copy', label: 'Description' },
    { type: 'text', key: 'note', label: 'Note (optional, e.g. "Registered vendor")' },
  ] },
  { type: 'object', key: 'trusted', label: 'Trusted-across-sectors section', fields: [
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'copy', label: 'Copy' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image' },
];
