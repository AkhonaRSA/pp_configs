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
  carrent,
  jobit,
  tripguide,
  threejs,
  TUT,
  ICEP,
  IVS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Designer",
    icon: creator,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Informatics Community Engagement Project",
    icon: ICEP,
    iconBg: "#383E56",
    date: "June 2024 - Dec 2024",
    points: [
     "Developing and maintaining secure banking applications using React.js and React Native to enhance financial security.",
     "Collaborating with cross-functional teams, including UX designers, backend developers, and security analysts, to create high-quality and reliable financial solutions.",
     "Implementing responsive and intuitive UI designs, ensuring a seamless experience across web and mobile devices."
    ],
  },
  {
    title: "Acting Tutor",
    company_name: "Tshwane University of Technology",
    icon: TUT,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Nov 2024",
    points: [
     "Assisted students in preparing for their final examinations by conducting night study sessions focused on Software Engineering and Web Development.",
     "Guided students through practical coding exercises, debugging sessions, and project reviews to strengthen their understanding.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Information Verification System",
    icon: IVS,
    iconBg: "#383E56",
    date: "Jan 2025 ",
    points: [
      "Developed web applications for clients using low-code development with Oracle APEX and PL/SQL to streamline business processes.",
      "Maintained and enhanced existing systems using JavaScript, ensuring smooth functionality, performance improvements, and bug fixes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nexis Bank",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reactnative",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ICEP-DEV/Click.Block.Tech.UI",
  },
  {
    name: "Eggs Monitor",
    description:
      "Automated Egg Contamination and Defect Detection System Using Smart Sensors and cameras to monitor the quality of eggs in real-time.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://akhonarsa.github.io/EggsMonitor/",
  },
  {
    name: "Gender Based Violence",
    description:
      "noViolence is a transformative social networking platform dedicated to addressing and combating gender-based violence (GBV)",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AkhonaRSA/GenderBased-Violence",
  },
];

export { services, technologies, experiences, testimonials, projects };