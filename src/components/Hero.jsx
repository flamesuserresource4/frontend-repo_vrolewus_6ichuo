import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-28 overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm">Modern Gym Experience</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Elevate Your Fitness With A Futuristic Vibe
              </h1>
              <p className="mt-5 text-lg text-slate-200/90 max-w-2xl">
                Train in a space that feels alive. Tailored programs, elite coaches, and an immersive design that keeps you motivated.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-400 text-white font-medium shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_20px_40px_-12px_rgba(34,211,238,0.5)] transition-shadow">
                  Start Your Journey
                </a>
                <a href="#programs" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10">
                  Explore Programs
                </a>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Programs', value: '25+' },
                    { label: 'Members', value: '3k+' },
                    { label: 'Coaches', value: '15' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-300/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['Strength', 'Cardio', 'HIIT', 'Yoga'].map((tag) => (
                    <div key={tag} className="px-3 py-2 rounded-xl bg-white/10 text-white/90 border border-white/10 text-sm text-center">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
