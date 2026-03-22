'use client';

import React from 'react';

export default function SportsXLanding() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 flex flex-col items-center antialiased">
      {/* 1. Protocol Fonts & Appearance Controls */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com');
        body { font-family: 'Rajdhani', sans-serif; margin: 0; background: #050505; }
        .gold-border { border: 1px solid #444; border-image: linear-gradient(to bottom, #7a5416, #111) 1; }
      `}</style>
      
      {/* 2. NAVIGATION - Fixed height (56px) */}
      <nav className="w-full h-[56px] flex items-center justify-between px-10 bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <div className="text-2xl font-black italic tracking-tighter text-[#FBB03B]">SPORTSX</div>
          <div className="hidden lg:flex gap-6 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
            <span>Home</span><span>Leagues</span><span>Leaderboards</span><span>Research</span>
          </div>
        </div>
        <button className="bg-[#FBB03B] px-5 py-1 text-black font-bold uppercase text-[10px] rounded-sm hover:brightness-110 transition">Login</button>
      </nav>

      {/* 3. HERO SECTION - Logo locked to 380px wide */}
      <section className="relative w-full h-[550px] flex flex-col items-center justify-center text-center px-6">
        <div className="relative z-20 flex flex-col items-center">
          {/* HARD LIMIT: Hero logo cannot exceed 380px */}
          <div className="w-[380px] mb-4">
             <img src="/hero-background.png" alt="Hero" className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(251,147,30,0.2)]" />
          </div>
          
          <h2 className="text-xl md:text-2xl text-[#F7931E] font-medium tracking-[0.4em] uppercase mb-10 leading-none">
            Sports Performance Exchange
          </h2>
          
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] px-10 py-3.5 text-black font-black uppercase text-xs shadow-lg transform hover:scale-105 transition">
              Create Free Account
            </button>
            <button className="bg-black/50 border border-zinc-700 px-10 py-3.5 text-white font-bold uppercase text-xs hover:bg-zinc-900 transition">
              View Live Indexes
            </button>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE BAR - 40px High */}
      <div className="w-full h-[40px] bg-[#0a0a0a] border-y border-zinc-900 flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
        Live Index Performance <span className="text-green-500 ml-6">SX-NBA +18.82%</span> <span className="text-green-500 ml-6">SX-ESPORTS +12.47%</span>
      </div>

      {/* 5. INDEX GRID - Icons locked to 44px */}
      <div className="w-full max-w-[1100px] grid grid-cols-2 lg:grid-cols-4 gap-5 p-12">
        {['NBA', 'ESPORTS', 'NFL', 'BASEBALL'].map((id) => (
          <div key={id} className="gold-border bg-black/60 p-6 flex items-center justify-center gap-4 hover:border-orange-500/50 transition-all cursor-pointer">
            {/* HARD LIMIT: Index balls are exactly 44px */}
            <div className="w-[44px] h-[44px] flex-shrink-0">
               <img src={`/index-${id.toLowerCase()}.png`} alt={id} className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold tracking-tighter uppercase leading-none">SX-{id}</div>
              <div className="text-[10px] tracking-widest text-zinc-600 uppercase">Index</div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. CATEGORIES - Icons locked to 50px */}
      <div className="w-full py-16 text-center border-t border-zinc-900">
        <h3 className="text-zinc-300 text-lg font-bold uppercase tracking-[0.3em] mb-12">Trade Performance Indexes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-10 max-w-5xl mx-auto">
          {[
            { name: 'Pro Football', img: '/cat-football.png', sub: 'COMING SOON' },
            { name: 'Pro Baseball', img: '/cat-baseball.png', sub: 'COMING SOON' },
            { name: 'Pro Hockey', img: '/cat-hockey.png', sub: 'COMING SOON' },
            { name: 'Global Soccer', img: '/cat-soccer.png', sub: 'FUTURE' }
          ].map((cat) => (
            <div key={cat.name} className="flex flex-col items-center group">
              {/* HARD LIMIT: Category icons are exactly 50px */}
              <div className="w-[80px] h-[80px] mb-4 flex items-center justify-center border border-zinc-800 bg-zinc-950 rounded-lg group-hover:border-orange-900 transition">
                <img src={cat.img} alt={cat.name} className="w-[50px] h-[50px] object-contain transition duration-500" />
              </div>
              <h4 className="text-sm font-bold text-zinc-300">{cat.name}</h4>
              <p className="text-[9px] text-orange-600 font-bold tracking-widest">{cat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FOOTER - Micro-Sheets Logo locked to 48px height */}
      <footer className="w-full py-20 border-t border-zinc-900 bg-black flex flex-col items-center text-center">
        <button className="bg-gradient-to-r from-[#7a5416] via-[#FBB03B] to-[#7a5416] px-24 py-5 text-black font-black text-xl uppercase mb-16 shadow-2xl transition hover:scale-105">
          Get Started
        </button>
        
        <div className="flex items-center gap-6 text-left border border-zinc-900 bg-[#050505] p-6 rounded max-w-sm">
          {/* HARD LIMIT: Footer logo is exactly 48px high */}
          <div className="h-[48px] w-auto">
             <img src="/logo-microsheets.png" alt="Micro-Sheets" className="h-full w-auto object-contain" />
          </div>
          <div>
            <p className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase mb-1">Owned and operated by</p>
            <h5 className="text-zinc-300 text-2xl font-bold tracking-tighter italic uppercase leading-none">The Micro-Sheets™ Company</h5>
          </div>
        </div>
      </footer>
    </main>
  );
}
