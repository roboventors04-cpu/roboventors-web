import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SectionLabel } from "./router-CdpuYYCh.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "zod";
const TIMELINE = [["Year 1", "Launched", "Started with one classroom, a soldering kit, and a thesis: kids learn fastest by building."], ["Year 2", "First Gold", "Our students bring home their first gold at the Avishkaar National Competition."], ["Year 3", "Gold Again", "Back-to-back. The curriculum proves itself under national-level pressure."], ["Year 4", "Three Peat", "Three consecutive years of gold. 500+ students. 200+ projects shipped."]];
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(SectionLabel, { num: "// ABOUT", children: "Who We Are" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight", children: [
          "A robotics school built around ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "building things that work." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-5 md:pt-12 text-lg leading-relaxed text-muted-foreground", children: "We're a leading robotics education company empowering young minds to build, code, and innovate. Our students don't just attend classes — they ship working robots, satellites, and aircraft." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 md:px-10 py-24", children: [
      /* @__PURE__ */ jsx(SectionLabel, { num: "// 01", children: "Our Track Record" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight mb-8", children: "Four years, three gold medals." }),
      /* @__PURE__ */ jsx("div", { className: "hairline rounded-sm bg-card divide-y divide-border/60", children: TIMELINE.map(([y, t, d]) => /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-4 p-6 md:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2 text-2xl font-bold tabular-nums text-primary", children: y }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-3 font-semibold tracking-tight", children: t }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-7 text-muted-foreground", children: d })
      ] }, y)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border/60 bg-card/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-24 grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "RoboVentors by the numbers" }),
      [["3+", "Avishkaar Gold Medals"], ["500+", "Students Trained"], ["200+", "Projects Built"]].map(([v, l]) => /* @__PURE__ */ jsxs("div", { className: "hairline p-8 rounded-sm bg-background", children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold tracking-tight tabular-nums", children: v }),
        /* @__PURE__ */ jsx("div", { className: "label-caps text-muted-foreground mt-3", children: l })
      ] }, l))
    ] }) })
  ] });
}
export {
  About as component
};
