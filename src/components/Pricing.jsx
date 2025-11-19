import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: ['Gym Access', 'Group Classes', 'Progress Tracker'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 59,
    features: ['Everything in Starter', 'Personal Coach', 'Nutrition Plan'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: 99,
    features: ['All Pro Features', 'Priority Booking', '1:1 Sessions'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple Pricing</h2>
          <p className="mt-3 text-slate-300/90">Choose the plan that fits your journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl border p-6 backdrop-blur-md ${
                tier.highlight
                  ? 'bg-gradient-to-br from-violet-600/20 to-cyan-400/20 border-white/20 shadow-[0_20px_60px_-20px_rgba(99,102,241,0.5)]'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <h3 className="text-white font-semibold text-lg">{tier.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">${tier.price}</span>
                <span className="text-slate-300/80">/mo</span>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="text-slate-200/90 text-sm">• {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-xl border text-white ${
                tier.highlight ? 'bg-white/10 border-white/30' : 'border-white/20 hover:bg-white/10'
              }`}>
                Choose {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
