"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "@/lib/data";
import { Project } from "@/types";
import { 
  ExternalLink, Sparkles, FolderGit2, BookOpen, ArrowRight, 
  Star, GitCommit, Clock, CheckCircle2, X, Layers, Terminal, 
  AlertTriangle, Lightbulb, TrendingUp, Cpu 
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectCategories = ["All", "AI / ML", "FastAPI", "React", "Computer Vision", "Python"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get('project');
      if (projectId) {
        const proj = PROJECTS_DATA.find((p) => p.id === projectId);
        if (proj) setSelectedProject(proj);
      } else {
        setSelectedProject(null);
      }
    };
    
    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `?project=${project.id}`);
  };

  const closeModal = () => {
    setSelectedProject(null);
    const newUrl = window.location.pathname + window.location.hash;
    window.history.pushState(null, '', newUrl);
  };

  const filteredProjects = filter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        const text = `${p.title} ${p.category} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
        if (filter === "AI / ML") return text.includes("ai") || text.includes("ml") || text.includes("resume") || text.includes("stock") || text.includes("neural");
        if (filter === "FastAPI") return text.includes("fastapi") || text.includes("python") || text.includes("backend");
        if (filter === "React") return text.includes("react") || text.includes("next") || text.includes("frontend");
        if (filter === "Computer Vision") return text.includes("cv") || text.includes("vision") || text.includes("opencv") || text.includes("pose") || text.includes("mediapipe") || text.includes("gym");
        if (filter === "Python") return text.includes("python") || text.includes("pytorch") || text.includes("flask") || text.includes("fastapi");
        return text.includes(filter.toLowerCase());
      });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern bg-[#030712]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-bold text-[#06B6D4] mb-8 tracking-wide backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse" />
            <span>PORTFOLIO SHOWCASE & CASE STUDIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
            Featured <br />
            <span className="text-gradient">AI & Python Projects</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Real-world systems engineered with PyTorch, OpenCV, LangChain, and high-performance Python backends. Click on any project or the Case Study button to explore comprehensive engineering architecture and metrics.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 font-mono ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 text-white shadow-lg shadow-purple-500/25 scale-105 border border-purple-400/30"
                  : "bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-[#06B6D4]/40 hover:bg-zinc-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid — Symmetrical 2x2 Layout for Zero Empty Space */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isTopFeatured = idx < 2 || project.featured;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-3xl overflow-hidden border border-zinc-800/80 flex flex-col justify-between group hover:border-[#06B6D4]/50 hover:shadow-2xl hover:shadow-[#06B6D4]/15 transition-all duration-500 bg-[#111827]/95 backdrop-blur-xl"
                >
                  <div>
                    {/* Card Image Banner with Sleek macOS Window Style & Hover Zoom */}
                    {project.image && (
                      <div 
                        onClick={() => openModal(project)}
                        className="relative block w-full h-64 sm:h-72 overflow-hidden bg-zinc-950 border-b border-zinc-800/80 cursor-pointer"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                        
                        {/* Hover Call to Action */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <span className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white text-sm font-extrabold flex items-center gap-2 shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                            <BookOpen className="w-4 h-4" />
                            <span>Explore Case Study & Architecture ↓</span>
                          </span>
                        </div>

                        {/* Status Badge Top Left */}
                        {project.status && (
                          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-zinc-950/90 border border-emerald-500/50 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2 shadow-lg backdrop-blur-md z-10">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span>{project.status}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Card Top Banner / Category & Featured */}
                    <div className="px-7 py-3.5 flex items-center justify-between border-b border-zinc-800/60 bg-zinc-900/60">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-[#06B6D4]" />
                        <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-bold">
                          {project.category}
                        </span>
                      </div>
                      {isTopFeatured && (
                        <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/40 text-[11px] font-mono font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} /> FEATURED PROJECT
                        </span>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-7">
                      <h3 
                        onClick={() => setSelectedProject(project)}
                        className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-[#06B6D4] transition-all leading-snug cursor-pointer font-heading"
                      >
                        {project.title}
                      </h3>

                      {/* Problem Solved Highlight Box */}
                      {project.problem && (
                        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-purple-950/20 to-transparent border border-blue-500/30 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed shadow-inner">
                          <span className="font-extrabold text-blue-400 flex items-center gap-1.5 mb-1 text-sm">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            Problem Solved:
                          </span>
                          <span className="text-zinc-300 leading-relaxed">{project.problem}</span>
                        </div>
                      )}

                      {!project.problem && (
                        <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed font-normal">
                          {project.description}
                        </p>
                      )}

                      {/* ⭐⭐⭐⭐⭐ PROJECT TECH CAPABILITY BADGES ⭐⭐⭐⭐⭐ */}
                      <div className="grid grid-cols-3 gap-3 mb-6 p-3.5 rounded-2xl bg-[#0B0F19]/90 border border-zinc-800/80 text-xs font-mono shadow-md">
                        <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-zinc-900/80 border border-blue-500/20 text-center">
                          <span className="text-blue-400 font-extrabold text-xs flex items-center gap-1 mb-0.5">
                            <Sparkles className="w-3 h-3" />
                            {project.stars}
                          </span>
                          <span className="text-[10px] text-zinc-500 uppercase font-semibold">Stack</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-zinc-900/80 border border-emerald-500/20 text-center">
                          <span className="text-emerald-400 font-extrabold text-xs flex items-center gap-1 mb-0.5">
                            <GitCommit className="w-3 h-3" />
                            {project.commits}
                          </span>
                          <span className="text-[10px] text-zinc-500 uppercase font-semibold">Backend</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-zinc-900/80 border border-purple-500/20 text-center">
                          <span className="text-purple-400 font-extrabold text-xs flex items-center gap-1 mb-0.5">
                            <Clock className="w-3 h-3" />
                            {project.duration}
                          </span>
                          <span className="text-[10px] text-zinc-500 uppercase font-semibold">Model</span>
                        </div>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-xl bg-zinc-900/90 text-zinc-300 border border-zinc-800/80 text-xs font-mono font-semibold group-hover:border-[#06B6D4]/40 transition-colors shadow-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Buttons */}
                  <div className="p-7 pt-4 border-t border-zinc-800/80 bg-zinc-900/50 flex items-center justify-between gap-3">
                    <button
                      onClick={() => openModal(project)}
                      className="inline-flex items-center justify-center gap-2.5 text-sm font-black px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#3B82F6] via-purple-600 to-[#06B6D4] hover:opacity-95 text-white shadow-xl shadow-[#3B82F6]/20 transition-all flex-1 hover:scale-[1.02]"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Case Study & Architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-zinc-300 hover:text-white transition-colors p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 shadow-md hover:scale-105"
                        title="View GitHub Repository"
                      >
                        <FaGithub className="w-5 h-5 text-zinc-300 hover:text-white transition-colors" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 text-sm font-black p-3.5 rounded-2xl bg-white text-zinc-950 hover:bg-zinc-200 shadow-md transition-all hover:scale-105"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ⭐⭐⭐⭐⭐ INTERACTIVE CASE STUDY MODAL ⭐⭐⭐⭐⭐ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0B0F19] border border-zinc-700/80 rounded-3xl shadow-2xl p-6 sm:p-10 text-white my-auto custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all border border-zinc-700 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="mb-8 pr-12 border-b border-zinc-800 pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/40 text-xs font-mono font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  {selectedProject.status && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      {selectedProject.status}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-heading mb-4">
                  {selectedProject.title}
                </h2>

                {/* Project Metrics Row inside Modal */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-white">{selectedProject.stars || "100+★"}</span> Stars
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    <GitCommit className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span className="font-bold text-white">{selectedProject.commits || "50+"}</span> Commits
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span className="font-bold text-white">{selectedProject.duration || "2 Months"}</span> Dev Cycle
                  </div>
                </div>
              </div>

              {/* Modal Body Content Grid */}
              <div className="flex flex-col gap-8">
                
                {/* 1. Problem Statement */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 via-zinc-900/60 to-purple-950/20 border border-blue-500/30">
                  <h3 className="text-lg font-bold text-[#06B6D4] flex items-center gap-2 mb-3 font-heading">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                    Problem Statement & Context
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {selectedProject.problem || selectedProject.description}
                  </p>
                </div>

                {/* 2. Solution & Key Features */}
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 font-heading">
                    <Lightbulb className="w-5 h-5 text-emerald-400" />
                    Engineering Solution & Key Features
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                    {selectedProject.solution || selectedProject.overview}
                  </p>
                  {selectedProject.keyFeatures && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. System Architecture Diagram */}
                {selectedProject.architectureDiagram && (
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3 font-heading">
                      <Cpu className="w-5 h-5 text-purple-400" />
                      System Architecture & Pipeline
                    </h3>
                    <div className="p-5 rounded-2xl bg-black/80 border border-zinc-800 font-mono text-xs sm:text-sm text-[#06B6D4] overflow-x-auto shadow-inner leading-relaxed">
                      <pre className="whitespace-pre">{selectedProject.architectureDiagram}</pre>
                    </div>
                  </div>
                )}

                {/* 4. Folder Structure */}
                {selectedProject.folderStructure && (
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3 font-heading">
                      <Terminal className="w-5 h-5 text-amber-400" />
                      Repository Folder Structure
                    </h3>
                    <div className="p-5 rounded-2xl bg-black/80 border border-zinc-800 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto shadow-inner">
                      <pre className="whitespace-pre text-emerald-400">{selectedProject.folderStructure}</pre>
                    </div>
                  </div>
                )}

                {/* 5. Challenges Faced & Learnings */}
                {selectedProject.challengesLearnings && (
                  <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                    <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2 mb-3 font-heading">
                      <TrendingUp className="w-5 h-5" />
                      Engineering Challenges & Learnings
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {selectedProject.challengesLearnings}
                    </p>
                  </div>
                )}

                {/* 6. Future Scope */}
                {selectedProject.futureImprovements && (
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3 font-heading">
                      <Layers className="w-5 h-5 text-[#06B6D4]" />
                      Future Improvements & Roadmap
                    </h3>
                    <div className="flex flex-col gap-2">
                      {selectedProject.futureImprovements.map((imp, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Tech Stack Badges */}
                <div>
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    Technologies Employed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProject.techStackDetails || selectedProject.tags).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-[#06B6D4]"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/projects/${selectedProject.id}`}
                  className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
                >
                  <BookOpen className="w-4 h-4 text-[#06B6D4]" />
                  <span>Open Dedicated Static Page →</span>
                </Link>

                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:from-[#2563eb] hover:to-[#0891b2] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#3B82F6]/30 transition-all hover:scale-105"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>GitHub Repo</span>
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
