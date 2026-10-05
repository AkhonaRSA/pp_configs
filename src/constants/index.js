import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  langchain,
  fastapi,
  claude,
  azure,
  aws,
  n8n,
  gcp,
  postgresql,
  carrent,
  jobit,
  tripguide,
  IVS,
  ICEP,
  TUT,
  linkfields,
  bcx,
  nedbank,
  umbrellanet,
} from "../assets";

export const personalInfo = {
  name: "Akhona Mkhatshwa",
  headline: "AI Specialist & Solutions Architect",
  tagline: "Enterprise AI Automation • Software Engineering • Data Engineering • Multi-Cloud",
  summary:
    "AI Specialist & Solutions Architect with end-to-end engineering expertise across the complete software lifecycle: architecting resilient distributed systems, validating cutting-edge concepts through rapid PoC / R&D prototypes, engineering production-grade microservices & APIs, and deploying scalable multi-cloud solutions with CI/CD automation. Proven track record architecting agentic workflows, autonomous multi-agent systems (MCP, LangChain, Claude APIs), and enterprise ServiceNow automations in regulated FinTech and enterprise environments. Multi-cloud certified (Azure, AWS, OCI) with deep mastery across Data Engineering, high-performance APIs, and Fullstack systems.",
  email: "Akhonakhaya@gmail.com",
  phone: "+27648658444",
  phoneDisplay: "064 865 8444",
  phoneInternational: "+27 64 865 8444",
  whatsapp: "https://wa.me/27648658444",
  location: "South Africa",
  locationDetailed: "South Africa (GMT+2)",
  status: "Revolutionizing the way we work with AI.",
  reference: {
    name: "Tebogo Monamodi",
    phone: "+27652427162",
    phoneDisplay: "065 242 7162",
    phoneInternational: "+27 65 242 7162",
    relation: "Professional Reference",
  },
  linkedin: "https://www.linkedin.com/in/akhona-mkhatshwa",
  github: "https://github.com/AkhonaRSA",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education & Certs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    pillarId: "01",
    badge: "AGENTIC AI & AUTOMATION",
    title: "AI & Intelligent Automation",
    subtitle: "Agentic Workflows • Multi-Agent (MCP) • Process Automation • LLM Governance",
    description:
      "Architecting autonomous agent workflows, multi-agent swarms (MCP, LangChain, Claude APIs), and enterprise process automation (ServiceNow Flow Designer, custom Python scripts, n8n). Engineered with deterministic state governance, prompt security, and automated tool execution.",
    highlights: [
      "Autonomous agent swarms & Model Context Protocol (MCP) integrations",
      "Enterprise workflow automation & process orchestration (ServiceNow, Python)",
      "Production RAG knowledge engines, semantic search & regulated FinTech guardrails",
    ],
    tags: ["AgenticAI", "Automation", "MCP", "LangChain", "ServiceNow", "PythonAutomation"],
    icon: creator,
    accent: {
      border: "hover:border-emerald-400/40",
      glow: "bg-emerald-400",
      tag: "text-emerald-400",
      badgeBg: "bg-emerald-400/10 text-emerald-400 border-emerald-500/30",
    },
  },
  {
    pillarId: "02",
    badge: "SYSTEM ARCHITECTURE & DEV",
    title: "Software Engineering & Architecture",
    subtitle: "System Design • PoC & R&D Prototyping • Fullstack APIs • CI/CD Deployment",
    description:
      "End-to-end software engineering spanning the full product lifecycle: architecting scalable distributed systems, developing rapid Proof of Concepts (PoC/R&D), building robust microservices and high-scale RESTful APIs (FastAPI, Python, React.js), and automated production deployments.",
    highlights: [
      "System architecture design, microservices modeling & API contract specifications",
      "Rapid PoC and R&D prototyping translating business requirements into working software",
      "Production API development (FastAPI/Node.js) & automated cloud CI/CD deployments",
    ],
    tags: ["SystemDesign", "PoC_RnD", "SoftwareEngineering", "FastAPI", "Microservices", "CloudDeploy"],
    icon: web,
    accent: {
      border: "hover:border-cyan-400/40",
      glow: "bg-cyan-400",
      tag: "text-cyan-400",
      badgeBg: "bg-cyan-400/10 text-cyan-400 border-cyan-500/30",
    },
  },
  {
    pillarId: "03",
    badge: "DATA PIPELINES & CLOUD",
    title: "Data Engineering & Cloud Infrastructure",
    subtitle: "ETL / ELT Pipelines • Vector Databases • Multi-Cloud (Azure, AWS, OCI)",
    description:
      "Architecting resilient data infrastructure, high-throughput ingestion pipelines, and multi-tenant data storage. Unifying relational databases (PostgreSQL, MySQL, PL/SQL) with high-dimensional vector stores (ChromaDB) across certified Microsoft Azure, AWS, and Oracle Cloud environments.",
    highlights: [
      "End-to-end ETL/ELT pipelines for structured transactional and unstructured document data",
      "High-performance vector database architectures (ChromaDB) paired with SQL systems",
      "Multi-cloud certified infrastructure (Microsoft Azure AZ-900 & DP-900, AWS, OCI 2025)",
    ],
    tags: ["DataEngineering", "VectorDB", "ChromaDB", "AzureDP900", "MultiCloud", "ETL"],
    icon: backend,
    accent: {
      border: "hover:border-purple-400/40",
      glow: "bg-purple-400",
      tag: "text-purple-400",
      badgeBg: "bg-purple-400/10 text-purple-400 border-purple-500/30",
    },
  },
];

