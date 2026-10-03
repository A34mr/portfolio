/**
 * Education & Credentials component.
 * Displays degrees, certifications, institutions, and graduation years.
 * @module components/Education
 */
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EducationItem } from '../types/portfolio';

interface EducationProps {
  education: EducationItem[];
}

/**
 * Education component rendering academic degrees and certifications.
 * @param {EducationProps} props - Component properties containing education list.
 * @returns {JSX.Element} The rendered Education component.
 */
export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-sm border border-indigo-200/50 dark:border-indigo-800/50">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education & Credentials</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Degrees and professional certifications</p>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-10">
        {education.map((item) => (
          <div key={item.id} className="relative pl-6 sm:pl-8 group">
            {/* Timeline bullet icon */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.degree}
                </h4>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Graduated {item.graduationYear}</span>
                  </span>
                </div>
              </div>

              <div className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                {item.institution}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.location}</span>
              </div>

              {item.honors && (
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 mb-3">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>{item.honors}</span>
                </div>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
