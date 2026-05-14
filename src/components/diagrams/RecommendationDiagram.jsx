const FONT = "'Inter', 'system-ui', sans-serif"

const T = {
  input:  { fill: '#eff6ff', stroke: '#93c5fd', title: '#1e293b', bullet: '#475569', bar: '#3b82f6' },
  prep:   { fill: '#ecfdf5', stroke: '#6ee7b7', title: '#1e293b', bullet: '#475569', bar: '#10b981' },
  cand:   { fill: '#fffbeb', stroke: '#fde68a', title: '#1e293b', bullet: '#475569', bar: '#f59e0b' },
  merge:  { fill: '#fff1f2', stroke: '#fda4af', title: '#1e293b', bullet: '#475569', bar: '#ef4444' },
  feat:   { fill: '#f5f3ff', stroke: '#c4b5fd', title: '#1e293b', bullet: '#475569', bar: '#8b5cf6' },
  rank:   { fill: '#fff7ed', stroke: '#fdba74', title: '#1e293b', bullet: '#475569', bar: '#f97316' },
  infer:  { fill: '#f0fdfa', stroke: '#99f6e4', title: '#1e293b', bullet: '#475569', bar: '#14b8a6' },
  final:  { fill: '#fdf4ff', stroke: '#f0abfc', title: '#1e293b', bullet: '#475569', bar: '#a855f7' },
}

const ARROW  = '#94a3b8'
const FLOW   = '#3b82f6'

function StageBox({ x, y, w, h, title, items, t }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={t.fill} stroke={t.stroke} strokeWidth={1} />
      {/* colored accent bar on left edge */}
      <rect x={x} y={y + 6} width={3} height={h - 12} rx={1.5} fill={t.bar} opacity={0.9} />
      {/* title */}
      <text x={x + 14} y={y + 17} fill={t.title} fontSize={9.5} fontWeight="700" fontFamily={FONT}>{title}</text>
      {/* separator */}
      <line x1={x + 12} y1={y + 24} x2={x + w - 10} y2={y + 24} stroke={t.stroke} strokeWidth={0.5} />
      {/* bullet items */}
      {items.map((item, i) => (
        <text key={i} x={x + 14} y={y + 37 + i * 15} fill={t.bullet} fontSize={7.5} fontFamily={FONT}>
          {item}
        </text>
      ))}
    </g>
  )
}

function HArrow({ x1, x2, y }) {
  return (
    <line
      x1={x1} y1={y} x2={x2} y2={y}
      stroke={ARROW} strokeWidth={1.2}
      markerEnd="url(#arr-rec)"
    />
  )
}

const W = 162, H = 148, GAP = 22
const XS = [20, 20 + W + GAP, 20 + 2 * (W + GAP), 20 + 3 * (W + GAP)]
const R1Y = 28, R2Y = 290
const R1B = R1Y + H
const CY1 = R1Y + H / 2
const CY2 = R2Y + H / 2

const BOXES = [
  {
    t: 'input', title: 'Input Data',
    items: ['Historical player bets', 'Event and market data', 'Brand & sport context', 'Bet amount and odds', 'Event timing & status'],
  },
  {
    t: 'prep', title: 'Data Preparation',
    items: ['Define item as item + market', 'Aggregate player-item history', 'Build train/test split', 'Prepare interaction dataset'],
  },
  {
    t: 'cand', title: 'Candidate Generation',
    items: ['Basket-based candidates', 'Covisitation candidates', 'Popular item candidates', 'ALS item-item candidates', 'Word2Vec candidates', 'BPR item-item candidates'],
  },
  {
    t: 'merge', title: 'Candidate Merge Layer',
    items: ['Merge all candidate sources', 'Deduplicate player-item pairs', 'Keep source scores & ranks', 'Build final candidate pool'],
  },
  {
    t: 'feat', title: 'Feature Engineering',
    items: ['Player features', 'Item popularity features', 'Player trend features', 'Sport/competition trends', 'Player-sport features', 'Candidate-source features'],
  },
  {
    t: 'rank', title: 'Ranking Model',
    items: ['Supervised learning-to-rank', 'LightGBM Ranker', 'GroupKFold by player', 'Down-sampled negatives', 'Recall@20 / Precision@20'],
  },
  {
    t: 'infer', title: 'Inference & Filtering',
    items: ['Score candidates per player', 'Average fold predictions', 'Sort recommended items', 'Remove started events', 'Keep valid recommendation set'],
  },
  {
    t: 'final', title: 'Final Output',
    items: ['Ranked items per player', 'Event-market recommendations', 'Recommendation score', 'Top-N for downstream usage'],
  },
]

export default function RecommendationDiagram() {
  return (
    <svg
      viewBox="0 0 760 472"
      className="w-full"
      style={{ fontFamily: FONT }}
    >
      <defs>
        <marker id="arr-rec" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill={ARROW} />
        </marker>
        <marker id="arr-flow" viewBox="0 0 10 6" refX="8" refY="3" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,3 L0,6 Z" fill={FLOW} />
        </marker>
      </defs>

      {/* Row 1 horizontal arrows */}
      <HArrow x1={XS[0] + W} x2={XS[1]} y={CY1} />
      <HArrow x1={XS[1] + W} x2={XS[2]} y={CY1} />
      <HArrow x1={XS[2] + W} x2={XS[3]} y={CY1} />

      {/* Direct input feed: Input Data → Feature Engineering */}
      <path
        d={`M${XS[0] + 42},${R1B} L${XS[0] + 42},${R2Y}`}
        fill="none" stroke={ARROW} strokeWidth={1.2} markerEnd="url(#arr-rec)"
      />

      {/* Merged candidate pool arc */}
      <path
        d={`M${XS[3] + W / 2},${R1B} L${XS[3] + W / 2},${R1B + 52} L${XS[0] + 60},${R1B + 52} L${XS[0] + 60},${R2Y}`}
        fill="none" stroke={FLOW} strokeWidth={1.4} markerEnd="url(#arr-flow)"
      />
      <text
        x={(XS[3] + W / 2 + XS[0] + 60) / 2}
        y={R1B + 46}
        textAnchor="middle"
        fill={FLOW}
        fontSize={6.5}
        fontWeight="600"
        fontFamily={FONT}
      >
        Merged candidate pool
      </text>

      {/* Row 2 horizontal arrows */}
      <HArrow x1={XS[0] + W} x2={XS[1]} y={CY2} />
      <HArrow x1={XS[1] + W} x2={XS[2]} y={CY2} />
      <HArrow x1={XS[2] + W} x2={XS[3]} y={CY2} />

      {/* Row 1 boxes */}
      {BOXES.slice(0, 4).map((b, i) => (
        <StageBox key={b.t} x={XS[i]} y={R1Y} w={W} h={H} title={b.title} items={b.items} t={T[b.t]} />
      ))}

      {/* Row 2 boxes */}
      {BOXES.slice(4).map((b, i) => (
        <StageBox key={b.t} x={XS[i]} y={R2Y} w={W} h={H} title={b.title} items={b.items} t={T[b.t]} />
      ))}
    </svg>
  )
}
