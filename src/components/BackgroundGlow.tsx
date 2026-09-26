"use client";

import React from "react";

export function BackgroundGlow() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Center Indigo Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-indigo/15 rounded-full blur-[140px] animate-glow" />

      {/* Top Left Cyan Glow */}
      <div className="absolute top-[15%] left-[-10%] w-[550px] h-[450px] bg-brand-cyan/10 rounded-full blur-[130px] animate-float" />

      {/* Mid Right Purple Glow */}
      <div className="absolute top-[45%] right-[-10%] w-[600px] h-[550px] bg-brand-purple/15 rounded-full blur-[150px] animate-pulse-slow" />

      {/* Bottom Center Blue / Emerald Glow */}
      <div className="absolute bottom-[-10%] left-1/3 w-[650px] h-[450px] bg-brand-blue/10 rounded-full blur-[140px]" />

      {/* Fine Mesh Grid with radial fade mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
        }}
      />
    </div>
  );
}
