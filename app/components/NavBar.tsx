'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Detekce scrollu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. NOVÉ: Blokování scrollování stránky, když je menu otevřené
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed z-50 flex flex-col items-center px-6 py-4
          transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              /* KDYŽ JE MENU OTEVŘENÉ:
                 - h-[100dvh]: Dynamická výška pro mobily (řeší iPhone lišty)
                 - top-0 left-0 w-full: Roztáhne se přes celou obrazovku
                 - bg-neutral-950: Černé neprůhledné pozadí
                 - rounded-none: Zruší zakulacení rohů
              */
              ? 'top-0 left-0 w-full h-[100dvh] max-w-none rounded-none bg-neutral-950 border-none items-center justify-start'
              
              /* KDYŽ JE ZAVŘENÉ (tvůj původní styl): */
              : isScrolled
                ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-[2rem] bg-neutral-900/90 backdrop-blur-md border border-white/10 shadow-lg'
                : 'top-0 left-1/2 -translate-x-1/2 w-full bg-transparent border-transparent'
          }
        `}
      >
        <div className="w-full flex items-center justify-between shrink-0">
            {/* LOGO */}
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white z-50" onClick={() => setIsMobileMenuOpen(false)}>
            Barber <span className="text-blue-500">Fati</span>
            </Link>

            {/* DESKTOP MENU (Skryté na mobilu) */}
            <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Domů</NavLink>
            <NavLink href="/sluzby">Služby</NavLink>
            <NavLink href="/galerie">Galerie</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
            </nav>

            {/* CTA BUTTON (Desktop) */}
            <div className="hidden md:block">
            <Link href={"https://barbershop-fati.reservio.com/"} className={`
                px-6 py-2 rounded-full font-bold text-sm transition-all
                ${isScrolled 
                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                : 'bg-white text-black hover:bg-gray-200'}
            `}>
                Rezervovat
            </Link>
            </div>

            {/* MOBILE MENU TOGGLE (Hamburger) */}
            <button 
                className="md:hidden text-white p-2 z-50 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            <div className="space-y-1.5 w-6">
                {/* Horní čára / Část křížku */}
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                {/* Střední čára / Zmizí */}
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                {/* Spodní čára / Část křížku */}
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
            </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {/* Zobrazí se jen když je isOpen true */}
        <div className={`
            md:hidden w-full overflow-hidden transition-all duration-500 ease-in-out flex flex-col justify-center
            ${isMobileMenuOpen ? 'max-h-screen opacity-100 h-full' : 'max-h-0 opacity-0'}
        `}>
            {/* Přidal jsem flex-col justify-center do rodiče i sem, aby byly odkazy svisle uprostřed obrazovky */}
            <nav className="flex flex-col items-center gap-8 text-center -mt-20">
                <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Domů</MobileNavLink>
                <MobileNavLink href="/sluzby" onClick={() => setIsMobileMenuOpen(false)}>Služby</MobileNavLink>
                <MobileNavLink href="/galerie" onClick={() => setIsMobileMenuOpen(false)}>Galerie</MobileNavLink>
                <MobileNavLink href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</MobileNavLink>
                
                <div className="pt-4">
                  <button className="w-full px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full transition-all shadow-lg shadow-blue-500/20">
                      Rezervovat termín
                  </button>
                </div>
            </nav>
        </div>
      </header>
    </>
  );
}

// Komponenta pro Desktop odkazy
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-gray-300 hover:text-white hover:text-blue-500 transition-colors"
    >
      {children}
    </Link>
  );
}

// Komponenta pro Mobilní odkazy
function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
      <Link 
        href={href} 
        onClick={onClick}
        className="text-2xl font-bold text-white hover:text-blue-500 transition-colors block w-full py-2"
      >
        {children}
      </Link>
    );
  }