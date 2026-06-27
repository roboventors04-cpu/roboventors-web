import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SectionLabel, C as COURSES } from "./router-CdpuYYCh.js";
import "@tanstack/react-query";
import "zod";
function Courses() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsx(SectionLabel, { num: "// COURSES", children: "Learning Paths" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight max-w-3xl", children: [
        "Structured paths for ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "every skill level." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground", children: "Start your robotics journey today. Whether your child is touching a circuit for the first time or preparing for nationals — there's a track built for them." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 md:px-10 py-20 grid md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "sr-only md:col-span-3", children: "Our Courses" }),
      COURSES.map((c) => /* @__PURE__ */ jsxs("div", { className: "hairline rounded-sm bg-card p-7 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "label-caps text-primary", children: c.code }),
          /* @__PURE__ */ jsx("span", { className: "hairline px-2 py-1 text-xs rounded-sm", children: c.tag })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold tracking-tight", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c.desc }),
        /* @__PURE__ */ jsx("ul", { className: "mt-2 space-y-2 text-sm", children: c.highlights.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
          h
        ] }, h)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-wrap pt-3 border-t border-border/60 mt-3", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline px-2.5 py-1 text-xs rounded-sm text-muted-foreground", children: c.duration }),
          /* @__PURE__ */ jsx("span", { className: "hairline px-2.5 py-1 text-xs rounded-sm text-muted-foreground", children: c.age })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2.5 rounded-sm font-semibold hover:brightness-110 transition gap-2", children: [
          "Enroll Now ",
          /* @__PURE__ */ jsx("span", { children: "→" })
        ] })
      ] }, c.code))
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 md:px-10 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "hairline rounded-sm p-8 md:p-12 bg-card text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold tracking-tight", children: "Need pricing or group discounts?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Contact us for course fees, group discounts, and flexible payment plans tailored to schools and parents." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition", children: [
        "Talk to us ",
        /* @__PURE__ */ jsx("span", { children: "→" })
      ] })
    ] }) })
  ] });
}
export {
  Courses as component
};
