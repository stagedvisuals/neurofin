import Navbar from "@/components/Navbar";
import HeroOrbs from "@/components/HeroOrbs";
import GridPattern from "@/components/GridPattern";
import GlowLine from "@/components/GlowLine";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";

const FEATURES = [
  {
    num: "01",
    title: "Neural Budgeting AI",
    desc: "Leert je uitgavenpatroon met 94% nauwkeurigheid. Voorspelt cashflow 30 dagen vooruit met deep learning netwerken die zich aanpassen aan jouw financiële gedrag.",
    stat: "94%",
    statLabel: "Nauwkeurigheid",
  },
  {
    num: "02",
    title: "Quantum Tax Optimization",
    desc: "Quantum-geïnspireerde algoritmes zoeken de optimale belastingstrategie uit miljoenen combinaties. Tot 62% besparing op je aangifte.",
    stat: "62%",
    statLabel: "Max. besparing",
  },
  {
    num: "03",
    title: "AR Financial Dashboard",
    desc: "Holografische 3D visualisatie via WebXR. Loop letterlijk door je financiële data. Verken trends, patronen en anomalieën in augmented reality.",
    stat: "3D",
    statLabel: "Holografisch",
  },
  {
    num: "04",
    title: "Autonomous Investment Agents",
    desc: "AI agents die 24/7 markten analyseren. Machine learning voor risico-geoptimaliseerde portfolio's die zich real-time aanpassen aan marktcondities.",
    stat: "24/7",
    statLabel: "Non-stop actief",
  },
  {
    num: "05",
    title: "Blockchain Security",
    desc: "256-bit AES encryptie met gedecentraliseerde opslag. Zero-knowledge proofs garanderen dat niemand — zelfs wij niet — je data kan inzien.",
    stat: "256-bit",
    statLabel: "Encryptie",
  },
  {
    num: "06",
    title: "Real-Time Bank Sync",
    desc: "Directe synchronisatie met alle Nederlandse banken via PSD2 en Open Banking. Automatische categorisatie en reconciliatie in milliseconden.",
    stat: "0.3s",
    statLabel: "Latency",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "Gratis",
    features: ["Budget tracking", "Basis AI insights", "1 bankrekening", "Maandrapport"],
    cta: "Start gratis",
    highlight: false,
  },
  {
    name: "Pro",
    price: "€29",
    period: "/maand",
    features: ["Quantum tax optimization", "Neural budgeting AI", "5 bankrekeningen", "30-dagen cashflow voorspelling", "Priority support"],
    cta: "Start 14-dagen trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "€99",
    period: "/maand",
    features: ["Autonomous investment agents", "AR dashboard", "Onbeperkt rekeningen", "API access", "Dedicated success manager", "Custom integraties"],
    cta: "Contact sales",
    highlight: false,
  },
];

const ROADMAP = [
  {
    q: "Q2 2026",
    title: "MVP Launch",
    items: ["Neural budgeting AI", "Quantum tax calculator", "Basis dashboard", "Nederlandse bank integratie"],
    active: true,
  },
  {
    q: "Q3 2026",
    title: "Advanced Features",
    items: ["Autonomous investment agents", "AR visualization", "Machine learning predictions", "Developer API"],
    active: false,
  },
  {
    q: "Q4 2026",
    title: "Scale & Expand",
    items: ["EU markt uitbreiding", "Enterprise suite", "Quantum hardware integratie", "Blockchain security layer"],
    active: false,
  },
];

const STACK = [
  { cat: "Frontend", items: ["Next.js 15", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "WebXR"] },
  { cat: "Backend", items: ["Python FastAPI", "TensorFlow", "PostgreSQL", "Redis", "Quantum Simulators"] },
  { cat: "Infrastructure", items: ["Vercel", "AWS Lambda", "Cloudflare CDN", "Docker", "GitHub Actions"] },
];

