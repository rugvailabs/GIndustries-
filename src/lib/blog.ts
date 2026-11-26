export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  datePublished: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'bess-container-specifications',
    title: 'BESS Container Specifications: Sizes, Capacity & Key Requirements',
    excerpt:
      'What actually goes into a BESS container spec sheet — standard sizes, typical capacity ranges, and the structural, thermal and safety requirements that separate a purpose-built enclosure from a shipping container.',
    image: '/images/bess-container-chassis-ibeam-frame.jpg',
    imageAlt: 'Steel I-beam chassis frame for a battery energy storage container',
    datePublished: '2026-11-25',
  },
  {
    slug: 'how-bess-containers-are-made',
    title: 'How Battery Energy Storage (BESS) Containers Are Manufactured',
    excerpt:
      'From CAD model to dispatch: the design, fabrication, and finishing stages a BESS container goes through before it is ready to house battery modules in the field.',
    image: '/images/bess-container-chassis-fabrication.jpg',
    imageAlt: 'Large welded steel container chassis under fabrication',
    datePublished: '2026-11-25',
  },
  {
    slug: 'arc-vs-mig-vs-tig-welding',
    title: 'ARC vs MIG vs TIG Welding: What’s the Difference?',
    excerpt:
      'Three welding processes, three very different jobs. A plain-language guide to when a fabricator reaches for stick, wire-fed, or tungsten-arc welding — and why.',
    image: '/images/mig-welding-station-fabrication-shop.jpg',
    imageAlt: 'MIG welding station with gas cylinders on the fabrication shop floor',
    datePublished: '2026-11-25',
  },
  {
    slug: 'iso-9001-vs-iso-14001',
    title: 'ISO 9001 vs ISO 14001: What’s the Difference for Manufacturers?',
    excerpt:
      'Two of the most common ISO certifications a fabrication partner can hold — one governs quality management, the other environmental management. Here is what each actually covers.',
    image: '/images/quality-department-entrance-iso9001.jpg',
    imageAlt: 'Quality Department entrance with safety signage at the G Industries facility',
    datePublished: '2026-11-25',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
