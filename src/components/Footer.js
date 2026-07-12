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
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link href="/" className="logo">
              <img
                src="/images/iatt-logo.png"
                className="logo-mark"
                alt="IAT Solutions logo"
                width={26}
                height={26}
              />
              IAT Solutions
            </Link>
            <small>
              Custom software and AI solutions for businesses that have outgrown
              off-the-shelf tools.
            </small>
          </div>
          <div className="foot-links">
            <div>
              <span className="mono">Company</span>
              <ul>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/solutions">Work</Link></li>
                <li><Link href="/ai-solutions">AI Solutions</Link></li>
                <li><Link href="/web-ecommerce">Web &amp; E-commerce</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <span className="mono">Contact</span>
              <ul>
                <li><a href="mailto:info@iattechnologies.com">info@iattechnologies.com</a></li>
                <li><a href="#">+91 8925671055</a></li>
                <li><a href="#">Chennai, India</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy">
          <span>© {new Date().getFullYear()} IAT Solutions all rights reserved</span>
          <span className="legal-links">
            <button type="button" className="legal-link" onClick={() => setModal("terms")}>
              Terms &amp; Conditions
            </button>
            <button type="button" className="legal-link" onClick={() => setModal("privacy")}>
              Privacy Policy
            </button>
          </span>
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