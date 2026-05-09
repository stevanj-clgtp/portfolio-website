import { motion } from 'framer-motion'
import { GraduationCap, Award, ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'

// Grouped chronologically — newest first
const timeline = [
  {
    year: '2025',
    items: [
      {
        icon: GraduationCap,
        type: 'Education',
        title: 'Credential of Leadership, Impact, and Management in Business (CLIMB)',
        institution: 'Harvard Business School',
        href: 'https://online.hbs.edu/courses/climb',
        color: 'text-red-400',
        border: 'border-red-400/20',
        bg: 'bg-red-400/5',
        dot: 'bg-red-400',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        icon: Award,
        type: 'Certification',
        title: 'AWS Developer – Associate',
        institution: 'Amazon Web Services',
        href: 'https://www.credly.com/badges/b36bafe6-1a86-4d58-8cde-204cdf928922/public_url',
        color: 'text-orange-400',
        border: 'border-orange-400/20',
        bg: 'bg-orange-400/5',
        dot: 'bg-orange-400',
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        icon: Award,
        type: 'Certification',
        title: 'AWS Cloud Practitioner',
        institution: 'Amazon Web Services',
        href: 'https://www.credly.com/badges/f94dd5fd-3588-4779-a0a9-786277a704f4/public_url',
        color: 'text-orange-400',
        border: 'border-orange-400/20',
        bg: 'bg-orange-400/5',
        dot: 'bg-orange-400',
      },
      {
        icon: Award,
        type: 'Certification',
        title: 'AWS Solutions Architect – Associate',
        institution: 'Amazon Web Services',
        href: 'https://www.credly.com/badges/08c7f6cc-9815-43a6-a5c0-468bd5a7f2d3/public_url',
        color: 'text-orange-400',
        border: 'border-orange-400/20',
        bg: 'bg-orange-400/5',
        dot: 'bg-orange-400',
      },
    ],
  },
  {
    year: '2019',
    items: [
      {
        icon: GraduationCap,
        type: 'Education',
        title: 'Java Development',
        institution: 'Code by Cometrade',
        href: 'https://code.edu.rs/obuke/java-development/',
        color: 'text-red-400',
        border: 'border-red-400/20',
        bg: 'bg-red-400/5',
        dot: 'bg-red-400',
      },
    ],
  },
]

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12">
            Education &amp; <span className="text-gradient">Certifications</span>
          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[72px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/30 via-white/5 to-transparent" />

            <div className="space-y-10">
              {timeline.map((group, gi) => (
                <motion.div
                  key={gi}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: gi * 0.12 }}
                  className="flex gap-6"
                >
                  {/* Year marker */}
                  <div className="flex flex-col items-center gap-2 shrink-0 w-[72px]">
                    <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                      {group.year}
                    </span>
                  </div>

                  {/* Items */}
                  <div className="flex-1 space-y-3 pb-2">
                    {group.items.map((item, ii) => {
                      const Icon = item.icon
                      return (
                        <motion.a
                          key={ii}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: 16 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: gi * 0.12 + ii * 0.08 }}
                          className={`group flex items-start gap-4 p-4 rounded-xl border ${item.border} ${item.bg} hover:scale-[1.01] hover:brightness-110 transition-all`}
                        >
                          {/* Dot on the timeline */}
                          <div className="relative shrink-0 mt-0.5">
                            <div className={`w-2.5 h-2.5 rounded-full ${item.dot} ring-4 ring-navy-950`} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className={`text-[10px] font-mono ${item.color} tracking-widest uppercase mb-0.5`}>
                              {item.type}
                            </div>
                            <h3 className="text-sm font-semibold text-white leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">{item.institution}</p>
                          </div>

                          <ExternalLink
                            size={13}
                            className={`${item.color} shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity`}
                          />
                        </motion.a>
                      )
                    })}
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
