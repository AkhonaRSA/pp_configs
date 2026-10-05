import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

// Side-by-side Grid Card Component
const ExperienceGridCard = ({ experience, index }) => {
  const isCurrent = experience.date.includes("Present");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.15) }}
      className='h-full'
    >
      <Tilt
        tiltEnable={typeof window !== "undefined" ? window.innerWidth >= 768 : true}
        gyroscope={false}
        options={{
          max: 10,
          scale: 1,
          speed: 400,
        }}
        className={`bg-black-100/90 border ${
          isCurrent ? "border-emerald-500/40" : "border-white/10"
        } hover:border-white/25 rounded-2xl p-5 sm:p-7 flex flex-col justify-between h-full group hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] transition-all relative overflow-hidden`}
      >
        {/* Subtle accent glow top border */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] ${
            isCurrent
              ? "bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent"
              : "bg-gradient-to-r from-white/20 via-white/5 to-transparent"
          }`}
        />

        <div>
          {/* Header Row: Company Icon, Date & Current Role Status */}
          <div className='flex items-start justify-between gap-3 pb-4 border-b border-white/10'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2.5 group-hover:border-white/30 group-hover:scale-105 transition-all'>
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className='w-full h-full object-contain'
                />
              </div>
              <div>
                <h4 className='text-neutral-300 font-semibold text-[15px] leading-tight'>
                  {experience.company_name}
                </h4>
                {experience.roleCategory && (
                  <span className='text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mt-0.5'>
                    {experience.roleCategory}
                  </span>
                )}
              </div>
            </div>

            {/* Date / Status Badge */}
            <div className='flex flex-col items-end gap-1'>
              {isCurrent ? (
                <span className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'>
                  <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
                  CURRENT ROLE
                </span>
              ) : experience.date ? (
                <span className='text-[11px] font-mono text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5'>
                  {experience.date}
                </span>
              ) : null}
              {isCurrent && experience.date && (
                <span className='text-[10px] font-mono text-neutral-400'>
                  {experience.date}
                </span>
              )}
            </div>
          </div>

          {/* Role Title */}
          <div className='mt-4'>
            <h3 className='text-white text-[18px] sm:text-[19px] font-bold tracking-tight leading-snug group-hover:text-cyan-300 transition-colors'>
              {experience.title}
            </h3>
          </div>

          {/* Summarized Key Highlights (Concise & Impact-Driven) */}
          <div className='mt-4 space-y-2.5'>
            {experience.points.map((point, pIdx) => (
              <div
                key={`grid-point-${pIdx}`}
                className='flex items-start gap-2.5 text-neutral-300 text-[13.5px] leading-relaxed'
              >
                <span className='text-cyan-400 text-xs mt-1 shrink-0'>▹</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Tech Stack Badges */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className='mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5'>
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className='text-[10px] font-mono px-2 py-0.5 rounded bg-black-200 border border-white/10 text-neutral-400 group-hover:border-white/20 transition-colors'
              >
                #{tech}
              </span>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

// Timeline Card Component for Timeline View
const ExperienceTimelineCard = ({ experience }) => {
  const isCurrent = experience.date ? experience.date.includes("Present") : false;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0d0d11",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #0d0d11" }}
      date={experience.date || ""}
      iconStyle={{
        background: experience.iconBg || "#0d0d11",
        boxShadow: isCurrent
          ? "0 0 0 4px #10B981"
          : "0 0 0 4px rgba(255, 255, 255, 0.2)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full p-2.5'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full object-contain'
          />
        </div>
      }
    >
      <div>
        <div className='flex items-center justify-between flex-wrap gap-2'>
          <h3 className='text-white text-[19px] sm:text-[20px] font-bold tracking-tight'>
            {experience.title}
          </h3>
          {isCurrent && (
            <span className='px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'>
              ● CURRENT ROLE
            </span>
          )}
        </div>

        <p
          className='text-neutral-400 text-[14px] font-medium mt-1'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-4 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`timeline-point-${index}`}
            className='text-neutral-300 text-[13.5px] pl-1 leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.technologies && (
        <div className='mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5'>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className='text-[10px] font-mono px-2 py-0.5 rounded bg-black-200 border border-white/10 text-neutral-400'
            >
              #{tech}
            </span>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' (cards next to each other) or 'timeline'
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredExperiences = experiences.filter((exp) => {
    if (filterCategory === "all") return true;
    if (filterCategory === "ai-automation") {
      return (
        exp.roleCategory === "AI & Data Engineering" ||
        exp.roleCategory === "Architecture & AIOps" ||
        exp.roleCategory === "Enterprise Automation"
      );
    }
    if (filterCategory === "software-backend") {
      return (
        exp.roleCategory === "Fullstack & Database" ||
        exp.roleCategory === "Backend & Mentorship" ||
        exp.roleCategory === "Architecture & AIOps"
      );
    }
    return true;
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Enterprise Track Record
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience<span className='text-neutral-500'>.</span>
        </h2>
        <p className='text-neutral-400 text-sm text-center max-w-2xl mx-auto mt-2'>
          Delivering enterprise AI automation, software engineering, and data architectures across FinTech and leading institutions.
        </p>
      </motion.div>

      {/* Control Bar: Category Filters & View Mode Switcher */}
      <div className='mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-2 border-b border-white/5'>
        {/* Category Filter Pills */}
        <div className='flex items-center flex-wrap gap-1.5 sm:gap-2'>
          <button
            type='button'
            onClick={() => setFilterCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filterCategory === "all"
                ? "bg-white text-black font-semibold shadow-md"
                : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            All Roles ({experiences.length})
          </button>
          <button
            type='button'
            onClick={() => setFilterCategory("ai-automation")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filterCategory === "ai-automation"
                ? "bg-emerald-400 text-black font-semibold shadow-md"
                : "bg-white/5 text-neutral-400 hover:text-emerald-400 hover:bg-white/10 border border-white/5"
            }`}
          >
            AI & Automation
          </button>
          <button
            type='button'
            onClick={() => setFilterCategory("software-backend")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filterCategory === "software-backend"
                ? "bg-cyan-400 text-black font-semibold shadow-md"
                : "bg-white/5 text-neutral-400 hover:text-cyan-400 hover:bg-white/10 border border-white/5"
            }`}
          >
            Software & Backend
          </button>
        </div>

        {/* View Mode Toggle (Cards Next to Each Other vs Timeline) */}
        <div className='inline-flex items-center bg-black-200 p-1 rounded-xl border border-white/10 self-end sm:self-auto'>
          <button
            type='button'
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
              viewMode === "grid"
                ? "bg-white/15 text-white shadow-sm border border-white/15"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>⊞</span> Cards Grid
          </button>
          <button
            type='button'
            onClick={() => setViewMode("timeline")}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
              viewMode === "timeline"
                ? "bg-white/15 text-white shadow-sm border border-white/15"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>☷</span> Timeline
          </button>
        </div>
      </div>

      {/* Experience Display */}
      {viewMode === "grid" ? (
        <div className='mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch'>
          <AnimatePresence>
            {filteredExperiences.map((experience, index) => (
              <ExperienceGridCard
                key={`${experience.company_name}-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className='mt-10 flex flex-col'>
          <VerticalTimeline lineColor='rgba(255, 255, 255, 0.1)'>
            {filteredExperiences.map((experience, index) => (
              <ExperienceTimelineCard
                key={`timeline-${experience.company_name}-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Experience, "work");
