"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
} from "lucide-react";
import {
  PERSONAL_INFO,
  EDUCATION,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
  ACHIEVEMENTS,
} from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col glass-panel rounded-3xl border-white/20 z-10 shadow-2xl bg-surface-50 overflow-hidden"
        >
          {/* Header Controls Bar */}
          <div className="flex items-center justify-between p-4 sm:px-8 border-b border-white/10 bg-surface-100/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-display font-semibold text-white">
                Parisha Parmar — Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium glass-panel text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-brand-cyan" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg glass-panel text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div
            ref={printRef}
            className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-surface-50 text-slate-200 print:text-black print:bg-white"
          >
            {/* Resume Header */}
            <div className="border-b border-white/10 pb-6 print:border-black/20">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white print:text-black tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <div className="text-brand-cyan print:text-indigo-600 font-semibold text-base sm:text-lg mt-1">
                {PERSONAL_INFO.role} • B.Tech. Computer Science &amp; Engineering
              </div>

              {/* Contact Strip */}
              <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs text-slate-300 print:text-slate-700 mt-4 font-mono">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-brand-cyan"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                  {PERSONAL_INFO.email}
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-1.5 hover:text-brand-cyan"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                  {PERSONAL_INFO.phone}
                </a>

                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                  {PERSONAL_INFO.location} - {PERSONAL_INFO.pinCode}
                </span>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-cyan"
                >
                  <Github className="w-3.5 h-3.5 text-brand-cyan" />
                  github.com/Pari-Parmar
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-cyan"
                >
                  <Linkedin className="w-3.5 h-3.5 text-brand-cyan" />
                  linkedin.com/in/parisha-parmar
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-brand-cyan print:text-indigo-700 font-bold mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                Final-year B.Tech Computer Science student with a passionate drive for full-stack engineering, scalable backend design, and machine learning. Hands-on experience creating impactful software using React, Next.js, Node.js, Python, and modern cloud databases. Dedicated to building performant digital products that solve real-world problems.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-brand-cyan print:text-indigo-700 font-bold mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start flex-wrap gap-1">
                    <div>
                      <div className="text-sm font-semibold text-white print:text-black">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-slate-400 print:text-slate-600">
                        {edu.institution}, {edu.location}
                      </div>
                      <div className="text-xs text-slate-300 print:text-slate-700 mt-1">
                        {edu.details}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-brand-cyan print:text-indigo-600 font-semibold">
                        {edu.period}
                      </div>
                      <div className="text-xs font-medium text-emerald-400 print:text-emerald-700">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work & Internships */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-brand-cyan print:text-indigo-700 font-bold mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Professional Internships
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-start flex-wrap">
                      <div>
                        <span className="text-sm font-semibold text-white print:text-black">
                          {exp.role}
                        </span>
                        <span className="text-xs text-slate-400 print:text-slate-600 ml-2">
                          — {exp.company}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-700">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-brand-cyan print:text-indigo-700 font-bold mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Featured Projects
              </h2>
              <div className="space-y-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex items-center justify-between flex-wrap">
                      <span className="font-semibold text-white print:text-black text-sm">
                        {proj.title}
                      </span>
                      <span className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                        {proj.tags.join(" • ")}
                      </span>
                    </div>
                    <p className="text-slate-300 print:text-slate-700 mt-1">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-brand-cyan print:text-indigo-700 font-bold mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.03] print:bg-slate-100 border border-white/[0.05]">
                    <span className="font-semibold text-white print:text-black block mb-1">
                      {cat.title}
                    </span>
                    <span className="text-slate-300 print:text-slate-700">
                      {cat.skills.map((s) => s.name).join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements & Hackathons */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-brand-cyan print:text-indigo-700 font-bold mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4" /> Honors, Hackathons &amp; Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 print:text-slate-700">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.id}>
                    <strong className="text-white print:text-black">{ach.title}</strong>: {ach.subtitle} — {ach.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
