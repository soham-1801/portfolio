"use client";

import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";
import { Terminal, Cpu, Database, Layers, Code, Zap, Flame, Box, Server } from "lucide-react";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <span>PRODUCTION TOOLS & FRAMEWORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Daily Driver <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            The industry-standard libraries, frameworks, and deployment environments I use to build scalable AI/ML solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card p-5 rounded-2xl border border-zinc-800/80 flex flex-col items-center justify-center text-center group hover:border-blue-500/50 hover:bg-zinc-900/80 transition-all shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-blue-500/40 transition-all">
                <Terminal className={`w-6 h-6 ${tech.color}`} />
              </div>
              <span className="font-bold text-sm text-zinc-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                Industry Std
              </span>
            </motion.div>
          ))}
        </div>

        {/* Deployment Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>All AI pipelines & models deployed via <strong className="text-white">Docker</strong>, <strong className="text-white">AWS</strong>, and <strong className="text-white">Vercel Edge</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
