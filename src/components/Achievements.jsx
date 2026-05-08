import { motion } from 'framer-motion'
import { Database, Brain, Zap, Users, Shield, Lightbulb } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const categories = [
  {
    icon: Database,
    title: 'Data Platform & Architecture',
    color: 'from-cyan-400/10 to-cyan-400/5',
    border: 'border-cyan-400/20',
    iconColor: 'text-cyan-400',
    items: [
      'Led migration from on-premise infrastructure to AWS-based Data Lake, enabling scalable analytics, real-time processing, and ML experimentation across Sportsbook, Casino, Virtual Games, and Slot operations.',
      'Built centralized Sportsbook Data Warehouse & Analytics Platform — unified analytical data structures supporting large-scale reporting, advanced analytics, and AI-driven use cases across trading, risk, and operational teams.',
    ],
  },
  {
    icon: Brain,
    title: 'ML Modeling & Predictive Analytics',
    color: 'from-blue-400/10 to-blue-400/5',
    border: 'border-blue-400/20',
    iconColor: 'text-blue-400',
    items: [
      'Expected Margin Model — reconstructed historical market states and odds movements over time to calculate true sportsbook margin, enabling pricing analysis, trading performance evaluation, and market efficiency insights.',
      'Predictive personalization suite: Churn Model, LTV Model, and Recommendation Model — ML-driven segmentation and behavioral analysis to support data-driven decisions across trading and marketing.',
    ],
  },
  {
    icon: Zap,
    title: 'Betting Intelligence Modules',
    color: 'from-yellow-400/10 to-yellow-400/5',
    border: 'border-yellow-400/20',
    iconColor: 'text-yellow-400',
    items: [
      'Risk Tag Betting Module — behavioral risk classification system calculating customer risk levels using ~200 metrics derived from betting activity and customer behavior.',
      'Cash Out Betting Module — predictive model calculating optimal ticket cash-out values in real time based on market movement and probability changes.',
      'Similar Ticket Detection Module — classification system identifying similar betting patterns across tickets to improve risk detection and trading optimization.',
    ],
  },
  {
    icon: Users,
    title: 'Data Leadership & Strategy',
    color: 'from-purple-400/10 to-purple-400/5',
    border: 'border-purple-400/20',
    iconColor: 'text-purple-400',
    items: [
      'Built and led data function from the ground up — defining data strategy, architecture standards, and operating model for a team of 15 across engineering, analytics, and ML.',
      'Translated business requirements into scalable data products across trading, risk, marketing, and other commercial domains for Sportsbook, Casino, and Virtual Games verticals.',
    ],
  },
  {
    icon: Shield,
    title: 'Governance & Compliance',
    color: 'from-green-400/10 to-green-400/5',
    border: 'border-green-400/20',
    iconColor: 'text-green-400',
    items: [
      'Established enterprise data governance, security, and compliance frameworks across all data systems.',
      'Designed disaster recovery and business continuity standards for business-critical data infrastructure in high-availability betting environments.',
    ],
  },
  {
    icon: Lightbulb,
    title: 'AI & Product Thinking',
    color: 'from-orange-400/10 to-orange-400/5',
    border: 'border-orange-400/20',
    iconColor: 'text-orange-400',
    items: [
      'Designed and implemented AI products for personalization, recommendation, and operational optimization using LangGraph and CrewAI agent frameworks.',
      <>
        Building{' '}
        <a
          href="https://cloudlines.rs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Cloudlines
        </a>{' '}
        — an AI Agents platform with multi-agent orchestration, intelligent data pipelines, and autonomous decision-making workflows.
      </>,
    ],
  },
]

export default function Achievements() {
  const [ref, inView] = useInView()

  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Impact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12">
            Key <span className="text-gradient">Achievements</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`p-6 rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} hover:scale-[1.02] transition-transform`}
                >
                  <div className={`${cat.iconColor} mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-3">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                        <span className={`${cat.iconColor} mt-0.5 shrink-0`}>›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
