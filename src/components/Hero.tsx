"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Github,
  Linkedin,
  ArrowRight,
  Code2,
  Sparkles,
  Cpu,
  Terminal,
  Trophy,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro Text & Calls to Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium glass-panel border-white/10 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-300 font-sans tracking-wide">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Hi, I&apos;m{" "}
              <span className="text-gradient-primary block mt-1">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Role & Tagline */}
            <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl font-display font-semibold text-slate-200 mb-6">
              <span className="text-brand-cyan">{PERSONAL_INFO.role}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400 text-base sm:text-xl font-normal">
                B.Tech CSE &apos;27
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl leading-relaxed mb-8">
              {PERSONAL_INFO.tagline}{" "}
              <span className="text-slate-400">
                Specialized in building scalable full-stack web architectures, real-time computer vision systems, and AI-driven products that deliver tangible impact.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="shimmer-btn flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-pink text-white shadow-glow hover:shadow-glow-purple/50 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              {/* View GitHub Button */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm glass-panel text-slate-200 hover:text-white glass-panel-hover transition-all w-full sm:w-auto"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-slate-400" />
              </a>

              {/* Explore Projects Quick Link */}
              <Link
                href="#projects"
                className="hidden xl:inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-brand-cyan transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Social Proof / Key Metric Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/[0.08]">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-500 truncate">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card with Glassmorphism and Orbit Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Ambient Background Glow Behind Profile Card */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-brand-indigo/30 via-brand-purple/20 to-brand-cyan/30 blur-[80px] -z-10 animate-pulse-slow" />

            {/* Main Interactive Glass Card */}
            <div className="relative w-full max-w-[380px] rounded-3xl glass-panel p-6 border-white/10 shadow-2xl overflow-hidden group">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.06] text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3 h-3 text-brand-cyan" />
                  <span>pari@portfolio:~</span>
                </div>
              </div>

              {/* Avatar Centerpiece with Glowing Ring */}
              <div className="relative w-48 h-48 mx-auto my-3 rounded-full p-1 bg-gradient-to-tr from-brand-cyan via-brand-indigo to-brand-purple shadow-glow-cyan/40">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-100 relative">
                  <Image
                    src="/parisha-profile.svg"
                    alt="Parisha Parmar"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Card Meta & Identity */}
              <div className="text-center mt-5">
                <h3 className="text-xl font-display font-bold text-white">
                  {PERSONAL_INFO.fullName}
                </h3>
                <p className="text-xs font-mono text-brand-cyan mt-1">
                  vadodara, gujarat, in
                </p>
              </div>

              {/* Interactive Code Snippet / Terminal Box */}
              <div className="mt-5 p-3.5 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="text-brand-purple">const</span>
                  <span className="text-brand-cyan">engineer</span> = &#123;
                </div>
                <div className="pl-4 text-slate-400">
                  focus: <span className="text-emerald-400">&apos;AI &amp; Scalable Systems&apos;</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  stack: [<span className="text-amber-300">&apos;Next.js&apos;</span>, <span className="text-amber-300">&apos;Python&apos;</span>, <span className="text-amber-300">&apos;React&apos;</span>],
                </div>
                <div className="pl-4 text-slate-400">
                  hackathonsWon: <span className="text-brand-pink">&apos;Top 6 TetraTHON&apos;</span>
                </div>
                <div className="text-slate-500">&#125;;</div>
              </div>

              {/* Floating Pill: TetraTHON Achievement */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 glass-panel px-3 py-1.5 rounded-full border-brand-cyan/30 text-xs font-medium text-brand-cyan shadow-glow-cyan/30 flex items-center gap-1.5"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>6th Rank @ TetraTHON</span>
              </motion.div>

              {/* Floating Pill: AI Vision */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-2 glass-panel px-3 py-1.5 rounded-full border-brand-indigo/30 text-xs font-medium text-slate-200 shadow-glow flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
                <span>AI &amp; Full Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
