import { motion } from 'framer-motion'

const logos = [
  'https://cdn.simpleicons.org/openai/ffffff',
  'https://cdn.simpleicons.org/googlecloud/ffffff',
  'https://cdn.simpleicons.org/twilio/ffffff',
  'https://cdn.simpleicons.org/stripe/ffffff',
  'https://cdn.simpleicons.org/aws/ffffff',
]

export default function Showcase() {
  return (
    <section id="work" className="bg-[#0A0216] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected partners & stack</h2>
            <p className="mt-2 text-white/70 max-w-xl">Systems designed to be reliable, measurable and scalable from day one.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors">Get a deck</a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {logos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center justify-center"
            >
              <img src={src} alt="logo" className="h-8 opacity-90" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
