import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SectionLabel, P as PROJECTS, C as COURSES } from "./router-CdpuYYCh.js";
import "@tanstack/react-query";
import "zod";
const heroImg = "/assets/hero-lab-CyE9dLi1.jpg";
const STATS = [{
  v: "3+",
  l: "Gold Medals"
}, {
  v: "500+",
  l: "Students"
}, {
  v: "200+",
  l: "Projects"
}, {
  v: "3 yrs",
  l: "At Avishkaar"
}];
const LAB_ZONES = [{
  code: "LZC-01",
  num: "// 01",
  title: "Laser Cutting",
  desc: "High-precision laser cutting machines for intricate designs on wood, acrylic, and metal. Create complex robot parts with micron-level accuracy."
}, {
  code: "3DP-02",
  num: "// 02",
  title: "3D Printing",
  desc: "Industrial-grade 3D printers supporting PLA, ABS, and PETG materials. Rapid prototyping for robot chassis, custom parts, and mechanical components."
}, {
  code: "FAB-03",
  num: "// 03",
  title: "Vinyl Cutting, Welding & Woodworks",
  desc: "Complete fabrication suite with vinyl cutters for precision decals, welding stations for metal assembly, and woodworking tools for structural builds."
}, {
  code: "ELC-04",
  num: "// 04",
  title: "Electronics Zone",
  desc: "Arduino and Raspberry Pi workstations, complete sensor kits, and professional soldering stations."
}, {
  code: "RAI-05",
  num: "// 05",
  title: "Robotics & AI Zone",
  desc: "Advanced kinematics lab, force/torque sensors, robotic grippers, ROS workstations, Lidar/SLAM systems, machine learning vision setups, and LLM-based robotic projects."
}, {
  code: "ARV-06",
  num: "// 06",
  title: "AR/VR Zone",
  desc: "Immersive virtual reality stations for robot simulation, AR visualization tools, and 3D spatial computing."
}];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "", width: 1920, height: 1080, className: "w-full h-full object-cover opacity-50" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "label-caps text-primary", children: "3× Avishkaar National Gold" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]", children: [
            "Empowering young minds to ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "build, code & innovate with robotics." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed", children: "RoboVentors is a leading robotics education company. We turn curious students into competition-ready engineers — three consecutive years of gold medals at the Avishkaar National Competition prove it." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/courses", className: "bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition inline-flex items-center gap-2", children: [
              "Start Your Journey ",
              /* @__PURE__ */ jsx("span", { children: "→" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/projects", className: "hairline px-6 py-3 rounded-sm font-semibold hover:border-primary hover:text-primary transition", children: "Explore Projects" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 hairline rounded-sm overflow-hidden bg-card", children: STATS.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-card p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold tracking-tight tabular-nums", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "label-caps text-muted-foreground mt-2", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionLabel, { num: "// 01", children: "Our Projects" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight max-w-2xl", children: [
            "Hands-on learning through ",
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "cutting-edge robotics." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-muted-foreground", children: "From satellites to flying machines — every project builds real-world skills students carry into engineering, science, and competition." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: PROJECTS.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/projects", hash: p.slug, className: "group hairline rounded-sm overflow-hidden bg-card hover:border-primary transition flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-[16/10] overflow-hidden bg-surface-1 relative", children: [
          /* @__PURE__ */ jsx("img", { src: p.img, alt: p.title, width: 1280, height: 960, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition duration-700" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 hairline bg-background/80 backdrop-blur px-2.5 py-1 label-caps text-primary text-[10px]", children: p.code })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold tracking-tight", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.short }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
            /* @__PURE__ */ jsx(Tag, { children: p.level }),
            /* @__PURE__ */ jsx(Tag, { children: p.age }),
            /* @__PURE__ */ jsx(Tag, { children: p.duration })
          ] })
        ] })
      ] }, p.code)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "hairline inline-flex items-center gap-2 px-6 py-3 rounded-sm font-semibold hover:border-primary hover:text-primary transition", children: [
        "See full project details ",
        /* @__PURE__ */ jsx("span", { children: "→" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-border/60 bg-card/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionLabel, { num: "// 02", children: "Our Courses" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight max-w-2xl", children: [
            "Structured paths for ",
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "every skill level." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-muted-foreground", children: "Start your robotics journey today. Group discounts and flexible payment plans available." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: COURSES.map((c) => /* @__PURE__ */ jsxs("div", { className: "hairline rounded-sm bg-background p-6 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "label-caps text-primary", children: c.code }),
          /* @__PURE__ */ jsx("span", { className: "hairline px-2 py-1 text-xs rounded-sm", children: c.tag })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold tracking-tight", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: c.desc }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-wrap pt-2", children: [
          /* @__PURE__ */ jsx(Tag, { children: c.duration }),
          /* @__PURE__ */ jsx(Tag, { children: c.age })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2.5 rounded-sm font-semibold hover:brightness-110 transition gap-2", children: [
          "Enroll Now ",
          /* @__PURE__ */ jsx("span", { children: "→" })
        ] })
      ] }, c.code)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-center text-sm text-muted-foreground", children: "Contact us for course fees, group discounts, and flexible payment plans." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "hairline rounded-sm p-10 md:p-14 bg-card relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-24 -bottom-24 size-72 rounded-full bg-primary/20 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-12 gap-10 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
            /* @__PURE__ */ jsx(SectionLabel, { num: "// 03", children: "Tech-Innovation Lab" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
              "Where ideas become ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "working robots." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground max-w-xl leading-relaxed", children: "Six specialized zones — laser cutting, 3D printing, fabrication, electronics, robotics & AI, and AR/VR — equipped with industry-standard tools for every stage of a build." }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: ["Laser Cutting", "3D Printing", "Electronics", "Robotics & AI", "AR/VR"].map((t) => /* @__PURE__ */ jsx(Tag, { children: t }, t)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 md:text-right", children: [
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-md md:ml-auto", children: "Take a free guided walkthrough and see the equipment behind every project." }),
            /* @__PURE__ */ jsxs("div", { className: "flex md:justify-end flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxs(Link, { to: "/tech-lab", className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition", children: [
                "Book a Free Tour ",
                /* @__PURE__ */ jsx("span", { children: "→" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/tech-lab", className: "hairline inline-flex items-center gap-2 px-6 py-3 rounded-sm font-semibold hover:border-primary hover:text-primary transition", children: "Explore the Lab" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: LAB_ZONES.map((z) => /* @__PURE__ */ jsxs("div", { className: "group hairline rounded-sm bg-background p-6 flex flex-col gap-3 hover:border-primary transition", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "label-caps text-primary text-xs", children: z.code }),
          /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground text-xs", children: z.num })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold tracking-tight", children: z.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: z.desc })
      ] }, z.code)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "hairline rounded-sm p-10 md:p-16 bg-card relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-2 gap-10 items-end", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionLabel, { num: "// 04", children: "Next Cohort" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
            "Ready to build the ",
            /* @__PURE__ */ jsx("br", {}),
            " next gold medal?"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:text-right", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-md md:ml-auto", children: "Talk to our team about cohorts, fees, and the right starting point for your child." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition", children: [
            "Get in touch ",
            /* @__PURE__ */ jsx("span", { children: "→" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function Tag({
  children
}) {
  return /* @__PURE__ */ jsx("span", { className: "hairline px-2.5 py-1 text-xs rounded-sm text-muted-foreground", children });
}
export {
  Home as component
};
