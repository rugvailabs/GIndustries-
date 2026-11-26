import type { ZodType } from 'zod';
import type { FieldSchema } from './fields';
import { HEADER_DEFAULTS, HEADER_SCHEMA, HEADER_FIELDS } from './pages/header';
import { FOOTER_DEFAULTS, FOOTER_SCHEMA, FOOTER_FIELDS } from './pages/footer';
import { HOME_DEFAULTS, HOME_SCHEMA, HOME_FIELDS } from './pages/home';
import { ABOUT_DEFAULTS, ABOUT_SCHEMA, ABOUT_FIELDS } from './pages/about';
import { FACILITIES_DEFAULTS, FACILITIES_SCHEMA, FACILITIES_FIELDS } from './pages/facilities';
import { MACHINERY_DEFAULTS, MACHINERY_SCHEMA, MACHINERY_FIELDS } from './pages/machinery';
import { ENGINEERING_DESIGN_DEFAULTS, ENGINEERING_DESIGN_SCHEMA, ENGINEERING_DESIGN_FIELDS } from './pages/engineering-design';
import { MANUFACTURING_FABRICATION_DEFAULTS, MANUFACTURING_FABRICATION_SCHEMA, MANUFACTURING_FABRICATION_FIELDS } from './pages/manufacturing-fabrication';
import { INDUSTRIES_DEFAULTS, INDUSTRIES_SCHEMA, INDUSTRIES_FIELDS } from './pages/industries';
import { BESS_SOLUTIONS_DEFAULTS, BESS_SOLUTIONS_SCHEMA, BESS_SOLUTIONS_FIELDS } from './pages/bess-solutions';
import { PRODUCTS_DEFAULTS, PRODUCTS_SCHEMA, PRODUCTS_FIELDS } from './pages/products';
import { PROJECTS_DEFAULTS, PROJECTS_SCHEMA, PROJECTS_FIELDS } from './pages/projects';
import { CLIENTS_DEFAULTS, CLIENTS_SCHEMA, CLIENTS_FIELDS } from './pages/clients';
import { CONTACT_DEFAULTS, CONTACT_SCHEMA, CONTACT_FIELDS } from './pages/contact';
import { QUALITY_CERTIFICATIONS_DEFAULTS, QUALITY_CERTIFICATIONS_SCHEMA, QUALITY_CERTIFICATIONS_FIELDS } from './pages/quality-certifications';
import { BLOG_INDEX_DEFAULTS, BLOG_INDEX_SCHEMA, BLOG_INDEX_FIELDS } from './pages/blog';

/**
 * One entry per editable page/section. The admin dashboard, nav, and
 * /admin/pages/[slug] route all derive from this list, so adding a page
 * here (via defineContentEntry) is the only wiring needed to expose it
 * in the admin UI.
 */
export type ContentRegistryEntry = {
  slug: string;
  label: string;
  group: 'global' | 'page';
  defaults: unknown;
  fields: FieldSchema[];
  schema: ZodType<unknown>;
  /** Specific paths to revalidate after a save (e.g. ['/about'] for the About page). */
  revalidatePaths: string[];
  /** Set for global.header/footer — revalidates the root layout, i.e. every page at once. */
  revalidateLayout?: boolean;
};

export function defineContentEntry<T>(entry: {
  slug: string;
  label: string;
  group: 'global' | 'page';
  defaults: T;
  fields: FieldSchema[];
  schema: ZodType<T>;
  revalidatePaths: string[];
  revalidateLayout?: boolean;
}): ContentRegistryEntry {
  return entry as ContentRegistryEntry;
}

