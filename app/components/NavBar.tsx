'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Detekce scrollu pro zmenšování lišty
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. ZÁKAZ SCROLLOVÁNÍ, když je menu otevřené
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Zablokuje scroll
    } else {
      document.body.style.overflow = 'unset';  // Povolí scroll
    }
    
    // Cleanup funkce (kdyby se komponenta odmontovala)
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        fixed z-50 flex flex-col items-center
        transition-all duration-500 ease-in-out
        /* LOGIKA STYLŮ: */
        ${
          isMobileMenuOpen
            ? 'top-0 left-0 w-full h-screen bg-neutral-950 rounded-none' // Fullscreen stav
            : isScrolled
              ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-full bg-neutral-900/90 backdrop-blur-md border border-white/10 shadow-lg h-auto' // Scrolled stav (pill)
              : 'top-0 left-0 w-full bg-transparent border-transparent h-auto' // Top stav
        }
      `}
    >
      {/* VRCHNÍ LIŠTA (Logo + Hamburger) */}
      <div className={`w-full flex items-center justify-between transition-all duration-300 ${isMobileMenuOpen ? 'px-6 py-6' : 'px-6 py-4'}`}>
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white z-50" onClick={() => setIsMobileMenuOpen(false)}>
          Barber <span className="text-blue-500">Fati</span>
        </Link>

        {/* DESKTOP MENU (Vždy skryté na mobilu) */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/">Domů</NavLink>
          <NavLink href="/sluzby">Služby</NavLink>
          <NavLink href="/galerie">Galerie</NavLink>
          <NavLink href="/kontakt">Kontakt</NavLink>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <button className={`
            px-6 py-2 rounded-full font-bold text-sm transition-all
            ${isScrolled 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-white text-black hover:bg-gray-200'}
          `}>
            Rezervovat
          </button>
        </div>

        {/* MOBILE MENU TOGGLE (Hamburger) */}
        <button 
          className="md:hidden text-white p-2 z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5 w-6 group">
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-full'}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-3/4 group-hover:w-full ml-auto'}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'w-1/2 group-hover:w-full ml-auto'}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE FULLSCREEN OBSAH */}
      <div className={`
        md:hidden flex flex-col items-center justify-center w-full h-full absolute inset-0 bg-neutral-950
        transition-all duration-500 ease-in-out
        ${isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
      `}>
         {/* Dekorace na pozadí menu */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

         <nav className="flex flex-col items-center gap-8 text-center relative z-10">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Domů</MobileNavLink>
            <MobileNavLink href="/sluzby" onClick={() => setIsMobileMenuOpen(false)}>Služby</MobileNavLink>
            <MobileNavLink href="/galerie" onClick={() => setIsMobileMenuOpen(false)}>Galerie</MobileNavLink>
            <MobileNavLink href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</MobileNavLink>
            
            <div className="pt-8">
              <button className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg shadow-blue-600/30">
                Rezervovat termín
              </button>
            </div>
         </nav>
      </div>

    </header>
  );
}

// Komponenty pro odkazy zůstávají stejné, jen MobileNavLink zvětšíme pro lepší efekt
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-gray-300 hover:text-white hover:text-blue-500 transition-colors">
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
      <Link 
        href={href} 
        onClick={onClick}
        className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
      >
        {children}
      </Link>
    );
}