import { z } from 'zod';
import type { FieldSchema } from '../fields';

export type HomeImage = { src: string; alt: string };
export type HomeCard = { title: string; copy: string };

export type HomeContent = {
  stats: {
    founded: number;
    expansionLandSqm: number;
    workforce: number;
    workforceSuffix: string;
    locationLine1: string;
    locationLine2: string;
  };
  hero: {
    tag: string;
    titleLine1: string;
    titleEm: string;
    subtitle: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    image: HomeImage;
  };
  about: {
    eyebrow: string;
    heading: string;
    foundationLabel: string;
    foundationText: string;
    missionLabel: string;
    missionText: string;
    image: HomeImage;
    mediaTagLabel: string;
    mediaTagText: string;
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: HomeCard[];
  };
  precision: {
    eyebrow: string;
    heading: string;
    items: { image: HomeImage; label: string }[];
  };
  industries: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: HomeCard[];
  };
  bess: {
    image1: HomeImage;
    caption1: string;
    image2: HomeImage;
    caption2: string;
    eyebrow: string;
    heading: string;
    copy: string;
    specs: { tag: string; title: string; copy: string }[];
  };
  facilities: {
    eyebrow: string;
    heading: string;
    intro: string;
    stats: { num: string; label: string }[];
    galleryImages: { image: HomeImage }[];
  };
  machinery: {
    eyebrow: string;
    heading: string;
    intro: string;
    machines: { image: HomeImage; title: string; meta: string }[];
    specRows: { equipment: string; spec: string; year: string }[];
  };
  why: {
    eyebrow: string;
    heading: string;
    items: HomeCard[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { image: HomeImage; num: string; client: string; title: string; desc: string; cap: string }[];
  };
  certifications: {
    eyebrow: string;
    heading: string;
    intro: string;
    quote: string;
    quoteCite: string;
  };
  clients: {
    eyebrow: string;
    heading: string;
    intro: string;
    featured: { name: string }[];
    other: { name: string }[];
    note: string;
  };
  contactCta: {
    backgroundImage: HomeImage;
    heading: string;
    subcopy: string;
    email: string;
    email2: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
  };
};

