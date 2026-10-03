/**
 * Experience and Education wrapper section.
 * Combines career chronology and educational credentials into a cohesive responsive section.
 * @module components/ExperienceEducationSection
 */
import React from 'react';
import { WorkExperience, EducationItem } from '../types/portfolio';
import { Experience } from './Experience';
import { Education } from './Education';

interface ExperienceEducationSectionProps {
  experience: WorkExperience[];
  education: EducationItem[];
}

/**
 * Section component containing both professional experience and education timelines.
 * @param {ExperienceEducationSectionProps} props - Component properties.
 * @returns {JSX.Element} The rendered section.
 */
export const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({
  experience,
  education,
}) => {
  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-100/70 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
            Career & Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive history of positions held, high-impact accomplishments, and academic background.
          </p>
        </div>

        {/* Two-column or Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Experience experience={experience} />
          </div>
          <div className="lg:col-span-5">
            <Education education={education} />
          </div>
        </div>
      </div>
    </section>
  );
};
