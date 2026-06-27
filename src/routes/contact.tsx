import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SiteShell";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RoboVentors" },
      { name: "description", content: "Get in touch about courses, projects, fees, and group discounts." },
      { property: "og:title", content: "Contact RoboVentors" },
      { property: "og:description", content: "Talk to our robotics education team." },
    ],
    links: [{ rel: "canonical", href: "https://robo-venture-forge.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "RoboVentors",
          email: "hello@roboventors.io",
          url: "https://robo-venture-forge.lovable.app/",
          openingHours: "Mo-Sa 10:00-19:00",
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending"); setError(null);
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      organization: String(fd.get("org") || ""),
      domain: String(fd.get("domain") || ""),
      message: String(fd.get("brief") || ""),
    };
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Could not send. Please try again.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <SectionLabel num="// CONTACT">Get in Touch</SectionLabel>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Start your <span className="text-primary">robotics journey.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Ask us about course fees, group discounts, project enrollment, or competition prep. We respond within
          one working day.
        </p>
        <dl className="mt-12 space-y-6 text-sm">
          <div>
            <dt className="label-caps text-muted-foreground mb-1">Email</dt>
            <dd>hello@roboventors.io</dd>
          </div>
          <div>
            <dt className="label-caps text-muted-foreground mb-1">Hours</dt>
            <dd>Mon–Sat · 10:00–19:00</dd>
          </div>
          <div>
            <dt className="label-caps text-muted-foreground mb-1">For</dt>
            <dd>Parents, schools, and partners</dd>
          </div>
        </dl>
      </div>

      <div className="md:col-span-7">
        <form onSubmit={onSubmit} className="hairline rounded-sm bg-card p-6 md:p-10 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Name" name="name" required />
            <Field label="Organization / School" name="org" />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field
            label="Interested in"
            name="domain"
            as="select"
            options={["Robotics Foundation", "Advanced Robotics", "Competition Prep", "A specific project", "General enquiry"]}
          />
          <Field label="Your message" name="brief" as="textarea" rows={5} required />

          <div className="flex items-center justify-between pt-2">
            <span className="label-caps text-muted-foreground text-xs">We never share your details</span>
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition inline-flex items-center gap-2 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"} <span>→</span>
            </button>
          </div>

          {status === "sent" && (
            <div className="hairline border-primary/60 bg-primary/10 text-sm rounded-sm p-4 flex items-center gap-3">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Message received! Our team will get back to you within one working day.
            </div>
          )}
          {status === "error" && (
            <div className="hairline border-destructive/60 bg-destructive/10 text-sm rounded-sm p-4">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, as, rows, options,
}: {
  label: string; name: string; type?: string; required?: boolean;
  as?: "textarea" | "select"; rows?: number; options?: string[];
}) {
  const base = "w-full bg-input/50 hairline rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-muted-foreground/60";
  return (
    <label className="block">
      <span className="label-caps text-muted-foreground mb-2 block">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={rows} required={required} className={base} />
      ) : as === "select" ? (
        <select name={name} className={base}>
          {options?.map((o) => <option key={o} className="bg-card">{o}</option>)}
        </select>
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
