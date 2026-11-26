import { z } from 'zod';
import type { FieldSchema } from '../fields';

const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type ProjectsContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  items: { num: string; client: string; title: string; desc: string; note: string; image: { src: string; alt: string }; cap: string }[];
  summary: string;
  sidebarStats: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

export const PROJECTS_DEFAULTS: ProjectsContent = {
  hero: {
    image: { src: '/quality-images/file_00000000d7bc81f49164140fc69f24c1.png', alt: 'BESS container chassis fabrication on the G Industries shop floor, with G Industries signage visible' },
    eyebrow: 'Recent Track Record',
    title: 'Proven capabilities. Delivered.',
    subtitle: 'From energy storage to heavy industrial machinery, G Industries has a growing portfolio of high-stakes, high-precision deliveries.',
  },
  items: [
    {
      num: '01', client: 'Medha Servo Drives', title: 'BESS Container, Railways & EV',
      desc: 'Manufactured custom 10-foot and 20-foot BESS Containers for large-scale energy storage deployments.',
      note: "Spanning three of G Industries' core sectors — BESS energy storage, railways, and electric vehicles — in a single engagement.",
      image: { src: '/quality-images/file_00000000d7bc81f49164140fc69f24c1.png', alt: 'Welded steel BESS container structural base and chassis in the fabrication shop' },
      cap: 'Container chassis fabrication, Unit 2',
    },
    {
      num: '02', client: 'BHEL', title: 'Power Containers',
      desc: 'Successfully delivered two heavy industrial-grade specialized containers for Bharat Heavy Electricals Limited.',
      note: 'BHEL is one of India’s largest power-sector public sector enterprises, engaged in heavy electrical equipment manufacturing.',
      image: { src: '/quality-images/Bhel power containers.png', alt: 'Heavy industrial-grade power container delivered for BHEL' },
      cap: 'Sheet-metal enclosure fabrication, Unit 1',
    },
    {
      num: '03', client: 'VEM Technologies', title: 'CNC Machine Body',
      desc: 'Engineered and manufactured a high-precision CNC Machine Body to exacting tolerances.',
      note: 'A deliverable that called on the full design-to-finish chain, from structural simulation through to final dimensional inspection.',
      image: { src: '/quality-images/Vem cnc machine body.png', alt: 'Precision-fabricated stainless steel CNC machine body for VEM Technologies' },
      cap: 'Precision-machined component, ex-works',
    },
  ],
  summary: "These three engagements represent G Industries' documented track record to date — but the same single-source capability (design, simulation, fabrication, and finishing under one roof) now supports 25+ organizations across railways, EV, electronics, agri-tech, and switchgear sectors.",
  sidebarStats: [
    { label: 'Founded', value: '2021' },
    { label: 'Quality System', value: 'ISO 9001:2015' },
    { label: 'Workforce', value: '50+' },
  ],
  faqs: [
    { q: 'What kind of projects has G Industries delivered?', a: 'Documented deliveries span BESS (Battery Energy Storage System) containers for Medha Servo Drives, heavy industrial power containers for BHEL, and a precision CNC machine body for VEM Technologies — covering energy storage, railways, EV, and heavy machinery sectors.' },
    { q: 'Has G Industries worked with BHEL?', a: 'Yes. G Industries successfully delivered two heavy industrial-grade specialized power containers for Bharat Heavy Electricals Limited (BHEL), one of India’s largest power-sector public sector enterprises.' },
    { q: 'Does G Industries manufacture precision CNC machine bodies?', a: 'Yes — G Industries engineered and manufactured a high-precision CNC Machine Body for VEM Technologies, a deliverable that called on the full design-to-finish chain, from structural simulation through final dimensional inspection.' },
    { q: 'Can G Industries handle large-scale, multi-sector industrial contracts?', a: 'Yes. The Medha Servo Drives engagement alone spanned three sectors — BESS energy storage, railways, and electric vehicles — demonstrating the single-source capability that now supports 25+ organizations across multiple industries.' },
  ],
};

export const PROJECTS_SCHEMA = z.object({
  hero: z.object({ image: z.object({ src: z.string().min(1), alt: z.string() }), eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  items: z.array(z.object({
    num: z.string(), client: z.string(), title: z.string(), desc: z.string(), note: z.string(),
    image: z.object({ src: z.string().min(1), alt: z.string() }), cap: z.string(),
  })),
  summary: z.string(),
  sidebarStats: z.array(z.object({ label: z.string(), value: z.string() })),
  faqs: z.array(faqSchema),
}) satisfies z.ZodType<ProjectsContent>;

export const PROJECTS_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'list', key: 'items', label: 'Projects', addLabel: 'Add project', itemFields: [
    { type: 'text', key: 'num', label: 'Number' },
    { type: 'text', key: 'client', label: 'Client' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'desc', label: 'Description' },
    { type: 'textarea', key: 'note', label: 'Note' },
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'cap', label: 'Image caption' },
  ] },
  { type: 'textarea', key: 'summary', label: 'Summary paragraph' },
  { type: 'list', key: 'sidebarStats', label: 'Sidebar stats (fixed 3 — edit text only)', itemFields: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'text', key: 'value', label: 'Value' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
];
