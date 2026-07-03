"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, Cpu, BrainCircuit, Database, Code2, Server, Terminal, Sparkles, MapPin } from "lucide-react";

const coursework = [
  {
    title: "Artificial Intelligence & Machine Learning",
    desc: "Deep neural networks, supervised/unsupervised learning, predictive modeling, and algorithmic model training with PyTorch & Scikit-Learn.",
    icon: BrainCircuit,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Object-Oriented Programming (Python)",
    desc: "Clean Python class design, modular code architecture, encapsulation, inheritance, design patterns, and asynchronous execution.",
    icon: Terminal,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Computer Vision & Pose Tracking",
    desc: "Real-time image processing, OpenCV pipelines, MediaPipe 33-landmark skeleton tracking, OCR extraction, and neural style transfer.",
    icon: Cpu,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    title: "Natural Language Processing (NLP) & RAG",
    desc: "Text semantic similarity scoring, keyword gap analysis, LangChain integrations, FinBERT sentiment models, and prompt engineering.",
    icon: Code2,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    title: "FastAPI & RESTful API Architecture",
    desc: "Building high-throughput Python backend microservices, Pydantic data schemas, endpoint routing, and JWT authentication pipelines.",
    icon: Server,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Data Science & Statistical Modeling",
    desc: "Exploratory Data Analysis (EDA), NumPy vectorization, Pandas dataframes, financial time-series evaluation, and data visualization.",
    icon: Database,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#06B6D4]/40 text-xs font-bold text-[#06B6D4] mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse" />
            <span>ACADEMIC FOUNDATION & COURSEWORK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
            Formal <br />
            <span className="text-gradient">Education & Degree</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Solid computer engineering principles combined with rigorous academic training in Information Technology and artificial intelligence systems.
          </p>
        </div>

        {/* ⭐⭐⭐ MAIN COLLEGE DEGREE CARD ⭐⭐⭐ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-10 rounded-3xl border border-zinc-800 bg-[#111827]/90 backdrop-blur-xl shadow-2xl relative overflow-hidden mb-12 group hover:border-[#06B6D4]/50 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 relative z-10">
            
            {/* College Logo + Degree Details */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left flex-1">
              
              {/* College Logo Box */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-black p-1 border border-zinc-700/80 shadow-2xl shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/profile/ldrp-logo.jpg"
                  alt="LDRP Institute Logo"
                  fill
                  sizes="(max-width: 768px) 128px, 144px"
                  className="object-contain rounded-xl p-1"
                />
              </div>

              {/* Degree Title & College Info */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400 mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>UNDERGRADUATE ENGINEERING DEGREE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-heading mb-2 leading-snug">
                  Bachelor of Engineering (B.E.) in Information Technology
                </h3>
                <div className="text-base sm:text-lg font-bold text-zinc-300 mb-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <span className="text-[#06B6D4]">LDRP Institute of Technology and Research</span>
                  <span className="hidden sm:inline text-zinc-600">•</span>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1 bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Gandhinagar, Gujarat
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl font-normal">
                  Comprehensive engineering curriculum focused on algorithmic complexity, database architecture, network security, and advanced computational intelligence. Actively applying classroom theory to production AI/ML software development.
                </p>
              </div>
            </div>

            {/* ⭐ Key Academic Metrics Column (Semester, CGPA, Status) ⭐ */}
            <div className="flex flex-wrap lg:flex-col items-center lg:items-end justify-center gap-3 shrink-0 w-full lg:w-auto pt-6 lg:pt-0 border-t lg:border-t-0 border-zinc-800/80">
              
              {/* Semester Badge */}
              <div className="p-4 rounded-2xl bg-[#0B0F19] border border-[#06B6D4]/40 flex items-center gap-3 shadow-lg hover:scale-105 transition-transform w-full sm:w-auto min-w-[220px] justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#06B6D4]/15 text-[#06B6D4]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Current Semester</div>
                    <div className="text-base font-black text-white font-heading">7th Semester</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#06B6D4]/10 text-[#06B6D4] font-bold">2023-2027</span>
              </div>

              {/* CGPA Badge */}
              <div className="p-4 rounded-2xl bg-[#0B0F19] border border-emerald-500/40 flex items-center gap-3 shadow-lg hover:scale-105 transition-transform w-full sm:w-auto min-w-[220px] justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Academic CGPA</div>
                    <div className="text-base font-black text-white font-heading">7.05 / 10.0</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">MERIT</span>
              </div>

              {/* Enrollment Status */}
              <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Status: Enrolled & Active Undergraduate</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ⭐⭐⭐ RELEVANT COURSEWORK & SUBJECTS GRID (Zero Empty Space!) ⭐⭐⭐ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight font-heading">
                Relevant Coursework & Core Engineering Competencies
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Key academic subjects mastered during Bachelor of Engineering in Information Technology
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursework.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass-card p-6 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 bg-[#111827]/80 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 shadow-xl group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#06B6D4] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Curriculum Module</span>
                    <span className="text-emerald-400 font-bold">Completed ✓</span>
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
