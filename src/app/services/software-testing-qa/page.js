"use client";

import Link from "next/link";
import useRouteClass from "@/hooks/useRouteClass";
import useScrollReveal from "@/hooks/useScrollReveal";
import GridCanvas from "@/components/GridCanvas";
import "./software-testing-qa.css";

const BLUE = [39, 66, 245];
const SIGNAL = [255, 107, 53];

const ITEMS = [
  {
    title: "Manual Testing",
    desc: "Human testers who think like your users — exploratory, usability, and edge-case testing that catches what automated scripts miss.",
    points: ["Exploratory testing", "Usability", "Edge cases", "Regression"],
    icon: (
      <svg viewBox="0 0 40 40">
        <circle className="ln" cx="18" cy="18" r="10" />
        <line className="ln ac" x1="25" y1="25" x2="33" y2="33" />
      </svg>
    ),
  },
  {
    title: "Test Automation",
    desc: "Automated suites that run on every change — fast feedback so bugs are caught in minutes and never reach production.",
    points: ["Automated suites", "CI integration", "Fast feedback", "Regression coverage"],
    icon: (
      <svg viewBox="0 0 40 40">
        <path className="ln" d="M20 8 a12 12 0 1 1-9 4" />
        <polyline className="ln ac" points="9,6 11,12 17,11" />
      </svg>
    ),
  },
  {
    title: "QA Process",
    desc: "Set up the process — test plans, coverage, and reporting — so quality is built into every release instead of bolted on at the end.",
    points: ["Test plans", "Coverage tracking", "Bug reporting", "Release sign-off"],
    icon: (
      <svg viewBox="0 0 40 40">
        <rect className="ln" x="10" y="7" width="20" height="27" rx="3" />
        <rect className="ln" x="15" y="4" width="10" height="5" rx="1.5" />
        <polyline className="ln ac" points="14,17 17,20 23,14" />
        <line className="ln" x1="14" y1="26" x2="26" y2="26" />
      </svg>
    ),
  },
];

const WHY = [
  { h: "Catch bugs early", p: "Find issues before your users do, when they are quick and cheap to fix rather than costly emergencies." },
  { h: "Ship with confidence", p: "Automated checks on every release mean you know what works before it goes live." },
  { h: "Faster releases", p: "Reliable tests mean less firefighting and quicker, calmer launches." },
  { h: "Built into your flow", p: "QA that fits your existing development process and CI, not a separate bottleneck at the end." },
];

const TECH = ["Selenium", "Cypress", "Playwright", "Jest", "Postman", "CI/CD"];

export default function SoftwareTestingQaPage() {
  useRouteClass("qa");
  useScrollReveal(".rv");

  return (
    <div className="route-qa">
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
            <span className="eyebrow mono">Testing &amp; QA</span>
            <h1>
              Software Testing &amp; <em>QA</em>
            </h1>
            <p>
              We help you ship software that works — catching bugs before your
              users do. From manual testing to full automation suites, we build
              the quality checks that keep releases reliable and your team
              confident.
            </p>
            <Link href="/contact" className="cta">
              Contact now <span className="arr">→</span>
            </Link>
          </div>

          <div className="hero-art">
            <svg className="art-svg" viewBox="0 0 400 340" role="img" aria-label="Animated software testing illustration">
              <g className="float">
                <rect className="ln" x="56" y="46" width="288" height="248" rx="14" />
                <line className="ln soft" x1="56" y1="82" x2="344" y2="82" />
                <circle className="fac" cx="78" cy="64" r="4" />
                <circle className="ln" cx="94" cy="64" r="4" />

                <circle className="ln ac" cx="92" cy="120" r="13" />
                <polyline className="ln ac draw" points="85,120 90,126 99,113" />
                <line className="ln soft" x1="118" y1="120" x2="300" y2="120" />

                <circle className="ln ac" cx="92" cy="162" r="13" />
                <polyline className="ln ac draw" points="85,162 90,168 99,155" style={{ animationDelay: "-0.5s" }} />
                <line className="ln soft" x1="118" y1="162" x2="278" y2="162" />

                <circle className="ln ac" cx="92" cy="204" r="13" />
                <polyline className="ln ac draw" points="85,204 90,210 99,197" style={{ animationDelay: "-1s" }} />
                <line className="ln soft" x1="118" y1="204" x2="296" y2="204" />

                <rect className="ln soft" x="78" y="244" width="244" height="12" rx="6" />
                <line className="ln ac draw" x1="86" y1="250" x2="314" y2="250" style={{ strokeWidth: 9, strokeLinecap: "round" }} />

                <circle className="fac pulse" cx="320" cy="120" r="5" />
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
          <h2 className="sec-title">Why invest in QA?</h2>
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
          <h2>Tired of bugs slipping through?</h2>
          <p>Let&apos;s build quality into your releases from the start.</p>
          <Link href="/contact" className="cta">
            Contact now <span className="arr">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}