"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles, Rocket, BrainCircuit, Cpu, BookOpen, ArrowDown } from "lucide-react";
import { EDUCATION_DATA } from "@/lib/data";

const timelineMilestones = [
  {
    year: "2023 - 2024",
    title: "Started AI & Python Foundations",
    company: "Self-Directed Research & Algorithmic Modeling",
    location: "Remote / Open Source",
    icon: Rocket,
    color: "from-amber-500 to-orange-500 text-amber-400 border-amber-500/30 bg-amber-500/10",
    desc: [
      "Mastered Python OOP, data structures, and high-throughput asynchronous programming.",
      "Performed comprehensive Exploratory Data Analysis (EDA) and statistical modeling with Pandas, NumPy, and Scikit-Learn.",
      "Built interactive Streamlit and web dashboards to visualize complex predictive analytics."
    ],
    badges: ["Python 3.11", "Pandas & NumPy", "Scikit-Learn", "Statistical EDA", "Streamlit"]
  },
  {
    year: "Early 2024",
    title: "Built AI ATS Resume Analyzer ⭐",
    company: "Hero Production Project Lead",
    location: "Enterprise Architecture",
    icon: BrainCircuit,
    color: "from-blue-500 to-indigo-500 text-blue-400 border-blue-500/30 bg-blue-500/10",
    desc: [
      "Architected an automated multi-format resume screening engine using NLP semantic similarity and Tesseract OCR.",
      "Achieved sub-2-second real-time candidate scoring and keyword gap detection against custom Job Descriptions.",
      "Integrated secure JWT authentication and a full recruitment leaderboard analytics dashboard."
    ],
    badges: ["FastAPI Backend", "OCR (Tesseract)", "NLP Semantic Scoring", "JWT Auth", "Next.js UI"]
  },
  {
    year: "Mid 2024",
    title: "Engineered QuantLens AI Platform",
    company: "Quantitative Stock Analytics & Sentiment Engine",
    location: "Financial Tech Research",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500 text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    desc: [
      "Developed a real-time stock charting dashboard computing technical indicators (RSI, MACD, Bollinger Bands).",
      "Integrated FinBERT domain NLP models to classify financial news sentiment into intelligent buy/hold recommendations.",
      "Optimized NumPy vectorization for rapid time-series data processing without UI freeze."
    ],
    badges: ["Python Financial APIs", "FinBERT NLP", "Time-Series Vectorization", "React Charts", "Tailwind CSS"]
  },
  {
    year: "Late 2024",
    title: "Developed Gym Mentor AI Coach",
    company: "Real-Time Computer Vision & Biomechanical Tracking",
    location: "Low-Latency AI Systems",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500 text-purple-400 border-purple-500/30 bg-purple-500/10",
    desc: [
      "Engineered a 33-landmark pose estimation trainer using OpenCV and MediaPipe joint angle geometry.",
      "Solved webcam frame-rate bottlenecks with multithreaded capture loops, maintaining a steady 30+ FPS inference.",
      "Delivered instant voice and visual feedback for squat depth and exercise ergonomics correction."
    ],
    badges: ["OpenCV", "MediaPipe 33-Landmark", "PyTorch Vision", "Multithreading", "Real-Time Video"]
  },
  {
    year: "2025 - Present",
    title: "NeuralArt Studio & AI Engineering Lead",
    company: "LDRP Institute of Technology & Research",
    location: "Gandhinagar, India",
    icon: Sparkles,
    color: "from-cyan-500 to-blue-500 text-[#06B6D4] border-[#06B6D4]/30 bg-[#06B6D4]/10",
    desc: [
      "Built NeuralArt Studio using PyTorch VGG-19 Neural Style Transfer with multi-scale feature blending and LLM prompt enhancement.",
      "Leading academic research exploring Retrieval-Augmented Generation (RAG) and autonomous agentic workflows.",
      "Mentoring peer developers on production containerization (Docker) and clean RESTful backend design."
    ],
    badges: ["PyTorch VGG-19", "Neural Style Transfer", "LLM Prompting", "RAG Pipelines", "Docker MLOps"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#06B6D4]/40 text-xs font-bold text-[#06B6D4] mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse" />
            <span>PRACTICAL ENGINEERING JOURNEY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
            Animated <br />
            <span className="text-gradient">AI Timeline & Milestones</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            From algorithmic foundations to shipping production-ready machine learning engines and computer vision pipelines. Here is my continuous evolution as an AI Engineer.
          </p>
        </div>

        {/* ⭐ ANIMATED VERTICAL TIMELINE WITH PROGRESS ARROWS ↓ ⭐ */}
        <div className="relative border-l-2 border-[#06B6D4]/40 ml-4 md:ml-28 space-y-12">
          {timelineMilestones.map((milestone, idx) => {
            const Icon = milestone.icon;
            const isLast = idx === timelineMilestones.length - 1;
            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Pulsating Node */}
                <div className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-[#030712] border-2 border-[#06B6D4] flex items-center justify-center shadow-lg shadow-[#06B6D4]/50 group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-ping" />
                </div>

                {/* Date Badge on Desktop Left */}
                <div className="hidden md:flex absolute -left-40 top-1 w-32 items-center justify-end">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-black text-[#06B6D4] shadow-sm group-hover:border-[#06B6D4]/50 transition-colors">
                    {milestone.year}
                  </span>
                </div>

                {/* Milestone Card */}
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-[#111827]/90 backdrop-blur-xl group-hover:border-[#06B6D4]/50 transition-all duration-300 shadow-2xl relative overflow-hidden group-hover:y-[-4px]">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* Top Mobile Year Badge & Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-2xl border flex items-center justify-center shadow-md shrink-0 ${milestone.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="md:hidden inline-block px-2.5 py-0.5 rounded-md bg-[#06B6D4]/15 text-[#06B6D4] text-[10px] font-mono font-bold mb-1 border border-[#06B6D4]/30">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-gradient transition-all font-heading leading-snug">
                          {milestone.title}
                        </h3>
                        <div className="text-sm font-semibold text-zinc-300 mt-0.5">
                          {milestone.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono bg-zinc-900/90 px-3 py-1.5 rounded-xl border border-zinc-800 shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{milestone.location}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {milestone.desc.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills / Tech Used Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                    {milestone.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-xl bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-xs font-mono font-bold group-hover:border-[#06B6D4]/30 transition-colors"
                      >
                        #{badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Arrow Connector ↓ to next milestone */}
                {!isLast && (
                  <div className="my-6 flex items-center justify-start pl-6 md:pl-8 text-[#06B6D4] opacity-70">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="p-2 rounded-full bg-zinc-900 border border-[#06B6D4]/40 shadow-md"
                    >
                      <ArrowDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
