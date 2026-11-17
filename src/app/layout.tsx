import type { Metadata } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";

import "./globals.css";
import "./home-refresh.css";
import "./home-sections.css";
import "./home-clario.css";
import "./home-structure.css";
import "./home-v3.css";
import "./home-pro.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl, siteConfig } from "@/data/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

// Same font pairing as the Wazely ERP app (erp.wazely.io): Instrument Sans
// for text and UI, Archivo for headings. Self-hosted at build time.
const brandSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-brand",
  weight: ["400", "500", "600", "700"],
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
});

const brandHeading = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.title,
    template: "%s | Wazely",
  },
  description: siteConfig.description,
  applicationName: siteConfig.companyName,
  authors: [{ name: siteConfig.companyName, url: "/" }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  category: "business software",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/wazely-favicon.png", apple: "/wazely-favicon.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: "Wazely",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${brandSans.variable} ${brandHeading.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('wazely-theme');var d=t==='dark';document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [organizationJsonLd, websiteJsonLd],
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
