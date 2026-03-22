'use client';

import React from 'react';

export default function SportsXLanding() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 overflow-x-hidden antialiased">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com');
        body { font-family: 'Rajdhani', sans-serif; margin: 0; padding: 0; }
        .gold-border { border: 1px solid; border-image: linear-gradient(to bottom, #7a5416, #222) 1; }
      `}</style>
      
      {/* 1. NAVIGATION BAR */}
      <nav className="flex items-center justify-between px-6 py-2 bg-black border-b border-[#333]">
        <div className="flex items-center gap-6">
          <img src="/logo-sportsx.png" alt="SportsX" className="h-5 w-auto" />
          <div className="hidden lg:flex gap-4 text-[10px] uppercase tracking-widest font-semibold text-zinc-400">
            <span className="cursor-pointer hover:text-white transition">Home</span>
            <span className="cursor-pointer hover:text-white transition">How SportsX Works</span>
            <span className="cursor-pointer hover:text-white transition">Leaderboards</span>
            <span className="cursor-pointer hover:text-white transition">Leagues</span>
            <span className="cursor-pointer hover:text-white transition">Research</span>
            <span className="cursor-pointer hover:text-white transition">Metrics</span>
            <span className="cursor-pointer hover:text-white transition">FAQ</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-orange-500 rounded-full border border-yellow-200"></div>
          <button className="bg-gradient-to-b from-[#FBB03B] to-[#965a00] px-4 py-0.5 text-black font-bold uppercase text-[10px] rounded-sm">Login</button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[550px] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505] z-10"></div>

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest mb-1 uppercase">SPORTSX — THE FIRST MULTI-LEAGUE</h1>
          <h2 className="text-xl md:text-2xl text-zinc-300 font-medium tracking-[0.4em] mb-4 uppercase">Sports Performance Exchange</h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-6 tracking-wide italic font-semibold">
            Trade structured performance indexes. <br/> Build your sports portfolio. <br/> Compete and climb the leaderboards.
          </p>
          <div className="flex justify-center gap-3">
            <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] border border-orange-200/30 px-6 py-2 text-black font-bold uppercase tracking-wider text-xs">Create Free Account</button>
            <button className="bg-black/80 border border-zinc-700 px-6 py-2 text-white font-bold uppercase tracking-wider text-xs">View Live Indexes</button>
          </div>
        </div>
      </section>

      {/* 3. INDEX SECTION */}
      <div className="border-y border-orange-900/40 bg-zinc-950 py-3 text-center uppercase tracking-[0.3em] text-zinc-300 font-bold text-xs">Live Index Performance</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 max-w-5xl mx-auto">
        {['NBA', 'ESPORTS', 'NFL', 'BASEBALL'].map((id) => (
          <div key={id} className="gold-border bg-black/60 p-4 flex items-center justify-center gap-4">
            <img src={`/index-${id.toLowerCase()}.png`} alt={id} className="h-10 w-10 object-contain" />
            <div className="text-left leading-none">
              <div className="text-xl font-bold tracking-tighter">SX-{id}</div>
              <div className="text-[9px] tracking-widest text-zinc-500 uppercase">Index</div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. TICKER */}
      <div className="bg-black py-1.5 border-y border-zinc-900 text-[9px] font-bold uppercase tracking-widest text-zinc-400 flex justify-center gap-8">
        <span className="opacity-50">Live Index Performance</span>
        <span className="text-green-500 italic">SX-NBA +18.82%</span>
        <span className="text-green-500 italic">SX-ESPORTS +12.47%</span>
        <span className="text-red-500 italic">SX-15.80%</span>
      </div>

      {/* 5. CATEGORIES SECTION */}
      <div className="py-12 text-center">
        <h3 className="text-zinc-300 text-lg font-bold uppercase tracking-[0.3em] mb-1">Trade Performance Indexes</h3>
        <p className="text-zinc-500 text-[11px] mb-8 font-semibold italic">SportsX launches with NBA and Elite Esports. We expand league-by-league as the exchange grows.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 max-w-5xl mx-auto">
          {[
            { name: 'Pro Football', img: '/cat-football.png', sub: '(COMING SOON)' },
            { name: 'Pro Baseball', img: '/cat-baseball.png', sub: '(COMING SOON)' },
            { name: 'Pro Hockey', img: '/cat-hockey.png', sub: '(COMING SOON)' },
            { name: 'Global Soccer', img: '/cat-soccer.png', sub: '(FUTURE)' }
          ].map((cat) => (
            <div key={cat.name} className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 flex items-center justify-center border border-orange-900/30 bg-zinc-950 rounded-lg">
                <img src={cat.img} alt={cat.name} className="h-12 w-12 object-contain" />
              </div>
              <h4 className="text-sm font-bold text-orange-200/80">{cat.name}</h4>
              <p className="text-[8px] text-orange-600 font-bold tracking-tighter">{cat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. JOIN & FOOTER */}
      <div className="py-12 border-t border-zinc-900 flex flex-col items-center text-center bg-[#050505]">
        <button className="bg-gradient-to-r from-[#7a5416] via-[#FBB03B] to-[#7a5416] border border-orange-200/20 px-24 py-3 text-black font-black text-lg uppercase">Get Started</button>
        <div className="flex items-center mt-12 gap-3 text-left">
          <img src="/logo-microsheets.png" alt="Micro-Sheets" className="h-8 w-auto" />
          <div>
            <p className="text-zinc-600 text-[9px] font-bold tracking-widest uppercase">Owned and operated by</p>
            <h5 className="text-zinc-300 text-lg font-bold tracking-tighter italic uppercase">The Micro-Sheets™ Company</h5>
          </div>
        </div>
      </div>
    </main>
  );
}
