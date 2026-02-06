'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokud sjedeme o více než 20px, změníme stav
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-4
        transition-all duration-1000 ease-in-out
        ${
          isScrolled
            ? 'top-4 w-[95%] max-w-6xl rounded-full bg-neutral-900/90 backdrop-blur-md border border-white/10 shadow-lg'
            : 'top-0 w-full bg-transparent border-transparent'
        }
      `}
    >
      {/* LOGO */}
      <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
        Barber <span className="text-blue-500">Fati</span>
      </Link>

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex items-center gap-8">
        <NavLink href="/">Domů</NavLink>
        <NavLink href="/sluzby">Služby</NavLink>
        <NavLink href="/galerie">Galerie</NavLink>
        <NavLink href="/kontakt">Kontakt</NavLink>
      </nav>

      {/* CTA BUTTON */}
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

      {/* MOBILE MENU ICON (Hamburger) */}
      <button className="md:hidden text-white p-2">
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>
    </header>
  );
}

// Pomocná komponenta pro odkazy
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