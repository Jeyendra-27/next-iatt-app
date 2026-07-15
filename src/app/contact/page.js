"use client";

import useRouteClass from "@/hooks/useRouteClass";
import GridCanvas from "@/components/GridCanvas";
import ContactForm from "@/components/ContactForm";
import "./contact.css";
import Footer from "@/components/Footer";

// Standard light-page grid (blue crosses, orange hot/center) — matches the original.
const BLUE = [39, 66, 245];
const SIGNAL = [255, 107, 53];

export default function ContactPage() {
  useRouteClass("contact");

  return (
    <div className="route-contact">
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

      <header className="chead">
        <div className="wrap">
          <span className="eyebrow mono">Get in touch</span>
          <h1>
            Let&apos;s build <em>something</em> together.
          </h1>
          <p>
            Tell us about your project, your timeline, or just the problem
            that&apos;s slowing your team down. We reply within one business day.
          </p>
        </div>
      </header>

      <main className="wrap">
        <div className="cgrid">
          {/* LEFT: form */}
          <section className="panel" id="form">
            <svg className="env" viewBox="0 0 120 120">
              <g className="fly">
                <rect className="ln" x="20" y="36" width="80" height="56" rx="6" />
                <path className="ln" d="M20 42 L60 70 L100 42" />
              </g>
            </svg>
            <span
              className="spark"
              style={{ width: "8px", height: "8px", right: "30px", top: "120px", animationDelay: ".5s" }}
            />
            <span
              className="spark"
              style={{ width: "6px", height: "6px", right: "70px", top: "90px", animationDelay: "1.4s" }}
            />
            <h2>Send us a message</h2>
            <p className="sub">
              Fill in a few details and we&apos;ll get the right person back to you.
            </p>
            <ContactForm />
          </section>

          {/* RIGHT: company info */}
          <aside className="panel right">
            <span className="mono">Company details</span>
            <h2 style={{ marginTop: "12px" }}>Reach us directly.</h2>
            <div className="info">
              <div className="irow">
                <div className="iico">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 6h16v12H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </div>
                <div>
                  <div className="ilab">Email</div>
                  <div className="ival">
                    info@iattechnologies.com
                  </div>
                </div>
              </div>
              <div className="irow">
                <div className="iico">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                  </svg>
                </div>
                <div>
                  <div className="ilab">Phone</div>
                  <div className="ival">
                    +91 8925671055<span>Mon–Fri, 9:30am–6:30pm IST</span>
                  </div>
                </div>
              </div>
              <div className="irow">
                <div className="iico">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="ilab">Office</div>
                  <div className="ival">
                    RV Towers<span>12-10, NH 45, Ramapuram, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032</span>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="hours">
              <span className="pulse-dot" /> Currently accepting new projects
            </div>*/}

            <div className="socials">
              <a className="soc" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.65 4.75 6.1V21H19v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.46-2.15 2.96V21h-4z" />
                </svg>
              </a>
              <a className="soc" href="https://www.instagram.com/iat_solutions/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2c2.7 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.07.06 1.41.06 4.14 0 2.7-.01 3.05-.06 4.12-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.16 1.77c-.55.56-1.11.9-1.77 1.16-.64.25-1.37.42-2.43.47-1.07.05-1.42.06-4.12.06-2.7 0-3.05-.01-4.12-.06-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12c0-2.7.01-3.05.06-4.12.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77.55-.56 1.11-.9 1.77-1.16.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2zm0 1.8c-2.66 0-2.98.01-4.03.06-.97.04-1.5.21-1.85.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.13.35-.3.88-.34 1.85C3.83 9.02 3.82 9.34 3.82 12s.01 2.98.06 4.03c.04.97.21 1.5.34 1.85.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.13.88.3 1.85.34 1.05.05 1.37.06 4.03.06s2.98-.01 4.03-.06c.97-.04 1.5-.21 1.85-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.13-.35.3-.88.34-1.85.05-1.05.06-1.37.06-4.03s-.01-2.98-.06-4.03c-.04-.97-.21-1.5-.34-1.85a3.1 3.1 0 00-.75-1.15 3.1 3.1 0 00-1.15-.75c-.35-.13-.88-.3-1.85-.34C14.98 3.81 14.66 3.8 12 3.8zm0 3.06a5.14 5.14 0 110 10.28 5.14 5.14 0 010-10.28zm0 1.8a3.34 3.34 0 100 6.68 3.34 3.34 0 000-6.68zm5.34-.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a className="soc" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}