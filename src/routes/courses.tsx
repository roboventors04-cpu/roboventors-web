import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SiteShell";
import { COURSES } from "@/lib/projects-data";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — RoboVentors" },
      { name: "description", content: "Robotics Foundation, Advanced Robotics, and Competition Prep courses for students 8–18." },
      { property: "og:title", content: "RoboVentors Courses" },
      { property: "og:description", content: "Structured learning paths for every skill level." },
    ],
    links: [{ rel: "canonical", href: "https://robo-venture-forge.lovable.app/courses" }],
    scripts: COURSES.map((c) => ({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: c.title,
        description: c.desc,
        provider: { "@type": "Organization", name: "RoboVentors", sameAs: "https://robo-venture-forge.lovable.app/" },
      }),
    })),
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28">
          <SectionLabel num="// COURSES">Learning Paths</SectionLabel>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Structured paths for <span className="text-primary">every skill level.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Start your robotics journey today. Whether your child is touching a circuit for the first time or
            preparing for nationals — there's a track built for them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-10 py-20 grid md:grid-cols-3 gap-6">
        <h2 className="sr-only md:col-span-3">Our Courses</h2>
        {COURSES.map((c) => (
          <div key={c.code} className="hairline rounded-sm bg-card p-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="label-caps text-primary">{c.code}</span>
              <span className="hairline px-2 py-1 text-xs rounded-sm">{c.tag}</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            <ul className="mt-2 space-y-2 text-sm">
              {c.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary" />{h}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 flex-wrap pt-3 border-t border-border/60 mt-3">
              <span className="hairline px-2.5 py-1 text-xs rounded-sm text-muted-foreground">{c.duration}</span>
              <span className="hairline px-2.5 py-1 text-xs rounded-sm text-muted-foreground">{c.age}</span>
            </div>
            <Link to="/contact" className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2.5 rounded-sm font-semibold hover:brightness-110 transition gap-2">
              Enroll Now <span>→</span>
            </Link>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-10 pb-24">
        <div className="hairline rounded-sm p-8 md:p-12 bg-card text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Need pricing or group discounts?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Contact us for course fees, group discounts, and flexible payment plans tailored to schools and parents.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
            Talk to us <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
