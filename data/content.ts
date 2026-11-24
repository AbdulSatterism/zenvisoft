// ============================================================
// Zenvisoft – Centralized Static Content & Design System Tokens
// Extracted 100% exactly from the WeDevs Figma Design (Node 2:12)
// ============================================================

export const siteConfig = {
  name: "Zenvisoft",
  subname: "SOFTWARE COMPANY",
  tagline: "We build digital products that your users will love",
  description:
    "A full-service design and development agency crafting high-performance websites and mobile apps. We turn your complex ideas into seamless digital experiences.",
  url: "https://zenvisoft.io",
  logo: "/logo.png",
  primaryColor: "#01163B",
  accentColor: "#1E56A0",
  whatsappNumber: "+8801571320243",
  whatsappUrl: "https://wa.me/+8801571320243",
};

// ---------- Navigation ----------
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

// ---------- Hero Section (Exact Figma text) ----------
export const heroContent = {
  headingPart1: "We build the",
  headingAccent: "digital products",
  headingPart2: "that your users will love.",
  subheading:
    "A full-service design and development agency crafting high-performance websites and mobile apps. We turn your complex ideas into seamless digital experiences.",
  primaryCta: { label: "Start a project", href: "/contact" },
  whatsappCta: { label: "Contact on Whatsapp", href: "https://wa.me/+8801571320243" },
  trustedText: "We are trusted by more than 200+ clients",
};

// ---------- Services (Exact Figma layout & text) ----------
export interface ServiceDeliverable {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
  tools: string[];
  href: string;
  deliverables: ServiceDeliverable[];
  process: ServiceProcessStep[];
  whyUs: {
    heading: string;
    description: string;
    checklist: string[];
    stat: { value: string; label: string };
  };
  technologies: { name: string; role: string }[];
}

