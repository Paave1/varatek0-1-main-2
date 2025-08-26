import type { NextRequest } from 'next/server';

// Simple email sender using Resend HTTP API to avoid adding SDK deps
// Set env vars: RESEND_API_KEY, CONTACT_TO, CONTACT_FROM

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO || 'info@varatek.fi';
    const FROM = process.env.CONTACT_FROM || 'no-reply@varatek.fi';

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ ok: false, error: 'Server email not configured' }), { status: 500 });
    }

    const subject = `Website contact: ${name}`;
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1a202c">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from: FROM, to: [TO], subject, html })
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ ok: false, error: text }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: e?.message || 'Unknown error' }), { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


