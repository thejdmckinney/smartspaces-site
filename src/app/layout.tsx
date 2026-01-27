import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartSpaces DFW - Professional Smart Home Installation | Dallas-Fort Worth",
  description: "Expert smart home installation in Dallas-Fort Worth. Network health first approach. Home automation, security systems, smart lighting & EV charging. Serving DFW Metroplex with reliable systems that work.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  keywords: "smart home installation Dallas, smart home DFW, home automation Fort Worth, smart lighting Dallas, home security systems DFW, EV charger installation Dallas, UniFi network installation, Lutron lighting Dallas",
  authors: [{ name: "SmartSpaces DFW" }],
  openGraph: {
    title: "SmartSpaces DFW - Professional Smart Home Installation",
    description: "Expert smart home installation serving Dallas-Fort Worth. Network health first approach for reliable home automation.",
    url: "https://smartspacesdfw.com",
    siteName: "SmartSpaces DFW",
    locale: "en_US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  { 
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas-Fort Worth" />
        <meta name="geo.position" content="32.7767;-96.7970" />
        <meta name="ICBM" content="32.7767, -96.7970" />
        <link rel="canonical" href="https://smartspacesdfw.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://smartspacesdfw.com",
              "name": "SmartSpaces DFW",
              "image": "https://smartspacesdfw.com/smart-spaces-logox2.png",
              "logo": "https://smartspacesdfw.com/smart-spaces-logox2.png",
              "url": "https://smartspacesdfw.com",
              "telephone": "+1-682-466-2130",
              "email": "info@smartspacesdfw.com",
              "priceRange": "$$-$$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dallas-Fort Worth",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.7767,
                "longitude": -96.7970
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Dallas"
                },
                {
                  "@type": "City",
                  "name": "Fort Worth"
                },
                {
                  "@type": "City",
                  "name": "Arlington"
                },
                {
                  "@type": "City",
                  "name": "Plano"
                },
                {
                  "@type": "City",
                  "name": "Irving"
                },
                {
                  "@type": "City",
                  "name": "Frisco"
                },
                {
                  "@type": "City",
                  "name": "McKinney"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/smartspacesdfw",
                "https://www.instagram.com/smartspacesdfw"
              ],
              "description": "Professional smart home installation serving Dallas-Fort Worth. Specializing in home automation, security systems, smart lighting, and EV charger installation with a network health first approach.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Smart Home Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Home Automation Installation",
                      "description": "Professional home automation system installation with Home Assistant"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Smart Lighting Installation",
                      "description": "Lutron Caseta and RadioRA smart lighting systems"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Security System Installation",
                      "description": "UniFi Protect security cameras and systems"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Network Installation",
                      "description": "UniFi network infrastructure and Wi-Fi optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "EV Charger Installation",
                      "description": "Tesla Wall Connector and ChargePoint Home Flex installation"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
