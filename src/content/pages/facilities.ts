import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type FacilitiesContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  stats: { num: string; label: string }[];
  expansionNote: string;
  registered: { eyebrow: string; heading: string; para1: string; para2: string; sidebarStats: { label: string; value: string }[] };
  layoutImages: { image: { src: string; alt: string } }[];
  layoutCaption: string;
  utilities: { image: { src: string; alt: string }; cap: string }[];
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const FACILITIES_DEFAULTS: FacilitiesContent = {
  hero: {
    image: { src: '/quality-images/Factory image.png', alt: 'Wide view of the G Industries fabrication shop floor aisle with material handling area' },
    eyebrow: 'Facilities',
    title: 'Built for scale. Engineered for precision.',
    subtitle: 'A continuously modernized facility footprint across Hyderabad, purpose-built for heavy fabrication and BESS container manufacturing.',
  },
  stats: [
    { num: '13,000 sft', label: 'Unit 1 Covered Area' },
    { num: '30,000 sft', label: 'Unit 2 — BESS Container Mfg.' },
    { num: '40,000 sft', label: 'Available for Expansion' },
  ],
  expansionNote: "Unit 2 (BESS Container Manufacturing) is an active expansion project — currently being built out to extend G Industries' single-source capability, alongside the established Unit 1 fabrication shop.",
  registered: {
    eyebrow: 'Registered Facility',
    heading: 'A purpose-built home for precision manufacturing',
    para1: 'The registered plant sits on Sy. 710, Gandimaisamma Mandal, Dundigal, Hyderabad, Medchal Malkajgiri, Telangana — comprising Shed-2 and Shed-2A, with dedicated Fabrication & Welding, Stores, Office, QA / Final Inspection, and Dispatch areas.',
    para2: 'Every area of the facility is organized around the single-source workflow — raw material intake, fabrication and welding, quality inspection, and dispatch — keeping design, fabrication, and finishing under one roof.',
    sidebarStats: [
      { label: 'Founded', value: '2021' },
      { label: 'Workforce', value: '50+' },
      { label: 'Quality System', value: 'ISO 9001:2015' },
    ],
  },
  layoutImages: [
    { image: { src: '/quality-images/file_0000000053588208905e9a3ed5bd2593.png', alt: 'Official G Industries registered plant layout plaque, showing Shed 2, Shed 2A, and a Finished Goods Storage Area sign' } },
    { image: { src: '/quality-images/Inspection room.png', alt: 'Quality Department entrance with safety signage at the G Industries facility' } },
    { image: { src: '/quality-images/file_00000000c78c8208b0ae8e848644d348.png', alt: 'Store Room and Managing Director office entrances on the production floor' } },
    { image: { src: '/quality-images/file_0000000009f08208b341c7d33a036206.png', alt: 'Fire extinguisher safety signage mounted on the facility wall' } },
    { image: { src: '/quality-images/file_00000000bf3c82088057776799a11bec.png', alt: "Industrial air compressor and dryer unit supporting the facility's pneumatic systems" } },
  ],
  layoutCaption: 'Registered plant layout — Shed-2 / Shed-2A, Sy. 710, Gandimaisamma Mandal, Dundigal',
  utilities: [
    { image: { src: '/quality-images/file_00000000e1d88208bd9b5a11439c3e7b.png', alt: 'Compressed air treatment skid with storage tanks supporting the fabrication shop' }, cap: 'Compressed Air Treatment Skid' },
    { image: { src: '/quality-images/Factory image.png', alt: 'Fabrication shop floor aisle with raw material staging' }, cap: 'Material Handling Aisle, Unit 1' },
    { image: { src: '/quality-images/Inspection room.png', alt: 'Quality Department entrance, alternate view' }, cap: 'Quality Department, Unit 1' },
  ],
  faqs: [
    { q: 'What is the total manufacturing area of the G Industries facility?', a: 'The Hyderabad facility spans 13,000 sft (Unit 1, covered fabrication area) and 30,000 sft (Unit 2, BESS container manufacturing), with a further 40,000 sft available for expansion.' },
    { q: 'What is each unit of the G Industries facility used for?', a: 'Unit 1 houses heavy structural fabrication and welding, and Unit 2 is purpose-built for BESS (Battery Energy Storage System) container manufacturing.' },
    { q: 'Is G Industries currently expanding its manufacturing capacity?', a: 'Yes. Unit 2 (BESS Container Manufacturing) is an active expansion project currently being built out alongside the established Unit 1 fabrication shop, with 40,000 sft of additional land available for further growth.' },
    { q: 'Does the facility have a dedicated quality inspection area?', a: 'Yes — the registered plant layout includes a dedicated QA / Final Inspection area alongside Fabrication & Welding, Stores, Office, and Dispatch sections, all organized around a single-source production workflow.' },
  ],
  ctaImage: { src: '/quality-images/9ab78c05-093b-405e-9850-54976077abdf.jpg', alt: 'The G Industries team on the shop floor at the Hyderabad facility' },
};

export const FACILITIES_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  stats: z.array(z.object({ num: z.string(), label: z.string() })),
  expansionNote: z.string(),
  registered: z.object({
    eyebrow: z.string(), heading: z.string(), para1: z.string(), para2: z.string(),
    sidebarStats: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
  layoutImages: z.array(z.object({ image: imgSchema })),
  layoutCaption: z.string(),
  utilities: z.array(z.object({ image: imgSchema, cap: z.string() })),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<FacilitiesContent>;

export const FACILITIES_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'list', key: 'stats', label: 'Facility stats', addLabel: 'Add stat', itemFields: [
    { type: 'text', key: 'num', label: 'Number' },
    { type: 'text', key: 'label', label: 'Label' },
  ] },
  { type: 'textarea', key: 'expansionNote', label: 'Expansion note' },
  { type: 'object', key: 'registered', label: 'Registered Facility section', fields: [
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'para1', label: 'Paragraph 1' },
    { type: 'textarea', key: 'para2', label: 'Paragraph 2' },
    { type: 'list', key: 'sidebarStats', label: 'Sidebar stats (fixed 3 — edit text only)', itemFields: [
      { type: 'text', key: 'label', label: 'Label' },
      { type: 'text', key: 'value', label: 'Value' },
    ] },
  ] },
  { type: 'list', key: 'layoutImages', label: 'Plant layout gallery (fixed 5 — grid-dependent, do not add/remove)', itemFields: [
    { type: 'image', key: 'image', label: 'Image' },
  ] },
  { type: 'text', key: 'layoutCaption', label: 'Plant layout caption (first image)' },
  { type: 'list', key: 'utilities', label: 'Utilities gallery', addLabel: 'Add item', itemFields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'cap', label: 'Caption' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image (leave blank for site default)' },
];