const STATS = [
  { value: 9000000, prefix: "", suffix: "+", label: "Potentiële gebruikers NL" },
  { value: 8400, prefix: "€", suffix: "", label: "Gem. besparing per jaar" },
  { value: 2400, prefix: "", suffix: "%", label: "ROI op Pro abonnement" },
  { value: 98, prefix: "", suffix: "%", label: "Tijdsbesparing" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <GridPattern />
      <Navbar />

      {/* ═══════════════ HERO ═══════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroOrbs />

        {/* Geometric decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.03] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/[0.05] rounded-full animate-counter-spin" style={{ animationDuration: "25s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/20 rounded-full animate-orbit" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow" />
            <span className="text-[11px] font-mono text-white/40 tracking-[0.2em] uppercase">
              In ontwikkeling — Q2 2026
            </span>
          </div>

          <h1 className="font-display text-[clamp(42px,9vw,96px)] font-light leading-[0.95] tracking-tight mb-6">
            <span className="block text-white/90">Je Neurale</span>
            <span className="block font-bold text-white">Financiële AI</span>
          </h1>

          <p className="text-white/30 text-[clamp(15px,2vw,20px)] leading-relaxed max-w-xl mx-auto mb-12 font-light">
            De eerste neurale financiële AI assistant van Nederland.
            Quantum tax optimization. Neural budgeting. Autonomous agents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black font-mono text-sm px-8 py-4 tracking-wider uppercase hover:bg-white/90 transition-colors">
              Krijg Early Access →
            </button>
            <a
              href="#features"
              className="border border-white/10 text-white/50 font-mono text-sm px-8 py-4 tracking-wider uppercase hover:border-white/30 hover:text-white/80 transition-all"
            >
              Ontdek meer
            </a>
          </div>

          {/* Tech tags */}
          <div className="mt-20 flex justify-center gap-6 flex-wrap">
            {["Next.js", "TensorFlow", "WebXR", "Quantum", "Blockchain", "FastAPI"].map((t) => (
              <span key={t} className="text-[10px] font-mono text-white/15 tracking-[0.15em] uppercase">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ═══════════════ FEATURES ═══════════════ */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-20">
              <span className="text-[11px] font-mono text-white/30 tracking-[0.3em] uppercase">Capabilities</span>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] font-light mt-3 tracking-tight">
                Zes dimensies<br />
                <span className="font-bold">van intelligentie</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-0">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 3)}>
                <div className="group border-t border-white/5 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/[0.01] transition-colors px-4 -mx-4">
                  <div className="md:col-span-1">
                    <span className="text-xs font-mono text-white/20">{f.num}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-xl font-medium group-hover:text-white transition-colors text-white/80">
                      {f.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm text-white/30 leading-relaxed font-light">
                      {f.desc}
                    </p>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <div className="text-2xl font-mono font-bold text-white/60 group-hover:text-white transition-colors">
                      {f.stat}
                    </div>
                    <div className="text-[10px] font-mono text-white/20 tracking-wider uppercase mt-1">
                      {f.statLabel}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-white/5" />
          </div>
        </div>
      </section>

      <GlowLine />

      {/* ═══════════════ STATS ═══════════════ */}
      <section id="stats" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={Math.min(i + 1, 4)}>
              <div>
                <div className="text-[clamp(28px,5vw,48px)] font-mono font-bold text-white/90">
                  <Counter end={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="text-xs font-mono text-white/25 tracking-wider uppercase mt-2">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <GlowLine />

      {/* ═══════════════ PRICING ═══════════════ */}
      <section id="pricing" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-20">
              <span className="text-[11px] font-mono text-white/30 tracking-[0.3em] uppercase">Pricing</span>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] font-light mt-3 tracking-tight">
                Investeer in je<br />
                <span className="font-bold">financiële toekomst</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 3)}>
                <div
                  className={`relative p-8 border ${
                    p.highlight
                      ? "border-white/20 bg-white/[0.02]"
                      : "border-white/5 bg-transparent"
                  } hover:border-white/10 transition-colors`}
                >
                  {p.highlight && (
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  )}
                  <div className="text-xs font-mono text-white/30 tracking-[0.2em] uppercase mb-6">
                    {p.name}
                  </div>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-display font-bold">{p.price}</span>
                    {p.period && <span className="text-sm text-white/30">{p.period}</span>}
                  </div>
                  <div className="space-y-3 mb-10">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-white/40">
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <button
                    className={`w-full py-3 text-xs font-mono tracking-wider uppercase transition-colors ${
                      p.highlight
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {p.cta}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ═══════════════ ROADMAP ═══════════════ */}
      <section id="roadmap" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-20">
              <span className="text-[11px] font-mono text-white/30 tracking-[0.3em] uppercase">Roadmap</span>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] font-light mt-3 tracking-tight">
                De route<br />
                <span className="font-bold">vooruit</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

            <div className="space-y-16">
              {ROADMAP.map((r, i) => (
                <Reveal key={i} delay={Math.min(i + 1, 3)}>
                  <div className="relative pl-12">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1 w-[15px] h-[15px] border ${
                        r.active
                          ? "border-white bg-white/20"
                          : "border-white/20 bg-transparent"
                      } rounded-full`}
                    />
                    <div className="text-xs font-mono text-white/30 tracking-[0.2em] uppercase mb-2">
                      {r.q}
                    </div>
                    <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-3">
                      {r.title}
                      {r.active && (
                        <span className="text-[10px] font-mono text-white/40 border border-white/10 px-2 py-0.5 tracking-wider uppercase">
                          Actief
                        </span>
                      )}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {r.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm text-white/35">
                          <span className={r.active ? "text-white/60" : "text-white/20"}>
                            {r.active ? "✓" : "○"}
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GlowLine />

      {/* ═══════════════ TECH STACK ═══════════════ */}
      <section id="tech" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-20">
              <span className="text-[11px] font-mono text-white/30 tracking-[0.3em] uppercase">Technology</span>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] font-light mt-3 tracking-tight">
                De<br />
                <span className="font-bold">stack</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STACK.map((s, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 3)}>
                <div className="border border-white/5 p-8 hover:border-white/10 transition-colors">
                  <div className="text-xs font-mono text-white/30 tracking-[0.2em] uppercase mb-6">
                    {s.cat}
                  </div>
                  <div className="space-y-3">
                    {s.items.map((item, j) => (
                      <div
                        key={j}
                        className="text-sm font-mono text-white/40 py-2 border-b border-white/[0.03] last:border-0 hover:text-white/70 transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative z-10 py-32 px-6 text-center">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-[clamp(28px,5vw,52px)] font-light tracking-tight mb-6">
              De toekomst van financiën<br />
              <span className="font-bold">is neuraal</span>
            </h2>
            <p className="text-white/30 text-lg mb-12 font-light">
              Sluit je aan bij de early access. Wees de eerste die de kracht van neurale financiën ervaart.
            </p>
            <button className="bg-white text-black font-mono text-sm px-10 py-4 tracking-wider uppercase hover:bg-white/90 transition-colors">
              Meld je aan voor Early Access →
            </button>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="relative z-10 border-t border-white/5 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border border-white/20 rounded-sm flex items-center justify-center">
                  <span className="text-xs font-mono font-bold">N</span>
                </div>
                <span className="text-sm font-display font-medium tracking-wider uppercase">NeuroFin</span>
              </div>
              <p className="text-sm text-white/25 leading-relaxed max-w-sm font-light">
                De eerste neurale financiële AI assistant van Nederland. Gebouwd door SynqLayer.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-4">Product</div>
              <div className="space-y-2">
                {["Features", "Prijzen", "Roadmap", "API Docs"].map((l) => (
                  <div key={l} className="text-sm text-white/20 hover:text-white/50 cursor-pointer transition-colors">{l}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase mb-4">Contact</div>
              <div className="space-y-2">
                {["contact@neurofin.ai", "GitHub", "Twitter"].map((l) => (
                  <div key={l} className="text-sm font-mono text-white/20 hover:text-white/50 cursor-pointer transition-colors">{l}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-[11px] font-mono text-white/15">© 2026 NeuroFin — SynqLayer B.V.</span>
            <div className="flex gap-6">
              {["Privacy", "Voorwaarden", "AVG/GDPR"].map((l) => (
                <span key={l} className="text-[11px] font-mono text-white/15 hover:text-white/30 cursor-pointer transition-colors">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}