const engineeringLifecycle = [
  {
    step: "01",
    phase: "Design a System",
    title: "System Architecture & Modeling",
    summary:
      "Translating complex business requirements into scalable, fault-tolerant system blueprints. Defining domain boundaries, distributed microservices, API contracts, security postures, and database schemas.",
    skills: ["Distributed Systems", "Domain-Driven Design", "API Specs (OpenAPI)", "Database Architecture"],
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-500/30",
    glow: "bg-purple-400",
  },
  {
    step: "02",
    phase: "Implement PoC / R&D",
    title: "Rapid Prototyping & R&D Validation",
    summary:
      "De-risking architecture and accelerating time-to-value through agile Proof of Concepts. Benchmarking cutting-edge AI models, agentic frameworks, and integration feasibility before production scale.",
    skills: ["Proof of Concept (PoC)", "R&D Exploration", "Agentic Feasibility", "Benchmarking"],
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-500/30",
    glow: "bg-amber-400",
  },
  {
    step: "03",
    phase: "Develop Fullstack",
    title: "Production Engineering & APIs",
    summary:
      "Crafting production-grade, maintainable codebases with clean architecture principles. Developing high-concurrency backend microservices (FastAPI, Python, Node.js), robust data pipelines, and responsive frontends.",
    skills: ["FastAPI / Python", "Modern React.js", "PL/SQL & Vector DBs", "Clean Code & Testing"],
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-500/30",
    glow: "bg-cyan-400",
  },
  {
    step: "04",
    phase: "Deploy & Scale",
    title: "Cloud Deployment & Observability",
    summary:
      "Containerizing workloads with Docker, establishing automated CI/CD deployment pipelines, and operating across certified multi-cloud infrastructure (Azure, AWS, OCI) with proactive AIOps monitoring.",
    skills: ["Docker Containers", "Automated CI/CD", "Multi-Cloud (Azure/AWS/OCI)", "AIOps & Telemetry"],
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/30",
    glow: "bg-emerald-400",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Claude AI",
    icon: claude,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Microsoft Azure",
    icon: azure,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "n8n",
    icon: n8n,
  },
  {
    name: "Google Cloud",
    icon: gcp,
  },
  {
    name: "PostgreSQL Database",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
];

const skillsCategories = [
  {
    category: "AI Orchestration & Multi-Agent",
    badge: "Core AI",
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
    skills: ["Claude APIs", "Model Context Protocol (MCP)", "LangChain", "RAG Systems", "Multi-Agent Coordination", "LLM Governance", "Prompt Engineering"],
  },
  {
    category: "Workflow & Enterprise Automation",
    badge: "Automation",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    skills: ["ServiceNow Flow Designer", "n8n", "Zapier", "Power Automate", "Agentic Workflows", "Custom Python Automation", "Integration Hub"],
  },
  {
    category: "Programming & Backend",
    badge: "Development",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    skills: ["Python", "FastAPI", "JavaScript", "TypeScript", "Java", "Spring Boot", "Django", "PL/SQL", "RESTful APIs"],
  },
  {
    category: "Frontend & Fullstack",
    badge: "UI / UX",
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
    skills: ["React.js", "Node.js", "Tailwind CSS", "HTML5 / CSS3", "Oracle APEX", "Responsive Design", "Three.js"],
  },
  {
    category: "Database & Vector Storage",
    badge: "Data",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    skills: ["ChromaDB", "PostgreSQL", "MySQL", "SQL Server", "Vector Embeddings", "Data Ingestion & ETL", "Database Optimization"],
  },
  {
    category: "Cloud & DevOps Platforms",
    badge: "Multi-Cloud",
    color: "from-sky-500/20 to-blue-500/20 border-sky-500/30",
    skills: ["Azure Data Engineering", "Azure App Registrations", "AWS (Amazon Web Services)", "Oracle Cloud (OCI)", "Google Cloud (GCP)", "Docker", "Git"],
  },
];

const experiences = [
  {
    title: "AI/ML Graduate",
    company_name: "Linkfields Innovations",
    icon: linkfields,
    iconBg: "#18122B",
    date: "Jan 2026 - Present",
    roleCategory: "AI & Data Engineering",
    technologies: ["Python", "FastAPI", "ChromaDB", "React.js", "AI Pipelines"],
    points: [
      "Architecting data-driven backend services and AI pipelines using Python and FastAPI, pairing SQL with high-performance ChromaDB vector stores.",
      "Developing automated end-to-end data workflows for ingestion, transformation, storage, and sub-second semantic retrieval.",
    ],
  },
  {
    title: "AIOps Consultant Engineer",
    company_name: "BCX",
    icon: bcx,
    iconBg: "#0A192F",
    date: "",
    roleCategory: "Architecture & AIOps",
    technologies: ["AIOps", "Python Automation", "PoC & R&D", "Infrastructure"],
    points: [
      "Partnered with Enterprise Architecture teams at BCX to translate complex business needs into automated system solutions by developing high-impact Proof of Concepts (POC).",
      "Automated critical infrastructure and network port routines using agentic workflows and custom Python automation scripts, optimizing operational stability.",
    ],
  },
  {
    title: "AI Consultant Automation Engineer",
    company_name: "Nedbank",
    icon: nedbank,
    iconBg: "#003816",
    date: "",
    roleCategory: "Enterprise Automation",
    technologies: ["ServiceNow", "Flow Designer", "IntegrationHub", "FinTech Security"],
    points: [
      "Designed automated Flow Designer workflows and custom data retrieval pipelines within ServiceNow for core banking operations.",
      "Engineered secure integration points between banking platforms and centralized knowledge bases adhering to strict FinTech compliance standards.",
    ],
  },
  {
    title: "AI Automation Developer Intern",
    company_name: "UmbrellaNet",
    icon: umbrellanet,
    iconBg: "#0F172A",
    date: "Oct 2025 - Dec 2025",
    roleCategory: "Enterprise Automation",
    technologies: ["ServiceNow", "Workflow Automation", "Process Mapping", "Python"],
    points: [
      "Mapped departmental business processes and built automated ServiceNow Flow Designer workflows and custom data pipelines.",
      "Collaborated with engineering teams to automate legacy routines and optimize cross-platform data delivery.",
    ],
  },
  {
    title: "FullStack Developer Intern",
    company_name: "ID Verification Systems CC",
    icon: IVS,
    iconBg: "#111827",
    date: "Jan 2025 - July 2025",
    roleCategory: "Fullstack & Database",
    technologies: ["PL/SQL", "Oracle APEX", "REST APIs", "Modern UI"],
    points: [
      "Designed and optimized PL/SQL database architectures (triggers, stored procedures, functions) integrated with Oracle APEX via REST APIs.",
      "Re-engineered legacy user interfaces into modern, responsive frontends tailored to operational enterprise client requirements.",
    ],
  },
  {
    title: "Backend Developer & Acting Tutor",
    company_name: "ICEP & Tshwane University of Technology",
    icon: TUT,
    iconBg: "#2B1A2F",
    date: "June 2024 - Dec 2024",
    roleCategory: "Backend & Mentorship",
    technologies: ["Express.js", "Scalable APIs", "Node.js", "Mentorship"],
    points: [
      "Built scalable backend APIs using Express.js and relational databases for community banking and verification systems.",
      "Mentored students in Software Engineering principles, practical coding, debugging sessions, and technical project reviews.",
    ],
  },
];

const education = {
  degree: "Computer Science",
  institution: "Tshwane University of Technology (TUT)",
  keyCourses: [
    "Advanced Object-Oriented Programming (Java, Kotlin, Data Structures, DB Management)",
    "Internet Programming (Java, JavaScript, Java EE, Session Management)",
    "Advanced Discrete Mathematics & Numerical Computing",
    "Software Engineering Projects & Systems Architecture",
    "Web Computing (JavaScript, HTML5, CSS3)",
    "Information Security & Cryptography",
  ],
};

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    category: "Cloud Computing",
    icon: "☁️",
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    category: "Data Engineering",
    icon: "📊",
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) 2025 Foundations Associate",
    issuer: "Oracle",
    category: "Cloud Architecture",
    icon: "⚡",
  },
  {
    title: "AWS Educate: Machine Learning Foundation",
    issuer: "Amazon Web Services",
    category: "Machine Learning",
    icon: "🤖",
  },
  {
    title: "AWS Educate: Cloud Computing",
    issuer: "Amazon Web Services",
    category: "Cloud Architecture",
    icon: "🌐",
  },
  {
    title: "Udemy Python Full Stack Development",
    issuer: "Udemy",
    category: "Fullstack & APIs",
    icon: "🐍",
  },
];

