"use client";

import Link from "next/link";
import useRouteClass from "@/hooks/useRouteClass";
import useScrollReveal from "@/hooks/useScrollReveal";
import GridCanvas from "@/components/GridCanvas";
import "./mobile-app-development.css";

const INK = [13, 27, 51];
const BLUE = [39, 66, 245];
const SIGNAL = [255, 107, 53]; // orange — matches home / about

const APPS = [
  {
    title: "iOS Apps",
    desc: "Native iPhone and iPad apps built in Swift — fast, smooth, and designed to feel right at home on Apple devices, ready for the App Store.",
    points: [
      "Swift & SwiftUI",
      "App Store deployment",
      "Push notifications",
      "Offline support",
    ],
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
        alt="Apple iOS logo"
        width={32}
        height={32}
      />
    ),
  },
  {
    title: "Android Apps",
    desc: "Native Android apps in Kotlin — built to run well across the huge range of Android devices and published to Google Play.",
    points: [
      "Kotlin & Jetpack",
      "Google Play deployment",
      "Material design",
      "Wide device support",
    ],
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
        alt="Android logo"
        width={32}
        height={32}
      />
    ),
  },
  {
    title: "Cross-Platform",
    desc: "One codebase, both platforms. We build with Flutter and React Native to ship iOS and Android together — faster to launch and easier to maintain.",
    points: [
      "Flutter & React Native",
      "Single codebase",
      "Faster time to market",
      "Shared updates",
    ],
    icon: (
      <svg viewBox="0 0 40 40">
        <rect className="ln" x="6" y="8" width="14" height="24" rx="3" />
        <rect className="ln ac" x="20" y="12" width="14" height="20" rx="3" />
        <line className="ln" x1="13" y1="28" x2="13" y2="28.5" />
      </svg>
    ),
  },
];

const WHY = [
  {
    h: "Native-quality experience",
    p: "Smooth, responsive apps that feel right on each platform — not a clunky website wrapped in an app shell.",
  },
  {
    h: "Works offline",
    p: "Apps that keep working when the network is patchy and sync automatically the moment a connection returns.",
  },
  {
    h: "End to end, one team",
    p: "Design, the app itself, the backend and APIs behind it, and store deployment — all handled in one place.",
  },
  {
    h: "Yours to scale",
    p: "Add features, users, and platforms over time. You own the codebase and it grows with your business.",
  },
];

const TECH = [
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "Firebase",
  "Node.js",
  "REST & APIs",
];

export default function MobileAppDevelopmentPage() {
  useRouteClass("mobile-apps");
  useScrollReveal(".rv");

  return (
    <div className="route-mobile-apps">
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
            <span className="eyebrow mono">Mobile Applications</span>
            <h1>
              Custom Mobile <em>App</em> Development
            </h1>
            <p>
              We design, build, and ship mobile apps for iOS and Android — native
              where it counts, cross-platform where it makes sense. From the first
              screen to the app store, we build apps your customers actually want
              to open, backed by the systems that keep them running.
            </p>
            <Link href="/contact" className="cta">
              Contact now <span className="arr">→</span>
            </Link>
          </div>

          <div className="hero-art">
            <svg className="art-svg" viewBox="0 0 400 340" role="img" aria-label="Animated mobile app illustration">
              {/* side chips (cross-platform) */}
              <g className="bob2">
                <rect className="ln ac" x="40" y="120" width="52" height="38" rx="9" />
                <line className="ln soft" x1="52" y1="133" x2="80" y2="133" />
                <line className="ln soft" x1="52" y1="145" x2="72" y2="145" />
              </g>
              <g className="bob2" style={{ animationDelay: "-2.5s" }}>
                <rect className="ln" x="308" y="168" width="52" height="38" rx="9" />
                <line className="ln soft" x1="320" y1="181" x2="348" y2="181" />
                <line className="ln soft" x1="320" y1="193" x2="340" y2="193" />
              </g>

              {/* phone */}
              <g className="float">
                <rect className="ln" x="146" y="34" width="108" height="272" rx="22" />
                <line className="ln" x1="184" y1="52" x2="216" y2="52" />

                {/* screen banner */}
                <rect className="ln ac" x="162" y="70" width="76" height="42" rx="8" />

                {/* list rows sliding */}
                <g className="slidey">
                  <rect className="fac soft" x="162" y="126" width="76" height="15" rx="4" />
                  <rect className="fac soft" x="162" y="150" width="60" height="15" rx="4" />
                  <rect className="fac soft" x="162" y="174" width="68" height="15" rx="4" />
                  <rect className="fac soft" x="162" y="198" width="52" height="15" rx="4" />
                </g>

                {/* notification */}
                <circle className="fac pulse" cx="242" cy="58" r="6" />

                {/* bottom nav */}
                <circle className="fac" cx="180" cy="286" r="4" />
                <circle className="ln" cx="200" cy="286" r="4" />
                <circle className="ln" cx="220" cy="286" r="4" />
              </g>
            </svg>
          </div>
        </header>

        {/* three app types */}
        <section className="systems">
          {APPS.map((s) => (
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
          <h2 className="sec-title">Why build a custom app?</h2>
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
          <h2>Got an app idea?</h2>
          <p>Let&apos;s turn it into a real product for iOS and Android.</p>
          <Link href="/contact" className="cta">
            Contact now <span className="arr">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}