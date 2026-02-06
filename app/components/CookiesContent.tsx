"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Zkontrolujeme, jestli už uživatel souhlasil
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    // Uložíme souhlas navždy (nebo dokud si nevymaže cache)
    localStorage.setItem("cookie-consent", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    // Fixed bottom-0 zajistí, že to bude vždy dole přes všechno ostatní
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 rounded-2xl p-5 shadow-2xl shadow-black/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-sm text-neutral-400 text-center sm:text-left leading-relaxed">
          <p>
            Tento web používá k poskytování služeb (rezervace, mapy) a analýze návštěvnosti soubory cookie. 
            Používáním webu s tím souhlasíte.{" "}
            <Link href="/cookies" className="text-blue-500 hover:text-white underline underline-offset-2 transition-colors">
              Více informací
            </Link>.
          </p>
        </div>

        <button 
            onClick={handleAccept}
            className="whitespace-nowrap px-8 py-3 bg-white text-neutral-950 hover:bg-blue-600 hover:text-white font-bold text-sm rounded-full transition-all shadow-lg"
        >
            Rozumím
        </button>

      </div>
    </div>
  )
}