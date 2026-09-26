"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FileText,
  Github,
  Linkedin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-surface-50/75 backdrop-blur-xl border-b border-white/[0.08] shadow-glass"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link
              href="#home"
              className="group flex items-center gap-2.5 text-white font-display font-bold text-lg tracking-tight"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan flex items-center justify-center text-white text-sm font-mono shadow-glow-cyan/50 group-hover:scale-105 transition-transform">
                P
              </span>
              <span className="flex items-center gap-1.5">
                <span>Parisha</span>
                <span className="text-slate-400 font-light group-hover:text-brand-cyan transition-colors">
                  .dev
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border-white/[0.08]">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/[0.12] -z-10 shadow-inner"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="shimmer-btn flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-glow hover:shadow-glow-purple/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenResume}
                className="px-3 py-1 rounded-full text-xs font-medium bg-brand-indigo/80 text-white"
              >
                Resume
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 p-4 md:hidden"
          >
            <div className="glass-panel p-6 rounded-2xl border-white/10 shadow-2xl flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/10 my-1" />

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-glow"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
