import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.08),transparent_40%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Pricing />
        <Footer />
      </main>
    </div>
  )
}

export default App
