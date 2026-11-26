import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type MachineryContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  intro: string;
  machines: { image: { src: string; alt: string }; title: string; meta: string }[];
  specRows: { equipment: string; spec: string; year: string }[];
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const MACHINERY_DEFAULTS: MachineryContent = {
  hero: {
    image: { src: '/quality-images/file_000000009e1c8208ac1fd4174e502cda.png', alt: 'Senfeng fiber laser cutting machine on the G Industries shop floor, with nesting layout visible on the control screen' },
    eyebrow: 'Manufacturing Equipment',
    title: 'Precision machinery, continuously modernized.',
    subtitle: 'A continuously modernized machine shop — anchored by recent (2022–2026) additions — gives G Industries the range to cut, weld, form, and finish to exacting tolerances.',
  },
  intro: 'Anchored by recent (2022–2026) additions, this equipment base gives G Industries the range to cut, weld, form, and finish to exacting tolerances across every unit',
  machines: [
    { image: { src: '/quality-images/file_000000009e1c8208ac1fd4174e502cda.png', alt: 'Senfeng fiber laser cutting machine on the shop floor' }, title: 'Sheet & Pipe Laser Cutting', meta: 'Senfeng, 3 kW · 2024' },
    { image: { src: '/quality-images/file_000000001778820882caf42727747702.png', alt: 'Hindustan Hydraulics Swift 100-31 CNC press brake machine' }, title: 'CNC Press Brake', meta: 'Hindustan, 100T · 2024' },
    { image: { src: '/quality-images/file_00000000c5f08208ace959c6353cb2c1.png', alt: 'IPG Photonics LightWeld handheld laser welding system in use' }, title: 'Laser Welding', meta: '1.5 kW · 2023, 25 & 26' },
    { image: { src: '/quality-images/file_00000000046c820aa9597951eafb2253 (1).png', alt: 'Tinex power press machines and a pillar drilling machine on the shop floor' }, title: 'Power Press & Drilling', meta: '50T / 20T · Ø36mm · 2024–26' },
    { image: { src: '/quality-images/file_00000000046c820aa9597951eafb2253 (1).png', alt: 'Tinex power press machines beside a Pipe Rolling Machine (PR/001) station' }, title: 'Power Press & Pipe Rolling', meta: 'Pipe Rolling, PR/001' },
    { image: { src: '/quality-images/file_0000000093908208b1a29b8a59852f9e.png', alt: 'Row of laser welding stations in the LW/002 work area' }, title: 'Laser Welding Stations', meta: '5 Nos. installed' },
    { image: { src: '/quality-images/file_000000001664820883b0e955ea3d75a6.png', alt: 'MIG welding station, MIG/002, with gas cylinders' }, title: 'MIG Welding', meta: '400A · 200A' },
    { image: { src: '/quality-images/file_00000000bf3c82088057776799a11bec.png', alt: 'Industrial air compressor and dryer unit supporting the fabrication shop' }, title: 'Compressed Air System', meta: 'Utility infrastructure' },
  ],
  specRows: [
    { equipment: 'Sheet Laser Cutting', spec: 'Senfeng, 3 kW', year: '2024' },
    { equipment: 'Pipe Laser Cutting', spec: 'Senfeng, 3 kW', year: '2024' },
    { equipment: 'Plasma Cutting', spec: 'Power Plus, 100mm', year: '2020' },
    { equipment: 'CNC Press Brake', spec: 'Hindustan, 100T', year: '2024' },
    { equipment: 'Sheet Rolling', spec: 'Capacity 5mm', year: '2022' },
    { equipment: 'Pipe Bending', spec: 'Gujarath, 40mm', year: '2024' },
    { equipment: 'Deburring Machine', spec: '75mm Thickness', year: '2026' },
    { equipment: 'Laser Welding', spec: '5 Nos., 1.5 kW', year: '2023, 25 & 26' },
    { equipment: 'TIG Welding Set', spec: '500 Amp AC/DC', year: '2023' },
    { equipment: 'MIG Welding', spec: '5 Nos., 400 A', year: '2023' },
    { equipment: 'MIG Welding', spec: '2 Nos., 200 Amp', year: '2025' },
    { equipment: 'ARC Welding', spec: '200 Amp', year: '2023' },
    { equipment: 'Power Press', spec: '50 Ton', year: '2026' },
    { equipment: 'Power Press', spec: '20 Ton', year: '2025' },
    { equipment: 'Fly Press', spec: '10', year: '2024' },
    { equipment: 'Drilling Machine', spec: 'Ø36 mm', year: '2025' },
  ],
  faqs: [
    { q: 'What laser cutting equipment does G Industries operate?', a: 'G Industries runs Senfeng 3 kW fiber laser cutting machines for both sheet and pipe cutting, commissioned in 2024, giving tight-tolerance cutting across a wide range of sheet metal and tubular stock.' },
    { q: 'What is the tonnage of the CNC press brake used for sheet metal bending?', a: 'G Industries operates a Hindustan Hydraulics 100-ton CNC press brake, commissioned in 2024, for precision bending of sheet metal components and enclosures.' },
    { q: 'What welding processes does G Industries support?', a: 'TIG welding (500 Amp AC/DC), MIG welding (400A and 200A, multiple units), ARC welding (200 Amp), and laser welding (1.5 kW, five installed stations) — covering heavy structural welds through to fine, precision joins.' },
    { q: 'How often does G Industries invest in new manufacturing equipment?', a: 'The machine shop has been continuously modernized with new equipment added every year since 2022, including a 50-ton power press and deburring machine commissioned in 2026 — keeping tolerances tight and lead times short.' },
  ],
  ctaImage: { src: '/quality-images/Factory image.png', alt: '' },
};

export const MACHINERY_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  intro: z.string(),
  machines: z.array(z.object({ image: imgSchema, title: z.string(), meta: z.string() })),
  specRows: z.array(z.object({ equipment: z.string(), spec: z.string(), year: z.string() })),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<MachineryContent>;

export const MACHINERY_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'textarea', key: 'intro', label: 'Intro paragraph' },
  { type: 'list', key: 'machines', label: 'Machine cards', addLabel: 'Add machine', itemFields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'text', key: 'meta', label: 'Meta (spec line)' },
  ] },
  { type: 'list', key: 'specRows', label: 'Spec table rows', addLabel: 'Add row', itemFields: [
    { type: 'text', key: 'equipment', label: 'Equipment' },
    { type: 'text', key: 'spec', label: 'Specification' },
    { type: 'text', key: 'year', label: 'Year' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image' },
];
