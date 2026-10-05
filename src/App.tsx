/**
 * Main application root component assembling portfolio sections and providers.
 * @module App
 */
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolioData';

/**
 * Root React application component.
 * Renders the complete responsive portfolio showcase.
 * @returns {JSX.Element} The rendered portfolio application.
 */
export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] font-sans transition-colors duration-300">
        <Navbar name={portfolioData.personalInfo.name} />
        <main>
          <Hero personalInfo={portfolioData.personalInfo} />
          <About personalInfo={portfolioData.personalInfo} />
          <Skills skills={portfolioData.skills} />
          <ExperienceEducationSection
            experience={portfolioData.experience}
            education={portfolioData.education}
          />
          <Projects projects={portfolioData.projects} />
          <Contact personalInfo={portfolioData.personalInfo} />
        </main>
        <Footer personalInfo={portfolioData.personalInfo} />
      </div>
    </ThemeProvider>
  );
};

export default App;
