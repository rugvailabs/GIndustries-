import type { Metadata } from 'next';

export const SITE_URL = 'https://gindustries.co.in';
export const SITE_NAME = 'G Industries';
export const DEFAULT_OG_IMAGE = '/images/9ab78c05-093b-405e-9850-54976077abdf.png';

type PageMetadataInput = {
  /** Page-level title, e.g. "About Us" — the site suffix is added automatically. */
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/about". Omit for the homepage. */
  path?: string;
  /** Path to a representative image for link previews, e.g. "/images/foo.jpg". */
  image?: string;
  imageAlt?: string;
};

/**
 * Builds a consistent Metadata object (title, description, canonical URL,
 * Open Graph, Twitter Card) for a single page. Keeps every route's social
 * and SEO metadata in sync without repeating the same boilerplate 11 times.
 */
export function pageMetadata({
  title,
  description,
  path = '',
  image = DEFAULT_OG_IMAGE,
  imageAlt,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path ? `${title} — ${SITE_NAME}` : title;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 900,
          alt: imageAlt || fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
