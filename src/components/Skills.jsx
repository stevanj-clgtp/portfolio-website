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
const R = 115
const LR = 150   // label radius
const LEVELS = 4

// Edit `years` to adjust each axis — value is derived automatically
const radarData = [
  { label: 'AWS Cloud',       years: 6.5  },
  { label: 'Azure Cloud',       years: 2.5  },
  { label: 'Data Eng.',   years: 6 },
  { label: 'ML',          years: 3  },
  { label: 'Analytics',   years: 8 },
  { label: 'AI Agents',   years: 2  },
  { label: 'DevOps',      years: 4  },
  { label: 'Governance',  years: 6  },
  { label: 'Orchestration',  years: 4  },
  { label: 'Team Management',      years: 4 },
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
    label: 'AWS Services',
    icon: Cloud,
    color: '#f97316',
    tags: ['S3', 'Glue', 'Redshift', 'Kinesis', 'Lambda', 'Athena', 'EMR', 'AWS Cloudwatch', "AWS Amplify",
      'Step Functions', 'RDS', 'DynamoDB', 'SageMaker', 'ECS', 'EKS','IAM', 'Identity Center', 'CloudWatch', 'SNS / SQS'],
  },
  {
    label: 'Azure',
    icon: Layers,
    color: '#3b82f6',
    tags: ['Azure Data Factory', 'Synapse Analytics', 'Blob Storage', 'Azure SQL', 'Azure DevOps'],
  },
  {
    label: 'Data Engineering',
    icon: Database,
    color: '#22d3ee',
    tags: ['Python', 'SQL', 'ETL / ELT', 'Data Bricks', 'dbt', 'Data Modeling', 'Apache Spark', 'Kafka'],
  },
  {
    label: 'Analytics & BI',
    icon: BarChart2,
    color: '#a78bfa',
    tags: ['Power BI', 'SSRS', 'Executive Dashboards', 'KPI Design', "RLS/OLS", 'DAX', 'Data Visualization'],
  },
  {
    label: 'Orchestration',
    icon: GitBranch,
    color: '#34d399',
    tags: ['Apache Airflow', 'Batch Processing', 'Real-Time Processing', 'Event-Driven Pipelines'],
  },
  {
    label: 'DevOps & Infrastructure',
    icon: Terminal,
    color: '#facc15',
    tags: ['Terraform', 'CI/CD', 'Docker', 'ECS Tasks', 'EKS Cron Jobs',
      'GitHub Actions', 'AWS CDK', 'Infrastructure as Code'],
  },
  {
    label: 'Machine Learning',
    icon: Brain,
    color: '#f472b6',
    tags: ['Predictive Models', 'Customer Segmentation', 'Churn Prediction',
      'LTV Modeling', 'Recommender Systems', 'Risk Classification',
      'Odds Modeling', 'Behavioral Analytics'],
  },
  {
    label: 'AI Agents & LLM',
    icon: Bot,
    color: '#818cf8',
    tags: ['LangGraph', 'CrewAI', 'Multi-Agent Orchestration',
      'Agentic Workflows', 'RAG Pipelines', 'LLM Integration',
      'Autonomous Decision Systems'],
  },
  {
    label: 'Data Governance',
    icon: Shield,
    color: '#2dd4bf',
    tags: ['Data Governance', 'Security & Compliance', 'Data Lineage',
      'End-to-End Architecture', 'DR & BCP'],
  },
  {
    label: 'Gambling Domain',
    icon: Trophy,
    color: '#fb923c',
    tags: ['Sportsbook', 'Casino', 'Virtual Games', 'Slots',
      'Trading & Risk', 'Odds Management', 'Cash Out Systems'],
  },
  {
    label: 'Leadership',
    icon: Users,
    color: '#94a3b8',
    tags: ['Team Building', 'Data Strategy', 'Roadmap Definition',
      'Stakeholder Management', 'Mentoring'],
  },
]

// ─── Component ─────────────────────────────────────────────────
export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-14">
            Tech <span className="text-gradient">Stack</span>
          </h2>

          {/* ── Radar chart ── */}
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
            <div className="shrink-0 w-full max-w-sm lg:max-w-none lg:w-[420px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-4 overflow-visible"
              >
                <svg
                  viewBox={`-60 -15 ${SZ + 75} ${SZ + 30}`}
                  className="w-full"
                  overflow="visible"
                >
                  <defs>
                    <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
                    </radialGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Grid rings */}
                  {rings.map((d, i) => (
                    <motion.path
                      key={i}
                      d={d}
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1"
                      strokeDasharray="3 4"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                    />
                  ))}

                  {/* Axis lines */}
                  {axes.map((a, i) => (
                    <motion.line
                      key={i}
                      x1={a.from.x}
                      y1={a.from.y}
                      x2={a.to.x}
                      y2={a.to.y}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    />
                  ))}

                  {/* Data polygon */}
                  <motion.path
                    d={dataPoly}
                    fill="url(#radarFill)"
                    stroke="rgba(34,211,238,0.7)"
                    strokeWidth="1.5"
                    filter="url(#glow)"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
                    style={{ transformOrigin: `${CX}px ${CY}px` }}
                  />

                  {/* Ring year labels (bottom-right axis) */}
                  {ringLabels.map((yr, l) => {
                    const p = pt((l + 1) / LEVELS, 2)
                    return (
                      <motion.text
                        key={l}
                        x={p.x + 4}
                        y={p.y}
                        fill="rgba(100,116,139,0.7)"
                        fontSize="9"
                        fontFamily="JetBrains Mono, monospace"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        {yr}yr
                      </motion.text>
                    )
                  })}

                  {/* Data point dots */}
                  {radar.map((d, i) => {
                    const p = pt(d.value, i)
                    return (
                      <motion.circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r={4}
                        fill="#22d3ee"
                        filter="url(#glow)"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
                        style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                      />
                    )
                  })}

                  {/* Labels */}
                  {radar.map((d, i) => {
                    const lp = pt(1, i, LR)
                    return (
                      <motion.text
                        key={i}
                        x={lp.x}
                        y={lp.y}
                        dy={dy(i)}
                        textAnchor={anchor(i)}
                        fill="rgba(148,163,184,0.9)"
                        fontSize="11"
                        fontFamily="Inter, sans-serif"
                        fontWeight="500"
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

            {/* Legend / radar description */}
            <div className="flex-1 grid grid-cols-2 gap-3">
              {radar.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-xs font-mono text-cyan-400/80 w-8 text-right shrink-0 tabular-nums">
                    {d.years}yr
                  </div>
                  <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${d.value * 100}%` } : {}}
                      transition={{ delay: 0.5 + i * 0.06, duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="text-xs text-slate-400 w-20 shrink-0">{d.label}</div>
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
                  className="relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors group"
                  style={{ borderTop: `2px solid ${cat.color}30` }}
                >
                  {/* Watermark icon */}
                  <Icon
                    size={72}
                    className="absolute -bottom-3 -right-3 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                    style={{ color: cat.color }}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={14} style={{ color: cat.color }} />
                    <h3
                      className="text-xs font-mono tracking-widest uppercase font-semibold"
                      style={{ color: cat.color }}
                    >
                      {cat.label}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] rounded-md text-slate-400 border border-white/5 bg-white/[0.03] hover:text-slate-200 transition-colors"
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
