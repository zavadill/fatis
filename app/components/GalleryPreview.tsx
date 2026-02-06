"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

// Data pro galerii (nahraď pak svými fotkami z /public složky)
// Prozatím používám Unsplash placeholder obrázky, aby to vypadalo reálně hned po vložení
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    alt: "Střih a úprava vousů",
    category: "Haircut & Beard",
    className: "md:col-span-2 md:row-span-2 h-[300px] md:h-[600px]" // Velká hlavní fotka
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    alt: "Detail břitvy",
    category: "Hot Towel Shave",
    className: "md:col-span-1 md:row-span-1 h-[300px]"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-6e0005a7837f?q=80&w=1961&auto=format&fit=crop",
    alt: "Styling produkt",
    category: "Styling",
    className: "md:col-span-1 md:row-span-1 h-[300px]"
  }
]

const GalleryPreview = () => {
  return (
    <section className="relative bg-neutral-950 py-24 lg:py-32 overflow-hidden text-neutral-100 border-t border-neutral-900">
      
      {/* DEKORATIVNÍ POZADÍ (Glow uprostřed) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-1/2 h-1/2 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HLAVIČKA SEKCE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="text-left">
                <span className="text-blue-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
                    Portfolio
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                    Výsledky, které <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">mluví za vše</span>
                </h2>
            </div>

            {/* Popis vpravo (na desktopu) */}
            <p className="text-neutral-400 max-w-md text-base md:text-lg font-light leading-relaxed md:text-right">
                Každý střih je vizitka. Podívejte se na ukázky naší práce a načerpejte inspiraci pro vaši příští návštěvu.
            </p>
        </div>

        {/* BENTO GRID GALERIE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 ${item.className}`}
            >
              {/* Overlay gradient (aby byl text čitelný) */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-40" />
              
              {/* OBRÁZEK */}
              {/* Používám standardní img pro demo, v Next.js ideálně použij <Image layout="fill" ... /> */}
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* TEXT NA KARTĚ (Zobrazí se/vyskočí při hoveru) */}
              <div className="absolute bottom-0 left-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.alt}
                </h3>
              </div>

              {/* Ikonka zvětšení (dekorace) */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 bg-neutral-950/50 backdrop-blur-md rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA TLAČÍTKA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/galerie">
                <button className="px-10 py-4 bg-transparent border border-neutral-700 hover:border-blue-500 text-white font-bold rounded-full transition-all hover:bg-neutral-900 flex items-center gap-3">
                    Zobrazit celou galerii
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </Link>

            {/* Instagram Link - velmi důležité pro Barbery */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-neutral-400 hover:text-blue-500 transition-colors text-sm font-medium">
                <span className="p-2 bg-neutral-900 rounded-full group-hover:bg-blue-500/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.75 6.75h.75v.75h-.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 9v6a4.5 4.5 0 01-4.5 4.5h-4.5A4.5 4.5 0 015.25 15V9a4.5 4.5 0 014.5-4.5h4.5a4.5 4.5 0 014.5 4.5z" />
                    </svg>
                </span>
                Sledujte nás na Instagramu
            </a>
        </div>

      </div>
    </section>
  )
}

export default GalleryPreview