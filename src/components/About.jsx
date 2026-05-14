import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: '15+', label: 'Years in gambling industry' },
  { value: '3',   label: 'AWS certifications' },
  { value: '15+', label: 'Team members led' },
  { value: '1B+', label: 'Daily events processed' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 px-6 section-alt">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8 text-slate-900">
            Executive <span className="text-gradient">Summary</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed text-[1.05rem]">
              <p>
                Data and analytics leader with{' '}
                <span className="text-slate-900 font-semibold">15+ years in the global gambling industry</span> —
                spanning sportsbook trading, virtual games management, and data platform architecture
                across high-volume betting environments.
              </p>
              <p>
                Strong track record translating business needs into scalable data products, leading
                platform modernization on{' '}
                <span className="text-blue-700 font-semibold">AWS and Azure</span>, and establishing
                governance, security, and operating standards across the entire data lifecycle for
                Sportsbook, Casino, Virtual Games, and Slot operations.
              </p>
              <p>
                Currently supporting environments processing{' '}
                <span className="text-slate-900 font-semibold">billions of events daily</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="text-2xl font-extrabold text-gradient">{value}</div>
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
