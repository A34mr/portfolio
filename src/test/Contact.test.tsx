/**
 * Unit tests for Contact component form validation and submission.
 * @module test/Contact.test
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Contact } from '../components/Contact';
import { portfolioData } from '../data/portfolioData';

describe('Contact Component', () => {
  it('renders contact channels and email address', () => {
    render(<Contact personalInfo={portfolioData.personalInfo} />);

    expect(screen.getByText(portfolioData.personalInfo.email)).toBeInTheDocument();
    expect(screen.getByText(portfolioData.personalInfo.location)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  it('displays validation error if required fields are missing', async () => {
    render(<Contact personalInfo={portfolioData.personalInfo} />);

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(/please fill in all required fields/i);
  });

  it('displays validation error if email address is invalid', async () => {
    render(<Contact personalInfo={portfolioData.personalInfo} />);

    fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'invalid-email-string' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there!' } });

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(/please provide a valid email address/i);
  });

  it('submits form successfully when fields are filled properly', async () => {
    render(<Contact personalInfo={portfolioData.personalInfo} />);

    fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Sarah Connor' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'sarah@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Great portfolio!' } });

    const submitBtn = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/message sent successfully/i);
    }, { timeout: 3000 });
  });
});
