import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { CookieConsent } from "./components/CookiesContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. ZÁKLADNÍ URL (Důležité pro SEO obrázky a odkazy)
// Změň na svou reálnou doménu, jakmile ji budeš mít
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : 'https://www.barberfati.cz';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  // 2. TITULEK A POPIS
  title: {
    default: "Barber Fati | Pánské holičství Prostějov",
    template: "%s | Barber Fati", // Na podstránkách to bude např.: "Služby | Barber Fati"
  },
  description: "Profesionální barber shop v Prostějově (OC Atrium). Pánské střihy, úprava vousů, holení břitvou a Hot Towel. Rezervujte si termín online.",
  
  // 3. KLÍČOVÁ SLOVA
  keywords: [
    "Barber Fati", 
    "Barber shop Prostějov", 
    "Pánské holičství Prostějov", 
    "Stříhání vlasů", 
    "Úprava vousů", 
    "Fade", 
    "Holič", 
    "OC Atrium"
  ],

  // 4. AUTOŘI A TVŮRCI
  authors: [{ name: "Barber Fati" }, { name: "Zavadil.me", url: "https://zavadil.me" }],
  creator: "Barber Fati",
  publisher: "Barber Fati",

  // 5. ROBOTI (Indexování)
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

  // 6. SOCIÁLNÍ SÍTĚ (Open Graph - jak to vypadá na FB/IG)
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: baseUrl,
    title: "Barber Fati | Pánské holičství Prostějov",
    description: "Profesionální barber shop v Prostějově. Precizní střihy, úprava vousů a relax. Rezervujte online.",
    siteName: "Barber Fati",
    images: [
      {
        url: "/og-image.jpg", // Vytvoř obrázek 1200x630px a dej ho do složky /public
        width: 1200,
        height: 630,
        alt: "Barber Fati Prostějov Interiér",
      },
    ],
  },

  // 7. IKONY
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Pro iPhone
  },
};

// Nastavení viewportu pro mobily
export const viewport: Viewport = {
  themeColor: "#0a0a0a", // Barva lišty prohlížeče (ladí s bg-neutral-950)
  width: "device-width",
  initialScale: 1,
};

// 8. STRUKTUROVANÁ DATA (JSON-LD)
// Tohle řekne Googlu, že jsi fyzický obchod v Prostějově
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "name": "Barber Fati",
  "image": `${baseUrl}/og-image.jpg`,
  "telephone": "+420 123 456 789", // Doplň real číslo
  "url": baseUrl,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hlavní náměstí 123", // Doplň real adresu (OC Atrium)
    "addressLocality": "Prostějov",
    "postalCode": "796 01",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.47188, // Souřadnice Prostějova (uprav přesně dle mapy)
    "longitude": 17.11284
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ZMĚNA: lang="cs" je klíčové pro české SEO
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}
      >
        {/* Vložení JSON-LD skriptu */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}