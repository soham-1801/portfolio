"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Sparkles, CheckCircle2, Rocket } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400; // 1.4s animation
    const step = Math.max(1, Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  {
    isNumber: true,
    target: 4,
    suffix: "+",
    value: "4+",
    label: "Production Projects",
    description: "Built with PyTorch, OpenCV, NLP & LLMs",
    icon: BrainCircuit,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-blue-500/10",
  },
  {
    isNumber: true,
    target: 12,
    suffix: "+",
    value: "12+",
    label: "Technologies",
    description: "Python, FastAPI, PyTorch, React, Docker, SQL",
    icon: Cpu,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20 shadow-purple-500/10",
  },
  {
    isNumber: true,
    target: 2,
    suffix: "+",
    value: "2+",
    label: "Live Deployments",
    description: "Cloud hosted AI web apps & REST APIs",
    icon: Sparkles,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-cyan-500/10",
  },
  {
    isNumber: false,
    value: "Open",
    label: "To Internship",
    description: "Ready for AI/ML & Python Engineering roles",
    icon: Rocket,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/10",
  },
];

export default function Metrics() {
  return (
    <section className="py-12 relative z-20 -mt-10 sm:-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 rounded-3xl border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 shadow-xl flex flex-col justify-between group bg-[#111827]/80 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>LIVE</span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 font-heading group-hover:text-gradient transition-all">
                    {item.isNumber ? <Counter target={item.target!} suffix={item.suffix} /> : item.value}
                  </div>
                  <div className="text-sm font-extrabold text-zinc-200 uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-zinc-400 font-normal leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