export const servicesData = {
  badge: "Our services",
  heading: "Expert solutions for every digital touchpoint.",
  description:
    "Whether it's a high-converting landing page or a complex SaaS ecosystem, we have the tools to build it right.",
  items: [
    {
      id: "ux-ui",
      title: "Ux-Ui Design",
      subtitle: "Intuitive Interfaces & Scalable Design Systems",
      badge: "UX - UI Design",
      description:
        "Crafting intuitive digital journeys that turn users into loyal advocates through research-driven, high-fidelity design.",
      image: "/figma/service-ux.png",
      tools: ["Figma", "Adobe XD", "Sketch", "Illustrator"],
      href: "/services/ux-ui",
      deliverables: [
        {
          title: "Wireframing & Prototyping",
          description: "Low and high fidelity interactive mockups testing real user workflows and usability friction points.",
          icon: "layout",
        },
        {
          title: "Visual Design & Branding",
          description: "Pixel-perfect visual design systems, custom iconography, typography, and cohesive brand palettes.",
          icon: "palette",
        },
        {
          title: "User Research & Testing",
          description: "In-depth competitor analysis, customer journey mapping, empathy interviews, and behavioral analytics.",
          icon: "search",
        },
        {
          title: "Design Systems & Tokens",
          description: "Comprehensive tokenized UI component libraries that ensure consistency and speed up engineering.",
          icon: "grid",
        },
      ],
      process: [
        {
          step: 1,
          title: "Research & Discovery",
          description: "Analyzing user behavior, market trends, and stakeholder expectations to uncover genuine opportunities.",
        },
        {
          step: 2,
          title: "Wireframing & Architecture",
          description: "Structuring information architecture and mapping click-through flows before diving into visual styling.",
        },
        {
          step: 3,
          title: "Visual Design & Prototyping",
          description: "Applying high-contrast brand aesthetics, micro-interactions, and responsive layouts across all viewports.",
        },
        {
          step: 4,
          title: "Usability Testing & Handoff",
          description: "Conducting moderated test sessions, refining interactive states, and exporting specs directly for developers.",
        },
      ],
      whyUs: {
        heading: "Why choose our design team?",
        description: "We don't just design for looks; we design for business growth. Every button placement and user flow is engineered to increase sign-ups, boost sales, and maximize long-term user retention.",
        checklist: [
          "Human-centric interfaces backed by cognitive psychology",
          "Seamless developer handoff with 100% tokenized Figma components",
          "Rapid iteration cycles with weekly clickable prototype releases",
          "Battle-tested design systems that scale seamlessly with your engineering team",
        ],
        stat: { value: "4.9/5", label: "Average client design satisfaction" },
      },
      technologies: [
        { name: "Figma", role: "Interface & Prototyping" },
        { name: "FigJam", role: "Workshops & Architecture" },
        { name: "Adobe Illustrator", role: "Vector & Icon Assets" },
        { name: "Framer", role: "Micro-interactions" },
        { name: "Principle", role: "Advanced Animation" },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile app development",
      subtitle: "High-Performance iOS & Android Applications",
      badge: "Mobile App Development",
      description:
        "Building powerful, native-feel applications for iOS and Android that deliver seamless performance on every screen.",
      image: "/figma/service-mobile.png",
      tools: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase"],
      href: "/services/mobile-app",
      deliverables: [
        {
          title: "Cross-Platform Apps",
          description: "Single-codebase Flutter and React Native solutions delivering fluid 60fps performance on both iOS & Android.",
          icon: "smartphone",
        },
        {
          title: "Native iOS & Android",
          description: "Swift and Kotlin engineering for hardware-accelerated, sensor-driven, and enterprise-grade mobile experiences.",
          icon: "cpu",
        },
        {
          title: "Offline-First & Sync",
          description: "Local databases, background task queues, and seamless cloud synchronization during connectivity dropouts.",
          icon: "database",
        },
        {
          title: "Store Launch & ASO",
          description: "End-to-end Apple App Store and Google Play compliance, metadata optimization, and expedited review pass.",
          icon: "check-circle",
        },
      ],
      process: [
        {
          step: 1,
          title: "Technical Architecture",
          description: "Choosing the optimal state management, API contract schemas, and secure device authentication models.",
        },
        {
          step: 2,
          title: "Interactive Sprint Builds",
          description: "Delivering bi-weekly TestFlight and internal testing builds for real-time progress validation.",
        },
        {
          step: 3,
          title: "Performance Profiling",
          description: "Eliminating memory leaks, optimizing battery consumption, and ensuring instantaneous cold startup times.",
        },
        {
          step: 4,
          title: "Store Submission & Launch",
          description: "Guiding the binary through compliance checks, setting up crash analytics, and monitoring post-launch adoption.",
        },
      ],
      whyUs: {
        heading: "Engineered for speed, stability, and scale.",
        description: "Mobile users expect instant response times and zero crashes. We build native-caliber mobile applications with automated testing pipelines and rock-solid state management.",
        checklist: [
          "Zero-compromise performance running at continuous 60fps",
          "Automated CI/CD pipelines deploying directly to TestFlight & Play Internal",
          "Strict data encryption and biometric biometric security protocols",
          "Proactive crash monitoring and real-time remote configuration updates",
        ],
        stat: { value: "99.9%", label: "Crash-free user session rate" },
      },
      technologies: [
        { name: "Flutter", role: "Cross-Platform Framework" },
        { name: "React Native", role: "Universal Mobile Apps" },
        { name: "Swift", role: "Native iOS Engine" },
        { name: "Kotlin", role: "Native Android Core" },
        { name: "Firebase", role: "Cloud Messaging & Auth" },
      ],
    },
    {
      id: "web-dev",
      title: "Web development",
      subtitle: "Lightning-Fast, Scalable Web Applications",
      badge: "Web Development",
      description:
        "Engineering lightning-fast, SEO-optimized, and scalable web experiences using the most stable modern frameworks.",
      image: "/figma/service-web.png",
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      href: "/services/web-dev",
      deliverables: [
        {
          title: "Next.js Architecture",
          description: "App Router, Server Components, and Partial Prerendering for perfect 100 Lighthouse performance scores.",
          icon: "globe",
        },
        {
          title: "Interactive Web Portals",
          description: "Complex client dashboards, real-time analytics charts, and role-based access control management interfaces.",
          icon: "monitor",
        },
        {
          title: "High-Converting Landers",
          description: "Conversion-optimized landing pages engineered with instant page loads, smooth animations, and tracking hooks.",
          icon: "zap",
        },
        {
          title: "API & Headless Systems",
          description: "REST & GraphQL backend integrations, headless CMS architectures, and third-party payment gateway hookups.",
          icon: "layers",
        },
      ],
      process: [
        {
          step: 1,
          title: "Schema & Component Setup",
          description: "Structuring clean TypeScript domain models, modular component boundaries, and CSS token systems.",
        },
        {
          step: 2,
          title: "Full-Stack Implementation",
          description: "Wiring backend endpoints with dynamic front-end state, caching layers, and responsive UI containers.",
        },
        {
          step: 3,
          title: "SEO & Core Web Vitals",
          description: "Tuning Largest Contentful Paint, Cumulative Layout Shift, and semantic open graph metadata across all pages.",
        },
        {
          step: 4,
          title: "Production Deployment",
          description: "Deploying globally distributed edge networks with automatic branch preview environments and DDoS protection.",
        },
      ],
      whyUs: {
        heading: "Modern web engineering built for measurable ROI.",
        description: "Slow websites lose customers before they even read the headline. We craft blazing-fast web applications with sub-second page loads, modular architectures, and clean code that any engineering team can maintain with ease.",
        checklist: [
          "Perfect 95+ Core Web Vitals on mobile and desktop devices",
          "Strict TypeScript type safety with zero runtime crashes",
          "Automated SEO optimization with JSON-LD structured schemas",
          "Seamless third-party integrations with Stripe, Auth0, and modern APIs",
        ],
        stat: { value: "<0.8s", label: "Average page load speed" },
      },
      technologies: [
        { name: "Next.js", role: "React Server Framework" },
        { name: "TypeScript", role: "Type Safety & Domain Models" },
        { name: "Tailwind CSS", role: "Utility Design Engine" },
        { name: "Node.js", role: "High-Throughput Backend" },
        { name: "PostgreSQL", role: "Relational Data Storage" },
      ],
    },
    {
      id: "saas",
      title: "SAAS",
      subtitle: "Multi-Tenant Architecture & Cloud SaaS Platforms",
      badge: "SaaS Development",
      description:
        "Scaling your vision with robust multi-tenant architectures, secure payment integrations, and data-driven user dashboards.",
      image: "/figma/service-saas.png",
      tools: ["Node.js", "Stripe", "PostgreSQL", "Docker"],
      href: "/services/saas",
      deliverables: [
        {
          title: "Multi-Tenant Infrastructure",
          description: "Isolated database schemas, domain routing, and customized tenant branding configurations at scale.",
          icon: "server",
        },
        {
          title: "Billing & Subscriptions",
          description: "Automated Stripe billing, usage-based metering, tier upgrades, proration invoices, and dunning management.",
          icon: "credit-card",
        },
        {
          title: "Enterprise Security & RBAC",
          description: "Role-based access permissions, audit logs, Single Sign-On (SSO/SAML), and SOC2-ready architecture.",
          icon: "shield",
        },
        {
          title: "Real-time Telemetry",
          description: "Live customer activity feeds, usage graphs, webhook event dispatchers, and automated retention alerts.",
          icon: "activity",
        },
      ],
      process: [
        {
          step: 1,
          title: "Multi-Tenant Data Modeling",
          description: "Structuring tenant isolation boundaries, indexes, and database migrations to guarantee data isolation.",
        },
        {
          step: 2,
          title: "Monetization & Auth Pipelines",
          description: "Integrating Stripe customer portals, subscription lifecycle hooks, and enterprise SSO workflows.",
        },
        {
          step: 3,
          title: "Scalability Stress Testing",
          description: "Simulating high concurrency loads, query profiling, and background Redis worker optimization.",
        },
        {
          step: 4,
          title: "Self-Serve Onboarding Launch",
          description: "Building frictionless sign-up flows with automated workspace provisioning and guided tour sequences.",
        },
      ],
      whyUs: {
        heading: "We build SaaS that converts users into paid subscribers.",
        description: "Launching a software company requires far more than just code—it demands seamless onboarding, bulletproof subscription billing, and architectures that scale from 10 to 100,000 customers without breaking.",
        checklist: [
          "Complete Stripe subscription and billing lifecycle integration",
          "Automated tenant provisioning with custom subdomain routing",
          "Granular role-based permissions and team seat management",
          "Zero-downtime deployment pipelines with rollback capabilities",
        ],
        stat: { value: "99.99%", label: "Guaranteed platform uptime" },
      },
      technologies: [
        { name: "Node.js", role: "Core API Microservices" },
        { name: "Stripe", role: "Recurring Billing & Invoicing" },
        { name: "PostgreSQL", role: "Multi-Tenant Database" },
        { name: "Redis", role: "In-Memory Caching & Queues" },
        { name: "Docker", role: "Containerized Workloads" },
      ],
    },
    {
      id: "devops-cloud",
      title: "DevOps/Cloud",
      subtitle: "Elastic Cloud Infrastructure & Automated CI/CD",
      badge: "DevOps & Cloud",
      description:
        "Streamlining your deployment pipeline with automated CI/CD workflows and secure, elastic cloud infrastructure.",
      image: "/figma/service-devops.png",
      tools: ["AWS", "Linux", "Docker", "GitHub Actions", "Terraform"],
      href: "/services/devops-cloud",
      deliverables: [
        {
          title: "Infrastructure as Code",
          description: "Fully automated Terraform and OpenTofu recipes ensuring reproducible, version-controlled cloud environments.",
          icon: "code",
        },
        {
          title: "Automated CI/CD Pipelines",
          description: "GitHub Actions workflows automating test execution, preview deployments, linting, and zero-downtime rollouts.",
          icon: "git-branch",
        },
        {
          title: "Kubernetes & Containers",
          description: "Dockerized microservices managed on AWS EKS or GCP GKE with auto-scaling and self-healing pods.",
          icon: "box",
        },
        {
          title: "Observability & Alerting",
          description: "Centralized logging, Prometheus and Grafana dashboards, and proactive incident paging with PagerDuty.",
          icon: "bell",
        },
      ],
      process: [
        {
          step: 1,
          title: "Security & Cloud Audit",
          description: "Evaluating existing infrastructure, uncovering vulnerability attack surfaces, and identifying cost waste.",
        },
        {
          step: 2,
          title: "Terraform IaC Scripting",
          description: "Codifying VPCs, security groups, database clusters, and DNS records into declarative Terraform modules.",
        },
        {
          step: 3,
          title: "Pipeline Automation",
          description: "Configuring parallelized GitHub Actions for fast builds, automated container scans, and push-to-deploy triggers.",
        },
        {
          step: 4,
          title: "Monitoring & Chaos Testing",
          description: "Setting up real-time uptime monitors, automated database backups, and simulated server failover tests.",
        },
      ],
      whyUs: {
        heading: "Zero-downtime, automated infrastructure for peace of mind.",
        description: "Stop spending engineering hours manually restarting servers and troubleshooting deployments. We give you robust, self-healing cloud pipelines that deploy with confidence in seconds.",
        checklist: [
          "Fully automated Infrastructure as Code using Terraform",
          "Zero-downtime blue/green and canary release strategies",
          "Comprehensive multi-region disaster recovery and hourly backups",
          "Cloud cost optimization saving an average of 35% on AWS bills",
        ],
        stat: { value: "-35%", label: "Average monthly cloud infrastructure cost" },
      },
      technologies: [
        { name: "AWS", role: "Primary Cloud Infrastructure" },
        { name: "Terraform", role: "Infrastructure as Code" },
        { name: "Docker", role: "Application Containerization" },
        { name: "Kubernetes", role: "Container Orchestration" },
        { name: "GitHub Actions", role: "Continuous Integration & Delivery" },
      ],
    },
  ],
};

// ---------- Working Process (Exact Figma text) ----------
export const processData = {
  badge: "Working process",
  heading: "From initial concept to successful launch.",
  subheading:
    "Our structured approach ensures your project stays on track, on budget, and beyond expectations.",
  steps: [
    {
      step: 1,
      title: "Discovery",
      description:
        "We dive deep into your goals, target audience, and project requirements.",
      icon: "cube",
      isHighlighted: true,
    },
    {
      step: 2,
      title: "Design",
      description:
        "Creating high-fidelity prototypes and intuitive user journeys.",
      icon: "pen",
      isHighlighted: false,
    },
    {
      step: 3,
      title: "Development",
      description:
        "Turning designs into clean, maintainable, and scalable code.",
      icon: "terminal",
      isHighlighted: false,
    },
    {
      step: 4,
      title: "Quality Assurance",
      description:
        "Rigorous testing to ensure a bug-free and polished launch.",
      icon: "crown",
      isHighlighted: false,
    },
    {
      step: 5,
      title: "Deployment",
      description:
        "Setting your project live and providing post-launch support.",
      icon: "rocket",
      isHighlighted: false,
    },
  ],
  cta: { label: "Start a project", href: "/contact" },
};

// ---------- Projects (Exact Figma items & Details) ----------
export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  client: string;
  timeline: string;
  servicesUsed: string;
  liveUrl: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  metrics: { value: string; label: string }[];
  mockups: string[];
}

