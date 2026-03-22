import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        {/* Main Title */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            SPORTSX - THE FIRST MULTI-LEAGUE SPORTS PERFORMANCE EXCHANGE
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Trade structured performance indexes. Build your sports portfolio. Compete and climb the leaderboards.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            CREATE FREE ACCOUNT
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            VIEW LIVE INDEXES
          </a>
        </div>

        {/* Live Index Section */}
        <div className="py-16 px-10 bg-gray-800 text-white text-center">
          <h2 className="text-3xl font-semibold">LIVE INDEX PERFORMANCE</h2>
          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-orange-500 p-4 rounded-md">SX-NBA INDEX</button>
            <button className="bg-yellow-500 p-4 rounded-md">SX-ESPORTS INDEX</button>
            <button className="bg-red-500 p-4 rounded-md">SX-NFL INDEX</button>
            <button className="bg-green-500 p-4 rounded-md">SX-BASEBALL INDEX</button>
          </div>
        </div>

        {/* Performance Indexes */}
        <div className="py-16 px-10 text-center">
          <h2 className="text-3xl font-semibold">TRADE PERFORMANCE INDEXES</h2>
          <p className="mt-6">SportsX launches with NBA and Elite Esports.</p>
          <p className="mt-2">We expand league-by-league as the exchange grows.</p>

          <div className="flex justify-center gap-8 mt-8">
            <button className="bg-blue-500 p-4 rounded-md">Pro Football (COMING SOON)</button>
            <button className="bg-green-500 p-4 rounded-md">Pro Baseball (COMING SOON)</button>
            <button className="bg-yellow-500 p-4 rounded-md">Pro Hockey (COMING SOON)</button>
            <button className="bg-orange-500 p-4 rounded-md">Global Soccer (Future)</button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-16 px-10 bg-black text-white">
          <h3 className="text-2xl font-semibold">JOIN THE EXCHANGE, BUILD YOUR PORTFOLIO, CLIMB THE RANKINGS.</h3>
          <a
            href="#"
            className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            GET STARTED
          </a>

          <div className="mt-6">
            <p className="text-md text-gray-300">SportsX is a subscription-based virtual performance analytics platform.</p>
            <p className="text-md text-gray-300">No real money wagering or gambling occurs on this platform.</p>
          </div>

          <div className="mt-10">
            <p className="text-md text-gray-500">SportsX is proudly owned and operated by The Micro-Sheets Company.</p>
            <p className="text-sm text-gray-500">© 2024 The Micro-Sheets Company. All Rights Reserved.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
