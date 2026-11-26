import type { Metadata } from 'next';
import { Kanit, DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { pageMetadata, SITE_URL, SITE_NAME } from '@/lib/seo';

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-kanit', display: 'swap' });
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter', display: 'swap' });

const HOME_TITLE = 'G Industries — Precision Engineering & Turnkey Manufacturing';
const HOME_DESCRIPTION =
  'ISO 9001:2015 certified, single-source manufacturer in Hyderabad — fabrication, finishing and BESS container manufacturing for Railways, EV and Electronics.';

const { alternates, openGraph, twitter } = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  imageAlt: 'The G Industries team on the shop floor at the Hyderabad facility',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: '%s — G Industries',
  },
  description: HOME_DESCRIPTION,
  alternates,
  openGraph,
  twitter,
};

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ManufacturingBusiness',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/quality-images/logo.png`,
  image: `${SITE_URL}/quality-images/9ab78c05-093b-405e-9850-54976077abdf.jpg`,
  description: HOME_DESCRIPTION,
  foundingDate: '2021',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gandi Maisamma, Dundigal',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500043',
    addressCountry: 'IN',
  },
  // Locality-level approximation (Gandi Maisamma, Dundigal) — refine with the
  // exact plant coordinates (Sy. 710, Gandimaisamma Mandal) once available.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.5763,
    longitude: 78.4270,
  },
  telephone: '+91-89776-50585',
  email: 'mvskiran@gindustries.co.in',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-89776-50585',
    email: 'mvskiran@gindustries.co.in',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['en'],
  },
  // openingHours and sameAs (social profiles) intentionally omitted — no
  // verified source for either exists in the current site content yet.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${kanit.variable} ${dmSans.variable} ${inter.variable}`}>
      <body>
        {/* eslint-disable-next-line @next/next/no-danger -- static, server-rendered JSON-LD from our own content */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
