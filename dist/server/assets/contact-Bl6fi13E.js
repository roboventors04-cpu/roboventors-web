import { jsxs, jsx } from "react/jsx-runtime";
import { S as SectionLabel } from "./router-CdpuYYCh.js";
import { useState } from "react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "zod";
function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError(null);
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      organization: String(fd.get("org") || ""),
      domain: String(fd.get("domain") || ""),
      message: String(fd.get("brief") || "")
    };
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Could not send. Please try again.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsx(SectionLabel, { num: "// CONTACT", children: "Get in Touch" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight", children: [
        "Start your ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "robotics journey." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Ask us about course fees, group discounts, project enrollment, or competition prep. We respond within one working day." }),
      /* @__PURE__ */ jsxs("dl", { className: "mt-12 space-y-6 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { className: "label-caps text-muted-foreground mb-1", children: "Email" }),
          /* @__PURE__ */ jsx("dd", { children: "hello@roboventors.io" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { className: "label-caps text-muted-foreground mb-1", children: "Hours" }),
          /* @__PURE__ */ jsx("dd", { children: "Mon–Sat · 10:00–19:00" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { className: "label-caps text-muted-foreground mb-1", children: "For" }),
          /* @__PURE__ */ jsx("dd", { children: "Parents, schools, and partners" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "hairline rounded-sm bg-card p-6 md:p-10 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx(Field, { label: "Name", name: "name", required: true }),
        /* @__PURE__ */ jsx(Field, { label: "Organization / School", name: "org" })
      ] }),
      /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
      /* @__PURE__ */ jsx(Field, { label: "Interested in", name: "domain", as: "select", options: ["Robotics Foundation", "Advanced Robotics", "Competition Prep", "A specific project", "General enquiry"] }),
      /* @__PURE__ */ jsx(Field, { label: "Your message", name: "brief", as: "textarea", rows: 5, required: true }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-2", children: [
        /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground text-xs", children: "We never share your details" }),
        /* @__PURE__ */ jsxs("button", { type: "submit", disabled: status === "sending", className: "bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition inline-flex items-center gap-2 disabled:opacity-60", children: [
          status === "sending" ? "Sending…" : "Send Message",
          " ",
          /* @__PURE__ */ jsx("span", { children: "→" })
        ] })
      ] }),
      status === "sent" && /* @__PURE__ */ jsxs("div", { className: "hairline border-primary/60 bg-primary/10 text-sm rounded-sm p-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }),
        "Message received! Our team will get back to you within one working day."
      ] }),
      status === "error" && /* @__PURE__ */ jsx("div", { className: "hairline border-destructive/60 bg-destructive/10 text-sm rounded-sm p-4", children: error })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  as,
  rows,
  options
}) {
  const base = "w-full bg-input/50 hairline rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-muted-foreground/60";
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground mb-2 block", children: label }),
    as === "textarea" ? /* @__PURE__ */ jsx("textarea", { name, rows, required, className: base }) : as === "select" ? /* @__PURE__ */ jsx("select", { name, className: base, children: options?.map((o) => /* @__PURE__ */ jsx("option", { className: "bg-card", children: o }, o)) }) : /* @__PURE__ */ jsx("input", { name, type, required, className: base })
  ] });
}
export {
  Contact as component
};