export const projectsData = {
  badge: "Projects Preview",
  heading: "Our work speaks louder than words.",
  subheading:
    "Take a look at some of the digital experiences we've crafted for our partners.",
  seeAllLink: { label: "See all", href: "/projects" },
  items: [
    {
      id: "project-1",
      title: "AI powered mobile app design.",
      subtitle: "Intelligent Personal Health & Routine Optimization",
      description:
        "Explore the AI-powered mobile app designs we've created to deliver smart, intuitive digital experiences for our clients.",
      tags: ["Ux - Ui Design", "Mobile app", "AI"],
      image: "/figma/project-1.png",
      href: "/projects/project-1",
      client: "MediFlow Health AI",
      timeline: "3 Months (Q1 2026)",
      servicesUsed: "Mobile App Development, UI/UX Design, CoreML",
      liveUrl: "https://zenvisoft.com",
      overview:
        "MediFlow is an AI-powered health and routine optimization platform designed for modern professionals. The client needed a frictionless mobile experience capable of analyzing daily biometrics, predicting fatigue thresholds, and providing personalized micro-habits without cognitive overload.",
      challenges: [
        "Presenting complex health telemetry and machine-learning predictions without confusing everyday users",
        "Achieving instantaneous sub-50ms cold-start app launch times across both flagship and budget Android devices",
        "Ensuring complete HIPAA compliance with client-side biometric encryption and zero data exposure",
      ],
      solutions: [
        "Crafted a minimalist, dark-mode visual hierarchy centered around a dynamic health score dial and contextual widgets",
        "Engineered an offline-first Flutter architecture with local SQLite synchronization and on-device predictive inference",
        "Implemented end-to-end asymmetric cryptography for all biometric logs and secure cloud backup synchronization",
      ],
      metrics: [
        { value: "+140%", label: "Daily Active User Engagement" },
        { value: "4.9★", label: "App Store User Rating" },
        { value: "2.5M+", label: "Completed Health Check-ins" },
        { value: "<60ms", label: "Average Interaction Latency" },
      ],
      mockups: ["/figma/project-1.png", "/figma/service-mobile.png"],
    },
    {
      id: "project-2",
      title: "Interactive web dashboard prototypes.",
      subtitle: "Enterprise FinTech Analytics & Capital Velocity Engine",
      description:
        "Crafting dynamic, data-driven web dashboards that enhance user engagement and deliver actionable insights.",
      tags: ["Dashboard Design", "Web application", "FinTech"],
      image: "/figma/project-2.png",
      href: "/projects/project-2",
      client: "Veloce Capital Systems",
      timeline: "4 Months (Q2 2026)",
      servicesUsed: "Next.js Web App, Design System, WebSocket Streams",
      liveUrl: "https://zenvisoft.com",
      overview:
        "Veloce Capital provides institutional traders and fund managers with real-time liquidity analytics. Their legacy platform was bogged down by slow rendering cycles and confusing tabular layouts. We built a blazing-fast, interactive web dashboard from the ground up.",
      challenges: [
        "Streaming 5,000+ real-time tick updates per second without causing browser DOM re-renders or frame drops",
        "Condensing multi-currency order books, portfolio heatmaps, and margin risk calculators into a cohesive single screen",
        "Supporting complex multi-monitor layouts and customized user widget arrangements with persistent state",
      ],
      solutions: [
        "Leveraged Next.js 16 and Canvas-based WebGL charts to achieve continuous 60fps charting performance",
        "Built a modular widget docking framework allowing traders to drag, resize, and save custom workspaces",
        "Integrated WebSocket binary message decoders directly into web workers to decouple data streaming from the UI thread",
      ],
      metrics: [
        { value: "-65%", label: "Dashboard Memory Footprint" },
        { value: "3.2x", label: "Trader Workflow Speed" },
        { value: "$420M+", label: "Monthly Processed Volume" },
        { value: "99.99%", label: "Platform Uptime SLA" },
      ],
      mockups: ["/figma/project-2.png", "/figma/service-web.png"],
    },
    {
      id: "project-3",
      title: "Voice-controlled smart home interfaces.",
      subtitle: "Ambient Audio Ecosystem & IoT Hardware Integration",
      description:
        "Designing seamless voice-enabled control panels for smarter, more accessible home automation experiences.",
      tags: ["Voice UI/UX", "Smart home", "Voice AI"],
      image: "/figma/project-3.png",
      href: "/projects/project-3",
      client: "Aura Living Ecosystems",
      timeline: "2.5 Months (Q3 2026)",
      servicesUsed: "Voice UX Design, Embedded React, MQTT Cloud",
      liveUrl: "https://zenvisoft.com",
      overview:
        "Aura Living engineers luxury residential smart home hardware. They needed an intuitive touch-and-voice interface for their wall-mounted touchscreens and companion mobile apps, enabling natural voice commands for ambient lighting, climate control, and audio distribution.",
      challenges: [
        "Bridging physical hardware latency with instantaneous UI visual feedback when voice commands are spoken",
        "Accommodating multi-accented speech and noisy environments with conversational fallback prompts",
        "Designing an ultra-clean ambient UI that dims gracefully to avoid bedroom glare at night",
      ],
      solutions: [
        "Engineered an acoustic feedback ring with gentle pulsating lighting states indicating active listening and processing",
        "Developed custom lightweight wake-word models running locally on low-power ARM touchscreen chips",
        "Created an auto-sensing ambient dark UI with high-contrast typography and oversized touch targets",
      ],
      metrics: [
        { value: "98.4%", label: "Voice Intent Recognition Rate" },
        { value: "380ms", label: "Total Audio-to-Action Execution" },
        { value: "15,000+", label: "Connected Smart Homes" },
        { value: "94%", label: "First-Time User Task Success" },
      ],
      mockups: ["/figma/project-3.png", "/figma/service-ux.png"],
    },
    {
      id: "project-4",
      title: "AI powered mobile app design.",
      subtitle: "Autonomous Financial Copilot & Budget Forecasting",
      description:
        "Explore the AI-powered mobile app designs we've created to deliver smart, intuitive digital experiences for our clients.",
      tags: ["Ux - Ui Design", "Mobile app", "AI"],
      image: "/figma/project-4.png",
      href: "/projects/project-4",
      client: "NovaWealth Technologies",
      timeline: "3 Months (Q3 2026)",
      servicesUsed: "React Native Mobile App, UX Architecture, Python API",
      liveUrl: "https://zenvisoft.com",
      overview:
        "NovaWealth empowers Gen Z and millennial investors with an automated financial copilot that analyzes banking transactions, predicts end-of-month cash balances, and invests spare change into diversified index portfolios.",
      challenges: [
        "Transforming boring spreadsheets and bank statements into playful, visual, and motivating progress milestones",
        "Handling complex Plaid and banking API webhook edge-cases with seamless re-authentication prompts",
        "Maintaining bank-grade biometric authentication and instant push-notification balance alerts",
      ],
      solutions: [
        "Designed a vibrant visual design language using Zenvisoft deep navy and neon accents for clarity and trust",
        "Implemented a conversational AI assistant that summarizes monthly spending in plain, encouraging language",
        "Created micro-animations celebrating savings milestones that increased monthly user retention by 85%",
      ],
      metrics: [
        { value: "+85%", label: "90-Day User Retention Rate" },
        { value: "$12.5M+", label: "Automated Micro-Savings" },
        { value: "4.8★", label: "Play Store & App Store Score" },
        { value: "100%", label: "SOC2 & Banking Compliance" },
      ],
      mockups: ["/figma/project-4.png", "/figma/service-saas.png"],
    },
    {
      id: "project-5",
      title: "Interactive web dashboard prototypes.",
      subtitle: "Supply Chain Logistics & Global Freight Tracking",
      description:
        "Crafting dynamic, data-driven web dashboards that enhance user engagement and deliver actionable insights.",
      tags: ["Dashboard Design", "Web application", "Logistics"],
      image: "/figma/project-5.png",
      href: "/projects/project-5",
      client: "CargoStream Worldwide",
      timeline: "3.5 Months (Q4 2026)",
      servicesUsed: "Next.js Web App, Mapbox GL, Cloud Microservices",
      liveUrl: "https://zenvisoft.com",
      overview:
        "CargoStream coordinates trans-Pacific container freight across maritime, rail, and trucking carriers. We designed and built a centralized control tower dashboard providing live GPS shipment tracking, automated customs clearance alerts, and container temperature monitoring.",
      challenges: [
        "Rendering 10,000+ active global freight vessels on interactive vector maps without sluggish performance",
        "Unifying disparate carrier data schemas into a clean, searchable, standardized shipment record",
        "Providing instant PDF manifests and automated customs compliance exports with one click",
      ],
      solutions: [
        "Built custom vector map clustering using Mapbox GL and Web Workers for silky-smooth global zooming",
        "Engineered an automated notification bell alerting logistics managers to port congestion delays hours ahead of schedule",
        "Designed an export pipeline generating compliant customs declarations in under 2 seconds",
      ],
      metrics: [
        { value: "45 Min", label: "Saved Per Dispatcher Per Day" },
        { value: "99.8%", label: "On-Time Delivery Tracking Accuracy" },
        { value: "450K+", label: "Containers Monitored Annually" },
        { value: "-40%", label: "Customer Support Inquiry Volume" },
      ],
      mockups: ["/figma/project-5.png", "/figma/service-devops.png"],
    },
    {
      id: "project-6",
      title: "Voice-controlled smart home interfaces.",
      subtitle: "Next-Gen Audio Experience & Spatial Sound Controller",
      description:
        "Designing seamless voice-enabled control panels for smarter, more accessible home automation experiences.",
      tags: ["Voice UI/UX", "Smart home", "Voice AI"],
      image: "/figma/project-6.png",
      href: "/projects/project-6",
      client: "Sonus Spatial Audio",
      timeline: "2 Months (Q4 2026)",
      servicesUsed: "Mobile App, Bluetooth LE Protocol, Spatial UI",
      liveUrl: "https://zenvisoft.com",
      overview:
        "Sonus creates acoustic room calibration systems and spatial audio soundbars. We developed their flagship companion iOS and Android app that maps room acoustic reflections using the phone's microphone and adjusts multi-channel speaker delays in real time.",
      challenges: [
        "Communicating complex room reverberation physics through intuitive, accessible 3D visual graphics",
        "Ensuring rock-solid Bluetooth Low Energy pairing with hardware soundbars across hundreds of Android phone models",
        "Providing low-latency live audio frequency sliders with zero audio distortion during adjustments",
      ],
      solutions: [
        "Created an interactive 3D soundwave visualizer that ripples in real time as acoustic calibration runs",
        "Engineered an auto-reconnecting Bluetooth LE state machine that eliminates dropped connections",
        "Designed presets for Movies, Podcasts, Gaming, and Hi-Fi Studio listening with instant hardware DSP switching",
      ],
      metrics: [
        { value: "35 Sec", label: "Complete Room Calibration Time" },
        { value: "4.9★", label: "Average App Rating" },
        { value: "80,000+", label: "Calibrated Living Rooms" },
        { value: "0.01%", label: "Bluetooth Connection Dropout Rate" },
      ],
      mockups: ["/figma/project-6.png", "/figma/service-ux.png"],
    },
  ],
};

