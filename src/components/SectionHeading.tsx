"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  titleAccent,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"} ${className}`}
    >
      {/* Eyebrow Pill */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase mb-4 glass-panel border-white/10 text-brand-cyan ${isCenter ? "justify-center" : ""}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
        {badge}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
        {title}{" "}
        {titleAccent && (
          <span className="text-gradient-primary">
            {titleAccent}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
