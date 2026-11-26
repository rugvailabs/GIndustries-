import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type ContactContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  formHeading: string;
  formIntro: string;
  addressLine1: string;
  addressLine2: string;
  email: string;
  email2: string;
  phone: string;
  sidebar: { label: string; value: string }[];
  sidebarNote: string;
  faqs: { q: string; a: string }[];
  certifiedHeading: string;
  certifiedCopy: string;
};

export const CONTACT_DEFAULTS: ContactContent = {
  hero: {
    image: { src: '/quality-images/Factory image.png', alt: 'Wide view of the G Industries fabrication shop floor' },
    eyebrow: 'Get In Touch',
    title: 'Challenge everything with G Industries.',
    subtitle: 'Ready to elevate your next project? Partner with a manufacturer built to meet the most demanding engineering challenges — end to end.',
  },
  formHeading: 'Tell us about your project',
  formIntro: "Share a few details and our team will follow up directly — or use the phone/email below if you'd rather reach us that way.",
  addressLine1: 'Gandi Maisamma, Dundigal,',
  addressLine2: 'Hyderabad, Telangana 500043',
  email: 'mvskiran@gindustries.co.in',
  email2: 'gindustries.md@gmail.com',
  phone: '+91 89776 50585',
  sidebar: [
    { label: 'Founded', value: '2021' },
    { label: 'Workforce', value: '50+' },
    { label: 'Certification', value: 'ISO 9001:2015' },
    { label: 'Registered', value: 'GST · Udyam/MSME' },
  ],
  sidebarNote: 'Registered vendor — Railway Tenders. Engaging with Defence Sector Projects.',
  faqs: [
    { q: 'What information should I include when I reach out?', a: 'A short description of your project, the industry or application it serves, and any drawings or specifications you already have — email or call directly and the team will follow up.' },
    { q: 'Does G Industries handle the full project, from design to delivery?', a: 'Yes — G Industries is a single-source manufacturing partner bridging conceptual design, structural simulation, heavy fabrication, and precise post-processing under one roof.' },
    { q: 'Where is G Industries located?', a: 'Gandi Maisamma, Dundigal, Hyderabad, Telangana 500043, India — the facility spans three units (13,000 sft, 10,000 sft, and 30,000 sft) with 40,000 sft available for expansion.' },
    { q: 'Can I request a quote for a custom fabrication or BESS container project?', a: 'Yes — submit the contact form with your project details, industry, and any drawings or specifications you already have, or reach out directly by email or phone, and the team will follow up with next steps.' },
  ],
  certifiedHeading: 'ISO 9001:2015 · GST Registered · Udyam/MSME Registered',
  certifiedCopy: 'A registered, ISO-certified manufacturing enterprise based in Hyderabad, Telangana.',
};

export const CONTACT_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  formHeading: z.string(), formIntro: z.string(),
  addressLine1: z.string(), addressLine2: z.string(),
  email: z.string(), email2: z.string(), phone: z.string(),
  sidebar: z.array(z.object({ label: z.string(), value: z.string() })),
  sidebarNote: z.string(),
  faqs: z.array(faqSchema),
  certifiedHeading: z.string(), certifiedCopy: z.string(),
}) satisfies z.ZodType<ContactContent>;

export const CONTACT_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'text', key: 'formHeading', label: 'Form section heading' },
  { type: 'textarea', key: 'formIntro', label: 'Form section intro' },
  { type: 'text', key: 'addressLine1', label: 'Address line 1' },
  { type: 'text', key: 'addressLine2', label: 'Address line 2' },
  { type: 'text', key: 'email', label: 'Primary email' },
  { type: 'text', key: 'email2', label: 'Secondary email' },
  { type: 'text', key: 'phone', label: 'Phone' },
  { type: 'list', key: 'sidebar', label: 'Quick Facts sidebar (fixed 4 — edit text only)', itemFields: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'text', key: 'value', label: 'Value' },
  ] },
  { type: 'textarea', key: 'sidebarNote', label: 'Sidebar note' },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'text', key: 'certifiedHeading', label: 'Certified Partner heading' },
  { type: 'textarea', key: 'certifiedCopy', label: 'Certified Partner copy' },
];
