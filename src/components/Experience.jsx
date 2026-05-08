import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const jobs = [
  {
    title: 'Lead Data Platform Architect',
    subtitle: 'Senior BI Developer',
    company: 'ARRISE powering Pragmatic Play',
    period: 'Jan 2024 – Present',
    location: 'Belgrade, Serbia',
    bullets: [
      'Lead design and implementation of data platform and analytics systems supporting real-time decision-making.',
      'Design scalable data flows, models, and cloud services for low-latency sports betting analytics and ML-driven use cases.',
      'Drive governance, security, and engineering excellence while mentoring BI team members and improving delivery practices.',
    ],
  },
  {
    title: 'Head of Data',
    company: 'Maxbet',
    period: 'Jan 2020 – Dec 2023',
    location: 'Belgrade, Serbia',
    bullets: [
      'Built and led the data function from the ground up — defining architecture direction, operating model, and roadmap for analytics and ML initiatives.',
      'Designed and managed an AWS-based and Azure data platform including data lakes, warehouses, ETL pipelines, and experimentation environments.',
      'Established security, compliance, disaster recovery, and business continuity standards for business-critical data systems.',
      'Partnered with leadership to translate commercial needs into scalable data products, reporting capabilities, and decision-support tools.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12">
            Professional <span className="text-gradient">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent hidden sm:block" />

            <div className="space-y-12">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="sm:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/10" />
                  </div>

                  <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/20 hover:bg-white/[0.04] transition-all glow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-1">
                      <div>
                        <h3 className="text-lg font-bold text-white">{job.title}</h3>
                        {job.subtitle && (
                          <p className="text-sm text-cyan-400 font-medium mt-0.5">{job.subtitle}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm font-mono shrink-0">
                        <Calendar size={13} />
                        {job.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
                      <Briefcase size={13} className="text-cyan-400/70" />
                      <span className="font-medium text-slate-300">{job.company}</span>
                      <span className="text-slate-600">·</span>
                      <span>{job.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                          <span className="text-cyan-400 mt-1 shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
