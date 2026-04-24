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
    glow: "rgba(16, 185, 129, 0.5)",
  },
  {
    id: "idea" as Tool,
    name: "Idea Probe",
    tagline: "Validate your idea",
    description: "AI powered idea validation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    color: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.5)",
  },
  {
    id: "stratix" as Tool,
    name: "CompetiX",
    tagline: "Competitor study",
    description: "Competitive intelligence",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
      </svg>
    ),
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.5)",
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
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-wider">OWLYTICS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Connect'].map((link) => (
              <button key={link} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {link}
              </button>
            ))}
          </div>

          <button className="px-6 py-2.5 rounded-full text-white text-sm font-semibold bg-blue-600/30 border border-blue-500/40 backdrop-blur-sm hover:bg-blue-500/40 transition-all">
            SIGN UP
          </button>
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
          className="hidden md:block absolute top-[18%] cursor-pointer"
        >
          <ToolCard tool={tools[2]} isHovered={hoveredTool === "stratix"} />
        </motion.div>

        {/* Central Glowing Sphere */}
        <div className="relative">
          {/* Outer glow - breathing animation */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-[-80px] rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 blur-3xl"
          />

          {/* Middle glow ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute inset-[-40px] rounded-full bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-purple-500/40 blur-2xl"
          />

          {/* Inner glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-blue-600/50 via-purple-600/40 to-cyan-500/50 blur-xl"
          />

          {/* Central Sphere */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 100px rgba(59, 130, 246, 0.8), 0 0 200px rgba(139, 92, 246, 0.4)',
                '0 0 150px rgba(59, 130, 246, 1), 0 0 300px rgba(139, 92, 246, 0.6)',
                '0 0 100px rgba(59, 130, 246, 0.8), 0 0 200px rgba(139, 92, 246, 0.4)',
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500"
          >
            {/* Inner highlight */}
            <div className="absolute inset-4 md:inset-6 rounded-full bg-gradient-to-br from-white/30 to-transparent" />

            {/* Orbiting particles */}
            {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
                style={{ transformOrigin: 'center' }}
              >
                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                  className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-lg shadow-white/50"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${rotation}deg) translateX(${80 + i * 10}px)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Left - MRR Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onMouseEnter={() => setHoveredTool("mrr")}
          onMouseLeave={() => setHoveredTool(null)}
          onClick={() => handleToolClick("mrr")}
          className="hidden md:block absolute left-[15%] top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <ToolCard tool={tools[0]} isHovered={hoveredTool === "mrr"} />
        </motion.div>

        {/* Right - Idea Probe Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onMouseEnter={() => setHoveredTool("idea")}
          onMouseLeave={() => setHoveredTool(null)}
          onClick={() => handleToolClick("idea")}
          className="hidden md:block absolute right-[15%] top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <ToolCard tool={tools[1]} isHovered={hoveredTool === "idea"} />
        </motion.div>

        {/* Hero Text - Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-[15%] text-center max-w-2xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Your AI assistant for smarter productivity.
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Harness the power of AI to automate tasks, streamline workflows, and boost your team's efficiency — all in one simple platform.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all">
              Get started
            </button>
            <button className="px-8 py-3.5 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all flex items-center gap-2">
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

// Tool Card Component
function ToolCard({
  tool,
  isHovered,
}: {
  tool: typeof tools[0];
  isHovered: boolean;
}) {
  return (
    <motion.div
      animate={{ scale: isHovered ? 1.08 : 1 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("relative group w-72")}
    >
      {/* Card glow */}
      <motion.div
        className="absolute -inset-2 rounded-2xl opacity-0 blur-xl transition-opacity duration-500"
        style={{ background: tool.glow }}
        animate={{ opacity: isHovered ? 0.8 : 0 }}
      />

      {/* Main card */}
      <div
        className={cn(
          "relative rounded-2xl p-5 backdrop-blur-xl transition-all duration-300",
          isHovered ? "bg-slate-900/95" : "bg-slate-900/60 border border-slate-700/40"
        )}
        style={{
          boxShadow: isHovered
            ? `0 0 50px ${tool.glow}, inset 0 0 30px rgba(255,255,255,0.03)`
            : 'inset 0 0 30px rgba(255,255,255,0.02)',
        }}
      >
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${tool.color}30, ${tool.color}10)`,
            border: `2px solid ${isHovered ? tool.color : 'transparent'}`,
            boxShadow: isHovered ? `0 0 30px ${tool.glow}` : 'none',
          }}
        >
          <div style={{ color: tool.color }}>{tool.icon}</div>
        </div>

        {/* Content */}
        <div className="text-left">
          <div className="text-xs font-semibold mb-1 tracking-widest uppercase" style={{ color: tool.color }}>
            {tool.tagline}
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>
        </div>

        {/* Arrow */}
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
          animate={{ x: isHovered ? [0, 8, 0] : 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={tool.color} strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
