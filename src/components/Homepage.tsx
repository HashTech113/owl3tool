import { Button } from "@/components/ui/button";

type ToolId = "mrr" | "idea" | "competix";

const tools = [
  {
    id: "mrr" as ToolId,
    name: "MRR Estimator",
    tagline: "Revenue Intelligence",
    description: "Model MRR, ARR, churn & forecasts",
    color: "from-emerald-400/30 to-emerald-500/10",
    accent: "#34d399",
  },
  {
    id: "idea" as ToolId,
    name: "Idea Probe",
    tagline: "Validate your idea",
    description: "AI powered idea validation",
    color: "from-sky-400/30 to-cyan-500/10",
    accent: "#38bdf8",
  },
  {
    id: "competix" as ToolId,
    name: "CompetiX",
    tagline: "Competitor study",
    description: "Competitive intelligence",
    color: "from-amber-400/30 to-orange-500/10",
    accent: "#f59e0b",
  },
];

const toolLinks: Record<ToolId, string> = {
  mrr: "https://mrr.iamhashir.com/",
  idea: "https://idea.iamhashir.com/",
  competix: "https://competition.iamhashir.com/",
};

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
          <div className="mb-10 flex w-full max-w-5xl flex-col items-center gap-8">
            <button
              type="button"
              onClick={() => handleToolClick("competix")}
              className="hidden md:block"
            >
              <ToolCard tool={tools[2]} />
            </button>

            <div className="flex w-full items-center justify-center gap-8">
              <button
                type="button"
                onClick={() => handleToolClick("mrr")}
                className="hidden md:block"
              >
                <ToolCard tool={tools[0]} />
              </button>

              <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 shadow-[0_0_70px_rgba(59,130,246,0.45)]">
                <div className="absolute inset-[-2rem] rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute inset-5 rounded-full bg-white/15" />
                <div className="relative z-10 text-center">
                  <div className="text-xs uppercase tracking-[0.4em] text-white/70">Owlytics</div>
                  <div className="mt-3 text-2xl font-semibold">Research Hub</div>
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
