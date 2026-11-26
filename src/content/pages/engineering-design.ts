import { z } from 'zod';
import type { FieldSchema } from '../fields';

const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });
const faqSchema = z.object({ q: z.string().min(1), a: z.string() });
const faqFields: FieldSchema[] = [
  { type: 'text', key: 'q', label: 'Question' },
  { type: 'textarea', key: 'a', label: 'Answer' },
];

export type EngineeringDesignContent = {
  hero: { image: { src: string; alt: string }; eyebrow: string; title: string; subtitle: string };
  design: { eyebrow: string; heading: string; para1: string; para2: string; image: { src: string; alt: string }; caption: string };
  simulate: { eyebrow: string; heading: string; para1: string; para2: string; image: { src: string; alt: string }; caption: string };
  capabilities: { eyebrow: string; heading: string; intro: string; items: { title: string; copy: string }[] };
  gallery: { eyebrow: string; heading: string; images: { image: { src: string; alt: string } }[] };
  faqs: { q: string; a: string }[];
  ctaImage: { src: string; alt: string };
};

export const ENGINEERING_DESIGN_DEFAULTS: EngineeringDesignContent = {
  hero: {
    image: { src: '/quality-images/Product 1.png', alt: 'Precision-machined stainless steel bracket engineered at G Industries' },
    eyebrow: 'Our Advantage',
    title: 'CAD to finite element analysis, under one roof.',
    subtitle: 'Every G Industries project begins at the design desk — full 3D modeling and simulation validate performance long before fabrication starts.',
  },
  design: {
    eyebrow: 'Design',
    heading: 'Advanced CAD Modeling',
    para1: 'Full 3D parametric design for complex assemblies, custom enclosures, and structural systems — engineered to exact specifications. Every component is modeled to the tolerances it must hold in service, not approximated on the shop floor.',
    para2: 'This discipline underpins every capability that follows: the BESS container chassis, switchgear enclosures, and precision brackets shown across this site all begin as a fully specified CAD model.',
    image: { src: '/quality-images/IMG_20261021_104523.jpg', alt: 'Fabricated stainless steel cone enclosure with mounting flange, engineered to a precise bolt pattern' },
    caption: 'Enclosure housing — flange and bolt pattern engineered to spec',
  },
  simulate: {
    eyebrow: 'Simulate',
    heading: 'Finite Element Analysis & Structural Simulation',
    para1: 'Stress, thermal, and structural simulation validates every design before a single piece of metal is cut — reducing risk and rework. Real-world load-case modelling ensures performance under extreme operational and environmental conditions.',
    para2: 'For severe-duty applications like BESS enclosures and railway components, this step catches design issues that would otherwise surface only after fabrication — when they are far more expensive to fix.',
    image: { src: '/quality-images/IMG_20261021_104739.jpg', alt: 'Formed steel bowl-shaped bracket component engineered for load-bearing performance' },
    caption: 'Formed bracket — geometry shaped for structural load paths',
  },
  capabilities: {
    eyebrow: 'Our Advantage',
    heading: 'Design, simulate, then fabricate',
    intro: 'One partner carries every design through to a validated, fabrication-ready specification.',
    items: [
      { title: 'Advanced CAD Modeling', copy: 'Full 3D parametric design for complex assemblies, custom enclosures, and structural systems.' },
      { title: 'Finite Element Analysis', copy: 'Stress, thermal, and structural simulation validates every design before fabrication begins.' },
      { title: 'Structural Simulation', copy: 'Real-world load-case modelling for performance under extreme operational conditions.' },
    ],
  },
  gallery: {
    eyebrow: 'Engineering Output',
    heading: 'Precision carried from screen to shop floor',
    images: [
      { image: { src: '/quality-images/Product 1.png', alt: 'Precision-machined stainless steel bracket with sleeve, alternate angle' } },
      { image: { src: '/quality-images/IMG_20261021_104353.jpg', alt: 'Precision-machined stainless steel T-bracket with sensor port cutout' } },
      { image: { src: '/quality-images/IMG_20261021_104535.jpg', alt: 'Flanged cone component, top-down view showing bolt pattern' } },
      { image: { src: '/quality-images/IMG_20261021_104554.jpg', alt: 'Flanged cone component with square mounting bracket and bolts' } },
      { image: { src: '/quality-images/IMG_20261021_104750.jpg', alt: 'Formed steel bowl-shaped bracket component, side angle' } },
      { image: { src: '/quality-images/IMG_20261021_104831.jpg', alt: 'Welded stainless steel mesh grille disc component, overhead view' } },
    ],
  },
  faqs: [
    { q: 'Does G Industries offer 3D CAD modeling and engineering design services?', a: 'Yes. G Industries provides full 3D parametric CAD modeling for complex assemblies, custom enclosures, and structural systems, engineering every component to the exact tolerances it needs to hold in service.' },
    { q: 'What is Finite Element Analysis (FEA), and why does it matter before fabrication?', a: 'FEA is computer-based stress, thermal, and structural simulation that tests how a design will behave under real operating conditions. G Industries runs FEA on every design before cutting metal, catching weaknesses early and reducing costly rework after fabrication has begun.' },
    { q: 'Can G Industries validate a design under real-world load and environmental conditions?', a: 'Yes — structural simulation and real-world load-case modelling are standard practice, particularly for severe-duty applications such as BESS enclosures and railway components that must perform reliably under extreme operational and environmental stress.' },
    { q: 'Is engineering and design handled in-house at G Industries?', a: 'Yes. Design and simulation are carried out internally, under the same roof as fabrication and finishing — so a validated CAD model moves directly into production without being handed off to a separate vendor. See Manufacturing & Fabrication for what happens after a design is approved.' },
  ],
  ctaImage: { src: '/quality-images/IMG_20261021_104523.jpg', alt: '' },
};

