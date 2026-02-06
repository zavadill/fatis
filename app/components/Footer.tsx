"use client"

import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" bg-neutral-950 pt-24 pb-12 overflow-hidden">


      {/* 2. PLOVOUCÍ KARTA - VRSTVA POPŘEDÍ (z-10) */}
      {/* Musí mít relative a z-10, aby překryla ten text */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-neutral-900/60 backdrop-blur-2xl border border-neutral-800/80 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-black/80">
          
          {/* HORNÍ ČÁST - GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* LEVÁ SEKCE - BRAND */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                 <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black shadow-lg shadow-white/10 transition-transform group-hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                 </div>
                 <span className="text-2xl font-bold tracking-tight text-white">
                    Barber <span className="text-neutral-400">Fati</span>
                 </span>
              </Link>

              <p className="text-neutral-400 leading-relaxed mb-8 max-w-sm font-light">
                Moderní holičství, které mění raw data vašich vlasů na čistý, 
                přesvědčivý styl. Přesně tak, jak to máte rádi.
              </p>

              <div className="flex gap-4">
                <SocialIcon href="https://twitter.com" label="X (Twitter)">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </SocialIcon>
                <SocialIcon href="https://instagram.com" label="Instagram">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </SocialIcon>
                <SocialIcon href="https://linkedin.com" label="LinkedIn">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </SocialIcon>
              </div>
            </div>

            {/* PRAVÁ SEKCE - ODKAZY */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-4">
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-white mb-2">Služby</h3>
                    <FooterLink href="/sluzby">Střihy & Holení</FooterLink>
                    <FooterLink href="/cenik">Ceník</FooterLink>
                    <FooterLink href="/rezervace">Online rezervace</FooterLink>
                    <FooterLink href="/poukazy">Dárkové poukazy</FooterLink>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-white mb-2">Informace</h3>
                    <FooterLink href="/o-nas">O nás</FooterLink>
                    <FooterLink href="/galerie">Galerie</FooterLink>
                    <FooterLink href="/blog">Blog</FooterLink>
                    <FooterLink href="/kariera">Kariéra</FooterLink>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-white mb-2">Kontakt</h3>
                    <FooterLink href="/kontakt">Kde nás najdete</FooterLink>
                    <FooterLink href="tel:+420123456789">+420 123 456</FooterLink>
                    <FooterLink href="mailto:info@fati.cz">info@fati.cz</FooterLink>
                    <FooterLink href="/partners">Spolupráce</FooterLink>
                </div>
            </div>
          </div>

          {/* SPODNÍ LINKA */}
          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-500">
            <p>
              &copy; {new Date().getFullYear()} Barber Fati. All rights reserved. Vytvořeno <Link className="text-white/70 hover:text-blue-500" href={"https://www.zavadil.me/"}>zavadil.me</Link>
            </p>
            <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors underline decoration-transparent hover:decoration-white underline-offset-4">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors underline decoration-transparent hover:decoration-white underline-offset-4">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors underline decoration-transparent hover:decoration-white underline-offset-4">Cookies Settings</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

// Odkazy: Jemná šedá, při hoveru bílá
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            {children}
        </Link>
    )
}

// Ikony: Černé (v dark mode bílé) bez pozadí, čisté
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={label}
            className="w-8 h-8 flex items-center justify-center text-white hover:text-neutral-400 transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                {children}
            </svg>
        </a>
    )
}

export default Footer