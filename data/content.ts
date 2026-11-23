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
  url: "https://zenvisoft.com",
  logo: "/logo.png",
  primaryColor: "#01163B",
  accentColor: "#1E56A0",
  whatsappNumber: "+1235648965",
  whatsappUrl: "https://wa.me/1235648965",
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
  whatsappCta: { label: "Contact on Whatsapp", href: "https://wa.me/1235648965" },
  trustedText: "We are trusted by more than 200+ clients",
};

// ---------- Services (Exact Figma layout & text) ----------
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
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
      description:
        "Crafting intuitive digital journeys that turn users into loyal advocates through research-driven, high-fidelity design.",
      image: "/figma/service-ux.png",
      tools: ["Figma", "Adobe XD", "Sketch", "Illustrator"],
    },
    {
      id: "mobile-app",
      title: "Mobile app development",
      description:
        "Building powerful, native-feel applications for iOS and Android that deliver seamless performance on every screen.",
      image: "/figma/service-mobile.png",
      tools: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase"],
    },
    {
      id: "web-dev",
      title: "Web development",
      description:
        "Engineering lightning-fast, SEO-optimized, and scalable web experiences using the most stable modern frameworks.",
      image: "/figma/service-web.png",
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "saas",
      title: "SAAS",
      description:
        "Scaling your vision with robust multi-tenant architectures, secure payment integrations, and data-driven user dashboards.",
      image: "/figma/service-saas.png",
      tools: ["Node.js", "Stripe", "PostgreSQL", "Docker"],
    },
    {
      id: "devops-cloud",
      title: "DevOps/Cloud",
      description:
        "Streamlining your deployment pipeline with automated CI/CD workflows and secure, elastic cloud infrastructure.",
      image: "/figma/service-devops.png",
      tools: ["AWS", "Linux", "Docker", "GitHub Actions", "Terraform"],
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

// ---------- Projects Preview (Exact Figma items) ----------
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
      description:
        "Explore the AI-powered mobile app designs we've created to deliver smart, intuitive digital experiences for our clients.",
      tags: ["Ux - Ui Design", "Mobile app", "AI"],
      image: "/figma/project-1.png",
      href: "/projects",
    },
    {
      id: "project-2",
      title: "Interactive web dashboard prototypes.",
      description:
        "Crafting dynamic, data-driven web dashboards that enhance user engagement and deliver actionable insights.",
      tags: ["Dashboard Design", "Web application"],
      image: "/figma/project-2.png",
      href: "/projects",
    },
    {
      id: "project-3",
      title: "Voice-controlled smart home interfaces.",
      description:
        "Designing seamless voice-enabled control panels for smarter, more accessible home automation experiences.",
      tags: ["Voice UI/UX", "Smart home", "Voice AI"],
      image: "/figma/project-3.png",
      href: "/projects",
    },
    {
      id: "project-4",
      title: "AI powered mobile app design.",
      description:
        "Explore the AI-powered mobile app designs we've created to deliver smart, intuitive digital experiences for our clients.",
      tags: ["Ux - Ui Design", "Mobile app", "AI"],
      image: "/figma/project-4.png",
      href: "/projects",
    },
    {
      id: "project-5",
      title: "Interactive web dashboard prototypes.",
      description:
        "Crafting dynamic, data-driven web dashboards that enhance user engagement and deliver actionable insights.",
      tags: ["Dashboard Design", "Web application"],
      image: "/figma/project-5.png",
      href: "/projects",
    },
    {
      id: "project-6",
      title: "Voice-controlled smart home interfaces.",
      description:
        "Designing seamless voice-enabled control panels for smarter, more accessible home automation experiences.",
      tags: ["Voice UI/UX", "Smart home", "Voice AI"],
      image: "/figma/project-6.png",
      href: "/projects",
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