// ---------- Testimonials (Exact Figma cards) ----------
export const testimonialsData = {
  badge: "Testimonials",
  heading: "Don't just take our word for it.",
  subheading:
    "Hear from the founders and product managers we've worked with to bring their visions to life.",
  items: [
    {
      id: "t-1",
      stars: 5,
      quote:
        "Aria Montgomery provided outstanding software development services, delivering innovative solutions tailored to our needs.",
      author: "Lena Carter",
      role: "Creative Director",
      avatarInitials: "LC",
    },
    {
      id: "t-2",
      stars: 5,
      quote:
        "Elliot Harper's team impressed us with their professionalism and timely project delivery.",
      author: "Jordan Blake",
      role: "Product Manager",
      avatarInitials: "JB",
    },
    {
      id: "t-3",
      stars: 5,
      quote:
        "Nina Patel's agency offered exceptional support and creative software designs that boosted our business.",
      author: "Sofia Kim",
      role: "UX Designer",
      avatarInitials: "SK",
    },
    {
      id: "t-4",
      stars: 5,
      quote:
        "Marcus Lee led a skilled team that consistently exceeded our expectations with quality software solutions.",
      author: "Ethan Brooks",
      role: "Business Consultant",
      avatarInitials: "EB",
    },
  ],
};

// ---------- Team Members (Exact Figma section) ----------
export const teamData = {
  badge: "Our team",
  heading: "Meet our team",
  subheading: "The faces of Zenvisoft who are actually turning visions into reality.",
  members: [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/figma/team-1-clean.png",
      socials: { facebook: "#", linkedin: "#", email: "hello@zenvisoft.com" },
    },
    {
      name: "Alex Smith",
      role: "Lead Software Architect",
      image: "/figma/team-2-clean.png",
      socials: { facebook: "#", linkedin: "#", email: "hello@zenvisoft.com" },
    },
    {
      name: "Michael Chen",
      role: "Head of Product Design",
      image: "/figma/team-3-clean.png",
      socials: { facebook: "#", linkedin: "#", email: "hello@zenvisoft.com" },
    },
    {
      name: "David Miller",
      role: "VP of Engineering",
      image: "/figma/team-4-clean.png",
      socials: { facebook: "#", linkedin: "#", email: "hello@zenvisoft.com" },
    },
  ],
};

