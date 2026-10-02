import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const isCurrent = experience.date.includes("Present");

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
      date={experience.date}
      iconStyle={{
        background: experience.iconBg || "#0d0d11",
        boxShadow: isCurrent
          ? "0 0 0 4px #00F5A0"
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
          <h3 className='text-white text-[19px] sm:text-[21px] font-bold tracking-tight'>
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
            key={`experience-point-${index}`}
            className='text-neutral-300 text-[13.5px] pl-1 leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Enterprise Track Record
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience<span className='text-neutral-500'>.</span>
        </h2>
      </motion.div>

      <div className='mt-14 flex flex-col'>
        <VerticalTimeline lineColor='rgba(255, 255, 255, 0.1)'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
