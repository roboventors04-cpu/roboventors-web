import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SiteShell";
import heroImg from "@/assets/hero-lab.jpg";
import { PROJECTS, COURSES } from "@/lib/projects-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoboVentors — Robotics Education for Young Innovators" },
      { name: "description", content: "Leading robotics education company. Three consecutive Avishkaar National gold medals. Build, code, and innovate with hands-on STEM projects." },
      { property: "og:title", content: "RoboVentors — Robotics Education" },
      { property: "og:description", content: "Empowering young minds to build, code, and innovate." },
    ],
    links: [{ rel: "canonical", href: "https://robo-venture-forge.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "RoboVentors",
          url: "https://robo-venture-forge.lovable.app/",
          description: "Robotics education company empowering young minds to build, code, and innovate.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "RoboVentors",
          url: "https://robo-venture-forge.lovable.app/",
        }),
      },
    ],
  }),
  component: Home,
});

const STATS = [
  { v: "3+", l: "Gold Medals" },
  { v: "500+", l: "Students" },
  { v: "200+", l: "Projects" },
  { v: "3 yrs", l: "At Avishkaar" },
];

const LAB_ZONES = [
  {
    code: "LZC-01",
    num: "// 01",
    title: "Laser Cutting",
    desc: "High-precision laser cutting machines for intricate designs on wood, acrylic, and metal. Create complex robot parts with micron-level accuracy.",
  },
  {
    code: "3DP-02",
    num: "// 02",
    title: "3D Printing",
    desc: "Industrial-grade 3D printers supporting PLA, ABS, and PETG materials. Rapid prototyping for robot chassis, custom parts, and mechanical components.",
  },
  {
    code: "FAB-03",
    num: "// 03",
    title: "Vinyl Cutting, Welding & Woodworks",
    desc: "Complete fabrication suite with vinyl cutters for precision decals, welding stations for metal assembly, and woodworking tools for structural builds.",
  },
  {
    code: "ELC-04",
    num: "// 04",
    title: "Electronics Zone",
    desc: "Arduino and Raspberry Pi workstations, complete sensor kits, and professional soldering stations.",
  },
  {
    code: "RAI-05",
    num: "// 05",
    title: "Robotics & AI Zone",
    desc: "Advanced kinematics lab, force/torque sensors, robotic grippers, ROS workstations, Lidar/SLAM systems, machine learning vision setups, and LLM-based robotic projects.",
  },
  {
    code: "ARV-06",
    num: "// 06",
    title: "AR/VR Zone",
    desc: "Immersive virtual reality stations for robot simulation, AR visualization tools, and 3D spatial computing.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="label-caps text-primary">3× Avishkaar National Gold</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Empowering young minds to <br />
              <span className="text-primary">build, code & innovate with robotics.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              RoboVentors is a leading robotics education company. We turn curious students into competition-ready
              engineers — three consecutive years of gold medals at the Avishkaar National Competition prove it.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/courses" className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition inline-flex items-center gap-2">
                Start Your Journey <span>→</span>
              </Link>
              <Link to="/projects" className="hairline px-6 py-3 rounded-sm font-semibold hover:border-primary hover:text-primary transition">
                Explore Projects
              </Link>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 hairline rounded-sm overflow-hidden bg-card">
            {STATS.map((s) => (
              <div key={s.l} className="bg-card p-6">
                <div className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums">{s.v}</div>
                <div className="label-caps text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <SectionLabel num="// 01">Our Projects</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
              Hands-on learning through <span className="text-muted-foreground">cutting-edge robotics.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From satellites to flying machines — every project builds real-world skills students carry into
            engineering, science, and competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Link
              key={p.code}
              to="/projects"
              hash={p.slug}
              className="group hairline rounded-sm overflow-hidden bg-card hover:border-primary transition flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-1 relative">
                <img src={p.img} alt={p.title} width={1280} height={960} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-4 left-4 hairline bg-background/80 backdrop-blur px-2.5 py-1 label-caps text-primary text-[10px]">{p.code}</div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.short}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Tag>{p.level}</Tag>
                  <Tag>{p.age}</Tag>
                  <Tag>{p.duration}</Tag>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects" className="hairline inline-flex items-center gap-2 px-6 py-3 rounded-sm font-semibold hover:border-primary hover:text-primary transition">
            See full project details <span>→</span>
          </Link>
        </div>
      </section>

      {/* COURSES */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <SectionLabel num="// 02">Our Courses</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
                Structured paths for <span className="text-muted-foreground">every skill level.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Start your robotics journey today. Group discounts and flexible payment plans available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {COURSES.map((c) => (
              <div key={c.code} className="hairline rounded-sm bg-background p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="label-caps text-primary">{c.code}</span>
                  <span className="hairline px-2 py-1 text-xs rounded-sm">{c.tag}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <div className="flex gap-2 flex-wrap pt-2">
                  <Tag>{c.duration}</Tag>
                  <Tag>{c.age}</Tag>
                </div>
                <Link to="/contact" className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2.5 rounded-sm font-semibold hover:brightness-110 transition gap-2">
                  Enroll Now <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Contact us for course fees, group discounts, and flexible payment plans.
          </p>
        </div>
      </section>

      {/* TECH LAB */}
      <section className="mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20">
        <div className="hairline rounded-sm p-10 md:p-14 bg-card relative overflow-hidden">
          <div className="absolute -left-24 -bottom-24 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <SectionLabel num="// 03">Tech-Innovation Lab</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Where ideas become <span className="text-primary">working robots.</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
                Six specialized zones — laser cutting, 3D printing, fabrication, electronics, robotics & AI, and AR/VR —
                equipped with industry-standard tools for every stage of a build.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Laser Cutting", "3D Printing", "Electronics", "Robotics & AI", "AR/VR"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 md:text-right">
              <p className="text-muted-foreground mb-6 max-w-md md:ml-auto">
                Take a free guided walkthrough and see the equipment behind every project.
              </p>
              <div className="flex md:justify-end flex-wrap gap-3">
                <Link to="/tech-lab" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
                  Book a Free Tour <span>→</span>
                </Link>
                <Link to="/tech-lab" className="hairline inline-flex items-center gap-2 px-6 py-3 rounded-sm font-semibold hover:border-primary hover:text-primary transition">
                  Explore the Lab
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Lab zone cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LAB_ZONES.map((z) => (
            <div
              key={z.code}
              className="group hairline rounded-sm bg-background p-6 flex flex-col gap-3 hover:border-primary transition"
            >
              <div className="flex items-center justify-between">
                <span className="label-caps text-primary text-xs">{z.code}</span>
                <span className="label-caps text-muted-foreground text-xs">{z.num}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{z.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{z.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20">
        <div className="hairline rounded-sm p-10 md:p-16 bg-card relative overflow-hidden">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-end">
            <div>
              <SectionLabel num="// 04">Next Cohort</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ready to build the <br /> next gold medal?
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-muted-foreground mb-6 max-w-md md:ml-auto">
                Talk to our team about cohorts, fees, and the right starting point for your child.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
                Get in touch <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="hairline px-2.5 py-1 text-xs rounded-sm text-muted-foreground">{children}</span>;
}
