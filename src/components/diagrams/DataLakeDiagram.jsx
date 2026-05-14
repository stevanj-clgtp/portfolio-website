const FONT = "'Inter', 'system-ui', sans-serif"

const T = {
  source:   { fill: '#f8fafc', stroke: '#94a3b8', text: '#334155', sub: '#94a3b8' },
  ingest:   { fill: '#eff6ff', stroke: '#60a5fa', text: '#1e40af', sub: '#3b82f6' },
  storage:  { fill: '#ecfdf5', stroke: '#34d399', text: '#065f46', sub: '#10b981' },
  catalog:  { fill: '#eef2ff', stroke: '#818cf8', text: '#3730a3', sub: '#6366f1' },
  spectrum: { fill: '#f5f3ff', stroke: '#a78bfa', text: '#4c1d95', sub: '#7c3aed' },
  redshift: { fill: '#f5f3ff', stroke: '#a78bfa', text: '#4c1d95', sub: '#8b5cf6' },
  bi:       { fill: '#fffbeb', stroke: '#fbbf24', text: '#78350f', sub: '#d97706' },
  ml:       { fill: '#ecfdf5', stroke: '#4ade80', text: '#14532d', sub: '#16a34a' },
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
  return <path d={d} fill="none" stroke={ARR} strokeWidth={1.3} markerEnd="url(#arr-dl)" />
}

function HArrow({ x1, x2, y }) {
  return <line x1={x1} y1={y} x2={x2} y2={y} stroke={ARR} strokeWidth={1.3} markerEnd="url(#arr-dl)" />
}

function Band({ y, label }) {
  return (
    <>
      <line x1={0} y1={y} x2={760} y2={y} stroke="#e2e8f0" strokeWidth={0.8} />
      <text x={756} y={y - 4} textAnchor="end" fill="#94a3b8" fontSize={7} fontWeight="600" letterSpacing="1.5" fontFamily={FONT}>{label}</text>
    </>
  )
}

export default function DataLakeDiagram() {
  return (
    <svg viewBox="0 0 760 535" className="w-full" style={{ fontFamily: FONT }}>
      <defs>
        <marker id="arr-dl" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill={ARR} />
        </marker>
      </defs>

      <Band y={90}  label="INGESTION" />
      <Band y={180} label="STORAGE" />
      <Band y={270} label="PROCESSING" />
      <Band y={360} label="ANALYTICS" />
      <Band y={452} label="CONSUMPTION" />

      <Arrow x1={95}  y1={60}  x2={175} y2={114} />
      <Arrow x1={275} y1={60}  x2={175} y2={114} />
      <Arrow x1={465} y1={60}  x2={465} y2={114} />
      <Arrow x1={657} y1={60}  x2={657} y2={114} />
      <Arrow x1={175} y1={150} x2={90}  y2={204} />
      <Arrow x1={465} y1={150} x2={205} y2={204} />
      <Arrow x1={657} y1={150} x2={310} y2={204} />
      <HArrow x1={381} x2={409} y={222} />
      <Arrow x1={200} y1={240} x2={113} y2={294} />
      <Arrow x1={575} y1={240} x2={600} y2={294} />
      <HArrow x1={206} x2={226} y={312} />
      <Arrow x1={330} y1={330} x2={370} y2={384} />
      <Arrow x1={600} y1={330} x2={390} y2={384} />
      <Arrow x1={380} y1={420} x2={200} y2={474} />
      <Arrow x1={380} y1={420} x2={490} y2={474} />

      <Node x={20}  y={24} w={150} label="API"         t={T.source} />
      <Node x={200} y={24} w={150} label="Oracle DB"   t={T.source} />
      <Node x={390} y={24} w={150} label="Postgres DB" t={T.source} />
      <Node x={575} y={24} w={165} label="ERP System"  t={T.source} />
      <Node x={20}  y={114} w={310} label="EC2 / Java App"  sub="API · Oracle"  t={T.ingest} />
      <Node x={390} y={114} w={150} label="AWS DMS"         sub="Postgres"       t={T.ingest} />
      <Node x={575} y={114} w={165} label="ECS Containers"  sub="ERP / Legacy"  t={T.ingest} />
      <Node x={20}  y={204} w={380} label="S3 — Landing Zone"  sub="raw · unprocessed"  t={T.storage} />
      <Node x={410} y={204} w={330} label="AWS Glue Catalog"   sub="external tables"     t={T.catalog} />
      <Node x={20}  y={294} w={185} label="AWS Glue Jobs"        t={T.catalog} />
      <Node x={226} y={294} w={204} label="S3 — Production Zone" sub="curated · enriched"       t={T.storage} />
      <Node x={460} y={294} w={280} label="Redshift Spectrum"    sub="queries S3 via Catalog"   t={T.spectrum} />
      <Node x={225} y={384} w={310} label="Amazon Redshift" sub="analytics warehouse" t={T.redshift} />
      <Node x={80}  y={474} w={230} label="Power BI"         sub="dataflows · reports" t={T.bi} />
      <Node x={370} y={474} w={230} label="Amazon SageMaker" sub="ML workloads"         t={T.ml} />
    </svg>
  )
}
