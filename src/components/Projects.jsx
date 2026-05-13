import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, Layers, Brain, Bot, ShoppingCart, X } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import DataLakeDiagram from './diagrams/DataLakeDiagram'
import EcommerceDiagram from './diagrams/EcommerceDiagram'
import AiAgentsDiagram from './diagrams/AiAgentsDiagram'

const projects = [
  {
    year: '2023',
    title: 'Data Lake',
    description:
      'Migrated from on-premise infrastructure to an AWS-based Data Lake, enabling scalable analytics, real-time processing, and ML experimentation across Sportsbook, Casino, Virtual Games, and Slot operations.',
    tech: ['CloudFormation','AWS EC2', 'AWS ECS', 'AWS DMS', 'AWS Lambda','AWS S3', 'AWS Glue', 'Redshift', 'Apache Spark', 'Java','Python','SQL'],
    icon: Database,
    color: 'from-cyan-400/10 to-cyan-400/5',
    border: 'border-cyan-400/20',
    iconColor: 'text-cyan-400',
    tagColor: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
    diagram: DataLakeDiagram,
  },
  {
    year: '2025',
    title: 'Data Lakehouse',
    description:
      'Designed and built a modern Data Lakehouse architecture unifying batch and streaming workloads, enabling self-serve analytics and ML pipelines across the entire data platform.',
    tech: ['Databricks', 'Delta Lake', 'Apache Spark', 'dbt', 'AWS', 'Python'],
    icon: Layers,
    color: 'from-blue-400/10 to-blue-400/5',
    border: 'border-blue-400/20',
    iconColor: 'text-blue-400',
    tagColor: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  },
  {
    year: '2024',
    title: 'Recommendation System',
    description:
      'ML-driven personalization engine delivering real-time content and offer recommendations to players based on behavioral patterns, LTV segmentation, and collaborative filtering.',
    tech: ['Python', 'PyTorch', 'Apache Spark', 'Kafka', 'Redis', 'FastAPI'],
    icon: Brain,
    color: 'from-purple-400/10 to-purple-400/5',
    border: 'border-purple-400/20',
    iconColor: 'text-purple-400',
    tagColor: 'bg-purple-400/10 text-purple-300 border-purple-400/20',
  },
  {
    year: '2026',
    title: 'AI Agents',
    description:
      'Designed and implemented multi-agent AI systems for personalization, recommendation, and operational optimization using LangGraph and CrewAI orchestration frameworks.',
    tech: ['LangGraph', 'CrewAI', 'Python', 'FastAPI', 'OpenAI', 'LangChain','Next.js', 'Amplify', 'Cognito','DynamoDB','Terraform'],
    diagram: AiAgentsDiagram,
    icon: Bot,
    color: 'from-pink-400/10 to-pink-400/5',
    border: 'border-pink-400/20',
    iconColor: 'text-pink-400',
    tagColor: 'bg-pink-400/10 text-pink-300 border-pink-400/20',
  },
  {
    year: '2025',
    title: 'Ecommerce App',
    description:
      'Full-stack ecommerce application with product catalog, cart management, payment processing, and real-time inventory tracking.',
    tech: ['AWS Amplify', 'Next.js', 'Spring Boot', 'Kotlin', 'PostgreSQL', 'Terraform', 'Tailwind CSS', 'Python','Power BI'],
    diagram: EcommerceDiagram,
    icon: ShoppingCart,
    color: 'from-green-400/10 to-green-400/5',
    border: 'border-green-400/20',
    iconColor: 'text-green-400',
    tagColor: 'bg-green-400/10 text-green-300 border-green-400/20',
  },
]

const SORT_OPTIONS = [
  { key: 'newest', label: 'Newest first' },
  { key: 'oldest', label: 'Oldest first' },
]

export default function Projects() {
  const [ref, inView] = useInView()
  const [activeProject, setActiveProject] = useState(null)
  const [sort, setSort] = useState('newest')

  const sorted = [...projects].sort((a, b) =>
    sort === 'newest' ? b.year - a.year : a.year - b.year
  )

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">Work</span>
          <div className="flex items-end justify-between mt-3 mb-12 flex-wrap gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="flex gap-2">
              {SORT_OPTIONS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSort(key)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                    sort === key
                      ? 'border-cyan-400/60 text-cyan-400 bg-cyan-400/10'
                      : 'border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((project, i) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex flex-col p-6 rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={project.iconColor}>
                      <Icon size={22} />
                    </div>
                    <span className={`font-mono text-xs font-semibold ${project.iconColor} opacity-70`}>
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${project.tagColor}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className={`mt-auto text-xs font-medium ${project.iconColor} hover:opacity-100 opacity-60 transition-opacity text-left`}
                  >
                    View Architecture →
                  </button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            onClick={() => setActiveProject(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full ${activeProject.diagram ? 'max-w-4xl' : 'max-w-2xl'} rounded-2xl border ${activeProject.border} bg-[#020817] p-8 max-h-[90vh] overflow-y-auto`}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className={`${activeProject.iconColor} mb-3`}>
                <activeProject.icon size={24} />
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <h3 className="text-xl font-bold text-white">{activeProject.title}</h3>
                <span className={`font-mono text-xs ${activeProject.iconColor} opacity-60`}>
                  {activeProject.year}
                </span>
              </div>

              {activeProject.diagram ? (
                <div className="rounded-xl overflow-hidden border border-white/5 bg-[#080f1e] p-4">
                  <activeProject.diagram />
                </div>
              ) : (
                <div
                  className={`flex items-center justify-center rounded-xl border ${activeProject.border} bg-gradient-to-br ${activeProject.color} h-56`}
                >
                  <p className="text-slate-500 text-sm font-mono">Architecture diagram coming soon</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
