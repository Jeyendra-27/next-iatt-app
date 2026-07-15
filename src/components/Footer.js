"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ---- Replace this placeholder text with your real legal wording ---- */
function TermsBody() {
  return (
    <>
      <p className="legal-updated">Last updated: January 2026</p>
      <h4>1. Acceptance of terms</h4>
      <p>
        By accessing or using the IAT Solutions website and services, you agree to
        be bound by these Terms &amp; Conditions. If you do not agree with any part
        of these terms, please do not use our website or services.
      </p>
      <h4>2. Use of our services</h4>
      <p>
        You agree to use our website and services only for lawful purposes and in a
        way that does not infringe the rights of, restrict, or inhibit anyone
        else&apos;s use of the website. Any custom software, designs, or deliverables
        are governed by the specific agreement signed for that engagement.
      </p>
      <h4>3. Intellectual property</h4>
      <p>
        All content on this website — including text, graphics, logos, and code — is
        the property of IAT Solutions unless otherwise stated, and may not be
        reproduced without prior written permission. Ownership of project
        deliverables transfers as defined in the relevant project contract.
      </p>
      <h4>4. Payments and engagements</h4>
      <p>
        Project scope, timelines, fees, and payment schedules are defined in
        individual proposals or contracts. Quotes are valid for the period stated in
        the proposal and are subject to change thereafter.
      </p>
      <h4>5. Limitation of liability</h4>
      <p>
        IAT Solutions provides this website on an &quot;as is&quot; basis and makes no
        warranties regarding its availability or accuracy. To the fullest extent
        permitted by law, we are not liable for any indirect or consequential loss
        arising from the use of this website.
      </p>
      <h4>6. Termination</h4>
      <p>
        We reserve the right to suspend or terminate access to our website or
        services where these terms are breached. Engagement-specific termination is
        governed by the applicable project agreement.
      </p>
      <h4>7. Governing law</h4>
      <p>
        These terms are governed by and construed in accordance with the laws of
        India, and any disputes are subject to the exclusive jurisdiction of the
        courts of Chennai, Tamil Nadu.
      </p>
      <h4>8. Contact</h4>
      <p>
        Questions about these terms can be sent to info@iattechnologies.com.
      </p>
    </>
  );
}

function PrivacyBody() {
  return (
    <>
      <p className="legal-updated">Last updated: January 2026</p>
      <h4>1. Introduction</h4>
      <p>
        This Privacy Policy explains how IAT Solutions collects, uses, and protects
        the information you provide when you use our website or contact us. We are
        committed to keeping your information secure and using it responsibly.
      </p>
      <h4>2. Information we collect</h4>
      <p>
        We may collect information you provide directly — such as your name, email,
        phone number, company, and message — when you fill out our contact form or
        email us. We may also collect basic, non-identifying usage data such as
        pages visited and browser type.
      </p>
      <h4>3. How we use your information</h4>
      <p>
        We use your information to respond to enquiries, provide and improve our
        services, send relevant updates you have requested, and meet legal or
        contractual obligations. We do not sell your personal information.
      </p>
      <h4>4. Cookies</h4>
      <p>
        Our website may use cookies and similar technologies to understand how the
        site is used and to improve your experience. You can control or disable
        cookies through your browser settings.
      </p>
      <h4>5. Sharing of information</h4>
      <p>
        We do not share your personal information with third parties except where
        necessary to deliver our services (for example, trusted infrastructure
        providers), or where required by law.
      </p>
      <h4>6. Data security</h4>
      <p>
        We take reasonable technical and organisational measures to protect your
        information against unauthorised access, loss, or misuse. However, no method
        of transmission over the internet is completely secure.
      </p>
      <h4>7. Your rights</h4>
      <p>
        You may request access to, correction of, or deletion of the personal
        information we hold about you. To make a request, contact us using the
        details below.
      </p>
      <h4>8. Contact</h4>
      <p>
        For any privacy-related questions, email us at info@iattechnologies.com.
      </p>
    </>
  );
}

