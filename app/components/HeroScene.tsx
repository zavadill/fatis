"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ChairModel } from './ChairModel'

const HeroScene = () => {
  return (
      <div className="relative w-full min-h-screen bg-neutral-950 flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden">
        
        {/* LEVÁ SEKCE (Na mobilu dole): Text a CTA */}
        {/* Změny:
            1. flex-col-reverse v rodiči (viz nahoře) poslal tento div vizuálně dolů.
            2. 'text-left' místo 'text-center' (zarovnání vlevo).
            3. 'justify-end' pro mobil (zarovnání obsahu dolů), 'lg:justify-center' pro desktop.
            4. 'pb-12' přidáno pro odstup od spodní hrany na mobilu.
        */}
        <div className="w-full lg:w-1/2 p-8 pb-12 lg:pl-24 flex flex-col justify-end lg:justify-center z-10 text-left">
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Barber <span className="text-blue-500">Fati</span><br />
              Prostějov
            </h1>
            
            <h2 className="text-lg lg:text-xl text-neutral-400 mb-10 max-w-lg font-light">
              Precizní střihy a úprava vousů. <br className="hidden lg:block"/>
              Styl, který sedí, v atmosféře, kterou si užijete.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
                  Objednat se
                </button>
                <button className="px-8 py-4 border border-neutral-700 hover:border-white text-white font-medium rounded-full transition-colors backdrop-blur-sm">
                  Zobrazit ceník
                </button>
            </div>

        </div>

        {/* PRAVÁ SEKCE (Na mobilu nahoře): 3D Model */}
        {/* Díky flex-col-reverse je tento div na mobilu vizuálně první (nahoře) */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative">
            <div className="absolute inset-0 pointer-events-none" />
            
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <directionalLight position={[-5, 5, 0]} intensity={2} />
                <directionalLight position={[0, 5, 2]} intensity={2} />
                <ambientLight intensity={1} />
                
                <ChairModel />
            </Canvas>
        </div>

      </div>
  )
}

export default HeroScene