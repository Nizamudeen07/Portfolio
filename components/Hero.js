"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Download } from "lucide-react";
import { PROFILE } from "@/lib/constants";
import { heroItem } from "@/lib/animations";

export default function Hero() {
  const spotRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      spotRef.current?.style.setProperty("--mx", `${e.clientX}px`);
      spotRef.current?.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 overflow-hidden">
      <div
        ref={spotRef}
        className="absolute inset-0 pointer-events-none transition-[background] duration-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(240,180,41,0.14), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.09) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 30%, black, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-8 w-full">
        <motion.p initial="hidden" animate="show" variants={heroItem(0.05)} className="font-mono text-accent text-[12.5px]">
          Full Stack Developer — Dubai, UAE 🇦🇪
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={heroItem(0.15)}
          className="text-[2.6rem] sm:text-[3.6rem] lg:text-[5.2rem] font-bold leading-[1.02] tracking-tight max-w-[16ch] mt-2"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p initial="hidden" animate="show" variants={heroItem(0.28)} className="font-mono text-accent text-[15px] sm:text-lg mt-6">
          {PROFILE.roleSub}
        </motion.p>

        <motion.p initial="hidden" animate="show" variants={heroItem(0.4)} className="text-muted text-[17px] max-w-[52ch] mt-5">
          Nearly 3 years building production web applications — from pixel-perfect Figma-to-code
          frontends to Node.js/REST APIs, SSR/SSG performance and AI-assisted, Agile delivery.
        </motion.p>

        <motion.div initial="hidden" animate="show" variants={heroItem(0.52)} className="flex flex-wrap gap-4 mt-9">
          <a href="#projects" className="font-mono text-sm px-6 py-3 rounded-full bg-accent text-[#151208] hover:-translate-y-0.5 transition-transform">
            View My Work
          </a>
          <a href="#contact" className="font-mono text-sm px-6 py-3 rounded-full border border-line hover:-translate-y-0.5 transition-transform">
            Let&apos;s Connect
          </a>
          <a
            href={PROFILE.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-6 py-3 rounded-full border border-accent text-accent inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
          >
            <Download size={14} /> Download Resume
          </a>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={heroItem(0.6)} className="mt-11">
          <span className="inline-flex items-center gap-2 font-mono text-[13px] text-muted border border-line px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulseDot" />
            Open to Full Stack / Frontend opportunities
          </span>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={heroItem(0.68)} className="flex flex-wrap gap-6 mt-8">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-muted hover:text-fg inline-flex items-center gap-2">
            <Github size={15} /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-muted hover:text-fg inline-flex items-center gap-2">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-muted hover:text-fg inline-flex items-center gap-2">
            <MessageCircle size={15} /> WhatsApp
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-8 w-px h-13 bg-gradient-to-b from-accent to-transparent" />
    </section>
  );
}