const SERVICE_LINKS = [
  { href: "/services/crm-hrm-erp", label: "CRM, HRMS & ERP" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/custom-web-applications", label: "Custom Web Applications" },
  { href: "/services/cms-website-development", label: "CMS & Website Development" },
  { href: "/services/ai-ml-solutions", label: "AI & Machine Learning" },
  { href: "/services/software-testing-qa", label: "Software Testing & QA" },
];

export default function Footer() {
  const [modal, setModal] = useState(null); // "terms" | "privacy" | null

  // close on Escape + lock background scroll while open
  useEffect(() => {
    if (!modal) return;
    const onKey = (e) => {
      if (e.key === "Escape") setModal(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modal]);

  return (
    <footer className="site-foot">
      <div className="sf-wrap">
        {/* top: blurb + link columns */}
        <div className="sf-top">
          <div className="sf-blurb">
            <small>
              Custom software and AI solutions for businesses that have outgrown
              off-the-shelf tools.
            </small>
          </div>

          <div className="sf-col">
            <span className="sf-head">Company</span>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/solutions">Work</Link></li>
              <li><Link href="/ai-solutions">AI Solutions</Link></li>
              <li><Link href="/web-ecommerce">Web &amp; E-commerce</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="sf-col">
            <span className="sf-head">Our Services</span>
            <ul>
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sf-col">
            <span className="sf-head">Contact</span>
            <ul>
              <li><a href="mailto:info@iattechnologies.com">info@iattechnologies.com</a></li>
              <li><a href="#">+91 8925671055</a></li>
              <li><a href="#">Chennai, India</a></li>
            </ul>
          </div>
        </div>

        {/* giant brand signature */}
        <Link href="/" className="sf-brand" aria-label="IAT Solutions — home">
          <img
            src="/images/iatt-logo.png"
            alt="IAT Solutions logo"
            className="sf-brand-mark"
          />
          <span className="sf-brand-word">IAT Solutions</span>
        </Link>

        {/* bottom row: copyright + legal (left) · socials (right) */}
        <div className="sf-bottom">
          <div className="sf-legal">
            <span>© {new Date().getFullYear()} IAT Solutions all rights reserved</span>
            <button type="button" className="legal-link" onClick={() => setModal("terms")}>
              Terms &amp; Conditions
            </button>
            <button type="button" className="legal-link" onClick={() => setModal("privacy")}>
              Privacy Policy
            </button>
          </div>

          <div className="sf-socials">
            {/* add your profile URLs in place of "#" */}
            <a className="sf-soc" href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.65 4.75 6.1V21H19v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.46-2.15 2.96V21h-4z" />
              </svg>
            </a>
            <a className="sf-soc" href="https://www.instagram.com/iat_solutions/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
                <path d="M12 2c2.7 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.07.06 1.41.06 4.14 0 2.7-.01 3.05-.06 4.12-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.16 1.77c-.55.56-1.11.9-1.77 1.16-.64.25-1.37.42-2.43.47-1.07.05-1.42.06-4.12.06-2.7 0-3.05-.01-4.12-.06-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12c0-2.7.01-3.05.06-4.12.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77.55-.56 1.11-.9 1.77-1.16.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2zm0 1.8c-2.66 0-2.98.01-4.03.06-.97.04-1.5.21-1.85.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.13.35-.3.88-.34 1.85C3.83 9.02 3.82 9.34 3.82 12s.01 2.98.06 4.03c.04.97.21 1.5.34 1.85.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.13.88.3 1.85.34 1.05.05 1.37.06 4.03.06s2.98-.01 4.03-.06c.97-.04 1.5-.21 1.85-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.13-.35.3-.88.34-1.85.05-1.05.06-1.37.06-4.03s-.01-2.98-.06-4.03c-.04-.97-.21-1.5-.34-1.85a3.1 3.1 0 00-.75-1.15 3.1 3.1 0 00-1.15-.75c-.35-.13-.88-.3-1.85-.34C14.98 3.81 14.66 3.8 12 3.8zm0 3.06a5.14 5.14 0 110 10.28 5.14 5.14 0 010-10.28zm0 1.8a3.34 3.34 0 100 6.68 3.34 3.34 0 000-6.68zm5.34-.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a className="sf-soc" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {modal && (
        <div className="legal-overlay" onClick={() => setModal(null)}>
          <div
            className="legal-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="legal-modal-head">
              <h3>{modal === "terms" ? "Terms & Conditions" : "Privacy Policy"}</h3>
              <button
                type="button"
                className="legal-close"
                aria-label="Close"
                onClick={() => setModal(null)}
              >
                ×
              </button>
            </div>
            <div className="legal-modal-body">
              {modal === "terms" ? <TermsBody /> : <PrivacyBody />}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}