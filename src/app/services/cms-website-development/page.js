"use client";

import Link from "next/link";
import useRouteClass from "@/hooks/useRouteClass";
import useScrollReveal from "@/hooks/useScrollReveal";
import GridCanvas from "@/components/GridCanvas";
import "./cms-website-development.css";
import Footer from "@/components/Footer";

const BLUE = [39, 66, 245];
const SIGNAL = [255, 107, 53];

const ITEMS = [
  {
    title: "Business Websites",
    desc: "Marketing and corporate sites that load fast, look sharp, and are built from the ground up to be found on Google.",
    points: ["Responsive design", "SEO-ready structure", "Fast loading", "Contact & forms"],
    icon: (
      <svg viewBox="0 0 40 40">
        <rect className="ln" x="6" y="8" width="28" height="24" rx="3" />
        <line className="ln" x1="6" y1="15" x2="34" y2="15" />
        <circle className="fac" cx="10" cy="11.5" r="1.3" />
        <circle className="ln" cx="14" cy="11.5" r="1.3" />
        <rect className="ln ac" x="11" y="20" width="18" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "CMS Platforms",
    desc: "Update your own content — pages, blogs, products — through a simple admin, with no developer needed for day-to-day changes.",
    points: ["Easy admin", "Blog & pages", "Media library", "Roles & access"],
    icon: (
      <svg viewBox="0 0 40 40">
        <path className="ln ac" d="M8 12 l12 -5 l12 5 l-12 5 Z" />
        <path className="ln" d="M8 20 l12 5 l12 -5" />
        <path className="ln" d="M8 27 l12 5 l12 -5" />
      </svg>
    ),
  },
  {
    title: "Landing Pages",
    desc: "Focused, high-converting pages for campaigns and launches, wired straight into your analytics so you can see what works.",
    points: ["Campaign pages", "A/B ready", "Analytics built in", "Fast turnaround"],
    icon: (
      <svg viewBox="0 0 40 40">
        <rect className="ln" x="10" y="6" width="20" height="28" rx="3" />
        <line className="ln" x1="15" y1="13" x2="25" y2="13" />
        <rect className="ln ac" x="15" y="18" width="10" height="6" rx="1.5" />
        <circle className="fac pulse" cx="20" cy="29" r="2" />
      </svg>
    ),
  },
];

const WHY = [
  { h: "Fast by default", p: "Performance-first builds that load quickly and score well — speed you can feel and Google rewards." },
  { h: "You control the content", p: "Update text, images, and pages yourself through a simple admin, no code required." },
  { h: "Built to be found", p: "Clean structure and SEO fundamentals baked in from the first line, not bolted on later." },
  { h: "Works everywhere", p: "Responsive layouts that look right across phones, tablets, and desktops." },
];

const TECH = ["Next.js", "React", "WordPress", "Headless CMS", "Tailwind", "Node.js"];

export default function CmsWebsiteDevelopmentPage() {
  useRouteClass("cms-web");
  useScrollReveal(".rv");

  return (
    <div className="route-cms-web">
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
            <span className="eyebrow mono">Websites &amp; CMS</span>
            <h1>
              CMS &amp; Website <em>Development</em>
            </h1>
            <p>
              We build fast, modern websites — from marketing sites to full
              content-managed platforms your team can update without touching
              code. Built to load quickly, work on every screen, and give you
              real control over your content.
            </p>
            <Link href="/contact" className="cta">
              Contact now <span className="arr">→</span>
            </Link>
          </div>

          <div className="hero-art">
            <svg className="art-svg" viewBox="0 0 400 340" role="img" aria-label="Animated website builder illustration">
              <g className="float">
                <rect className="ln" x="40" y="46" width="320" height="234" rx="14" />
                <line className="ln soft" x1="40" y1="80" x2="360" y2="80" />
                <circle className="fac" cx="62" cy="63" r="4" />
                <circle className="ln" cx="78" cy="63" r="4" />
                <circle className="ln" cx="94" cy="63" r="4" />
                <rect className="ln soft" x="122" y="56" width="216" height="14" rx="7" />
                <rect className="ln ac" x="64" y="100" width="272" height="58" rx="8" />
                <g className="slidey">
                  <rect className="fac soft" x="64" y="174" width="130" height="14" rx="4" />
                  <rect className="fac soft" x="64" y="196" width="100" height="14" rx="4" />
                  <rect className="ln soft" x="210" y="174" width="126" height="80" rx="8" />
                  <rect className="fac soft" x="64" y="222" width="120" height="14" rx="4" />
                </g>
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
          <h2 className="sec-title">Why build with us?</h2>
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
          <h2>Need a website that works as hard as you do?</h2>
          <p>Let&apos;s build one that loads fast and gets found.</p>
          <Link href="/contact" className="cta">
            Contact now <span className="arr">→</span>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}