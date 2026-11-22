// ============================================================
// Zenvisoft – Centralized Static Content & Design System Tokens
// Modeled directly from the WeDevs Figma Design System
// ============================================================

export const siteConfig = {
  name: "Zenvisoft",
  subname: "SOFTWARE COMPANY",
  tagline: "We Build Digital Experiences",
  description:
    "Zenvisoft is a premier software development and digital product agency delivering scalable web apps, mobile solutions, and enterprise software that drive measurable growth.",
  url: "https://zenvisoft.com",
  logo: "/logo.png",
  primaryColor: "#01163B",
};

// ---------- Navigation (Directly from Figma Node 55:2215) ----------
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const navCta = {
  label: "Start a project",
  href: "/contact",
};

// ---------- Hero Section ----------
export const heroContent = {
  badge: "Top-Rated Software & Digital Product Agency",
  heading: "We Engineer High-Impact Software & Digital Solutions",
  subheading:
    "From visionary concepts to robust production deployments, Zenvisoft builds enterprise-grade web applications, custom SaaS platforms, and mobile apps designed to scale your business.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
  statsSnippet: [
    { label: "Success Rate", value: "99.4%" },
    { label: "Active Deployments", value: "350+" },
    { label: "Global Clients", value: "30+ Countries" },
  ],
};

// ---------- Trusted By / Client Logos ----------
export const clientLogos = [
  { name: "AlphaTech", label: "AlphaTech Systems" },
  { name: "CloudScale", label: "CloudScale AI" },
  { name: "NexusDigital", label: "Nexus Digital" },
  { name: "HyperFlow", label: "HyperFlow Inc." },
  { name: "Vanguard", label: "Vanguard FinTech" },
  { name: "OmniCore", label: "OmniCore Global" },
];

// ---------- Services Section ----------
export interface Service {
  icon: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  slug: string;
}

export const services: Service[] = [
  {
    icon: "code",
    badge: "Web Engineering",
    title: "Full-Stack Web Development",
    description:
      "Modern, ultra-performant web applications built with Next.js, React, Node.js, and TypeScript, engineered for speed, high conversion, and enterprise scalability.",
    deliverables: ["Custom Web Apps", "SaaS Platforms", "Progressive Web Apps", "API Integrations"],
    slug: "web-development",
  },
  {
    icon: "smartphone",
    badge: "Mobile Apps",
    title: "Cross-Platform & Native Mobile",
    description:
      "Intuitive iOS and Android apps that provide fluid 60fps animations, native capabilities, and seamless offline-first architectures for superior user engagement.",
    deliverables: ["iOS & Android Apps", "React Native", "Flutter Engineering", "App Store Deployment"],
    slug: "mobile-development",
  },
  {
    icon: "cloud",
    badge: "Cloud & DevOps",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Automated CI/CD pipelines, containerized microservices with Docker and Kubernetes, and highly secure AWS/GCP cloud environments with 99.99% uptime.",
    deliverables: ["AWS / Azure / GCP", "Kubernetes & Docker", "CI/CD Automation", "Infrastructure as Code"],
    slug: "cloud-solutions",
  },
  {
    icon: "palette",
    badge: "UI/UX Design",
    title: "Product Design & Prototyping",
    description:
      "Human-centered UI/UX systems created in Figma, with deep design tokens, comprehensive component libraries, and interactive prototypes tested for optimal conversion.",
    deliverables: ["Design Systems", "Interactive Prototypes", "User Journey Mapping", "Wireframing"],
    slug: "ui-ux-design",
  },
  {
    icon: "shield",
    badge: "Security",
    title: "Cybersecurity & Code Audits",
    description:
      "Comprehensive application penetration testing, vulnerability assessments, OWASP compliance, and security architecture audits to keep your enterprise data safe.",
    deliverables: ["Penetration Testing", "Security Audits", "OWASP Hardening", "Data Protection Compliance"],
    slug: "cybersecurity",
  },
  {
    icon: "bar-chart",
    badge: "Intelligence",
    title: "AI Integration & Data Analytics",
    description:
      "Custom business intelligence dashboards, real-time analytics pipelines, and bespoke LLM/AI integrations that automate workflows and unlock predictive business insights.",
    deliverables: ["AI & LLM Workflows", "Real-Time Dashboards", "Data Pipelines", "Predictive Analytics"],
    slug: "data-analytics",
  },
];

