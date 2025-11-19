export default function Footer() {
  return (
    <footer id="contact" className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-300/80 text-sm">© {new Date().getFullYear()} Pulse Gym. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-slate-300/80 hover:text-white">Terms</a>
              <span className="text-slate-500">•</span>
              <a href="#" className="text-slate-300/80 hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
