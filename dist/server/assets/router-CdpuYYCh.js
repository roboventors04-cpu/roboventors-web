import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouterState, Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { z } from "zod";
const appCss = "/assets/styles-DlTCVtHj.css";
const logo = "/assets/roboventors-logo-CPUGn1GG.svg";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/courses", label: "Courses" },
  { to: "/tech-lab", label: "Tech Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const { location } = useRouterState();
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-[oklch(0.16_0.02_260/0.72)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 md:px-10 h-16", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center h-9 w-9 rounded-sm bg-white p-1", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "", width: 28, height: 28, className: "h-full w-full" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col leading-none", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold tracking-tight text-base", children: "RoboVentors" }),
        /* @__PURE__ */ jsx("span", { className: "label-caps text-[10px] text-muted-foreground mt-0.5", children: "Robotics Education" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: NAV.map((n) => {
      const active = location.pathname === n.to;
      return /* @__PURE__ */ jsxs(
        Link,
        {
          to: n.to,
          className: [
            "px-3 py-2 text-sm rounded-sm transition-colors relative",
            active ? "text-primary" : "text-muted-foreground hover:text-foreground"
          ].join(" "),
          children: [
            n.label,
            active && /* @__PURE__ */ jsx("span", { className: "absolute -bottom-px left-3 right-3 h-px bg-primary" })
          ]
        },
        n.to
      );
    }) }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/contact",
        className: "hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold rounded-sm hover:brightness-110 transition",
        children: [
          "Start Your Journey",
          /* @__PURE__ */ jsx("span", { className: "text-xs", children: "→" })
        ]
      }
    )
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-border/60 mt-32 bg-[oklch(0.14_0.02_260)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-14 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center h-9 w-9 rounded-sm bg-white p-1", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "", width: 28, height: 28, className: "h-full w-full" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-lg tracking-tight", children: "RoboVentors" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground leading-relaxed", children: "Leading robotics education company empowering young minds to build, code, and innovate. Home to three consecutive Avishkaar National gold medals." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground", children: "Now Enrolling · 2026 Cohort" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "label-caps text-muted-foreground mb-4", children: "Explore" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: n.to, className: "hover:text-primary", children: n.label }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "label-caps text-muted-foreground mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "hello@roboventors.io" }),
          /* @__PURE__ */ jsx("li", { children: "Mon–Sat · 10:00–19:00" }),
          /* @__PURE__ */ jsx("li", { children: "Group discounts available" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " RoboVentors. Build. Code. Innovate."
      ] }),
      /* @__PURE__ */ jsx("span", { className: "label-caps", children: "3× Avishkaar Gold" })
    ] }) })
  ] });
}
function PageShell({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
function SectionLabel({ children, num }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
    num && /* @__PURE__ */ jsx("span", { className: "label-caps text-primary", children: num }),
    /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary/60" }),
    /* @__PURE__ */ jsx("span", { className: "label-caps text-muted-foreground", children })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RoboVentors — Robotics Education for Young Innovators" },
      { name: "description", content: "RoboVentors — robotics, AI, and immersive reality innovation lab." },
      { name: "author", content: "RoboVentors" },
      { property: "og:title", content: "RoboVentors" },
      { property: "og:description", content: "RoboVentors — robotics, AI, and immersive reality innovation lab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "RoboVentors" },
      { name: "twitter:description", content: "RoboVentors — robotics, AI, and immersive reality innovation lab." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a98fd30d-a083-475b-b7a2-81593ce1eddd/id-preview-e050e701--60d6e0cf-745a-4783-ab86-4ad0a669e21e.lovable.app-1779087450224.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a98fd30d-a083-475b-b7a2-81593ce1eddd/id-preview-e050e701--60d6e0cf-745a-4783-ab86-4ad0a669e21e.lovable.app-1779087450224.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/icon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/icon-16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icon-180.png" },
      { rel: "manifest", href: "/site.webmanifest" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$5 = () => import("./tech-lab-uyvYilm7.js");
const Route$7 = createFileRoute("/tech-lab")({
  head: () => ({
    meta: [{
      title: "Tech Lab — RoboVentors"
    }, {
      name: "description",
      content: "Explore our state-of-the-art Tech-Innovation Lab with laser cutting, 3D printing, electronics, robotics, AI, and AR/VR zones."
    }, {
      property: "og:title",
      content: "RoboVentors Tech Lab"
    }, {
      property: "og:description",
      content: "State-of-the-art robotics lab with laser cutting, 3D printing, electronics, AI, and AR/VR zones."
    }],
    links: [{
      rel: "canonical",
      href: "https://robo-venture-forge.lovable.app/tech-lab"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const BASE_URL = "https://robo-venture-forge.lovable.app";
const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/courses", changefreq: "monthly", priority: "0.9" },
  { path: "/projects", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" }
];
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ROUTES.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./projects-B3-R2MYm.js");
const Route$5 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — RoboVentors"
    }, {
      name: "description",
      content: "CubeSat satellites, humanoid robots, smart homes, and flying machines — hands-on robotics projects for students."
    }, {
      property: "og:title",
      content: "RoboVentors Projects"
    }, {
      property: "og:description",
      content: "Hands-on learning through cutting-edge robotics projects."
    }],
    links: [{
      rel: "canonical",
      href: "https://robo-venture-forge.lovable.app/projects"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const cubesat = "/assets/proj-cubesat-BRD7b-uk.jpg";
const humanoid = "/assets/proj-humanoid-D4wXw3nf.jpg";
const smarthome = "/assets/proj-smarthome-9o6n0AQG.jpg";
const flying = "/assets/proj-flying-O6woV8VJ.jpg";
const PROJECTS = [
  {
    code: "PRJ-01",
    slug: "cubesat",
    title: "CubeSat Satellite",
    img: cubesat,
    level: "Advanced",
    age: "14–18 years",
    duration: "6 months",
    short: "Design and build miniature satellites using ESP32 microcontrollers.",
    desc: "Learn space technology, orbital mechanics, and IoT communication. Program sensors for data collection, integrate solar panels for power management, and understand satellite communication protocols. Launch simulations and ground-station operations included.",
    skills: ["ESP32 firmware", "Sensor integration", "Solar power systems", "Comms protocols", "Ground-station ops"]
  },
  {
    code: "PRJ-02",
    slug: "humanoid",
    title: "Humanoid Robots",
    img: humanoid,
    level: "Advanced",
    age: "12–18 years",
    duration: "6 months",
    short: "Create human-like robots with articulated movements and AI capabilities.",
    desc: "Learn servo motor control, inverse kinematics, and gesture recognition. Program robots to walk, dance, pick objects, and respond to voice commands. Showcase your humanoid in our annual robotics exhibition.",
    skills: ["Servo control", "Inverse kinematics", "Voice & gesture AI", "Locomotion", "Exhibition demo"]
  },
  {
    code: "PRJ-03",
    slug: "smart-homes",
    title: "Automated Smart Homes",
    img: smarthome,
    level: "Intermediate",
    age: "10–16 years",
    duration: "4 months",
    short: "Build IoT-powered miniature smart homes with complete automation.",
    desc: "Design systems with motion sensors, voice control, automated lighting, and security features. Learn WiFi/Bluetooth protocols and mobile app development. Create your own Google Assistant / Alexa integrated home model.",
    skills: ["IoT sensors", "WiFi & Bluetooth", "Voice assistants", "Mobile app basics", "Home automation"]
  },
  {
    code: "PRJ-04",
    slug: "flying-airplane",
    title: "Flying Airplane",
    img: flying,
    level: "Advanced",
    age: "12–18 years",
    duration: "5 months",
    short: "Design and pilot remote-controlled aircraft and drones.",
    desc: "Master aerodynamics, flight mechanics, and FPV systems. Build from balsa-wood gliders to advanced quadcopters with GPS. Learn flight controller programming and compete in aerial challenges and drone racing competitions.",
    skills: ["Aerodynamics", "FPV systems", "Flight controllers", "GPS navigation", "Drone racing"]
  }
];
const COURSES = [
  {
    code: "CRS-01",
    title: "Robotics Foundation",
    tag: "Beginner",
    duration: "3 months",
    age: "8–12 years",
    desc: "Perfect start for beginners. Learn basics of robotics, electronics, and programming.",
    highlights: ["Circuit fundamentals", "Block-based coding", "First robot build", "Sensor basics"]
  },
  {
    code: "CRS-02",
    title: "Advanced Robotics",
    tag: "Advanced",
    duration: "6 months",
    age: "12–18 years",
    desc: "Master complex robot designs, AI integration, and competition-level skills.",
    highlights: ["Embedded C/Python", "AI integration", "Mechanical design", "Competition prep"]
  },
  {
    code: "CRS-03",
    title: "Competition Prep",
    tag: "Intensive",
    duration: "4 months",
    age: "10–18 years",
    desc: "Intensive training for national robotics competitions like Avishkaar.",
    highlights: ["Avishkaar curriculum", "Mock challenges", "Mentor reviews", "Team strategy"]
  }
];
const $$splitComponentImporter$3 = () => import("./courses-CWiTE850.js");
const Route$4 = createFileRoute("/courses")({
  head: () => ({
    meta: [{
      title: "Courses — RoboVentors"
    }, {
      name: "description",
      content: "Robotics Foundation, Advanced Robotics, and Competition Prep courses for students 8–18."
    }, {
      property: "og:title",
      content: "RoboVentors Courses"
    }, {
      property: "og:description",
      content: "Structured learning paths for every skill level."
    }],
    links: [{
      rel: "canonical",
      href: "https://robo-venture-forge.lovable.app/courses"
    }],
    scripts: COURSES.map((c) => ({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: c.title,
        description: c.desc,
        provider: {
          "@type": "Organization",
          name: "RoboVentors",
          sameAs: "https://robo-venture-forge.lovable.app/"
        }
      })
    }))
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-Bl6fi13E.js");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — RoboVentors"
    }, {
      name: "description",
      content: "Get in touch about courses, projects, fees, and group discounts."
    }, {
      property: "og:title",
      content: "Contact RoboVentors"
    }, {
      property: "og:description",
      content: "Talk to our robotics education team."
    }],
    links: [{
      rel: "canonical",
      href: "https://robo-venture-forge.lovable.app/contact"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "RoboVentors",
        email: "hello@roboventors.io",
        url: "https://robo-venture-forge.lovable.app/",
        openingHours: "Mo-Sa 10:00-19:00"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-BzsQiQhh.js");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — RoboVentors"
    }, {
      name: "description",
      content: "RoboVentors is a leading robotics education company with three consecutive Avishkaar National gold medals."
    }, {
      property: "og:title",
      content: "About RoboVentors"
    }, {
      property: "og:description",
      content: "Meet the team behind three consecutive Avishkaar National gold medals — 500+ students, 200+ projects shipped."
    }],
    links: [{
      rel: "canonical",
      href: "https://robo-venture-forge.lovable.app/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BkndnZv6.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "RoboVentors — Robotics Education for Young Innovators"
    }, {
      name: "description",
      content: "Leading robotics education company. Three consecutive Avishkaar National gold medals. Build, code, and innovate with hands-on STEM projects."
    }, {
      property: "og:title",
      content: "RoboVentors — Robotics Education"
    }, {
      property: "og:description",
      content: "Empowering young minds to build, code, and innovate."
    }],
    links: [{
      rel: "canonical",
      href: "https://robo-venture-forge.lovable.app/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "RoboVentors",
        url: "https://robo-venture-forge.lovable.app/",
        description: "Robotics education company empowering young minds to build, code, and innovate."
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "RoboVentors",
        url: "https://robo-venture-forge.lovable.app/"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  domain: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2e3)
});
const NOTIFY_TO = "roboventors04@gmail.com";
const GMAIL_GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
function toBase64Url(str) {
  const b64 = Buffer.from(str, "utf-8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function buildRaw(opts) {
  const headers = [
    `To: ${opts.to}`,
    opts.replyTo ? `Reply-To: ${opts.replyTo}` : "",
    `Subject: ${opts.subject}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "MIME-Version: 1.0"
  ].filter(Boolean);
  return toBase64Url(headers.join("\r\n") + "\r\n\r\n" + opts.body);
}
function sanitize(str) {
  return str.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}
function sanitizePayload(raw) {
  const r = raw;
  return {
    name: sanitize(String(r.name ?? "")),
    email: String(r.email ?? "").trim().toLowerCase(),
    organization: sanitize(String(r.organization ?? "")),
    domain: sanitize(String(r.domain ?? "")),
    message: sanitize(String(r.message ?? ""))
  };
}
async function sendNotificationEmail(payload) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY_1;
  if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
    console.error("missing email env vars", {
      hasLovable: !!LOVABLE_API_KEY,
      hasGmail: !!GOOGLE_MAIL_API_KEY
    });
    return;
  }
  const body = [
    `New contact submission from RoboVentors website`,
    ``,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.organization ? `Organization: ${payload.organization}` : null,
    payload.domain ? `Interested in: ${payload.domain}` : null,
    ``,
    `Message:`,
    payload.message
  ].filter((l) => l !== null).join("\n");
  const raw = buildRaw({
    to: NOTIFY_TO,
    replyTo: payload.email,
    subject: `New contact form: ${payload.name}`,
    body
  });
  const res = await fetch(`${GMAIL_GATEWAY}/users/me/messages/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ raw })
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`gmail send failed [${res.status}]: ${text}`);
  }
}
const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const raw = await request.json();
          const sanitized = sanitizePayload(raw);
          const parsed = ContactSchema.safeParse(sanitized);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ error: "Invalid input", issues: parsed.error.issues }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }
          try {
            await sendNotificationEmail(parsed.data);
          } catch (e) {
            console.error("notification email error", e);
            return new Response(JSON.stringify({ error: "Failed to send" }), {
              status: 500,
              headers: { "Content-Type": "application/json" }
            });
          }
          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        } catch (e) {
          console.error("contact error", e);
          return new Response(JSON.stringify({ error: "Bad request" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }
      }
    }
  }
});
const TechLabRoute = Route$7.update({
  id: "/tech-lab",
  path: "/tech-lab",
  getParentRoute: () => Route$8
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ProjectsRoute = Route$5.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$8
});
const CoursesRoute = Route$4.update({
  id: "/courses",
  path: "/courses",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ApiPublicContactRoute = Route.update({
  id: "/api/public/contact",
  path: "/api/public/contact",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  CoursesRoute,
  ProjectsRoute,
  SitemapDotxmlRoute,
  TechLabRoute,
  ApiPublicContactRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  COURSES as C,
  PROJECTS as P,
  SectionLabel as S,
  router as r
};
