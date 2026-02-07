import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ceník služeb | Barber Fati Prostějov",
  description: "Kompletní ceník pánských střihů a úpravy vousů. Klasický střih, Skin Fade, Hot Towel holení a wellness procedury v OC Atrium Prostějov.",
  alternates: {
    canonical: "/sluzby",
  },
  openGraph: {
    title: "Ceník služeb - Barber Fati",
    description: "Podívejte se na naše ceny. Střihy, holení a kompletní péče o muže.",
    url: "https://www.barberfati.cz/sluzby",
  },
};

// DATA: Ceník služeb
const pricingData = [
  {
    category: "Vlasy",
    description: "Profesionální střihy pro každou délku a styl.",
    items: [
      {
        title: "Klasické stříhání",
        price: "500 Kč",
        time: "45 min",
        detail: "Střih, zaholení kontur, úprava obočí, opalování uší, mytí a styling."
      },
      {
        title: "Střih strojkem",
        price: "400 Kč",
        time: "30 min",
        detail: "Střih strojkem celé hlavy bez použití nůžek, úprava obočí a kontur."
      },
      {
        title: "Holení hlavy břitvou do hladka",
        price: "580 Kč",
        time: "45 min",
        detail: "Základem tohoto procesu je poctivé napaření hlavy horkým ručníkem a holení břitvou."
      },
      {
        title: "Dětský střih",
        price: "400 Kč",
        time: "30 min",
        detail: "Stylový střih pro mladé gentlemany do 10 let."
      },
      {
        title: "Pánský klasický střih od 3mm",
        price: "400 Kč",
        time: "30 min",
        detail: "Střih od 3mm, mytí vlasů, vysušení, styling a na závěr kolínská."
      },
      {
        title: "Stříhání dlouhých vlasů",
        price: "690 Kč",
        time: "60 min",
        detail: "Střih, zaholení kontur, úprava obočí, opalování uší a styling delších vlasů."
      }
    ]
  },
  {
    category: "Vousy",
    description: "Prvotřídní péče o vaše vousy.",
    items: [
      {
        title: "Úprava vousů",
        price: "380 Kč",
        time: "30 min",
        detail: "Úprava vousů, zaholení kontur vousů, styling vousů a péče."
      },
      {
        title: "Barvení vousů",
        price: "320 Kč",
        time: "30 min",
        detail: "Profesionální barvení pro sjednocení tónu a plnější vzhled."
      },
      {
        title: "Tradiční holení \"HOT TOWEL\"",
        price: "500 Kč",
        time: "45 min",
        detail: "Napaření vousů horkým ručníkem, tradiční holení břitvou, balzám."
      },
      {
        title: "Úprava vousů + barvení vousů",
        price: "650 Kč",
        time: "60 min",
        detail: "Kompletní úprava tvaru, zaholení kontur a barvení."
      }
    ]
  },
  {
    category: "Komplet",
    description: "Kombinace služeb pro dokonalý výsledek za zvýhodněnou cenu.",
    items: [
      {
        title: "Klasické stříhání + úprava vousů",
        price: "830 Kč",
        time: "75 min",
        detail: "Střih, zaholení kontur, úprava obočí, opalování uší a kompletní úprava vousů."
      },
      {
        title: "Klasické stříhání + tradiční holení",
        price: "950 Kč",
        time: "90 min",
        detail: "Střih, zaholení kontur, úprava obočí a tradiční holení břitvou s Hot Towel."
      },
      {
        title: "Střih strojkem + úprava vousů",
        price: "750 Kč",
        time: "60 min",
        detail: "Střih strojkem bez nůžek, úprava obočí a kompletní úprava vousů."
      },
      {
        title: "Střih strojkem + tradiční holení",
        price: "810 Kč",
        time: "75 min",
        detail: "Střih strojkem a tradiční holení břitvou s metodou Hot Towel."
      },
      {
        title: "Holení hlavy břitvou + úprava vousů",
        price: "880 Kč",
        time: "75 min",
        detail: "Základem je poctivé napaření hlavy a úprava vousů."
      },
      {
        title: "Holení hlavy břitvou + tradiční holení",
        price: "1 050 Kč",
        time: "90 min",
        detail: "Kompletní servis břitvou pro hlavu i tvář s metodou Hot Towel."
      },
      {
        title: "Klasické stříhání, úprava a žehlení vousů",
        price: "930 Kč",
        time: "90 min",
        detail: "Střih, zaholení kontur, úprava obočí a narovnání vousů žehličkou."
      },
      {
        title: "Full service",
        price: "1 180 Kč",
        time: "105 min",
        detail: "Klasické stříhání + úprava vousů (holení do hladka metodou Hot Towel), peeling, maska."
      }
    ]
  },
  {
    category: "Ostatní služby",
    description: "Doplňkové služby pro váš vzhled.",
    items: [
      {
        title: "Pánské barvení vlasů",
        price: "500 Kč",
        time: "45 min",
        detail: "Barvení vlasů, masáž hlavy, mytí vlasů, vysušení."
      },
      {
        title: "Barvení vousů",
        price: "300 Kč",
        time: "30 min",
        detail: "Samostatné barvení vousů."
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950 min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* 1. POZADÍ - DEKORACE */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-[500px] bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 2. HLAVIČKA STRÁNKY */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-blue-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
            Ceník služeb
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Vyberte si svůj <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              nový styl
            </span>
          </h1>
          
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Každá služba zahrnuje konzultaci, abychom pochopili vaši představu. 
            Pracujeme s prémiovou kosmetikou a dbáme na každý detail.
          </p>
        </div>

        {/* 3. CENÍK - KARTY */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {pricingData.map((section, index) => (
            <div 
              key={index} 
              className="group relative"
            >
               {/* Nadpis sekce (např. Pánské střihy) */}
               <div className="flex items-end gap-4 mb-6 px-2">
                  <h2 className="text-3xl font-bold text-white">{section.category}</h2>
                  <span className="h-[1px] flex-1 bg-neutral-800 mb-2 relative overflow-hidden">
                     {/* Animovaná linka */}
                     <span className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out opacity-50" />
                  </span>
                  <p className="text-neutral-500 text-sm hidden sm:block max-w-[200px] text-right">
                    {section.description}
                  </p>
               </div>

               {/* Karta s položkami */}
               <div className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-[2rem] p-6 sm:p-10 hover:border-blue-500/30 transition-colors duration-500 shadow-xl shadow-black/20">
                  <div className="space-y-8">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex flex-col gap-1 group/item">
                        
                        {/* Řádek: Název ......... Cena */}
                        <div className="flex justify-between items-baseline relative">
                          <h3 className="text-xl font-bold text-white group-hover/item:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          
                          {/* Tečkovaná čára */}
                          <div className="flex-1 border-b-2 border-dotted border-neutral-800 mx-4 relative top-[-4px] opacity-50" />
                          
                          <div className="text-right">
                            <span className="block text-xl font-bold text-blue-500">
                                {item.price}
                            </span>
                          </div>
                        </div>

                        {/* Řádek: Popis + Čas */}
                        <div className="flex justify-between items-start text-sm mt-1">
                           <p className="text-neutral-400 font-light max-w-[80%] leading-relaxed">
                             {item.detail}
                           </p>
                           <span className="text-neutral-600 font-mono text-xs whitespace-nowrap pt-1">
                             {item.time}
                           </span>
                        </div>

                      </div>
                    ))}
                  </div>
               </div>
            </div>
          ))}

        </div>

        {/* 4. CTA SEKCIE (Spodní výzva) */}
        <div className="max-w-2xl mx-auto text-center mt-24">
            <h3 className="text-2xl text-white font-bold mb-6">
                Nevíte si rady s výběrem?
            </h3>
            <p className="text-neutral-400 mb-8">
                Nechte to na nás. Objednejte si "Konzultaci & Střih" a my vám na místě poradíme, co se k vašemu typu obličeje a vlasů hodí nejlépe.
            </p>
            
            <Link href="https://barbershop-fati.reservio.com/">
                <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/50">
                    Rezervovat termín online
                </button>
            </Link>
        </div>

      </div>
    </main>
  );
}