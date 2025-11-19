import { motion } from 'framer-motion'
import { Flame, Zap, Shield, Activity } from 'lucide-react'

const features = [
  {
    title: 'Smart Programs',
    desc: 'Adaptive plans that evolve with your progress and goals.',
    icon: Activity,
  },
  {
    title: 'Elite Coaches',
    desc: 'One-on-one guidance from certified professionals.',
    icon: Shield,
  },
  {
    title: 'Immersive Space',
    desc: 'A futuristic environment designed to inspire consistency.',
    icon: Flame,
  },
  {
    title: 'Performance Tracking',
    desc: 'Real-time analytics to visualize your gains.',
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section id="programs" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What You Get</h2>
          <p className="mt-3 text-slate-300/90">Everything you need to become the strongest version of you.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-400 text-white grid place-items-center mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-slate-300/90 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
