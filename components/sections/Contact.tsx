"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles, Copy, Check, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import confetti from "canvas-confetti";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-8">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>INITIATE COLLABORATION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.08]">
            Let&apos;s Build <br />
            <span className="text-gradient">Intelligent Systems</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a full-time AI/ML engineering opportunity, a consulting inquiry, or just want to chat about LLMs and Python — I&apos;d love to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Rich Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800/80 shadow-2xl bg-[#111827]/80 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#06B6D4]" />
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-4">
                {/* ⭐ Email Box with Copy Button ⭐ */}
                <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#06B6D4]/40 transition-all flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="p-3 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">Direct Email</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-white hover:text-[#06B6D4] transition-colors block truncate">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-[#06B6D4] text-zinc-300 hover:text-black font-mono font-bold text-xs flex items-center gap-1.5 transition-all shrink-0 border border-zinc-700 hover:border-[#06B6D4]"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* ⭐ Phone / WhatsApp Box ⭐ */}
                <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/40 transition-all flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">Call / WhatsApp</div>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-white hover:text-emerald-400 transition-colors block">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold uppercase">Active</span>
                </div>

                {/* ⭐ Location Box ⭐ */}
                <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-purple-500/40 transition-all flex items-center gap-3.5 group">
                  <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30 shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">Current Base Location</div>
                    <div className="text-sm font-bold text-white leading-snug">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-xs text-emerald-400 font-mono mt-0.5">🌐 Open to Remote & Relocation</div>
                  </div>
                </div>
              </div>

              {/* ⭐ Social Network Buttons ⭐ */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80">
                <div className="text-xs font-mono text-zinc-400 uppercase mb-4">Connect on Social Networks:</div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-[#06B6D4]/50 transition-all font-semibold text-xs flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.02]"
                  >
                    <FaGithub className="w-5 h-5 text-white" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-blue-400 hover:border-blue-500/50 transition-all font-semibold text-xs flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.02]"
                  >
                    <FaLinkedin className="w-5 h-5 text-blue-400" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-zinc-800/80 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted! 🚀</h3>
                  <p className="text-zinc-400 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out, Soham! I have received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI/ML Engineer Opportunity / Consulting Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Soham, we are impressed by your RAG and Computer Vision projects and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold text-sm shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message to Soham</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
