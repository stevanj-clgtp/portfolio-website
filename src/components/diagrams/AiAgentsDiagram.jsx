const T = {
  browser:   { fill: '#0d1626', stroke: '#475569', text: '#94a3b8', sub: '#334155' },
  cognito:   { fill: '#0a1520', stroke: '#38bdf8', text: '#7dd3fc', sub: '#0369a1' },
  amplify:   { fill: '#1a0a00', stroke: '#fb923c', text: '#fde68a', sub: '#92400e' },
  fastapi:   { fill: '#042e1e', stroke: '#34d399', text: '#6ee7b7', sub: '#059669' },
  node:      { fill: '#160a34', stroke: '#a78bfa', text: '#ddd6fe', sub: '#7c3aed' },
  terminal:  { fill: '#0f1729', stroke: '#334155', text: '#475569', sub: '#1e293b' },
  badge:     { fill: '#0f1623', stroke: '#312e81', text: '#818cf8', sub: '#1e1b4b' },
  openai:    { fill: '#0d1117', stroke: '#94a3b8', text: '#cbd5e1', sub: '#475569' },
  dynamo:    { fill: '#0a1628', stroke: '#60a5fa', text: '#93c5fd', sub: '#1d4ed8' },
  terraform: { fill: '#130a28', stroke: '#818cf8', text: '#c7d2fe', sub: '#4338ca' },
}

function Node({ x, y, w, h = 34, label, sub, t }) {
  const cx = x + w / 2
  const cy = y + h / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5} fill={t.fill} stroke={t.stroke} strokeWidth={0.8} />
      {sub ? (
        <>
          <text x={cx} y={cy - 7} textAnchor="middle" dominantBaseline="middle" fill={t.text} fontSize={9.5} fontWeight="600">{label}</text>
          <text x={cx} y={cy + 7} textAnchor="middle" dominantBaseline="middle" fill={t.sub} fontSize={7.5}>{sub}</text>
        </>
      ) : (
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill={t.text} fontSize={9.5} fontWeight="600">{label}</text>
      )}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }) {
  const my = (y1 + y2) / 2
  const d = Math.abs(x1 - x2) < 3
    ? `M${x1},${y1} L${x2},${y2}`
    : `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`
  return <path d={d} fill="none" stroke="#1e2d40" strokeWidth={1.2} markerEnd="url(#arr-ai)" />
}

function HArrow({ x1, x2, y }) {
  return <line x1={x1} y1={y} x2={x2} y2={y} stroke="#2d1a5e" strokeWidth={1.2} markerEnd="url(#arr-ai-purple)" />
}

function Band({ y, label }) {
  return (
    <>
      <line x1={0} y1={y} x2={760} y2={y} stroke="#0f1e30" strokeWidth={0.6} />
      <text x={756} y={y - 3} textAnchor="end" fill="#1e3352" fontSize={7} fontWeight="700" letterSpacing="1.5">{label}</text>
    </>
  )
}

const BADGES = ['HR Screening', 'Advanced Research', 'Marketing Campaign', 'Sales Proposal',  'Competitive Analysis']

export default function AiAgentsDiagram() {
  return (
    <svg
      viewBox="0 0 760 520"
      className="w-full"
      style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
    >
      <defs>
        <marker id="arr-ai" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill="#1e2d40" />
        </marker>
        <marker id="arr-ai-purple" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill="#2d1a5e" />
        </marker>
      </defs>

      {/* Section bands */}
      <text x={756} y={8} textAnchor="end" fill="#1e3352" fontSize={7} fontWeight="700" letterSpacing="1.5">USER</text>
      <Band y={88}  label="AUTH & HOSTING" />
      <Band y={178} label="API LAYER" />
      <Band y={262} label="AI AGENT LAYER · LANGGRAPH" />
      <Band y={418} label="STORAGE & LLM" />
      <Band y={468} label="INFRASTRUCTURE" />

      {/* ── External arrows ─────────────────────────── */}

      {/* User → Cognito + Amplify */}
      <Arrow x1={380} y1={44}  x2={150} y2={98} />
      <Arrow x1={380} y1={44}  x2={610} y2={98} />

      {/* Cognito + Amplify → FastAPI */}
      <Arrow x1={150} y1={134} x2={330} y2={188} />
      <Arrow x1={610} y1={134} x2={430} y2={188} />

      {/* FastAPI → Agent Layer */}
      <Arrow x1={380} y1={224} x2={380} y2={272} />

      {/* Agent layer → OpenAI (search_node calls LLM) */}
      <Arrow x1={295} y1={406} x2={175} y2={428} />

      {/* Agent layer → DynamoDB (scoring→END writes results) */}
      <Arrow x1={630} y1={406} x2={585} y2={428} />

      {/* ── LangGraph internal flow ──────────────────── */}
      <HArrow x1={77}  x2={109} y={290} />
      <HArrow x1={209} x2={241} y={290} />
      <HArrow x1={349} x2={381} y={290} />
      <HArrow x1={489} x2={521} y={290} />
      <HArrow x1={629} x2={661} y={290} />

      {/* ── Main nodes ──────────────────────────────── */}

      {/* User */}
      <Node x={305} y={10}  w={150} label="User / Browser"                       t={T.browser} />

      {/* Auth & Hosting */}
      <Node x={40}  y={98}  w={220} label="AWS Cognito"    sub="authentication"  t={T.cognito} />
      <Node x={500} y={98}  w={220} label="AWS Amplify"    sub="hosting · Next.js" t={T.amplify} />

      {/* API */}
      <Node x={230} y={188} w={300} label="FastAPI"        sub="agent orchestration · routing" t={T.fastapi} />

      {/* Agent Layer background */}
      <rect x={15} y={268} width={730} height={138} rx={7}
        fill="rgba(22,10,52,0.5)" stroke="#312e81" strokeWidth={0.6} />
      <text x={30} y={283} fill="#3730a3" fontSize={7} fontWeight="700" letterSpacing="1">
        LANGGRAPH STATEGRAPH  ·  shared by all agents
      </text>

      {/* LangGraph nodes */}
      <Node x={25}  y={273} w={52}  label="START"        t={T.terminal} />
      <Node x={109} y={273} w={100} label="plan_node"    sub="decompose task"    t={T.node} />
      <Node x={241} y={273} w={108} label="search_node"  sub="retrieve context"  t={T.node} />
      <Node x={381} y={273} w={108} label="analyze_node" sub="reason · decide"   t={T.node} />
      <Node x={521} y={273} w={108} label="scoring_node" sub="score · judge"     t={T.node} />
      <Node x={661} y={273} w={52}  label="END"          t={T.terminal} />

      {/* Agent type badges */}
      {BADGES.map((label, i) => {
        const x = 25 + i * 143
        return (
          <Node key={label} x={x} y={354} w={128} h={26} label={label} t={T.badge} />
        )
      })}

      {/* Storage & LLM */}
      <Node x={50}  y={428} w={250} label="OpenAI / LLM"  sub="search · reasoning"   t={T.openai} />
      <Node x={460} y={428} w={250} label="Amazon DynamoDB" sub="store agent results" t={T.dynamo} />

      {/* Infrastructure */}
      <Node x={205} y={478} w={350} label="Terraform" sub="infrastructure as code" t={T.terraform} />
    </svg>
  )
}
