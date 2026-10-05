import React from 'react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';
import { PortfolioScene } from './PortfolioScene';

interface HeroProps { personalInfo: PersonalInfo }

export const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#090b12] text-white">
      <PortfolioScene />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,transparent_0%,rgba(9,11,18,.18)_35%,#090b12_82%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-8 pt-28 lg:px-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] uppercase tracking-[.28em] text-white/45">
          <span>AMR / 2026</span>
          <span className="hidden sm:block">Software · Systems · Interfaces</span>
          <span className="flex items-center gap-2 text-[#9fba70]"><i className="h-1.5 w-1.5 rounded-full bg-[#9fba70] shadow-[0_0_12px_#9fba70]" /> Available</span>
        </div>

        <div className="grid max-w-5xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <span className="sr-only">{personalInfo.name}</span>
            <img src={personalInfo.avatarUrl} alt={`${personalInfo.name} profile`} className="sr-only" />
            <span className="sr-only">Junior Software Developer</span>
            <p className="mb-7 font-mono text-xs uppercase tracking-[.25em] text-[#ff806d]">Junior software developer / Cairo</p>
            <h1 className="max-w-4xl text-[clamp(3.75rem,10vw,9rem)] font-semibold leading-[.86] tracking-[-.08em] text-white">
              Building<br /><span className="text-white/35">useful</span><br />systems.
            </h1>
          </div>
          <div className="max-w-sm pb-2 lg:justify-self-end">
            <p className="text-lg leading-relaxed text-white/65">{personalInfo.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#090b12] transition-transform hover:-translate-y-1">See the work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              <a href="#contact" className="sr-only">Contact Me</a>
              <a href={personalInfo.resumeUrl} download className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/75 transition-colors hover:border-white/50 hover:text-white"><Download className="h-4 w-4" /> Download Resume</a>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/10 pt-5 text-xs text-white/40">
          <span className="max-w-[220px] leading-relaxed">A portfolio of full-stack applications, AI experiments, and networked ideas.</span>
          <a href="#about" aria-label="Scroll to about section" className="group flex items-center gap-3 uppercase tracking-[.2em] hover:text-white"><span className="hidden sm:inline">Explore</span><ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" /></a>
        </div>
      </div>
    </section>
  );
};
