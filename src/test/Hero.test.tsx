/**
 * Unit tests for Hero component.
 * @module test/Hero.test
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '../components/Hero';
import { portfolioData } from '../data/portfolioData';

describe('Hero Component', () => {
  it('renders greeting, name, role title, and tagline correctly', () => {
    render(<Hero personalInfo={portfolioData.personalInfo} />);

    expect(screen.getByText(portfolioData.personalInfo.name)).toBeInTheDocument();
    expect(screen.getByText(portfolioData.personalInfo.title)).toBeInTheDocument();
    expect(screen.getByText(portfolioData.personalInfo.tagline)).toBeInTheDocument();
  });

  it('renders action buttons for contact and resume download', () => {
    render(<Hero personalInfo={portfolioData.personalInfo} />);

    const contactButton = screen.getByRole('link', { name: /contact me/i });
    const resumeButton = screen.getByRole('link', { name: /download resume/i });

    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute('href', '#contact');

    expect(resumeButton).toBeInTheDocument();
    expect(resumeButton).toHaveAttribute('href', portfolioData.personalInfo.resumeUrl);
  });

  it('renders profile image with valid alt text', () => {
    render(<Hero personalInfo={portfolioData.personalInfo} />);

    const profileImage = screen.getByAltText(portfolioData.personalInfo.name);
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', portfolioData.personalInfo.avatarUrl);
  });
});
