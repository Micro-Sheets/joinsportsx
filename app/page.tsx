import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
            SPORTSX – THE FIRST MULTI-LEAGUE SPORTS PERFORMANCE EXCHANGE
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Track, trade, and build your portfolio. Compete and climb the rankings.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              CREATE FREE ACCOUNT
            </button>
            <button className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700">
              VIEW LIVE INDEXES
            </button>
          </div>
        </div>

        {/* Live Indexes Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold">LIVE INDEX PERFORMANCE</h2>
          <div className="flex justify-center gap-6 mt-8">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg">SX-NBA INDEX</button>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg">SX-ESPORTS INDEX</button>
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg">SX-NFL INDEX</button>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg">SX-BASEBALL INDEX</button>
          </div>
        </div>

        {/* Performance Indexes Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold">TRADE PERFORMANCE INDEXES</h2>
          <p className="mt-6">SportsX launches with NBA and Elite Esports.</p>
          <p className="mt-2">We expand league-by-league as the exchange grows.</p>

          <div className="flex justify-center gap-8 mt-8">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">Pro Football (COMING SOON)</button>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg">Pro Baseball (COMING SOON)</button>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg">Pro Hockey (COMING SOON)</button>
            <button className="px-6 py-3 bg-purple-500 text-white rounded-lg">Global Soccer (Future)</button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold">JOIN THE EXCHANGE, BUILD YOUR PORTFOLIO, CLIMB THE RANKINGS.</h3>
          <button className="px-8 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 mt-4">
            GET STARTED
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center py-8 bg-black text-white">
          <p className="text-sm">SportsX is a subscription-based virtual performance analytics platform.</p>
          <p className="text-sm">No real money wagering or gambling occurs on this platform.</p>
          <p className="text-xs mt-2">SportsX is proudly owned and operated by The Micro-Sheets™ Company.</p>
          <p className="text-xs">© 2024 The Micro-Sheets™ Company. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
