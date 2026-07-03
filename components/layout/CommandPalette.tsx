"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, Download, Mail, FolderGit2, Cpu, Sparkles, X, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PERSONAL_INFO, PROJECTS_DATA } from "@/lib/data";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      // Konami Code Easter Egg: ArrowUp, ArrowUp, ArrowDown, ArrowDown
      setKonamiSequence((prev) => {
        const next = [...prev, e.key].slice(-4);
        if (next.join(",") === "ArrowUp,ArrowUp,ArrowDown,ArrowDown") {
          setEasterEggActive(true);
          setTimeout(() => setEasterEggActive(false), 5000);
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    {
      id: "proj-1",
      title: "AI ATS Resume Analyzer & Parsing Engine",
      category: "Projects",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        window.location.hash = "#projects";
      },
    },
    {
      id: "proj-2",
      title: "Real-Time Stock Market AI Intelligence",
      category: "Projects",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        window.location.hash = "#projects";
      },
    },
    {
      id: "skills",
      title: "Explore AI, ML & Python Skills",
      category: "Navigation",
      icon: Cpu,
      action: () => {
        setIsOpen(false);
        window.location.hash = "#skills";
      },
    },
    {
      id: "github",
      title: "Open GitHub Profile (@soham-1801)",
      category: "Social",
      icon: FaGithub,
      action: () => {
        setIsOpen(false);
        window.open(PERSONAL_INFO.github, "_blank");
      },
    },
    {
      id: "resume",
      title: "Download Resume PDF",
      category: "Action",
      icon: Download,
      action: () => {
        setIsOpen(false);
        window.open(PERSONAL_INFO.resumeUrl, "_blank");
      },
    },
    {
      id: "contact",
      title: "Contact & Internship Inquiries",
      category: "Navigation",
      icon: Mail,
      action: () => {
        setIsOpen(false);
        window.location.hash = "#contact";
      },
    },
  ];

  const filteredActions = actions.filter(
    (action) =>
      action.title.toLowerCase().includes(query.toLowerCase()) ||
      action.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Easter Egg Toast Notification */}
      <AnimatePresence>
        {easterEggActive && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-3xl bg-[#111827]/95 border-2 border-[#06B6D4] shadow-2xl shadow-[#06B6D4]/40 backdrop-blur-2xl flex items-center gap-3.5 text-white font-mono"
          >
            <div className="p-2 rounded-xl bg-[#06B6D4]/20 text-[#06B6D4] animate-bounce">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-gradient uppercase tracking-widest">Developer Mode Activated 🚀</div>
              <div className="text-xs text-zinc-300 font-sans">You discovered the secret Konami sequence! All AI superpowers unlocked.</div>
            </div>
            <button
              onClick={() => setEasterEggActive(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex items-start justify-center pt-[15vh] p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl overflow-hidden border border-zinc-800 bg-[#0B0F19]/95 shadow-2xl backdrop-blur-2xl font-sans text-left"
            >
              {/* Search Header */}
              <div className="p-4 sm:p-5 border-b border-zinc-800/80 flex items-center gap-3.5 bg-[#111827]/60">
                <Search className="w-5 h-5 text-zinc-400 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
                    } else if (e.key === "Enter") {
                      e.preventDefault();
                      if (filteredActions[selectedIndex]) {
                        filteredActions[selectedIndex].action();
                      }
                    }
                  }}
                  placeholder="Type a command or search projects... (ESC to close)"
                  className="w-full bg-transparent text-white placeholder-zinc-500 focus:outline-none text-base font-medium"
                  autoFocus
                />
                <span className="px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-400 hidden sm:inline-block">ESC</span>
              </div>

              {/* Actions List */}
              <div className="max-h-96 overflow-y-auto p-3 space-y-1.5">
                {filteredActions.length === 0 ? (
                  <div className="py-12 text-center text-zinc-500 text-sm">
                    No matching commands found for &quot;{query}&quot;.
                  </div>
                ) : (
                  filteredActions.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = idx === selectedIndex;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full p-3 rounded-2xl flex items-center justify-between gap-3 text-left transition-colors group ${
                          isSelected ? "bg-zinc-800/90 ring-1 ring-zinc-700" : "hover:bg-zinc-800/40"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`p-2.5 rounded-xl border transition-colors shrink-0 ${
                            isSelected 
                              ? "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/40" 
                              : "bg-zinc-900 border-zinc-800 text-zinc-400 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-sm font-semibold transition-all ${isSelected ? "text-[#06B6D4]" : "text-white group-hover:text-zinc-200"}`}>
                              {item.title}
                            </div>
                            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">{item.category}</div>
                          </div>
                        </div>
                        <span className={`text-xs font-mono transition-opacity ${isSelected ? "text-zinc-400 opacity-100" : "text-zinc-600 opacity-0 group-hover:opacity-100"}`}>
                          Enter ↵
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="p-3 px-5 bg-[#111827]/80 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <span>Pro tip: Press</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">↑ ↑ ↓ ↓</kbd>
                  <span>for Easter Egg</span>
                </div>
                <span>Soham AI Portfolio OS</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
