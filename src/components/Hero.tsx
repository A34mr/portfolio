/**
 * Hero Section component showcasing avatar, primary greeting, title, tagline, and call-to-actions.
 * @module components/Hero
 */
import React, { useState } from 'react';
import { ArrowUpRight, Download, Mail, Sparkles, User } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  personalInfo: PersonalInfo;
}

/**
 * Hero introduction section displaying personal details and CTA actions.
 * @param {HeroProps} props - Component props containing personal profile information.
 * @returns {JSX.Element} The rendered Hero component.
 */
export const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/15 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/80 shadow-sm animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Available for New Engineering Challenges</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Title / Role */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
              {personalInfo.title}
            </p>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Amr_Hamdy_Saad_Software_Developer_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-sky-500" />
              </a>
            </div>

            {/* Social Quick Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-100 dark:hover:bg-slate-700 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-100 dark:hover:bg-slate-700 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-100 dark:hover:bg-slate-700 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Profile Picture Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-700 group-hover:duration-300 animate-pulse" />

              {/* Main Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-sky-500/30 to-indigo-500/30 backdrop-blur-sm border-2 border-white/20 dark:border-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <User className="w-24 h-24 stroke-1" />
                      <span className="text-xs font-medium mt-1">Profile Photo</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Badge Attached to Avatar */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block -ml-4" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
