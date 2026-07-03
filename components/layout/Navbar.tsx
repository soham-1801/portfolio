"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const navItems = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "GitHub", href: "/#github", id: "github" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in viewport
      const sections = ["home", "about", "projects", "skills", "experience", "education", "github", "blog", "contact"];
      const currentScroll = window.scrollY + 300;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" onClick={() => setActiveSection("home")} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1F2937] flex items-center justify-center group-hover:border-[#3B82F6] transition-colors duration-200 shadow-inner">
              <Cpu className="w-4 h-4 text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-[#F8FAFC] flex items-center gap-1">
                soham<span className="text-[#06B6D4] font-normal">/ai</span>
              </span>
              <span className="text-[9px] text-[#94A3B8] tracking-widest uppercase font-mono">
                AI Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-transparent">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-line"
                      className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-white rounded-t-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Buttons & Command Palette Trigger */}
          <div className="hidden md:flex items-center gap-4">
            {/* ⭐ Command Palette Trigger (Ctrl + K) ⭐ */}
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-[#111827] hover:bg-[#1F2937] text-zinc-300 hover:text-white border border-[#1F2937] transition-all hover:border-[#06B6D4]/50 shadow-sm group"
              title="Open Command Palette"
            >
              <span className="text-zinc-400 group-hover:text-[#06B6D4]">Search...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-zinc-900 border border-zinc-700 rounded text-zinc-400 font-bold group-hover:border-[#06B6D4]">
                ⌘K
              </kbd>
            </button>

            <div className="h-5 w-px bg-zinc-800" />

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111827] text-[#F8FAFC] border border-[#1F2937] flex items-center justify-center text-xs hover:border-[#3B82F6]/50"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4 text-[#06B6D4]" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#111827] text-[#F8FAFC] border border-[#1F2937] hover:border-[#3B82F6]/50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#06B6D4]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#111827]/95 backdrop-blur-2xl border border-[#1F2937] rounded-2xl mt-4 px-4 pt-4 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white shadow-md shadow-[#3B82F6]/20"
                        : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1F2937]/50"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  </a>
                );
              })}
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-bold text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1F2937]/50 flex items-center justify-between transition-colors"
              >
                <span>Resume</span>
                <Download className="w-4 h-4 text-[#06B6D4]" />
              </a>
              <div className="pt-4 border-t border-[#1F2937] mt-2 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:from-[#2563eb] hover:to-[#0891b2] text-center font-bold text-sm text-white shadow-lg shadow-[#3B82F6]/20"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
