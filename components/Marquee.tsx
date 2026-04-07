"use client";

const WORDS = [
  "NEURAL BUDGETING",
  "QUANTUM TAX",
  "AUTONOMOUS AGENTS",
  "AR DASHBOARD",
  "BLOCKCHAIN SECURITY",
  "MACHINE LEARNING",
  "DEEP LEARNING",
  "PSD2 INTEGRATION",
  "REAL-TIME SYNC",
  "ZERO-KNOWLEDGE",
];

export default function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-white/5 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="mx-8 text-xs font-mono text-white/10 tracking-[0.3em] uppercase">
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}