'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      company: String(data.get('company') || ''),
      projectDetails: String(data.get('projectDetails') || ''),
      message: String(data.get('message') || ''),
      website: String(data.get('website') || ''), // honeypot
    };

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again or email us directly.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Could not reach the server. Please check your connection and try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-status form-status-success" role="status">
        <h3>Message sent.</h3>
        <p>Thank you for reaching out — our team will follow up shortly.</p>
        <button type="button" className="btn btn-outline-dark" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field — hidden from real users, bots tend to fill every input */}
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required maxLength={120} autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required maxLength={200} autoComplete="email" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" maxLength={30} autoComplete="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" maxLength={120} autoComplete="organization" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="projectDetails">Project / Industry</label>
        <input
          type="text"
          id="projectDetails"
          name="projectDetails"
          maxLength={150}
          placeholder="e.g. BESS container, railway component, EV enclosure"
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required minLength={10} maxLength={5000} rows={6}></textarea>
      </div>

      {status === 'error' && (
        <div className="form-status form-status-error" role="alert">
          {errorMessage}
        </div>
      )}

      <button type="submit" className="btn btn-gold form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
