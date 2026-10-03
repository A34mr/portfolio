/**
 * Integration unit tests for root App component.
 * Verifies end-to-end rendering of all main portfolio sections.
 * @module test/App.test
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';
import { portfolioData } from '../data/portfolioData';

describe('App Root Integration', () => {
  it('renders all sections and main navigation items', () => {
    render(<App />);

    // Brand and Navigation
    expect(screen.getByLabelText(new RegExp(`${portfolioData.personalInfo.name} Portfolio Home`, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^skills$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^experience$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^projects$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument();

    // Section headings
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(portfolioData.personalInfo.name);
    expect(screen.getByText(/Engineering with Passion & Precision/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Stack & Core Competencies/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience & Education/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured Projects & Engineering Work/i)).toBeInTheDocument();
  });
});
