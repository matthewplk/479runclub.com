import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Very simple in-memory rate limit (per serverless instance)
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;           // 5 requests per window

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function getClientIp(req: Request) {
  // Vercel/Next commonly forward IP here:
  const xf = req.headers.get("x-forwarded-for");
  if (!xf) return "unknown";
  // x-forwarded-for can be "ip, proxy1, proxy2"
  return xf.split(",")[0].trim();
}

function rateLimit(req: Request) {
  const key = getClientIp(req);
  const now = Date.now();

  const current = buckets.get(key);
  if (!current || now > current.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true, remaining: RATE_LIMIT_MAX - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return { ok: false, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  buckets.set(key, current);
  return { ok: true, remaining: RATE_LIMIT_MAX - current.count, resetAt: current.resetAt };
}


export async function POST(req: Request) {

  const rl = rateLimit(req);
    if (!rl.ok) {
    return NextResponse.json(
        { error: "Too many requests. Please try again soon." },
        {
        status: 429,
        headers: {
            "Retry-After": Math.ceil((rl.resetAt - Date.now()) / 1000).toString(),
        },
        }
    );
    }
  

  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await resend.emails.send({
    from: "479 Run Club <onboarding@resend.dev>",
    to: ["admin@479runclub.com"],
    subject: "New Contact Form Submission",
    replyTo: email.toString(),
    html: `
      <h3>New Message from 479 Run Club</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
