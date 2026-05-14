import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { MapPin, ExternalLink, ChevronDown } from 'lucide-react'

const metrics = [
  { value: '15+', label: 'Years in Gambling Industry' },
  { value: '1B+', label: 'Events Processed Daily' },
  { value: '15+', label: 'Data Team Members Led' },
  { value: '3×',  label: 'AWS Certified' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-white overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #1d4ed8 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide mb-8"
        >
          <MapPin size={11} />
          Belgrade, Serbia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight"
        >
          Stevan{' '}
          <span className="text-gradient">Jovanović</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-blue-700 font-semibold mb-5 tracking-tight"
        >
          Head of Data & AI
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building enterprise data platforms and AI systems that transform raw data into
          measurable competitive advantage — across Sportsbook, Casino, and Virtual Games operations.
        </motion.p>

        {/* Impact metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 max-w-2xl mx-auto"
        >
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-1">{value}</div>
              <div className="text-xs text-slate-500 leading-snug">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.56 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="contact"
            smooth
            duration={700}
            offset={-64}
            className="px-7 py-3 bg-blue-700 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-800 transition-colors text-sm shadow-sm"
          >
            Get in Touch
          </Link>
          <Link
            to="experience"
            smooth
            duration={700}
            offset={-64}
            className="px-7 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg cursor-pointer hover:border-blue-400 hover:text-blue-700 transition-all text-sm"
          >
            View Experience
          </Link>
          <a
            href="https://www.linkedin.com/in/stevan-jovanovic-86a2a3203/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-blue-400 hover:text-blue-700 transition-all text-sm"
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
          <ChevronDown size={22} className="text-slate-300 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
