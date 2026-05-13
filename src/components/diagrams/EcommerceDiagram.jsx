const T = {
  browser:    { fill: '#0d1626', stroke: '#475569', text: '#94a3b8',  sub: '#334155' },
  cloudflare: { fill: '#1c1000', stroke: '#f97316', text: '#fed7aa',  sub: '#9a3412' },
  amplify:    { fill: '#1a0a00', stroke: '#fb923c', text: '#fde68a',  sub: '#92400e' },
  nextjs:     { fill: '#0d1117', stroke: '#94a3b8', text: '#e2e8f0',  sub: '#475569' },
  spring:     { fill: '#021a08', stroke: '#4ade80', text: '#86efac',  sub: '#166534' },
  postgres:   { fill: '#0a1628', stroke: '#60a5fa', text: '#93c5fd',  sub: '#1d4ed8' },
  powerbi:    { fill: '#181100', stroke: '#f59e0b', text: '#fcd34d',  sub: '#92400e' },
  terraform:  { fill: '#130a28', stroke: '#818cf8', text: '#c7d2fe',  sub: '#4338ca' },
}

function Node({ x, y, w, h = 36, label, sub, t }) {
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
  return <path d={d} fill="none" stroke="#1e2d40" strokeWidth={1.2} markerEnd="url(#arr-ec)" />
}

function HArrow({ x1, x2, y }) {
  return <line x1={x1} y1={y} x2={x2} y2={y} stroke="#1e2d40" strokeWidth={1.2} markerEnd="url(#arr-ec)" />
}

function Band({ y, label }) {
  return (
    <>
      <line x1={0} y1={y} x2={680} y2={y} stroke="#0f1e30" strokeWidth={0.6} />
      <text x={676} y={y - 3} textAnchor="end" fill="#1e3352" fontSize={7} fontWeight="700" letterSpacing="1.5">{label}</text>
    </>
  )
}

export default function EcommerceDiagram() {
  return (
    <svg
      viewBox="0 0 680 500"
      className="w-full"
      style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
    >
      <defs>
        <marker id="arr-ec" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill="#1e2d40" />
        </marker>
      </defs>

      {/* Section bands */}
      <text x={676} y={8} textAnchor="end" fill="#1e3352" fontSize={7} fontWeight="700" letterSpacing="1.5">USER</text>
      <Band y={88}  label="SECURITY" />
      <Band y={178} label="HOSTING" />
      <Band y={268} label="APPLICATION" />
      <Band y={358} label="DATA & ANALYTICS" />
      <Band y={442} label="INFRASTRUCTURE" />

      {/* ── Arrows ─────────────────────────────────── */}

      {/* User → Cloudflare */}
      <Arrow x1={340} y1={46}  x2={340} y2={100} />

      {/* Cloudflare → Amplify */}
      <Arrow x1={340} y1={136} x2={340} y2={190} />

      {/* Amplify → Next.js (left branch) */}
      <Arrow x1={210} y1={226} x2={165} y2={280} />

      {/* Amplify → Spring Boot (right branch, same cx=490) */}
      <Arrow x1={490} y1={226} x2={490} y2={280} />

      {/* Next.js → Spring Boot (API calls) */}
      <HArrow x1={275} x2={355} y={298} />

      {/* Spring Boot → PostgreSQL */}
      <Arrow x1={460} y1={316} x2={390} y2={370} />

      {/* Spring Boot → Power BI */}
      <Arrow x1={530} y1={316} x2={580} y2={370} />

      {/* ── Nodes ──────────────────────────────────── */}

      {/* User */}
      <Node x={265} y={10}  w={150} label="User / Browser"                            t={T.browser} />

      {/* Security */}
      <Node x={140} y={100} w={400} label="Cloudflare Zero Trust" sub="DNS · CDN · secure access" t={T.cloudflare} />

      {/* Hosting */}
      <Node x={90}  y={190} w={500} label="AWS Amplify"           sub="hosting · deployment · configuration" t={T.amplify} />

      {/* Application */}
      <Node x={55}  y={280} w={220} label="Next.js"               sub="frontend · SSR"             t={T.nextjs} />
      <Node x={355} y={280} w={270} label="Spring Boot + Kotlin"  sub="REST API · backend service" t={T.spring} />

      {/* Data */}
      <Node x={260} y={370} w={220} label="PostgreSQL"            sub="relational database"        t={T.postgres} />
      <Node x={510} y={370} w={160} label="Power BI"              sub="analytics · reports"        t={T.powerbi} />

      {/* Infrastructure */}
      <Node x={185} y={454} w={310} label="Terraform"             sub="infrastructure as code"     t={T.terraform} />
    </svg>
  )
}
