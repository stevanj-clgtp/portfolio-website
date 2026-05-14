const FONT = "'Inter', 'system-ui', sans-serif"

const T = {
  browser:    { fill: '#f8fafc', stroke: '#94a3b8', text: '#334155', sub: '#94a3b8' },
  cloudflare: { fill: '#fff7ed', stroke: '#fb923c', text: '#9a3412', sub: '#f97316' },
  amplify:    { fill: '#fff7ed', stroke: '#fb923c', text: '#9a3412', sub: '#ea580c' },
  nextjs:     { fill: '#f8fafc', stroke: '#64748b', text: '#0f172a', sub: '#64748b' },
  spring:     { fill: '#ecfdf5', stroke: '#4ade80', text: '#14532d', sub: '#16a34a' },
  postgres:   { fill: '#eff6ff', stroke: '#60a5fa', text: '#1e40af', sub: '#3b82f6' },
  powerbi:    { fill: '#fffbeb', stroke: '#fbbf24', text: '#78350f', sub: '#d97706' },
  terraform:  { fill: '#f5f3ff', stroke: '#a78bfa', text: '#4c1d95', sub: '#7c3aed' },
}

const ARR = '#94a3b8'

function Node({ x, y, w, h = 36, label, sub, t }) {
  const cx = x + w / 2
  const cy = y + h / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={t.fill} stroke={t.stroke} strokeWidth={1} />
      {sub ? (
        <>
          <text x={cx} y={cy - 7} textAnchor="middle" dominantBaseline="middle" fill={t.text} fontSize={9.5} fontWeight="600" fontFamily={FONT}>{label}</text>
          <text x={cx} y={cy + 7} textAnchor="middle" dominantBaseline="middle" fill={t.sub} fontSize={7.5} fontFamily={FONT}>{sub}</text>
        </>
      ) : (
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill={t.text} fontSize={9.5} fontWeight="600" fontFamily={FONT}>{label}</text>
      )}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }) {
  const my = (y1 + y2) / 2
  const d = Math.abs(x1 - x2) < 3
    ? `M${x1},${y1} L${x2},${y2}`
    : `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`
  return <path d={d} fill="none" stroke={ARR} strokeWidth={1.3} markerEnd="url(#arr-ec)" />
}

function HArrow({ x1, x2, y }) {
  return <line x1={x1} y1={y} x2={x2} y2={y} stroke={ARR} strokeWidth={1.3} markerEnd="url(#arr-ec)" />
}

function Band({ y, label }) {
  return (
    <>
      <line x1={0} y1={y} x2={680} y2={y} stroke="#e2e8f0" strokeWidth={0.8} />
      <text x={676} y={y - 4} textAnchor="end" fill="#94a3b8" fontSize={7} fontWeight="600" letterSpacing="1.5" fontFamily={FONT}>{label}</text>
    </>
  )
}

export default function EcommerceDiagram() {
  return (
    <svg viewBox="0 0 680 500" className="w-full" style={{ fontFamily: FONT }}>
      <defs>
        <marker id="arr-ec" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill={ARR} />
        </marker>
      </defs>

      <text x={676} y={8} textAnchor="end" fill="#94a3b8" fontSize={7} fontWeight="600" letterSpacing="1.5" fontFamily={FONT}>USER</text>
      <Band y={88}  label="SECURITY" />
      <Band y={178} label="HOSTING" />
      <Band y={268} label="APPLICATION" />
      <Band y={358} label="DATA & ANALYTICS" />
      <Band y={442} label="INFRASTRUCTURE" />

      <Arrow x1={340} y1={46}  x2={340} y2={100} />
      <Arrow x1={340} y1={136} x2={340} y2={190} />
      <Arrow x1={210} y1={226} x2={165} y2={280} />
      <Arrow x1={490} y1={226} x2={490} y2={280} />
      <HArrow x1={275} x2={355} y={298} />
      <Arrow x1={460} y1={316} x2={390} y2={370} />
      <HArrow x1={480} x2={510} y={388} />

      <Node x={265} y={10}  w={150} label="User / Browser"                            t={T.browser} />
      <Node x={140} y={100} w={400} label="Cloudflare Zero Trust" sub="DNS · CDN · secure access" t={T.cloudflare} />
      <Node x={90}  y={190} w={500} label="AWS Amplify"           sub="hosting · deployment · configuration" t={T.amplify} />
      <Node x={55}  y={280} w={220} label="Next.js"               sub="frontend · SSR"             t={T.nextjs} />
      <Node x={355} y={280} w={270} label="Spring Boot + Kotlin"  sub="REST API · backend service" t={T.spring} />
      <Node x={260} y={370} w={220} label="PostgreSQL"            sub="relational database"        t={T.postgres} />
      <Node x={510} y={370} w={160} label="Power BI"              sub="analytics · reports"        t={T.powerbi} />
      <Node x={185} y={454} w={310} label="Terraform"             sub="infrastructure as code"     t={T.terraform} />
    </svg>
  )
}
