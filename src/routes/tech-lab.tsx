import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SiteShell";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

export const Route = createFileRoute("/tech-lab")({
  head: () => ({
    meta: [
      { title: "Tech Lab — RoboVentors" },
      { name: "description", content: "Explore our state-of-the-art Tech-Innovation Lab with laser cutting, 3D printing, electronics, robotics, AI, and AR/VR zones." },
      { property: "og:title", content: "RoboVentors Tech Lab" },
      { property: "og:description", content: "State-of-the-art robotics lab with laser cutting, 3D printing, electronics, AI, and AR/VR zones." },
    ],
    links: [{ rel: "canonical", href: "https://robo-venture-forge.lovable.app/tech-lab" }],
  }),
  component: TechLab,
});

const ZONES = [
  {
    code: "LZC-01",
    title: "Laser Cutting",
    desc: "High-precision laser cutting machines for intricate designs on wood, acrylic, and metal. Create complex robot parts with micron-level accuracy.",
  },
  {
    code: "3DP-02",
    title: "3D Printing",
    desc: "Industrial-grade 3D printers supporting PLA, ABS, and PETG materials. Rapid prototyping for robot chassis, custom parts, and mechanical components.",
  },
  {
    code: "FAB-03",
    title: "Vinyl Cutting, Welding & Woodworks",
    desc: "Complete fabrication suite with vinyl cutters for precision decals, welding stations for metal assembly, and woodworking tools for structural builds.",
  },
  {
    code: "ELC-04",
    title: "Electronics Zone",
    desc: "Arduino and Raspberry Pi workstations, complete sensor kits, and professional soldering stations.",
  },
  {
    code: "RAI-05",
    title: "Robotics & AI Zone",
    desc: "Advanced kinematics lab, force/torque sensors, robotic grippers, ROS workstations, Lidar/SLAM systems, machine learning vision setups, and LLM-based robotic projects.",
  },
  {
    code: "ARV-06",
    title: "AR/VR Zone",
    desc: "Immersive virtual reality stations for robot simulation, AR visualization tools, and 3D spatial computing.",
  },
];

function TechLab() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <SectionLabel num="// LAB">Tech-Innovation Lab</SectionLabel>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Where ideas become <span className="text-primary">working robots.</span>
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-12 text-lg leading-relaxed text-muted-foreground">
            State-of-the-art facility designed with specialized zones for every aspect of robotics learning.
            From conceptualization to creation, our lab provides industry-standard equipment and an immersive learning environment.
            <div className="mt-8">
              <TourDialog
                trigger={
                  <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
                    Book a Free Tour <span>→</span>
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {ZONES.map((z, i) => (
            <div key={z.code} className="hairline rounded-sm bg-card p-6 md:p-8 flex flex-col gap-4 hover:border-primary transition">
              <div className="flex items-center justify-between">
                <span className="label-caps text-primary">{z.code}</span>
                <span className="text-xs text-muted-foreground tabular-nums">// 0{i + 1}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{z.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{z.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20">
          <div className="hairline rounded-sm p-10 md:p-14 bg-background relative overflow-hidden">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-end">
              <div>
                <SectionLabel num="// VISIT">Book a Tour</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  See the lab in action.
                </h2>
              </div>
              <div className="md:text-right">
                <p className="text-muted-foreground mb-6 max-w-md md:ml-auto">
                  Schedule a guided walkthrough of our Tech-Innovation Lab and meet the equipment behind every build.
                </p>
                <TourDialog
                  trigger={
                    <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
                      Book a Free Tour <span>→</span>
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TourDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const date = String(fd.get("date") || "");
    const visitors = String(fd.get("visitors") || "");
    const notes = String(fd.get("notes") || "");

    const message = [
      `Tech Lab Tour Request`,
      phone ? `Phone: ${phone}` : null,
      date ? `Preferred date/time: ${date}` : null,
      visitors ? `Number of visitors: ${visitors}` : null,
      ``,
      notes ? `Notes: ${notes}` : `No additional notes.`,
    ].filter((l) => l !== null).join("\n");

    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          domain: "Tech Lab Tour",
          message,
        }),
      });
      if (!res.ok) throw new Error("Could not submit. Please try again.");
      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const base = "w-full bg-input/50 hairline rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-muted-foreground/60";

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) {
          setStatus("idle");
          setError(null);
        }
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Book a Free Tech Lab Tour</DialogTitle>
          <DialogDescription>
            Tell us a bit about you and when you'd like to visit. We'll confirm by email within one working day.
          </DialogDescription>
        </DialogHeader>

        {status === "sent" ? (
          <div className="hairline border-primary/60 bg-primary/10 text-sm rounded-sm p-4">
            Request received! We'll email you shortly to confirm your tour.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="label-caps text-muted-foreground mb-2 block">Name</span>
              <input name="name" required className={base} />
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="label-caps text-muted-foreground mb-2 block">Email</span>
                <input name="email" type="email" required className={base} />
              </label>
              <label className="block">
                <span className="label-caps text-muted-foreground mb-2 block">Phone</span>
                <input name="phone" type="tel" required className={base} />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="label-caps text-muted-foreground mb-2 block">Preferred date/time</span>
                <input name="date" placeholder="e.g. Sat 24 May, 11am" className={base} />
              </label>
              <label className="block">
                <span className="label-caps text-muted-foreground mb-2 block">Number of visitors</span>
                <input name="visitors" type="number" min={1} required defaultValue={1} className={base} />
              </label>
            </div>
            <label className="block">
              <span className="label-caps text-muted-foreground mb-2 block">Notes (optional)</span>
              <textarea name="notes" rows={3} className={base} />
            </label>

            {status === "error" && (
              <div className="hairline border-destructive/60 bg-destructive/10 text-sm rounded-sm p-3">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition inline-flex items-center gap-2 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Request Tour"} <span>→</span>
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
