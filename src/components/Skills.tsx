"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Cpu,
  Terminal,
  Sparkles,
  CheckCircle,
  Database,
  Layers,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabOptions = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories =
    activeTab === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeTab);

  // Icon mapping
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Languages":
        return Code2;
      case "Frontend Engineering":
        return Layout;
      case "Backend & Databases":
        return Server;
      case "AI, Vision & Developer Tools":
        return Cpu;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TECHNICAL ARSENAL"
          title="Skills, Frameworks &"
          titleAccent="Technologies"
          subtitle="A comprehensive toolkit built through hands-on hackathons, production software internships, and continuous technical exploration."
        />

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabOptions.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-glow"
                  : "glass-panel text-slate-400 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category, catIdx) => {
              const Icon = getCategoryIcon(category.title);

              return (
                <motion.div
                  key={category.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                  className="glass-panel p-6 rounded-3xl border-white/10 glass-panel-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center text-brand-cyan">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-white">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Skill Tags / Pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            skill.highlight
                              ? "bg-white/[0.08] text-white border border-white/[0.15] shadow-sm hover:border-brand-cyan/50"
                              : "bg-black/30 text-slate-300 border border-white/[0.05]"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              skill.highlight
                                ? "bg-brand-cyan shadow-glow-cyan"
                                : "bg-slate-500"
                            }`}
                          />
                          <span>{skill.name}</span>
                          <span className="text-[10px] text-slate-500 font-mono ml-0.5">
                            • {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Proficiency Verified</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Production Ready
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
