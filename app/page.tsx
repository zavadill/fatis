import ContactPreview from "./components/ContactPreview";
import GalleryPreview from "./components/GalleryPreview";
import HeroScene from "./components/HeroScene";
import ServicesPreview from "./components/SectionServices";


export default function Home() {
  return (
    <main className="">
      <HeroScene />
      <ServicesPreview />
      <GalleryPreview />
      <ContactPreview />
    </main>
  );
}