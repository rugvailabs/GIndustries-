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
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