// ---------- Key Metrics / Stats ----------
export const stats = [
  { value: "250+", label: "Completed Projects", sub: "Delivered on schedule" },
  { value: "99.2%", label: "Client Retention", sub: "Long-term partnerships" },
  { value: "50+", label: "Senior Engineers", sub: "Top 3% tech talent" },
  { value: "30+", label: "Global Markets", sub: "Serving international clients" },
];

// ---------- About / Advantage Content ----------
export const aboutContent = {
  heading: "Why Fast-Growing Companies Choose Zenvisoft",
  subheading:
    "We blend technical precision with rapid agile execution to engineer software that scales flawlessly and drives real business impact.",
  features: [
    {
      title: "Top 3% Senior Engineers Only",
      description:
        "Every engineer on your squad has 5+ years of production experience in TypeScript, React/Next.js, cloud systems, and high-concurrency architectures.",
    },
    {
      title: "Predictable Bi-Weekly Sprints",
      description:
        "Transparent agile workflows with live staging environments, automated CI/CD previews, and daily asynchronous Slack check-ins.",
    },
    {
      title: "Enterprise Architecture & Clean Code",
      description:
        "Fully typed codebases, comprehensive unit and integration test coverage, and strict OWASP security compliance from day one.",
    },
    {
      title: "100% Intellectual Property Ownership",
      description:
        "All source code, design files, infrastructure configurations, and patents belong exclusively to you from the moment of creation.",
    },
  ],
};

// ---------- Featured Projects ----------
export interface Project {
  title: string;
  client: string;
  category: string;
  description: string;
  metrics: string;
  technologies: string[];
  slug: string;
}

export const projects: Project[] = [
  {
    title: "OmniChannel E-Commerce Ecosystem",
    client: "RetailPrime Global",
    category: "Web Engineering",
    description:
      "A headless e-commerce platform processing over 100K daily transactions with sub-second page loads, automated inventory sync, and multi-currency payment routing.",
    metrics: "+185% Checkout Conversion",
    technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    slug: "omnichannel-ecommerce",
  },
  {
    title: "MedConnect Telemedicine Platform",
    client: "HealthPulse Inc.",
    category: "Mobile & Web",
    description:
      "HIPAA-compliant digital health suite providing encrypted video consultations, digital prescription management, and automated patient health records.",
    metrics: "400k+ Active Patients",
    technologies: ["React Native", "WebRTC", "Next.js", "AWS HIPAA Cloud", "Redis"],
    slug: "medconnect-telehealth",
  },
  {
    title: "FinMatrix Real-Time Analytics Suite",
    client: "Apex Asset Management",
    category: "FinTech & UI/UX",
    description:
      "High-frequency financial intelligence dashboard rendering real-time portfolio risk assessments, market telemetry, and automated compliance reporting.",
    metrics: "$2.4B Monitored Assets",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Go Microservices", "ClickHouse"],
    slug: "finmatrix-analytics",
  },
  {
    title: "CloudFlow Automated DevOps Pipeline",
    client: "SaaS Scale Systems",
    category: "Cloud & DevOps",
    description:
      "Multi-region Kubernetes deployment engine with automated disaster recovery, zero-downtime rolling updates, and intelligent auto-scaling policies.",
    metrics: "99.99% Guaranteed SLA",
    technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "Prometheus"],
    slug: "cloudflow-devops",
  },
  {
    title: "FleetTrack Logistics & Routing Engine",
    client: "Global Haulage Ltd",
    category: "Mobile & Cloud",
    description:
      "GPS telematics and route optimization application dispatching and managing 1,200+ freight vehicles in real-time with automated fuel optimization.",
    metrics: "32% Reduced Transit Time",
    technologies: ["React Native", "Python", "Google Maps API", "WebSockets"],
    slug: "fleettrack-logistics",
  },
  {
    title: "EduCore Adaptive Learning System",
    client: "NextGen Academy",
    category: "Web & AI",
    description:
      "AI-driven educational portal delivering tailored curriculum paths, real-time assessment scoring, and interactive lecture modules for 250,000+ students.",
    metrics: "94% Course Completion Rate",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "PostgreSQL"],
    slug: "educore-learning",
  },
];

