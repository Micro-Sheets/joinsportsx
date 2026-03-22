import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import IndexCard from "../components/IndexCard"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <section className="px-10 py-20 bg-darkBg">
        <h2 className="text-3xl text-center font-bold mb-12 uppercase">
          Trade Performance Indexes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <IndexCard
            title="SX-NBA INDEX"
            description="Trade player, team, and coach performance from professional basketball."
          />
          <IndexCard
            title="SX-ESPORTS INDEX"
            description="Trade structured performance indexes across elite esports."
          />
          <IndexCard
            title="Performance Mechanics"
            description="Rolling baselines. Objective metrics. Daily index settlements."
          />
        </div>
      </section>

      <section className="text-center py-20 bg-black">
        <h2 className="text-3xl font-bold uppercase mb-6">
          Join the Exchange. Build Your Portfolio. Climb the Rankings.
        </h2>

        <button className="gold-btn px-10 py-4 rounded text-lg">
          Get Started
        </button>
      </section>

      <Footer />
    </>
  )
}
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold mt-16 px-8 py-10 text-center text-sm text-gray-400">
      <div className="mb-6">
        <p>
          SportsX is a subscription-based virtual performance analytics platform.
        </p>
        <p>
          No real-money wagering or gambling occurs on this platform.
        </p>
        <p>
          All allocations are virtual and for entertainment and analytical purposes only.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-4">
        <Image src="/microsheets-logo.png" alt="The Micro-Sheets Company" width={120} height={60} />
        <p className="text-white">
          SportsX is proudly owned and operated by The Micro-Sheets™ Company.
        </p>
      </div>

      <p>© 2024 The Micro-Sheets™ Company. All Rights Reserved.</p>
    </footer>
  )
}
