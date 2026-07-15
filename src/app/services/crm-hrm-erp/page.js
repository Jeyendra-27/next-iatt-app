"use client";

import Link from "next/link";
import useRouteClass from "@/hooks/useRouteClass";
import useScrollReveal from "@/hooks/useScrollReveal";
import GridCanvas from "@/components/GridCanvas";
import "./crm-hrm-erp.css";
import Footer from "@/components/Footer";

const INK = [13, 27, 51];
const BLUE = [39, 66, 245];
const SIGNAL = [255, 107, 53]; // orange — matches home / about

const SYSTEMS = [
  {
    title: "Custom CRM",
    desc: "A CRM shaped around your sales pipeline — leads, quotes, follow-ups, and full customer history in one view, with automation so nothing slips through the cracks.",
    points: [
      "Lead & pipeline management",
      "Quotes and follow-up automation",
      "Customer history & notes",
      "Dashboards and reporting",
    ],
    icon: (
      <svg viewBox="0 0 40 40">
        <rect className="ln" x="6" y="8" width="28" height="24" rx="3" />
        <circle className="ln ac" cx="15" cy="17" r="3.5" />
        <path className="ln" d="M9 27 c0 -4 3 -6 6 -6 s6 2 6 6" />
        <line className="ln" x1="25" y1="15" x2="31" y2="15" />
        <line className="ln" x1="25" y1="20" x2="31" y2="20" />
        <line className="ln" x1="25" y1="25" x2="29" y2="25" />
      </svg>
    ),
  },
  {
    title: "HRMS",
    desc: "Manage your people end to end — attendance, shifts, payroll, leave, and appraisals reconciled automatically, across one office or many locations.",
    points: [
      "Attendance & shift rosters",
      "Payroll runs",
      "Leave & approvals",
      "Appraisal cycles",
    ],
    icon: (
      <svg viewBox="0 0 40 40">
        <circle className="ln" cx="14" cy="14" r="4.5" />
        <circle className="ln ac" cx="27" cy="16" r="3.5" />
        <path className="ln" d="M6 31 c0 -5 4 -8 8 -8 s8 3 8 8" />
        <path className="ln" d="M23 31 c0 -4 3 -7 6 -7 s6 2 6 6" />
      </svg>
    ),
  },
  {
    title: "ERP",
    desc: "Tie your whole operation together — inventory, purchasing, finance, and production in a single connected system that gives you one source of truth.",
    points: [
      "Inventory & procurement",
      "Finance & invoicing",
      "Production & orders",
      "Role-based access",
    ],
    icon: (
      <svg viewBox="0 0 40 40">
        <rect className="ln ac" x="16" y="6" width="8" height="8" rx="1.5" />
        <rect className="ln" x="6" y="26" width="8" height="8" rx="1.5" />
        <rect className="ln" x="16" y="26" width="8" height="8" rx="1.5" />
        <rect className="ln" x="26" y="26" width="8" height="8" rx="1.5" />
        <path className="ln" d="M20 14 v6 M10 26 v-3 h20 v3 M20 23 v-3" />
      </svg>
    ),
  },
];

const WHY = [
  {
    h: "Fits your workflow",
    p: "The software adapts to how your team already works, instead of forcing everyone to bend around a rigid off-the-shelf tool.",
  },
  {
    h: "One connected system",
    p: "No more juggling disconnected apps and spreadsheets — your data lives in one place and stays in sync across departments.",
  },
  {
    h: "Scales with you",
    p: "Add modules, users, and locations as you grow, without per-seat licence fees quietly ballooning your costs.",
  },
  {
    h: "You own it",
    p: "A system built for your business, integrated with the tools you already use, and yours to evolve over time.",
  },
];

const TECH = [
  "React",
  "Node.js",
  ".NET Core",
  "PostgreSQL",
  "MySQL",
  "REST & APIs",
  "Cloud hosting",
];

export default function CrmHrmsErpPage() {
  useRouteClass("crm-erp");
  useScrollReveal(".rv");

  return (
    <div className="route-crm-erp">
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
        {/* hero */}
        <header className="hero">
          <div className="hero-copy">
            <span className="eyebrow mono">Business Systems</span>
            <h1>
              Custom CRM, HRMS &amp; <em>ERP</em> Development
            </h1>
            <p>
              We design and build custom CRM, HRMS, and ERP platforms from the
              ground up — shaped around how your business actually runs, not the
              other way around. When spreadsheets and off-the-shelf tools start to
              slow your team down, a system built for your workflows keeps
              everything in one connected place.
            </p>
            <Link href="/contact" className="cta">
              Contact now <span className="arr">→</span>
            </Link>
          </div>

          <div className="hero-art">
            <svg className="art-svg" viewBox="0 0 400 340" role="img" aria-label="Animated dashboard illustration">
              <g className="float">
                <rect className="ln" x="34" y="42" width="332" height="236" rx="16" />
                <line className="ln soft" x1="34" y1="78" x2="366" y2="78" />
                <circle className="fac" cx="56" cy="60" r="4" />
                <circle className="ln" cx="72" cy="60" r="4" />
                <circle className="ln" cx="88" cy="60" r="4" />

                {/* bar chart */}
                <line className="ln soft" x1="66" y1="236" x2="196" y2="236" />
                <rect className="fac bar b1" x="76" y="186" width="16" height="50" rx="2" />
                <rect className="fac bar b2" x="104" y="156" width="16" height="80" rx="2" />
                <rect className="fac bar b3" x="132" y="126" width="16" height="110" rx="2" />
                <rect className="fac bar b4" x="160" y="166" width="16" height="70" rx="2" />

                {/* line chart that draws */}
                <polyline className="ln ac draw" points="224,214 258,182 292,196 330,138" />
                <circle className="fac pulse" cx="330" cy="138" r="5" />

                {/* text rows */}
                <line className="ln soft" x1="224" y1="104" x2="334" y2="104" />
                <line className="ln soft" x1="224" y1="122" x2="312" y2="122" />
              </g>

              {/* connected nodes */}
              <line className="ln ac dash" x1="52" y1="308" x2="348" y2="308" />
              <circle className="ln" cx="44" cy="308" r="8" />
              <circle className="fac pulse" cx="356" cy="308" r="8" />
            </svg>
          </div>
        </header>

        {/* three systems */}
        <section className="systems">
          {SYSTEMS.map((s) => (
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

        {/* why custom */}
        <section className="why rv">
          <h2 className="sec-title">Why build it custom?</h2>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-item" key={w.h}>
                <h3>{w.h}</h3>
                <p>{w.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* tech */}
        <section className="tech rv">
          <span className="mono">Built with</span>
          <div className="chips">
            {TECH.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* bottom CTA */}
        <section className="cta-band rv">
          <h2>Ready to replace the spreadsheets?</h2>
          <p>Let&apos;s scope your CRM, HRMS, or ERP and map it to your workflows.</p>
          <Link href="/contact" className="cta">
            Contact now <span className="arr">→</span>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}