"use client"

import React from "react"
import { Canvas } from "@react-three/fiber"
import { ChairModel } from "./ChairModel"

const HeroScene = () => {
  return (
    <section className="relative bg-neutral-950 overflow-hidden">
      
      {/* HERO */}
      <div className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* LEVÁ SEKCE – TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:pl-24 text-left z-10">
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">
            Prostějov Atrium
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Barber <span className="text-blue-500">Fati</span>
          </h1>

          <div className="border-l-2 border-blue-500 pl-6 mb-10">
            <p className="text-lg lg:text-xl text-neutral-300 max-w-lg font-light leading-relaxed">
              <span className="text-white font-medium">Víc než jen střih.</span><br />
              Ostrá břitva, precizní fade a relax, který si zasloužíš.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition transform hover:scale-105 shadow-lg shadow-blue-500/20">
              Chci termín
            </button>
            <button className="px-8 py-4 border border-neutral-700 hover:border-white text-white rounded-full transition">
              Ceník služeb
            </button>
          </div>
        </div>

        {/* PRAVÁ SEKCE – 3D */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <directionalLight position={[-5, 5, 0]} intensity={2} />
            <ChairModel />
          </Canvas>
        </div>
      </div>

      {/* REZERVAČNÍ KARTA – FLOATING */}
      <div className="relative z-20 -mt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-black/40 p-6 lg:p-10">
          
          {/* HLAVIČKA */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <h3 className="text-xl font-bold text-neutral-900">
              Rezervace termínu
            </h3>
          </div>

          {/* IFRAME */}
          <div className="w-full overflow-hidden rounded-2xl border border-neutral-200">
            <iframe
              src="https://barbershop-fati.reservio.com/"
              className="w-full h-[500px]"
              frameBorder="0"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroScene
