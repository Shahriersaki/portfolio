import { motion } from "framer-motion";

const NODES = [
  { id: "hotel", label: "Hotel", x: 200, y: 105, primary: true, labelDy: -14 },
  { id: "org", label: "Organization", x: 52, y: 44, primary: false, labelDy: -13 },
  { id: "address", label: "PostalAddress", x: 358, y: 44, primary: false, labelDy: -13 },
  { id: "review", label: "Review", x: 52, y: 168, primary: false, labelDy: 20 },
  { id: "offer", label: "Offer", x: 358, y: 168, primary: false, labelDy: 20 },
  { id: "geo", label: "GeoCoordinates", x: 200, y: 220, primary: false, labelDy: 18 },
];

const EDGES: [string, string][] = [
  ["hotel", "org"],
  ["hotel", "address"],
  ["hotel", "review"],
  ["hotel", "offer"],
  ["hotel", "geo"],
];

function findNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function EntityGraph() {
  return (
    <div className="relative rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-5 sm:p-7">
      {/* Subtle teal glow behind primary node */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      />

      <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        Entity graph · JSON-LD
      </p>

      <svg viewBox="0 0 410 250" className="w-full" role="img" aria-label="Hotel entity relationship graph">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {EDGES.map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x} y1={a.y}
              x2={b.x} y2={b.y}
              stroke="var(--border-strong)"
              strokeWidth={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + 0.1 * i }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 + i * 0.08 }}
          >
            {n.primary && (
              <circle cx={n.x} cy={n.y} r={16} fill="var(--accent)" opacity={0.12} />
            )}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.primary ? 6 : 4}
              fill={n.primary ? "var(--accent)" : "var(--bg-2)"}
              stroke={n.primary ? "var(--accent)" : "var(--border-strong)"}
              strokeWidth={1.5}
              filter={n.primary ? "url(#glow)" : undefined}
            />
            <text
              x={n.x}
              y={n.y + n.labelDy}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="9.5"
              fill={n.primary ? "var(--accent-text)" : "var(--text-secondary)"}
              fontWeight={n.primary ? "500" : "400"}
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Code snippet preview */}
      <div className="mt-4 rounded-lg bg-[var(--bg-2)] px-3 py-2.5 font-[family-name:var(--font-mono)] text-[11px] leading-relaxed text-[var(--text-secondary)]">
        <span style={{ color: "var(--accent-text)" }}>"@type"</span>
        {": "}<span className="opacity-70">"Hotel"</span>
        {",  "}
        <span style={{ color: "var(--accent-text)" }}>"address"</span>
        {": { "}
        <span className="opacity-70">…</span>
        {" }"}
      </div>
    </div>
  );
}
