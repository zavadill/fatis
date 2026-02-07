"use client"

import React, { useState } from "react"

// Data galerie
const galleryData = [
  { id: 1, src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop", category: "Střihy", title: "Sharp Fade" },
  { id: 2, src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop", category: "Holení", title: "Royal Shave" },
  { id: 3, src: "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2070&auto=format&fit=crop", category: "Interiér", title: "Lounge Area" },
  { id: 4, src: "https://images.unsplash.com/photo-1599351431202-6e0005a7837f?q=80&w=1961&auto=format&fit=crop", category: "Produkty", title: "Styling Clay" },
  { id: 5, src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop", category: "Střihy", title: "Texture Crop" },
  { id: 6, src: "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop", category: "Holení", title: "Hot Towel" },
  { id: 7, src: "https://images.unsplash.com/photo-1634480256802-53b75429df78?q=80&w=2069&auto=format&fit=crop", category: "Střihy", title: "Classic Pompadour" },
  { id: 8, src: "https://images.unsplash.com/photo-1512690459411-b9245aed8ad5?q=80&w=2070&auto=format&fit=crop", category: "Interiér", title: "Barber Chairs" },
  { id: 9, src: "https://images.unsplash.com/photo-1593702295094-aea8c5c13d7b?q=80&w=2000&auto=format&fit=crop", category: "Střihy", title: "Buzz Cut" },
];

const categories = ["Vše", "Střihy", "Holení", "Interiér", "Produkty"];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("Vše");

  const filteredImages = activeCategory === "Vše" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  return (
    <main className="bg-neutral-950 min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* 1. POZADÍ - GLOW EFEKTY */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full lg:w-1/2 h-[500px] bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 2. HLAVIČKA STRÁNKY */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
            Portfolio
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Inspirace pro <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              váš další look
            </span>
          </h1>
          
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Prohlédněte si naše nejnovější práce. Od klasiky po moderní trendy.
            V Barber Fati je každý střih originál.
          </p>
        </div>

        {/* 3. FILTR KATEGORIÍ */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                        px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border
                        ${activeCategory === cat 
                            ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105" 
                            : "bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white hover:bg-neutral-800"
                        }
                    `}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* 4. MASONRY GRID GALERIE */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            
            {filteredImages.map((item) => (
                <div 
                    key={item.id} 
                    className="group relative break-inside-avoid overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900"
                >
                    <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            {item.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                            {item.title}
                        </h3>
                    </div>
                </div>
            ))}

        </div>

        {/* Zpráva, pokud není nic nalezeno */}
        {filteredImages.length === 0 && (
            <div className="text-center py-20">
                <p className="text-neutral-500 text-lg">V této kategorii zatím nejsou žádné fotky.</p>
                <button 
                    onClick={() => setActiveCategory("Vše")}
                    className="mt-4 text-blue-500 hover:text-white transition-colors underline underline-offset-4 decoration-blue-500"
                >
                    Zobrazit vše
                </button>
            </div>
        )}

        {/* 5. CTA */}
        <div className="max-w-4xl mx-auto bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-[2.5rem] p-8 sm:p-12 text-center mt-24 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">
                Líbí se vám naše práce?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto relative z-10">
                Nečekejte. Termíny se rychle plní. Rezervujte si své místo v křesle ještě dnes.
            </p>
            
            <a href="https://barbershop-fati.reservio.com/" className="relative z-10 inline-block">
                <button className="px-10 py-4 bg-white text-neutral-950 hover:bg-blue-500 hover:text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-xl">
                    Chci taky takový střih
                </button>
            </a>
        </div>

      </div>
    </main>
  );
}