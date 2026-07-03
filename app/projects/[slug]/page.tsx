import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS_DATA, PERSONAL_INFO } from "@/lib/data";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  AlertCircle,
  CheckCircle2,
  Layers,
  Lightbulb,
  Code2,
  Terminal,
  FolderTree,
  Rocket,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC] pb-24 selection:bg-[#3B82F6] selection:text-white font-sans relative overflow-hidden bg-grid-pattern">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-zinc-800/80 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] hover:bg-[#1F2937] text-white border border-zinc-700 text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <FaGithub className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub Repository</span>
                <span className="sm:hidden">GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 relative z-10 space-y-16">
        {/* Hero Banner */}
        <div className="text-center sm:text-left space-y-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-mono uppercase font-extrabold tracking-widest">
              {project.category} CASE STUDY
            </span>
            {project.featured && (
              <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Featured Engineering Project
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-heading">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-4xl">
            {project.overview || project.description}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Large Preview Image */}
        {project.image && (
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 opacity-60" />
            <div className="relative h-64 sm:h-96 md:h-[480px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-[#111827]/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-zinc-700/80 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified Production Architecture</span>
            </div>
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Statement */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/20 bg-[#111827]/80 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4 text-amber-400 font-bold text-lg">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <span>The Problem Statement</span>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.problem || "Addressing critical performance bottlenecks and inefficiencies in legacy data processing workflows."}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-500/10 text-xs font-mono text-amber-300/80">
              ⚠️ Industry Challenge & Bottleneck
            </div>
          </div>

          {/* Engineered Solution */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 bg-[#111827]/80 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4 text-emerald-400 font-bold text-lg">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span>Engineered Solution</span>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.solution || "Architected a scalable, high-performance solution leveraging modern machine learning algorithms."}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/10 text-xs font-mono text-emerald-300/80">
              ⚡ High-Performance Architecture
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        {project.architectureDiagram && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#0B0F19] shadow-2xl space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <span>System Architecture Diagram</span>
              </div>
              <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                Data & Inference Pipeline
              </span>
            </div>
            <div className="bg-[#030712] p-4 sm:p-6 rounded-2xl border border-zinc-800/80 overflow-x-auto font-mono text-xs sm:text-sm text-cyan-400 leading-relaxed whitespace-pre shadow-inner">
              {project.architectureDiagram}
            </div>
          </div>
        )}

        {/* Key Features & Tech Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Features */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#111827]/80 backdrop-blur-xl space-y-6">
            <div className="flex items-center gap-3 text-white font-bold text-lg border-b border-zinc-800/80 pb-4">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <span>Key Features & Capabilities</span>
            </div>
            <ul className="space-y-3.5">
              {(project.keyFeatures || project.tags).map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-sm shadow-cyan-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#111827]/80 backdrop-blur-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-white font-bold text-lg border-b border-zinc-800/80 pb-4 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span>Technical Stack</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {(project.techStackDetails || project.tags).map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3.5 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 font-mono">
              💡 Fully modular codebase engineered for horizontal scaling & cloud deployment.
            </div>
          </div>
        </div>

        {/* Folder Structure */}
        {project.folderStructure && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#0B0F19] shadow-2xl space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <FolderTree className="w-5 h-5" />
                </div>
                <span>Project Codebase & Folder Structure</span>
              </div>
              <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                Production Organization
              </span>
            </div>
            <div className="bg-[#030712] p-4 sm:p-6 rounded-2xl border border-zinc-800/80 overflow-x-auto font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre shadow-inner">
              {project.folderStructure}
            </div>
          </div>
        )}

        {/* Challenges & Future Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges & Learnings */}
          {project.challengesLearnings && (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/20 bg-[#111827]/80 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 text-rose-400 font-bold text-lg border-b border-zinc-800/80 pb-4">
                <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <span>Challenges & Learnings</span>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-rose-400/40">
                {project.challengesLearnings}
              </p>
            </div>
          )}

          {/* Future Improvements */}
          {project.futureImprovements && (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-blue-500/20 bg-[#111827]/80 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 text-blue-400 font-bold text-lg border-b border-zinc-800/80 pb-4">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Rocket className="w-5 h-5" />
                </div>
                <span>Future Improvements</span>
              </div>
              <ul className="space-y-2.5">
                {project.futureImprovements.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Screenshots Carousel / Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-[#111827]/80 backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <span>Visual Showcase & Screenshots</span>
              </div>
              <span className="text-xs font-mono text-zinc-500">Production UI / UX</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((src, idx) => (
                <div
                  key={idx}
                  className="relative h-48 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono text-white">
                    View Preview {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-zinc-800 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Interested in the implementation details?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Explore the complete source code on GitHub or experience the live application demo in action.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-sm flex items-center gap-2.5 transition-all shadow-xl hover:scale-105"
              >
                <FaGithub className="w-5 h-5" />
                <span>View Full Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563eb] text-white font-bold text-sm flex items-center gap-2 transition-all shadow-xl shadow-[#3B82F6]/30 hover:scale-105"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <Link
              href="/#projects"
              className="px-8 py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm border border-zinc-700 transition-all hover:scale-105"
            >
              ← Back to All Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
