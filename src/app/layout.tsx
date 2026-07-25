import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Stone Tech Co. | Trusted In-Home Tech Support & VHS Conversion in St. Marys, ON",
  description: "Get friendly, patient, and professional technology help right at your kitchen table. Specialized in senior-focused training, network security, device setup, and VHS digitization. Call Ryan at 226-921-5949.",
  keywords: "tech support St. Marys, computer help St. Marys, tech help seniors, VHS conversion St. Marys, router security, computer repair St. Marys Ontario, local tech support",
  authors: [{ name: "Ryan Wilson" }],
  alternates: {
    canonical: "https://littlestonetech.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Little Stone Tech Co. | Trusted In-Home Tech Support & VHS Conversion in St. Marys, ON",
    description: "Friendly, patient, and professional technology help right at your kitchen table. Specialized in senior-focused training, router security, and VHS digitization.",
    url: "https://littlestonetech.co",
    siteName: "Little Stone Tech Co.",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://littlestonetech.co/logo.png",
        width: 512,
        height: 512,
        alt: "Little Stone Tech Co. Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Little Stone Tech Co. | Trusted In-Home Tech Support & VHS Conversion",
    description: "Get friendly, patient, and professional technology help right at your kitchen table. Specialized in senior-focused training, router security, and VHS digitization.",
    images: ["https://littlestonetech.co/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data (JSON-LD)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Little Stone Tech Company",
    "image": "https://littlestonetech.co/logo.png",
    "@id": "https://littlestonetech.co/#organization",
    "url": "https://littlestonetech.co",
    "telephone": "+1-226-921-5949",
    "email": "r.wilson@littlestonetech.co",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "St. Marys",
      "addressRegion": "ON",
      "postalCode": "N4X",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.2573,
      "longitude": -81.3204
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "St. Marys, Ontario"
      },
      {
        "@type": "Place",
        "name": "Stonetown region"
      }
    ],
    "description": "Get friendly, patient, and professional technology help right at your kitchen table in St. Marys, ON. Specializing in senior-focused tech training, internet security, device config, and VHS conversion.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${lora.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Dynamic JSON-LD Structured Data script tag injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-teal selection:bg-brand-tan selection:text-brand-teal">
        {children}
      </body>
    </html>
  );
}
