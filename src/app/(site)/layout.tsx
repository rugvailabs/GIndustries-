import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import EditModeProvider from '@/components/edit/EditModeProvider';
import { getPageContent } from '@/lib/content';
import { HEADER_DEFAULTS } from '@/content/pages/header';
import { FOOTER_DEFAULTS } from '@/content/pages/footer';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [headerContent, footerContent] = await Promise.all([
    getPageContent('global.header', HEADER_DEFAULTS),
    getPageContent('global.footer', FOOTER_DEFAULTS),
  ]);

  return (
    <EditModeProvider>
      <Header content={headerContent} />
      {children}
      <Footer content={footerContent} />
      <WhatsAppFloat />
    </EditModeProvider>
  );
}
