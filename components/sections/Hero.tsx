"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Sparkles, BrainCircuit, Cpu, Terminal, Database, Code2, Layers, Network } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

const floatingTechs = [
  { name: "Python", x: -140, y: -110, delay: 0, color: "border-amber-500/50 text-amber-300 bg-amber-500/15 shadow-amber-500/30" },
  { name: "PyTorch", x: 130, y: -120, delay: 0.2, color: "border-orange-500/50 text-orange-300 bg-orange-500/15 shadow-orange-500/30" },
  { name: "FastAPI", x: 160, y: 0, delay: 0.4, color: "border-emerald-500/50 text-emerald-300 bg-emerald-500/15 shadow-emerald-500/30" },
  { name: "React", x: 120, y: 130, delay: 0.6, color: "border-cyan-500/50 text-cyan-300 bg-cyan-500/15 shadow-cyan-500/30" },
  { name: "SQL", x: -20, y: 155, delay: 0.8, color: "border-blue-500/50 text-blue-300 bg-blue-500/15 shadow-blue-500/30" },
  { name: "Docker", x: -140, y: 110, delay: 1.0, color: "border-sky-500/50 text-sky-300 bg-sky-500/15 shadow-sky-500/30" },
  { name: "OpenCV", x: -160, y: 0, delay: 1.2, color: "border-green-500/50 text-green-300 bg-green-500/15 shadow-green-500/30" },
  { name: "RAG / LLMs", x: 0, y: -150, delay: 1.4, color: "border-pink-500/50 text-pink-300 bg-pink-500/15 shadow-pink-500/30" },
];

