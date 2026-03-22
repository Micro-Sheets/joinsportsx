'use client';

import React from 'react';

export default function SportsXLanding() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center antialiased overflow-x-hidden">
      {/* 1. Protocol Fonts & Appearance Controls */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com');
        body { font-family: 'Rajdhani', sans-serif; margin: 0; background: #050505; }
        .gold-border { border: 1px solid #444; border-image: linear-gradient(to bottom, #7a5416, #111) 1; }
      `}</style>
      
      {/* 2. NAVIGATION BAR - Slim Height (50px) */}
      <nav className="w-full h-[50px] flex items-center justify-between px-10 bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="flex items-center gap-10">
          {/* Nav Logo: Locked to exactly 22px high */}
          <img src="/logo-sportsx.png" alt="SportsX" className="h-[22px] w-auto object-contain" />
          <div className="hidden lg:flex gap-6 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
            <span>Home</span><span>Leagues</span><span>Leaderboards</span><span>FAQ</span>
          </div>
        </div>
        <button className="bg-[#FBB03B] px-5 py-1 text-black font-bold uppercase text-[10px] rounded-sm">Login</button>
      </nav>

      {/* 3. HERO SECTION - Strictly Contained (400px high) */}
      <section className="w-full h-[400px] flex flex-col items-center justify-center text-center px-4 border-b border-orange-900/10">
        {/* HERO LOGO: Locked to 320px wide to prevent distortion */}
        <div className="w-[320px] mb-6">
           <img src="/logo-sportsx.png" alt="Hero Logo" className="w-full h-auto object-contain" />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] mb-2 uppercase leading-none text-zinc-200">
          SPORTSX — THE FIRST MULTI-LEAGUE
        </h1>
        <h2 className="text-lg md:text-xl text-[#F7931E] font-medium tracking-[0.4em] uppercase mb-10 leading-none">
          Sports Performance Exchange
        </h2>
        
        <div className="flex justify-center gap-4">
          <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] px-8 py-3 text-black font-black uppercase text-[11px] rounded-sm shadow-lg">
            Create Free Account
          </button>
          <button className="bg-black/50 border border-zinc-700 px-8 py-3 text-white font-bold uppercase text-[11px] rounded-sm">
            View Live Indexes
          </button>
        </div>
      </section>

      {/* 4. PERFORMANCE BAR - Thin Ticker (36px high) */}
      <div className="w-full h-[36px] bg-[#0a0a0a] border-y border-zinc-900 flex items-center justify-center text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">
        Live Index Performance <span className="text-green-500 ml-6">SX-NBA +18.82%</span> <span className="text-green-500 ml-6">SX-ESPORTS +12.47%</span>
      </div>

      {/* 5. INDEX GRID - Fixed 44px Icons */}
      <div className="w-full max-w-[1000px] grid grid-cols-2 lg:grid-cols-4 gap-4 p-12">
        {['NBA', 'ESPORTS', 'NFL', 'BASEBALL'].map((id) => (
          <div key={id} className="gold-border bg-black/40 p-5 flex items-center justify-center gap-4">
            {/* Index icons are strictly locked to 44px circles */}
            <div className="w-11 h-11 flex-shrink-0">
               <img src={`/index-${id.toLowerCase()}.png`} alt={id} className="w-full h-full object-contain" />
            </div>
            <div className="text-left leading-none">
              <div className="text-xl font-bold tracking-tighter uppercase leading-none">SX-{id}</div>
              <div className="text-[10px] tracking-widest text-zinc-600 uppercase">Index</div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. CATEGORIES - Fixed 48px Icons */}
      <div className="w-full py-16 text-center border-t border-zinc-900">
        <h3 className="text-zinc-400 text-base font-bold uppercase tracking-[0.3em] mb-12">Trade Performance Indexes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-10 max-w-4xl mx-auto">
          {[
            { name: 'Pro Football', img: '/cat-football.png', sub: 'COMING SOON' },
            { name: 'Pro Baseball', img: '/cat-baseball.png', sub: 'COMING SOON' },
            { name: 'Pro Hockey', img: '/cat-hockey.png', sub: 'COMING SOON' },
            { name: 'Global Soccer', img: '/cat-soccer.png', sub: 'FUTURE' }
          ].map((cat) => (
            <div key={cat.name} className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center border border-zinc-800 bg-zinc-950 rounded-lg">
                <img src={cat.img} alt={cat.name} className="w-12 h-12 object-contain" />
              </div>
              <h4 className="text-sm font-bold text-zinc-300">{cat.name}</h4>
              <p className="text-[9px] text-orange-600 font-bold tracking-widest">{cat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FOOTER - Fixed Branding Scale (48px high) */}
      <footer className="w-full py-20 border-t border-zinc-900 bg-black flex flex-col items-center text-center">
        <button className="bg-gradient-to-r from-[#7a5416] via-[#FBB03B] to-[#7a5416] px-24 py-4 text-black font-black text-xl uppercase mb-16 shadow-2xl">
          Get Started
        </button>
        
        <div className="flex items-center gap-6 text-left border border-zinc-900 bg-[#080808] p-5 rounded max-w-sm">
          {/* Branding Logo: Locked to exactly 48px height */}
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

