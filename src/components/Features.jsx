import { motion } from 'framer-motion'
import { Bot, PhoneCall, Workflow, Sparkles, Gauge, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Conversational Agents',
    desc: 'Voice and chat agents fine‑tuned to your brand, tools and KPIs.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Orchestrate multi‑step processes across your stack with reliable agents.',
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Platforms',
    desc: 'Natural, responsive phone agents that actually get things done.',
  },
  {
    icon: Gauge,
    title: 'Performance First',
    desc: 'Latency budgets, evals and dashboards baked into every deployment.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Guardrails',
    desc: 'Enterprise security, PII handling and deterministic controls by default.',
  },
  {
    icon: Sparkles,
    title: 'Creative + Technical',
    desc: 'Strategy, design and engineering under one roof—ship faster with quality.',
  },
]

export default function Features() {
  return (
    <section id="capabilities" className="relative py-24 bg-[#080112]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,31,162,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Capabilities</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            From prototype to production—we partner end‑to‑end to deliver outcomes, not just models.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-fuchsia-500 text-white">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-medium text-white">{title}</h3>
              </div>
              <p className="mt-3 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