// ---------- Careers / Join Our Team (Exact Figma jobs) ----------
export const careersData = {
  badge: "Career",
  heading: "Join our team",
  subheading:
    "We don't just hire for skills, we hire for passion. Work on global projects in a collaborative environment that values your creativity and growth.",
  jobs: [
    {
      department: "Engineering",
      title: "Product Manager",
      type: "Full time",
      location: "Onsite",
      level: "Senior Level",
    },
    {
      department: "Design",
      title: "UX Designer",
      type: "Full time",
      location: "Onsite",
      level: "Senior Level",
    },
    {
      department: "Engineering",
      title: "Data Analyst",
      type: "Full time",
      location: "Onsite",
      level: "Senior Level",
    },
    {
      department: "Development",
      title: "DevOps Engineer",
      type: "Full time",
      location: "Onsite",
      level: "Senior Level",
    },
    {
      department: "Engineering",
      title: "Technical Writer",
      type: "Full time",
      location: "Onsite",
      level: "Senior Level",
    },
    {
      department: "Management",
      title: "Customer Success Manager",
      type: "Full time",
      location: "Onsite",
      level: "Senior Level",
    },
  ],
};

// ---------- Mission & Vision (Exact Figma text & cards) ----------
export const missionVisionData = {
  mission: {
    badge: "Our mission",
    heading: "To bridge the gap between complex ideas and intuitive digital solutions.",
    description:
      "We are dedicated to empowering businesses by creating high-performance software that combines technical excellence with user-centric design. Our goal is to deliver products that don't just work—they provide a competitive edge and a seamless experience for every user.",
    image: "/figma/mission.png",
  },
  vision: {
    badge: "Our vision",
    heading: "Setting the global standard for the next generation of digital experiences.",
    description:
      "We strive to be the most trusted partner for innovators and brands worldwide. Our vision is to lead the evolution of the web and mobile landscape, fostering a future where technology is more accessible, beautiful, and impactful for everyone.",
    image: "/figma/vision.png",
  },
};

