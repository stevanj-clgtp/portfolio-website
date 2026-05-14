import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, Layers, Brain, Bot, ShoppingCart, X } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import DataLakeDiagram from './diagrams/DataLakeDiagram'
import EcommerceDiagram from './diagrams/EcommerceDiagram'
import AiAgentsDiagram from './diagrams/AiAgentsDiagram'
import RecommendationDiagram from './diagrams/RecommendationDiagram'

const projects = [
  {
    year: '2023',
    title: 'Data Lake',
    description:
      'Migrated from on-premise infrastructure to an AWS-based Data Lake, enabling scalable analytics, real-time processing, and ML experimentation across Sportsbook, Casino, Virtual Games, and Slot operations.',
    tech: ['CloudFormation','AWS EC2','AWS ECS','AWS DMS','AWS Lambda','AWS S3','AWS Glue','Redshift','Apache Spark','Java','Python','SQL'],
    icon: Database,
    accent: 'blue',
    diagram: DataLakeDiagram,
  },
  {
    year: '2025',
    title: 'Data Lakehouse',
    description:
      'Designed and built a modern Data Lakehouse architecture unifying batch and streaming workloads, enabling self-serve analytics and ML pipelines across the entire data platform.',
    tech: ['Databricks','Delta Lake','Apache Spark','dbt','AWS','Python'],
    icon: Layers,
    accent: 'indigo',
  },
  {
    year: '2024',
    title: 'Recommendation System',
    description:
      'ML-driven personalization engine delivering real-time content and offer recommendations to players based on behavioral patterns, LTV segmentation, and collaborative filtering.',
    tech: ['Python','PyTorch','Apache Spark','Kafka','Redis','FastAPI'],
    icon: Brain,
    accent: 'violet',
    diagram: RecommendationDiagram,
  },
  {
    year: '2026',
    title: 'AI Agents',
    description:
      'Designed and implemented multi-agent AI systems for personalization, recommendation, and operational optimization using LangGraph and CrewAI orchestration frameworks.',
    tech: ['LangGraph','CrewAI','Python','FastAPI','OpenAI','LangChain','Next.js','Amplify','Cognito','DynamoDB','Terraform'],
    diagram: AiAgentsDiagram,
    icon: Bot,
    accent: 'sky',
  },
  {
    year: '2025',
    title: 'Ecommerce App',
    description:
      'Full-stack ecommerce application with product catalog, cart management, payment processing, and real-time inventory tracking.',
    tech: ['AWS Amplify','Next.js','Spring Boot','Kotlin','PostgreSQL','Terraform','Tailwind CSS','Python','Power BI'],
    diagram: EcommerceDiagram,
    icon: ShoppingCart,
    accent: 'emerald',
  },
]

const accentMap = {
  blue:    { border: 'border-blue-200',   bg: 'bg-blue-50',    icon: 'text-blue-600',   tag: 'bg-blue-50 text-blue-700 border-blue-200',    badge: 'bg-blue-100 text-blue-800' },
  indigo:  { border: 'border-indigo-200', bg: 'bg-indigo-50',  icon: 'text-indigo-600', tag: 'bg-indigo-50 text-indigo-700 border-indigo-200', badge: 'bg-indigo-100 text-indigo-800' },
  violet:  { border: 'border-violet-200', bg: 'bg-violet-50',  icon: 'text-violet-600', tag: 'bg-violet-50 text-violet-700 border-violet-200', badge: 'bg-violet-100 text-violet-800' },
  sky:     { border: 'border-sky-200',    bg: 'bg-sky-50',     icon: 'text-sky-600',    tag: 'bg-sky-50 text-sky-700 border-sky-200',          badge: 'bg-sky-100 text-sky-800' },
  emerald: { border: 'border-emerald-200',bg: 'bg-emerald-50', icon: 'text-emerald-600',tag: 'bg-emerald-50 text-emerald-700 border-emerald-200',badge: 'bg-emerald-100 text-emerald-800' },
}

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
    <section id="projects" className="py-28 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">Work</span>
          <div className="flex items-end justify-between mt-3 mb-12 flex-wrap gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Strategic <span className="text-gradient">Initiatives</span>
            </h2>
            <div className="flex gap-2">
              {SORT_OPTIONS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSort(key)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                    sort === key
                      ? 'border-blue-500 text-blue-700 bg-blue-50'
                      : 'border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400'
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
              const a = accentMap[project.accent]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex flex-col p-6 rounded-2xl border ${a.border} bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${a.bg} ${a.icon}`}>
                      <Icon size={18} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${a.badge}`}>
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${a.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.diagram ? (
                    <button
                      onClick={() => setActiveProject(project)}
                      className={`mt-auto text-xs font-semibold ${a.icon} hover:opacity-80 transition-opacity text-left`}
                    >
                      View Architecture →
                    </button>
                  ) : (
                    <span className="mt-auto text-xs text-slate-300 text-left">Architecture coming soon</span>
                  )}
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
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full ${activeProject.diagram ? 'max-w-4xl' : 'max-w-2xl'} rounded-2xl border ${accentMap[activeProject.accent].border} bg-white shadow-2xl p-8 max-h-[90vh] overflow-y-auto`}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={18} />
              </button>

              <div className={`${accentMap[activeProject.accent].icon} mb-3`}>
                <activeProject.icon size={22} />
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <h3 className="text-xl font-bold text-slate-900">{activeProject.title}</h3>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${accentMap[activeProject.accent].badge}`}>
                  {activeProject.year}
                </span>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-4">
                <activeProject.diagram />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
