"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border-white/15 p-6 sm:p-8 z-10 shadow-2xl bg-surface-50/95"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full glass-panel text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Preview Image */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-surface-100 border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
            {project.metrics && (
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-medium glass-panel border-white/20 text-brand-cyan shadow-md">
                {project.metrics}
              </div>
            )}
          </div>

          {/* Header Info */}
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-brand-indigo/20 text-brand-cyan border border-brand-indigo/30">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base font-medium text-brand-cyan mb-4">
            {project.tagline}
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-indigo" />
              Key Features & Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-purple" />
              Technologies & APIs
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.06] text-slate-200 border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-glow"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass-panel text-slate-200 hover:text-white glass-panel-hover"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
