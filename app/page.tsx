import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Main Banner */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-semibold leading-12 text-black dark:text-zinc-50">
            SPORTSX - THE FIRST MULTI-LEAGUE SPORTS PERFORMANCE EXCHANGE
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Trade structured performance indexes. Build your sports portfolio.
            Compete and climb the leaderboards.
          </p>

          {/* Buttons */}
          <div className="mt-6 space-x-4">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-full"
            >
              CREATE FREE ACCOUNT
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-full"
            >
              VIEW LIVE INDEXES
            </a>
          </div>
        </div>

        {/* Live Indexes Section */}
        <div className="py-16 bg-gray-900 text-white text-center">
          <h2 className="text-3xl font-semibold">LIVE INDEX PERFORMANCE</h2>
          <div className="flex justify-center space-x-8 mt-6">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full">
              SX-NBA INDEX
            </button>
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full">
              SX-ESPORTS INDEX
            </button>
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full">
              SX-NFL INDEX
            </button>
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full">
              SX-BASEBALL INDEX
            </button>
          </div>
        </div>

        {/* Performance Indexes */}
        <div className="py-16 px-10 text-center">
          <h2 className="text-3xl font-semibold">TRADE PERFORMANCE INDEXES</h2>
          <p className="mt-6">SportsX launches with NBA and Elite Esports.</p>
          <p className="mt-2">We expand league-by-league as the exchange grows.</p>

          <div className="flex justify-center gap-8 mt-8">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full">
              Pro Football (COMING SOON)
            </button>
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full">
              Pro Baseball (COMING SOON)
            </button>
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full">
              Pro Hockey (COMING SOON)
            </button>
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full">
              Global Soccer (Future)
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="py-16 px-10 bg-black text-white text-center">
          <h3 className="text-2xl font-semibold">
            JOIN THE EXCHANGE, BUILD YOUR PORTFOLIO, CLIMB THE RANKINGS.
          </h3>
          <a
            href="#"
            className="mt-6 inline-block px-8 py-3 text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-full"
          >
            GET STARTED
          </a>

          <div className="mt-6">
            <p className="text-md text-gray-300">
              SportsX is a subscription-based virtual performance analytics
              platform.
            </p>
            <p className="text-md text-gray-300">
              No real money wagering or gambling occurs on this platform.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-md text-gray-500">
              SportsX is proudly owned and operated by The Micro-Sheets Company.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 The Micro-Sheets Company. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
