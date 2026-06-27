import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/roboventors-logo.svg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/courses", label: "Courses" },
  { to: "/tech-lab", label: "Tech Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { location } = useRouterState();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-[oklch(0.16_0.02_260/0.72)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-10 h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-sm bg-white p-1">
            <img src={logo} alt="" width={28} height={28} className="h-full w-full" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-bold tracking-tight text-base">RoboVentors</span>
            <span className="label-caps text-[10px] text-muted-foreground mt-0.5">Robotics Education</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => {
            const active = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={[
                  "px-3 py-2 text-sm rounded-sm transition-colors relative",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {n.label}
                {active && <span className="absolute -bottom-px left-3 right-3 h-px bg-primary" />}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold rounded-sm hover:brightness-110 transition"
        >
          Start Your Journey
          <span className="text-xs">→</span>
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32 bg-[oklch(0.14_0.02_260)]">
      <div className="mx-auto max-w-7xl px-4 md:px-10 py-14 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-sm bg-white p-1">
              <img src={logo} alt="" width={28} height={28} className="h-full w-full" />
            </span>
            <span className="font-bold text-lg tracking-tight">RoboVentors</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Leading robotics education company empowering young minds to build, code, and innovate. Home to
            three consecutive Avishkaar National gold medals.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="label-caps text-muted-foreground">Now Enrolling · 2026 Cohort</span>
          </div>
        </div>
        <div>
          <h4 className="label-caps text-muted-foreground mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="label-caps text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@roboventors.io</li>
            <li>Mon–Sat · 10:00–19:00</li>
            <li>Group discounts available</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} RoboVentors. Build. Code. Innovate.</span>
          <span className="label-caps">3× Avishkaar Gold</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionLabel({ children, num }: { children: React.ReactNode; num?: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {num && <span className="label-caps text-primary">{num}</span>}
      <span className="h-px w-8 bg-primary/60" />
      <span className="label-caps text-muted-foreground">{children}</span>
    </div>
  );
}
