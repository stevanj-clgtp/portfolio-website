const FONT = "'Inter', 'system-ui', sans-serif"

const T = {
  browser:   { fill: '#f8fafc', stroke: '#94a3b8', text: '#334155', sub: '#94a3b8' },
  cognito:   { fill: '#eff6ff', stroke: '#60a5fa', text: '#1e40af', sub: '#3b82f6' },
  amplify:   { fill: '#fff7ed', stroke: '#fb923c', text: '#9a3412', sub: '#f97316' },
  fastapi:   { fill: '#ecfdf5', stroke: '#34d399', text: '#065f46', sub: '#10b981' },
  node:      { fill: '#f5f3ff', stroke: '#a78bfa', text: '#4c1d95', sub: '#7c3aed' },
  terminal:  { fill: '#f8fafc', stroke: '#e2e8f0', text: '#94a3b8', sub: '#cbd5e1' },
  badge:     { fill: '#eff6ff', stroke: '#93c5fd', text: '#1d4ed8', sub: '#bfdbfe' },
  openai:    { fill: '#f8fafc', stroke: '#94a3b8', text: '#334155', sub: '#64748b' },
  dynamo:    { fill: '#eff6ff', stroke: '#60a5fa', text: '#1e40af', sub: '#2563eb' },
  terraform: { fill: '#f5f3ff', stroke: '#a78bfa', text: '#4c1d95', sub: '#6d28d9' },
}

const ARR_DARK   = '#94a3b8'
const ARR_PURPLE = '#c4b5fd'

function Node({ x, y, w, h = 34, label, sub, t, labelSize = 9.5 }) {
  const cx = x + w / 2
  const cy = y + h / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={t.fill} stroke={t.stroke} strokeWidth={1} />
      {sub ? (
        <>
          <text x={cx} y={cy - 7} textAnchor="middle" dominantBaseline="middle" fill={t.text} fontSize={labelSize} fontWeight="600" fontFamily={FONT}>{label}</text>
          <text x={cx} y={cy + 7} textAnchor="middle" dominantBaseline="middle" fill={t.sub} fontSize={7.5} fontFamily={FONT}>{sub}</text>
        </>
      ) : (
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill={t.text} fontSize={labelSize} fontWeight="600" fontFamily={FONT}>{label}</text>
      )}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }) {
  const my = (y1 + y2) / 2
  const d = Math.abs(x1 - x2) < 3
    ? `M${x1},${y1} L${x2},${y2}`
    : `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`
  return <path d={d} fill="none" stroke={ARR_DARK} strokeWidth={1.3} markerEnd="url(#arr-ai)" />
}

function HArrow({ x1, x2, y }) {
  return <line x1={x1} y1={y} x2={x2} y2={y} stroke={ARR_PURPLE} strokeWidth={1.3} markerEnd="url(#arr-ai-purple)" />
}

function Band({ y, label }) {
  return (
    <>
      <line x1={0} y1={y} x2={760} y2={y} stroke="#e2e8f0" strokeWidth={0.8} />
      <text x={756} y={y - 4} textAnchor="end" fill="#94a3b8" fontSize={7} fontWeight="600" letterSpacing="1.5" fontFamily={FONT}>{label}</text>
    </>
  )
}

const BADGES = ['HR Screening', 'Advanced Research', 'Marketing Campaign', 'Sales Proposal', 'Competitive Analysis']

export default function AiAgentsDiagram() {
  return (
    <svg viewBox="0 0 760 520" className="w-full" style={{ fontFamily: FONT }}>
      <defs>
        <marker id="arr-ai" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill={ARR_DARK} />
        </marker>
        <marker id="arr-ai-purple" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill={ARR_PURPLE} />
        </marker>
      </defs>

      <text x={756} y={8} textAnchor="end" fill="#94a3b8" fontSize={7} fontWeight="600" letterSpacing="1.5" fontFamily={FONT}>USER</text>
      <Band y={88}  label="AUTH & HOSTING" />
      <Band y={178} label="API LAYER" />
      <Band y={262} label="AI AGENT LAYER · LANGGRAPH" />
      <Band y={418} label="STORAGE & LLM" />
      <Band y={468} label="INFRASTRUCTURE" />

      <Arrow x1={380} y1={44}  x2={150} y2={98} />
      <Arrow x1={380} y1={44}  x2={610} y2={98} />
      <Arrow x1={150} y1={134} x2={330} y2={188} />
      <Arrow x1={610} y1={134} x2={430} y2={188} />
      <Arrow x1={380} y1={224} x2={380} y2={272} />
      <Arrow x1={295} y1={406} x2={175} y2={428} />
      <Arrow x1={630} y1={406} x2={585} y2={428} />

      <HArrow x1={77}  x2={109} y={290} />
      <HArrow x1={209} x2={241} y={290} />
      <HArrow x1={349} x2={381} y={290} />
      <HArrow x1={489} x2={521} y={290} />
      <HArrow x1={629} x2={661} y={290} />

      <Node x={305} y={10}  w={150} label="User / Browser"                       t={T.browser} />
      <Node x={40}  y={98}  w={220} label="AWS Cognito"    sub="authentication"  t={T.cognito} />
      <Node x={500} y={98}  w={220} label="AWS Amplify"    sub="hosting · Next.js" t={T.amplify} />
      <Node x={230} y={188} w={300} label="FastAPI"        sub="agent orchestration · routing" t={T.fastapi} />

      {/* Agent Layer background */}
      <rect x={15} y={268} width={730} height={138} rx={8}
        fill="#fafbff" stroke="#e0e7ff" strokeWidth={1} />
      <text x={30} y={283} fill="#a5b4fc" fontSize={7} fontWeight="600" letterSpacing="1" fontFamily={FONT}>
        LANGGRAPH STATEGRAPH  ·  shared by all agents
      </text>

      <Node x={25}  y={273} w={52}  label="START"        t={T.terminal} />
      <Node x={109} y={273} w={100} label="plan_node"    sub="decompose task"    t={T.node} />
      <Node x={241} y={273} w={108} label="search_node"  sub="retrieve context"  t={T.node} />
      <Node x={381} y={273} w={108} label="analyze_node" sub="reason · decide"   t={T.node} />
      <Node x={521} y={273} w={108} label="scoring_node" sub="score · judge"     t={T.node} />
      <Node x={661} y={273} w={52}  label="END"          t={T.terminal} />

      {BADGES.map((label, i) => (
        <Node key={label} x={25 + i * 143} y={354} w={128} h={26} label={label} t={T.badge} labelSize={8} />
      ))}

      <Node x={50}  y={428} w={250} label="OpenAI / LLM"   sub="search · reasoning"   t={T.openai} />
      <Node x={460} y={428} w={250} label="Amazon DynamoDB" sub="store agent results"  t={T.dynamo} />
      <Node x={205} y={478} w={350} label="Terraform"       sub="infrastructure as code" t={T.terraform} />
    </svg>
  )
}
