import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.2, 0.75)}
    className='bg-black-100 border border-white/10 p-8 rounded-2xl xs:w-[340px] w-full flex flex-col justify-between shadow-xl hover:border-white/25 transition-colors'
  >
    <div>
      <span className='text-neutral-500 font-serif text-[40px] leading-none select-none'>
        “
      </span>
      <p className='text-neutral-300 text-[14px] leading-relaxed mt-2'>
        {testimonial}
      </p>
    </div>

    <div className='mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3'>
      <div className='flex flex-col'>
        <p className='text-white font-semibold text-[15px]'>
          {name}
        </p>
        <p className='text-neutral-400 text-[12px]'>
          {designation} • {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className='w-10 h-10 rounded-full object-cover border border-white/20'
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-8 rounded-3xl bg-black-100/60 border border-white/10 p-8 sm:p-12'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Endorsements & Collaborations</p>
        <h2 className={styles.sectionHeadText}>
          Testimonials<span className='text-neutral-500'>.</span>
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-6 justify-center sm:justify-start'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