// ---------- Development Process (How We Work) ----------
export const processSteps = [
  {
    step: "01",
    phase: "Discovery & Blueprint",
    title: "Discovery & Architecture",
    description:
      "We dive deep into your domain, define core milestones, select optimal technology stacks, and create comprehensive architectural blueprints.",
  },
  {
    step: "02",
    phase: "Design & Prototype",
    title: "Interactive UI/UX Design",
    description:
      "Using Figma design systems and auto-layout, we craft clickable, high-fidelity prototypes that refine user journeys before writing a line of code.",
  },
  {
    step: "03",
    phase: "Agile Development",
    title: "Sprint-Based Engineering & QA",
    description:
      "Our engineers develop clean, tested TypeScript code in bi-weekly sprints with automated CI/CD checks, unit tests, and continuous client visibility.",
  },
  {
    step: "04",
    phase: "Launch & Scale",
    title: "Deployment & Growth Support",
    description:
      "We perform zero-downtime production deployment, monitor performance telemetry, and offer continuous optimization to keep your product leading.",
  },
];

// ---------- Pricing / Engagement Models ----------
export const pricingPlans = [
  {
    id: "dedicated",
    name: "Dedicated Engineering Team",
    badge: "Most Popular",
    price: "$4,500",
    period: "/ developer / month",
    description:
      "Full-time senior software developers dedicated exclusively to your project with daily standups, flexible scaling, and complete IP ownership.",
    features: [
      "Dedicated Full-Time Senior Developers",
      "Agile Scrum Master & Technical PM",
      "Direct Slack / Teams Integration",
      "Daily Code Commits & Pull Requests",
      "Automated CI/CD & Cloud Testing",
      "Zero Overheads or Long-Term Lock-in",
    ],
    cta: "Hire Dedicated Team",
    highlighted: true,
  },
  {
    id: "fixed",
    name: "Fixed-Scope Project",
    badge: "Defined Scope",
    price: "Custom",
    period: "Milestone-based",
    description:
      "Ideal for well-defined MVPs, platform overhauls, or greenfield projects with guaranteed milestone deadlines, fixed budgets, and strict quality assurance.",
    features: [
      "Fixed Budget & Guaranteed Timeline",
      "Full Product Discovery & UI/UX Design",
      "Complete Architecture Blueprint",
      "End-to-End QA & Security Testing",
      "Source Code & Full IP Handover",
      "90 Days Free Post-Launch Warranty",
    ],
    cta: "Request Project Estimate",
    highlighted: false,
  },
  {
    id: "advisory",
    name: "Technical Advisory & DevOps",
    badge: "Fractional CTO",
    price: "$2,800",
    period: "/ month",
    description:
      "High-level architectural oversight, cloud cost optimization, security hardening, and code audit support for scaling engineering departments.",
    features: [
      "Architecture & Infrastructure Reviews",
      "AWS / GCP Cloud Cost Reduction",
      "Security Audits & Vulnerability Scans",
      "CI/CD Pipeline Streamlining",
      "Code Quality & Performance Tuning",
      "Priority Engineering Escalations",
    ],
    cta: "Consult Our Architects",
    highlighted: false,
  },
];

