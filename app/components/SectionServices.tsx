"use client"

import React from "react"
import Link from "next/link"

const services = [
  {
    title: "Pánský střih",
    price: "490 Kč",
    description: "Konzultace, mytí, precizní střih nůžkami i strojkem, začisťení kontur břitvou, styling.",
    duration: "45 min"
  },
  {
    title: "Úprava vousů",
    price: "390 Kč",
    description: "Napaření Hot Towelem, úprava tvaru, holení břitvou (krk a tváře), olej a balzám.",
    duration: "30 min"
  },
  {
    title: "Komplet Barber",
    price: "790 Kč",
    description: "Kombinace střihu a úpravy vousů. Kompletní servis včetně peelingu a masáže hlavy.",
    duration: "75 min"
  },
  {
    title: "Junior střih",
    price: "390 Kč",
    description: "Stylový střih pro mladé gentlemany do 10 let. Stejná péče jako pro dospělé.",
    duration: "30 min"
  }
]

const ServicesPreview = () => {
  return (
    <section className="relative bg-neutral-950 py-24 lg:py-32 overflow-hidden text-neutral-100">
      
      {/* DEKORATIVNÍ POZADÍ (Glow effect - tentokrát vlevo pro vyvážení) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full lg:w-1/3 h-full bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HLAVIČKA SEKCE */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <span className="text-blue-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
            Co nabízíme
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Mistrovství v <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">každém detailu</span>
          </h2>
          
          <p className="text-neutral-400 max-w-2xl text-lg font-light">
            V Barber Fati neposkytujeme jen služby, vytváříme zážitek. 
            Vyberte si péči, která podtrhne váš styl.
          </p>
        </div>

        {/* GRID SLUŽEB */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-neutral-900/80 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Jemný gradient na vrchu karty při hoveru */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <span className="text-blue-500 font-bold text-lg bg-blue-500/10 px-3 py-1 rounded-full">
                  {service.price}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-wider mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {service.duration}
              </div>
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
                {service.description}
              </p>

              {/* Dekorativní tečka */}
              <div className="w-10 h-[2px] bg-neutral-800 group-hover:bg-blue-500 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA TLAČÍTKO - ODKAZ NA VŠECHNY SLUŽBY */}
        <div className="flex justify-center">
            <Link href="/sluzby">
                <button className="px-10 py-4 border border-neutral-700 hover:border-blue-500 text-neutral-300 hover:text-white rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-neutral-900/50 backdrop-blur-md flex items-center gap-3 group">
                    Zobrazit kompletní ceník
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </Link>
        </div>

      </div>
    </section>
  )
}

export default ServicesPreview