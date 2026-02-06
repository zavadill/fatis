"use client"

import React from "react"
import { Canvas } from "@react-three/fiber"
import { ChairModel } from "./ChairModel"

const HeroScene = () => {
  return (
    <section className="relative bg-neutral-950 overflow-hidden text-neutral-100 selection:bg-blue-500 selection:text-white">
      
      {/* DEKORATIVNÍ POZADÍ (Glow effect) */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between pb-20 lg:pb-0">

        {/* LEVÁ SEKCE – TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:pl-24 text-left z-10 pt-20 lg:pt-0">
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
            Prostějov Atrium
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Barber <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Fati</span>
          </h1>

          <div className="border-l-2 border-blue-500/50 pl-6 mb-10">
            <p className="text-lg lg:text-xl text-neutral-400 max-w-lg font-light leading-relaxed">
              <span className="text-white font-medium">Víc než jen střih.</span><br />
              Ostrá břitva, precizní fade a relax, který si zasloužíš.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20 ring-1 ring-blue-500/50">
              Chci termín
            </button>
            <button className="px-8 py-4 border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800 text-white rounded-full transition-all backdrop-blur-sm">
              Ceník služeb
            </button>
          </div>
        </div>

        {/* PRAVÁ SEKCE – 3D */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative">
          {/* Gradient overlay pro lepší splynutí 3D modelu se spodní částí na mobilu */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950 lg:hidden pointer-events-none z-10" />
          
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
            <directionalLight position={[-5, 5, 0]} intensity={2} color="#3b82f6" /> {/* Modrý nádech zleva */}
            <ChairModel />
          </Canvas>
        </div>
      </div>

      {/* REZERVAČNÍ KARTA – DARK GLASSMORPHISM */}
      <div className="relative z-20 -mt-24 lg:-mt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Wrapper karty s efektem skla */}
          <div className="bg-neutral-900/80 backdrop-blur-xl rounded-3xl border border-neutral-800 shadow-2xl shadow-black/50 p-6 lg:p-10 overflow-hidden relative">
            
            {/* Jemný glow efekt uvnitř karty */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />

            {/* HLAVIČKA KARTY */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Rezervace termínu
                </h3>
              </div>
              <p className="text-sm text-neutral-500 font-medium">
                Rychlá online rezervace přes Reservio
              </p>
            </div>

            {/* IFRAME KONTEJNER */}
            {/* Zde je background white, protože většina widgetů je uvnitř bílá. 
                Pokud bys dal tmavé pozadí pod průhledný iframe s černým textem, nebylo by to čitelné. 
                Rámeček okolo je ale stylově tmavý. */}
            <div className="w-full overflow-hidden rounded-2xl border border-neutral-800 bg-white/5 relative group">
              
              {/* Fallback loading skeleton nebo pozadí, kdyby se iframe načítal dlouho */}
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center -z-10">
                 <span className="text-neutral-700 text-sm">Načítám kalendář...</span>
              </div>

              <iframe
                src="https://barbershop-fati.reservio.com/"
                className="w-full h-[600px] md:h-[700px] bg-white filter grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
                frameBorder="0"
                title="Barber Fati Rezervace"
              />
            </div>
            
             <p className="text-center text-neutral-600 text-xs mt-4">
                Powered by Reservio • Těšíme se na vaši návštěvu
             </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroScene