"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Clock, ArrowRight, BrainCircuit, Terminal, Layers } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function BlogSection() {
  const articles = [
    {
      title: "Building an Enterprise-Grade ATS Resume Parser with FastAPI & Tesseract OCR",
      excerpt: "An in-depth architectural breakdown of vector similarity scoring, regex keyword gap detection, and asynchronous queue processing for resume screening.",
      category: "MLOps & Backend",
      readTime: "8 min read",
      status: "Coming Soon ⚡",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      accent: "from-blue-500/20 via-transparent to-transparent",
      tags: ["FastAPI", "OCR", "NLP Scoring", "AsyncIO"]
    },
    {
      title: "FinBERT vs. Traditional Lexicons: Benchmarking Sentiment in Quantitative Trading",
      excerpt: "Evaluating transformer-based domain-specific financial NLP models against rule-based analyzers for live stock price momentum prediction and RSI correlation.",
      category: "Quantitative AI",
      readTime: "11 min read",
      status: "Drafting 📝",
      statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      accent: "from-purple-500/20 via-transparent to-transparent",
      tags: ["FinBERT", "Transformers", "Time-Series", "PyTorch"]
    },
    {
      title: "Achieving 30+ FPS in Real-Time 33-Landmark Pose Estimation using OpenCV",
      excerpt: "Overcoming GIL bottlenecks and webcam latency in Python through multithreaded frame capture, MediaPipe joint angle geometry, and biomechanical feedback loops.",
      category: "Computer Vision",
      readTime: "9 min read",
      status: "In Review 🔍",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      accent: "from-emerald-500/20 via-transparent to-transparent",
      tags: ["OpenCV", "MediaPipe", "Multithreading", "Geometry"]
    }
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Secondary Accent Glows for Depth */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-bold text-purple-400 mb-8 tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>WRITING & RESEARCH — COMING SOON</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
            Writing &amp; <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Research Notes</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Deep-dive technical breakdowns of AI architecture decisions, Python engineering patterns, and ML research are in active drafting.
            <span className="block mt-2 text-purple-300 font-mono font-semibold text-sm">✍️ First articles publishing soon — follow to get notified.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card p-7 rounded-3xl border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 bg-[#111827]/80 backdrop-blur-xl flex flex-col justify-between shadow-xl relative overflow-hidden group"
            >
              {/* Corner Glow */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${article.accent} rounded-full blur-2xl pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <BrainCircuit className="w-3.5 h-3.5 text-blue-400" />
                    {article.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${article.statusColor}`}>
                    {article.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-snug font-heading">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-[11px] font-mono font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Notify Me</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-emerald-900/30 border border-purple-500/30 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-300 mb-3">
                <BookOpen className="w-3.5 h-3.5" /> Currently Drafting
              </div>
              <h4 className="text-xl font-black text-white mb-2 font-heading">Be the first to read my articles.</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Deep dives on LLM agentic workflows, FinBERT financial NLP, and real-time computer vision pipelines are in active writing. Follow on LinkedIn or GitHub to get first access.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-500/20 transition-all hover:scale-105"
              >
                Follow on LinkedIn →
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-bold text-sm transition-all hover:scale-105"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
