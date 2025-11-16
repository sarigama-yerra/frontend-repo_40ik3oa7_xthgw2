import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#080112] selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />

      <section id="approach" className="bg-[#080112] py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Pragmatic, outcomes‑driven approach</h2>
            <p className="mt-4 text-white/70">We start with impact mapping and ship a high‑leverage pilot in weeks, not months. From there we iterate to production with reliability, guardrails and clear ROI.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400"/>Discovery workshop → success metrics</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400"/>Prototype agent + integrations</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400"/>Evals, safety, analytics</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400"/>Production rollout + enablement</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <form id="contact" className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="Name" />
              <input className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="Company" />
              <input className="sm:col-span-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="Email" />
              <textarea rows="4" className="sm:col-span-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/50" placeholder="What would you like to build?" />
              <button className="sm:col-span-2 inline-flex justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium hover:shadow-xl transition-shadow">Request proposal</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
