import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, personalInfo, spokenLanguages, engineeringLifecycle } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({
  index,
  pillarId,
  badge,
  title,
  subtitle,
  description,
  highlights,
  tags,
  icon,
  accent,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", Math.min(index * 0.08, 0.2), 0.5)}
      className='w-full h-full'
    >
      <Tilt
        tiltEnable={typeof window !== "undefined" ? window.innerWidth >= 768 : true}
        gyroscope={false}
        options={{
          max: 12,
          scale: 1,
          speed: 400,
        }}
        className={`bg-black-100/90 border border-white/10 ${accent.border} p-5 sm:p-8 rounded-2xl flex flex-col justify-between h-full shadow-2xl group hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] transition-all`}
      >
        <div>
          {/* Header area mirroring the featured cards with icon, pillar tag & status */}
          <div className='flex items-start justify-between gap-4 pb-5 border-b border-white/10'>
            <div className='flex items-center gap-3.5'>
              <div className='w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2.5 group-hover:border-white/30 group-hover:scale-105 transition-all'>
                <img
                  src={icon}
                  alt={title}
                  className='w-full h-full object-contain filter invert opacity-85 group-hover:opacity-100 transition-opacity'
                />
              </div>
              <div className='flex flex-col'>
                <span className='text-[10px] font-mono tracking-widest uppercase text-neutral-500'>
                  Pillar {pillarId}
                </span>
                <span
                  className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border mt-0.5 ${accent.badgeBg}`}
                >
                  {badge}
                </span>
              </div>
            </div>

            <div className='flex items-center gap-1.5 pt-1'>
              <span className={`w-2 h-2 rounded-full ${accent.glow} animate-pulse`} />
              <span className='text-[10px] font-mono uppercase tracking-wider text-neutral-400'>
                Active
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[20px] sm:text-[21px] tracking-tight leading-snug group-hover:text-white transition-colors'>
              {title}
            </h3>
            <p className='text-neutral-400 text-xs font-mono mt-1.5'>
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <p className='mt-3.5 text-neutral-300 text-[13.5px] leading-relaxed'>
            {description}
          </p>

          {/* Key Capabilities / Highlights */}
          {highlights && highlights.length > 0 && (
            <div className='mt-5 pt-4 border-t border-white/5 space-y-2'>
              <p className='text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2'>
                Core Capabilities:
              </p>
              {highlights.map((point, idx) => (
                <div key={idx} className='flex items-start gap-2.5 text-xs text-neutral-300'>
                  <span className='text-neutral-500 mt-0.5 shrink-0'>▹</span>
                  <span className='leading-relaxed'>{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Tags: Matches the exact featured card footer */}
        <div className='mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2'>
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className='text-[11px] font-mono px-2.5 py-0.5 rounded bg-black-200 border border-white/10 text-neutral-300 group-hover:border-white/25 transition-colors'
              >
                #{tag}
              </span>
            ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Executive Summary</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Professional Overview<span className='text-neutral-500'>.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-neutral-300 text-[15px] sm:text-[16px] max-w-4xl leading-relaxed space-y-4'
      >
        <p className='text-white/95 font-normal leading-relaxed text-base sm:text-lg'>
          {personalInfo.summary}
        </p>

        {/* High-Contrast Black & White Highlight Cards with Accents */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-3'>
          <div className='p-5 rounded-2xl bg-black-100 border border-white/10 hover:border-white/25 transition-colors'>
            <div className='text-amber-400 font-bold text-sm mb-1.5 flex items-center gap-2'>
              <span className='w-1.5 h-1.5 rounded-full bg-amber-400' />
              Regulated FinTech Environments
            </div>
            <p className='text-xs text-neutral-400 leading-relaxed'>
              Proven track record engineering compliant ServiceNow workflows, data pipelines, and orchestration engines at Nedbank and BCX.
            </p>
          </div>

          <div className='p-5 rounded-2xl bg-black-100 border border-white/10 hover:border-white/25 transition-colors'>
            <div className='text-cyan-400 font-bold text-sm mb-1.5 flex items-center gap-2'>
              <span className='w-1.5 h-1.5 rounded-full bg-cyan-400' />
              Multi-Cloud Certified
            </div>
            <p className='text-xs text-neutral-400 leading-relaxed'>
              Accredited across Microsoft Azure (AZ-900, DP-900), AWS, and Oracle Cloud Infrastructure (OCI 2025 Associate).
            </p>
          </div>

          <div className='p-5 rounded-2xl bg-black-100 border border-white/10 hover:border-white/25 transition-colors'>
            <div className='text-emerald-400 font-bold text-sm mb-1.5 flex items-center gap-2'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-400' />
              Multilingual Communicator
            </div>
            <div className='flex flex-wrap gap-1 mt-1.5'>
              {spokenLanguages.map((lang) => (
                <span
                  key={lang.name}
                  className='text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/5'
                >
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Software Engineering & Architecture Lifecycle */}
      <div className='mt-10 sm:mt-16'>
        <div className='flex flex-col items-center justify-center text-center gap-2 mb-6 sm:mb-8'>
          <div className='flex items-center justify-center gap-2.5'>
            <span className='w-1.5 h-4 bg-cyan-400 rounded-full' />
            <h3 className='text-white font-bold text-[20px] sm:text-[22px] tracking-tight'>
              Software Engineering & Architectural Lifecycle
            </h3>
          </div>
          <span className='text-[11px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-3 py-1 rounded-full border border-white/10'>
            Full-Cycle Delivery
          </span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 items-stretch'>
          {engineeringLifecycle.map((stage, idx) => (
            <motion.div
              key={stage.step}
              variants={fadeIn("up", "spring", idx * 0.15, 0.75)}
              className='h-full'
            >
              <div className='p-5 rounded-2xl bg-black-100/90 border border-white/10 hover:border-white/25 flex flex-col justify-between h-full group hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all text-center'>
                <div>
                  {/* Title & Description - Centered on Full Dev Cycle */}
                  <div className='text-center pt-1'>
                    <h4 className='text-white font-bold text-[17px] tracking-tight group-hover:text-cyan-300 transition-colors'>
                      {stage.title}
                    </h4>
                    <p className='text-xs text-neutral-400 leading-relaxed mt-2.5 text-center'>
                      {stage.summary}
                    </p>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className='mt-4 pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5 justify-center'>
                  {stage.skills.map((skill) => (
                    <span
                      key={skill}
                      className='text-[10px] font-mono px-2 py-0.5 rounded bg-black-200 border border-white/10 text-neutral-300'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services / Core Pillars Grid */}
      <div className='mt-10 sm:mt-16'>
        <div className='flex items-center gap-3 mb-6 sm:mb-8'>
          <span className='w-1.5 h-5 bg-white rounded-full' />
          <h3 className='text-white font-bold text-[20px] sm:text-[22px] tracking-tight'>
            Core Pillars of Enterprise Engineering
          </h3>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 items-stretch'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
