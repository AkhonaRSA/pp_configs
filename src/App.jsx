import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
} from "./components";
import { personalInfo } from "./constants";

const Footer = () => {
  return (
    <footer className='w-full py-6 sm:py-8 border-t border-white/10 bg-black/90 backdrop-blur-md text-neutral-400 text-xs relative z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-16 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left'>
        <div className='flex items-center gap-2 flex-wrap justify-center'>
          <span className='font-bold text-white text-sm'>Akhona Mkhatshwa</span>
          <span>•</span>
          <span className='font-mono text-[11px]'>AI Specialist & Enterprise Automation Engineer</span>
        </div>

        <div className='flex items-center gap-3 sm:gap-4 text-xs font-mono flex-wrap justify-center'>
          <a
            href={`mailto:${personalInfo.email}`}
            className='hover:text-white transition-colors'
          >
            {personalInfo.email}
          </a>
          <span>•</span>
          <a
            href={personalInfo.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-colors'
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-colors'
          >
            GitHub
          </a>
        </div>

        <p className='text-neutral-500 font-mono text-[11px]'>
          © {new Date().getFullYear()} Akhona Mkhatshwa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary text-white selection:bg-white selection:text-black min-h-screen w-full overflow-x-hidden'>
        {/* Single Persistent Hardware-Accelerated 3D Starfield from Top to Bottom */}
        <div className='fixed inset-0 z-0 pointer-events-none'>
          <StarsCanvas color='#ffffff' size={0.0022} speed={0.8} />
        </div>

        {/* Content Layers with Z-index above Starfield */}
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
