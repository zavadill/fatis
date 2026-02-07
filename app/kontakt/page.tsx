import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt a Rezervace | Barber Fati Prostějov",
  description: "Kde nás najdete? OC Atrium Prostějov (1. patro). Telefon: +420 123 456 789. Otevírací doba a mapa. Rezervujte si termín online.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt - Barber Fati Prostějov",
    description: "Zastavte se na perfektní střih. Sídlíme v OC Atrium. Parkování zajištěno.",
    url: "https://www.barberfati.cz/kontakt",
  },
};

const openingHours = [
  { day: "Pondělí - Pátek", time: "9:00 – 18:00" },
  { day: "Sobota", time: "9:00 – 14:00" },
  { day: "Neděle", time: "Zavřeno" },
];

export default function ContactPage() {
  return (
    <main className="bg-neutral-950 min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* 1. DEKORATIVNÍ POZADÍ */}
      {/* Modrá záře vlevo nahoře */}
      <div className="absolute top-0 left-0 w-full lg:w-1/2 h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      {/* Modrá záře vpravo dole */}
      <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-[600px] bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 2. HLAVIČKA STRÁNKY */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <span className="text-blue-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
            Kde nás najdete
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Zastavte se na <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              perfektní střih
            </span>
          </h1>
          
          <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-xl mx-auto">
            Jsme tu pro vás v srdci Prostějova. Máte otázky nebo speciální přání? 
            Napište nám, zavolejte, nebo se rovnou stavte.
          </p>
        </div>

        {/* 3. HLAVNÍ GRID (INFO vs MAPA/FORMULÁŘ) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* --- LEVÝ SLOUPEC: Kontaktní údaje --- */}
            <div className="space-y-8">
                
                {/* Karta: ADRESA */}
                <div className="group bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2rem] p-8 hover:border-blue-500/50 transition-colors duration-300">
                    <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center text-blue-500 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">OC Atrium</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Hlavní náměstí 123, <br/>
                                796 01 Prostějov
                            </p>
                            <p className="text-blue-500 text-sm font-medium mt-2">
                                1. patro, vchod vedle kavárny
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid: TELEFON & EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Telefon */}
                    <a href="tel:+420123456789" className="group bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2rem] p-6 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
                        <div className="mb-4 text-blue-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold group-hover:text-blue-100">Zavolejte nám</p>
                        <p className="text-lg font-bold text-white mt-1">+420 123 456 789</p>
                    </a>

                    {/* Email */}
                    <a href="mailto:info@fati.cz" className="group bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2rem] p-6 hover:border-white transition-all duration-300">
                        <div className="mb-4 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Napište nám</p>
                        <p className="text-lg font-bold text-white mt-1">info@fati.cz</p>
                    </a>
                </div>

                {/* Karta: OTEVÍRACÍ DOBA */}
                <div className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2rem] p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Otevírací doba
                    </h3>
                    <div className="space-y-4">
                        {openingHours.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-neutral-800 pb-3 last:border-0 last:pb-0">
                                <span className="text-neutral-400">{item.day}</span>
                                <span className="text-white font-bold">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            {/* --- PRAVÝ SLOUPEC: Formulář & Mapa --- */}
            <div className="flex flex-col gap-8">
                
                {/* Kontaktní formulář (Vizuální) */}
                <div className="bg-neutral-900/60 backdrop-blur-2xl border border-neutral-800 rounded-[2rem] p-8 lg:p-10 shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6">Rychlá zpráva</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase ml-2">Jméno</label>
                                <input type="text" placeholder="Vaše jméno" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-500 uppercase ml-2">Email</label>
                                <input type="email" placeholder="vas@email.cz" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-500 uppercase ml-2">Zpráva</label>
                            <textarea rows={4} placeholder="S čím můžeme pomoci?" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                        </div>
                        <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20">
                            Odeslat zprávu
                        </button>
                    </form>
                </div>

                {/* Mapa (Dark Mode Style) */}
                <div className="w-full h-[300px] lg:h-[350px] rounded-[2rem] overflow-hidden border border-neutral-800 relative group">
                    {/* Filtr pro tmavou mapu */}
                    <div className="absolute inset-0 pointer-events-none z-10 border-[1px] border-neutral-700/50 rounded-[2rem]" />
                    
                    <iframe 
                        src="https://maps.google.com/maps?q=Prostějov%20Atrium&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) opacity(0.8)' }} 
                        allowFullScreen 
                        loading="lazy"
                        className="group-hover:opacity-100 transition-opacity duration-500"
                    ></iframe>
                    
                    {/* Tlačítko navigovat */}
                    <a 
                        href="https://goo.gl/maps/xyz" 
                        target="_blank" 
                        rel="noreferrer"
                        className="absolute bottom-4 right-4 bg-white text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-neutral-200 transition-colors z-20"
                    >
                        Otevřít mapu ↗
                    </a>
                </div>

            </div>

        </div>

      </div>
    </main>
  );
}