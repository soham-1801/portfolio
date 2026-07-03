"use client";

import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS_DATA } from "@/lib/data";
import { Trophy, Award, Star, Sparkles } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-semibold text-yellow-400 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Hackathon victories, algorithmic coding milestones, and active community contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((ach, idx) => {
            const Icon = ach.icon === "Trophy" ? Trophy : ach.icon === "Award" ? Award : Star;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800/80 flex flex-col justify-between group hover:border-yellow-500/40 transition-all shadow-xl relative overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-yellow-500/10 transition-colors" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 to-amber-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider">
                      {ach.organization}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {ach.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