const typewriterTitles = [
  "AI Engineer",
  "Machine Learning Developer",
  "Data Scientist",
  "FastAPI Backend Engineer",
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; size: number; x: number; y: number; duration: number; delay: number }>>([]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mode, setMode] = useState<"UI" | "Terminal">("UI");

  useEffect(() => {
    const fullText = typewriterTitles[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText < fullText) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 70);
    } else if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && currentText > "") {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 35);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % typewriterTitles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-28 md:pt-40 md:pb-36 flex flex-col items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* 1. Grid Pattern & Noise Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-noise-texture opacity-60 pointer-events-none" />

      {/* 2. Gradient Blur & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-[#3B82F6]/25 via-[#8B5CF6]/15 to-[#06B6D4]/20 rounded-full blur-[140px] animate-pulse pointer-events-none duration-[8000ms]" />
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 3. Radial Light (Mouse Spotlight Effect) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-80"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.16), rgba(139, 92, 246, 0.08), transparent 80%)`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.2, y: `${p.y}%`, x: `${p.x}%` }}
            animate={{
              y: [`${p.y}%`, `${(p.y + 20) % 100}%`, `${p.y}%`],
              x: [`${p.x}%`, `${(p.x + 10) % 100}%`, `${p.x}%`],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            className="absolute rounded-full bg-[#06B6D4]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              boxShadow: "0 0 10px #06B6D4",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Mode Toggle Switch: UI vs Terminal */}
        <div className="mb-10 flex items-center justify-center">
          <div className="p-1 rounded-lg bg-zinc-900/50 border border-zinc-800/50 flex items-center gap-1 backdrop-blur-md">
            <button
              onClick={() => setMode("UI")}
              className={`px-4 py-1.5 rounded-md text-xs font-mono font-semibold uppercase transition-all duration-300 flex items-center gap-2 ${
                mode === "UI"
                  ? "bg-zinc-800 text-white shadow-sm ring-1 ring-zinc-700/50"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>UI Mode</span>
            </button>
            <button
              onClick={() => setMode("Terminal")}
              className={`px-4 py-1.5 rounded-md text-xs font-mono font-semibold uppercase transition-all duration-300 flex items-center gap-2 ${
                mode === "Terminal"
                  ? "bg-zinc-800 text-white shadow-sm ring-1 ring-zinc-700/50"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>CLI Mode</span>
            </button>
          </div>
        </div>

        {/* Main Hero Content: AnimatePresence Switch between UI and Terminal */}
        <AnimatePresence mode="wait">
          {mode === "Terminal" ? (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-zinc-800 bg-[#0B0F19]/95 shadow-2xl shadow-black/80 backdrop-blur-2xl text-left font-mono my-2"
            >
              {/* Terminal Header */}
              <div className="px-6 py-4 bg-[#111827] border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-3 text-xs text-zinc-400 font-semibold tracking-wider">bash - soham@ai-workstation:~</span>
                </div>
                <div className="text-[11px] text-zinc-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>INTERACTIVE SESSION</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 sm:p-10 space-y-7 text-sm sm:text-base leading-relaxed text-zinc-300">
                
                {/* Command 1: whoami */}
                <div>
                  <div className="flex items-center gap-2 text-[#06B6D4] font-bold mb-3">
                    <span>$</span>
                    <span className="text-white">whoami</span>
                  </div>
                  <div className="pl-5 border-l-2 border-[#06B6D4]/50 space-y-1.5 py-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Soham Mangroliya</div>
                    <div className="text-blue-400 font-bold">AI Engineer</div>
                    <div className="text-purple-400 font-bold">Machine Learning</div>
                    <div className="text-cyan-400 font-bold">Data Science</div>
                  </div>
                </div>

                {/* Command 2: stats --summary */}
                <div>
                  <div className="flex items-center gap-2 text-[#06B6D4] font-bold mb-3">
                    <span>$</span>
                    <span className="text-white">stats --summary</span>
                  </div>
                  <div className="pl-5 border-l-2 border-emerald-500/50 py-3 bg-zinc-900/60 rounded-r-2xl space-y-2 text-xs sm:text-sm font-medium">
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-500 w-24">Projects :</span>
                      <span className="text-emerald-400 font-bold font-mono text-base">4</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-500 w-24">GitHub :</span>
                      <a href="https://github.com/soham-1801" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline font-bold">soham-1801</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-500 w-24">Status :</span>
                      <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                        🟢 Open to Internship
                      </span>
                    </div>
                  </div>
                </div>

                {/* Command 3: execute --cta */}
                <div>
                  <div className="flex items-center gap-2 text-[#06B6D4] font-bold mb-4">
                    <span>$</span>
                    <span className="text-white">execute --action</span>
                    <span className="w-2.5 h-5 bg-[#06B6D4] animate-pulse inline-block ml-1 shadow-[0_0_8px_#06B6D4]" />
                  </div>
                  <div className="flex flex-wrap gap-3 pl-5">
                    <a
                      href="#projects"
                      onClick={() => setMode("UI")}
                      className="px-5 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563eb] text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg"
                    >
                      <span>./view_projects.sh</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
                    >
                      <span>./download_resume.pdf</span>
                    </a>
                    <button
                      onClick={() => setMode("UI")}
                      className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 text-xs sm:text-sm font-mono transition-all"
                    >
                      <span>[ Switch to UI Mode ]</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            <motion.div
              key="ui"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Side: Typography & CTA Buttons */}
              <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start py-6">
                
                {/* Minimal AI Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111827] border border-[#1F2937] text-[#94A3B8] text-xs font-mono tracking-widest uppercase mb-10 shadow-lg backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                  <span>AVAILABLE FOR AI/ML & PYTHON INTERNSHIPS</span>
                </motion.div>

                {/* SOHAM MANGROLIYA - 2-Line Editorial Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] mb-8 font-heading"
                >
                  <div className="text-white">SOHAM</div>
                  <div className="text-gradient">MANGROLIYA</div>
                </motion.h1>

                {/* Animated AI Engineer Subtitle Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-3 min-h-[44px] sm:min-h-[52px] mb-6"
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06B6D4] font-heading tracking-wide drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    AI Engineer
                  </span>
                  <span className="text-zinc-600 text-2xl hidden sm:inline">•</span>
                  <div className="flex items-center text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-200 font-mono">
                    <span>{currentText}</span>
                    <span className="ml-1.5 w-1 h-6 sm:h-8 bg-[#06B6D4] animate-pulse inline-block shadow-[0_0_10px_#06B6D4]" />
                  </div>
                </motion.div>

                {/* Tagline / Clear Value Proposition */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg sm:text-xl lg:text-2xl text-[#94A3B8] max-w-2xl font-normal leading-relaxed mb-12 text-center lg:text-left"
                >
                  Building production-ready AI applications using{" "}
                  <span className="text-white font-semibold">Machine Learning</span>,{" "}
                  <span className="text-white font-semibold">Computer Vision</span>,{" "}
                  <span className="text-white font-semibold">FastAPI</span> and{" "}
                  <span className="text-white font-semibold">React</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12 lg:mb-0"
                >
                  <MagneticButton
                    as="a"
                    href="#projects"
                    className="px-8 py-3.5 bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-sm sm:text-base flex items-center gap-2 transition-all duration-300 group shadow-lg shadow-white/5"
                  >
                    <span>Explore Projects</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block font-mono font-bold">→</span>
                  </MagneticButton>

                  <MagneticButton
                    as="a"
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 bg-transparent hover:bg-zinc-800/50 text-zinc-300 hover:text-white border border-zinc-700 font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all duration-300 group"
                  >
                    <span>Download Resume</span>
                    <Download className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-y-1 transition-all" />
                  </MagneticButton>

                  <MagneticButton
                    as="a"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-transparent hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all duration-300 group"
                    title="GitHub Repository"
                  >
                    <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </MagneticButton>

                  <MagneticButton
                    as="a"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-transparent hover:bg-zinc-800 text-zinc-400 hover:text-[#0077b5] border border-zinc-800 transition-all duration-300 group"
                    title="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </MagneticButton>
                </motion.div>

                {/* Mobile-only: Static Tech Stack Grid (orbital is desktop-only) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-wrap justify-center lg:hidden gap-2 mt-8"
                >
                  {floatingTechs.map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold flex items-center gap-1.5 ${tech.color}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {tech.name}
                    </span>
                  ))}
                </motion.div>

              </div>

              {/* Right Side: Animated AI Neural Network & Floating Tech Orbit — Desktop Only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 items-center justify-center relative min-h-[420px] sm:min-h-[480px] w-full hidden lg:flex"
              >
                {/* SVG Neural Connecting Lines Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="-200 -200 400 400">
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {floatingTechs.map((tech, i) => (
                    <g key={i}>
                      {/* Base connecting line */}
                      <line
                        x1="0"
                        y1="0"
                        x2={tech.x}
                        y2={tech.y}
                        stroke="url(#line-gradient)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="animate-[pulse_3s_ease-in-out_infinite]"
                      />
                      {/* Animated Data Packet travelling on the network line */}
                      <circle r="3" fill="#06B6D4" className="filter drop-shadow-[0_0_8px_#06B6D4]">
                        <animateMotion
                          path={`M 0 0 L ${tech.x} ${tech.y}`}
                          dur={`${3 + (i % 3)}s`}
                          repeatCount="indefinite"
                          begin={`${tech.delay}s`}
                        />
                      </circle>
                    </g>
                  ))}
                </svg>

                {/* Central Glowing 3D AI Brain Node */}
                <div className="relative z-10 flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#111827] via-[#0B0F19] to-[#1F2937] border-2 border-[#06B6D4] shadow-[0_0_50px_rgba(6,182,212,0.3)] backdrop-blur-2xl group cursor-pointer hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3B82F6]/30 to-[#06B6D4]/30 animate-pulse pointer-events-none" />
                  <div className="p-3 rounded-2xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 mb-2 shadow-inner">
                    <BrainCircuit className="w-10 h-10 sm:w-12 sm:h-12 text-[#06B6D4] drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-bounce" />
                  </div>
                  <span className="text-xs font-mono font-black tracking-widest text-white uppercase drop-shadow">AI ENGINEER</span>
                  <span className="text-[9px] font-mono text-[#06B6D4]">SOHAM MANGROLIYA</span>
                </div>

                {/* Concentric Orbital Radar Rings */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dashed border-cyan-500/30 animate-[spin_30s_linear_infinite] pointer-events-none" />
                <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-blue-500/20 pointer-events-none animate-pulse" />
                <div className="absolute w-96 h-96 sm:w-[420px] sm:h-[420px] rounded-full border border-zinc-800/40 pointer-events-none" />

                {/* Floating Technology Pills */}
                {floatingTechs.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, idx % 2 === 0 ? -10 : 10, 0],
                      x: [0, idx % 3 === 0 ? 8 : -8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.5 + tech.delay * 0.2 },
                      scale: { duration: 0.5, delay: 0.5 + tech.delay * 0.2 },
                      y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut", delay: tech.delay },
                      x: { duration: 5 + idx, repeat: Infinity, ease: "easeInOut", delay: tech.delay },
                    }}
                    style={{
                      transform: `translate(${tech.x}px, ${tech.y}px)`,
                    }}
                    className={`absolute z-20 px-4 py-2.5 rounded-2xl border backdrop-blur-2xl shadow-xl font-mono text-xs sm:text-sm font-extrabold tracking-wider flex items-center gap-2 transition-all duration-300 hover:scale-110 cursor-default ${tech.color}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Animated Scroll Down Indicator ↓ at Bottom Center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-auto"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#94A3B8]">↓ Scroll</span>
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-9 h-9 rounded-full bg-[#111827] border border-[#1F2937] flex items-center justify-center text-[#F8FAFC] hover:border-[#3B82F6] transition-colors shadow-lg"
          aria-label="Scroll Down"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#06B6D4]" />
        </motion.a>
      </motion.div>
    </section>
  );
}
