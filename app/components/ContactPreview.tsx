"use client"

import React from "react"

const openingHours = [
  { day: "Pondělí - Pátek", time: "9:00 – 18:00" },
  { day: "Sobota", time: "9:00 – 14:00" },
  { day: "Neděle", time: "Zavřeno" },
]

const ContactPreview = () => {
  return (
    <section className="relative bg-neutral-950 py-24 lg:py-32 overflow-hidden text-neutral-100 border-t border-neutral-900">
      
      {/* DEKORATIVNÍ POZADÍ (Glow vpravo dole) */}
      <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-full bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* LEVÁ STRANA - INFO */}
            <div className="flex flex-col justify-center">
                
                {/* Nadpis */}
                <span className="text-blue-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
                    Kontakt
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-8">
                    Kde nás <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">najdete?</span>
                </h2>
                
                <p className="text-neutral-400 text-lg mb-12 font-light">
                    Sídlíme v srdci Prostějova. Zastavte se na střih, kávu a pokec. 
                    Parkování je možné přímo v areálu Atria.
                </p>

                {/* KONTAKTNÍ KARTY */}
                <div className="space-y-6">
                    
                    {/* ADRESA */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800 backdrop-blur-sm">
                        <div className="p-3 bg-neutral-800 rounded-full text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg">OC Atrium</h3>
                            <p className="text-neutral-400">Hlavní náměstí 123, 796 01 Prostějov</p>
                            <p className="text-blue-500 text-sm mt-1 font-medium">1. patro, vedle kavárny</p>
                        </div>
                    </div>

                    {/* TELEFON & EMAIL */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:+420123456789" className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-blue-500 hover:bg-neutral-800 transition-all group">
                            <div className="p-3 bg-blue-600/20 text-blue-500 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Zavolejte nám</p>
                                <p className="text-white font-bold">+420 123 456 789</p>
                            </div>
                        </a>
                        
                        <a href="mailto:info@barberfati.cz" className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-white transition-all">
                             <div className="p-3 bg-neutral-800 rounded-full text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Napište nám</p>
                                <p className="text-white font-bold">info@barberfati.cz</p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

            {/* PRAVÁ STRANA - MAPA & OTEVÍRACÍ DOBA */}
            <div className="relative">
                
                {/* OTEVÍRACÍ DOBA KARTA */}
                <div className="absolute -top-10 -left-6 z-20 hidden lg:block bg-blue-600 text-white p-6 rounded-2xl shadow-xl shadow-blue-600/20 max-w-[250px]">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Otevírací doba
                    </h3>
                    <ul className="space-y-3 text-sm">
                        {openingHours.map((item, index) => (
                            <li key={index} className="flex justify-between border-b border-blue-500/30 pb-2 last:border-0 last:pb-0">
                                <span className="opacity-80">{item.day}</span>
                                <span className="font-bold">{item.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* MAPA CONTAINER */}
                <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-neutral-800 relative group">
                    
                    {/* Tmavý filtr na mapu - CSS trik pro dark mode mapu bez API klíče */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.654637736416!2d17.109678315687555!3d49.47055597935234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712f90768078f41%3A0xc3c683833446b5e1!2sOC%20Zlat%C3%A1%20Br%C3%A1na!5e0!3m2!1scs!2scz!4v1677685412345!5m2!1scs!2scz" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) opacity(0.8)' }} 
                        allowFullScreen 
                        loading="lazy" 
                        className="group-hover:opacity-100 transition-opacity duration-500"
                    ></iframe>

                    {/* Button zobrazit na mapách (mobil) */}
                    <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                        <a href="https://goo.gl/maps/xyz" target="_blank" rel="noreferrer" className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-bold shadow-lg">
                            Navigovat
                        </a>
                    </div>
                </div>

                {/* Otevírací doba pro MOBIL (pod mapou) */}
                <div className="lg:hidden mt-8 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
                     <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Otevírací doba
                    </h3>
                    <ul className="space-y-3 text-sm text-neutral-300">
                        {openingHours.map((item, index) => (
                            <li key={index} className="flex justify-between border-b border-neutral-800 pb-2 last:border-0">
                                <span>{item.day}</span>
                                <span className="font-bold text-white">{item.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPreview