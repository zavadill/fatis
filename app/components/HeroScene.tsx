"use client"

import React from "react"
import { Canvas } from "@react-three/fiber"
import { ChairModel } from "./ChairModel"
import Link from "next/link"

const HeroScene = () => {
  return (
    <section className="relative bg-neutral-950 overflow-hidden text-neutral-100 selection:bg-blue-500 selection:text-white">
      
      {/* DEKORATIVNÍ POZADÍ (Glow effect) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-1/2 bg-blue-600/10 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      {/* flex-col-reverse: Mobil (text dole, židle nahoře), lg:flex-row: Desktop (vedle sebe) */}
      <div className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between pb-10 lg:pb-0">

        {/* LEVÁ SEKCE – TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-10 lg:p-8 lg:pl-24 text-left z-10 lg:pt-0">
          
          <span className="text-blue-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center gap-2">
            <span className="w-6 sm:w-8 h-[2px] bg-blue-500 inline-block"></span>
            Prostějov Atrium
          </span>

          {/* Responzivní nadpis: text-4xl (mobil) -> text-5xl (tablet) -> text-7xl (desktop) */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Barber <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Fati</span>
          </h1>

          <div className="border-l-2 border-blue-500/50 pl-4 lg:pl-6 mb-8 lg:mb-10">
            <p className="text-base sm:text-lg lg:text-xl text-neutral-400 max-w-lg font-light leading-relaxed">
              <span className="text-white font-medium">Víc než jen střih.</span><br />
              Ostrá břitva, precizní fade a relax, který si zasloužíš.
            </p>
          </div>

          {/* Tlačítka: Na mobilu pod sebou a plná šířka (w-full), od tabletu vedle sebe */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href={"https://barbershop-fati.reservio.com/"} className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20 ring-1 ring-blue-500/50 text-center">
              Chci termín
            </Link>
            <Link href={"/sluzby"} className="w-full sm:w-auto px-8 py-4 border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800 text-white rounded-full transition-all backdrop-blur-sm text-center">
              Ceník služeb
            </Link>
          </div>
        </div>

        {/* PRAVÁ SEKCE – 3D */}
        {/* Výška: h-[45vh] na mobilu (aby zbylo místo na text), h-screen na desktopu */}
        <div className="w-full h-[45vh] lg:h-screen lg:w-1/2 relative bg-gradient-to-b from-neutral-900/20 to-transparent">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
            <directionalLight position={[-5, 5, 0]} intensity={2} color="#3b82f6" />
            <ChairModel />
          </Canvas>
        </div>
      </div>

    </section>
  )
}

export default HeroScene