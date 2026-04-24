"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tool = "dashboard" | "mrr" | "idea" | "stratix";

const tools = [
  {
    id: "mrr" as Tool,
    name: "MRR Estimator",
    tagline: "Revenue Intelligence",
    description: "Model MRR, ARR, churn & forecasts",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="12" width="4" height="9" rx="1" />
        <rect x="10" y="8" width="4" height="13" rx="1" />
        <rect x="17" y="3" width="4" height="18" rx="1" />
      </svg>
    ),
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: "idea" as Tool,
    name: "Idea Probe",
    tagline: "Startup Analytics",
    description: "AI-powered idea analysis",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    color: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  {
    id: "stratix" as Tool,
    name: "Stratix",
    tagline: "Strategy Engine",
    description: "Competitive intelligence",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.4)",
  },
];

export default function DashboardPage() {
  const [hoveredTool, setHoveredTool] = useState<Tool | null>(null);

  const handleToolClick = (toolId: Tool) => {
    console.log("Tool clicked:", toolId);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] relative overflow-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0d1430] to-[#0a0f1c]" />
      <div className="fixed inset-0 bg-gradient-radial from-[#1e3a5f]/20 via-transparent to-transparent" />

      {/* Grid background */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-20 flex items-center justify-center min-h-screen">

        {/* Top - Stratix Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onMouseEnter={() => setHoveredTool("stratix")}
          onMouseLeave={() => setHoveredTool(null)}
          onClick={() => handleToolClick("stratix")}
          className="hidden md:block absolute top-[15%] cursor-pointer"
        >
          <ToolCard tool={tools[2]} isHovered={hoveredTool === "stratix"} />
        </motion.div>

        {/* Central Glowing Sphere - Matching Image */}
        <div className="relative flex items-center justify-center">
          {/* Outermost glow - ambient bloom */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[500px] w-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.15) 40%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Secondary glow layer */}
          <motion.div
            animate={{
              scale: [1.05, 1.2, 1.05],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute h-[400px] w-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Inner glow ring */}
          <motion.div
            animate={{
              scale: [0.98, 1.08, 0.98],
              opacity: [0.6, 0.85, 0.6],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute h-[320px] w-[320px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(59, 130, 246, 0.35) 45%, transparent 65%)',
              filter: 'blur(20px)',
            }}
          />

          {/* Core sphere */}
          <motion.div
            animate={{
              scale: [0.98, 1.02, 0.98],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-48 w-48 md:h-64 md:w-64 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 25%, #4f46e5 50%, #2563eb 75%, #06b6d4 100%)',
              boxShadow: `
                0 0 60px rgba(139, 92, 246, 0.6),
                0 0 100px rgba(99, 102, 241, 0.4),
                0 0 150px rgba(59, 130, 246, 0.3),
                inset 0 0 60px rgba(255, 255, 255, 0.1)
              `,
            }}
          >
            {/* Inner highlight */}
            <div
              className="absolute inset-4 md:inset-8 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
              }}
            />
          </motion.div>

          {/* Floating particles around sphere */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 360;
            const radius = 180 + Math.random() * 60;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            return (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Left - MRR Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onMouseEnter={() => setHoveredTool("mrr")}
          onMouseLeave={() => setHoveredTool(null)}
          onClick={() => handleToolClick("mrr")}
          className="hidden md:block absolute left-[12%] top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <ToolCard tool={tools[0]} isHovered={hoveredTool === "mrr"} />
        </motion.div>

        {/* Right - Idea Probe Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onMouseEnter={() => setHoveredTool("idea")}
          onMouseLeave={() => setHoveredTool(null)}
          onClick={() => handleToolClick("idea")}
          className="hidden md:block absolute right-[12%] top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <ToolCard tool={tools[1]} isHovered={hoveredTool === "idea"} />
        </motion.div>

        {/* Hero Text - Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-[12%] text-center max-w-2xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Your AI assistant for smarter productivity.
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Harness the power of AI to automate tasks, streamline workflows, and boost your team's efficiency — all in one simple platform.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-lg shadow-violet-500/30 transition-all">
              Get started
            </button>
            <button className="px-8 py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
              </svg>
              See It in Action
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Tool Card Component - Matching Image Style
function ToolCard({
  tool,
  isHovered,
}: {
  tool: typeof tools[0];
  isHovered: boolean;
}) {
  return (
    <motion.div
      animate={{ scale: isHovered ? 1.05 : 1, y: isHovered ? -8 : 0 }}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group"
    >
      {/* Glow effect behind card */}
      <motion.div
        className="absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500"
        style={{
          background: tool.glow,
          opacity: isHovered ? 0.8 : 0,
        }}
      />

      {/* Main card */}
      <div
        className={cn(
          "relative rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 border",
          isHovered
            ? "bg-slate-900/90 border-slate-700/60"
            : "bg-slate-900/60 border-slate-800/40"
        )}
        style={{
          boxShadow: isHovered
            ? `0 0 40px ${tool.glow}, inset 0 0 20px rgba(255,255,255,0.03)`
            : 'inset 0 0 20px rgba(255,255,255,0.02)',
        }}
      >
        {/* Icon container */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
          style={{
            background: `${tool.color}15`,
            border: `1.5px solid ${isHovered ? tool.color : 'transparent'}`,
            boxShadow: isHovered ? `0 0 20px ${tool.glow}` : 'none',
          }}
        >
          <div style={{ color: tool.color }}>{tool.icon}</div>
        </div>

        {/* Content */}
        <div className="text-left">
          <div
            className="text-xs font-semibold mb-2 tracking-widest uppercase"
            style={{ color: tool.color }}
          >
            {tool.tagline}
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{tool.description}</p>
        </div>

        {/* Arrow indicator */}
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
          animate={{ x: isHovered ? [0, 6, 0] : 0 }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={tool.color} strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}