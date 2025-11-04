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
  gillet,
  khutso,
  figma,
  docker,
  carrent,
  jobit,
  ntsako,
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
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
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
    title: "Backend Developer",
    company_name: "Informatics Community Engagement Project",
    icon: ICEP,
    iconBg: "#383E56",
    date: "June 2024 - Dec 2024",
    points: [
     "Collaborated as a backened developer to builed highly scalable APIs using Express.js for our banking system.",
     "Collaborating with cross-functional teams, including UX designers, frontend developers, and security analysts, to create high-quality and reliable financial solutions.",
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
    "I thought it was impossible to create a banking security system that seamlessly integrates web and mobile platforms, but Akhona made it a reality, it was an honor working with him.",
    name: "Ntsako ",
    designation: "Developer",
    company: "ICEP",
    image: ntsako,
  },
  {
    testimonial:
      "Akhona's dedication to creating innovative solutions is truly inspiring. He has a unique ability to turn complex ideas into simple, user-friendly applications.",
    name: "Gillet",
    designation: "CEO ",
    company: "Denton Vision Art",
    image: gillet,
  },
  {
    testimonial:
      "Akhona helped pass in my computer science studies in 2024, thanks to his dedication and not giving up on us, his dedication and support will always be appreciated.",
    name: "Khutso",
    designation: "Student",
    company: "TUT",
    image: khutso,
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