import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://westhillsdentalnd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "West Hills Dental | Family Dentist in Minot, ND",
    template: "%s | West Hills Dental",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "dentist in Minot ND",
    "West Hills Dental",
    "family dentist Minot",
    "Dr. Stephanie Ness",
    "dental implants Minot",
    "cosmetic dentistry Minot",
    "children's dentist Minot",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: "West Hills Dental | Family Dentist in Minot, ND",
    description: site.description,
    images: [
      {
        url: "/images/brand/og-west-hills-dental.jpg",
        width: 1200,
        height: 630,
        alt: "West Hills Dental — dentistry that feels like care, in Minot, North Dakota.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "West Hills Dental | Family Dentist in Minot, ND",
    description: site.description,
    images: ["/images/brand/og-west-hills-dental.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#123b26",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  url: siteUrl,
  telephone: site.phone,
  faxNumber: site.fax,
  email: site.email,
  image: `${siteUrl}/images/brand/og-west-hills-dental.jpg`,
  logo: `${siteUrl}/images/brand/west-hills-dental-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.suite}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:30",
      closes: "15:30",
    },
  ],
  sameAs: [site.facebook],
  employee: {
    "@type": "Person",
    name: site.doctor,
    jobTitle: "Dentist",
  },
  areaServed: {
    "@type": "City",
    name: "Minot",
    containedInPlace: {
      "@type": "State",
      name: "North Dakota",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only z-[120] rounded-full bg-forest px-5 py-3 text-sm font-medium text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
      </body>
    </html>
  );
}
