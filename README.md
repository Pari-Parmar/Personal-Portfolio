# Parisha Parmar — AI & Full Stack Developer Portfolio

A modern, high-performance, dark-mode personal portfolio website engineered with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an Apple & Linear-inspired glassmorphism aesthetic, smooth scroll reveal micro-animations, and complete production readiness for instant Vercel deployment.

![Portfolio Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

---

## 🌟 Highlights & Features

- 🌌 **Linear + Apple Inspired Dark Glassmorphism**: Tailored cosmic color palette, frosted glass panels (`backdrop-blur-xl`), animated ambient radial glows, and fine grid overlay.
- ⚡ **Next.js 15 App Router & React 19**: Server & Client component architecture, optimized asset loading, fast page speeds, and clean code organization.
- 🎯 **Tailored Portfolio Data**: Grounded in Parisha Parmar's real resume, hackathon achievements (**6th Rank @ TetraTHON 2026**, **Odoo × LDCE Hackathon**), software internships (**Atlys Nexus Innovation**, **S.K. Infosoft**), and academic records at **Navrachana University** & **GTU**.
- 🚀 **Interactive Project Showcase**: Filterable project gallery with detailed modal dialogs, tech badges, GitHub repository links, and live preview buttons.
- 📄 **Dual Resume Experience**: In-page interactive resume modal + dedicated `/resume` route with one-click print-to-PDF formatting.
- 📬 **Interactive Contact Form**: Direct email copy with clipboard feedback, animated contact form with validation and celebratory confetti (`canvas-confetti`).
- 🔍 **SEO & Social Share Ready**: Complete OpenGraph meta tags, Twitter card, canonical tags, and Google-compliant JSON-LD structured schema (`Person`).
- 📱 **100% Fully Responsive**: Pixel-perfect layout across mobile, tablet, laptop, and ultra-wide viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
├── public/
│   ├── projects/               # Vector SVG assets for each featured project
│   │   ├── globetrotter.svg
│   │   ├── arcanum.svg
│   │   ├── sentinelgrid.svg
│   │   ├── katha.svg
│   │   ├── greensort.svg
│   │   └── bakemyday.svg
│   └── parisha-profile.svg     # Stylized vector avatar asset
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom glassmorphism, keyframes & scrollbar
│   │   ├── layout.tsx          # Root layout with Google Fonts & JSON-LD
│   │   ├── page.tsx            # Main portfolio single-page application
│   │   └── resume/
│   │       └── page.tsx        # Standalone printable resume route
│   ├── components/
│   │   ├── BackgroundGlow.tsx  # Ambient floating orbs & grid mesh
│   │   ├── Navbar.tsx          # Glassmorphic header with scroll spy
│   │   ├── Hero.tsx            # Hero presentation with stats & quick actions
│   │   ├── About.tsx           # Narrative, pillars & education timeline
│   │   ├── Skills.tsx          # Categorized technical competencies
│   │   ├── Projects.tsx        # Project gallery with category filters
│   │   ├── ProjectModal.tsx    # Detailed project popup overlay
│   │   ├── Experience.tsx      # Real-world internships & achievements
│   │   ├── Achievements.tsx    # Hackathon timeline with glowing nodes
│   │   ├── Contact.tsx         # Contact cards & interactive message form
│   │   ├── ResumeModal.tsx     # In-app CV modal with print integration
│   │   ├── SectionHeading.tsx  # Reusable section title component
│   │   └── Footer.tsx          # Footer with back-to-top & copyright
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for portfolio info
│   └── lib/
│       └── utils.ts            # Tailwind class merger utility
├── tailwind.config.ts          # Custom theme tokens & glass effects
├── tsconfig.json               # Path aliases (@/*) & strict TS rules
├── next.config.ts              # Next.js optimization configuration
└── package.json
```

---

## 💻 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/Pari-Parmar/Personal-Portfolio.git
cd Personal-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🚀 Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete premium personal portfolio website"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `Personal-Portfolio` repository.
4. Keep the default settings (Next.js is automatically detected).
5. Click **"Deploy"**!

---

## 👤 Personal Information

- **Name**: Parisha Bhupendrabhai Parmar
- **Role**: AI & Full Stack Developer
- **University**: Navrachana University, Vadodara, Gujarat (2023 – 2027)
- **Email**: [parmar.p.bhupendrabhai@nuv.ac.in](mailto:parmar.p.bhupendrabhai@nuv.ac.in)
- **Phone**: [+91-8799626612](tel:+918799626612)
- **GitHub**: [github.com/Pari-Parmar](https://github.com/Pari-Parmar)
- **LinkedIn**: [linkedin.com/in/parisha-parmar-a65487284](https://www.linkedin.com/in/parisha-parmar-a65487284/)

---

© 2026 Parisha Parmar. All rights reserved.
