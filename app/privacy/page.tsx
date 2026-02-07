import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů (GDPR) | Barber Fati",
  description: "Informace o tom, jak zpracováváme vaše osobní údaje, jaká data sbíráme přes Reservio a jaká jsou vaše práva.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true, // Chceme, aby Google věděl, že jsme transparentní
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-neutral-950 min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* DEKORACE POZADÍ */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none" />

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
                Zásady ochrany osobních údajů
            </h1>
            <p className="text-neutral-500">
                Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
            </p>
        </div>

        {/* OBSAH - GLASS KARTA */}
        <div className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-10 text-neutral-300 leading-relaxed">

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">01.</span> Správce údajů
                </h2>
                <p>
                    Správcem vašich osobních údajů je provozovatel barber shopu: <br /><br />
                    <strong>Barber Fati (Jméno Podnikatele/Firmy)</strong><br />
                    IČO: [DOPLŇTE IČO]<br />
                    Sídlo: [DOPLŇTE ADRESU]<br />
                    Email: info@fati.cz
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">02.</span> Jaká data sbíráme a proč
                </h2>
                <p className="mb-4">
                    Zpracováváme pouze údaje nezbytné pro poskytnutí našich služeb:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                    <li>
                        <strong>Rezervace (Reservio):</strong> Jméno, příjmení, telefonní číslo a e-mail. Tyto údaje potřebujeme, abychom vám mohli potvrdit termín a kontaktovat vás v případě změn.
                    </li>
                    <li>
                        <strong>Technická data (Vercel Analytics):</strong> Anonymizované informace o návštěvnosti webu (typ zařízení, země, prohlížeč). Tato data nelze spojit s konkrétní osobou a slouží k vylepšování webu.
                    </li>
                    <li>
                        <strong>Cookies:</strong> Používáme pouze nezbytné technické cookies pro fungování rezervačního systému a mapy. Nepoužíváme marketingové cookies pro cílení reklamy.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">03.</span> Služby třetích stran
                </h2>
                <p>
                    Pro zajištění chodu webu využíváme prověřené partnery, kteří mohou mít přístup k nezbytným datům:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-400">
                    <li><strong>Reservio, s.r.o.</strong> – Poskytovatel rezervačního systému.</li>
                    <li><strong>Vercel Inc.</strong> – Hosting webu a analytika.</li>
                    <li><strong>Google (Alphabet Inc.)</strong> – Zobrazení interaktivní mapy.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500">04.</span> Vaše práva
                </h2>
                <p>
                    Podle nařízení GDPR máte právo:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-400">
                    <li>Požádat nás o informaci, jaké vaše osobní údaje zpracováváme.</li>
                    <li>Požádat o vysvětlení ohledně zpracování osobních údajů.</li>
                    <li>Vyžádat si u nás přístup k těmto údajům a nechat je aktualizovat nebo opravit.</li>
                    <li>Požádat nás o výmaz těchto osobních údajů.</li>
                </ul>
            </section>

        </div>
      </div>
    </main>
  );
}