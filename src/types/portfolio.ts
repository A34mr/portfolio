/**
 * Type definitions for personal portfolio CV data.
 * @module types/portfolio
 */

/**
 * Social media and external link structure.
 */
export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | 'website';
  label: string;
  url: string;
}

/**
 * Personal profile details for hero and meta sections.
 */
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
  socials: SocialLink[];
}

/**
 * Technical skill definition with icon and category.
 */
export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  icon: string;
  proficiency?: number;
}

/**
 * Work experience timeline item.
 */
export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  achievements: string[];
  techStack: string[];
}

/**
 * Education timeline item.
 */
export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
  honors?: string;
  highlights?: string[];
}

/**
 * Featured project structure for showcase card.
 */
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
}

/**
 * Portfolio aggregate dataset structure.
 */
export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: SkillItem[];
  experience: WorkExperience[];
  education: EducationItem[];
  projects: ProjectItem[];
}
