"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SectionHeading } from "./SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#00f5d4", "#a855f7", "#ec4899"],
      });

      // Clear form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something"
          titleAccent="Exceptional"
          subtitle="Whether you have an exciting software role, a hackathon collaboration, or an AI product idea, I'd love to connect!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards & Socials */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card with One-Click Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 rounded-3xl border-white/10 glass-panel-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center text-brand-cyan">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono glass-panel text-slate-300 hover:text-white transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400">Email Address</div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-semibold text-white hover:text-brand-cyan transition-colors break-all mt-0.5 block"
              >
                {PERSONAL_INFO.email}
              </a>
            </motion.div>

            {/* Phone & Location Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel p-5 rounded-2xl border-white/10 glass-panel-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple mb-3">
                  <Phone className="w-5 h-5 text-brand-cyan" />
                </div>
                <div className="text-xs font-mono text-slate-400">Phone</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-semibold text-white hover:text-brand-cyan transition-colors mt-0.5 block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="glass-panel p-5 rounded-2xl border-white/10 glass-panel-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-3">
                  <MapPin className="w-5 h-5 text-brand-cyan" />
                </div>
                <div className="text-xs font-mono text-slate-400">Location</div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {PERSONAL_INFO.location}
                </div>
              </motion.div>
            </div>

            {/* Social Network Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-6 rounded-3xl border-white/10"
            >
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Professional Networks
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-brand-cyan/40 text-slate-200 hover:text-white transition-all"
                >
                  <Github className="w-5 h-5 text-brand-cyan" />
                  <span className="text-xs font-semibold">GitHub Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-brand-purple/40 text-slate-200 hover:text-white transition-all"
                >
                  <Linkedin className="w-5 h-5 text-brand-purple" />
                  <span className="text-xs font-semibold">LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border-white/10 shadow-2xl relative"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-brand-cyan" />
              <h3 className="text-xl font-display font-bold text-white">
                Send a Message
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-bold text-white">
                  Message Dispatched!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. I have received your note and will get back to you shortly at your provided email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-400 mb-1.5"
                    >
                      Your Name <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-400 mb-1.5"
                    >
                      Email Address <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-400 mb-1.5"
                  >
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Software Engineering Opportunity / Hackathon Collaboration"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-400 mb-1.5"
                  >
                    Your Message <span className="text-brand-pink">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-btn w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan text-white shadow-glow hover:shadow-glow-purple/50 transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
