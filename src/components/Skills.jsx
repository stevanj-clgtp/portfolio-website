import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const categories = [
  {
    label: 'AWS Services',
    tags: [
      'S3', 'Glue', 'Redshift', 'Kinesis', 'Lambda', 'Athena',
      'EMR', 'Step Functions', 'RDS', 'DynamoDB', 'SageMaker',
      'ECS', 'EKS', 'CloudFormation', 'IAM', 'CloudWatch', 'SNS / SQS',
    ],
  },
  {
    label: 'Azure',
    tags: ['Azure Data Factory', 'Synapse Analytics', 'Blob Storage', 'Azure SQL', 'Azure DevOps'],
  },
  {
    label: 'Data Engineering',
    tags: ['Python', 'SQL', 'ETL / ELT', 'dbt', 'Data Modeling', 'Apache Spark', 'Kafka'],
  },
  {
    label: 'Analytics & BI',
    tags: ['Power BI', 'SSRS', 'Executive Dashboards', 'KPI Design', 'DAX', 'Data Visualization'],
  },
  {
    label: 'Orchestration',
    tags: ['Apache Airflow', 'Batch Processing', 'Real-Time Processing', 'Event-Driven Pipelines'],
  },
  {
    label: 'DevOps & Infrastructure',
    tags: [
      'Terraform', 'CI/CD', 'Docker', 'Infrastructure as Code',
    ],
  },
  {
    label: 'Machine Learning',
    tags: [
      'Predictive Models', 'Customer Segmentation', 'Churn Prediction',
      'LTV Modeling', 'Recommender Systems', 'Risk Classification',
      'Odds Modeling', 'Behavioral Analytics',
    ],
  },
  {
    label: 'AI Agents & LLM',
    tags: [
      'LangGraph', 'CrewAI', 'Multi-Agent Orchestration',
      'Agentic Workflows', 'RAG Pipelines', 'LLM Integration',
      'Autonomous Decision Systems',
    ],
  },
  {
    label: 'Data Governance',
    tags: ['Data Governance', 'Security & Compliance', 'Data Lineage', 'End-to-End Architecture', 'DR & BCP'],
  },
  {
    label: 'Gambling Domain',
    tags: ['Sportsbook', 'Casino', 'Virtual Games', 'Slots', 'Trading & Risk', 'Odds Management', 'Cash Out Systems'],
  },
  {
    label: 'Leadership',
    tags: ['Team Building', 'Data Strategy', 'Roadmap Definition', 'Stakeholder Management', 'Mentoring'],
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

          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
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
