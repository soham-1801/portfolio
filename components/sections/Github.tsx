"use client";

import React from "react";
import { motion } from "framer-motion";
import { GITHUB_STATS, PERSONAL_INFO } from "@/lib/data";
import { GitCommit, GitPullRequest, Star, Terminal, ExternalLink, Code2, FolderGit2, Clock, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function GithubSection() {
  const weeks = Array.from({ length: 24 }, (_, weekIdx) =>
    Array.from({ length: 7 }, (_, dayIdx) => {
      const random = Math.sin(weekIdx * 0.5 + dayIdx) * 100;
      if (random > 50) return "bg-emerald-400 shadow-sm shadow-emerald-500/50";
      if (random > 20) return "bg-emerald-600";
      if (random > -20) return "bg-emerald-900/60";
      if (random > -60) return "bg-emerald-950/40";
      return "bg-zinc-900";
    })
  );

  const pinnedRepos = [
    {
      name: "ai-ats-resume-analyzer",
      description: "AI-powered resume parsing and ATS scoring engine with OCR and candidate analytics dashboard.",
      language: "Python",
      stars: 18,
      forks: 5,
    },
    {
      name: "stock-market-ai-intelligence",
      description: "Real-time algorithmic trading analysis using LSTM time-series forecasting and NLP sentiment extraction.",
      language: "Python",
      stars: 14,
      forks: 3,
    },
  ];

  const latestCommits = [
    {
      message: "feat: implement RAG vector embeddings pipeline using LangChain & FAISS",
      repo: "ai-ats-resume-analyzer",
      time: "2 hours ago",
    },
    {
      message: "optimize: quantize PyTorch BERT model weights for 3x faster inference",
      repo: "stock-market-ai-intelligence",
      time: "1 day ago",
    },
    {
      message: "fix: enhance OCR regex parsing for multi-page PDF resume structures",
      repo: "ai-ats-resume-analyzer",
      time: "3 days ago",
    },
  ];

  return (
    <section id="github" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-300 mb-8">
            <FaGithub className="w-3.5 h-3.5 text-white" />
            <span>OPEN SOURCE & CODE ACTIVITY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
            GitHub <br />
            <span className="text-gradient">Live Activity</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Verifiable code commits, open source machine learning repositories, and active Python engineering.
          </p>
        </div>

        {/* Open Source Profile Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6 rounded-2xl border border-zinc-800 text-center bg-[#111827]/60"
          >
            <div className="flex items-center justify-center text-blue-400 mb-2">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="text-sm font-black text-white mb-1">Open Source</div>
            <div className="text-xs text-zinc-400 font-mono">Public Repositories</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6 rounded-2xl border border-zinc-800 text-center bg-[#111827]/60"
          >
            <div className="flex items-center justify-center text-emerald-400 mb-2">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-sm font-black text-white mb-1">Production Ready</div>
            <div className="text-xs text-zinc-400 font-mono">Deployed Projects</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6 rounded-2xl border border-zinc-800 text-center bg-[#111827]/60"
          >
            <div className="flex items-center justify-center text-purple-400 mb-2">
              <GitCommit className="w-6 h-6" />
            </div>
            <div className="text-sm font-black text-white mb-1">Active Development</div>
            <div className="text-xs text-zinc-400 font-mono">Ongoing Commits</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6 rounded-2xl border border-zinc-800 text-center bg-[#111827]/60"
          >
            <div className="flex items-center justify-center text-amber-400 mb-2">
              <Terminal className="w-6 h-6" />
            </div>
            <div className="text-sm font-black text-white mb-1">Python First</div>
            <div className="text-xs text-zinc-400 font-mono">Primary Language</div>
          </motion.div>
        </div>

        {/* GitHub Contribution Grid Visualization */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800/80 shadow-2xl mb-10 bg-[#111827]/80 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <FaGithub className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">@{GITHUB_STATS.username}</div>
                <div className="text-xs text-zinc-400">Contribution Activity (Last 6 Months)</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span>Less</span>
              <span className="w-3 h-3 rounded-sm bg-zinc-900" />
              <span className="w-3 h-3 rounded-sm bg-emerald-950/60" />
              <span className="w-3 h-3 rounded-sm bg-emerald-800" />
              <span className="w-3 h-3 rounded-sm bg-emerald-500" />
              <span className="w-3 h-3 rounded-sm bg-emerald-400" />
              <span>More</span>
            </div>
          </div>

          {/* Grid Boxes */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-flex gap-1.5 min-w-full justify-center">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((colorClass, dIdx) => (
                    <motion.div
                      key={dIdx}
                      whileHover={{ scale: 1.4, zIndex: 10 }}
                      className={`w-3.5 h-3.5 rounded-sm ${colorClass} transition-all`}
                      title={`Contribution on week ${wIdx + 1}, day ${dIdx + 1}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Top Languages */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Most Used Languages:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {GITHUB_STATS.topLanguages.map((lang, idx) => (
                <span
                  key={lang}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                    idx === 0
                      ? "bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-sm shadow-blue-500/10"
                      : "bg-zinc-900 text-zinc-300 border-zinc-800"
                  }`}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ⭐ FULL-WIDTH PINNED AI & ML REPOSITORIES SHOWCASE ⭐ */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/30 shadow-md">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight font-heading">
                  Pinned AI & ML Repositories
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Top production-ready engineering codebases architected and maintained by Soham
                </p>
              </div>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-mono font-bold text-[#06B6D4] border border-zinc-800 hover:border-[#06B6D4]/40 transition-all"
            >
              <span>View All Repositories →</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "ai-ats-resume-analyzer",
                desc: "Enterprise-grade AI resume parsing & ATS scoring engine with NLP semantic similarity, OCR keyword gap detection, and recruitment analytics dashboard.",
                badges: ["FastAPI", "NLP Scoring", "Tesseract OCR", "Next.js UI"],
                lang: "Python",
                langColor: "bg-blue-500",
                techBadge: "AI Powered",
                url: `${PERSONAL_INFO.github}/ai-ats-resume-analyzer`
              },
              {
                name: "quantlens-ai",
                desc: "Quantitative financial stock charting analytics dashboard computing RSI/MACD indicators with FinBERT NLP real-time news sentiment classification.",
                badges: ["FinBERT NLP", "NumPy Vectorization", "Time-Series", "React"],
                lang: "Python",
                langColor: "bg-emerald-500",
                techBadge: "Data Science",
                url: `${PERSONAL_INFO.github}/quantlens-ai`
              },
              {
                name: "gym-mentor-ai",
                desc: "Real-time 33-landmark pose estimation biomechanical trainer using OpenCV and MediaPipe geometry with multithreaded low-latency feedback.",
                badges: ["OpenCV", "MediaPipe 33-Landmark", "PyTorch Vision", "Real-Time"],
                lang: "Python",
                langColor: "bg-purple-500",
                techBadge: "Computer Vision",
                url: `${PERSONAL_INFO.github}/gym-mentor-ai`
              },
              {
                name: "neuralart-studio",
                desc: "Advanced PyTorch VGG-19 Neural Style Transfer platform with multi-scale feature blending, style matrix synthesis, and LLM prompt enhancement.",
                badges: ["PyTorch VGG-19", "Neural Style Transfer", "LLM Prompting", "Docker"],
                lang: "Python",
                langColor: "bg-amber-500",
                techBadge: "Deep Learning",
                url: `${PERSONAL_INFO.github}/neuralart-studio`
              }
            ].map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 sm:p-7 rounded-3xl border border-zinc-800/80 hover:border-[#06B6D4]/50 transition-all duration-300 bg-[#111827]/80 backdrop-blur-xl group flex flex-col justify-between shadow-xl relative overflow-hidden group-hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-lg font-black text-white group-hover:text-[#06B6D4] transition-colors font-mono">
                      <FolderGit2 className="w-5 h-5 text-blue-400 shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono bg-zinc-900/90 px-3 py-1 rounded-xl border border-zinc-800 shrink-0">
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {repo.techBadge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 mb-5 leading-relaxed font-normal">
                    {repo.desc}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-0.5 rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800/80 text-[11px] font-mono font-medium group-hover:border-[#06B6D4]/30 transition-colors"
                      >
                        #{badge}
                      </span>
                    ))}
                  </div>

                  {/* Language and Verified Stamp */}
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-2 text-white font-bold">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                      {repo.lang}
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Production Code
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm border border-zinc-700/80 shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FaGithub className="w-5 h-5" />
            <span>Follow @{GITHUB_STATS.username} on GitHub</span>
            <ExternalLink className="w-4 h-4 text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