export const CONTENT_REGISTRY: ContentRegistryEntry[] = [
  defineContentEntry({
    slug: 'global.header', label: 'Header', group: 'global',
    defaults: HEADER_DEFAULTS, fields: HEADER_FIELDS, schema: HEADER_SCHEMA,
    revalidatePaths: [], revalidateLayout: true,
  }),
  defineContentEntry({
    slug: 'global.footer', label: 'Footer', group: 'global',
    defaults: FOOTER_DEFAULTS, fields: FOOTER_FIELDS, schema: FOOTER_SCHEMA,
    revalidatePaths: [], revalidateLayout: true,
  }),
  defineContentEntry({
    slug: 'home', label: 'Home', group: 'page',
    defaults: HOME_DEFAULTS, fields: HOME_FIELDS, schema: HOME_SCHEMA,
    revalidatePaths: ['/'],
  }),
  defineContentEntry({
    slug: 'about', label: 'About', group: 'page',
    defaults: ABOUT_DEFAULTS, fields: ABOUT_FIELDS, schema: ABOUT_SCHEMA,
    revalidatePaths: ['/about'],
  }),
  defineContentEntry({
    slug: 'facilities', label: 'Facilities', group: 'page',
    defaults: FACILITIES_DEFAULTS, fields: FACILITIES_FIELDS, schema: FACILITIES_SCHEMA,
    revalidatePaths: ['/facilities'],
  }),
  defineContentEntry({
    slug: 'machinery', label: 'Machinery & Equipment', group: 'page',
    defaults: MACHINERY_DEFAULTS, fields: MACHINERY_FIELDS, schema: MACHINERY_SCHEMA,
    revalidatePaths: ['/machinery'],
  }),
  defineContentEntry({
    slug: 'engineering-design', label: 'Engineering & Design', group: 'page',
    defaults: ENGINEERING_DESIGN_DEFAULTS, fields: ENGINEERING_DESIGN_FIELDS, schema: ENGINEERING_DESIGN_SCHEMA,
    revalidatePaths: ['/engineering-design'],
  }),
  defineContentEntry({
    slug: 'manufacturing-fabrication', label: 'Manufacturing & Fabrication', group: 'page',
    defaults: MANUFACTURING_FABRICATION_DEFAULTS, fields: MANUFACTURING_FABRICATION_FIELDS, schema: MANUFACTURING_FABRICATION_SCHEMA,
    revalidatePaths: ['/manufacturing-fabrication'],
  }),
  defineContentEntry({
    slug: 'industries', label: 'Industries We Serve', group: 'page',
    defaults: INDUSTRIES_DEFAULTS, fields: INDUSTRIES_FIELDS, schema: INDUSTRIES_SCHEMA,
    revalidatePaths: ['/industries'],
  }),
  defineContentEntry({
    slug: 'bess-solutions', label: 'BESS Solutions', group: 'page',
    defaults: BESS_SOLUTIONS_DEFAULTS, fields: BESS_SOLUTIONS_FIELDS, schema: BESS_SOLUTIONS_SCHEMA,
    revalidatePaths: ['/bess-solutions'],
  }),
  defineContentEntry({
    slug: 'products', label: 'Shop / Products', group: 'page',
    defaults: PRODUCTS_DEFAULTS, fields: PRODUCTS_FIELDS, schema: PRODUCTS_SCHEMA,
    revalidatePaths: ['/products'],
  }),
  defineContentEntry({
    slug: 'projects', label: 'Projects', group: 'page',
    defaults: PROJECTS_DEFAULTS, fields: PROJECTS_FIELDS, schema: PROJECTS_SCHEMA,
    revalidatePaths: ['/projects'],
  }),
  defineContentEntry({
    slug: 'clients', label: 'Clients', group: 'page',
    defaults: CLIENTS_DEFAULTS, fields: CLIENTS_FIELDS, schema: CLIENTS_SCHEMA,
    revalidatePaths: ['/clients'],
  }),
  defineContentEntry({
    slug: 'contact', label: 'Contact', group: 'page',
    defaults: CONTACT_DEFAULTS, fields: CONTACT_FIELDS, schema: CONTACT_SCHEMA,
    revalidatePaths: ['/contact'],
  }),
  defineContentEntry({
    slug: 'quality-certifications', label: 'Quality & Certifications', group: 'page',
    defaults: QUALITY_CERTIFICATIONS_DEFAULTS, fields: QUALITY_CERTIFICATIONS_FIELDS, schema: QUALITY_CERTIFICATIONS_SCHEMA,
    revalidatePaths: ['/quality-certifications'],
  }),
  defineContentEntry({
    slug: 'blog', label: 'Blog (index)', group: 'page',
    defaults: BLOG_INDEX_DEFAULTS, fields: BLOG_INDEX_FIELDS, schema: BLOG_INDEX_SCHEMA,
    revalidatePaths: ['/blog'],
  }),
];

export function getRegistryEntry(slug: string): ContentRegistryEntry | undefined {
  return CONTENT_REGISTRY.find((e) => e.slug === slug);
}
