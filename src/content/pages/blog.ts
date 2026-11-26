import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });

export type BlogIndexContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  // Mirrors BLOG_POSTS by position (fixed 4 — slugs/dates live in code, only marketing copy is editable here).
  postOverrides: { title: string; excerpt: string; image: { src: string; alt: string } }[];
};

export const BLOG_INDEX_DEFAULTS: BlogIndexContent = {
  hero: {
    image: { src: '/quality-images/9ab78c05-093b-405e-9850-54976077abdf.jpg', alt: 'The G Industries team on the shop floor at the Hyderabad facility' },
    eyebrow: 'Resources',
    title: 'Fabrication and BESS engineering, explained.',
    subtitle: 'Practical guides from the G Industries engineering team — BESS container specifications, welding processes, and the quality standards behind every delivery.',
  },
  postOverrides: [
    { title: 'BESS Container Specifications: Sizes, Capacity & Key Requirements', excerpt: 'What actually goes into a BESS container spec sheet — standard sizes, typical capacity ranges, and the structural, thermal and safety requirements that separate a purpose-built enclosure from a shipping container.', image: { src: '/quality-images/file_000000005b9481fabfbaf36350a99db5 (1).png', alt: 'Steel I-beam chassis frame for a battery energy storage container' } },
    { title: 'How Battery Energy Storage (BESS) Containers Are Manufactured', excerpt: 'From CAD model to dispatch: the design, fabrication, and finishing stages a BESS container goes through before it is ready to house battery modules in the field.', image: { src: '/quality-images/file_000000005b9481fabfbaf36350a99db5 (1).png', alt: 'Large welded steel container chassis under fabrication' } },
    { title: 'ARC vs MIG vs TIG Welding: What’s the Difference?', excerpt: 'Three welding processes, three very different jobs. A plain-language guide to when a fabricator reaches for stick, wire-fed, or tungsten-arc welding — and why.', image: { src: '/quality-images/file_000000001664820883b0e955ea3d75a6.png', alt: 'MIG welding station with gas cylinders on the fabrication shop floor' } },
    { title: 'ISO 9001 vs ISO 14001: What’s the Difference for Manufacturers?', excerpt: 'Two of the most common ISO certifications a fabrication partner can hold — one governs quality management, the other environmental management. Here is what each actually covers.', image: { src: '/quality-images/Inspection room.png', alt: 'Quality Department entrance with safety signage at the G Industries facility' } },
  ],
};

export const BLOG_INDEX_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  postOverrides: z.array(z.object({ title: z.string().min(1), excerpt: z.string(), image: imgSchema })),
}) satisfies z.ZodType<BlogIndexContent>;

export const BLOG_INDEX_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'list', key: 'postOverrides', label: 'Blog posts (fixed 4 — tied to real articles, do not add/remove)', itemFields: [
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'excerpt', label: 'Excerpt' },
    { type: 'image', key: 'image', label: 'Thumbnail image' },
  ] },
];
