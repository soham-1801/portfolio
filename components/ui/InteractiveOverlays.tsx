"use client";

import React, { useEffect, useState } from "react";

export default function InteractiveOverlays() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Track mouse position for soft cursor spotlight
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Track scroll for progress bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ⭐ Top Scroll Progress Bar ⭐ */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none bg-zinc-900/40">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-500 shadow-[0_0_10px_rgba(16,185,129,0.7)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ⭐ Soft Cursor Spotlight Glow ⭐ */}
      <div
        className="fixed pointer-events-none z-20 w-[450px] h-[450px] rounded-full blur-[100px] transition-transform duration-100 ease-out opacity-40 mix-blend-screen hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.12) 40%, rgba(168, 85, 247, 0.08) 70%, transparent 100%)",
          left: `${mousePosition.x - 225}px`,
          top: `${mousePosition.y - 225}px`,
        }}
      />
    </>
  );
}
