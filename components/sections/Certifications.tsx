"use client";

import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS_DATA } from "@/lib/data";
import { Award, CheckCircle2, ExternalLink, ShieldCheck, GraduationCap, Code2 } from "lucide-react";

const certIcons: Record<number, React.FC<{ className?: string }>> = {
  0: GraduationCap,
  1: Code2,
  2: Award,
};

const certColors = [
  "from-blue-500/20 via-transparent to-transparent border-blue-500/40 text-blue-400 bg-blue-500/5",
  "from-emerald-500/20 via-transparent to-transparent border-emerald-500/40 text-emerald-400 bg-emerald-500/5",
  "from-purple-500/20 via-transparent to-transparent border-purple-500/40 text-purple-400 bg-purple-500/5",
];

const iconColors = [
  "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "bg-purple-500/15 text-purple-400 border-purple-500/30",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-8">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
            Industry <br />
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Verified credentials from nationally recognized institutions and global developer platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => {
            const Icon = certIcons[idx] ?? Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`glass-card p-7 rounded-3xl border bg-gradient-to-br ${certColors[idx]} backdrop-blur-xl shadow-xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300`}
              >
                {/* Glow corner */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-colors" />

                <div>
                  {/* Top row: icon + external link */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl border flex items-center justify-center shadow-md group-hover:scale-110 transition-transform ${iconColors[idx]}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-black/30 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                        aria-label="View Credential"
                        title="View Credential"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white mb-2 font-heading leading-snug group-hover:text-white transition-colors">
                    {cert.name}
                  </h3>

                  <div className="text-xs font-semibold text-zinc-400 mb-4">
                    Issued by: <span className="text-zinc-200 font-bold">{cert.issuer}</span>
                    <span className="ml-2 text-zinc-500">({cert.date})</span>
                  </div>

                  {cert.badge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-zinc-200 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{cert.badge}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500 opacity-70 group-hover:opacity-100 transition-opacity">
                  <span>Verified Credential</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Authentic
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
