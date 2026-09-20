
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const hits = new Map<string, { count: number; ts: number }>();
function limited(ip: string, max = Number(process.env.RATE_LIMIT_PER_MIN || 10)) {
  const now = Date.now();
  const rec = hits.get(ip) || { count: 0, ts: now };
  if (now - rec.ts > 60_000) { rec.count = 0; rec.ts = now; }
  rec.count += 1; hits.set(ip, rec);
  return rec.count > max;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
});

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "local").split(",")[0].trim();
  if (limited(ip)) return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });

  const data = await req.json().catch(() => ({} as any));
  const { name = "", email = "", phone = "", address = "", date = "", size = "", service = "", message = "" } = data;
  const esc = (v: unknown) => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c] || c));
  if (!name || !email) return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });

  const html = `
    <h2>Neue Anfrage – NovaClean & Move</h2>
    <p><strong>Leistung:</strong> ${esc(service)}</p>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Telefon:</strong> ${esc(phone)}</p>
    <p><strong>E-Mail:</strong> ${esc(email)}</p>
    <p><strong>Adresse:</strong> ${esc(address)}</p>
    <p><strong>Wunschtermin:</strong> ${esc(date)}</p>
    <p><strong>Wohnungsgrösse:</strong> ${esc(size)}</p>
    <p><strong>Nachricht:</strong><br/>${esc(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    await transporter.sendMail({
      to: process.env.CONTACT_TO!,
      from: process.env.CONTACT_FROM!,
      replyTo: email,
      subject: `Anfrage von ${name} – NovaClean & Move`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Mail failed" }, { status: 500 });
  }
}
