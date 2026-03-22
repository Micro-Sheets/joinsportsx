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
