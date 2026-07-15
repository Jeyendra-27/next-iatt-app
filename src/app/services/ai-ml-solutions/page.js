"use client";

import Link from "next/link";
import useRouteClass from "@/hooks/useRouteClass";
import useScrollReveal from "@/hooks/useScrollReveal";
import GridCanvas from "@/components/GridCanvas";
import "./ai-ml-solutions.css";
import Footer from "@/components/Footer";

const BLUE = [39, 66, 245];
const SIGNAL = [255, 107, 53];

const ITEMS = [
  {
    title: "Document Automation",
    desc: "Turn piles of PDFs and forms into structured data — extract, classify, and route documents automatically, with people in the loop only where it matters.",
    points: ["OCR & extraction", "Classification", "Bulk processing", "Human-in-the-loop"],
    icon: (
      <svg viewBox="0 0 40 40">
        <path className="ln" d="M12 5 h11 l6 6 v24 a1 1 0 0 1-1 1 H12 a1 1 0 0 1-1-1 V6 a1 1 0 0 1 1-1 Z" />
        <path className="ln" d="M23 5 v6 h6" />
        <line className="ln ac" x1="15" y1="20" x2="25" y2="20" />
        <line className="ln ac" x1="15" y1="25" x2="25" y2="25" />
        <line className="ln ac" x1="15" y1="30" x2="21" y2="30" />
      </svg>
    ),
  },
  {
    title: "Computer Vision",
    desc: "Analyse images and video — detection, classification, and measurement — for everything from medical imaging to quality inspection on the line.",
    points: ["Object detection", "Image classification", "Medical imaging", "Quality inspection"],
    icon: (
      <svg viewBox="0 0 40 40">
        <path className="ln" d="M5 20 C10 11 30 11 35 20 C30 29 10 29 5 20 Z" />
        <circle className="ln ac" cx="20" cy="20" r="5" />
        <circle className="fac" cx="20" cy="20" r="1.8" />
      </svg>
    ),
  },
  {
    title: "NLP & Predictive",
    desc: "Language and forecasting models — search, summarisation, chat, and predictions trained on your own data to fit your domain.",
    points: ["Text & search", "Summarisation", "Forecasting", "Recommendations"],
    icon: (
      <svg viewBox="0 0 40 40">
        <path className="ln" d="M7 9 h26 a2 2 0 0 1 2 2 v14 a2 2 0 0 1-2 2 H18 l-7 6 v-6 H7 a2 2 0 0 1-2-2 V11 a2 2 0 0 1 2-2 Z" />
        <line className="ln ac" x1="12" y1="16" x2="28" y2="16" />
        <line className="ln ac" x1="12" y1="21" x2="23" y2="21" />
      </svg>
    ),
  },
];

const WHY = [
  { h: "Trained on your data", p: "Models tuned to your domain and your documents, not a generic one-size-fits-all engine." },
  { h: "Built to integrate", p: "AI that plugs into your existing systems and workflows, not a separate island of tooling." },
  { h: "Measured & reliable", p: "Validated for accuracy, with human checks kept in the loop wherever the stakes are high." },
  { h: "Yours to own", p: "Deployed in your environment. Your data stays yours, and so does the model built around it." },
];

const TECH = ["Python", "PyTorch", "TensorFlow", "FastAPI", "OpenCV", "scikit-learn", "AWS"];

export default function AiMlSolutionsPage() {
  useRouteClass("ai-ml");
  useScrollReveal(".rv");

  return (
    <div className="route-ai-ml">
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
            <span className="eyebrow mono">AI &amp; Machine Learning</span>
            <h1>
              AI &amp; Machine Learning <em>Solutions</em>
            </h1>
            <p>
              We build practical AI that solves real business problems — from
              automating document-heavy workflows to computer vision, natural
              language, and predictive models. Not AI for its own sake, but
              systems that save time, cut errors, and surface insight you can act
              on.
            </p>
            <Link href="/contact" className="cta">
              Contact now <span className="arr">→</span>
            </Link>
          </div>

          <div className="hero-art">
            <svg className="art-svg" viewBox="0 0 400 340" role="img" aria-label="Animated neural network illustration">
              <g className="float">
                <g className="soft">
                  <line className="ln ac dash" x1="92" y1="92" x2="200" y2="82" />
                  <line className="ln ac dash" x1="92" y1="92" x2="200" y2="170" />
                  <line className="ln ac dash" x1="92" y1="172" x2="200" y2="82" />
                  <line className="ln ac dash" x1="92" y1="172" x2="200" y2="170" />
                  <line className="ln ac dash" x1="92" y1="252" x2="200" y2="170" />
                  <line className="ln ac dash" x1="92" y1="252" x2="200" y2="258" />
                  <line className="ln ac dash" x1="200" y1="82" x2="308" y2="130" />
                  <line className="ln ac dash" x1="200" y1="170" x2="308" y2="130" />
                  <line className="ln ac dash" x1="200" y1="170" x2="308" y2="212" />
                  <line className="ln ac dash" x1="200" y1="258" x2="308" y2="212" />
                </g>
                <circle className="ln" cx="92" cy="92" r="12" />
                <circle className="ln" cx="92" cy="172" r="12" />
                <circle className="ln" cx="92" cy="252" r="12" />
                <circle className="fac pulse" cx="200" cy="82" r="12" />
                <circle className="fac pulse" cx="200" cy="170" r="12" style={{ animationDelay: "-0.7s" }} />
                <circle className="fac pulse" cx="200" cy="258" r="12" style={{ animationDelay: "-1.4s" }} />
                <circle className="ln ac" cx="308" cy="130" r="12" />
                <circle className="ln ac" cx="308" cy="212" r="12" />
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
          <h2 className="sec-title">Why work with us on AI?</h2>
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
          <h2>Have a problem AI could solve?</h2>
          <p>Let&apos;s see whether machine learning is the right fit for it.</p>
          <Link href="/contact" className="cta">
            Contact now <span className="arr">→</span>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}