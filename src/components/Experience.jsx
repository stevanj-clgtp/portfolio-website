import { motion } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const jobs = [
  {
    title: 'Lead Data Platform Architect',
    subtitle: 'Senior BI Developer',
    company: 'ARRISE powering Pragmatic Play',
    period: 'Jan 2024 – Present',
    location: 'Belgrade, Serbia',
    bullets: [
      'Lead design and implementation of data platform and analytics systems supporting real-time decision-making across Sportsbook, Casino, and Slots verticals.',
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
      'Built and led the data function from the ground up — defining architecture direction, operating model, and roadmap for analytics and ML across Sportsbook, Casino, Virtual Games, and Slot operations.',
      'Designed and managed an AWS-based and Azure data platform including data lakes, warehouses, ETL pipelines, and ML experimentation environments.',
      'Established security, compliance, disaster recovery, and business continuity standards for business-critical data systems.',
      'Partnered with leadership to translate commercial needs into scalable data products, reporting capabilities, and decision-support tools.',
    ],
  },
  {
    company: 'Meridianbet',
    period: 'Jan 2013 – Dec 2019',
    location: 'Belgrade, Serbia',
    tenure: '7 years',
    roles: [
      {
        title: 'Virtual Games Manager',
        period: 'Feb 2019 – Dec 2019',
        bullets: [
          'Developed mathematics and betting models for new virtual games and bet types.',
          'Conducted Virtual Games market analysis and competitive benchmarking.',
        ],
      },
      {
        title: 'Sportsbook Trader',
        period: 'Aug 2016 – Dec 2019',
        bullets: [
          'Created and managed prematch betting offer across multiple markets and sports.',
          'Performed risk management for matches in the active offer.',
          'Conducted clustering, segmentation, and predictive analysis for new territories.',
        ],
      },
      {
        title: 'Live Betting Operator',
        period: 'Oct 2014 – Jul 2016',
        bullets: [
          'Created and managed live betting offer in real time.',
          'Performed risk management for live matches in the active offer.',
        ],
      },
      {
        title: 'Betshop Operator',
        period: 'Jan 2013 – Sep 2014',
        bullets: [
          'Operated Betting, Casino, and Virtual Games tickets for customers.',
        ],
      },
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
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/10" />
                  </div>

                  {'roles' in job ? (
                    <MeridianCard job={job} />
                  ) : (
                    <SingleRoleCard job={job} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SingleRoleCard({ job }) {
  return (
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
  )
}

function MeridianCard({ job }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/20 transition-all overflow-hidden">
      {/* Company header */}
      <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Briefcase size={14} className="text-cyan-400/70" />
          <span className="font-semibold text-white">{job.company}</span>
          <span className="text-xs font-mono text-cyan-400/60 px-2 py-0.5 rounded-full border border-cyan-400/15 bg-cyan-400/5">
            {job.tenure}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 text-sm font-mono">
          <Calendar size={13} />
          {job.period}
        </div>
      </div>

      {/* Roles */}
      <div className="divide-y divide-white/[0.04]">
        {job.roles.map((role, i) => (
          <div key={i} className="px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <ChevronRight size={13} className="text-cyan-400/60" />
                <span className="text-sm font-semibold text-slate-200">{role.title}</span>
              </div>
              <span className="text-xs font-mono text-slate-500">{role.period}</span>
            </div>
            <ul className="space-y-1 pl-5">
              {role.bullets.map((b, j) => (
                <li key={j} className="flex gap-2 text-xs text-slate-500 leading-relaxed">
                  <span className="text-cyan-400/50 shrink-0 mt-0.5">›</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
