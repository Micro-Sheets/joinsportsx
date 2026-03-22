import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            SPORTSX - THE FIRST MULTI-LEAGUE SPORTS PERFORMANCE EXCHANGE
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Trade structured performance indexes. Build your sports portfolio. Compete and climb the leaderboards.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-6 sm:items-start sm:text-left">
          <button className="text-white bg-blue-600 py-2 px-6 rounded-md hover:bg-blue-700">
            CREATE FREE ACCOUNT
          </button>
          <button className="text-white bg-green-600 py-2 px-6 rounded-md hover:bg-green-700">
            VIEW LIVE INDEXES
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold">LIVE INDEX PERFORMANCE</h3>
          <div className="flex gap-4 mt-4">
            <button className="bg-orange-500 text-white py-2 px-6 rounded-md">
              SX-NBA INDEX
            </button>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-md">
              SX-ESPORTS INDEX
            </button>
            <button className="bg-red-500 text-white py-2 px-6 rounded-md">
              SX-NFL INDEX
            </button>
            <button className="bg-green-500 text-white py-2 px-6 rounded-md">
              SX-BASEBALL INDEX
            </button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold">TRADE PERFORMANCE INDEXES</h3>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md">
              Pro Football
            </button>
            <button className="bg-green-500 text-white py-2 px-6 rounded-md">
              Pro Baseball
            </button>
            <button className="bg-red-500 text-white py-2 px-6 rounded-md">
              Pro Hockey
            </button>
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-md">
              Global Soccer
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-lg">JOIN THE EXCHANGE, BUILD YOUR PORTFOLIO, CLIMB THE RANKINGS.</h4>
          <button className="text-white bg-blue-600 py-2 px-6 rounded-md hover:bg-blue-700 mt-4">
            GET STARTED
          </button>
        </div>

        <footer className="mt-32 text-center">
          <p className="text-xs text-zinc-400">
            SportsX is a subscription-based virtual performance analytics platform. No real money wagering or gambling occurs on this platform.
          </p>
          <p className="text-xs text-zinc-400 mt-2">
            SportsX is proudly owned and operated by The Micro-Sheets™ Company.
          </p>
        </footer>
      </main>
    </div>
  );
}
