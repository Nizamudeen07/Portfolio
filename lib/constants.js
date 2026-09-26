export const PROFILE = {
  name: "Nizamudeen N",
  role: "Full Stack Developer",
  roleSub: "React.js · Next.js · Node.js — Frontend-focused Full Stack Developer",
  location: "Dubai, United Arab Emirates",
  email: "workfornizam@gmail.com",
  phone: "+971554750900",
  phoneDisplay: "+971 55 475 0900",
  whatsapp: "https://wa.me/919526642245",
  whatsappDisplay: "+91 9526642245",
  linkedin: "https://www.linkedin.com/in/nizamudeen-n-46574b218",
  github: "https://github.com/Nizamudeen07",
  resumeUrl: "/resume.pdf",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_STATS = [
  { num: "~3 yrs", label: "Professional experience" },
  { num: "15+", label: "Reusable React.js components" },
  { num: "35%", label: "Faster feature development" },
  { num: "30%", label: "Bundle size reduction" },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer – Frontend",
    company: "Solwyz Technologies",
    meta: "Jun 2024 – Aug 2026 · Trivandrum, India",
    bullets: [
      "Engineered 15+ reusable React.js components with TypeScript, cutting feature development time by 35%.",
      "Built SEO-optimized Next.js apps with SSR, SSG and ISR, improving Lighthouse scores and Core Web Vitals.",
      "Reduced bundle size by 30% via code splitting, lazy loading and dynamic imports.",
      "Integrated REST APIs, auth, payment gateways and analytics; deployed on Vercel/Netlify with CI/CD.",
      "Used Claude, ChatGPT, Copilot, Cursor and Antigravity to accelerate development and debugging.",
    ],
  },
  {
    role: "Junior Full Stack Developer",
    company: "DX Global Software Solutions",
    meta: "Nov 2023 – May 2024 · Kochi",
    bullets: [
      "Delivered pixel-perfect, responsive React.js interfaces from Figma across desktop and mobile.",
      "Integrated REST APIs with efficient state management and async data handling.",
      "Collaborated in Agile sprints — code reviews, sprint planning, production-ready delivery.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Admin Analytics Dashboard",
    challenge: "Surface real-time analytics over 10,000+ records without sacrificing speed",
    description:
      "Built a production-ready admin dashboard with real-time analytics, KPI widgets, interactive charts and dynamic data tables — engineered with lazy loading, memoization and virtualization to stay fast at scale.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Recharts", "Context API"],
    stats: [
      { value: "10,000+", label: "records handled" },
      { value: "<2s", label: "initial load time" },
      { value: "RBAC", label: "role-based access control" },
    ],
  },
  {
    title: "SEO-Optimized Business Website",
    challenge: "Maximize organic visibility and load speed for a content-driven business site",
    description:
      "Built a high-performance Next.js site on the App Router, combining SSR, SSG and ISR with technical SEO — dynamic routing, metadata generation, sitemap and robots.txt.",
    tech: ["Next.js", "App Router", "SSR", "SSG", "ISR", "Tailwind CSS"],
    stats: [
      { value: "95+", label: "Lighthouse SEO" },
      { value: "<1s", label: "TTFB" },
    ],
  },
];

export const SKILL_FLOW = [
  { tier: "Frontend", items: "React.js · Next.js · JavaScript · TypeScript · Angular · HTML5 · CSS3" },
  { tier: "State & Data", items: "Redux Toolkit · Context API · React Query" },
  { tier: "Backend", items: "Node.js · Express.js · REST APIs" },
  { tier: "Data", items: "MongoDB · PostgreSQL" },
  { tier: "Deployment", items: "Vercel · Netlify · CI/CD · GitHub Actions" },
];

export const SKILL_GROUPS = [
  { name: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES2023+)", "Angular", "HTML5 / CSS3"] },
  { name: "State Management", items: ["Context API", "Redux Toolkit", "React Query"] },
  { name: "UI & Styling", items: ["Tailwind CSS", "Material UI", "Bootstrap", "Figma to Code"] },
  { name: "Performance", items: ["SSR / SSG / ISR", "Core Web Vitals", "Code Splitting", "Lazy Loading"] },
  { name: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs"] },
  { name: "Databases", items: ["MongoDB", "PostgreSQL"] },
  { name: "Deployment", items: ["Vercel", "Netlify", "CI/CD", "GitHub Actions"] },
  { name: "Tools", items: ["Git / GitHub", "Postman", "VS Code", "Cursor IDE", "Figma"] },
  { name: "AI Tools", items: ["Claude", "ChatGPT", "GitHub Copilot", "Cursor", "Antigravity"] },
];

export const BUILD_STEPS = [
  "Idea & product requirements",
  "Figma design handoff",
  "AI-assisted development",
  "React.js / Next.js build-out",
  "Node.js / REST API integration",
  "Testing & performance optimization",
  "CI/CD via GitHub Actions",
  "Production on Vercel / Netlify",
];

export const AI_TOOLS = ["Claude", "ChatGPT", "Cursor", "GitHub Copilot", "Antigravity"];

export const EDUCATION = [
  { program: "MERN Stack Development", school: "Luminar Technolab", meta: "Apr 2023 – Nov 2023" },
  { program: "B.Sc. Botany", school: "Catholicate College, Pathanamthitta", meta: "Jan 2018 – Jan 2021" },
];
