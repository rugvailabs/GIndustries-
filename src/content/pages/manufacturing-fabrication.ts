import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type ManufacturingFabricationContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  process: { eyebrow: string; heading: string; intro: string; items: { title: string; copy: string }[] };
  split: { image: { src: string; alt: string }; caption: string; eyebrow: string; heading: string; para1: string; para2: string };
  shopGallery: { image: { src: string; alt: string } }[];
  quote: string;
  quoteCite: string;
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const MANUFACTURING_FABRICATION_DEFAULTS: ManufacturingFabricationContent = {
  hero: {
    image: { src: '/quality-images/Products2.png', alt: 'Batch of finished precision stainless steel components ready for dispatch on the G Industries shop floor' },
    eyebrow: 'Fabrication & Post-Processing',
    title: 'Turnkey heavy fabrication. Negligible compromise.',
    subtitle: 'High-capability structural fabrication, paired with advanced post-processing, ensures that every deliverable meets the most demanding standards for durability and precision.',
  },
  process: {
    eyebrow: 'Our Process',
    heading: 'From raw sheet to finished, inspected component',
    intro: 'Unit 1 at our Hyderabad facility runs heavy-duty welding, cutting, and assembly for industrial-grade components and systems — then carries every part through surface treatment and dimensional inspection before it leaves the shop floor.',
    items: [
      { title: 'Structural Fabrication', copy: 'Heavy-duty welding, cutting, and assembly for industrial-grade components and systems.' },
      { title: 'Surface Treatments', copy: 'Precision machining, coating, and finishing for corrosion resistance and longevity.' },
      { title: 'Rigorous QC Testing', copy: 'Dimensional inspection before every delivery, backed by a documented Quality Management System.' },
    ],
  },
  split: {
    image: { src: '/quality-images/IMG_20261021_103942.jpg', alt: 'Stacked laser-cut and welded sheet metal enclosures ready for assembly' },
    caption: 'Sheet-metal enclosures staged for assembly, Unit 1',
    eyebrow: 'One Partner. Every Capability.',
    heading: 'Design, simulate, fabricate, finish — under one roof',
    para1: 'G Industries is a single-source, end-to-end manufacturing partner — bridging conceptual design, structural simulation, heavy fabrication, and precise post-processing seamlessly, so projects never stall waiting on a fragmented supply chain.',
    para2: 'Batch runs — from switchgear enclosures to BESS container components — move through cutting, forming, and welding stations in Unit 1 before final QC sign-off, run on machinery and equipment continuously reinvested in since 2022.',
  },
  shopGallery: [
    { image: { src: '/quality-images/IMG_20261021_103942.jpg', alt: 'Stacked laser-cut and welded sheet metal enclosures ready for assembly' } },
    { image: { src: '/quality-images/file_00000000046c820aa9597951eafb2253 (1).png', alt: 'Tinex power press machines and a pillar drilling machine on the shop floor' } },
  ],
  quote: 'Our relentless pursuit of excellence ensures that every product we deliver is crafted with the utmost precision and attention to detail.',
  quoteCite: 'Quality Policy, G Industries',
  faqs: [
    { q: 'What sheet metal fabrication services does G Industries offer?', a: 'G Industries provides heavy-duty structural fabrication — cutting, forming, welding, and assembly — for industrial-grade components and systems, including enclosures, container chassis, and precision brackets, out of its Unit 1 facility in Hyderabad.' },
    { q: 'Does G Industries handle surface treatment and finishing after fabrication?', a: 'Yes. Every fabricated part moves through precision machining, coating, and finishing for corrosion resistance and longevity before it is considered complete — fabrication and finishing both happen under one roof.' },
    { q: 'What quality checks happen before a fabricated component is delivered?', a: 'Every delivery undergoes dimensional inspection, backed by a documented ISO 9001:2015 Quality Management System, before it leaves the shop floor.' },
    { q: 'Why choose a single-source fabrication partner instead of multiple vendors?', a: 'Splitting design, fabrication, and finishing across separate vendors introduces delays, quality gaps, and accountability failures. G Industries keeps every stage — from CAD and simulation through welding and QC — in-house, so projects do not stall on a fragmented supply chain.' },
  ],
  ctaImage: { src: '/quality-images/Factory image.png', alt: '' },
};

export const MANUFACTURING_FABRICATION_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  process: z.object({ eyebrow: z.string(), heading: z.string(), intro: z.string(), items: z.array(z.object({ title: z.string(), copy: z.string() })) }),
  split: z.object({ image: imgSchema, caption: z.string(), eyebrow: z.string(), heading: z.string(), para1: z.string(), para2: z.string() }),
  shopGallery: z.array(z.object({ image: imgSchema })),
  quote: z.string(),
  quoteCite: z.string(),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<ManufacturingFabricationContent>;

export const MANUFACTURING_FABRICATION_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'object', key: 'process', label: 'Process section', fields: [
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'intro', label: 'Intro' },
    { type: 'list', key: 'items', label: 'Cards (icons fixed — edit text only, do not add/remove)', itemFields: [
      { type: 'text', key: 'title', label: 'Title' },
      { type: 'textarea', key: 'copy', label: 'Description' },
    ] },
  ] },
  { type: 'object', key: 'split', label: 'Capability split section', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'caption', label: 'Image caption' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'para1', label: 'Paragraph 1' },
    { type: 'textarea', key: 'para2', label: 'Paragraph 2' },
  ] },
  { type: 'list', key: 'shopGallery', label: 'Shop floor gallery (fixed pair)', itemFields: [
    { type: 'image', key: 'image', label: 'Image' },
  ] },
  { type: 'textarea', key: 'quote', label: 'Quality policy quote' },
  { type: 'text', key: 'quoteCite', label: 'Quote citation' },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image' },
];
