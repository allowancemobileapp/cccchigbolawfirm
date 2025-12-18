import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/lib/config';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.baseTitle}`,
  },
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.baseTitle}`,
    },
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Professor Clement C. Chigbo Law Firm',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.baseTitle}`,
    },
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F9FB' },
    { media: '(prefers-color-scheme: dark)', color: '#1A202C' },
  ],
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Professor Clement C. Chigbo',
    jobTitle: ['Associate Professor of Law', 'Barrister & Solicitor'],
    knowsAbout: ['Property Law', 'Conveyancing', 'Corporate & Commercial Law', 'International Arbitration'],
    alumniOf: ['Ahmadu Bello University', 'University of London', 'University of Aberdeen'],
    nationality: 'Nigerian',
    sameAs: [siteConfig.links.linkedin],
    url: siteConfig.url,
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Legal Services by Professor Clement C. Chigbo',
    provider: {
      '@type': 'Person',
      name: 'Professor Clement C. Chigbo',
    },
    areaServed: ['Nigeria', 'United Kingdom', 'Caribbean'],
    serviceType: [
      'Property & Conveyancing',
      'Corporate & Commercial Law',
      'International Arbitration & ADR',
      'Immigration & International Tax',
    ],
    url: siteConfig.url,
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Source+Serif+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7/css/flag-icons.min.css"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
