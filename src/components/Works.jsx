import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className='bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between h-full shadow-2xl group hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]'
      >
        <div>
          <div className='relative w-full h-[220px] rounded-xl overflow-hidden bg-black-200'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex justify-center items-center cursor-pointer hover:scale-110 shadow-lg transition-transform hover:border-white'
                title='View Source Code'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain filter invert'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[20px] tracking-tight group-hover:text-white transition-colors'>
              {name}
            </h3>
            <p className='mt-2.5 text-neutral-400 text-[13px] leading-relaxed'>
              {description}
            </p>
          </div>
        </div>

        <div className='mt-5 flex flex-wrap gap-2 pt-3 border-t border-white/10'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className='text-[11px] font-mono px-2 py-0.5 rounded bg-black-200 border border-white/10 text-neutral-300'
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Selected Implementations</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Featured Projects<span className='text-neutral-500'>.</span>
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-neutral-400 text-[15px] sm:text-[16px] max-w-3xl leading-relaxed'
        >
          Production-grade enterprise architectures, multi-agent frameworks, and software systems demonstrating expertise in scalable API design, RAG pipelines, and automated data workflows.
        </motion.p>
      </div>

      <div className='mt-12 flex flex-wrap gap-6 justify-center sm:justify-start'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
