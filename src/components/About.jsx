import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8">
            Executive <span className="text-gradient">Summary</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed text-[1.05rem]">
              <p>
                Data and analytics leader with{' '}
                <span className="text-slate-200 font-medium">15+ years in the global gambling industry</span> —
                spanning sportsbook trading, virtual games management, and data platform architecture
                across high-volume betting environments.
              </p>
              <p>
                Strong track record translating business needs into scalable data products, leading
                platform modernization on{' '}
                <span className="text-cyan-400 font-medium">AWS and Azure</span>, and establishing
                governance, security, and operating standards across the entire data lifecycle for
                Sportsbook, Casino, Virtual Games, and Slot operations.
              </p>
              <p>
                Currently supporting environments processing{' '}
                <span className="text-slate-200 font-medium">billions of events daily</span>, while
                building{' '}
                <a
                  href="https://cloudlines.rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                >
                  Cloudlines
                </a>{' '}
                — an AI Agents platform.
              </p>
            </div>

            <div className="space-y-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/20 transition-colors"
                >
                  <div className="text-2xl font-bold text-gradient">{value}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SectionLabel({ children }) {
  return (
    <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">{children}</span>
  )
}

const stats = [
  { value: '15+', label: 'Years in gambling industry' },
  { value: '3', label: 'AWS certifications' },
  { value: '15+', label: 'Team members led' },
  { value: '1B+', label: 'Daily events processed' },
]