const honorsAwards = [
  {
    title: "2022 CS Top Achiever",
    organization: "TUT Department of Computer Science",
    detail: "Awarded for exceptional academic excellence and top-tier standing in Computer Science coursework.",
  },
  {
    title: "TUT 2024 System of the Semester",
    organization: "Tshwane University of Technology",
    detail: "Awarded top system recognition for designing and building an outstanding production-grade software solution.",
  },
];

const spokenLanguages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Siswati", level: "Native / Bilingual" },
  { name: "isiZulu", level: "Fluent" },
  { name: "Sesotho", level: "Fluent" },
  { name: "Sepedi", level: "Fluent" },
  { name: "isiXhosa", level: "Fluent" },
];

const testimonials = [];

const projects = [
  {
    name: "Enterprise Multi-Agent & RAG Pipeline",
    description:
      "Production-ready RAG system utilizing Claude APIs, LangChain, and ChromaDB vector search to synthesize knowledge across disparate enterprise documents with multi-agent coordination.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "ChromaDB",
        color: "pink-text-gradient",
      },
      {
        name: "FastAPI",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AkhonaRSA",
  },
  {
    name: "Nexis Bank Core System",
    description:
      "Secure banking platform integrating web and mobile interfaces with real-time API transactions, authentication layers, and scalable financial microservices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ICEP-DEV/Click.Block.Tech.UI",
  },
  {
    name: "AI Eggs Contamination Monitor",
    description:
      "Automated contamination and defect detection system leveraging smart vision sensors, real-time cameras, and telemetry data processing to detect defects in real-time.",
    tags: [
      {
        name: "Python/Java",
        color: "blue-text-gradient",
      },
      {
        name: "ComputerVision",
        color: "green-text-gradient",
      },
      {
        name: "IoT",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://akhonarsa.github.io/EggsMonitor/",
  },
];

export {
  services,
  engineeringLifecycle,
  technologies,
  skillsCategories,
  experiences,
  education,
  certifications,
  honorsAwards,
  spokenLanguages,
  testimonials,
  projects,
};