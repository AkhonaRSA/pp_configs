import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, personalInfo } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80"
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3 group'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className='w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center p-1.5 shadow-sm group-hover:border-white/40 group-hover:scale-105 transition-all'>
            <img src={logo} alt='logo' className='w-full h-full object-contain filter invert opacity-90' />
          </div>
          <div className='flex flex-col'>
            <p className='text-white text-[17px] font-bold cursor-pointer tracking-tight'>
              Akhona <span className='text-neutral-400'>Mkhatshwa</span>
            </p>
            <span className='text-[10px] font-mono tracking-widest uppercase text-neutral-400'>
              AI Specialist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          <ul className='list-none flex flex-row gap-6'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                } text-[14px] cursor-pointer transition-colors relative py-1`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                {active === nav.title && (
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full' />
                )}
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-3 pl-5 border-l border-white/10'>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs px-3.5 py-1.5 rounded-lg border border-white/15 text-neutral-300 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all font-medium flex items-center gap-1.5'
            >
              <svg className='w-3.5 h-3.5 fill-current' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
              LinkedIn
            </a>
            <a
              href='#contact'
              className='text-xs px-4 py-1.5 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 shadow-sm transition-all'
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Navigation */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            aria-label='Toggle navigation menu'
            className='p-2.5 rounded-xl bg-white text-black shadow-md border border-white hover:bg-neutral-200 focus:outline-none flex items-center justify-center transition-all'
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[18px] h-[18px] object-contain filter invert'
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black/95 backdrop-blur-2xl border border-white/15 absolute top-16 right-0 mx-4 my-2 min-w-[240px] z-30 rounded-2xl shadow-2xl flex-col gap-4 text-white`}
          >
            <ul className='list-none flex flex-col gap-3'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[14px] transition-colors py-1 ${
                    active === nav.title ? "text-white font-bold" : "text-neutral-400 hover:text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className='block w-full'>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className='pt-3 border-t border-white/10 flex flex-col gap-2'>
              <a
                href={personalInfo.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='text-center text-xs py-2 rounded-lg border border-white/15 text-neutral-200 hover:bg-white/5 font-medium'
              >
                LinkedIn Profile ↗
              </a>
              <a
                href='#contact'
                onClick={() => setToggle(false)}
                className='text-center text-xs py-2 rounded-lg bg-white text-black font-bold'
              >
                Contact Akhona
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
