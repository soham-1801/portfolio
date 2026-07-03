"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Cpu, Database, Server, Wrench, CheckCircle2, Star, BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-400",
    accent: "group-hover:border-blue-500/50",
    skills: [
      { name: "Python", level: "Expert", ring: "bg-blue-500" },
      { name: "SQL", level: "Proficient", ring: "bg-blue-400" },
    ],
  },
  {
    title: "AI & ML",
    icon: BrainCircuit,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
    accent: "group-hover:border-purple-500/50",
    skills: [
      { name: "Machine Learning", level: "Expert", ring: "bg-purple-500" },
      { name: "Deep Learning", level: "Expert", ring: "bg-purple-500" },
      { name: "Computer Vision", level: "Expert", ring: "bg-purple-400" },
      { name: "NLP", level: "Proficient", ring: "bg-purple-400" },
    ],
  },
  {
    title: "Frameworks",
    icon: Cpu,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-400",
    accent: "group-hover:border-emerald-500/50",
    skills: [
      { name: "FastAPI", level: "Expert", ring: "bg-emerald-500" },
      { name: "PyTorch", level: "Expert", ring: "bg-emerald-500" },
      { name: "React", level: "Proficient", ring: "bg-emerald-400" },
      { name: "Flask", level: "Proficient", ring: "bg-emerald-400" },
      { name: "Scikit-learn", level: "Expert", ring: "bg-emerald-500" },
    ],
  },
  {
    title: "Data Science",
    icon: Database,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    dot: "bg-cyan-400",
    accent: "group-hover:border-cyan-500/50",
    skills: [
      { name: "Pandas", level: "Expert", ring: "bg-cyan-500" },
      { name: "NumPy", level: "Expert", ring: "bg-cyan-500" },
      { name: "EDA", level: "Proficient", ring: "bg-cyan-400" },
      { name: "Feature Engineering", level: "Proficient", ring: "bg-cyan-400" },
      { name: "Model Evaluation", level: "Proficient", ring: "bg-cyan-400" },
    ],
  },
  {
    title: "Database",
    icon: Server,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    dot: "bg-amber-400",
    accent: "group-hover:border-amber-500/50",
    skills: [
      { name: "PostgreSQL", level: "Proficient", ring: "bg-amber-500" },
      { name: "SQLite", level: "Proficient", ring: "bg-amber-400" },
    ],
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    dot: "bg-rose-400",
    accent: "group-hover:border-rose-500/50",
    skills: [
      { name: "Git & GitHub", level: "Expert", ring: "bg-rose-500" },
      { name: "Docker", level: "Learning", ring: "bg-rose-300" },
      { name: "Vercel", level: "Proficient", ring: "bg-rose-400" },
      { name: "VS Code", level: "Expert", ring: "bg-rose-500" },
    ],
  },
];

const levelConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  Expert:     { label: "Expert",     color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", icon: <Star className="w-2.5 h-2.5 fill-emerald-400 text-emerald-400" /> },
  Proficient: { label: "Proficient", color: "text-blue-400 bg-blue-500/10 border-blue-500/30",         icon: <CheckCircle2 className="w-2.5 h-2.5 text-blue-400" /> },
  Learning:   { label: "Learning",   color: "text-amber-400 bg-amber-500/10 border-amber-500/30",       icon: <BookOpen className="w-2.5 h-2.5 text-amber-400" /> },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-bold text-[#06B6D4] mb-8 tracking-wide backdrop-blur-md">
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
            Technical <br />
            <span className="text-gradient">Skills & Arsenal</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Organized category-wise with proficiency levels — Expert, Proficient, and actively Learning.
          </p>
          {/* Legend */}
          <div className="flex items-center justify-center gap-5 mt-6 flex-wrap">
            {Object.entries(levelConfig).map(([key, cfg]) => (
              <span key={key} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold ${cfg.color}`}>
                {cfg.icon} {cfg.label}
              </span>
            ))}
          </div>
        </div>

        {/* 6 Category-Wise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`glass-card p-6 sm:p-7 rounded-3xl border border-zinc-800/80 flex flex-col justify-between group transition-all duration-300 shadow-lg ${category.accent}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md ${category.color}`}>
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#06B6D4] transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Pills with Proficiency */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const cfg = levelConfig[skill.level];
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.06, y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="flex flex-col items-start gap-1 cursor-default select-none"
                        >
                          <span className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800/80 text-sm font-semibold text-zinc-200 shadow-sm flex items-center gap-2.5 group/badge hover:border-zinc-700 transition-colors w-full">
                            <span className={`w-2 h-2 rounded-full ${skill.ring} shrink-0`} />
                            <span className="group-hover/badge:text-white flex-1">{skill.name}</span>
                            <span className={`inline-flex items-center gap-1 text-[9px] font-mono font-black px-1.5 py-0.5 rounded-md border ${cfg.color}`}>
                              {cfg.icon}
                              {cfg.label}
                            </span>
                          </span>
                        </motion.div>
                      );
                    })}
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
