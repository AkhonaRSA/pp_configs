import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9phl4ab",
        "template_77idiau",
        {
          from_name: form.name,
          reply_to: form.email,
          to_name: "Akhona Mkhatshwa",
          message: form.message,
        },
        "ogIF9POJm0Gp296wN"
      )
      .then(
        () => {
          setLoading(false);
          setSentSuccess(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => setSentSuccess(false), 6000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please reach out directly to Akhonakhaya@gmail.com");
        }
      );
  };

  return (
    <div className='flex flex-col gap-8'>
      {/* Direct Contact Info Banner in Black & White */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <a
          href={`mailto:${personalInfo.email}`}
          className='p-5 rounded-2xl bg-black-100 border border-white/10 hover:border-white/30 transition-all flex items-center gap-4 group'
        >
          <div className='w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform'>
            ✉️
          </div>
          <div className='min-w-0'>
            <p className='text-xs font-mono text-neutral-400 uppercase tracking-wider'>Direct Email</p>
            <p className='text-white text-sm font-semibold truncate group-hover:text-neutral-200 transition-colors'>
              {personalInfo.email}
            </p>
          </div>
        </a>

        <a
          href={`tel:${personalInfo.phone}`}
          className='p-5 rounded-2xl bg-black-100 border border-white/10 hover:border-white/30 transition-all flex items-center gap-4 group'
        >
          <div className='w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform'>
            📞
          </div>
          <div className='min-w-0'>
            <p className='text-xs font-mono text-neutral-400 uppercase tracking-wider'>Phone / WhatsApp</p>
            <p className='text-white text-sm font-semibold truncate group-hover:text-neutral-200 transition-colors'>
              {personalInfo.phoneDisplay}
            </p>
          </div>
        </a>

        <div className='p-5 rounded-2xl bg-black-100 border border-white/10 flex items-center gap-4'>
          <div className='w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-lg shrink-0'>
            👥
          </div>
          <div className='min-w-0'>
            <p className='text-xs font-mono text-neutral-400 uppercase tracking-wider'>Professional Reference</p>
            <p className='text-white text-sm font-semibold truncate'>
              {personalInfo.reference.name}
            </p>
            <a
              href={`tel:${personalInfo.reference.phone.replace(/\s+/g, '')}`}
              className='text-xs text-neutral-400 hover:text-white hover:underline'
            >
              {personalInfo.reference.phone}
            </a>
          </div>
        </div>
      </div>

      <div className='xl:mt-4 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.8] bg-black-100 border border-white/10 p-8 rounded-3xl shadow-2xl relative'
        >
          <p className={styles.sectionSubText}>Initiate a conversation</p>
          <h3 className={styles.sectionHeadText}>
            Get In Touch<span className='text-neutral-500'>.</span>
          </h3>

          <p className='mt-2 text-neutral-400 text-sm leading-relaxed'>
            Whether you are looking to deploy enterprise agentic workflows, build automated RAG systems, or explore multi-agent architectures, feel free to reach out.
          </p>

          {sentSuccess && (
            <div className='mt-4 p-3.5 rounded-xl bg-white/[0.05] border border-white/20 text-white text-sm font-medium flex items-center gap-2'>
              <span className='text-emerald-400'>✓</span>
              <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-5'
          >
            <label className='flex flex-col'>
              <span className='text-neutral-300 font-medium text-xs font-mono uppercase tracking-wider mb-2'>
                Your Name
              </span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='What is your name?'
                className='bg-black-200 py-3.5 px-4 placeholder:text-neutral-600 text-white rounded-xl outline-none border border-white/10 focus:border-white font-medium text-sm transition-colors'
                required
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-neutral-300 font-medium text-xs font-mono uppercase tracking-wider mb-2'>
                Your Email
              </span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Where can I reply to you?'
                className='bg-black-200 py-3.5 px-4 placeholder:text-neutral-600 text-white rounded-xl outline-none border border-white/10 focus:border-white font-medium text-sm transition-colors'
                required
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-neutral-300 font-medium text-xs font-mono uppercase tracking-wider mb-2'>
                Your Message
              </span>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Discuss a project, architecture inquiry, or enterprise opportunity...'
                className='bg-black-200 py-3.5 px-4 placeholder:text-neutral-600 text-white rounded-xl outline-none border border-white/10 focus:border-white font-medium text-sm transition-colors resize-none'
                required
              />
            </label>

            <div className='flex items-center justify-between flex-wrap gap-4 mt-2'>
              <button
                type='submit'
                disabled={loading}
                className='bg-white text-black font-bold hover:bg-neutral-200 py-3 px-8 rounded-xl outline-none w-fit shadow-md transition-all text-sm disabled:opacity-50 cursor-pointer hover:scale-[1.02]'
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>

              <div className='flex items-center gap-3'>
                <a
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs text-neutral-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-colors'
                >
                  LinkedIn Profile ↗
                </a>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs text-neutral-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-colors'
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
