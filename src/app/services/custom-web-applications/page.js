"use client";

import Link from "next/link";
import useRouteClass from "@/hooks/useRouteClass";
import useScrollReveal from "@/hooks/useScrollReveal";
import GridCanvas from "@/components/GridCanvas";
import "./custom-web-applications.css";

const BLUE = [39, 66, 245];
const SIGNAL = [255, 107, 53];

const ITEMS = [
  {
    title: "Dashboards & Portals",
    desc: "Real-time dashboards and role-based portals that put the right data in front of the right people, the moment they need it.",
    points: ["Live dashboards", "Role-based access", "Reporting", "Data visualisation"],
    icon: (
      <svg viewBox="0 0 40 40">
        <rect className="ln" x="6" y="8" width="28" height="24" rx="3" />
        <line className="ln" x1="6" y1="15" x2="34" y2="15" />
        <rect className="ln ac" x="10" y="20" width="9" height="8" rx="1.5" />
        <line className="ln" x1="24" y1="21" x2="30" y2="21" />
        <line className="ln" x1="24" y1="25" x2="30" y2="25" />
      </svg>
    ),
  },
  {
    title: "Internal Tools",
    desc: "Replace spreadsheets and manual processes with tools built around your team's exact workflow — approvals, forms, and audit trails included.",
    points: ["Workflow automation", "Custom forms", "Approvals", "Audit trails"],
    icon: (
      <svg viewBox="0 0 40 40">
        <circle className="ln" cx="20" cy="20" r="7" />
        <circle className="ln ac" cx="20" cy="20" r="2.6" />
        <line className="ln" x1="20" y1="7" x2="20" y2="11" />
        <line className="ln" x1="20" y1="29" x2="20" y2="33" />
        <line className="ln" x1="7" y1="20" x2="11" y2="20" />
        <line className="ln" x1="29" y1="20" x2="33" y2="20" />
      </svg>
    ),
  },
  {
    title: "Customer Platforms",
    desc: "Web apps your customers log into — accounts, self-service, notifications, and everything in between, integrated with your systems.",
    points: ["User accounts", "Self-service", "Notifications", "Integrations"],
    icon: (
      <svg viewBox="0 0 40 40">
        <rect className="ln" x="6" y="8" width="28" height="24" rx="3" />
        <circle className="ln ac" cx="20" cy="18" r="4" />
        <path className="ln" d="M12 29 c0 -4 4 -6 8 -6 s8 2 8 6" />
      </svg>
    ),
  },
];

const WHY = [
  { h: "Built for your workflow", p: "Exactly the features you need, shaped around how your team actually works — and none of the bloat." },
  { h: "Fast & secure", p: "A modern stack, secure by design, built to stay quick as your users and data grow." },
  { h: "Integrated", p: "Connects with the tools, data, and services you already rely on, instead of adding another silo." },
  { h: "Yours to grow", p: "Add features and users over time. You own the codebase and it evolves with your business." },
];

const TECH = ["React", "Next.js", "Node.js", "PostgreSQL", "REST & APIs", "Cloud hosting"];

export default function CustomWebApplicationsPage() {
  useRouteClass("web-apps");
  useScrollReveal(".rv");

  return (
    <div className="route-web-apps">
      <div id="gridbg" />
      <GridCanvas
        gap={48}
        radius={190}
        spotlight={{ color: BLUE, alpha: 0.07 }}
        link={{ color: SIGNAL, mult: 0.5 }}
        coldCross={{ color: BLUE, base: 0.15, range: 0.75 }}
        hotCross={{ color: SIGNAL, base: 0.35, range: 0.65 }}
        crosshair={{ color: BLUE, alpha: 0.4 }}
        center={{ color: SIGNAL, alpha: 0.9 }}
      />

      <div className="wrap">
        <header className="hero">
          <div className="hero-copy">
            <span className="eyebrow mono">Web Applications</span>
            <h1>
              Custom Web <em>Application</em> Development
            </h1>
            <p>
              We build web applications tailored to how your business works —
              dashboards, portals, internal tools, and customer-facing platforms.
              Fast, secure, and built to scale, with the exact features you need
              and none of the bloat you don&apos;t.
            </p>
            <Link href="/contact" className="cta">
              Contact now <span className="arr">→</span>
            </Link>
          </div>

          <div className="hero-art">
            <svg className="art-svg" viewBox="0 0 400 340" role="img" aria-label="Animated web application illustration">
              <g className="float">
                <rect className="ln" x="40" y="46" width="320" height="234" rx="14" />
                <line className="ln soft" x1="40" y1="80" x2="360" y2="80" />
                <circle className="fac" cx="62" cy="63" r="4" />
                <circle className="ln" cx="78" cy="63" r="4" />
                <line className="ln soft" x1="116" y1="80" x2="116" y2="280" />
                <rect className="fac soft" x="60" y="100" width="40" height="10" rx="3" />
                <rect className="fac soft" x="60" y="118" width="40" height="10" rx="3" />
                <rect className="ln ac" x="60" y="136" width="40" height="10" rx="3" />
                <rect className="fac soft" x="60" y="154" width="40" height="10" rx="3" />
                <line className="ln soft" x1="140" y1="250" x2="336" y2="250" />
                <rect className="fac bar b1" x="150" y="204" width="18" height="46" rx="2" />
                <rect className="fac bar b2" x="180" y="174" width="18" height="76" rx="2" />
                <rect className="fac bar b3" x="210" y="144" width="18" height="106" rx="2" />
                <rect className="fac bar b4" x="240" y="184" width="18" height="66" rx="2" />
                <polyline className="ln ac draw" points="150,124 194,152 244,112 306,146" />
                <circle className="fac pulse" cx="306" cy="146" r="5" />
              </g>
            </svg>
          </div>
        </header>

        <section className="systems">
          {ITEMS.map((s) => (
            <article className="card rv" key={s.title}>
              <div className="svc-ico">{s.icon}</div>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <ul>
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="why rv">
          <h2 className="sec-title">Why build a custom web app?</h2>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-item" key={w.h}>
                <h3>{w.h}</h3>
                <p>{w.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tech rv">
          <span className="mono">Built with</span>
          <div className="chips">
            {TECH.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </section>

        <section className="cta-band rv">
          <h2>Outgrown your spreadsheets?</h2>
          <p>Let&apos;s build the web app your team actually needs.</p>
          <Link href="/contact" className="cta">
            Contact now <span className="arr">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}