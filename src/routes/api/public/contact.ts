import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  domain: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

const NOTIFY_TO = "roboventors04@gmail.com";
const GMAIL_GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

function toBase64Url(str: string): string {
  const b64 = Buffer.from(str, "utf-8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function buildRaw(opts: { to: string; replyTo?: string; subject: string; body: string }): string {
  const headers = [
    `To: ${opts.to}`,
    opts.replyTo ? `Reply-To: ${opts.replyTo}` : "",
    `Subject: ${opts.subject}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "MIME-Version: 1.0",
  ].filter(Boolean);
  return toBase64Url(headers.join("\r\n") + "\r\n\r\n" + opts.body);
}

/** Strip HTML tags and collapse extra whitespace. */
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function sanitizePayload(raw: unknown) {
  const r = raw as Record<string, unknown>;
  return {
    name: sanitize(String(r.name ?? "")),
    email: String(r.email ?? "").trim().toLowerCase(),
    organization: sanitize(String(r.organization ?? "")),
    domain: sanitize(String(r.domain ?? "")),
    message: sanitize(String(r.message ?? "")),
  };
}

async function sendNotificationEmail(payload: z.infer<typeof ContactSchema>) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY_1;
  if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
    console.error("missing email env vars", {
      hasLovable: !!LOVABLE_API_KEY,
      hasGmail: !!GOOGLE_MAIL_API_KEY,
    });
    return;
  }

  const body = [
    `New contact submission from RoboVentors website`,
    ``,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.organization ? `Organization: ${payload.organization}` : null,
    payload.domain ? `Interested in: ${payload.domain}` : null,
    ``,
    `Message:`,
    payload.message,
  ].filter((l) => l !== null).join("\n");

  const raw = buildRaw({
    to: NOTIFY_TO,
    replyTo: payload.email,
    subject: `New contact form: ${payload.name}`,
    body,
  });

  const res = await fetch(`${GMAIL_GATEWAY}/users/me/messages/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`gmail send failed [${res.status}]: ${text}`);
  }
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const raw = await request.json();
          const sanitized = sanitizePayload(raw);
          const parsed = ContactSchema.safeParse(sanitized);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ error: "Invalid input", issues: parsed.error.issues }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          try {
            await sendNotificationEmail(parsed.data);
          } catch (e) {
            console.error("notification email error", e);
            return new Response(JSON.stringify({ error: "Failed to send" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }

          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (e) {
          console.error("contact error", e);
          return new Response(JSON.stringify({ error: "Bad request" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
