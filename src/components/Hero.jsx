import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,0,90,0.35),rgba(10,0,30,0.8))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            AI Agency • Voice, Vision & Automation
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-white">
            Build, launch and scale with an AI team that feels in‑house
          </h1>
          
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl">
            Steve Hooper AI designs and deploys production-grade AI agents—voice, chat and workflow automation—crafted for measurable business value.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-gray-900 font-medium hover:shadow-xl transition-shadow">
              Book a discovery call
            </a>
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition-colors">
              See our work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080112] to-transparent" />
    </section>
  )
}
