import React from 'react';

export default function SportsXHomepage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="flex items-center justify-between px-10 py-4 border-b border-zinc-800 bg-black/90 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center gap-8">
          <img src="/logo-sportsx.png" alt="SportsX" className="h-6 object-contain" />
          <div className="hidden xl:flex gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">How SportsX Works</a>
            <a href="#" className="hover:text-white transition">Leaderboards</a>
            <a href="#" className="hover:text-white transition">Leagues</a>
            <a href="#" className="hover:text-white transition">Research</a>
            <a href="#" className="hover:text-white transition">Metrics</a>
            <a href="#" className="hover:text-white transition">FAQ</a>
          </div>
        </div>
        <button className="bg-gradient-to-b from-[#FBB03B] to-[#D47911] px-6 py-1.5 text-black font-black uppercase text-xs rounded-sm">Login</button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[750px] flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-orange-900/20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70 scale-105"
          style={{ backgroundImage: "url('/hero-background.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#050505] z-10"></div>

        <div className="relative z-20 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2 uppercase leading-tight">
            SPORTSX — THE FIRST MULTI-LEAGUE
          </h1>
          <h2 className="text-xl md:text-3xl text-[#F7931E] font-bold tracking-[0.25em] mb-8 uppercase">
            Sports Performance Exchange
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-medium">
            Trade structured performance indexes. Build your sports portfolio. <br/>
            Compete and climb the leaderboards.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] px-10 py-4 text-black font-black uppercase tracking-widest rounded-md hover:scale-105 transition shadow-[0_0_30px_rgba(212,121,17,0.4)]">
              Create Free Account
            </button>
            <button className="bg-black/40 border border-zinc-700 px-10 py-4 text-white font-bold uppercase tracking-widest rounded-md hover:bg-white/5 transition backdrop-blur-sm">
              View Live Indexes
            </button>
          </div>
        </div>
      </section>

      {/* 3. LIVE INDEX SECTION (Uses Index Images) */}
      <div className="border-y border-zinc-800 bg-[#0A0A0A] py-4 text-center uppercase tracking-[0.4em] text-[#F7931E] font-black text-sm">
        Live Index Performance
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-16 max-w-7xl mx-auto">
        {[
          { id: 'NBA', img: '/index-nba.png' },
          { id: 'ESPORTS', img: '/index-esports.png' },
          { id: 'NFL', img: '/index-nfl.png' },
          { id: 'BASEBALL', img: '/index-baseball.png' }
        ].map((item) => (
          <div key={item.id} className="group border border-zinc-800 bg-gradient-to-b from-[#0D0D0D] to-black p-8 rounded-lg text-center hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(247,147,30,0.1)] transition-all">
            <img src={item.img} alt={item.id} className="w-14 h-14 mx-auto mb-4 object-contain" />
            <h3 className="text-xl font-black tracking-tighter uppercase">SX-{item.id}</h3>
            <p className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase font-bold">Index</p>
          </div>
        ))}
      </div>

      {/* 4. TICKER BAR */}
      <div className="bg-black py-2 border-y border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-500 flex justify-center gap-10">
        <span>Live Index Performance</span>
        <span className="text-green-500">SX-NBA +18.82%</span>
        <span className="text-green-500">SX-ESPORTS +12.47%</span>
        <span className="text-red-500">SX-15.80%</span>
      </div>

      {/* 5. TRADE CATEGORIES (Uses Category Images) */}
      <div className="pt-24 pb-12 text-center">
        <h3 className="text-[#F7931E] text-2xl font-black uppercase tracking-[0.25em] mb-3">Trade Performance Indexes</h3>
        <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-medium">SportsX launches with NBA and Elite Esports. We expand league-by-league as the exchange grows.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 px-10 pb-32 max-w-7xl mx-auto">
        {[
          { name: 'Pro Football', img: '/cat-football.png', sub: '(COMING SOON)' },
          { name: 'Pro Baseball', img: '/cat-baseball.png', sub: '(COMING SOON)' },
          { name: 'Pro Hockey', img: '/cat-hockey.png', sub: '(COMING SOON)' },
          { name: 'Global Soccer', img: '/cat-soccer.png', sub: '(FUTURE)' }
        ].map((cat) => (
          <div key={cat.name} className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 mb-6 flex items-center justify-center bg-zinc-900/10 rounded-full border border-zinc-800 group-hover:border-orange-500/20 transition-all duration-500">
                <img src={cat.img} alt={cat.name} className="w-20 h-20 object-contain group-hover:scale-110 transition duration-500" />
            </div>
            <h4 className="text-lg font-bold text-zinc-100">{cat.name}</h4>
            <p className="text-[10px] text-orange-400 font-black tracking-widest">{cat.sub}</p>
          </div>
        ))}
      </div>

      {/* 6. FOOTER */}
      <footer className="py-24 border-t border-zinc-900 flex flex-col items-center gap-10 bg-black text-center">
        <div className="uppercase tracking-[0.2em] font-black text-zinc-400 text-xs">Join the exchange, build your portfolio, climb the rankings.</div>
        <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] px-24 py-5 text-black font-black text-xl uppercase rounded-sm shadow-[0_0_40px_rgba(212,121,17,0.3)]">
          Get Started
        </button>
        
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-loose max-w-xl px-6 pt-10">
          SportsX is a subscription based virtual performance analytics platform. <br/>
          No real money wagering or gambling occurs on this platform.
        </p>

        <div className="flex items-center mt-10 gap-5">
          <img src="/logo-microsheets.png" alt="Micro-Sheets" className="h-10 opacity-90" />
          <div className="text-left leading-tight">
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Owned and operated by</p>
            <h5 className="text-zinc-200 text-base font-black italic tracking-tighter uppercase">The Micro-Sheets™ Company</h5>
          </div>
        </div>
      </footer>
    </main>
  );
}
