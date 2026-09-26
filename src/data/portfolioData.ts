export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "AI & ML" | "Full Stack" | "IoT & Systems" | "Web Apps";
  image: string;
  tags: string[];
  features: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: "Award" | "Hackathon" | "Academic" | "Certification";
  description: string;
  highlightText?: string;
  icon: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  location: string;
  details: string;
}

export const PERSONAL_INFO = {
  name: "Parisha Parmar",
  fullName: "Parisha Bhupendrabhai Parmar",
  role: "AI & Full Stack Developer",
  tagline: "Building intelligent software that solves real-world problems.",
  about:
    "I am a final-year Computer Science Engineering student passionate about Artificial Intelligence, Full Stack Development, Backend Engineering, and creating impactful digital products. I specialize in turning complex technological challenges into elegant, resilient, and user-centric web and AI applications. With proven hackathon experience, internship impact, and a strong engineering foundation, I thrive in fast-paced software environments.",
  email: "parmar.p.bhupendrabhai@nuv.ac.in",
  phone: "+91-8799626612",
  location: "Vadodara, Gujarat, India",
  pinCode: "390019",
  status: "Available for Software Engineering & AI Roles",
  github: "https://github.com/Pari-Parmar",
  linkedin: "https://www.linkedin.com/in/parisha-parmar-a65487284/",
  stats: [
    { label: "Hackathon Rank", value: "Top 6", sub: "TetraTHON 2026 (160+ teams)" },
    { label: "Completed Projects", value: "6+", sub: "AI, Full-Stack & IoT" },
    { label: "Internships Completed", value: "2", sub: "Frontend & Full-Stack" },
    { label: "Academic Excellence", value: "8.80", sub: "GTU Diploma CGPA" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "globetrotter",
    title: "GlobeTrotter",
    tagline: "Multi-City AI Travel Planning & Smart Itinerary Engine",
    description:
      "An intelligent, multi-city AI travel planning platform featuring dynamic itinerary generation, interactive route mapping, budget tracking, multi-currency conversion, and seamless online booking integration.",
    longDescription:
      "GlobeTrotter transforms trip planning into an automated, interactive experience. Built originally during the competitive 24-hour Odoo × LDCE Ahmedabad Hackathon 2026, it utilizes AI to suggest customized daily itineraries based on user travel preferences, budget thresholds, and pacing. Integrated with Google Maps API and Firebase for real-time state synchronization, it handles route optimization, expense estimation, and multi-currency conversions effortlessly.",
    category: "Full Stack",
    image: "/projects/globetrotter.svg",
    tags: ["Next.js", "React", "Firebase", "Maps API", "Tailwind CSS", "Gemini API"],
    features: [
      "AI-driven multi-city itinerary generation tailored to budget & timeframes",
      "Interactive GPS route visualization and waypoint navigation using Maps API",
      "Real-time expense splitting, budget tracker, and live currency converter",
      "Firebase Auth & Firestore database with collaborative trip sharing",
      "Built under high-pressure 24-hour sprint at Odoo × LDCE Hackathon",
    ],
    metrics: "Built in 24h • Odoo Hackathon 2026",
    liveUrl: "https://globetrotter-demo.vercel.app",
    githubUrl: "https://github.com/Pari-Parmar",
    featured: true,
  },
  {
    id: "arcanum-ai",
    title: "Arcanum AI",
    tagline: "Real-Time Multilingual Classroom Translation & Comprehension Platform",
    description:
      "A cutting-edge semantic comprehension system delivering real-time multilingual classroom audio translation, live transcriptions, and interactive AI-driven localized explanations.",
    longDescription:
      "Arcanum AI bridges linguistic barriers in educational lecture halls. By capturing educator speech through WebSockets, streaming it directly to OpenAI Whisper for rapid multi-dialect transcription, and feeding transcripts into LLMs for localized context summarization and question answering, students can absorb complex university courses in their native language in real-time.",
    category: "AI & ML",
    image: "/projects/arcanum.svg",
    tags: ["Whisper AI", "LLM", "WebSockets", "React", "Python", "FastAPI"],
    features: [
      "Low-latency audio streaming via WebSockets with continuous speech chunking",
      "Multi-dialect audio transcription using Whisper model architecture",
      "Instant contextual glossary generation for specialized scientific terminology",
      "Real-time synchronized student and lecturer interactive dual dashboard",
      "Offline exportable structured lecture notes and flashcards",
    ],
    metrics: "<300ms stream latency • 15+ Languages",
    liveUrl: "https://arcanum-ai-demo.vercel.app",
    githubUrl: "https://github.com/Pari-Parmar",
    featured: true,
  },
  {
    id: "sentinelgrid",
    title: "SentinelGrid",
    tagline: "AI-Powered CCTV Analytics & Real-Time Computer Vision Intelligence",
    description:
      "Automated surveillance intelligence platform featuring real-time object detection, Automated Number Plate Recognition (ANPR), security anomaly alerts, and interactive GIS mapping.",
    longDescription:
      "SentinelGrid empowers city and campus security teams with automated CCTV computer vision intelligence. Leveraging YOLOv8 for rapid inference alongside ByteTrack for multi-target tracking, SentinelGrid identifies vehicle license plates, detects boundary intrusions, and flags unusual crowd densities. It streams telemetric alerts into an intuitive Next.js GIS operations dashboard.",
    category: "AI & ML",
    image: "/projects/sentinelgrid.svg",
    tags: ["YOLOv8", "ByteTrack", "Next.js", "Python", "OpenCV", "Tailwind CSS"],
    features: [
      "Real-time object detection and multi-camera trajectory tracking with ByteTrack",
      "High-accuracy ANPR (Automatic Number Plate Recognition) vehicle logging",
      "Automated security alert triggers for perimeter breaches and zone dwell times",
      "Geographic Information System (GIS) mapping with live camera overlays",
      "Optimized for high-throughput video processing and edge analytics",
    ],
    metrics: "6th Rank @ TetraTHON 2026 (160 Teams)",
    liveUrl: "https://sentinelgrid-demo.vercel.app",
    githubUrl: "https://github.com/Pari-Parmar",
    featured: true,
  },
  {
    id: "katha-store",
    title: "Katha Store",
    tagline: "Responsive Modern E-Commerce Platform & Interactive Storefront",
    description:
      "An elegant, high-performance responsive shopping website developed adhering to the Waterfall Software Development Lifecycle, featuring custom animations and a modular architecture.",
    longDescription:
      "Katha Store was engineered from ground up as a showcase of clean semantic web design, modular layout architecture, and fluid CSS transitions. Adhering to the Waterfall SDLC, every stage from wireframing, architecture documentation, responsive breakpoints, to cross-browser testing was meticulously executed to deliver a seamless shopping catalog.",
    category: "Web Apps",
    image: "/projects/katha.svg",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX", "Waterfall SDLC"],
    features: [
      "Pixel-perfect responsive layout across mobile, tablet, and widescreen viewports",
      "Custom CSS keyframe micro-animations and interactive product cards",
      "Dynamic client-side product filtering, category tags, and search bar",
      "Interactive cart drawer with real-time price calculations and local storage state",
      "Engineered following rigorous Waterfall Software Engineering standards",
    ],
    metrics: "100% Responsive • Custom Micro-Interactions",
    liveUrl: "https://katha-store.vercel.app",
    githubUrl: "https://github.com/Pari-Parmar/Final_Project_Intership",
    featured: true,
  },
  {
    id: "greensort",
    title: "GreenSort IoT",
    tagline: "Smart Automated Computer Vision Waste Segregation Bin",
    description:
      "An IoT-enabled smart waste classification bin for hospitals and offices that uses a webcam and machine learning to identify waste materials and automatically actuate mechanical bins.",
    longDescription:
      "Developed in a team of three with mentor guidance from Mr. Gaurav Gaharwar, GreenSort addresses sanitary waste sorting in high-traffic environments like hospitals and enterprise offices. When an item is placed in the staging chamber, an overhead camera captures the image, classifies the material (dry, wet, recyclable, hazardous) using an image recognition pipeline, and rotates internal stepper motors to deposit it into the correct bin compartment.",
    category: "IoT & Systems",
    image: "/projects/greensort.svg",
    tags: ["Python", "OpenCV", "IoT", "Computer Vision", "Hardware Actuation", "Sensors"],
    features: [
      "Webcam-based real-time image capture and waste classification model",
      "Automated servo and stepper motor actuation to rotate the appropriate compartment",
      "Designed specifically for sanitary, touchless waste segregation in medical clinics",
      "Hardware-software handshake with fault detection and bin-capacity monitoring",
    ],
    metrics: "Hardware Prototype • 3-person Team Collaboration",
    githubUrl: "https://github.com/snehadpatel/greensort",
    featured: false,
  },
  {
    id: "bakemyday",
    title: "BakeMyDay",
    tagline: "Full-Featured Bakery Management & Order Fulfillment Platform",
    description:
      "An enterprise bakery management desktop & web application engineered in Java for end-to-end inventory management, custom cake ordering, billing, and customer records.",
    longDescription:
      "Built collaboratively under the mentorship of Mr. Vivek Bhatt, BakeMyDay was a foundational milestone in software architecture and Object-Oriented Programming (OOP). The system manages bakery inventory, raw materials, batch expiration tracking, dynamic billing generation, and customer orders with high data integrity.",
    category: "Full Stack",
    image: "/projects/bakemyday.svg",
    tags: ["Java", "OOP Architecture", "Database Design", "Desktop GUI", "Order Management"],
    features: [
      "Robust Object-Oriented design implementing clean MVC architectural principles",
      "Inventory tracking with low-stock warnings and batch expiration notifications",
      "Automated invoice & receipt generation with taxation computation",
      "Comprehensive customer ordering pipeline and past transaction history",
    ],
    metrics: "Enterprise Java Application • Mentored Project",
    githubUrl: "https://github.com/snehadpatel/BakeMyDay",
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages for algorithms, backend systems, and rapid prototyping.",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "Python", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Proficient", highlight: true },
      { name: "PHP", level: "Intermediate" },
      { name: "C / C++", level: "Intermediate" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Creating responsive, accessible, high-performance user interfaces with modern toolchains.",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Next.js (App Router)", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "HTML5 & CSS3", level: "Expert", highlight: true },
      { name: "Framer Motion", level: "Proficient" },
      { name: "UI/UX Design", level: "Proficient" },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Scalable backend architectures, REST & GraphQL endpoints, and cloud database integrations.",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "Firebase (Auth & Firestore)", level: "Advanced", highlight: true },
      { name: "RESTful APIs", level: "Expert", highlight: true },
      { name: "GraphQL", level: "Proficient" },
      { name: "SQL & Relational DBs", level: "Intermediate" },
    ],
  },
  {
    title: "AI, Vision & Developer Tools",
    description: "Cutting-edge AI integration, computer vision models, and collaborative dev tooling.",
    icon: "Cpu",
    skills: [
      { name: "Gemini API & LLMs", level: "Proficient", highlight: true },
      { name: "YOLOv8 & ByteTrack", level: "Proficient", highlight: true },
      { name: "Whisper AI Speech", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "VS Code", level: "Expert" },
      { name: "Android Development", level: "Intermediate" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Atlys Nexus Innovation",
    role: "Frontend Developer Intern",
    period: "Jun 2026 – Jul 2026",
    location: "Vadodara, Gujarat (Remote / Hybrid)",
    type: "Internship",
    description:
      "Contributed to building high-performance frontend interfaces for client software platforms, optimizing responsiveness, and implementing interactive UI components.",
    bullets: [
      "Engineered reusable, responsive UI components using React.js and modern CSS architecture",
      "Collaborated with backend engineers to integrate RESTful endpoints and state management flows",
      "Improved mobile responsiveness and cross-device rendering across multiple viewports",
      "Participated in agile code reviews and sprint ceremonies to ensure clean codebase hygiene",
    ],
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    company: "S.K. Infosoft",
    role: "Web Development Intern",
    period: "Jul 2023 – Aug 2023",
    location: "Vadodara, Gujarat",
    type: "Internship",
    description:
      "Developed web applications from wireframe designs to production deployments, gaining comprehensive experience across full frontend life cycles.",
    bullets: [
      "Built and deployed multiple dynamic web applications on cloud hosting platforms",
      "Translated client requirements into clean, accessible, and fast-loading web pages",
      "Assisted in backend integration, form validation routines, and database operations",
      "Strengthened hands-on knowledge in software debugging, browser developer tools, and deployment pipelines",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Web Deployment", "UI Layouts"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech. in Computer Science & Engineering",
    institution: "Navrachana University",
    period: "2023 – 2027 (Final Year)",
    grade: "CGPA: 7.26 / 10",
    location: "Vadodara, Gujarat",
    details:
      "Core Coursework: Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, Computer Networks, Operating Systems, Web Technologies.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "RMS Polytechnic (GTU)",
    period: "Completed 2024",
    grade: "CGPA: 8.80 / 10 (Distinction)",
    location: "Vadodara, Gujarat",
    details:
      "Focused on fundamental programming paradigms, Object-Oriented Programming with Java, Web Development basics, and hardware-software interfacing.",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Sardar Vallabhbhai Patel High School",
    period: "2021",
    grade: "81.83%",
    location: "Vadodara, Gujarat",
    details: "Strong academic foundation in Mathematics, Science, and Analytical Studies.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "tetrathon-2026",
    title: "TetraTHON 2026 — International Hackathon",
    subtitle: "Secured 6th Rank among 160+ Teams",
    date: "2026",
    category: "Hackathon",
    description:
      "Competed against 160 national and international engineering teams. Conceptualized and presented SentinelGrid — an AI-powered surveillance analytics and vehicle detection platform built under stringent judging criteria.",
    highlightText: "6th Rank / 160 Teams",
    icon: "Trophy",
  },
  {
    id: "odoo-hackathon",
    title: "Odoo × LDCE Ahmedabad Hackathon 2026",
    subtitle: "Built 'GlobeTrotter' in 24 Hours",
    date: "2026",
    category: "Hackathon",
    description:
      "Engineered GlobeTrotter from scratch in a 24-hour non-stop hackathon sprint, incorporating multi-city itinerary generation, budget tracking, and real-time maps.",
    highlightText: "24h Rapid Sprint",
    icon: "Zap",
  },
  {
    id: "competitive-hacker",
    title: "Active Hackathon Competitor",
    subtitle: "Multiple National & University Hackathons",
    date: "2023 – Present",
    category: "Award",
    description:
      "Consistently participated in competitive AI, IoT, and Full Stack hackathons, refining rapid prototyping, high-stress problem solving, and cross-functional team leadership.",
    highlightText: "High Velocity Builder",
    icon: "Flame",
  },
  {
    id: "cisco-workshop",
    title: "Cisco Systems Seminar & Technical Training",
    subtitle: "Conducted by Lynn Bloomer",
    date: "Training",
    category: "Certification",
    description:
      "Completed in-depth technical training on networking fundamentals, system architecture, and modern secure cloud infrastructure protocols.",
    highlightText: "Cisco Networking",
    icon: "Award",
  },
  {
    id: "certifications-bundle",
    title: "Professional Assessments & Certifications",
    subtitle: "Sustainx • OSF • ACM Student Chapter",
    date: "Certifications",
    category: "Certification",
    description:
      "Awarded certifications in Sustainx (Preethi Luhana), Open Source Foundations (OSF by Aman Bhargava), and ACM Chapter Technical Symposiums (Ujwala Petigara).",
    highlightText: "ACM & OSF Verified",
    icon: "CheckCircle",
  },
];
