"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  Eye,
  Layers,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS, Project } from "@/data/portfolioData";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI & ML", "Full Stack", "Web Apps", "IoT & Systems"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PORTFOLIO HIGHLIGHTS"
          title="Featured Projects &"
          titleAccent="Innovations"
          subtitle="A showcase of AI solutions, real-time distributed platforms, and full-stack web applications engineered for real-world impact."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-glow"
                  : "glass-panel text-slate-400 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group glass-panel rounded-3xl overflow-hidden border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Hover Zoom */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full h-52 overflow-hidden cursor-pointer bg-surface-100"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-50 via-transparent to-transparent opacity-90" />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium glass-panel border-white/20 text-brand-cyan">
                      {project.category}
                    </div>

                    {/* Metrics / Hackathon Highlight Badge */}
                    {project.metrics && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-brand-purple/80 text-white border border-brand-purple shadow-sm">
                        {project.metrics}
                      </div>
                    )}

                    {/* Quick View Overlay on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium glass-panel text-white border-white/30 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-brand-cyan" /> Quick Overview
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs font-medium text-slate-400 mt-1 mb-3 line-clamp-1">
                      {project.tagline}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-5">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/[0.06] mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-brand-cyan hover:text-white flex items-center gap-1 transition-colors py-2"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label={`${project.title} GitHub Source`}
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-brand-indigo/20 text-brand-cyan hover:bg-brand-indigo/40 border border-brand-indigo/30 transition-colors"
                        aria-label={`${project.title} Live Preview`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
