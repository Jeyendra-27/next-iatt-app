"use client";

import Link from "next/link";

const SERVICE_LINKS = [
  { href: "/services/crm-hrm-erp", label: "CRM, HRMS & ERP" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/custom-web-applications", label: "Custom Web Applications" },
  { href: "/services/cms-website-development", label: "CMS & Website Development" },
  { href: "/services/ai-ml-solutions", label: "AI & Machine Learning" },
  { href: "/services/software-testing-qa", label: "Software Testing & QA" },
];

// Our Works pages — grouped to match the "Our Works" nav dropdown.
const WORKS_LINKS = [
  { href: "/solutions", label: "Custom Solutions" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/web-ecommerce", label: "Web & E-commerce" },
];

export default function Footer() {
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
              <li><Link href="/services">What We Do</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="sf-col">
            <span className="sf-head">Our Works</span>
            <ul>
              {WORKS_LINKS.map((w) => (
                <li key={w.href}>
                  <Link href={w.href}>{w.label}</Link>
                </li>
              ))}
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
        </div>

        {/* giant brand signature */}
        <Link href="/" className="sf-brand" aria-label="IAT Solutions — home">
          <img
            src="/images/iatt-logo.png"
            alt="IAT Solutions logo"
            className="sf-brand-mark"
          />
          <svg
            className="sf-brand-word"
            viewBox="0 0 720 104"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <text
              x="0"
              y="84"
              textLength="720"
              lengthAdjust="spacingAndGlyphs"
              className="sf-brand-text"
            >
              IAT Solutions
            </text>
          </svg>
        </Link>

        {/* bottom row: copyright + legal (left) · socials (right) */}
        <div className="sf-bottom">
          <div className="sf-legal">
            <span>© {new Date().getFullYear()} IAT Solutions all rights reserved</span>
            <Link href="/terms" className="legal-link">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="legal-link">
              Privacy Policy
            </Link>
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
    </footer>
  );
}