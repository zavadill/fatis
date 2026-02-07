import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obchodní podmínky | Barber Fati",
  description: "Pravidla rezervací, storno podmínky, ceny a provozní řád barber shopu Barber Fati.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-neutral-950 min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* DEKORACE POZADÍ */}
      <div className="absolute bottom-0 left-0 w-full lg:w-1/2 h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* HLAVIČKA */}
        <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-500 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Zpět na web
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Obchodní podmínky
            </h1>
            <p className="text-neutral-500">
                Platné od: 1. 1. 2024
            </p>
        </div>

        {/* OBSAH - GLASS KARTA */}
        <div className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-10 text-neutral-300 leading-relaxed">

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">01.</span> Úvodní ustanovení
                </h2>
                <p>
                    Tyto obchodní podmínky upravují vzájemná práva a povinnosti mezi poskytovatelem služeb 
                    (Barber Fati) a zákazníkem. Objednáním termínu (osobně, telefonicky nebo online) 
                    zákazník vyjadřuje souhlas s těmito podmínkami.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">02.</span> Rezervace a storno podmínky
                </h2>
                <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl mb-6">
                    <p className="text-red-200 font-medium">
                        Prosíme o dochvilnost. Vážíme si vašeho i našeho času.
                    </p>
                </div>
                <ul className="list-disc pl-6 space-y-4 text-neutral-400">
                    <li>
                        <strong>Závaznost rezervace:</strong> Každá vytvořená rezervace je závazná.
                    </li>
                    <li>
                        <strong>Zrušení termínu:</strong> Pokud se nemůžete dostavit, prosíme o zrušení rezervace 
                        nejpozději <strong>24 hodin předem</strong>. Umožníte tak objednání jinému klientovi.
                    </li>
                    <li>
                        <strong>Pozdní příchod:</strong> Pokud se zpozdíte o více než 10 minut, vyhrazujeme si právo 
                        termín zrušit nebo službu zkrátit (při zachování plné ceny), aby nebyl narušen harmonogram dalších klientů.
                    </li>
                    <li>
                        <strong>Neomluvená absence:</strong> Při opakovaném neomluveném nedostavení se na termín 
                        si vyhrazujeme právo odmítnout další rezervace.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">03.</span> Ceny a platby
                </h2>
                <p>
                    Platné ceny za služby jsou uvedeny v Ceníku na webových stránkách a v provozovně. 
                    Vyhrazujeme si právo ceník kdykoliv změnit. Pro zákazníka je platná cena v době provedení rezervace, 
                    případně cena dohodnutá před započetím služby.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">04.</span> Autorská práva
                </h2>
                <p>
                    Veškerý obsah na tomto webu (texty, fotografie, loga, design) je majetkem provozovatele 
                    Barber Fati a je chráněn autorským právem. Jakékoliv kopírování nebo užití bez písemného 
                    souhlasu je zakázáno.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">05.</span> Závěrečná ustanovení
                </h2>
                <p>
                    Provozovatel si vyhrazuje právo odmítnout obsloužit zákazníka, který je pod vlivem alkoholu, 
                    návykových látek, chová se agresivně nebo vykazuje příznaky infekčního onemocnění.
                </p>
            </section>

        </div>
      </div>
    </main>
  );
}