import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type AboutContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  foundation: {
    image: { src: string; alt: string };
    caption: string;
    eyebrow: string;
    heading: string;
    introText: string;
    missionLabel: string;
    missionText: string;
    stats: { num: string; label: string }[];
  };
  journey: { year: string; title: string; copy: string }[];
  pillars: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const ABOUT_DEFAULTS: AboutContent = {
  hero: {
    image: { src: '/quality-images/9ab78c05-093b-405e-9850-54976077abdf.jpg', alt: 'The G Industries team on the shop floor at the Hyderabad facility' },
    eyebrow: 'About Us',
    title: 'A single-source manufacturer, built since 2021.',
    subtitle: 'A single-source manufacturing partner built in Hyderabad to redefine what a fabrication partner can deliver — from concept to completion, under one roof.',
  },
  foundation: {
    image: { src: '/quality-images/Factory front image.png', alt: 'G Industries Fabrication Works facility front gate and warehouse, Hyderabad' },
    caption: 'G Industries Fabrication Works, Hyderabad facility',
    eyebrow: 'Our Foundation',
    heading: 'Built to redefine what a manufacturing partner delivers.',
    introText: 'Founded in 2021 in Dundigal, Gandi Maisamma, Hyderabad, Telangana, G Industries was built to redefine what a manufacturing partner can deliver — from concept to completion, under one roof.',
    missionLabel: 'Our Mission —',
    missionText: 'To engineer, fabricate, and post-process industrial solutions that challenge industry standards and empower critical infrastructure across sectors, as a registered, ISO-certified manufacturing enterprise.',
    stats: [
      { num: '2021', label: 'Founded' },
      { num: '50+', label: 'Workforce' },
      { num: 'ISO 9001', label: 'Certified' },
    ],
  },
  journey: [
    { year: '2021', title: 'Founded', copy: 'G Industries founded in Dundigal, Gandi Maisamma, Hyderabad, Telangana.' },
    { year: '2022', title: 'Capacity Expansion', copy: 'Sheet rolling capability added, with 5mm forming capacity.' },
    { year: '2023', title: 'Welding Capability Added', copy: 'Laser welding and TIG/MIG/ARC welding capability commissioned across the shop floor.' },
    { year: '2024', title: 'Major Equipment Investment', copy: 'CNC press brake (Hindustan, 100T), Senfeng sheet & pipe laser cutting, and pipe bending equipment added.' },
    { year: '2025', title: 'Continued Expansion', copy: 'Additional MIG welding (200A), a 20-ton power press, and a drilling machine commissioned.' },
    { year: '2026', title: 'Unit 2 Commissioned', copy: 'Deburring machine and a 50-ton power press added; Unit 2 — a 30,000 sft BESS Container Manufacturing facility — under active expansion.' },
  ],
  pillars: [
    { title: 'Single-Source Accountability', copy: 'One partner owns design, simulation, fabrication and finishing — no handoffs, no gaps between vendors.' },
    { title: 'Documented Quality System', copy: 'Every delivery is governed by a certified ISO 9001:2015 Quality Management System.' },
    { title: 'Continuous Reinvestment', copy: 'Machinery additions every year since 2022 keep tolerances tight and lead times short.' },
    { title: 'Multi-Sector Trust', copy: 'From railway PSUs to EV innovators, our capability spans the sectors that demand the most.' },
  ],
  faqs: [
    { q: 'When was G Industries founded and where is it based?', a: 'G Industries was founded in 2021 in Dundigal, Gandi Maisamma, Hyderabad, Telangana. The company operates as a single-source manufacturing partner, bringing design, simulation, fabrication, and finishing together under one roof.' },
    { q: 'Is G Industries a certified and legally registered manufacturer?', a: 'Yes. G Industries is ISO 9001:2015 certified, GST registered, and registered under the Udyam/MSME scheme as a Micro Enterprise. Full registration numbers and validity dates are listed on our Quality & Certifications page.' },
    { q: 'How large is the G Industries team?', a: 'G Industries employs a 50+ strong workforce at its Unit 1 facility in Hyderabad, covering heavy fabrication and BESS container manufacturing.' },
    { q: 'What makes G Industries different from other fabrication companies?', a: 'Most fabrication projects stall when design, simulation, fabrication, and finishing sit with different vendors. G Industries eliminates that fragmentation by owning every stage of the Design → Simulate → Fabricate → Finish process internally, reducing handoffs, delays, and quality gaps.' },
    { q: 'Which industries and sectors does G Industries manufacture for?', a: 'G Industries manufactures precision components for Railways, Electric Vehicles, Electronics, Agri-Tech, Laboratory Equipment, and Switchgear Systems, with a particular specialization in BESS (Battery Energy Storage System) containers.' },
  ],
  ctaImage: { src: '/quality-images/Factory image.png', alt: '' },
};

export const ABOUT_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  foundation: z.object({
    image: imgSchema, caption: z.string(), eyebrow: z.string(), heading: z.string(), introText: z.string(),
    missionLabel: z.string(), missionText: z.string(), stats: z.array(z.object({ num: z.string(), label: z.string() })),
  }),
  journey: z.array(z.object({ year: z.string(), title: z.string(), copy: z.string() })),
  pillars: z.array(z.object({ title: z.string(), copy: z.string() })),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<AboutContent>;

export const ABOUT_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'object', key: 'foundation', label: 'Our Foundation section', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'caption', label: 'Image caption' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'introText', label: 'Paragraph 1' },
    { type: 'text', key: 'missionLabel', label: 'Paragraph 2 label' },
    { type: 'textarea', key: 'missionText', label: 'Paragraph 2 text' },
    { type: 'list', key: 'stats', label: 'Mini stats (fixed 3 — edit text only)', itemFields: [
      { type: 'text', key: 'num', label: 'Number' },
      { type: 'text', key: 'label', label: 'Label' },
    ] },
  ] },
  { type: 'list', key: 'journey', label: 'Company journey / timeline', addLabel: 'Add year', itemFields: [
    { type: 'text', key: 'year', label: 'Year' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'copy', label: 'Description' },
  ] },
  { type: 'list', key: 'pillars', label: 'Pillars (icons fixed — edit text only, do not add/remove)', itemFields: [
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'copy', label: 'Description' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image' },
];
