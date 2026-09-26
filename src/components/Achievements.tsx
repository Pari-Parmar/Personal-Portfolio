"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Zap,
  Flame,
  Award,
  CheckCircle,
  GraduationCap,
  Sparkles,
  Medal,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ACHIEVEMENTS } from "@/data/portfolioData";

export function Achievements() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return Trophy;
      case "Zap":
        return Zap;
      case "Flame":
        return Flame;
      case "Award":
        return Award;
      default:
        return CheckCircle;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PROVEN TRACK RECORD"
          title="Hackathons &"
          titleAccent="Key Achievements"
          subtitle="A timeline of competitive wins, rapid hackathon sprints, certifications, and technical recognitions."
        />

        <div className="max-w-4xl mx-auto relative before:absolute before:left-5 sm:before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-brand-cyan before:via-brand-purple before:to-brand-indigo">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = getIcon(ach.icon);

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative pl-14 sm:pl-20 mb-10 last:mb-0"
              >
                {/* Glowing Node Icon */}
                <div className="absolute left-5 sm:left-8 top-1 -translate-x-1/2 w-10 h-10 rounded-2xl bg-surface-100 border border-white/20 flex items-center justify-center text-brand-cyan shadow-glow-cyan z-10">
                  <Icon className="w-5 h-5 text-brand-cyan" />
                </div>

                {/* Card Container */}
                <div className="glass-panel p-6 sm:p-7 rounded-3xl border-white/10 glass-panel-hover">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-brand-purple/20 text-brand-cyan border border-brand-purple/30">
                        {ach.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {ach.date}
                      </span>
                    </div>

                    {ach.highlightText && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {ach.highlightText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                    {ach.title}
                  </h3>

                  <h4 className="text-sm font-semibold text-brand-cyan mb-3">
                    {ach.subtitle}
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
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
