import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ChevronDown, MapPin, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-slow" />
          <MapPin size={13} />
          Belgrade, Serbia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
        >
          Stevan{' '}
          <span className="text-gradient glow-text">Jovanović</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl sm:text-2xl text-slate-400 font-light mb-2"
        >
          Head of Data &nbsp;·&nbsp; Data Platform Architect &nbsp;·&nbsp; AI Solutions Leader
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          15+ years in the global gambling industry — designing cloud-based data platforms,
          BI ecosystems, and AI-driven decision engines for high-volume environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            to="contact"
            smooth
            duration={700}
            offset={-64}
            className="px-7 py-3 bg-cyan-400 text-navy-950 font-semibold rounded-lg cursor-pointer hover:bg-cyan-300 transition-colors text-sm tracking-wide"
          >
            Get in Touch
          </Link>
          <Link
            to="experience"
            smooth
            duration={700}
            offset={-64}
            className="px-7 py-3 border border-white/10 text-slate-300 font-medium rounded-lg cursor-pointer hover:border-cyan-400/40 hover:text-white transition-all text-sm tracking-wide"
          >
            View Experience
          </Link>
          <a
            href="https://www.linkedin.com/in/stevan-jovanovic-86a2a3203/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/10 text-slate-300 font-medium rounded-lg hover:border-cyan-400/40 hover:text-white transition-all text-sm tracking-wide"
          >
            LinkedIn <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10"
      >
        <Link to="about" smooth duration={600} offset={-64} className="cursor-pointer">
          <ChevronDown size={24} className="text-slate-600 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
