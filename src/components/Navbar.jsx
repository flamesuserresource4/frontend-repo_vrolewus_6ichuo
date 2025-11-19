import { useState } from 'react'
import { Menu, X, Dumbbell } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Programs', href: '#programs' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">
                Pulse Gym
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_20px_40px_-12px_rgba(34,211,238,0.5)] transition-shadow">
                Join Now
              </a>
            </nav>

            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-2 pt-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white">
                  Join Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
