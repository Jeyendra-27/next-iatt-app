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
    id: "acceptance",
    title: "Acceptance of terms",
    body: (
      <p>
        By accessing or using the IAT Solutions website and services, you agree to
        be bound by these Terms &amp; Conditions. If you do not agree with any part
        of these terms, please do not use our website or services.
      </p>
    ),
  },
  {
    id: "use",
    title: "Use of our services",
    body: (
      <p>
        You agree to use our website and services only for lawful purposes and in a
        way that does not infringe the rights of, restrict, or inhibit anyone
        else&apos;s use of the website. Any custom software, designs, or deliverables
        are governed by the specific agreement signed for that engagement.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <p>
        All content on this website — including text, graphics, logos, and code — is
        the property of IAT Solutions unless otherwise stated, and may not be
        reproduced without prior written permission. Ownership of project
        deliverables transfers as defined in the relevant project contract.
      </p>
    ),
  },
  {
    id: "payments",
    title: "Payments and engagements",
    body: (
      <p>
        Project scope, timelines, fees, and payment schedules are defined in
        individual proposals or contracts. Quotes are valid for the period stated in
        the proposal and are subject to change thereafter.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        IAT Solutions provides this website on an &quot;as is&quot; basis and makes no
        warranties regarding its availability or accuracy. To the fullest extent
        permitted by law, we are not liable for any indirect or consequential loss
        arising from the use of this website.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        We reserve the right to suspend or terminate access to our website or
        services where these terms are breached. Engagement-specific termination is
        governed by the applicable project agreement.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by and construed in accordance with the laws of
        India, and any disputes are subject to the exclusive jurisdiction of the
        courts of Chennai, Tamil Nadu.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:info@iattechnologies.com">info@iattechnologies.com</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
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
              <span>Terms &amp;</span>
            </span>
            <span className="ln">
              <span>
                <em>Conditions.</em>
              </span>
            </span>
          </h1>
          <p className="lead">
            The terms that govern your use of the IAT Solutions website and services.
            Please read them carefully before working with us.
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
          <h2>Questions about these terms?</h2>
          <p>
            We&apos;re happy to walk you through anything before an engagement
            begins. Reach out and we&apos;ll get back to you.
          </p>
          <Link href="/contact" className="btn">
            Get in touch <span className="arr">→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
