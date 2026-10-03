/**
 * Technical skills section displaying categorized engineering tools and frameworks.
 * @module components/Skills
 */
import React, { useState } from 'react';
import {
  Code2,
  FileCode2,
  Palette,
  Boxes,
  Gauge,
  Network,
  Server,
  Terminal,
  Database,
  Workflow,
  Layers,
  Box,
  Cloud,
  GitMerge,
  Cpu,
  GitBranch,
  CheckCircle2,
  ShieldCheck,
  Layout,
  Wrench,
} from 'lucide-react';
import { SkillItem } from '../types/portfolio';

interface SkillsProps {
  skills: SkillItem[];
}

type SkillCategory = 'all' | 'frontend' | 'backend' | 'devops' | 'tools';

/**
 * Maps icon name strings to Lucide icon components.
 * @param {string} iconName - Icon name identifier.
 * @returns {React.ComponentType<{ className?: string }>} The resolved icon component.
 */
const getSkillIcon = (iconName: string): React.ComponentType<{ className?: string }> => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Code: Code2,
    FileCode2,
    Palette,
    Boxes,
    Gauge,
    Network,
    Server,
    Terminal,
    Database,
    Workflow,
    Layers,
    Container: Box,
    Cloud,
    GitMerge,
    Cpu,
    GitBranch,
    CheckCircle2,
    ShieldCheck,
    Layout,
  };
  return iconMap[iconName] || Wrench;
};

/**
 * Skills showcase section with interactive category filtering and proficiency indicators.
 * @param {SkillsProps} props - Component properties containing skills array.
 * @returns {JSX.Element} The rendered Skills component.
 */
export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'all', label: 'All Skills' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'devops', label: 'Cloud & DevOps' },
    { key: 'tools', label: 'Tools & Testing' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-100/70 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
            Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Stack & Core Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive overview of the languages, frameworks, and cloud systems I work with.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const Icon = getSkillIcon(skill.icon);
            return (
              <div
                key={`${skill.name}-${index}`}
                className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 text-sky-500 dark:text-sky-400 flex items-center justify-center shadow-sm border border-slate-200/50 dark:border-slate-700/50 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate">
                      {skill.name}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                      {skill.category}
                    </span>
                  </div>
                  {skill.proficiency && (
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-2 py-1 rounded-md border border-sky-200/50 dark:border-sky-800/50">
                      {skill.proficiency}%
                    </span>
                  )}
                </div>

                {skill.proficiency && (
                  <div className="mt-4 w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-indigo-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
