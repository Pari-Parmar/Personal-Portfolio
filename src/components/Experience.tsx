"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { EXPERIENCES } from "@/data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="INDUSTRY EXPERIENCE"
          title="Internships &"
          titleAccent="Professional Growth"
          subtitle="Real-world engineering experience delivering production frontend features, collaborative workflows, and multi-platform deployments."
        />

        <div className="max-w-4xl mx-auto relative before:absolute before:left-4 md:before:left-1/2 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/10 before:-translate-x-1/2">
          {EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Central Glowing Node */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-cyan border-4 border-surface-50 shadow-glow-cyan z-10" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                  <div className="glass-panel p-6 sm:p-7 rounded-3xl border-white/10 glass-panel-hover">
                    {/* Period & Role Header */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-indigo/15 text-brand-cyan border border-brand-indigo/30">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mt-2">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-brand-indigo flex items-center gap-1.5 mb-4">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="space-y-2 mb-5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
