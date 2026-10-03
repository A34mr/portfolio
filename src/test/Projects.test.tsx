/**
 * Unit tests for Projects component filtering and rendering.
 * @module test/Projects.test
 */
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Projects } from '../components/Projects';
import { portfolioData } from '../data/portfolioData';

describe('Projects Component', () => {
  it('renders all projects by default', () => {
    render(<Projects projects={portfolioData.projects} />);

    portfolioData.projects.forEach((proj) => {
      expect(screen.getByText(proj.title)).toBeInTheDocument();
    });
  });

  it('filters projects to show only featured ones when featured filter is clicked', () => {
    render(<Projects projects={portfolioData.projects} />);

    const featuredFilterButton = screen.getByRole('button', { name: /featured only/i });
    fireEvent.click(featuredFilterButton);

    const featuredCount = portfolioData.projects.filter((p) => p.featured).length;
    const projectCards = screen.getAllByRole('article');
    expect(projectCards.length).toBe(featuredCount);
  });
});
