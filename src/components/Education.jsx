import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const items = [
  {
    icon: GraduationCap,
    type: 'Education',
    title: 'Credential of Leadership, Impact, and Management in Business (CLIMB)',
    institution: 'Harvard Business School',
    year: '2025',
    color: 'text-red-400',
    border: 'border-red-400/15',
    bg: 'bg-red-400/5',
  },
  {
    icon: Award,
    type: 'Certification',
    title: 'AWS Solutions Architect – Associate',
    institution: 'Amazon Web Services',
    year: null,
    color: 'text-orange-400',
    border: 'border-orange-400/15',
    bg: 'bg-orange-400/5',
  },
  {
    icon: Award,
    type: 'Certification',
    title: 'AWS Developer – Associate',
    institution: 'Amazon Web Services',
    year: null,
    color: 'text-orange-400',
    border: 'border-orange-400/15',
    bg: 'bg-orange-400/5',
  },
  {
    icon: Award,
    type: 'Certification',
    title: 'AWS Cloud Practitioner',
    institution: 'Amazon Web Services',
    year: null,
    color: 'text-orange-400',
    border: 'border-orange-400/15',
    bg: 'bg-orange-400/5',
  },
]

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
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

          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-5 rounded-xl border ${item.border} ${item.bg} hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${item.color} mt-0.5 shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className={`text-xs font-mono ${item.color} tracking-wider uppercase mb-1`}>
                        {item.type}
                      </div>
                      <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {item.institution}
                        {item.year && (
                          <span className="ml-2 text-slate-600">· {item.year}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
