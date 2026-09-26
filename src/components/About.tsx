"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  Layers,
  MapPin,
  Languages,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PERSONAL_INFO, EDUCATION } from "@/data/portfolioData";

export function About() {
  const pillars = [
    {
      title: "Artificial Intelligence & Vision",
      description:
        "Building practical AI systems by leveraging LLMs, Gemini API, OpenAI Whisper, and YOLOv8 for edge computer vision and audio comprehension.",
      icon: Brain,
      gradient: "from-blue-500/20 to-cyan-500/20",
      accent: "text-brand-cyan",
    },
    {
      title: "Full-Stack Web Architecture",
      description:
        "Designing responsive, resilient, and accessible web experiences with Next.js (App Router), React, TypeScript, and high-performance Tailwind CSS.",
      icon: Layers,
      gradient: "from-purple-500/20 to-indigo-500/20",
      accent: "text-brand-purple",
    },
    {
      title: "Backend & Distributed APIs",
      description:
        "Architecting clean REST and GraphQL services using Node.js, Express, and Firebase with real-time state synchronization.",
      icon: Sparkles,
      gradient: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
    },
    {
      title: "Hardware & IoT Systems",
      description:
        "Bridging software and physical hardware through OpenCV webcam recognition, stepper motor actuation, and microcontrollers.",
      icon: Award,
      gradient: "from-pink-500/20 to-rose-500/20",
      accent: "text-brand-pink",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ABOUT ME"
          title="Engineering Purposeful"
          titleAccent="Digital Solutions"
          subtitle="Combining strong computer science fundamentals with hands-on hackathon agility and modern web development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />
                Who I Am
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-4">
                {PERSONAL_INFO.about}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Whether it is building an AI-powered surveillance pipeline like{" "}
                <span className="text-white font-medium">SentinelGrid</span> that secured{" "}
                <span className="text-brand-cyan font-medium">6th rank at TetraTHON 2026</span>{" "}
                among 160 teams, or engineering{" "}
                <span className="text-white font-medium">GlobeTrotter</span> in a 24-hour sprint
                at the Odoo Hackathon, I thrive when building under pressure and delivering
                clean, maintainable code.
              </p>

              {/* Personal Details Quick Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/[0.05] text-brand-cyan">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Location</div>
                    <div className="text-sm font-medium text-slate-200">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/[0.05] text-brand-purple">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Known Languages</div>
                    <div className="text-sm font-medium text-slate-200">
                      English, Gujarati, Hindi
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-panel p-5 rounded-2xl border-white/10 glass-panel-hover flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-3 ${pillar.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-display font-semibold text-white mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-brand-indigo" />
                  <span>Education</span>
                </h3>
                <span className="text-xs font-mono text-brand-cyan px-2.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
                  Verified Academic Record
                </span>
              </div>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Glowing Node */}
                    <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-brand-indigo border-2 border-surface-50 shadow-glow" />

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-indigo/30 transition-all">
                      <div className="flex items-center justify-between flex-wrap gap-1 mb-1">
                        <span className="text-xs font-mono text-brand-cyan flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {edu.grade}
                        </span>
                      </div>

                      <h4 className="text-base font-display font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <div className="text-xs font-medium text-slate-400 mb-2">
                        {edu.institution} • {edu.location}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
