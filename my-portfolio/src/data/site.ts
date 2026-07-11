// Centralized content for the portfolio.
// Edit this file to update copy without touching component markup.

export const profile = {
  name: "Anurag Tripathi",
  role: "Full-Stack Web Developer",
  tagline: "I build modern web applications for startups and creators.",
  subtext:
    "I partner with founders and teams to design, build, and ship production-grade products — from MVPs to full-scale platforms — using React, Node.js, and modern AI tooling.",
  email: "anuragtripathi2602@gmail.com",
  github: "https://github.com/anurag24-26",
  linkedin: "https://www.linkedin.com/in/anurag-tripathi2602/",
  location: "India",
};

export const trustItems = [
  { label: "Cognizant", sub: "Software Engineer" },
  { label: "Freelance", sub: "Client Projects" },
  { label: "Production", sub: "Deployed Apps" },
  { label: "React", sub: "Core Stack" },
  { label: "Node.js", sub: "Backend" },
  { label: "AI Integrations", sub: "Modern Tooling" },
];

export const services = [
  {
    title: "SaaS MVP Development",
    description:
      "Idea to working product. I design and build MVPs founders can put in front of users and investors fast.",
    icon: "rocket",
  },
  {
    title: "AI Integrations",
    description:
      "Add AI-powered features — chat, search, automation — into existing products using modern LLM tooling.",
    icon: "spark",
  },
  {
    title: "Business Websites",
    description:
      "Fast, accessible, SEO-ready marketing sites that convert visitors into customers.",
    icon: "globe",
  },
  {
    title: "Admin Dashboards",
    description:
      "Internal tools and admin panels for managing data, content, and operations with clean, usable UI.",
    icon: "grid",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting single pages for launches, campaigns, and product waitlists.",
    icon: "layout",
  },
  {
    title: "Internal Tools",
    description:
      "Custom internal software that automates manual workflows and saves teams real time.",
    icon: "tool",
  },
];

export type Project = {
  title: string;
  category: "client" | "personal";
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Saraswati Coaching Center",
    category: "client",
    summary:
      "MERN stack platform with an admin dashboard for dynamic result and student management.",
    challenge:
      "The coaching center published exam results manually and had no digital way to manage students or announcements.",
    solution:
      "Built a full MERN stack site with a secure admin dashboard for publishing results, managing student records, and posting updates in real time.",
    features: [
      "Admin dashboard with authentication",
      "Dynamic result management",
      "Responsive public-facing site",
      "Real-world production deployment",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anurag24-26/clientsite2",
    featured: true,
  },
  {
    title: "Jobs24x7",
    category: "personal",
    summary: "A job discovery and application tracking platform.",
    challenge:
      "Job seekers juggle multiple boards and lose track of applications and deadlines.",
    solution:
      "Designed a unified interface for browsing listings and tracking application status in one place.",
    features: ["Job listings", "Application tracking", "Responsive UI"],
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/anurag24-26",
  },
  {
    title: "AI Placement Guide",
    category: "personal",
    summary: "An AI-assisted resource for interview and placement preparation.",
    challenge:
      "Students preparing for interviews lack a single, structured, low-noise place to study.",
    solution:
      "Built a content platform structured around core CS subjects with AI-assisted guidance features.",
    features: ["Subject-wise content", "Search and filtering", "AI-assisted guidance"],
    tech: ["React", "Vite", "Node.js"],
    github: "https://github.com/anurag24-26",
  },
  {
    title: "Shopee E-Commerce Web App",
    category: "personal",
    summary:
      "Full-stack e-commerce platform with JWT authentication and secure REST APIs.",
    challenge:
      "Needed a complete e-commerce flow — auth, cart, checkout — built from scratch and production-ready.",
    solution:
      "Implemented JWT-based authentication, cart management, and secure REST APIs across a full-stack MERN app.",
    features: ["JWT authentication", "Cart & checkout flow", "Secure REST APIs"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/anurag24-26/ecommerce-frontend",
  },
  {
    title: "Secure File Transfer",
    category: "personal",
    summary: "A secure, encrypted file sharing utility.",
    challenge:
      "Sharing files over the web often trades away privacy and security for convenience.",
    solution:
      "Built a lightweight file transfer tool focused on encryption and secure links.",
    features: ["Encrypted transfer", "Shareable links", "Minimal, fast UI"],
    tech: ["React", "Node.js"],
    github: "https://github.com/anurag24-26",
  },
  {
    title: "FlowVoice",
    category: "personal",
    summary: "A voice-driven productivity and workflow tool.",
    challenge:
      "Typing-heavy workflows slow people down when they just want to capture ideas quickly.",
    solution:
      "Built a voice-first interface to capture and organize input hands-free.",
    features: ["Voice input", "Workflow automation", "Clean, focused UI"],
    tech: ["React", "AI APIs"],
    github: "https://github.com/anurag24-26",
  },
];

export const processSteps = [
  { title: "Discovery", description: "Understand your goals, users, and constraints." },
  { title: "Planning", description: "Define scope, architecture, and milestones." },
  { title: "Development", description: "Build in focused, reviewable increments." },
  { title: "Testing", description: "Verify functionality, performance, and edge cases." },
  { title: "Deployment", description: "Ship to production with monitoring in place." },
  { title: "Support", description: "Fix issues fast and iterate as you grow." },
];

export const whyWorkWithMe = [
  {
    title: "Fast Communication",
    description: "You're never left wondering about status. Clear, frequent updates.",
  },
  {
    title: "Scalable Code",
    description: "Code written to be maintained and extended, not just shipped once.",
  },
  {
    title: "Responsive Design",
    description: "Every build works cleanly across mobile, tablet, and desktop.",
  },
  {
    title: "Performance Focused",
    description: "Fast load times and lean bundles, not bloated frameworks.",
  },
  {
    title: "Deployment Included",
    description: "I handle deployment and hosting setup, not just local code.",
  },
  {
    title: "Long-Term Support",
    description: "Available after launch for fixes, features, and scaling help.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "Astro",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Git",
  "Docker",
];

export const resources = [
  {
    title: "VS Code Tips",
    description: "Shortcuts and extensions that speed up daily development.",
  },
  {
    title: "AI Tools",
    description: "Practical AI tools worth adding to your workflow.",
  },
  {
    title: "JavaScript Tricks",
    description: "Small patterns that make JavaScript code cleaner.",
  },
  {
    title: "React Tips",
    description: "Lessons learned building production React apps.",
  },
];
