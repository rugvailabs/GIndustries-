import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const TO_ADDRESSES = ['mvskiran@gindustries.co.in', 'gindustries.md@gmail.com'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectDetails?: string;
  message?: string;
  website?: string; // honeypot — real users never fill this in
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const company = (body.company || '').trim();
  const projectDetails = (body.projectDetails || '').trim();
  const message = (body.message || '').trim();

  // Honeypot: bots fill every field, including ones hidden from real users.
  // Pretend success so we don't tip them off, but skip sending entirely.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 120) {
    return NextResponse.json({ ok: false, error: 'Please enter your name.' }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!message || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: 'Please include a few details about your project (at least 10 characters).' },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json({ ok: false, error: 'Message is too long.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not configured.');
    return NextResponse.json(
      { ok: false, error: 'Email delivery is not configured yet. Please email or call us directly.' },
      { status: 500 }
    );
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL || 'G Industries Website <onboarding@resend.dev>';

  const fields: Array<[string, string]> = [
    ['Name', name],
    ['Email', email],
    ...(phone ? ([['Phone', phone]] as Array<[string, string]>) : []),
    ...(company ? ([['Company', company]] as Array<[string, string]>) : []),
    ...(projectDetails ? ([['Project / Industry', projectDetails]] as Array<[string, string]>) : []),
  ];

  const htmlRows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#5B5F66;font-family:sans-serif;font-size:13px;white-space:nowrap;vertical-align:top;"><strong>${escapeHtml(
          label
        )}</strong></td><td style="padding:6px 0;color:#0C0404;font-family:sans-serif;font-size:14px;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join('');

  const html = `
    <div style="font-family:sans-serif;max-width:560px;">
      <h2 style="color:#000B24;font-family:sans-serif;margin-bottom:4px;">New project inquiry</h2>
      <p style="color:#5B5F66;margin-top:0;">Submitted via the G Industries website contact form.</p>
      <table style="border-collapse:collapse;margin:16px 0;">${htmlRows}</table>
      <div style="margin-top:8px;">
        <div style="color:#5B5F66;font-size:13px;font-family:sans-serif;margin-bottom:4px;"><strong>Message</strong></div>
        <div style="white-space:pre-wrap;color:#0C0404;font-family:sans-serif;font-size:14px;border-left:3px solid #F3C502;padding-left:12px;">${escapeHtml(
          message
        )}</div>
      </div>
    </div>
  `;

  const text = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: TO_ADDRESSES,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html,
      text,
    });

    if (error) {
      console.error('[contact] Resend error:', error);
      return NextResponse.json(
        { ok: false, error: 'Could not send your message right now. Please email or call us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json(
      { ok: false, error: 'Could not send your message right now. Please email or call us directly.' },
      { status: 500 }
    );
  }
}
