import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  Cloud, Database, Brain, BarChart2, GitBranch,
  Terminal, Shield, Bot, Trophy, Users, Layers,
} from 'lucide-react'

// ─── Radar chart ───────────────────────────────────────────────
const SZ = 380
const CX = SZ / 2
const CY = SZ / 2
const R  = 115
const LR = 150
const LEVELS = 4

const radarData = [
  { label: 'AWS Cloud',        years: 6.5 },
  { label: 'Azure Cloud',      years: 2.5 },
  { label: 'Data Eng.',        years: 6   },
  { label: 'ML',               years: 3   },
  { label: 'Analytics',        years: 8   },
  { label: 'AI Agents',        years: 2   },
  { label: 'DevOps',           years: 4   },
  { label: 'Governance',       years: 6   },
  { label: 'Orchestration',    years: 4   },
  { label: 'Team Management',  years: 4   },
]

const MAX_YEARS = Math.max(...radarData.map(d => d.years))
const radar = radarData.map(d => ({ ...d, value: d.years / MAX_YEARS }))
const N = radar.length

function ax(i) { return (Math.PI * 2 * i) / N - Math.PI / 2 }
function pt(val, i, r = R) {
  const a = ax(i)
  return { x: CX + val * r * Math.cos(a), y: CY + val * r * Math.sin(a) }
}
function toPath(pts) {
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + 'Z'
}
const dataPoly = toPath(radar.map((d, i) => pt(d.value, i)))
const rings = Array.from({ length: LEVELS }, (_, l) =>
  toPath(Array.from({ length: N }, (_, i) => pt((l + 1) / LEVELS, i)))
)
const axes = Array.from({ length: N }, (_, i) => ({ from: pt(0, i), to: pt(1, i) }))
const ringLabels = Array.from({ length: LEVELS }, (_, l) =>
  Math.round(((l + 1) / LEVELS) * MAX_YEARS)
)

function anchor(i) {
  const c = Math.cos(ax(i))
  if (c > 0.25) return 'start'
  if (c < -0.25) return 'end'
  return 'middle'
}
function dy(i) {
  const s = Math.sin(ax(i))
  if (s < -0.25) return -10
  if (s > 0.25) return 18
  return 5
}

// ─── Skill categories ──────────────────────────────────────────
const categories = [
  {
    label: 'Leadership & Strategy',
    icon: Users,
    color: '#1d4ed8',
    tags: ['Team Building','Data Strategy','Roadmap Definition','Stakeholder Management','Mentoring'],
  },
  {
    label: 'AWS Services',
    icon: Cloud,
    color: '#f97316',
    tags: ['S3','Glue','Redshift','Kinesis','Lambda','Athena','EMR','AWS Amplify',
      'Step Functions','RDS','DynamoDB','SageMaker','ECS','EKS','IAM','CloudWatch','SNS / SQS'],
  },
  {
    label: 'Azure',
    icon: Layers,
    color: '#3b82f6',
    tags: ['Azure Data Factory','Synapse Analytics','Blob Storage','Azure SQL','Azure DevOps'],
  },
  {
    label: 'Data Engineering',
    icon: Database,
    color: '#06b6d4',
    tags: ['Python','SQL','ETL / ELT','Databricks','dbt','Data Modeling','Apache Spark','Kafka'],
  },
  {
    label: 'Analytics & BI',
    icon: BarChart2,
    color: '#8b5cf6',
    tags: ['Power BI','SSRS','Executive Dashboards','KPI Design','RLS/OLS','DAX','Data Visualization'],
  },
  {
    label: 'Orchestration',
    icon: GitBranch,
    color: '#10b981',
    tags: ['Apache Airflow','Batch Processing','Real-Time Processing','Event-Driven Pipelines'],
  },
  {
    label: 'DevOps & Infrastructure',
    icon: Terminal,
    color: '#eab308',
    tags: ['Terraform','CI/CD','Docker','ECS Tasks','EKS Cron Jobs','GitHub Actions','AWS CDK','IaC'],
  },
  {
    label: 'Machine Learning',
    icon: Brain,
    color: '#ec4899',
    tags: ['Predictive Models','Customer Segmentation','Churn Prediction',
      'LTV Modeling','Recommender Systems','Risk Classification','Odds Modeling'],
  },
  {
    label: 'AI Agents & LLM',
    icon: Bot,
    color: '#6366f1',
    tags: ['LangGraph','CrewAI','Multi-Agent Orchestration',
      'Agentic Workflows','RAG Pipelines','LLM Integration'],
  },
  {
    label: 'Data Governance',
    icon: Shield,
    color: '#14b8a6',
    tags: ['Data Governance','Security & Compliance','Data Lineage',
      'End-to-End Architecture','DR & BCP'],
  },
  {
    label: 'Gambling Domain',
    icon: Trophy,
    color: '#f97316',
    tags: ['Sportsbook','Casino','Virtual Games','Slots',
      'Trading & Risk','Odds Management','Cash Out Systems'],
  },
]

