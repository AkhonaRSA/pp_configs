import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, personalInfo, spokenLanguages } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const accentColors = [
  { border: "hover:border-emerald-400/40", glow: "bg-emerald-400", tag: "text-emerald-400" },
  { border: "hover:border-cyan-400/40", glow: "bg-cyan-400", tag: "text-cyan-400" },
  { border: "hover:border-purple-400/40", glow: "bg-purple-400", tag: "text-purple-400" },
  { border: "hover:border-blue-400/40", glow: "bg-blue-400", tag: "text-blue-400" },
  { border: "hover:border-amber-400/40", glow: "bg-amber-400", tag: "text-amber-400" },
  { border: "hover:border-rose-400/40", glow: "bg-rose-400", tag: "text-rose-400" },
];

const ServiceCard = ({ index, title, description, icon }) => {
  const accent = accentColors[index % accentColors.length];

  return (
    <Tilt className='xs:w-[280px] w-full'>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.15, 0.75)}
        className={`w-full card-mono-border ${accent.border} p-6 rounded-2xl h-full flex flex-col justify-between shadow-xl transition-all duration-300 hover:scale-[1.02]`}
      >
        <div>
          <div className='flex items-center justify-between mb-5'>
            <div className='w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2.5'>
              <img
                src={icon}
                alt={title}
                className='w-full h-full object-contain filter invert opacity-85'
              />
            </div>
            <span className={`w-2 h-2 rounded-full ${accent.glow}`} />
          </div>

          <h3 className='text-white text-[17px] font-bold tracking-tight'>
            {title}
          </h3>
          <p className='text-neutral-400 text-[13px] mt-2.5 leading-relaxed'>
            {description}
          </p>
        </div>

        <div className='mt-5 pt-3 border-t border-white/5 flex items-center justify-between'>
          <span className={`text-[10px] font-mono tracking-wider uppercase font-semibold ${accent.tag}`}>
            Production Grade
          </span>
          <span className='text-neutral-500 text-xs'>→</span>
        </div>
      </motion.div>
    </Tilt>
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

        {/* High-Contrast Black & White Highlight Cards with Interesting Accents */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4'>
          <div className='p-5 rounded-2xl bg-black-100 border border-white/10 hover:border-white/25 transition-colors'>
            <div className='text-amber-400 font-bold text-sm mb-1.5 flex items-center gap-2'>
              <span className='w-1.5 h-1.5 rounded-full bg-amber-400' />
              Regulated FinTech Environments
            </div>
            <p className='text-xs text-neutral-400 leading-relaxed'>
              Proven track record engineering compliant ServiceNow workflows, data pipelines, and orchestration engines at Nedbank and BCX (Telkom CCO).
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

      {/* Services Grid */}
      <div className='mt-16'>
        <div className='flex items-center gap-3 mb-8'>
          <span className='w-1.5 h-5 bg-white rounded-full' />
          <h3 className='text-white font-bold text-[20px] tracking-tight'>
            Core Pillars of Enterprise Engineering
          </h3>
        </div>

        <div className='flex flex-wrap justify-center gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
