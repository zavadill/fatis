import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nastavení Cookies | Barber Fati",
  description: "Přehled používaných cookies (Reservio, Google Maps, Analytics) a možnosti jejich nastavení.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="bg-neutral-950 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-neutral-300 space-y-8">
        
        <h1 className="text-4xl font-bold text-white mb-8">Ochrana osobních údajů a Cookies</h1>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Kdo jsme</h2>
          <p>
            Provozovatelem webu je <strong>[Tvé Jméno / Název Firmy]</strong>, IČO: [Tvé IČO], se sídlem [Tvá Adresa].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Jaké cookies používáme</h2>
          <p className="mb-4">
            Náš web používá pouze nezbytné technické cookies a cookies třetích stran, které jsou nutné pro fungování služeb:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-400">
            <li><strong>Reservio:</strong> Pro zajištění funkčnosti rezervačního formuláře.</li>
            <li><strong>Google Maps:</strong> Pro zobrazení interaktivní mapy.</li>
            <li><strong>Vercel Analytics:</strong> Pro anonymní měření návštěvnosti (nesbírá osobní údaje).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Osobní údaje (GDPR)</h2>
          <p>
            Pokud vyplníte rezervační formulář, zpracováváme vaše jméno, telefon a email výhradně za účelem vyřízení vaší objednávky. 
            Tyto údaje nejsou předávány žádným marketingovým třetím stranám.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Vaše práva</h2>
          <p>
            Máte právo kdykoliv požádat o informace, jaké údaje o vás evidujeme, nebo požádat o jejich výmaz. Kontaktujte nás na emailu: <strong>info@fati.cz</strong>.
          </p>
        </section>

      </div>
    </main>
  );
}