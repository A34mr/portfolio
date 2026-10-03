/**
 * Experience & Career Timeline component.
 * Displays past positions, companies, dates, achievements, and technologies.
 * @module components/Experience
 */
import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WorkExperience } from '../types/portfolio';

interface ExperienceProps {
  experience: WorkExperience[];
}

/**
 * Career timeline component presenting past professional roles and key accomplishments.
 * @param {ExperienceProps} props - Component properties containing experience items.
 * @returns {JSX.Element} The rendered Experience timeline component.
 */
export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-sm border border-sky-200/50 dark:border-sky-800/50">
          <Briefcase className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Professional career progression</p>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-10">
        {experience.map((item) => (
          <div key={item.id} className="relative pl-6 sm:pl-8 group">
            {/* Timeline bullet icon */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-sky-500 group-hover:scale-125 transition-transform" />

            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-colors shadow-sm">
              {/* Header: Role and Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.role}
                  </h4>
                  <div className="text-base font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    <span>
                      {item.startDate} – {item.endDate}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </span>
                  {item.isCurrent && (
                    <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-400 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      Present
                    </span>
                  )}
                </div>
              </div>

              {/* Achievements / Bullet points */}
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {item.achievements.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-1" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {item.techStack && item.techStack.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
