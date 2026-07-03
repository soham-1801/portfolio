"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Mail, Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-zinc-800/80 pt-16 pb-12 relative text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-[#06B6D4] flex items-center justify-center text-white shadow-lg shadow-[#06B6D4]/20">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <span className="font-black text-xl tracking-wider text-white font-heading">
                SOHAM<span className="text-[#06B6D4]">.AI</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-normal">
              {PERSONAL_INFO.tagline} • Building production-ready artificial intelligence engines and low-latency computer vision applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-[#06B6D4] text-zinc-400 hover:text-black transition-all border border-zinc-800 hover:border-[#06B6D4] shadow-sm"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-blue-600 text-zinc-400 hover:text-white transition-all border border-zinc-800 hover:border-blue-600 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-emerald-500 text-zinc-400 hover:text-black transition-all border border-zinc-800 hover:border-emerald-500 shadow-sm"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ⭐ Quick Links (Projects, Resume, GitHub, LinkedIn, Email) ⭐ */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-[#06B6D4] transition-colors flex items-center gap-2">
                  <span>→ Featured Projects</span>
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>→ Download Resume ↓</span>
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>→ GitHub Profile</span>
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span>→ LinkedIn Network</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-2">
                  <span>→ Direct Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ⭐ Engineering Showcase ⭐ */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>AI Codebases</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li><a href="/projects/ai-ats-resume-analyzer" className="text-zinc-400 hover:text-white transition-colors block truncate">🤖 AI ATS Resume Analyzer</a></li>
              <li><a href="/projects/quantlens-ai" className="text-zinc-400 hover:text-white transition-colors block truncate">📈 QuantLens Financial Sentiment</a></li>
              <li><a href="/projects/gym-mentor-ai" className="text-zinc-400 hover:text-white transition-colors block truncate">🏋️ Gym Mentor Pose Coach</a></li>
              <li><a href="/projects/neuralart-studio" className="text-zinc-400 hover:text-white transition-colors block truncate">🎨 NeuralArt Style Transfer</a></li>
              <li><a href="#github" className="text-[#06B6D4] hover:underline font-mono text-xs pt-1 block">View Live GitHub Activity →</a></li>
            </ul>
          </div>

          {/* ⭐ Availability & Stack ⭐ */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span>Internship & Roles</span>
            </h4>
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-3">
              <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Open to Full-time Opportunities
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Looking to hire a dedicated AI/ML engineer? Let&apos;s schedule a discussion about your product architecture.
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=AI%20Engineering%20Role%20Discussion`}
                className="w-full py-2.5 rounded-xl bg-[#06B6D4]/15 hover:bg-[#06B6D4] text-[#06B6D4] hover:text-black font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all border border-[#06B6D4]/40 hover:border-[#06B6D4]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Initiate Contact</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 font-mono">
            <span>Built with Next.js 15 & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 flex items-center gap-1.5 transition-all hover:scale-105"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
