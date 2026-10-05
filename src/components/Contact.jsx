import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo } from "../constants";

const Contact = () => {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    }
  };

  const contactCards = [
    {
      id: "email",
      badge: "DIRECT EMAIL",
      icon: (
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.75'
            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      title: personalInfo.email,
      subtitle: "Primary communication channel • Monitored daily",
      primaryAction: {
        label: "Send Email",
        href: `mailto:${personalInfo.email}`,
        isExternal: false,
      },
      copyValue: personalInfo.email,
    },
    {
      id: "phone",
      badge: "PHONE / WHATSAPP",
      icon: (
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.75'
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
      ),
      title: personalInfo.phoneInternational || "+27 64 865 8444",
      subtitle: `Local dial: ${personalInfo.phoneDisplay || "064 865 8444"} (South Africa)`,
      primaryAction: {
        label: "Call Direct",
        href: `tel:${personalInfo.phone || "+27648658444"}`,
        isExternal: false,
      },
      secondaryAction: {
        label: "WhatsApp",
        href: personalInfo.whatsapp || "https://wa.me/27648658444",
        isExternal: true,
      },
      copyValue: personalInfo.phoneInternational || "+27 64 865 8444",
    },
    {
      id: "reference",
      badge: "PROFESSIONAL REFERENCE",
      icon: (
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.75'
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      ),
      title: personalInfo.reference.name,
      subtitle: `Contact: ${personalInfo.reference.phoneInternational || personalInfo.reference.phone || "+27 65 242 7162"} (${personalInfo.reference.relation})`,
      primaryAction: {
        label: "Call Reference",
        href: `tel:${personalInfo.reference.phone.replace(/\s+/g, "")}`,
        isExternal: false,
      },
      copyValue: personalInfo.reference.phoneInternational || personalInfo.reference.phone || "+27 65 242 7162",
    },
    {
      id: "linkedin",
      badge: "PROFESSIONAL NETWORK",
      icon: (
        <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
        </svg>
      ),
      title: "in/akhona-mkhatshwa",
      subtitle: "Verified LinkedIn profile • Endorsements & career history",
      primaryAction: {
        label: "View LinkedIn ↗",
        href: personalInfo.linkedin,
        isExternal: true,
      },
      copyValue: personalInfo.linkedin,
    },
    {
      id: "github",
      badge: "CODE REPOSITORY",
      icon: (
        <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          />
        </svg>
      ),
      title: "github.com/AkhonaRSA",
      subtitle: "Open-source implementations • Architectures & agentic POCs",
      primaryAction: {
        label: "View GitHub ↗",
        href: personalInfo.github,
        isExternal: true,
      },
      copyValue: personalInfo.github,
    },
    {
      id: "location",
      badge: "LOCATION & STATUS",
      icon: (
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.75'
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.75'
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      title: personalInfo.locationDetailed || "South Africa (GMT+2)",
      subtitle: personalInfo.status || "Available for Enterprise AI & Automation Roles",
      isStatusCard: true,
      primaryAction: {
        label: "Direct Email",
        href: `mailto:${personalInfo.email}`,
        isExternal: false,
      },
    },
  ];

  return (
    <div className='flex flex-col gap-6 sm:gap-10'>
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Direct Channels & Connect</p>
        <h2 className={styles.sectionHeadText}>
          Contact<span className='text-neutral-500'>.</span>
        </h2>
        <p className='mt-2.5 text-neutral-400 text-xs sm:text-[15px] max-w-3xl leading-relaxed'>
          Direct contact channels for enterprise AI solution architecture, agentic automation engagements, technical consultations, and leadership opportunities.
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5'>
        {contactCards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={fadeIn("up", "spring", Math.min(index * 0.05, 0.2), 0.5)}
            className='p-4 sm:p-6 rounded-2xl bg-black-100 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl flex flex-col justify-between group'
          >
            <div>
              {/* Header with Icon and Badge */}
              <div className='flex items-center justify-between gap-3 mb-4'>
                <div className='w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 group-hover:border-white/30 transition-all'>
                  {card.icon}
                </div>
                <div className='flex items-center gap-2'>
                  {card.isStatusCard && (
                    <span className='relative flex h-2 w-2'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                      <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
                    </span>
                  )}
                  <span className='text-[10px] font-mono tracking-wider text-neutral-400 uppercase bg-white/[0.03] px-2 py-0.5 rounded border border-white/5'>
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className='text-white text-[16px] sm:text-[17px] font-bold tracking-tight truncate group-hover:text-neutral-100 transition-colors'>
                {card.title}
              </h3>
              <p className='text-xs text-neutral-400 mt-1 leading-relaxed min-h-[32px]'>
                {card.subtitle}
              </p>
            </div>

            {/* Actions Bar */}
            <div className='pt-5 mt-4 border-t border-white/5 flex items-center justify-between gap-2 flex-wrap'>
              <div className='flex items-center gap-2'>
                {card.primaryAction && (
                  <a
                    href={card.primaryAction.href}
                    target={card.primaryAction.isExternal ? "_blank" : undefined}
                    rel={card.primaryAction.isExternal ? "noopener noreferrer" : undefined}
                    className='text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 transition-all shadow-sm'
                  >
                    {card.primaryAction.label}
                  </a>
                )}
                {card.secondaryAction && (
                  <a
                    href={card.secondaryAction.href}
                    target={card.secondaryAction.isExternal ? "_blank" : undefined}
                    rel={card.secondaryAction.isExternal ? "noopener noreferrer" : undefined}
                    className='text-xs font-medium px-3 py-1.5 rounded-lg border border-white/15 text-neutral-300 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all'
                  >
                    {card.secondaryAction.label}
                  </a>
                )}
              </div>

              {card.copyValue && (
                <button
                  type='button'
                  onClick={() => handleCopy(card.copyValue, card.id)}
                  className='text-[11px] font-mono px-2.5 py-1 rounded-md text-neutral-400 hover:text-white border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5 cursor-pointer bg-white/[0.02]'
                  title='Copy to clipboard'
                >
                  {copiedKey === card.id ? (
                    <>
                      <span className='text-emerald-400'>✓</span>
                      <span className='text-emerald-400'>Copied</span>
                    </>
                  ) : (
                    <>
                      <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                        />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
