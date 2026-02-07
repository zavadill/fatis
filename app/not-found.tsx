import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative bg-neutral-950 min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. DEKORATIVNÍ POZADÍ */}
      {/* Modrá záře */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* 2. OBŘÍ ČÍSLO 404 (Vodoznak) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="text-[35vw] font-black text-neutral-900 leading-none tracking-tighter opacity-50 block">
          404
        </span>
      </div>

      {/* 3. HLAVNÍ OBSAH */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-neutral-400 text-sm font-medium">Chyba</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Tuhle stránku jsme asi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            omylem oholili
          </span>
        </h1>
        
        <p className="text-neutral-400 text-lg sm:text-xl font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Omlouváme se, ale odkaz, který hledáte, už neexistuje. 
          Možná byl přesunut, nebo jste se jen upsali v adrese.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
                <button className="px-10 py-4 bg-white text-neutral-950 hover:bg-blue-600 hover:text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-xl shadow-white/5">
                    Zpět na úvod
                </button>
            </Link>
            
            <Link href="/kontakt">
                <button className="px-10 py-4 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white font-medium text-lg rounded-full transition-all bg-neutral-900/50 backdrop-blur-md">
                    Nahlásit problém
                </button>
            </Link>
        </div>

      </div>
    </main>
  );
}