export const HOME_DEFAULTS: HomeContent = {
  stats: {
    founded: 2021,
    expansionLandSqm: 40000,
    workforce: 50,
    workforceSuffix: '+',
    locationLine1: 'Gandi Maisamma, Dundigal',
    locationLine2: 'Hyderabad, Telangana, India',
  },
  hero: {
    tag: 'Precision Engineering · Sheet Metal Fabrication · Turnkey Manufacturing',
    titleLine1: 'Engineering the future.',
    titleEm: 'Challenge everything.',
    subtitle:
      'A single-source manufacturing partner bridging conceptual design, structural simulation, heavy fabrication and precise post-processing — under one roof in Hyderabad, Telangana.',
    primaryCtaLabel: 'Explore Capabilities',
    primaryCtaHref: '#capabilities',
    secondaryCtaLabel: 'Start a Project',
    secondaryCtaHref: '#contact',
    image: {
      src: '/quality-images/9ab78c05-093b-405e-9850-54976077abdf.jpg',
      alt: 'The G Industries team on the shop floor at the Hyderabad facility, standing in front of a CNC press brake',
    },
  },
  about: {
    eyebrow: 'About Us',
    heading: 'Engineering the future, since 2021.',
    foundationLabel: 'Our Foundation —',
    foundationText:
      'Founded in 2021 in Dundigal, Gandi Maisamma, Hyderabad, Telangana, G Industries was built to redefine what a manufacturing partner can deliver — from concept to completion, under one roof.',
    missionLabel: 'Our Mission —',
    missionText:
      'To engineer, fabricate, and post-process industrial solutions that challenge industry standards and empower critical infrastructure across sectors, as a registered, ISO-certified manufacturing enterprise.',
    image: {
      src: '/quality-images/file_00000000c78c8208b0ae8e848644d348.png',
      alt: 'Raw material racks and laser-cut sheet metal stock on the G Industries fabrication shop floor',
    },
    mediaTagLabel: 'One Partner.',
    mediaTagText: 'Every capability — design, simulation, fabrication and finishing in a single facility.',
  },
  capabilities: {
    eyebrow: 'Our Advantage',
    heading: 'From complex concepts to rugged realities',
    intro:
      'G Industries is a single-source, end-to-end manufacturing partner — bridging conceptual design, structural simulation, heavy fabrication, and precise post-processing seamlessly.',
    items: [
      { title: 'Advanced CAD Modeling', copy: 'Full 3D parametric design for complex assemblies, custom enclosures, and structural systems — engineered to exact specifications.' },
      { title: 'Finite Element Analysis', copy: 'Stress, thermal, and structural simulation validates every design before a single piece of metal is cut — reducing risk and rework.' },
      { title: 'Structural Simulation', copy: 'Real-world load-case modelling ensures performance under extreme operational and environmental conditions.' },
      { title: 'Structural Fabrication', copy: 'Heavy-duty welding, cutting, and assembly for industrial-grade components and systems.' },
      { title: 'Surface Treatments', copy: 'Precision machining, coating, and finishing for corrosion resistance and longevity.' },
      { title: 'Rigorous QC Testing', copy: 'Dimensional inspection before every delivery, backed by a documented Quality Management System.' },
    ],
  },
  precision: {
    eyebrow: 'Precision, Component by Component',
    heading: 'Tolerances that hold under real-world load',
    items: [
      { image: { src: '/quality-images/IMG_20261021_104334.jpg', alt: 'Precision-machined stainless steel bracket with sleeve, fabricated at G Industries' }, label: 'Precision Bracket Assembly' },
      { image: { src: '/quality-images/Products2.png', alt: 'Large batch of finished stainless steel fabricated components — tubular assemblies and conical housings — staged for dispatch' }, label: 'Batch Production Run' },
      { image: { src: '/quality-images/Products3.png', alt: 'Stacked welded stainless steel enclosure housings ready for shipment' }, label: 'Enclosure Housing Stack' },
      { image: { src: '/quality-images/Products4.png', alt: 'Stainless steel conical mesh filter assembly bolted to a mounting bracket' }, label: 'Mesh Filter Cone Assembly' },
      { image: { src: '/quality-images/Product5.png', alt: 'Tall laser-cut steel decorative panel with a circular lattice pattern' }, label: 'Laser-Cut Decorative Panel' },
    ],
  },
  industries: {
    eyebrow: 'Industries We Serve',
    heading: 'Precision components across critical sectors',
    intro:
      'From railway infrastructure to next-generation EVs and energy systems, G Industries manufactures high-precision components for national and international industries under stringent quality and compliance standards.',
    items: [
      { title: 'Railways', copy: 'Registered vendor executing railway tender orders.' },
      { title: 'Electric Vehicles', copy: 'Precision EV enclosures & structural components.' },
      { title: 'Electronics', copy: 'Modular enclosures & engineering consoles.' },
      { title: 'Agri-Tech', copy: 'Fabrication for agricultural technology systems.' },
      { title: 'Laboratory Equipment', copy: 'Custom lab enclosures & assemblies.' },
      { title: 'Switchgear Systems', copy: 'Electrical & switchgear panel fabrication.' },
    ],
  },
  bess: {
    image1: { src: '/quality-images/10 feet Medha container.png', alt: 'White 10 ft compact BESS container enclosure, side view inside a warehouse' },
    caption1: '10 ft Compact BESS Container',
    image2: { src: '/quality-images/Medha bess container 20feet.png', alt: '20 ft full-scale BESS container for Medha, raised on support feet inside a warehouse' },
    caption2: '20 ft Full-Scale BESS Container',
    eyebrow: 'Key Specialization',
    heading: 'BESS container systems',
    copy:
      'G Industries specializes in heavily optimized enclosure systems for Battery Energy Storage Systems (BESS) and severe-duty industrial applications — engineered for thermal management, structural integrity, and operational safety.',
    specs: [
      { tag: '10 ft', title: 'Compact BESS Containers', copy: 'Compact, high-performance energy storage enclosures.' },
      { tag: '20 ft', title: 'Full-Scale BESS Containers', copy: 'Full-scale industrial BESS infrastructure solutions.' },
    ],
  },
  facilities: {
    eyebrow: 'Facilities',
    heading: 'Built for scale. Engineered for precision.',
    intro: 'A continuously modernized facility footprint across Hyderabad, purpose-built for heavy fabrication and BESS container manufacturing.',
    stats: [
      { num: '13,000 sft', label: 'Unit 1 Covered Area' },
      { num: '30,000 sft', label: 'Unit 2 — BESS Container Mfg.' },
      { num: '40,000 sft', label: 'Available for Expansion' },
    ],
    galleryImages: [
      { image: { src: '/quality-images/Factory image.png', alt: 'Wide view of the fabrication shop floor aisle with material handling area' } },
      { image: { src: '/quality-images/Inspection room.png', alt: 'Quality Department entrance with safety signage at the G Industries facility' } },
      { image: { src: '/quality-images/file_00000000185c8208babc4d67585c94e3 (1).png', alt: 'Store Room and Managing Director office entrances on the production floor' } },
      { image: { src: '/quality-images/file_000000001664820883b0e955ea3d75a6.png', alt: 'MIG welding station near the facility emergency exit with gas cylinders' } },
    ],
  },
  machinery: {
    eyebrow: 'Manufacturing Equipment',
    heading: 'Modern machinery. Precision-grade output.',
    intro: 'A continuously modernized machine shop — anchored by recent (2022–2026) additions — gives G Industries the range to cut, weld, form, and finish to exacting tolerances.',
    machines: [
      { image: { src: '/quality-images/file_000000009e1c8208ac1fd4174e502cda.png', alt: 'Senfeng fiber laser cutting machine on the G Industries shop floor' }, title: 'Sheet & Pipe Laser Cutting', meta: 'Senfeng, 3 kW · 2024' },
      { image: { src: '/quality-images/file_000000001778820882caf42727747702.png', alt: 'Hindustan Hydraulics Swift 100-31 CNC press brake machine' }, title: 'CNC Press Brake', meta: 'Hindustan, 100T · 2024' },
      { image: { src: '/quality-images/file_00000000c5f08208ace959c6353cb2c1.png', alt: 'IPG Photonics LightWeld handheld laser welding system in use' }, title: 'Laser Welding', meta: '1.5 kW · 2023, 25 & 26' },
      { image: { src: '/quality-images/file_00000000046c820aa9597951eafb2253 (1).png', alt: 'Tinex power press machines and a pillar drilling machine on the shop floor' }, title: 'Power Press & Drilling', meta: '50T / 20T · Ø36mm · 2024–26' },
      { image: { src: '/quality-images/file_0000000093908208b1a29b8a59852f9e.png', alt: 'Row of laser welding stations in the LW/002 work area' }, title: 'Laser Welding Stations', meta: '5 Nos. installed' },
      { image: { src: '/quality-images/Mig machine.png', alt: 'MIG-400 welding machine control panel on the shop floor' }, title: 'MIG Welding', meta: '400A · 200A' },
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
  },
  why: {
    eyebrow: 'Why G Industries',
    heading: 'Built to be your single-source partner',
    items: [
      { title: 'End-to-End Capability', copy: 'Design, simulation, fabrication, and finishing under one roof.' },
      { title: 'Certified Quality', copy: 'ISO 9001:2015, GST, and Udyam/MSME registered enterprise.' },
      { title: 'Multi-Sector Expertise', copy: 'Railways, EV, Electronics, Agri-Tech, Switchgear & more.' },
      { title: 'Proven Delivery', copy: 'Trusted by BHEL, VEM Technologies, Medha, ECIL & more.' },
    ],
  },
  projects: {
    eyebrow: 'Recent Track Record',
    heading: 'Proven capabilities. Delivered.',
    intro: 'From energy storage to heavy industrial machinery, G Industries has a growing portfolio of high-stakes, high-precision deliveries.',
    items: [
      {
        num: '01', client: 'Medha Servo Drives', title: 'BESS Container, Railways & EV',
        desc: 'Manufactured custom 10-foot and 20-foot BESS Containers for large-scale energy storage deployments.',
        image: { src: '/quality-images/file_00000000d7bc81f49164140fc69f24c1.png', alt: 'Welded steel BESS container structural base and chassis in the fabrication shop' },
        cap: 'Container chassis fabrication, Unit 2',
      },
      {
        num: '02', client: 'BHEL', title: 'Power Containers',
        desc: 'Successfully delivered two heavy industrial-grade specialized containers for Bharat Heavy Electricals Limited.',
        image: { src: '/quality-images/Bhel power containers.png', alt: 'Heavy industrial-grade power container delivered for BHEL' },
        cap: 'Power container, ex-works',
      },
      {
        num: '03', client: 'VEM Technologies', title: 'CNC Machine Body',
        desc: 'Engineered and manufactured a high-precision CNC Machine Body to exacting tolerances.',
        image: { src: '/quality-images/Vem cnc machine body.png', alt: 'Precision-fabricated stainless steel CNC machine body for VEM Technologies' },
        cap: 'Precision-machined component, ex-works',
      },
    ],
  },
  certifications: {
    eyebrow: 'Accreditations',
    heading: 'Registered, certified, compliant',
    intro: 'G Industries operates as a formally registered manufacturing enterprise, holding current certifications across quality, tax, and government enterprise classifications.',
    quote:
      'At G Industries, we focus on customer satisfaction by manufacturing and supplying high-quality engineering and fabrication products that consistently meet customer requirements — fostering employee competency and continually improving the effectiveness of our Quality Management System.',
    quoteCite: 'Quality Policy, G Industries',
  },
  clients: {
    eyebrow: 'Our Valued Customers',
    heading: 'Trusted by industry leaders',
    intro: "From railway PSUs and defence-linked enterprises to EV innovators and energy pioneers, G Industries is proud to serve 25+ organizations across India's most demanding sectors.",
    featured: ['Medha Servo Drives', 'BHEL', 'HBL', 'VEM Technologies', 'ECIL'].map((name) => ({ name })),
    other: [
      'RCF Kapurthala', 'Medha — Powering Mobility', 'Medha Electrical Contractors', 'Medha Marine',
      'BHEL — R&D Balanagar', 'BHEL — RC Puram', 'Cygni Energy', 'Nexigo Energy', 'Axonify Tech Systems',
      'Hemair Systems', 'Keto Motors', 'Neural Foundry', 'Quantum EV', 'Smart Lab', 'SLN Electricals',
      'Polmon Instruments', 'Rotomag', 'SGD Pharma', 'Stability Automation', 'XMachines', 'Venjay Automation',
    ].map((name) => ({ name })),
    note: 'Registered vendor — Railway Tenders | Engaging with Defence Sector Projects',
  },
  contactCta: {
    backgroundImage: { src: '/quality-images/Factory image.png', alt: '' },
    heading: 'Challenge everything with G Industries.',
    subcopy: 'Ready to elevate your next project? Partner with a manufacturer built to meet the most demanding engineering challenges — end to end.',
    email: 'mvskiran@gindustries.co.in',
    email2: 'gindustries.md@gmail.com',
    phone: '+91 89776 50585',
    addressLine1: 'Gandi Maisamma, Dundigal,',
    addressLine2: 'Hyderabad, Telangana 500043',
  },
};

const homeCardSchema = z.object({ title: z.string().min(1), copy: z.string() });
const imgSchema = z.object({ src: z.string().min(1), alt: z.string() });

export const HOME_SCHEMA = z.object({
  stats: z.object({
    founded: z.number(), expansionLandSqm: z.number(), workforce: z.number(), workforceSuffix: z.string(),
    locationLine1: z.string(), locationLine2: z.string(),
  }),
  hero: z.object({
    tag: z.string(), titleLine1: z.string(), titleEm: z.string(), subtitle: z.string(),
    primaryCtaLabel: z.string(), primaryCtaHref: z.string(), secondaryCtaLabel: z.string(), secondaryCtaHref: z.string(),
    image: imgSchema,
  }),
  about: z.object({
    eyebrow: z.string(), heading: z.string(), foundationLabel: z.string(), foundationText: z.string(),
    missionLabel: z.string(), missionText: z.string(), image: imgSchema,
    mediaTagLabel: z.string(), mediaTagText: z.string(),
  }),
  capabilities: z.object({ eyebrow: z.string(), heading: z.string(), intro: z.string(), items: z.array(homeCardSchema) }),
  precision: z.object({
    eyebrow: z.string(), heading: z.string(),
    items: z.array(z.object({ image: imgSchema, label: z.string() })),
  }),
  industries: z.object({ eyebrow: z.string(), heading: z.string(), intro: z.string(), items: z.array(homeCardSchema) }),
  bess: z.object({
    image1: imgSchema, caption1: z.string(), image2: imgSchema, caption2: z.string(),
    eyebrow: z.string(), heading: z.string(), copy: z.string(),
    specs: z.array(z.object({ tag: z.string(), title: z.string(), copy: z.string() })),
  }),
  facilities: z.object({
    eyebrow: z.string(), heading: z.string(), intro: z.string(),
    stats: z.array(z.object({ num: z.string(), label: z.string() })),
    galleryImages: z.array(z.object({ image: imgSchema })),
  }),
  machinery: z.object({
    eyebrow: z.string(), heading: z.string(), intro: z.string(),
    machines: z.array(z.object({ image: imgSchema, title: z.string(), meta: z.string() })),
    specRows: z.array(z.object({ equipment: z.string(), spec: z.string(), year: z.string() })),
  }),
  why: z.object({ eyebrow: z.string(), heading: z.string(), items: z.array(homeCardSchema) }),
  projects: z.object({
    eyebrow: z.string(), heading: z.string(), intro: z.string(),
    items: z.array(z.object({
      image: imgSchema, num: z.string(), client: z.string(), title: z.string(), desc: z.string(), cap: z.string(),
    })),
  }),
  certifications: z.object({ eyebrow: z.string(), heading: z.string(), intro: z.string(), quote: z.string(), quoteCite: z.string() }),
  clients: z.object({
    eyebrow: z.string(), heading: z.string(), intro: z.string(),
    featured: z.array(z.object({ name: z.string().min(1) })),
    other: z.array(z.object({ name: z.string().min(1) })),
    note: z.string(),
  }),
  contactCta: z.object({
    backgroundImage: imgSchema, heading: z.string(), subcopy: z.string(),
    email: z.string(), email2: z.string(), phone: z.string(), addressLine1: z.string(), addressLine2: z.string(),
  }),
}) satisfies z.ZodType<HomeContent>;

const cardItemFields: FieldSchema[] = [
  { type: 'text', key: 'title', label: 'Title' },
  { type: 'textarea', key: 'copy', label: 'Description' },
];

export const HOME_FIELDS: FieldSchema[] = [
  {
    type: 'object', key: 'stats', label: 'Shared stats (used in hero + about section)', fields: [
      { type: 'number', key: 'founded', label: 'Founded (year)' },
      { type: 'number', key: 'expansionLandSqm', label: 'Expansion land (sqm)' },
      { type: 'number', key: 'workforce', label: 'Workforce count' },
      { type: 'text', key: 'workforceSuffix', label: 'Workforce suffix', hint: 'e.g. "+"' },
      { type: 'text', key: 'locationLine1', label: 'Location line 1' },
      { type: 'text', key: 'locationLine2', label: 'Location line 2' },
    ],
  },
  {
    type: 'object', key: 'hero', label: 'Hero', fields: [
      { type: 'image', key: 'image', label: 'Background image' },
      { type: 'text', key: 'tag', label: 'Eyebrow tag' },
      { type: 'text', key: 'titleLine1', label: 'Title line 1' },
      { type: 'text', key: 'titleEm', label: 'Title line 2 (gold)' },
      { type: 'textarea', key: 'subtitle', label: 'Subtitle' },
      { type: 'text', key: 'primaryCtaLabel', label: 'Primary button text' },
      { type: 'url', key: 'primaryCtaHref', label: 'Primary button link' },
      { type: 'text', key: 'secondaryCtaLabel', label: 'Secondary button text' },
      { type: 'url', key: 'secondaryCtaHref', label: 'Secondary button link' },
    ],
  },
  {
    type: 'object', key: 'about', label: 'About section', fields: [
      { type: 'image', key: 'image', label: 'Image' },
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'text', key: 'foundationLabel', label: 'Paragraph 1 label' },
      { type: 'textarea', key: 'foundationText', label: 'Paragraph 1 text' },
      { type: 'text', key: 'missionLabel', label: 'Paragraph 2 label' },
      { type: 'textarea', key: 'missionText', label: 'Paragraph 2 text' },
      { type: 'text', key: 'mediaTagLabel', label: 'Image caption label' },
      { type: 'text', key: 'mediaTagText', label: 'Image caption text' },
    ],
  },
  {
    type: 'object', key: 'capabilities', label: 'Capabilities section', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'intro', label: 'Intro paragraph' },
      { type: 'list', key: 'items', label: 'Capability cards (icons fixed — edit text only, do not add/remove)', itemFields: cardItemFields },
    ],
  },
  {
    type: 'object', key: 'precision', label: 'Precision gallery', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      {
        type: 'list', key: 'items', label: 'Gallery items', addLabel: 'Add gallery item', itemFields: [
          { type: 'image', key: 'image', label: 'Image' },
          { type: 'text', key: 'label', label: 'Label' },
        ],
      },
    ],
  },
  {
    type: 'object', key: 'industries', label: 'Industries section', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'intro', label: 'Intro paragraph' },
      { type: 'list', key: 'items', label: 'Industry cards (icons fixed — edit text only, do not add/remove)', itemFields: cardItemFields },
    ],
  },
  {
    type: 'object', key: 'bess', label: 'BESS section', fields: [
      { type: 'image', key: 'image1', label: 'Image 1' },
      { type: 'text', key: 'caption1', label: 'Image 1 caption' },
      { type: 'image', key: 'image2', label: 'Image 2' },
      { type: 'text', key: 'caption2', label: 'Image 2 caption' },
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'copy', label: 'Copy' },
      {
        type: 'list', key: 'specs', label: 'Spec cards (fixed pair — edit text only)', itemFields: [
          { type: 'text', key: 'tag', label: 'Tag (e.g. "10 ft")' },
          { type: 'text', key: 'title', label: 'Title' },
          { type: 'textarea', key: 'copy', label: 'Description' },
        ],
      },
    ],
  },
  {
    type: 'object', key: 'facilities', label: 'Facilities section', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'intro', label: 'Intro paragraph' },
      {
        type: 'list', key: 'stats', label: 'Stats (fixed 3 — edit text only)', itemFields: [
          { type: 'text', key: 'num', label: 'Number' },
          { type: 'text', key: 'label', label: 'Label' },
        ],
      },
      {
        type: 'list', key: 'galleryImages', label: 'Gallery images (fixed 4, laid out as a 2x2 grid — do not add/remove)', itemFields: [
          { type: 'image', key: 'image', label: 'Image' },
        ],
      },
    ],
  },
  {
    type: 'object', key: 'machinery', label: 'Machinery section', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'intro', label: 'Intro paragraph' },
      {
        type: 'list', key: 'machines', label: 'Machine cards', addLabel: 'Add machine', itemFields: [
          { type: 'image', key: 'image', label: 'Image' },
          { type: 'text', key: 'title', label: 'Title' },
          { type: 'text', key: 'meta', label: 'Meta (spec line)' },
        ],
      },
      {
        type: 'list', key: 'specRows', label: 'Spec table rows', addLabel: 'Add row', itemFields: [
          { type: 'text', key: 'equipment', label: 'Equipment' },
          { type: 'text', key: 'spec', label: 'Specification' },
          { type: 'text', key: 'year', label: 'Year' },
        ],
      },
    ],
  },
  {
    type: 'object', key: 'why', label: 'Why G Industries section', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'list', key: 'items', label: 'Cards (icons fixed — edit text only, do not add/remove)', itemFields: cardItemFields },
    ],
  },
  {
    type: 'object', key: 'projects', label: 'Recent Track Record section', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'intro', label: 'Intro paragraph' },
      {
        type: 'list', key: 'items', label: 'Projects', addLabel: 'Add project', itemFields: [
          { type: 'text', key: 'num', label: 'Number (e.g. "01")' },
          { type: 'text', key: 'client', label: 'Client name' },
          { type: 'text', key: 'title', label: 'Project title' },
          { type: 'textarea', key: 'desc', label: 'Description' },
          { type: 'image', key: 'image', label: 'Image' },
          { type: 'text', key: 'cap', label: 'Image caption' },
        ],
      },
    ],
  },
  {
    type: 'object', key: 'certifications', label: 'Certifications section', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'intro', label: 'Intro paragraph' },
      { type: 'textarea', key: 'quote', label: 'Quality policy quote' },
      { type: 'text', key: 'quoteCite', label: 'Quote citation' },
    ],
  },
  {
    type: 'object', key: 'clients', label: 'Clients section', fields: [
      { type: 'text', key: 'eyebrow', label: 'Eyebrow' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'intro', label: 'Intro paragraph' },
      { type: 'list', key: 'featured', label: 'Featured clients', addLabel: 'Add client', itemFields: [{ type: 'text', key: 'name', label: 'Name' }] },
      { type: 'list', key: 'other', label: 'Other clients', addLabel: 'Add client', itemFields: [{ type: 'text', key: 'name', label: 'Name' }] },
      { type: 'text', key: 'note', label: 'Note line' },
    ],
  },
  {
    type: 'object', key: 'contactCta', label: 'Contact CTA section', fields: [
      { type: 'image', key: 'backgroundImage', label: 'Background image' },
      { type: 'text', key: 'heading', label: 'Heading' },
      { type: 'textarea', key: 'subcopy', label: 'Subcopy' },
      { type: 'text', key: 'email', label: 'Email' },
      { type: 'text', key: 'email2', label: 'Secondary email' },
      { type: 'text', key: 'phone', label: 'Phone' },
      { type: 'text', key: 'addressLine1', label: 'Address line 1' },
      { type: 'text', key: 'addressLine2', label: 'Address line 2' },
    ],
  },
];
