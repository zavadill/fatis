import type { Metadata } from "next";
import ContactPreview from "./components/ContactPreview";
import GalleryPreview from "./components/GalleryPreview";
import HeroScene from "./components/HeroScene";
import ServicesPreview from "./components/SectionServices";

// Specifická metadata pro Homepage (volitelné, ale dobré pro jistotu)
export const metadata: Metadata = {
  title: "Barber Fati | Pánské holičství Prostějov", // Natvrdo pro homepage
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <HeroScene />
      <ServicesPreview />
      <GalleryPreview />
      <ContactPreview />
    </main>
  );
}