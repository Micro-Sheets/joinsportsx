'use client';

import React from 'react';

export default function SportsXLanding() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 overflow-x-hidden antialiased">
      {/* 1. Protocol Typography & Appearance */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com');
        body { font-family: 'Rajdhani', sans-serif; margin: 0; padding: 0; }
        .gold-border { border: 1px solid; border-image: linear-gradient(to bottom, #7a5416, #111) 1; }
      `}</style>
      
      {/* 2. NAVIGATION BAR - Slim Height Protocol */}
      <nav className="w-full flex items-center justify-between px-10 py-3 bg-black border-b border-[#333] sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <img src="/logo-sportsx.png" alt="SportsX" className="h-6 w-auto object-contain" />
          <div className="hidden lg:flex gap-6 text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400">
            <span className="hover:text-white cursor-pointer transition">Home</span>
            <span className="hover:text-white cursor-pointer transition">Leaderboards</span>
            <span className="hover:text-white cursor-pointer transition">Leagues</span>
          </div>
        </div>
        <button className="bg-gradient-to-b from-[#FBB03B] to-[#965a00] px-6 py-1 text-black font-bold uppercase text-xs rounded-sm">Login</button>
      </nav>

      {/* 3. HERO SECTION - Scaled Logo Protocol */}
      <section className="relative w-full h-[600px] flex flex-col items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105" 
          style={{ backgroundImage: "url('/hero-background.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050505] z-10"></div>

        <div className="relative z-20 max-w-5xl flex flex-col items-center">
          {/* Hero Logo locked to 70px Height */}
          <img src="/logo-sportsx.png" alt="SportsX Main" className="h-[70px] w-auto mb-8 drop-shadow-[0_0_20px_rgba(251,176,59,0.3)]" />
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-2 uppercase leading-tight">
            SPORTSX — THE FIRST MULTI-LEAGUE
          </h1>
          <h2 className="text-xl md:text-2xl text-[#F7931E] font-medium tracking-[0.4em] mb-10 uppercase">
            Sports Performance Exchange
          </h2>
          
          <div className="flex justify-center gap-5">
            <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] px-12 py-4 text-black font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,121,17,0.5)]">
              Create Free Account
            </button>
            <button className="bg-black/80 border border-zinc-700 px-12 py-4 text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition">
              View Live Indexes
            </button>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE TICKER */}
      <div className="w-full border-y border-orange-900/40 bg-zinc-950 py-3 text-center uppercase tracking-[0.4em] text-zinc-300 font-bold text-xs">
        Live Index Performance <span className="text-green-500 ml-8 italic">SX-NBA +18.82%</span> <span className="text-green-500 ml-8 italic">SX-ESPORTS +12.47%</span>
      </div>

      {/* 5. INDEX GRID - Top Row (Fixed 48px Icons) */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 p-16">
        {['NBA', 'ESPORTS', 'NFL', 'BASEBALL'].map((id) => (
          <div key={id} className="gold-border bg-[#0a0a0a] p-8 flex items-center justify-center gap-5 hover:border-orange-500 transition-all cursor-pointer">
            <img src={`/index-${id.toLowerCase()}.png`} alt={id} className="h-12 w-12 object-contain" />
            <div className="text-left leading-none">
              <div className="text-2xl font-bold tracking-tighter uppercase leading-none">SX-{id}</div>
              <div className="text-[10px] tracking-widest text-zinc-600 uppercase">Index</div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. CATEGORIES SECTION - Bottom Row (Fixed 56px Icons) */}
      <div className="py-20 text-center border-t border-zinc-900">
        <h3 className="text-[#FBB03B] text-lg font-bold uppercase tracking-[0.3em] mb-12">Trade Performance Indexes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-10 max-w-5xl mx-auto">
          {[
            { name: 'Pro Football', img: '/cat-football.png', sub: 'COMING SOON' },
            { name: 'Pro Baseball', img: '/cat-baseball.png', sub: 'COMING SOON' },
            { name: 'Pro Hockey', img: '/cat-hockey.png', sub: 'COMING SOON' },
            { name: 'Global Soccer', img: '/cat-soccer.png', sub: 'FUTURE' }
          ].map((cat) => (
            <div key={cat.name} className="flex flex-col items-center group cursor-default">
              <div className="w-20 h-20 mb-4 flex items-center justify-center border border-zinc-800 bg-zinc-950 rounded-lg group-hover:border-orange-900 transition duration-500">
                <img src={cat.img} alt={cat.name} className="h-14 w-14 object-contain grayscale group-hover:grayscale-0 transition duration-500" />
              </div>
              <h4 className="text-sm font-bold text-zinc-300">{cat.name}</h4>
              <p className="text-[9px] text-orange-600 font-bold tracking-widest">{cat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FOOTER - Smaller Micro-Sheets Logo (Locked to 64px Height) */}
      <footer className="w-full py-24 border-t border-zinc-900 flex flex-col items-center text-center bg-black">
        <button className="bg-gradient-to-r from-[#7a5416] via-[#FBB03B] to-[#7a5416] px-24 py-5 text-black font-black text-xl uppercase mb-16 shadow-[0_0_40px_rgba(212,121,17,0.3)] transition hover:scale-105">
          Get Started
        </button>
        
        <div className="flex items-center gap-6 text-left border border-zinc-900 bg-[#050505] p-6 rounded-md">
          {/* Micro-Sheets Logo locked to 64px Height */}
          <img src="/logo-microsheets.png" alt="Micro-Sheets" className="h-16 w-auto object-contain" />
          <div>
            <p className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase mb-1 leading-none">Owned and operated by</p>
            <h5 className="text-zinc-300 text-2xl font-bold tracking-tighter italic uppercase leading-none">The Micro-Sheets™ Company</h5>
          </div>
        </div>

        <p className="text-[10px] text-zinc-800 mt-20 uppercase tracking-[0.4em] font-bold">
          © 2026 The Micro-Sheets Company. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}

