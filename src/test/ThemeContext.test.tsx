/**
 * Unit tests for ThemeContext and dark/light mode toggle.
 * @module test/ThemeContext.test
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

/**
 * Helper component exposing theme context for testing.
 */
const TestConsumer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button type="button" onClick={toggleTheme} data-testid="toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('initializes with default theme and reflects in context', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    const themeDisplay = screen.getByTestId('current-theme');
    expect(['light', 'dark']).toContain(themeDisplay.textContent);
  });

  it('toggles theme when trigger is activated', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    const themeDisplay = screen.getByTestId('current-theme');
    const toggleButton = screen.getByTestId('toggle-btn');
    const initialTheme = themeDisplay.textContent;

    fireEvent.click(toggleButton);

    const expectedTheme = initialTheme === 'dark' ? 'light' : 'dark';
    expect(themeDisplay.textContent).toBe(expectedTheme);
    expect(localStorage.getItem('portfolio_theme_preference')).toBe(expectedTheme);
  });
});
