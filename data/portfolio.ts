import {
  Building2,
  CloudCog,
  Code2,
  Network,
  PanelsTopLeft,
  Server,
  ServerCog,
  Workflow,
} from "lucide-react";
import type {
  Experience,
  IconLabel,
  NavigationItem,
  Project,
  Recognition,
  SkillGroup,
  Specialization,
  Stat,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Jafar Madadi",
  shortName: "JM",
  url: "https://jafar-madadi-portfolio.jafar-madadi2026.chatgpt.site/",
  title: "Jafar Madadi | Software Developer & AI Software Engineer",
  description:
    "Software Developer and AI Software Engineer with 5+ years of experience building enterprise software, scalable APIs, microservices, and AI-integrated applications.",
  locale: "en_US",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const satisfies readonly NavigationItem[];

export const profile = {
  name: siteConfig.name,
  initials: ["J", "M"] as const,
  title: "Software Developer & AI Software Engineer",
  tagline: "software developer & AI engineer",
  email: "jafar.madadi2026@gmail.com",
  phone: "+93 744 646 063",
  location: "Kabul, Afghanistan",
  availability: "Open to relocation and remote collaboration",
  linkedin: "https://www.linkedin.com/in/jafar-madadi",
  github: "https://github.com/jafarxdev",
  youtube: "https://www.youtube.com/@JafarExplains",
} as const;

export const stats = [
  { value: "5+", unit: "Years", label: "Software Engineering", accent: "blue" },
  { value: "4", unit: "Industries", label: "Enterprise Delivery", accent: "purple" },
] as const satisfies readonly Stat[];

export const keyAreas = [
  { label: "AI Engineering", icon: Network },
  { label: "REST APIs", icon: Server },
  { label: "Full-Stack Development", icon: Code2 },
  { label: "Microservices", icon: Workflow },
] as const satisfies readonly IconLabel[];

export const companies = [
  "Afghan Telecom",
  "Ghazanfar Bank",
  "Donya International Group",
  "SaveZone",
] as const;

export const projects = [
  {
    title: "DSL Management System",
    context: "Enterprise telecom platform",
    period: "2026",
    problem:
      "Service operations, surveys, sales, stock, and reporting depend on connected workflows across technical and business teams.",
    contribution:
      "Developed application modules, designed APIs and backend services, integrated enterprise workflows, and collaborated with QA and operational stakeholders.",
    outcome:
      "Automated core telecom workflows while improving system performance, maintainability, and technical documentation.",
    technologies: ["Laravel", "Livewire", "React", "REST APIs", "MySQL"],
    icon: Network,
    accent: "blue",
  },
  {
    title: "GB Suite",
    context: "Banking operations platform",
    period: "2025",
    problem:
      "HR, finance, administration, and transportation teams needed consistent digital workflows for daily internal operations.",
    contribution:
      "Led end-to-end development, translated stakeholder requirements, and built secure modules, approvals, reports, and deployment guidance.",
    outcome:
      "Digitized cross-department workflows in a maintainable internal platform used by banking operations teams.",
    technologies: ["Laravel", "Livewire", "FilamentPHP", "Tailwind CSS", "REST APIs"],
    icon: Building2,
    accent: "purple",
  },
  {
    title: "ShopX Multi-Vendor Platform",
    context: "Role-based e-commerce system",
    period: "2026",
    problem:
      "A multi-vendor marketplace must coordinate distinct customer, vendor, and administrator responsibilities.",
    contribution:
      "Designed a role-based platform covering product management, marketplace operations, and payment workflows.",
    outcome:
      "Created a unified foundation for managing the core workflows of a multi-vendor commerce product.",
    technologies: ["Laravel", "React", "MySQL", "REST APIs"],
    icon: PanelsTopLeft,
    accent: "blue",
  },
  {
    title: "Driver Drowsiness Detection",
    context: "AI road-safety system",
    period: "2021",
    problem:
      "Driver fatigue creates a safety risk that requires timely, real-world monitoring rather than manual intervention.",
    contribution:
      "Built a Raspberry Pi system using computer vision to monitor driver alertness and detect signs of drowsiness in real time.",
    outcome:
      "Delivered an embedded proof of concept focused on early fatigue detection and road-safety support.",
    technologies: ["Artificial Intelligence", "Raspberry Pi", "Computer Vision", "Embedded Systems"],
    icon: ServerCog,
    accent: "purple",
  },
] as const satisfies readonly Project[];

export const specializations = [
  {
    icon: ServerCog,
    title: "Backend Architecture & APIs",
    description:
      "Maintainable service boundaries, integrations, and APIs for business-critical platforms and evolving enterprise workflows.",
    technologies: ["Laravel", "Node.js", "NestJS", "Django", "FastAPI", "REST", "Microservices"],
  },
  {
    icon: PanelsTopLeft,
    title: "Full-Stack Product Delivery",
    description:
      "Accessible, responsive interfaces connected to dependable backend services, clear data flows, and practical domain models.",
    technologies: ["React", "TypeScript", "Livewire", "FilamentPHP", "Tailwind CSS", "Alpine.js"],
  },
  {
    icon: CloudCog,
    title: "Cloud & Engineering Practice",
    description:
      "Delivery practices that improve reliability, team collaboration, deployment confidence, and long-term software quality.",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Testing", "Code Review", "Documentation"],
  },
] as const satisfies readonly Specialization[];

export const experience = [
  {
    company: "Afghan Telecom Corporation",
    role: "Software Developer",
    period: "Jun 2025 - Present",
    summary: "Developing and enhancing enterprise telecom systems and backend services.",
    bullets: [
      "Develop and enhance the DSL Management System (DMS) using Laravel, Livewire, React.js, RESTful APIs, and MySQL.",
      "Automate telecom business workflows across customer services, technical surveys, sales, inventory, and operational reporting.",
      "Design and integrate RESTful APIs and backend services, improving system performance, scalability, and maintainability.",
      "Collaborate with stakeholders, QA, MDF, and technical teams while maintaining API, workflow, configuration, and deployment documentation.",
    ],
  },
  {
    company: "Ghazanfar Bank",
    role: "Full-Stack Developer",
    period: "Dec 2024 - Jun 2025",
    summary: "Led end-to-end development of the GB Suite banking operations platform.",
    bullets: [
      "Led end-to-end development of GB Suite, an enterprise platform digitizing HR, Finance, Administration, and Transportation workflows.",
      "Developed secure and maintainable enterprise modules using Laravel, Livewire, FilamentPHP, Tailwind CSS, Alpine.js, and RESTful APIs.",
      "Translated business and stakeholder requirements into automated approval workflows, reporting modules, and operational processes.",
      "Designed and implemented backend services, database-driven workflows, and reusable application components.",
      "Prepared technical documentation, workflow diagrams, and deployment guides to support internal development and operational teams.",
    ],
  },
  {
    company: "Donya International Group",
    role: "Full-Stack Developer",
    period: "May 2022 - Dec 2024",
    summary: "Built and maintained CRM, sales, marketing, and enterprise web systems.",
    bullets: [
      "Built and maintained CRM, sales operations, and enterprise web applications with Laravel, JavaScript, and MySQL.",
      "Managed the marketing platform and multi-brand CRM email workflows.",
      "Developed scalable REST APIs and optimized back-end services for reliability, performance, and maintainability.",
    ],
  },
  {
    company: "SaveZone Vehicle Tracking Company",
    role: "Junior Software Developer",
    period: "Sep 2019 - Apr 2022",
    summary: "Supported vehicle tracking software, infrastructure, and client operations.",
    bullets: [
      "Developed and maintained a Management Information System for vehicle tracking and monitoring.",
      "Handled server administration, deployment, troubleshooting, maintenance, and technical support.",
      "Supported government clients, including the Ministry of Interior and Ministry of Defense.",
    ],
  },
] as const satisfies readonly Experience[];

export const skillGroups = [
  { title: "Languages", skills: ["Java", "Python", "TypeScript", "JavaScript", "PHP", "SQL"] },
  { title: "Frameworks & Development", skills: ["Spring Boot", "Angular", "React", "FastAPI", "Django", "Laravel", "Node.js", "NestJS"] },
  { title: "AI Engineering", skills: ["LLMs", "OpenAI API", "Hugging Face", "RAG", "LangChain", "Model Context Protocol (MCP)"] },
  { title: "Architecture & Delivery", skills: ["Software Architecture", "System Design", "Microservices", "RESTful APIs", "Database Design", "System Integration", "Workflow Automation", "Performance Optimization", "Testing", "Agile/Scrum", "Technical Documentation"] },
] as const satisfies readonly SkillGroup[];

export const education = [
  {
    degree: "Master of Information Systems",
    institution: "Kabul University",
    period: "August 2026 - August 2028",
    status: "In Progress",
    description:
      "Currently pursuing a Master's degree in Information Systems, with studies covering information systems, software engineering, artificial intelligence, machine learning, information security, software project management, and data management.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Kabul Polytechnic University",
    period: "June 2017 - July 2021",
    description:
      "Focused on software engineering, full-stack and mobile development, databases, networking, security, algorithms, and computer science foundations.",
  },
] as const;

export const recognition = [
  { title: "Data Literacy", detail: "DataCamp · Credential ID DL0037347094769", year: "August 2026", credentialUrl: "https://www.datacamp.com/skill-verification/DL0037347094769" },
  { title: "Claude Academy: Introduction to Model Context Protocol", detail: "Anthropic · Credential ID 6afe58f39a9fce883c889fc21ddd48f1", year: "August 2026", credentialUrl: "https://academy.claude.com/verify/6afe58f39a9fce883c889fc21ddd48f1" },
  { title: "AI Foundations", detail: "OpenAI", year: "August 2026", credentialUrl: "https://academy.openai.com/home/certificate/k4bi9shzy5" },
  { title: "Understanding Data Science", detail: "DataCamp · Credential ID #45,457,669", year: "January 2026" },
  { title: "Understanding Data Engineering", detail: "DataCamp · Credential ID #45,281,204", year: "December 2025" },
  { title: "AWS Concepts", detail: "DataCamp · Credential ID #36,722,602", year: "December 2024", credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/742022bb074ef343e4d5df4e507c99ec42e54642" },
  { title: "Understanding Cloud Computing", detail: "DataCamp · Credential ID #36,999,372", year: "November 2024", credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/1418d19ccab27c96ddce54885c295448fffa8dce" },
  { title: "Understanding Machine Learning", detail: "DataCamp · Credential ID #36,044,207", year: "November 2024", credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9143b4d408bc3348ee40abef2288dbddda4deff2" },
] as const satisfies readonly Recognition[];

export const languages = ["Persian / Dari - Native", "English - Fluent (C2)", "Pashto - Fluent", "Urdu - Fluent"] as const;
