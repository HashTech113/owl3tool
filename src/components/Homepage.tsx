import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

type ToolId = "mrr" | "idea" | "strategy";

const tools = [
  {
    id: "mrr" as ToolId,
    name: "MRR Estimator",
    tagline: "Revenue Intelligence",
    description: "Model MRR, ARR, churn & forecasts",
    color: "from-emerald-400/30 to-emerald-500/10",
    accent: "#34d399",
    icon: "chart",
  },
  {
    id: "idea" as ToolId,
    name: "Idea Probe",
    tagline: "Validate your idea",
    description: "AI powered idea validation",
    color: "from-sky-400/30 to-cyan-500/10",
    accent: "#38bdf8",
    icon: "search",
  },
  {
    id: "strategy" as ToolId,
    name: "Strategy Engine",
    tagline: "Strategic planning",
    description: "Competitive intelligence",
    color: "from-amber-400/30 to-orange-500/10",
    accent: "#f59e0b",
    icon: "cube",
  },
];

const toolLinks: Record<ToolId, string> = {
  mrr: "https://mrr.iamhashir.com/",
  idea: "https://idea.iamhashir.com/",
  strategy: "https://competition.iamhashir.com/",
};

const sphereParticles = [
  {
    size: "h-3 w-3",
    glow: "0 0 24px rgba(255,255,255,0.9)",
    x: [78, 92, 84],
    y: [-138, -154, -144],
    duration: 4.6,
    delay: 0.2,
  },
  {
    size: "h-4 w-4",
    glow: "0 0 28px rgba(255,255,255,0.82)",
    x: [112, 126, 118],
    y: [-84, -100, -88],
    duration: 5.1,
    delay: 0.8,
  },
  {
    size: "h-3.5 w-3.5",
    glow: "0 0 22px rgba(255,255,255,0.75)",
    x: [152, 164, 156],
    y: [10, -6, 4],
    duration: 4.9,
    delay: 1.2,
  },
];

const Homepage = () => {
  const handleToolClick = (toolId: ToolId) => {
    window.location.href = toolLinks[toolId];
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_35%),linear-gradient(180deg,_#091221_0%,_#0a1020_45%,_#070c17_100%)]" />
      <div
        className="fixed inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10">
        <nav className="px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <img
              src="/owlytics-logo-white.png"
              alt="Owlytics"
              className="h-7 w-auto object-contain"
            />

            <div className="hidden items-center gap-10 md:flex">
              {["Services", "About", "Connect"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="text-sm font-medium text-white/80 transition hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-8">
          <div className="mb-10 flex w-full max-w-6xl flex-col items-center gap-10">
            <button
              type="button"
              onClick={() => handleToolClick("strategy")}
              className="hidden md:block"
            >
              <ToolCard tool={tools[2]} />
            </button>

            <div className="flex w-full items-center justify-center gap-10 xl:gap-16">
              <button
                type="button"
                onClick={() => handleToolClick("mrr")}
                className="hidden md:block"
              >
                <ToolCard tool={tools[0]} />
              </button>

              <div className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[360px] md:w-[360px]">
                <motion.div
                  animate={{
                    scale: [0.98, 1.03, 0.99],
                    opacity: [0.34, 0.56, 0.38],
                  }}
                  transition={{
                    duration: 5.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(92,121,255,0.32)_0%,rgba(98,114,255,0.18)_34%,rgba(14,23,52,0)_72%)] blur-2xl"
                />

                <motion.div
                  animate={{
                    scale: [0.98, 1.05, 1],
                    opacity: [0.24, 0.38, 0.26],
                  }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="absolute h-[345px] w-[345px] rounded-full bg-[radial-gradient(circle,rgba(88,112,255,0.1)_8%,rgba(129,140,248,0.18)_30%,rgba(56,189,248,0.28)_58%,rgba(59,130,246,0)_75%)] blur-3xl"
                />

                <motion.div
                  animate={{
                    scale: [0.995, 1.025, 1],
                    y: [0, -3, 0],
                    boxShadow: [
                      "0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(147,51,234,0.28), 0 0 100px rgba(59,130,246,0.4)",
                      "0 0 0 1px rgba(255,255,255,0.14), 0 0 56px rgba(168,85,247,0.36), 0 0 135px rgba(59,130,246,0.52)",
                      "0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(147,51,234,0.28), 0 0 100px rgba(59,130,246,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative h-[230px] w-[230px] rounded-full md:h-[260px] md:w-[260px]"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 overflow-hidden rounded-full bg-[linear-gradient(132deg,#4f5cf8_0%,#8b5cf6_30%,#c026d3_58%,#38bdf8_100%)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_22%,rgba(255,255,255,0)_46%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.12)_8%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_55%,rgba(56,189,248,0.2)_100%)]" />
                    <div className="absolute inset-[10%] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.24)_0%,rgba(192,132,252,0.62)_38%,rgba(56,189,248,0.38)_100%)] opacity-80" />
                    <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_36%_24%,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_42%)]" />
                    <div className="absolute inset-0 rounded-full border border-white/12" />
                  </motion.div>
                </motion.div>

                <div className="pointer-events-none absolute inset-0">
                  {sphereParticles.map((particle, index) => (
                    <motion.div
                      key={index}
                      className={`absolute left-1/2 top-1/2 rounded-full bg-white ${particle.size}`}
                      style={{ boxShadow: particle.glow }}
                      animate={{
                        x: particle.x,
                        y: particle.y,
                        opacity: [0.35, 1, 0.42],
                        scale: [0.78, 1.16, 0.82],
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay,
                      }}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleToolClick("idea")}
                className="hidden md:block"
              >
                <ToolCard tool={tools[1]} />
              </button>
            </div>

            <div className="grid w-full max-w-md gap-4 md:hidden">
              {tools.map((tool) => (
                <button key={tool.id} type="button" onClick={() => handleToolClick(tool.id)}>
                  <ToolCard tool={tool} />
                </button>
              ))}
            </div>
          </div>

          <section className="max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              World&apos;s 1&apos;st market research agents for all
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Validate ideas, study competitors, and understand your market in minutes. Get clear, data-backed insights to make better business decisions.
            </p>
            <div className="mt-8">
              <Button
                type="button"
                onClick={() => handleToolClick("idea")}
                className="rounded-xl bg-blue-600 px-8 py-6 text-base font-semibold text-white hover:bg-blue-500"
              >
                Stop guessing. Build with confidence.
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <div className="group w-full md:w-[280px]">
      <div className="rounded-[26px] border border-white/10 bg-slate-900/70 p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:bg-slate-900/90">
        <div
          className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-xl shadow-lg`}
          style={{ color: tool.accent }}
        >
          ✦
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: tool.accent }}>
          {tool.tagline}
        </div>
        <h3 className="mt-2 text-xl font-bold text-white">{tool.name}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">{tool.description}</p>
      </div>
    </div>
  );
}

export default Homepage;
