"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, BrainCircuit, Code2, Server, CheckCircle2, Award, Zap, Sparkles, Compass, Lightbulb, BookOpen, Target, Activity, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const coreCompetencies = [
  {
    title: "AI / Machine Learning",
    desc: "PyTorch, Scikit-Learn, Predictive Modeling & Statistical Analysis",
    badge: "Expert",
    color: "from-blue-500 to-indigo-500 text-blue-400 border-blue-500/30 bg-blue-500/10",
  },
  {
    title: "FastAPI & Python Backend",
    desc: "Asynchronous REST APIs, Pydantic, High-Throughput OOP Systems",
    badge: "Core Stack",
    color: "from-emerald-500 to-teal-500 text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    title: "React & Next.js UI",
    desc: "Modern TypeScript dashboards, TailwindCSS & Framer Motion animations",
    badge: "Fullstack",
    color: "from-cyan-500 to-blue-500 text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    title: "Computer Vision (CV)",
    desc: "YOLO, OpenCV, 33-Landmark Real-Time Tracking & Image Processing",
    badge: "Specialized",
    color: "from-purple-500 to-pink-500 text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
  {
    title: "NLP & RAG Pipelines",
    desc: "Vector Databases, LangChain, Hybrid Search & Enterprise LLMs",
    badge: "Advanced",
    color: "from-amber-500 to-orange-500 text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
];

const highlights = [
  {
    icon: Award,
    value: "4 Projects",
    label: "Production-Grade AI & Full-Stack Applications",
    color: "text-blue-400 bg-blue-500/15 border-blue-500/30",
  },
  {
    icon: BrainCircuit,
    value: "AI + Web",
    label: "End-to-End Engineering from Model to UI",
    color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
  },
  {
    icon: Cpu,
    value: "Real-Time",
    label: "Computer Vision & NLP Inference Pipelines",
    color: "text-purple-400 bg-purple-500/15 border-purple-500/30",
  },
];

const personalManifesto = [
  {
    title: "My Journey",
    subtitle: "From Algorithms to End-to-End AI",
    icon: Compass,
    desc: "Started with algorithmic problem-solving in Python and DSA challenges. As an Information Technology engineering student, I quickly realized my true passion lay at the intersection of machine learning research and building scalable, user-facing web applications that solve real-world bottlenecks.",
    color: "from-blue-500/20 via-blue-900/10 to-transparent border-blue-500/40 text-blue-400",
    badge: "The Backstory",
    colSpan: "lg:col-span-6 md:col-span-6 col-span-12",
  },
  {
    title: "Why AI?",
    subtitle: "The Ultimate Lever for Problem Solving",
    icon: Lightbulb,
    desc: "I am fascinated by how neural networks and mathematical models can perceive reality and reason through unstructured data. To me, AI is not just a buzzword—it is the most powerful tool ever created to eliminate human friction, whether in financial analytics, biomechanical tracking, or automated recruitment.",
    color: "from-purple-500/20 via-purple-900/10 to-transparent border-purple-500/40 text-purple-400",
    badge: "My Motivation",
    colSpan: "lg:col-span-6 md:col-span-6 col-span-12",
  },
  {
    title: "What I'm Learning",
    subtitle: "Pushing the Edge of Modern Tech",
    icon: BookOpen,
    desc: "Deep diving into autonomous **LLM Agentic Workflows**, advanced RAG pipelines with hybrid vector search, TensorRT model quantization for edge inference, and high-throughput asynchronous distributed backends in FastAPI and Python.",
    color: "from-emerald-500/20 via-emerald-900/10 to-transparent border-emerald-500/40 text-emerald-400",
    badge: "Active Growth",
    colSpan: "lg:col-span-4 md:col-span-4 col-span-12",
  },
  {
    title: "Career Goal",
    subtitle: "High-Impact Production Engineering",
    icon: Target,
    desc: "To join a fast-moving, innovative engineering team as an **AI / ML Engineer** or **Full-Stack AI Architect**, taking full ownership of complex intelligent systems from foundational model design all the way to production deployment and scaling.",
    color: "from-amber-500/20 via-amber-900/10 to-transparent border-amber-500/40 text-amber-400",
    badge: "North Star",
    colSpan: "lg:col-span-4 md:col-span-4 col-span-12",
  },
  {
    title: "Current Focus",
    subtitle: "Building & Shipping Every Day",
    icon: Activity,
    desc: "Actively deploying upgrades to **QuantLens AI** and **ResumeATS**, competing in global data science hackathons, contributing to open-source Python tooling, and refining my system design skills for large-scale ML infrastructure.",
    color: "from-cyan-500/20 via-cyan-900/10 to-transparent border-cyan-500/40 text-cyan-400",
    badge: "Right Now",
    colSpan: "lg:col-span-4 md:col-span-4 col-span-12",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#030712]">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-8 border-b border-zinc-800/80 pb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#06B6D4]/40 text-xs font-bold text-[#06B6D4] mb-6 shadow-inner">
              <Zap className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse" />
              <span>MY ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white font-heading leading-[1.08]">
              About <br className="hidden sm:inline" />
              <span className="text-gradient">Me & Expertise</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl text-center lg:text-right font-normal leading-relaxed">
            Transforming complex algorithmic theory into scalable, production-ready software systems with measurable business impact.
          </p>
        </motion.div>

        {/* 2-Column Grid Layout (No Empty Space) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Photo + Bio + Highlights (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Bio Card with Avatar */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#111827]/90 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* Avatar */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#06B6D4] shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-500 bg-zinc-900">
                  <Image
                    src="/profile/soham.jpg"
                    alt="Soham Mangroliya"
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-[10px] font-mono text-white font-bold">ML ENGINEER</span>
                  </div>
                </div>

                {/* Bio Text */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-black text-white mb-2 font-heading">
                    Soham Mangroliya
                  </h3>
                  <p className="text-sm font-mono text-[#06B6D4] font-semibold mb-4">
                    AI Engineer • Full-Stack Developer • Data Scientist
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                    {PERSONAL_INFO.bio}
                  </p>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    My focus lies at the intersection of **heavy data processing**, **neural network inference**, and **high-performance web architecture**. Whether deploying a YOLO computer vision pipeline or building a RAG document analyzer, I prioritize clean code, low latency, and intuitive user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border bg-[#111827]/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:scale-105 shadow-lg ${item.color}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="w-6 h-6" />
                      <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1 font-heading">
                        {item.value}
                      </div>
                      <div className="text-xs text-zinc-400 font-medium leading-snug">
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Core Competencies Checklist (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#111827]/90 backdrop-blur-xl shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/30">
                    <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
                  </div>
                  <h3 className="text-xl font-black text-white font-heading">
                    Core Technologies
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                  5/5 VERIFIED
                </span>
              </div>

              {/* Checklist Items */}
              <div className="flex flex-col gap-4">
                {coreCompetencies.map((comp) => (
                  <motion.div
                    key={comp.title}
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="p-4 rounded-2xl bg-[#0B0F19]/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="mt-1 p-1 rounded-full bg-emerald-500/20 text-emerald-400 group-hover:scale-125 transition-transform shrink-0 shadow-sm">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-white group-hover:text-[#06B6D4] transition-colors truncate">
                          {comp.title}
                        </h4>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-semibold shrink-0 ${comp.color}`}>
                          {comp.badge}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                        {comp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Architecture Style: Hybrid AI + REST</span>
                <span className="text-[#06B6D4] font-semibold">Ready for Production →</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ⭐⭐⭐ WHO IS SOHAM? — PERSONAL MANIFESTO GRID ⭐⭐⭐ */}
        <div className="mt-28 pt-20 border-t border-zinc-800/80">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400 mb-8 shadow-sm">
              <Rocket className="w-3.5 h-3.5 text-purple-400 animate-bounce" />
              <span>THE PERSON BEHIND THE CODE</span>
            </div>
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
              Who is <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Soham Mangroliya?</span>
            </h3>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Beyond syntax, code commits, and model accuracy—here is my story, what drives my obsession with artificial intelligence, and where I am heading next.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {personalManifesto.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`${item.colSpan} glass-card p-7 sm:p-8 rounded-3xl border bg-gradient-to-br ${item.color} backdrop-blur-xl shadow-xl flex flex-col justify-between group relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-colors" />
                  
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-white group-hover:scale-110 transition-transform shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-black text-white font-heading">
                            {item.title}
                          </h4>
                          <span className="text-xs font-mono text-zinc-400 font-medium">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-black/50 border border-white/10 uppercase tracking-wider shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                    <span>Soham&apos;s Manifesto</span>
                    <span>Verified ✓</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
