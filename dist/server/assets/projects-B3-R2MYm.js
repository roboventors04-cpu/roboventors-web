import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SectionLabel, P as PROJECTS } from "./router-CdpuYYCh.js";
import "@tanstack/react-query";
import "zod";
function Projects() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsx(SectionLabel, { num: "// PROJECTS", children: "What We Build" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight max-w-3xl", children: [
        "Hands-on learning through ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "cutting-edge robotics." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground", children: "From satellites to flying machines, every project builds real-world skills. Students leave with a working build, a portfolio piece, and a competition-ready mindset." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-24 space-y-32", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxs("section", { id: p.slug, className: `grid md:grid-cols-12 gap-10 items-center scroll-mt-24 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxs("div", { className: "hairline rounded-sm overflow-hidden bg-card relative", children: [
        /* @__PURE__ */ jsx("img", { src: p.img, alt: p.title, width: 1280, height: 960, loading: "lazy", className: "w-full h-auto" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 hairline bg-background/80 backdrop-blur px-3 py-1.5 label-caps text-primary", children: p.code })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx(SectionLabel, { num: `// 0${i + 1}`, children: "Project" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: p.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-5", children: [
          /* @__PURE__ */ jsx(Pip, { children: p.level }),
          /* @__PURE__ */ jsx(Pip, { children: p.age }),
          /* @__PURE__ */ jsx(Pip, { children: p.duration })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: p.desc }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/60 hairline rounded-sm overflow-hidden", children: p.skills.map((s) => /* @__PURE__ */ jsxs("li", { className: "bg-card p-3.5 flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
          s
        ] }, s)) }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm font-semibold hover:brightness-110 transition", children: [
          "Enroll in this project ",
          /* @__PURE__ */ jsx("span", { children: "→" })
        ] })
      ] })
    ] }, p.code)) })
  ] });
}
function Pip({
  children
}) {
  return /* @__PURE__ */ jsxs("span", { className: "hairline inline-flex items-center gap-2 px-3 py-1 text-xs rounded-sm", children: [
    /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
    children
  ] });
}
export {
  Projects as component
};
