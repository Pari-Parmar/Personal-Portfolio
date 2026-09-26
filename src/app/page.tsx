"use client";

import React, { useState } from "react";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function HomePage() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Dynamic Ambient Background Lights */}
      <BackgroundGlow />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* About Section & Education */}
      <About />

      {/* Technical Skills & Frameworks */}
      <Skills />

      {/* Featured Projects with Modals */}
      <Projects />

      {/* Industry Experience & Internships */}
      <Experience />

      {/* Hackathons & Achievements Timeline */}
      <Achievements />

      {/* Interactive Contact Form & Direct Links */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
}