export const ENGINEERING_DESIGN_SCHEMA = z.object({
  hero: z.object({ image: imgSchema, eyebrow: z.string(), title: z.string(), subtitle: z.string() }),
  design: z.object({ eyebrow: z.string(), heading: z.string(), para1: z.string(), para2: z.string(), image: imgSchema, caption: z.string() }),
  simulate: z.object({ eyebrow: z.string(), heading: z.string(), para1: z.string(), para2: z.string(), image: imgSchema, caption: z.string() }),
  capabilities: z.object({ eyebrow: z.string(), heading: z.string(), intro: z.string(), items: z.array(z.object({ title: z.string(), copy: z.string() })) }),
  gallery: z.object({ eyebrow: z.string(), heading: z.string(), images: z.array(z.object({ image: imgSchema })) }),
  faqs: z.array(faqSchema),
  ctaImage: imgSchema,
}) satisfies z.ZodType<EngineeringDesignContent>;

const splitSectionFields: (name: string) => FieldSchema[] = () => [
  { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
  { type: 'text', key: 'heading', label: 'Heading' },
  { type: 'textarea', key: 'para1', label: 'Paragraph 1' },
  { type: 'textarea', key: 'para2', label: 'Paragraph 2' },
  { type: 'image', key: 'image', label: 'Image' },
  { type: 'text', key: 'caption', label: 'Image caption' },
];

export const ENGINEERING_DESIGN_FIELDS: FieldSchema[] = [
  { type: 'object', key: 'hero', label: 'Hero', fields: [
    { type: 'image', key: 'image', label: 'Image' },
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'title', label: 'Title' },
    { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
  ] },
  { type: 'object', key: 'design', label: 'Design section', fields: splitSectionFields('design') },
  { type: 'object', key: 'simulate', label: 'Simulate section', fields: splitSectionFields('simulate') },
  { type: 'object', key: 'capabilities', label: 'Capability cards section', fields: [
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'textarea', key: 'intro', label: 'Intro' },
    { type: 'list', key: 'items', label: 'Cards (icons fixed — edit text only, do not add/remove)', itemFields: [
      { type: 'text', key: 'title', label: 'Title' },
      { type: 'textarea', key: 'copy', label: 'Description' },
    ] },
  ] },
  { type: 'object', key: 'gallery', label: 'Gallery section', fields: [
    { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
    { type: 'text', key: 'heading', label: 'Heading' },
    { type: 'list', key: 'images', label: 'Gallery images', addLabel: 'Add image', itemFields: [
      { type: 'image', key: 'image', label: 'Image' },
    ] },
  ] },
  { type: 'list', key: 'faqs', label: 'FAQs', addLabel: 'Add FAQ', itemFields: faqFields },
  { type: 'image', key: 'ctaImage', label: 'Bottom CTA background image' },
];
