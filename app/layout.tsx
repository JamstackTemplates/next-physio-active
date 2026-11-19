import '@fontsource-variable/outfit';
import '@fontsource-variable/nunito-sans';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'jamstacks';
import { ThemeScript } from 'jamstacks/server';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import { business } from '../content/business';
import { asset } from '../lib/paths';
import { site } from '../lib/site';
import './tailwind.input.css';

const defaultDescription = site.description || business.introduction;
const ogImageUrl = site.url ? `${site.url}/og.png` : asset('/og.png');

export const metadata: Metadata = {
  title: { default: `${business.name} — Milton, Brisbane`, template: `%s — ${business.name}` },
  description: defaultDescription,
  ...(site.url ? { metadataBase: new URL(`${site.url}/`) } : {}),
  openGraph: {
    type: 'website',
    siteName: business.name,
    title: `${business.name} — Milton, Brisbane`,
    description: defaultDescription,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Momentum Physio — Sports, spine & post-surgery physio in Milton, Brisbane' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${business.name} — Milton, Brisbane`,
    description: defaultDescription,
    images: [ogImageUrl],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <ThemeScript />
      </head>
      <body className="bg-bg text-ink antialiased">
        <ThemeProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
