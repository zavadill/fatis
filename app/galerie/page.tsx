import type { Metadata } from "next";
import GalleryClient from "./GalleryClient"; // Importujeme klientskou část

export const metadata: Metadata = {
  title: "Galerie střihů & Portfolio | Barber Fati",
  description: "Inspirace pro váš nový účes. Prohlédněte si ukázky naší práce – od moderních Fade střihů po klasiku a úpravu vousů. Barber shop Prostějov.",
  alternates: {
    canonical: "/galerie",
  },
  openGraph: {
    title: "Galerie střihů - Barber Fati",
    description: "Prohlédněte si naše portfolio a načerpejte inspiraci pro další návštěvu.",
    url: "https://www.barberfati.cz/galerie",
    images: [
      {
        url: "/og-gallery.jpg",
        width: 1200,
        height: 630,
        alt: "Ukázky střihů Barber Fati",
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}