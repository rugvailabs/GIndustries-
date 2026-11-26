import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type BessSolutionsContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  image1: { src: string; alt: string };
  caption1: string;
  image2: { src: string; alt: string };
  caption2: string;
  eyebrow: string;
  heading: string;
  copy: string;
  specs: { tag: string; title: string; copy: string }[];
  focus: { eyebrow: string; heading: string; items: { title: string; copy: string }[] };
  trackRecord: { client: string; title: string; desc: string; image: { src: string; alt: string }; caption: string };
  expansion: { num: string; label: string; note: string };
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const BESS_SOLUTIONS_DEFAULTS: BessSolutionsContent = {
  hero: {
    image: { src: '/quality-images/file_000000005b9481fabfbaf36350a99db5 (1).png', alt: 'Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit' },
    eyebrow: 'Key Specialization',
    title: 'BESS container systems, engineered for severe duty.',
    subtitle: 'Custom-engineered container ecosystems for Battery Energy Storage Systems (BESS) and severe-duty industrial applications — engineered for thermal management, structural integrity, and operational safety.',
  },
  image1: { src: '/quality-images/file_000000005b9481fabfbaf36350a99db5 (1).png', alt: 'Large welded steel container chassis under fabrication, with G Industries signage visible' },
  caption1: 'Container structural base under fabrication — Unit 2, BESS Manufacturing',
  image2: { src: '/quality-images/f31fc7ce-e1bc-4df0-8d2f-bfa8ce511d00.png', alt: 'Steel I-beam chassis frame for a battery energy storage container, raised on support legs' },
  caption2: 'I-beam chassis, engineered for heavy structural loads',
  eyebrow: 'Custom-Engineered Container Ecosystems',
  heading: 'Built for thermal management and structural integrity',
  copy: 'G Industries specializes in heavily optimized enclosure systems for Battery Energy Storage Systems (BESS) and severe-duty industrial applications — engineered for thermal management, structural integrity, and operational safety. BESS is one of the industries we serve, alongside Railways, EV, and Electronics.',
  specs: [
    { tag: '10 ft', title: 'Compact BESS Containers', copy: 'Compact, high-performance energy storage enclosures.' },
    { tag: '20 ft', title: 'Full-Scale BESS Containers', copy: 'Full-scale industrial BESS infrastructure solutions.' },
  ],
  focus: {
    eyebrow: 'Engineering Focus',
    heading: 'Every container is a structural project, not a box',
    items: [
      { title: 'Structural Integrity', copy: 'Steel I-beam chassis construction engineered for heavy structural loads and long service life.' },
      { title: 'Thermal Management', copy: 'Enclosure design accounts for the thermal demands of battery energy storage in continuous duty.' },
      { title: 'Operational Safety', copy: 'Built and inspected under the same ISO 9001:2015 Quality Management System as every delivery.' },
    ],
  },
  trackRecord: {
    client: 'Medha Servo Drives',
    title: 'BESS Container, Railways & EV',
    desc: 'Manufactured custom 10-foot and 20-foot BESS Containers for large-scale energy storage deployments.',
    image: { src: '/quality-images/file_00000000d7bc81f49164140fc69f24c1.png', alt: 'Steel I-beam chassis frame for a battery energy storage container' },
    caption: 'I-beam chassis, Unit 2',
  },
  expansion: {
    num: '30,000 sft',
    label: 'Unit 2 — BESS Container Manufacturing (active expansion)',
    note: 'Standard BESS container configurations are on track to join the product catalog — until then, every size is available as a custom fabrication engagement.',
  },
  faqs: [
    { q: 'What is a BESS container, and why does it need specialized fabrication?', a: 'A BESS (Battery Energy Storage System) container is a structural enclosure that houses battery modules for grid-scale or industrial energy storage. Because it must manage heat, protect sensitive electronics, and carry significant structural load over years of continuous duty, it requires purpose-engineered fabrication rather than a standard shipping container.' },
    { q: 'What container sizes does G Industries manufacture for battery energy storage systems?', a: 'G Industries manufactures both 10-ft compact BESS containers for smaller, high-performance deployments and 20-ft full-scale BESS containers for large industrial energy-storage infrastructure.' },
    { q: 'What engineering factors go into a G Industries BESS container design?', a: 'Every BESS container is engineered around three priorities: structural integrity (steel I-beam chassis construction built for heavy, continuous loads), thermal management (enclosure design suited to battery heat demands), and operational safety (fabricated and inspected under the same ISO 9001:2015 Quality Management System as all other work).' },
    { q: 'Has G Industries delivered BESS containers for a real energy storage project?', a: 'Yes — G Industries manufactured custom 10-foot and 20-foot BESS containers for Medha Servo Drives, a project spanning large-scale energy storage, railways, and EV applications.' },
  ],
  ctaImage: { src: '/quality-images/file_000000005b9481fabfbaf36350a99db5 (1).png', alt: '' },
};

export const BESS_SOLUTIONS_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  image1: imgSchema, caption1: z.string(), image2: imgSchema, caption2: z.string(),
  eyebrow: z.string(), heading: z.string(), copy: z.string(),
  specs: z.array(z.object({ tag: z.string(), title: z.string(), copy: z.string() })),
  focus: z.object({ eyebrow: z.string(), heading: z.string(), items: z.array(z.object({ title: z.string(), copy: z.string() })) }),
  trackRecord: z.object({ client: z.string(), title: z.string(), desc: z.string(), image: imgSchema, caption: z.string() }),
  expansion: z.object({ num: z.string(), label: z.string(), note: z.string() }),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<BessSolutionsContent>;

export const BESS_SOLUTIONS_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'image', key: 'image1', label: 'Image 1' },
  { type: 'text', key: 'caption1', label: 'Image 1 caption' },
  { type: 'image', key: 'image2', label: 'Image 2' },
  { type: 'text', key: 'caption2', label: 'Image 2 caption' },
  { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
  { type: 'text', key: 'heading', label: 'Heading' },
  { type: 'textarea', key: 'copy', label: 'Copy' },
  { type: 'list', key: 'specs', label: 'Spec cards (fixed pair — edit text only)', itemFields: [
    { type: 'text', key: 'tag', label: 'Tag' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'copy', label: 'Description' },
  ] },
  { type: 'object', key: 'focus', label: 'Engineering Focus section', fields: [
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'list', key: 'items', label: 'Cards (icons fixed — edit text only, do not add/remove)', itemFields: [
      { type: 'text', key: 'title', label: 'Title' },
      { type: 'textarea', key: 'copy', label: 'Description' },
    ] },
  ] },
  { type: 'object', key: 'trackRecord', label: 'Recent Track Record', fields: [
    { type: 'text', key: 'client', label: 'Client' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'desc', label: 'Description' },
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'caption', label: 'Image caption' },
  ] },
  { type: 'object', key: 'expansion', label: 'Expansion stat', fields: [
    { type: 'text', key: 'num', label: 'Number' },
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'textarea', key: 'note', label: 'Note' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image' },
];
