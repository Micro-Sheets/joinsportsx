'use client';

import React from 'react';

export default function SportsXLanding() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden antialiased flex flex-col items-center">
      {/* 1. Protocol Fonts & Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com');
        body { font-family: 'Rajdhani', sans-serif; margin: 0; }
        .gold-border { border: 1px solid #444; border-image: linear-gradient(to bottom, #7a5416, #111) 1; }
      `}</style>
      
      {/* 2. NAVIGATION - Locked height */}
      <nav className="w-full flex items-center justify-between px-8 py-3 bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <div className="text-2xl font-black italic tracking-tighter text-[#FBB03B]">SPORTSX</div>
          <div className="hidden lg:flex gap-6 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
            <span>Home</span><span>How SportsX Works</span><span>Leaderboards</span><span>Leagues</span>
          </div>
        </div>
        <button className="bg-[#FBB03B] px-6 py-1 text-black font-bold uppercase text-[10px] rounded-sm">Login</button>
      </nav>

      {/* 3. HERO SECTION - Constrained width */}
      <section className="relative w-full h-[550px] flex flex-col items-center justify-center text-center overflow-hidden border-b border-orange-900/20">
        {/* HERO IMAGE: Locked at 600px width so it doesn't fill the screen */}
        <div className="relative z-20 flex flex-col items-center">
          <img src="/hero-background.png" alt="Hero" className="w-full max-w-[650px] h-auto object-contain mb-6 drop-shadow-[0_0_30px_rgba(251,176,59,0.2)]" />
          
          <h2 className="text-xl md:text-2xl text-[#F7931E] font-medium tracking-[0.4em] uppercase mb-8">
            Sports Performance Exchange
          </h2>
          
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] px-8 py-3 text-black font-black uppercase text-xs shadow-[0_0_20px_rgba(212,121,17,0.4)]">
              Create Free Account
            </button>
            <button className="bg-black border border-zinc-700 px-8 py-3 text-white font-bold uppercase text-xs">
              View Live Indexes
            </button>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE TICKER */}
      <div className="w-full bg-black border-y border-zinc-900 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 text-center">
        Live Index Performance <span className="text-green-500 ml-6">SX-NBA +18.82%</span> <span className="text-green-500 ml-6">SX-ESPORTS +12.47%</span>
      </div>

      {/* 5. INDEX GRID - Fixed Card Sizes */}
      <div className="w-full max-w-[1100px] grid grid-cols-2 lg:grid-cols-4 gap-4 p-12">
        {['NBA', 'ESPORTS', 'NFL', 'BASEBALL'].map((id) => (
          <div key={id} className="gold-border bg-black/40 p-4 flex items-center justify-center gap-4">
            {/* Index icons locked to 48px */}
            <img src={`/index-${id.toLowerCase()}.png`} alt={id} className="w-12 h-12 object-contain" />
            <div className="text-left">
              <div className="text-xl font-bold tracking-tighter uppercase leading-none">SX-{id}</div>
              <div className="text-[9px] tracking-widest text-zinc-600 uppercase">Index</div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. FOOTER - Cleaned up company logo */}
      <footer className="w-full py-16 border-t border-zinc-900 bg-black flex flex-col items-center text-center">
        <button className="bg-gradient-to-r from-[#7a5416] via-[#FBB03B] to-[#7a5416] px-16 py-3 text-black font-black text-lg uppercase mb-12 shadow-[0_0_40px_rgba(212,121,17,0.2)]">
          Get Started
        </button>
        
        <div className="flex items-center gap-4 text-left max-w-sm">
          {/* Company logo locked to 60px height to prevent it being huge */}
          <img src="/logo-microsheets.png" alt="Micro-Sheets" className="h-[60px] w-auto object-contain" />
          <div>
            <p className="text-zinc-600 text-[9px] font-bold tracking-widest uppercase mb-0.5">Owned and operated by</p>
            <h5 className="text-zinc-300 text-lg font-bold tracking-tighter italic uppercase leading-tight">The Micro-Sheets™ Company</h5>
          </div>
        </div>
        
        <p className="text-[9px] text-zinc-800 mt-12 uppercase tracking-[0.4em] font-bold">
          © 2026 The Micro-Sheets Company. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
