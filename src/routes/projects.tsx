import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SiteShell";
import { PROJECTS } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — RoboVentors" },
      { name: "description", content: "CubeSat satellites, humanoid robots, smart homes, and flying machines — hands-on robotics projects for students." },
      { property: "og:title", content: "RoboVentors Projects" },
      { property: "og:description", content: "Hands-on learning through cutting-edge robotics projects." },
    ],
    links: [{ rel: "canonical", href: "https://robo-venture-forge.lovable.app/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28">
          <SectionLabel num="// PROJECTS">What We Build</SectionLabel>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Hands-on learning through <span className="text-primary">cutting-edge robotics.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From satellites to flying machines, every project builds real-world skills. Students leave with a
            working build, a portfolio piece, and a competition-ready mindset.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-10 py-24 space-y-32">
        {PROJECTS.map((p, i) => (
          <section key={p.code} id={p.slug} className={`grid md:grid-cols-12 gap-10 items-center scroll-mt-24 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="md:col-span-7">
              <div className="hairline rounded-sm overflow-hidden bg-card relative">
                <img src={p.img} alt={p.title} width={1280} height={960} loading="lazy" className="w-full h-auto" />
                <div className="absolute top-4 left-4 hairline bg-background/80 backdrop-blur px-3 py-1.5 label-caps text-primary">{p.code}</div>
              </div>
            </div>
            <div className="md:col-span-5">
              <SectionLabel num={`// 0${i + 1}`}>Project</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{p.title}</h2>
              <div className="flex flex-wrap gap-2 mt-5">
                <Pip>{p.level}</Pip>
                <Pip>{p.age}</Pip>
                <Pip>{p.duration}</Pip>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/60 hairline rounded-sm overflow-hidden">
                {p.skills.map((s) => (
                  <li key={s} className="bg-card p-3.5 flex items-center gap-3 text-sm">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm font-semibold hover:brightness-110 transition">
                Enroll in this project <span>→</span>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function Pip({ children }: { children: React.ReactNode }) {
  return (
    <span className="hairline inline-flex items-center gap-2 px-3 py-1 text-xs rounded-sm">
      <span className="size-1.5 rounded-full bg-primary" />{children}
    </span>
  );
}
