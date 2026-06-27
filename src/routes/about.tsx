import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — RoboVentors" },
      { name: "description", content: "RoboVentors is a leading robotics education company with three consecutive Avishkaar National gold medals." },
      { property: "og:title", content: "About RoboVentors" },
      { property: "og:description", content: "Meet the team behind three consecutive Avishkaar National gold medals — 500+ students, 200+ projects shipped." },
    ],
    links: [{ rel: "canonical", href: "https://robo-venture-forge.lovable.app/about" }],
  }),
  component: About,
});

const TIMELINE = [
  ["Year 1", "Launched", "Started with one classroom, a soldering kit, and a thesis: kids learn fastest by building."],
  ["Year 2", "First Gold", "Our students bring home their first gold at the Avishkaar National Competition."],
  ["Year 3", "Gold Again", "Back-to-back. The curriculum proves itself under national-level pressure."],
  ["Year 4", "Three Peat", "Three consecutive years of gold. 500+ students. 200+ projects shipped."],
];

function About() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <SectionLabel num="// ABOUT">Who We Are</SectionLabel>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              A robotics school built around <span className="text-primary">building things that work.</span>
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-12 text-lg leading-relaxed text-muted-foreground">
            We're a leading robotics education company empowering young minds to build, code, and innovate.
            Our students don't just attend classes — they ship working robots, satellites, and aircraft.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-10 py-24">
        <SectionLabel num="// 01">Our Track Record</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Four years, three gold medals.</h2>
        <div className="hairline rounded-sm bg-card divide-y divide-border/60">
          {TIMELINE.map(([y, t, d]) => (
            <div key={y} className="grid md:grid-cols-12 gap-4 p-6 md:p-8">
              <div className="md:col-span-2 text-2xl font-bold tabular-nums text-primary">{y}</div>
              <div className="md:col-span-3 font-semibold tracking-tight">{t}</div>
              <div className="md:col-span-7 text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-24 grid md:grid-cols-3 gap-8">
          <h2 className="sr-only">RoboVentors by the numbers</h2>
          {[
            ["3+", "Avishkaar Gold Medals"],
            ["500+", "Students Trained"],
            ["200+", "Projects Built"],
          ].map(([v, l]) => (
            <div key={l} className="hairline p-8 rounded-sm bg-background">
              <div className="text-5xl font-bold tracking-tight tabular-nums">{v}</div>
              <div className="label-caps text-muted-foreground mt-3">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