// ─── Component ─────────────────────────────────────────────────
export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-14 text-slate-900">
            Areas of <span className="text-gradient">Expertise</span>
          </h2>

          {/* ── Radar chart ── */}
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
            <div className="shrink-0 w-full max-w-sm lg:max-w-none lg:w-[420px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4 overflow-visible"
              >
                <svg
                  viewBox={`-60 -15 ${SZ + 75} ${SZ + 30}`}
                  className="w-full"
                  overflow="visible"
                >
                  <defs>
                    <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.20" />
                      <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.06" />
                    </radialGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {rings.map((d, i) => (
                    <motion.path
                      key={i} d={d} fill="none"
                      stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="3 4"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                    />
                  ))}

                  {axes.map((a, i) => (
                    <motion.line
                      key={i}
                      x1={a.from.x} y1={a.from.y} x2={a.to.x} y2={a.to.y}
                      stroke="rgba(0,0,0,0.06)" strokeWidth="1"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    />
                  ))}

                  <motion.path
                    d={dataPoly}
                    fill="url(#radarFill)"
                    stroke="rgba(37,99,235,0.65)"
                    strokeWidth="1.5"
                    filter="url(#glow)"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
                    style={{ transformOrigin: `${CX}px ${CY}px` }}
                  />

                  {ringLabels.map((yr, l) => {
                    const p = pt((l + 1) / LEVELS, 2)
                    return (
                      <motion.text
                        key={l} x={p.x + 4} y={p.y}
                        fill="#94a3b8" fontSize="9"
                        fontFamily="Inter, sans-serif"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        {yr}yr
                      </motion.text>
                    )
                  })}

                  {radar.map((d, i) => {
                    const p = pt(d.value, i)
                    return (
                      <motion.circle
                        key={i} cx={p.x} cy={p.y} r={4}
                        fill="#2563eb" filter="url(#glow)"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
                        style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                      />
                    )
                  })}

                  {radar.map((d, i) => {
                    const lp = pt(1, i, LR)
                    return (
                      <motion.text
                        key={i} x={lp.x} y={lp.y} dy={dy(i)}
                        textAnchor={anchor(i)}
                        fill="#334155" fontSize="11"
                        fontFamily="Inter, sans-serif" fontWeight="500"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.9 + i * 0.04, duration: 0.3 }}
                      >
                        {d.label}
                      </motion.text>
                    )
                  })}
                </svg>
              </motion.div>
            </div>

            {/* Legend bars */}
            <div className="flex-1 grid grid-cols-2 gap-3">
              {radar.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-xs font-semibold text-blue-600 w-8 text-right shrink-0 tabular-nums">
                    {d.years}yr
                  </div>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${d.value * 100}%` } : {}}
                      transition={{ delay: 0.5 + i * 0.06, duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 w-20 shrink-0">{d.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Category cards ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.045 }}
                  className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                  style={{ borderTop: `2px solid ${cat.color}` }}
                >
                  <Icon
                    size={64}
                    className="absolute -bottom-2 -right-2 opacity-[0.05] group-hover:opacity-[0.09] transition-opacity"
                    style={{ color: cat.color }}
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={14} style={{ color: cat.color }} />
                    <h3 className="text-xs tracking-widest uppercase font-semibold" style={{ color: cat.color }}>
                      {cat.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] rounded-md text-slate-600 border border-slate-200 bg-slate-50 hover:text-slate-900 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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
