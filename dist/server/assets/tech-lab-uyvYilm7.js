import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { S as SectionLabel } from "./router-CdpuYYCh.js";
import * as React from "react";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "zod";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const ZONES = [{
  code: "LZC-01",
  title: "Laser Cutting",
  desc: "High-precision laser cutting machines for intricate designs on wood, acrylic, and metal. Create complex robot parts with micron-level accuracy."
}, {
  code: "3DP-02",
  title: "3D Printing",
  desc: "Industrial-grade 3D printers supporting PLA, ABS, and PETG materials. Rapid prototyping for robot chassis, custom parts, and mechanical components."
}, {
  code: "FAB-03",
  title: "Vinyl Cutting, Welding & Woodworks",
  desc: "Complete fabrication suite with vinyl cutters for precision decals, welding stations for metal assembly, and woodworking tools for structural builds."
}, {
  code: "ELC-04",
  title: "Electronics Zone",
  desc: "Arduino and Raspberry Pi workstations, complete sensor kits, and professional soldering stations."
}, {
  code: "RAI-05",
  title: "Robotics & AI Zone",
  desc: "Advanced kinematics lab, force/torque sensors, robotic grippers, ROS workstations, Lidar/SLAM systems, machine learning vision setups, and LLM-based robotic projects."
}, {
  code: "ARV-06",
  title: "AR/VR Zone",
  desc: "Immersive virtual reality stations for robot simulation, AR visualization tools, and 3D spatial computing."
}];
function TechLab() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx(SectionLabel, { num: "// LAB", children: "Tech-Innovation Lab" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight", children: [
          "Where ideas become ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "working robots." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 md:pt-12 text-lg leading-relaxed text-muted-foreground", children: [
        "State-of-the-art facility designed with specialized zones for every aspect of robotics learning. From conceptualization to creation, our lab provides industry-standard equipment and an immersive learning environment.",
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(TourDialog, { trigger: /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition", children: [
          "Book a Free Tour ",
          /* @__PURE__ */ jsx("span", { children: "→" })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: ZONES.map((z, i) => /* @__PURE__ */ jsxs("div", { className: "hairline rounded-sm bg-card p-6 md:p-8 flex flex-col gap-4 hover:border-primary transition", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "label-caps text-primary", children: z.code }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
          "// 0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold tracking-tight", children: z.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: z.desc })
    ] }, z.code)) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border/60 bg-card/40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "hairline rounded-sm p-10 md:p-14 bg-background relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-2 gap-10 items-end", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionLabel, { num: "// VISIT", children: "Book a Tour" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "See the lab in action." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:text-right", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-md md:ml-auto", children: "Schedule a guided walkthrough of our Tech-Innovation Lab and meet the equipment behind every build." }),
          /* @__PURE__ */ jsx(TourDialog, { trigger: /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition", children: [
            "Book a Free Tour ",
            /* @__PURE__ */ jsx("span", { children: "→" })
          ] }) })
        ] })
      ] })
    ] }) }) })
  ] });
}
function TourDialog({
  trigger
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  async function onSubmit(e) {
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
    const message = [`Tech Lab Tour Request`, phone ? `Phone: ${phone}` : null, date ? `Preferred date/time: ${date}` : null, visitors ? `Number of visitors: ${visitors}` : null, ``, notes ? `Notes: ${notes}` : `No additional notes.`].filter((l) => l !== null).join("\n");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          domain: "Tech Lab Tour",
          message
        })
      });
      if (!res.ok) throw new Error("Could not submit. Please try again.");
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }
  const base = "w-full bg-input/50 hairline rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-muted-foreground/60";
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: (v) => {
    setOpen(v);
    if (!v) {
      setStatus("idle");
      setError(null);
    }
  }, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Book a Free Tech Lab Tour" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Tell us a bit about you and when you'd like to visit. We'll confirm by email within one working day." })
      ] }),
      status === "sent" ? /* @__PURE__ */ jsx("div", { className: "hairline border-primary/60 bg-primary/10 text-sm rounded-sm p-4", children: "Request received! We'll email you shortly to confirm your tour." }) : /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground mb-2 block", children: "Name" }),
          /* @__PURE__ */ jsx("input", { name: "name", required: true, className: base })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground mb-2 block", children: "Email" }),
            /* @__PURE__ */ jsx("input", { name: "email", type: "email", required: true, className: base })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground mb-2 block", children: "Phone" }),
            /* @__PURE__ */ jsx("input", { name: "phone", type: "tel", required: true, className: base })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground mb-2 block", children: "Preferred date/time" }),
            /* @__PURE__ */ jsx("input", { name: "date", placeholder: "e.g. Sat 24 May, 11am", className: base })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground mb-2 block", children: "Number of visitors" }),
            /* @__PURE__ */ jsx("input", { name: "visitors", type: "number", min: 1, required: true, defaultValue: 1, className: base })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground mb-2 block", children: "Notes (optional)" }),
          /* @__PURE__ */ jsx("textarea", { name: "notes", rows: 3, className: base })
        ] }),
        status === "error" && /* @__PURE__ */ jsx("div", { className: "hairline border-destructive/60 bg-destructive/10 text-sm rounded-sm p-3", children: error }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxs("button", { type: "submit", disabled: status === "sending", className: "bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition inline-flex items-center gap-2 disabled:opacity-60", children: [
          status === "sending" ? "Sending…" : "Request Tour",
          " ",
          /* @__PURE__ */ jsx("span", { children: "→" })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  TechLab as component
};
