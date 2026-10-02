import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  education,
  certifications,
  honorsAwards,
  spokenLanguages,
} from "../constants";

const Education = () => {
  return (
    <div className='flex flex-col gap-12'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Academic Foundation & Credentials
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Education & Certifications<span className='text-neutral-500'>.</span>
        </h2>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        {/* Left Column: Education & Coursework */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className='lg:col-span-7 flex flex-col gap-6'
        >
          {/* Main Degree Card */}
          <div className='p-6 sm:p-8 rounded-2xl bg-black-100 border border-white/10 shadow-2xl relative overflow-hidden'>
            <div className='flex items-start justify-between flex-wrap gap-2 mb-4'>
              <div>
                <span className='text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.05] text-neutral-300 border border-white/10'>
                  Tertiary Education
                </span>
                <h3 className='text-white text-[22px] sm:text-[24px] font-bold mt-2.5 tracking-tight'>
                  {education.degree}
                </h3>
                <p className='text-neutral-400 font-medium text-[15px] mt-0.5'>
                  {education.institution}
                </p>
              </div>

              <div className='w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-xl'>
                🎓
              </div>
            </div>

            <div className='mt-6 pt-5 border-t border-white/10'>
              <h4 className='text-white text-sm font-semibold mb-3 flex items-center gap-2'>
                <span className='w-1.5 h-3.5 bg-white rounded-full' />
                Key Coursework & Advanced Modules:
              </h4>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
                {education.keyCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className='text-xs text-neutral-300 p-3 rounded-xl bg-black-200 border border-white/5 flex items-start gap-2 hover:border-white/20 transition-colors'
                  >
                    <span className='text-neutral-500 mt-0.5'>▹</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div className='p-6 rounded-2xl bg-black-100 border border-white/10'>
            <h4 className='text-white font-bold text-[17px] mb-4 flex items-center gap-2'>
              <span className='text-amber-400'>★</span> Honors & Academic Distinctions
            </h4>

            <div className='space-y-3'>
              {honorsAwards.map((item, idx) => (
                <div
                  key={idx}
                  className='p-4 rounded-xl bg-black-200 border border-white/5 flex items-start gap-3.5'
                >
                  <div className='w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5'>
                    ★
                  </div>
                  <div>
                    <h5 className='text-white font-semibold text-[14.5px]'>
                      {item.title}
                    </h5>
                    <p className='text-xs text-neutral-400 font-medium'>
                      {item.organization}
                    </p>
                    <p className='text-xs text-neutral-400 mt-1 leading-relaxed'>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Certifications & Languages */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className='lg:col-span-5 flex flex-col gap-6'
        >
          {/* Multi-Cloud Certifications Card */}
          <div className='p-6 sm:p-7 rounded-2xl bg-black-100 border border-white/10 shadow-2xl'>
            <div className='flex items-center justify-between mb-4'>
              <div>
                <span className='text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.05] text-neutral-300 border border-white/10'>
                  Verified Accreditations
                </span>
                <h3 className='text-white text-[19px] font-bold mt-2 tracking-tight'>
                  Industry Certifications
                </h3>
              </div>
              <span className='text-xs font-mono text-neutral-400'>
                Azure • AWS • OCI
              </span>
            </div>

            <div className='space-y-2.5 mt-4'>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className='p-3 rounded-xl bg-black-200 border border-white/5 hover:border-white/20 flex items-center justify-between gap-3 transition-colors group'
                >
                  <div className='flex items-center gap-3 min-w-0'>
                    <span className='text-base shrink-0'>{cert.icon}</span>
                    <div className='min-w-0'>
                      <p className='text-white text-xs sm:text-[13px] font-semibold truncate group-hover:text-white transition-colors'>
                        {cert.title}
                      </p>
                      <p className='text-[11px] text-neutral-500'>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className='text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/10 shrink-0'>
                    {cert.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className='p-6 rounded-2xl bg-black-100 border border-white/10'>
            <h4 className='text-white font-bold text-[16px] mb-2 flex items-center gap-2'>
              <span>🗣️</span> Spoken Languages
            </h4>
            <p className='text-xs text-neutral-400 mb-3.5 leading-relaxed'>
              Multilingual proficiency across diverse South African and global corporate teams.
            </p>

            <div className='grid grid-cols-2 gap-2'>
              {spokenLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className='p-2.5 rounded-lg bg-black-200 border border-white/5 flex flex-col'
                >
                  <span className='text-xs font-semibold text-white'>
                    {lang.name}
                  </span>
                  <span className='text-[10px] text-neutral-500'>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
