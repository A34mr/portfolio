/**
 * About Me Section highlighting professional background and career metrics.
 * @module components/About
 */
import React from 'react';
import { Award, ShieldCheck, GraduationCap, Code2 } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';

interface AboutProps {
  personalInfo: PersonalInfo;
}

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  subtext: string;
}

const stats: StatItem[] = [
  {
    icon: GraduationCap,
    value: '2022 – 2026',
    label: 'Computer Science',
    subtext: 'EELU Computing & IT',
  },
  {
    icon: Award,
    value: '3+ Credentials',
    label: 'Key Certifications',
    subtext: 'Cisco CCNA, Huawei AI, Data Pill',
  },
  {
    icon: Code2,
    value: 'Full-Stack MERN',
    label: 'Core Focus',
    subtext: 'Dent AI, REST APIs & Socket.IO',
  },
  {
    icon: ShieldCheck,
    value: 'ITI Trainee',
    label: 'Software Engineering',
    subtext: 'C++, OOP & Data Structures',
  },
];

/**
 * About Me section presenting career summary and key metrics.
 * @param {AboutProps} props - Component properties with personal info.
 * @returns {JSX.Element} The rendered About component.
 */
export const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-100/70 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering with Passion & Precision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A quick glimpse into my professional philosophy, background, and engineering approach.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Summary Card */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-sky-500 to-indigo-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Building Scalable Software That Solves Real-World Problems
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>{personalInfo.summary}</p>
              <p>
                Driven by continuous learning, I combine strong theoretical foundations from EELU
                with intensive practical training from ITI and ITIDA. Whether building full-stack
                MERN applications, configuring secure enterprise networks, or exploring applied AI
                integrations, I focus on clean code, structured problem-solving, and reliable software delivery.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">Location:</span> {personalInfo.location}
              </div>
              <div className="text-slate-300 dark:text-slate-700">|</div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">Email:</span> {personalInfo.email}
              </div>
            </div>
          </div>

          {/* Stats Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
