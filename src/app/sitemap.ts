import type { MetadataRoute } from 'next';

const BASE_URL = 'https://gindustries.co.in';

const ROUTES = [
  '',
  '/about',
  '/engineering-design',
  '/manufacturing-fabrication',
  '/industries',
  '/bess-solutions',
  '/products',
  '/facilities',
  '/machinery',
  '/projects',
  '/quality-certifications',
  '/clients',
  '/contact',
  '/blog',
];

const BLOG_ROUTES = [
  '/blog/bess-container-specifications',
  '/blog/how-bess-containers-are-made',
  '/blog/arc-vs-mig-vs-tig-welding',
  '/blog/iso-9001-vs-iso-14001',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map((route) => ({
      url: `${BASE_URL}${route}`,
      changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1 : 0.7,
    })),
    ...BLOG_ROUTES.map((route) => ({
      url: `${BASE_URL}${route}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
