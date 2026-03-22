'use client';

import React from 'react';

export default function SportsXLanding() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center antialiased overflow-x-hidden">
      {/* 1. Typography and Global Borders */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com');
        body { font-family: 'Rajdhani', sans-serif; margin: 0; background: #050505; }
        .gold-border { border: 1px solid #444; border-image: linear-gradient(to bottom, #7a5416, #111) 1; }
      `}</style>
      
      {/* 2. NAVIGATION BAR - Slim and Fixed */}
      <nav className="w-full h-[50px] flex items-center justify-between px-10 bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="text-xl font-black italic tracking-tighter text-[#FBB03B]">SPORTSX</div>
          <div className="hidden lg:flex gap-6 text-[9px] uppercase tracking-widest font-bold text-zinc-500">
            <span>Home</span><span>Leagues</span><span>Leaderboards</span><span>Research</span>
          </div>
        </div>
        <button className="bg-[#FBB03B] px-4 py-1 text-black font-bold uppercase text-[9px] rounded-sm">Login</button>
      </nav>

      {/* 3. HERO SECTION - Strictly Contained */}
      <section className="w-full h-[450px] flex flex-col items-center justify-center text-center px-4 border-b border-orange-900/10">
        <div className="w-full max-w-[420px]"> {/* This 'cage' prevents the hero logo from being too large */}
          <img src="/hero-background.png" alt="SportsX" className="w-full h-auto object-contain mb-4" />
          
          <h2 className="text-lg md:text-xl text-[#F7931E] font-medium tracking-[0.4em] uppercase mb-8 leading-none">
            Sports Performance Exchange
          </h2>
          
          <div className="flex justify-center gap-3">
            <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] px-8 py-3 text-black font-black uppercase text-[10px] shadow-lg">
              Create Free Account
            </button>
            <button className="bg-black/80 border border-zinc-700 px-8 py-3 text-white font-bold uppercase text-[10px]">
              View Live Indexes
            </button>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE BAR - Thin Ticker */}
      <div className="w-full h-[36px] bg-[#0a0a0a] border-y border-zinc-900 flex items-center justify-center text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">
        Live Index Performance <span className="text-green-500 ml-6">SX-NBA +18.82%</span> <span className="text-green-500 ml-6">SX-ESPORTS +12.47%</span>
      </div>

      {/* 5. INDEX GRID - Fixed 40px Icons */}
      <div className="w-full max-w-[1000px] grid grid-cols-2 lg:grid-cols-4 gap-4 p-10">
        {['NBA', 'ESPORTS', 'NFL', 'BASEBALL'].map((id) => (
          <div key={id} className="gold-border bg-black/60 p-4 flex items-center justify-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
               <img src={`/index-${id.toLowerCase()}.png`} alt={id} className="w-full h-full object-contain" />
            </div>
            <div className="text-left leading-none">
              <div className="text-lg font-bold tracking-tighter uppercase">SX-{id}</div>
              <div className="text-[8px] tracking-widest text-zinc-600 uppercase">Index</div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. CATEGORIES - Fixed 48px Icons */}
      <div className="w-full py-12 text-center border-t border-zinc-900">
        <h3 className="text-zinc-400 text-base font-bold uppercase tracking-[0.3em] mb-10">Trade Performance Indexes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 max-w-4xl mx-auto">
          {[
            { name: 'Pro Football', img: '/cat-football.png', sub: 'COMING SOON' },
            { name: 'Pro Baseball', img: '/cat-baseball.png', sub: 'COMING SOON' },
            { name: 'Pro Hockey', img: '/cat-hockey.png', sub: 'COMING SOON' },
            { name: 'Global Soccer', img: '/cat-soccer.png', sub: 'FUTURE' }
          ].map((cat) => (
            <div key={cat.name} className="flex flex-col items-center">
              <div className="w-14 h-14 mb-3 flex items-center justify-center border border-zinc-800 bg-zinc-950 rounded-lg">
                <img src={cat.img} alt={cat.name} className="w-10 h-10 object-contain" />
              </div>
              <h4 className="text-xs font-bold text-zinc-400">{cat.name}</h4>
              <p className="text-[7px] text-orange-600 font-bold tracking-widest">{cat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FOOTER - Fixed 40px Branding */}
      <footer className="w-full py-16 border-t border-zinc-900 bg-black flex flex-col items-center text-center">
        <button className="bg-gradient-to-r from-[#7a5416] via-[#FBB03B] to-[#7a5416] px-20 py-4 text-black font-black text-lg uppercase mb-12 shadow-2xl">
          Get Started
        </button>
        
        <div className="flex items-center gap-4 text-left border border-zinc-900 bg-[#080808] p-4 rounded max-w-[320px]">
          {/* Logo Size Force-Constraint */}
          <div className="h-10 w-10 flex-shrink-0 bg-white p-1 rounded-sm"> 
             <img src="/logo-microsheets.png" alt="Micro-Sheets" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-zinc-600 text-[8px] font-bold tracking-widest uppercase leading-none mb-1">Operated by</p>
            <h5 className="text-zinc-300 text-lg font-bold tracking-tighter italic uppercase leading-none">The Micro-Sheets™ Company</h5>
          </div>
        </div>
      </footer>
    </main>
  );
}


