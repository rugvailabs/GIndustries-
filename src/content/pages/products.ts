import { z } from 'zod';
import type { FieldSchema } from '../fields';

const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type ProductsContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  catalog: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { image: { src: string; alt: string }; name: string; tag: string; description: string }[];
  };
  comingSoon: { heading: string; copy: string };
  upcoming: { title: string; copy: string; href: string; linkLabel: string }[];
  faqs: { q: string; a: string }[];
  ctaHeadingLine1: string;
  ctaHeadingLine2: string;
  ctaHeadingEm: string;
  ctaSubcopy: string;
};

export const PRODUCTS_DEFAULTS: ProductsContent = {
  hero: {
    image: { src: '/quality-images/file_000000005b9481fabfbaf36350a99db5 (1).png', alt: 'Large welded steel container chassis under fabrication at the G Industries BESS manufacturing unit' },
    eyebrow: 'Shop',
    title: 'Our product catalog is taking shape.',
    subtitle: 'A dedicated lineup of ready-to-order products is in development. In the meantime, every item below is already available as a custom fabrication engagement.',
  },
  catalog: {
    eyebrow: 'Our Products',
    heading: 'Standard products, ready to enquire.',
    intro: 'A growing lineup of standard BESS containers and precision-fabricated products — engineered and built in-house, ready for your project.',
    items: [
      {
        image: { src: '/quality-images/10 feet Medha container.png', alt: '10-ft compact BESS container, ready for field deployment' },
        name: '10-ft Compact BESS Container',
        tag: 'BESS Container',
        description: 'Compact, high-performance battery energy storage enclosure engineered for thermal management and structural integrity.',
      },
      {
        image: { src: '/quality-images/Medha bess container 20feet.png', alt: '20-ft full-scale BESS container, ready for field deployment' },
        name: '20-ft Full-Scale BESS Container',
        tag: 'BESS Container',
        description: 'Full-scale industrial BESS infrastructure, built to the same quality system as our client deployments.',
      },
      {
        image: { src: '/quality-images/Bhel power containers.png', alt: 'Heavy industrial-grade power container' },
        name: 'Industrial Power Container',
        tag: 'Power Container',
        description: 'Heavy industrial-grade specialized container built for demanding power infrastructure applications.',
      },
      {
        image: { src: '/quality-images/Vem cnc machine body.png', alt: 'Precision CNC-machined component body' },
        name: 'Precision Machined Component',
        tag: 'Machined Component',
        description: 'Brackets, housings, and formed assemblies turned and fabricated to exact tolerances for demanding applications.',
      },
    ],
  },
  comingSoon: {
    heading: 'A standard product catalog, built for ordering online',
    copy: 'G Industries has spent years perfecting BESS containers, precision components, and custom enclosures for named clients. That same engineering is now being packaged into a catalog of standard, orderable products — launching here soon.',
  },
  upcoming: [
    { title: 'BESS Containers', copy: '10-ft and 20-ft battery energy storage enclosures, engineered for structural integrity and thermal management.', href: '/bess-solutions', linkLabel: 'See BESS Solutions' },
    { title: 'Precision Machined Components', copy: 'Brackets, housings, and formed assemblies turned and fabricated to exact tolerances.', href: '/manufacturing-fabrication', linkLabel: 'See Manufacturing & Fabrication' },
    { title: 'Custom Enclosures & Panels', copy: 'Modular enclosures and switchgear panels for electronics, EV, and industrial applications.', href: '/engineering-design', linkLabel: 'See Engineering & Design' },
  ],
  faqs: [
    { q: 'Is the G Industries product catalog available yet?', a: "Not yet — it's in development. G Industries currently operates as a single-source custom fabrication partner, and a dedicated, orderable product catalog is being built out alongside the facility's expansion." },
    { q: 'Can I still get a BESS container or custom component built today?', a: 'Yes — G Industries already designs and manufactures BESS containers, precision components, and custom enclosures to order. Reach out with your project details and the team will follow up directly.' },
    { q: 'How will I know when the product catalog launches?', a: 'Check back on this page, or get in touch — the team can keep you posted as standard product lines become available for order.' },
  ],
  ctaHeadingLine1: 'Need it before the catalog',
  ctaHeadingLine2: 'launches?',
  ctaHeadingEm: 'Talk to us.',
  ctaSubcopy: 'Every product in development is already available as a custom fabrication engagement — share your requirements and the team will follow up directly.',
};

const productImgSchema = z.object({ src: z.string().min(1), alt: z.string() });

export const PRODUCTS_SCHEMA = z.object({
  hero: z.object({ image: z.object({ src: z.string().min(1), alt: z.string() }), eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  catalog: z.object({
    eyebrow: z.string(), heading: z.string(), intro: z.string(),
    items: z.array(z.object({ image: productImgSchema, name: z.string(), tag: z.string(), description: z.string() })),
  }),
  comingSoon: z.object({ heading: z.string(), copy: z.string() }),
  upcoming: z.array(z.object({ title: z.string(), copy: z.string(), href: z.string(), linkLabel: z.string() })),
  faqs: z.array(faqSchema),
  ctaHeadingLine1: z.string(),
  ctaHeadingLine2: z.string(),
  ctaHeadingEm: z.string(),
  ctaSubcopy: z.string(),
}) satisfies z.ZodType<ProductsContent>;

export const PRODUCTS_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'object', key: 'catalog', label: 'Our Products section', fields: [
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'intro', label: 'Intro' },
    { type: 'list', key: 'items', label: 'Products', addLabel: 'Add product', itemFields: [
      { type: 'image', key: 'image', label: 'Image' },
      { type: 'text', key: 'name', label: 'Product name' },
      { type: 'text', key: 'tag', label: 'Category tag' },
      { type: 'textarea', key: 'description', label: 'Description' },
    ] },
  ] },
  { type: 'object', key: 'comingSoon', label: 'Coming Soon section', fields: [
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'copy', label: 'Copy' },
  ] },
  { type: 'list', key: 'upcoming', label: 'Upcoming products (icons fixed — edit text only, do not add/remove)', itemFields: [
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'copy', label: 'Description' },
    { type: 'url', key: 'href', label: 'Link' },
    { type: 'text', key: 'linkLabel', label: 'Link label' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'text', key: 'ctaHeadingLine1', label: 'CTA heading line 1' },
  { type: 'text', key: 'ctaHeadingLine2', label: 'CTA heading line 2 (plain part)' },
  { type: 'text', key: 'ctaHeadingEm', label: 'CTA heading line 2 (gold part)' },
  { type: 'textarea', key: 'ctaSubcopy', label: 'CTA subcopy' },
];