// ---------- Contact Section (Exact Figma form) ----------
export const contactSectionData = {
  badge: "Contact us",
  heading: "Let's build something legendary.",
  description:
    "Have a vision for a new product or need to scale your existing platform? We're ready to help you navigate the journey from idea to launch.",
  email: "hello@zenvisoft.com",
  phone: "01235648965",
};

// ---------- Big CTA Banner (Exact Figma text) ----------
export const ctaBannerData = {
  heading: "Ready to start your next big project?",
  description:
    "Let's collaborate to build something extraordinary. Schedule a free discovery call today.",
  cta: { label: "Start a project", href: "/contact" },
  backgroundImage: "/figma/cta-banner.png",
};

// ---------- Footer Content ----------
export const footerData = {
  skillsServices: [
    { label: "Ux-Ui Design", href: "/services" },
    { label: "Mobile app development", href: "/services" },
    { label: "Web development", href: "/services" },
    { label: "SAAS", href: "/services" },
    { label: "DevOps/Cloud", href: "/services" },
  ],
  sitemap: [
    { label: "Careers", href: "/careers" },
    { label: "Contacts", href: "/contact" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
  ],
  email: "hello@zenvisoft.com",
  copyright: "©2026. Copyright reserved to Zenvisoft",
  watermark: "Zenvisoft SOFTWARE COMPANY",
};
