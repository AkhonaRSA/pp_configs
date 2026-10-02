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
  threejs,
  python,
  langchain,
  fastapi,
  claude,
  azure,
  aws,
  carrent,
  jobit,
  tripguide,
  ntsako,
  gillet,
  khutso,
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
  headline: "AI Specialist & Enterprise Automation Engineer",
  tagline: "Enterprise AI Automation • Agentic Workflows • Multi-Agent Architectures • Multi-Cloud",
  summary:
    "AI Specialist with extensive expertise in enterprise AI automation, designing and deploying agentic workflows, RAG systems, and multiagent coordination architectures (MCP, LangChain, Claude APIs). Proven success designing and building enterprise solutions, LLM solutions and cloud native automations across top tier regulated financial environments. Multi-cloud certified (Azure, AWS, OCI) with deep skills in Data Engineering, AI Automation, and Fullstack development.",
  email: "Akhonakhaya@gmail.com",
  phone: "0648658444",
  phoneDisplay: "064 865 8444",
  location: "South Africa",
  reference: {
    name: "Tebogo Monamodi",
    phone: "065 242 7162",
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Enterprise AI & Multi-Agent",
    description: "Designing agentic workflows, MCP architectures, LangChain, Claude APIs & LLM governance.",
    icon: creator,
  },
  {
    title: "RAG Systems & Vector DBs",
    description: "Building production RAG pipelines, contextual embeddings, semantic search & ChromaDB.",
    icon: backend,
  },
  {
    title: "Workflow & Cloud Automation",
    description: "Enterprise ServiceNow Flow Designer, n8n, Zapier, Power Automate & custom Python automation.",
    icon: mobile,
  },
  {
    title: "Fullstack & High-Scale APIs",
    description: "Developing robust backend microservices with FastAPI, Python, React.js & modern databases.",
    icon: web,
  },
  {
    title: "Multi-Cloud & Data Engineering",
    description: "Certified Azure (AZ-900, DP-900), AWS & OCI architectures with scalable data pipelines.",
    icon: mobile,
  },
  {
    title: "AIOps & Infrastructure Routines",
    description: "Automated network port routines, Proof of Concepts & high-availability system stability.",
    icon: creator,
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
    name: "Three JS",
    icon: threejs,
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
    points: [
      "Designed and developed data-driven backend systems and AI applications requiring reliable database and data processing infrastructure.",
      "Engineered end-to-end data workflows for structured and unstructured data across ingestion, transformation, storage, and semantic retrieval.",
      "Developed backend services using Python and FastAPI, integrating application services with relational databases, React.js frontends, and external APIs.",
      "Architected data storage and retrieval systems leveraging SQL databases alongside high-performance vector databases (ChromaDB) for AI retrieval.",
      "Troubleshot application, integration, and data-related issues and investigated root causes across complex enterprise technology stacks.",
      "Developed automated workflows and integrations that process business data and seamlessly interconnect multiple enterprise systems.",
    ],
  },
  {
    title: "AIOps Consultant Engineer",
    company_name: "BCX (Deployed at Telkom CCO)",
    icon: bcx,
    iconBg: "#0A192F",
    date: "Late 2025",
    points: [
      "Deployed at Telkom under Sales and Tech Architecture teams (CCO) to translate complex business needs into automated system solutions by developing high-impact Proof of Concepts (POC).",
      "Automated critical infrastructure and network port routines using agentic workflows and custom Python automation scripts.",
      "Enhanced platform stability, eliminated manual operational bottlenecks, and drove measurable cost efficiency across enterprise telecom infrastructure.",
    ],
  },
  {
    title: "AI Consultant Automation Engineer",
    company_name: "Nedbank",
    icon: nedbank,
    iconBg: "#003816",
    date: "2025",
    points: [
      "Mapped intricate departmental processes and designed automated Flow Designer workflows and custom data retrieval pipelines within ServiceNow.",
      "Built secured integration points between core banking platforms using orchestration engines and central enterprise knowledge bases using shared integration layers.",
      "Delivered robust, compliant automation solutions adhering to the rigorous security standards of top-tier regulated financial environments.",
    ],
  },
  {
    title: "AI Automation Developer Intern",
    company_name: "UmbrellaNet",
    icon: umbrellanet,
    iconBg: "#0F172A",
    date: "Oct 2025 - Dec 2025",
    points: [
      "Mapped departmental business processes and designed automated Flow Designer workflows and custom data retrieval pipelines in ServiceNow.",
      "Built secured integration points between core platforms using orchestration engines and centralized knowledge bases through shared integration layers.",
      "Collaborated with cross-functional engineering teams to automate legacy routines and optimize data delivery.",
    ],
  },
  {
    title: "FullStack Developer Intern",
    company_name: "ID Verification Systems CC",
    icon: IVS,
    iconBg: "#111827",
    date: "Jan 2025 - July 2025",
    points: [
      "Designed and implemented complex database architectures using PL/SQL, creating high-performance triggers, stored procedures, and functions to optimize data processing.",
      "Seamlessly integrated backend database systems with low-code data platforms like Oracle APEX by developing and consuming robust REST APIs.",
      "Re-engineered and built modern frontend interfaces for legacy systems, significantly improving usability and system workflow.",
      "Continuously partnered with corporate clients to evaluate designs, gather requirements, and implement critical system changes tailored to operational needs.",
    ],
  },
  {
    title: "Backend Developer & Acting Tutor",
    company_name: "ICEP & Tshwane University of Technology",
    icon: TUT,
    iconBg: "#2B1A2F",
    date: "June 2024 - Dec 2024",
    points: [
      "Collaborated as a backend developer to build highly scalable APIs using Express.js and databases for community banking and verification systems.",
      "Mentored and tutored students in Software Engineering and Web Development, leading practical coding, debugging sessions, and technical project reviews.",
    ],
  },
];

const education = {
  degree: "Diploma in Computer Science",
  institution: "Tshwane University of Technology (TUT)",
  keyCourses: [
    "Web Computing (JavaScript, HTML5, CSS3)",
    "Advanced Object-Oriented Programming (Java, Kotlin, Data Structures, DB Management)",
    "Internet Programming (Java, JavaScript, Java EE, Session Management)",
    "Cisco Networking Foundation & Microsoft 365",
    "Advanced Discrete Mathematics",
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

const testimonials = [
  {
    testimonial:
      "Akhona's expertise in AI orchestration, backend reliability, and system integration made our banking platforms seamlessly integrate across web and mobile platforms. Outstanding engineer!",
    name: "Ntsako",
    designation: "Developer",
    company: "ICEP",
    image: ntsako,
  },
  {
    testimonial:
      "Akhona's dedication to creating innovative AI and automation solutions is truly inspiring. He turns complex enterprise workflows into simple, intuitive, and high-performance applications.",
    name: "Gillet",
    designation: "CEO",
    company: "Denton Vision Art",
    image: gillet,
  },
  {
    testimonial:
      "Akhona's guidance in Computer Science, software architecture, and system design was invaluable. His technical mastery and commitment to mentorship made all the difference.",
    name: "Khutso",
    designation: "Colleague",
    company: "TUT",
    image: khutso,
  },
];

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