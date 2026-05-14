import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'stevan@stevan-jovanovic.com',
    href: 'mailto:stevdzan099@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+381 65 6344762',
    href: 'tel:+381656344762',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Belgrade, Serbia',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'stevan-jovanovic-86a2a3203',
    href: 'https://www.linkedin.com/in/stevan-jovanovic-86a2a3203/',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-slate-900">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-500 mb-12 max-w-xl leading-relaxed">
            Open to interesting conversations about data platform architecture, AI product
            development, or leadership opportunities.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {details.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <ContactIcon Icon={Icon} />
                    <ContactText label={label} value={value} linked />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                    <ContactIcon Icon={Icon} />
                    <ContactText label={label} value={value} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactIcon({ Icon }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
      <Icon size={16} className="text-blue-600" />
    </div>
  )
}

function ContactText({ label, value, linked }) {
  return (
    <div>
      <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5 font-medium">{label}</div>
      <div className={`text-sm font-medium ${linked ? 'text-slate-700 group-hover:text-blue-700 transition-colors' : 'text-slate-700'}`}>
        {value}
      </div>
    </div>
  )
}
