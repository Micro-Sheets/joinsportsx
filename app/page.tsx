'use client';

import React from 'react';

export default function SportsXLanding() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 overflow-x-hidden antialiased">
      {/* 1. Technical Typography Protocol */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com');
        body { font-family: 'Rajdhani', sans-serif; margin: 0; padding: 0; }
        .gold-border { border: 1px solid; border-image: linear-gradient(to bottom, #7a5416, #222) 1; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
      
      {/* 2. NAVIGATION BAR - Full Width sticky menu */}
      <nav className="w-full flex items-center justify-between px-8 py-3 bg-black border-b border-[#333] sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <img src="/logo-sportsx.png" alt="SportsX" className="h-6 w-auto object-contain" />
          <div className="hidden lg:flex gap-6 text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400">
            <span className="hover:text-white cursor-pointer transition">Home</span>
            <span className="hover:text-white cursor-pointer transition">How SportsX Works</span>
            <span className="hover:text-white cursor-pointer transition">Leaderboards</span>
            <span className="hover:text-white cursor-pointer transition">Leagues</span>
          </div>
        </div>
        <button className="bg-gradient-to-b from-[#FBB03B] to-[#965a00] px-6 py-1 text-black font-bold uppercase text-xs rounded-sm">Login</button>
      </nav>

      {/* 3. HERO SECTION - Full Browser Height & Width */}
      <section className="relative w-full h-[650px] flex flex-col items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105" 
          style={{ backgroundImage: "url('/hero-background.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505] z-10"></div>

        <div className="relative z-20 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest mb-2 uppercase leading-tight">
            SPORTSX — THE FIRST MULTI-LEAGUE
          </h1>
          <h2 className="text-xl md:text-3xl text-[#F7931E] font-medium tracking-[0.4em] mb-10 uppercase">
            Sports Performance Exchange
          </h2>
          <div className="flex justify-center gap-5">
            <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] px-12 py-4 text-black font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,121,17,0.5)] transition hover:scale-105">
              Create Free Account
            </button>
            <button className="bg-black/80 border border-zinc-700 px-12 py-4 text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition">
              View Live Indexes
            </button>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE TICKER */}
      <div className="w-full border-y border-orange-900/40 bg-black py-2.5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee uppercase tracking-[0.3em] font-bold text-[10px] text-zinc-400">
           <span>Live Index Performance</span>
           <span className="text-green-500">SX-NBA +18.82%</span>
           <span className="text-green-500">SX-ESPORTS +12.47%</span>
           <span className="text-red-500">SX-NFL -15.80%</span>
           {/* Duplicate for loop */}
           <span>Live Index Performance</span>
           <span className="text-green-500">SX-NBA +18.82%</span>
        </div>
      </div>

      {/* 5. INDEX GRID - Centered in a wide container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 p-16">
        {['NBA', 'ESPORTS', 'NFL', 'BASEBALL'].map((id) => (
          <div key={id} className="gold-border bg-[#0a0a0a] p-8 flex items-center justify-center gap-5 hover:border-orange-500/50 transition-all cursor-pointer">
            <img src={`/index-${id.toLowerCase()}.png`} alt={id} className="h-12 w-12 object-contain" />
            <div className="text-left leading-none">
              <div className="text-2xl font-bold tracking-tighter">SX-{id}</div>
              <div className="text-[10px] tracking-widest text-zinc-600 uppercase">Index</div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. FOOTER - Correct Branding Proportions */}
      <footer className="w-full py-24 border-t border-zinc-900 flex flex-col items-center text-center bg-black">
        <button className="bg-gradient-to-r from-[#7a5416] via-[#FBB03B] to-[#7a5416] px-24 py-5 text-black font-black text-xl uppercase mb-16 shadow-[0_0_40px_rgba(212,121,17,0.3)] hover:scale-105 transition">
          Get Started
        </button>
        
        {/* Corrected Micro-Sheets Company Layout */}
        <div className="flex items-center gap-6 text-left border border-zinc-900 bg-[#050505] p-6 rounded-lg">
          <img src="/logo-microsheets.png" alt="Micro-Sheets" className="h-16 w-auto object-contain" />
          <div>
            <p className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase mb-1">Owned and operated by</p>
            <h5 className="text-zinc-300 text-2xl font-bold tracking-tighter italic uppercase">The Micro-Sheets™ Company</h5>
          </div>
        </div>

        <p className="text-[10px] text-zinc-800 mt-20 uppercase tracking-[0.4em] font-bold">
          © 2026 The Micro-Sheets Company. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
