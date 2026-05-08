import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const categories = [
  {
    label: 'Cloud & Data Platform',
    tags: ['AWS', 'Azure', 'Distributed Architectures', 'Data Lakes', 'Data Warehouses'],
  },
  {
    label: 'Data Engineering',
    tags: ['Python', 'SQL', 'ETL / ELT', 'dbt', 'Data Modeling'],
  },
  {
    label: 'Analytics',
    tags: ['Power BI', 'SSRS', 'Executive Dashboards', 'KPI Design'],
  },
  {
    label: 'Orchestration',
    tags: ['Apache Airflow', 'Batch Processing', 'Real-Time Processing'],
  },
  {
    label: 'Infrastructure',
    tags: ['Terraform', 'CI/CD', 'Scalable Cloud Environments'],
  },
  {
    label: 'Machine Learning',
    tags: ['Predictive Models', 'Segmentation', 'Churn Prediction', 'LTV', 'Recommender Systems'],
  },
  {
    label: 'Data Governance',
    tags: ['Data Governance', 'Security', 'Compliance', 'End-to-End Architecture'],
  },
  {
    label: 'Leadership',
    tags: ['Team Building', 'Strategy', 'Roadmap', 'Stakeholder Management', 'Mentoring'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/15 transition-colors"
              >
                <h3 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/5 hover:border-cyan-400/25 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
