"use client";

import React from "react";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
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

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <button
            onClick={handlePrint}
            className="shimmer-btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-glow"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save PDF</span>
          </button>
        </div>

        {/* Resume Sheet */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border-white/10 shadow-2xl bg-surface-50 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none space-y-8">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white print:text-black">
              {PERSONAL_INFO.fullName}
            </h1>
            <div className="text-brand-cyan print:text-indigo-600 font-semibold text-lg mt-1">
              {PERSONAL_INFO.role} • B.Tech. Computer Science &amp; Engineering
            </div>

            {/* Contact Strip */}
            <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs text-slate-300 print:text-slate-700 mt-4 font-mono">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-brand-cyan"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan print:text-black" />
                {PERSONAL_INFO.email}
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-brand-cyan"
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan print:text-black" />
                {PERSONAL_INFO.phone}
              </a>

              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan print:text-black" />
                {PERSONAL_INFO.location} - {PERSONAL_INFO.pinCode}
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-brand-cyan"
              >
                <Github className="w-3.5 h-3.5 text-brand-cyan print:text-black" />
                github.com/Pari-Parmar
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-brand-cyan"
              >
                <Linkedin className="w-3.5 h-3.5 text-brand-cyan print:text-black" />
                linkedin.com/in/parisha-parmar
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-brand-cyan print:text-indigo-700 font-bold mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Career Objective
            </h2>
            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
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

          {/* Professional Internships */}
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

          {/* Featured Projects */}
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

          {/* Honors & Certifications */}
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
      </div>
    </div>
  );
}
