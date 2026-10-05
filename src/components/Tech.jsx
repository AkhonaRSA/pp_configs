import React, { useState } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillsCategories } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const techDescriptions = {
  Python: "Core enterprise AI, FastAPI backend microservices, and automation pipelines.",
  "Claude AI": "Advanced Anthropic foundation models powering agentic reasoning & MCP.",
  LangChain: "Orchestration framework for production RAG and autonomous agent chains.",
  FastAPI: "High-performance asynchronous RESTful APIs with Pydantic validation.",
  "Microsoft Azure": "Multi-cloud certified (AZ-900 & DP-900) data engineering & cloud native apps.",
  AWS: "AWS Educate Machine Learning & cloud computing scalable architectures.",
  "React JS": "Component-driven frontend interfaces with modern hooks and state management.",
  TypeScript: "Strict static typing ensuring robust enterprise-grade codebase stability.",
  "Node JS": "Event-driven asynchronous backend services and integration hubs.",
  Docker: "Microservices containerization, isolation, and reproducible deployments.",
  "Tailwind CSS": "Utility-first design architecture powering modern, luxury dark interfaces.",
  n8n: "Automated workflow pipelines orchestrating enterprise webhooks, APIs, and AI nodes.",
  "Google Cloud": "Cloud compute, big data pipelines, enterprise storage, and distributed services.",
  "PostgreSQL Database": "ACID-compliant relational database management, schema design, and high-concurrency indexing.",
  git: "Distributed version control, CI/CD pipeline automation, and team collaboration.",
};

const Tech = () => {
  const [activeTech, setActiveTech] = useState(technologies[0]);

  return (
    <div className='flex flex-col gap-8 sm:gap-14'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Technical Competencies & Stack
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Skills & Architecture<span className='text-neutral-500'>.</span>
        </h2>
      </motion.div>

      {/* Categorized Skills Grid in Black & White Theme */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6'>
        {skillsCategories.map((group, index) => (
          <motion.div
            key={group.category}
            variants={fadeIn("up", "spring", Math.min(index * 0.05, 0.2), 0.5)}
            className='bg-black-100 border border-white/10 hover:border-white/30 p-4 sm:p-6 rounded-2xl flex flex-col justify-between shadow-xl transition-all'
          >
            <div>
              <div className='flex justify-between items-center mb-3'>
                <span className='text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/10'>
                  {group.badge}
                </span>
                <span className='w-1.5 h-1.5 rounded-full bg-white/40' />
              </div>

              <h3 className='text-white font-bold text-[17px] mb-4 tracking-tight'>
                {group.category}
              </h3>

              <div className='flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='text-xs px-2.5 py-1 rounded-md bg-black-200 border border-white/5 text-neutral-300 hover:text-white hover:border-white/30 transition-colors'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive 3D Spinning Earth & Selected Technology Showcase */}
      <div className='pt-8 border-t border-white/10'>
        <div className='text-center mb-8'>
          <h4 className='text-white font-bold text-lg tracking-tight'>
            Tech Stack
          </h4>
          <p className='text-neutral-400 text-xs mt-1'>
            Explore deployed enterprise technologies alongside the spinning 3D globe. Select any technology to inspect its role.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-black-100/60 border border-white/10 p-4 sm:p-8 rounded-2xl sm:rounded-3xl'>
          {/* Active 3D Spinning Earth Canvas & Selected Tech Info */}
          <div className='lg:col-span-5 flex flex-col items-center justify-center w-full'>
            <div className='w-full h-[260px] sm:h-[350px] cursor-grab active:cursor-grabbing relative touch-pan-y'>
              <EarthCanvas />
            </div>

            {/* Selected Technology Info Box */}
            <div className='w-full mt-2 p-4 rounded-2xl bg-black-200/90 border border-white/10 flex items-center gap-4 transition-all shadow-lg'>
              <div className='w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center p-2.5 shrink-0 shadow-sm'>
                <img
                  src={activeTech.icon}
                  alt={activeTech.name}
                  className='w-full h-full object-contain'
                />
              </div>
              <div className='min-w-0 flex-1'>
                <div className='flex items-center justify-between gap-2 mb-1'>
                  <h5 className='text-white font-bold text-base tracking-tight truncate'>
                    {activeTech.name}
                  </h5>
                  <span className='text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-neutral-300 border border-white/10'>
                    Active Focus
                  </span>
                </div>
                <p className='text-xs text-neutral-400 leading-relaxed'>
                  {techDescriptions[activeTech.name] || "Enterprise core technology stack component."}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Technology Selector Grid */}
          <div className='lg:col-span-7 flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
              <span className='text-xs font-mono uppercase tracking-wider text-neutral-400'>
                Select Stack Component:
              </span>
              <span className='text-[11px] font-mono text-neutral-500'>
                {technologies.length} Technologies
              </span>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5'>
              {technologies.map((technology) => {
                const isSelected = activeTech.name === technology.name;
                return (
                  <button
                    key={technology.name}
                    onClick={() => setActiveTech(technology)}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left flex items-center gap-2.5 sm:gap-3 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-white text-black font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-[1.02]"
                        : "bg-black-200 text-neutral-300 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <div className='w-7 h-7 rounded-lg bg-black/20 flex items-center justify-center p-1 shrink-0'>
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className={`w-full h-full object-contain ${
                          isSelected ? "" : "filter brightness-90"
                        }`}
                      />
                    </div>
                    <span className='text-xs font-medium truncate'>
                      {technology.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
