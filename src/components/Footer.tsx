"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-surface-50/90 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="#home"
              className="flex items-center gap-2 text-white font-display font-bold text-xl tracking-tight"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan flex items-center justify-center text-white text-sm font-mono shadow-glow-cyan/50">
                P
              </span>
              <span>Parisha Parmar</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-sm">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            <Link href="#home" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#achievements" className="hover:text-white transition-colors">
              Achievements
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-indigo/20 text-brand-cyan hover:bg-brand-indigo/40 border border-brand-indigo/30 transition-colors ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Designed &amp; Developed by</span>
            <span className="text-slate-300 font-semibold">Parisha Parmar</span>
            <span>© 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Vadodara, Gujarat, India</span>
            <span>•</span>
            <span className="text-emerald-400">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
