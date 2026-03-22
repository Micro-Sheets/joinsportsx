'use client';

import React from 'react';

export default function SportsXLanding() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-10">
      
      {/* THIS IS THE CONTAINER THAT CONTROLS THE SIZE */}
      <div className="w-full max-w-[500px] flex flex-col items-center">
        
        {/* LOGO IMAGE - Height and Width are now restricted */}
        <img 
          src="/hero-background.png" 
          alt="SportsX Logo" 
          className="w-full h-auto object-contain mb-8 shadow-[0_0_50px_rgba(251,147,30,0.2)]"
        />

        {/* BUTTONS - Sized to match the logo width */}
        <div className="flex flex-col w-full gap-4">
          <button className="bg-gradient-to-r from-[#D47911] to-[#FBB03B] py-4 text-black font-black uppercase tracking-widest rounded-md hover:scale-105 transition shadow-[0_0_20px_rgba(212,121,17,0.4)]">
            Create Free Account
          </button>
          <button className="bg-black/40 border border-zinc-700 py-4 text-white font-bold uppercase tracking-widest rounded-md hover:bg-white/5 transition backdrop-blur-sm">
            View Live Indexes
          </button>
        </div>

        {/* FOOTER LOGO */}
        <div className="mt-20 flex items-center gap-3 opacity-60">
           <img src="/logo-microsheets.png" alt="Micro-Sheets" className="h-8 w-auto" />
           <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-tighter italic">The Micro-Sheets™ Company</p>
        </div>
      </div>

    </main>
  );
}
