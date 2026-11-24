import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { pageMetadata, SITE_URL, SITE_NAME } from '@/lib/seo';

const HOME_TITLE = 'G Industries — Precision Engineering & Turnkey Manufacturing';
const HOME_DESCRIPTION =
  'G Industries is a single-source, ISO 9001:2015 certified manufacturing partner in Hyderabad, India — bridging design, simulation, heavy fabrication and finishing for Railways, EV, Electronics, Agri-Tech and BESS energy storage.';

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
  icons: {
    icon: '/images/logo.png',
  },
  alternates,
  openGraph,
  twitter,
};

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ManufacturingBusiness',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/9ab78c05-093b-405e-9850-54976077abdf.png`,
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
  telephone: '+91-89776-50585',
  email: 'mvskiran@gindustries.co.in',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- intentional: single root layout, applies to every route */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
