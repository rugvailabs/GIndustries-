import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type QualityCertificationsContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  quotePart1: string;
  quotePart2: string;
  quoteCite: string;
  certs: { title: string; copy: string; certNo: string }[];
  pillars: { title: string; copy: string }[];
  galleryImages: { image: { src: string; alt: string }; cap: string }[];
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const QUALITY_CERTIFICATIONS_DEFAULTS: QualityCertificationsContent = {
  hero: {
    image: { src: '/quality-images/Inspection room.png', alt: 'Quality Department entrance with safety signage at the G Industries facility' },
    eyebrow: 'Accreditations',
    title: 'Registered, certified, compliant.',
    subtitle: 'G Industries operates as a formally registered manufacturing enterprise, holding current certifications across quality, tax, and government enterprise classifications.',
  },
  quotePart1: 'At G Industries, we focus on customer satisfaction by manufacturing and supplying high-quality engineering and fabrication products that consistently meet customer requirements. We accomplish this by ensuring on-time delivery, complying with ISO 9001:2015 and all applicable statutory and regulatory requirements, continually improving the effectiveness of our Quality Management System, fostering employee competency and involvement, and providing a framework for establishing and reviewing quality objectives.',
  quotePart2: 'Our relentless pursuit of excellence ensures that every product we deliver is crafted with the utmost precision and attention to detail — partnering with clients for unparalleled quality and customer-centric engineering solutions tailored to their exact needs.',
  quoteCite: 'Quality Policy, G Industries',
  certs: [
    { title: 'ISO 9001:2015', copy: 'Quality Management System certification for all fabrication works and manufacture of electronic & electrical enclosures.', certNo: 'Cert. No. QMS-MMXXII-04-12580 · Valid through Apr 2029' },
    { title: 'GST Registered', copy: 'Registered under Form GST REG-06 as a proprietorship enterprise in Telangana.', certNo: 'Reg. No. 36CIXPM4532Q1Z8' },
    { title: 'Udyam / MSME Registered', copy: 'Classified as a Micro Enterprise under the Ministry of MSME, Government of India — Manufacturing.', certNo: 'UDYAM-TS-20-0052717' },
  ],
  pillars: [
    { title: 'Dimensional Inspection', copy: 'Every delivery is inspected before it leaves the facility.' },
    { title: 'On-Time Delivery', copy: 'A core commitment of the documented Quality Policy.' },
    { title: 'Continual Improvement', copy: 'The Quality Management System is continually reviewed and improved, with quality objectives formally established and tracked.' },
  ],
  galleryImages: [
    { image: { src: '/quality-images/Inspection room.png', alt: 'Quality Department entrance with safety signage' }, cap: 'Quality Department, Unit 1' },
    { image: { src: '/quality-images/Inspection room.png', alt: 'Quality Department entrance, alternate view with plant layout plaque visible' }, cap: 'Quality Department Entrance' },
  ],
  faqs: [
    { q: 'Is G Industries ISO certified?', a: 'Yes — G Industries holds ISO 9001:2015 Quality Management System certification (Cert. No. QMS-MMXXII-04-12580), valid through April 2029, covering all fabrication works and the manufacture of electronic & electrical enclosures.' },
    { q: 'Is G Industries a registered business entity?', a: 'Yes — G Industries is GST registered under Form GST REG-06 as a proprietorship enterprise in Telangana (Reg. No. 36CIXPM4532Q1Z8), and is classified as a Micro Enterprise under the Ministry of MSME, Government of India (UDYAM-TS-20-0052717).' },
    { q: 'What does the Quality Management System cover?', a: 'On-time delivery, compliance with ISO 9001:2015 and all applicable statutory and regulatory requirements, continual improvement of the QMS, employee competency and involvement, and a documented framework for setting and reviewing quality objectives.' },
    { q: 'Why does ISO 9001:2015 certification matter when choosing a fabrication partner?', a: 'ISO 9001:2015 certification means a supplier’s quality processes — inspection, documentation, on-time delivery, and continual improvement — are independently verified rather than self-declared. For fabrication and engineering work, that reduces the risk of dimensional errors, missed specifications, and late deliveries reaching the client.' },
    { q: 'What statutory and regulatory requirements does G Industries comply with?', a: 'Beyond ISO 9001:2015, G Industries complies with GST registration requirements and is registered under the Udyam/MSME scheme — alongside all other statutory and regulatory obligations referenced in its documented Quality Policy.' },
  ],
  ctaImage: { src: '/quality-images/Factory image.png', alt: '' },
};

export const QUALITY_CERTIFICATIONS_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  quotePart1: z.string(), quotePart2: z.string(), quoteCite: z.string(),
  certs: z.array(z.object({ title: z.string(), copy: z.string(), certNo: z.string() })),
  pillars: z.array(z.object({ title: z.string(), copy: z.string() })),
  galleryImages: z.array(z.object({ image: imgSchema, cap: z.string() })),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<QualityCertificationsContent>;

export const QUALITY_CERTIFICATIONS_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'textarea', key: 'quotePart1', label: 'Quality policy quote, part 1' },
  { type: 'textarea', key: 'quotePart2', label: 'Quality policy quote, part 2' },
  { type: 'text', key: 'quoteCite', label: 'Quote citation' },
  { type: 'list', key: 'certs', label: 'Certifications (icons fixed — edit text only, do not add/remove)', itemFields: [
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'copy', label: 'Description' },
    { type: 'text', key: 'certNo', label: 'Cert / registration number line' },
  ] },
  { type: 'list', key: 'pillars', label: 'Pillars (icons fixed — edit text only, do not add/remove)', itemFields: [
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'copy', label: 'Description' },
  ] },
  { type: 'list', key: 'galleryImages', label: 'Quality Department gallery (fixed pair)', itemFields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'cap', label: 'Caption' },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image' },
];