// ---------- Team Members ----------
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "Chief Executive Officer & Founder",
    bio: "Ex-Google architect with 14+ years building distributed enterprise software and high-growth engineering teams.",
    initials: "AM",
  },
  {
    name: "Priya Patel",
    role: "Head of Product & UI/UX Design",
    bio: "Award-winning design lead passionate about human-centered design systems, micro-interactions, and conversion optimization.",
    initials: "PP",
  },
  {
    name: "David Kim",
    role: "Chief Technology Officer",
    bio: "Cloud-native infrastructure specialist with deep expertise in high-concurrency systems, Kubernetes, and Go/Rust backends.",
    initials: "DK",
  },
  {
    name: "Jessica Lee",
    role: "VP of Engineering & Delivery",
    bio: "Certified Scrum Professional directing agile sprints across 50+ engineers to ensure on-time, bug-free project handovers.",
    initials: "JL",
  },
];

// ---------- Careers / Open Positions ----------
export const jobOpenings = [
  {
    title: "Senior Full-Stack Engineer (Next.js / TypeScript)",
    type: "Full-Time",
    location: "Remote / Hybrid",
    department: "Engineering",
    experience: "5+ Years",
  },
  {
    title: "Lead UI/UX Product Designer",
    type: "Full-Time",
    location: "Remote",
    department: "Design",
    experience: "4+ Years",
  },
  {
    title: "Senior DevOps & Cloud Architect (AWS/K8s)",
    type: "Full-Time",
    location: "Remote",
    department: "Infrastructure",
    experience: "6+ Years",
  },
  {
    title: "Mobile App Engineer (React Native / iOS)",
    type: "Full-Time",
    location: "Remote",
    department: "Mobile",
    experience: "4+ Years",
  },
];

// ---------- Client Testimonials ----------
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Zenvisoft completely transformed our core platform. Their architectural mastery, clean TypeScript code, and adherence to sprint deadlines saved us months of development time. They are true partners.",
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    company: "TechCorp Global",
    rating: 5,
  },
  {
    quote:
      "The engineering depth of the Zenvisoft team is extraordinary. They built our mobile app from scratch, passed rigorous App Store audits on the first submission, and our user satisfaction skyrocketed to 4.9 stars.",
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "InnovateCo Labs",
    rating: 5,
  },
  {
    quote:
      "Finding an agency that excels in both pixel-perfect Figma design and rock-solid cloud backend infrastructure is rare. Zenvisoft is that team. We've scaled our userbase 10x with zero downtime.",
    name: "Emily Rodriguez",
    role: "VP of Product",
    company: "CloudBase Solutions",
    rating: 5,
  },
];

// ---------- Tech Stack Categories ----------
export const techStackCategories = [
  {
    category: "Frontend & Web",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "GraphQL"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Go", "Python", "NestJS", "FastAPI", "Express"],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "Redis", "MongoDB", "Prisma", "Elasticsearch", "ClickHouse"],
  },
  {
    category: "Cloud, DevOps & Infra",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

// ---------- Footer Content ----------
export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Case Studies", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Full-Stack Web Dev", href: "/services" },
    { label: "Mobile App Development", href: "/services" },
    { label: "Cloud Infrastructure", href: "/services" },
    { label: "UI/UX Product Design", href: "/services" },
    { label: "Cybersecurity Audits", href: "/services" },
  ],
  support: [
    { label: "Start a Project", href: "/contact" },
    { label: "Client Portal", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security Overview", href: "#" },
  ],
};

export const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/zenvisoft", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com/company/zenvisoft", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/zenvisoft", icon: "github" },
  { label: "Facebook", href: "https://facebook.com/zenvisoft", icon: "facebook" },
];

// ---------- Contact Page Information ----------
export const contactInfo = {
  heading: "Start Your Project With Zenvisoft",
  subheading:
    "Have a challenge, an idea, or an upcoming initiative? Let's talk. Our engineering leads respond with technical feasibility and project timelines within 24 hours.",
  email: "hello@zenvisoft.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Suite 400, San Francisco, CA 94105",
  availability: "Monday – Friday: 9am – 6pm EST",
};
