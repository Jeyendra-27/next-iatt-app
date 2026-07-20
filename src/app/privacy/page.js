"use client";

import Link from "next/link";
import useRouteClass from "@/hooks/useRouteClass";
import useScrollReveal from "@/hooks/useScrollReveal";
import GridCanvas from "@/components/GridCanvas";
import Footer from "@/components/Footer";
import "../legal.css";

const BLUE = [39, 66, 245];
const SIGNAL = [255, 107, 53];

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <p>
        This Privacy Policy explains how IAT Solutions collects, uses, and protects
        the information you provide when you use our website or contact us. We are
        committed to keeping your information secure and using it responsibly.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <p>
        We may collect information you provide directly — such as your name, email,
        phone number, company, and message — when you fill out our contact form or
        email us. We may also collect basic, non-identifying usage data such as
        pages visited and browser type.
      </p>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <p>
        We use your information to respond to enquiries, provide and improve our
        services, send relevant updates you have requested, and meet legal or
        contractual obligations. We do not sell your personal information.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        Our website may use cookies and similar technologies to understand how the
        site is used and to improve your experience. You can control or disable
        cookies through your browser settings.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of information",
    body: (
      <p>
        We do not share your personal information with third parties except where
        necessary to deliver our services (for example, trusted infrastructure
        providers), or where required by law.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data security",
    body: (
      <p>
        We take reasonable technical and organisational measures to protect your
        information against unauthorised access, loss, or misuse. However, no method
        of transmission over the internet is completely secure.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of the personal
        information we hold about you. To make a request, contact us using the
        details below.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        For any privacy-related questions, email us at{" "}
        <a href="mailto:info@iattechnologies.com">info@iattechnologies.com</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  useRouteClass("legal");
  useScrollReveal(".rv");

  return (
    <div className="route-legal">
      <GridCanvas
        gap={48}
        radius={190}
        spotlight={{ color: BLUE, alpha: 0.07 }}
        link={{ color: BLUE, mult: 0.5 }}
        coldCross={{ color: BLUE, base: 0.15, range: 0.75 }}
        hotCross={{ color: SIGNAL, base: 0.35, range: 0.65 }}
        crosshair={{ color: BLUE, alpha: 0.4 }}
        center={{ color: SIGNAL, alpha: 0.9 }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow mono">Legal</span>
          <h1>
            <span className="ln">
              <span>Privacy</span>
            </span>
            <span className="ln">
              <span>
                <em>Policy.</em>
              </span>
            </span>
          </h1>
          <p className="lead">
            How IAT Solutions collects, uses, and protects the information you share
            with us. Your data stays secure and is used responsibly.
          </p>
          <p className="updated">Last updated: January 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="legal-body">
        <div className="wrap legal-grid">
          <aside className="legal-toc rv">
            <div className="toc-head">On this page</div>
            <ol>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="legal-article rv d1">
            {SECTIONS.map((s, i) => (
              <div className="legal-sec" id={s.id} key={s.id}>
                <h2>
                  <span className="idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                {s.body}
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* CTA */}
      <div className="wrap">
        <div className="cta-box rv">
          <h2>Questions about your data?</h2>
          <p>
            If you&apos;d like to access, correct, or delete the information we hold
            about you, get in touch and we&apos;ll help.
          </p>
          <Link href="/contact" className="btn">
            Contact us <span className="arr">→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
