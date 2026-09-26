import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parisha-parmar.vercel.app"),
  title: {
    default: "Parisha Parmar | AI & Full Stack Developer Portfolio",
    template: "%s | Parisha Parmar",
  },
  description:
    "Portfolio of Parisha Parmar — AI & Full Stack Developer specializing in Next.js, React, Node.js, Python, Computer Vision, and scalable web solutions. Final-year CSE student & hackathon winner.",
  keywords: [
    "Parisha Parmar",
    "AI Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Computer Science Engineer",
    "Navrachana University",
    "TetraTHON 2026",
    "GlobeTrotter",
    "SentinelGrid",
    "Vadodara",
    "Gujarat",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Parisha Parmar", url: "https://github.com/Pari-Parmar" }],
  creator: "Parisha Parmar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parisha-parmar.vercel.app",
    title: "Parisha Parmar — AI & Full Stack Developer",
    description:
      "Building intelligent software that solves real-world problems. Discover my projects, AI systems, full-stack web applications, and hackathon achievements.",
    siteName: "Parisha Parmar Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Parisha Parmar Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parisha Parmar — AI & Full Stack Developer",
    description:
      "Building intelligent software that solves real-world problems. Check out my projects and achievements.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Parisha Bhupendrabhai Parmar",
    alternateName: "Parisha Parmar",
    url: "https://parisha-parmar.vercel.app",
    jobTitle: "AI & Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Navrachana University",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Navrachana University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "RMS Polytechnic (GTU)",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390019",
      addressCountry: "India",
    },
    email: "parmar.p.bhupendrabhai@nuv.ac.in",
    sameAs: [
      "https://github.com/Pari-Parmar",
      "https://www.linkedin.com/in/parisha-parmar-a65487284/",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Full Stack Development",
      "Next.js",
      "React.js",
      "Python",
      "Node.js",
      "Java",
      "Computer Vision",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${firaCode.variable} bg-background text-foreground antialiased selection:bg-brand-indigo/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
