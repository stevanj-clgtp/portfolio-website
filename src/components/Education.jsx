import { motion } from 'framer-motion'
import { GraduationCap, Award, ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const timeline = [
  {
    year: '2029',
    items: [
      {
        icon: GraduationCap,
        type: 'Education',
        title: 'BSc Computer Science',
        institution: 'University of London',
        href: 'https://www.london.ac.uk/study/courses/undergraduate/bsc-computer-science',
        color: 'text-blue-600',
        border: 'border-blue-200',
        bg: 'bg-blue-50',
        dot: 'bg-blue-500',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        icon: GraduationCap,
        type: 'Education',
        title: 'Credential of Leadership, Impact, and Management in Business (CLIMB)',
        institution: 'Harvard Business School',
        href: 'https://online.hbs.edu/courses/climb',
        color: 'text-red-600',
        border: 'border-red-200',
        bg: 'bg-red-50',
        dot: 'bg-red-500',
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
        color: 'text-orange-600',
        border: 'border-orange-200',
        bg: 'bg-orange-50',
        dot: 'bg-orange-500',
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
        color: 'text-orange-600',
        border: 'border-orange-200',
        bg: 'bg-orange-50',
        dot: 'bg-orange-500',
      },
      {
        icon: Award,
        type: 'Certification',
        title: 'AWS Solutions Architect – Associate',
        institution: 'Amazon Web Services',
        href: 'https://www.credly.com/badges/08c7f6cc-9815-43a6-a5c0-468bd5a7f2d3/public_url',
        color: 'text-orange-600',
        border: 'border-orange-200',
        bg: 'bg-orange-50',
        dot: 'bg-orange-500',
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
        color: 'text-slate-600',
        border: 'border-slate-200',
        bg: 'bg-slate-50',
        dot: 'bg-slate-400',
      },
    ],
  },
]

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="py-28 px-6 section-alt">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12 text-slate-900">
            Education &amp; <span className="text-gradient">Certifications</span>
          </h2>

          <div className="relative">
            <div className="absolute left-[72px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-400/50 via-slate-200 to-transparent" />

            <div className="space-y-10">
              {timeline.map((group, gi) => (
                <motion.div
                  key={gi}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: gi * 0.12 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center gap-2 shrink-0 w-[72px]">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                      {group.year}
                    </span>
                  </div>

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
                          className={`group flex items-start gap-4 p-4 rounded-xl border ${item.border} ${item.bg} hover:shadow-md hover:-translate-y-0.5 transition-all`}
                        >
                          <div className="relative shrink-0 mt-0.5">
                            <div className={`w-2.5 h-2.5 rounded-full ${item.dot} ring-4 ring-white`} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className={`text-[10px] font-semibold ${item.color} tracking-widest uppercase mb-0.5`}>
                              {item.type}
                            </div>
                            <h3 className="text-sm font-semibold text-slate-900 leading-snug">
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
