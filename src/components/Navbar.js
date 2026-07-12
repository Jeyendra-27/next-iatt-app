"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, Fragment } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Do" },
  { href: "/solutions", label: "Our Works" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/web-ecommerce", label: "Web & E-commerce" },
  { href: "/contact", label: "Contact" },
];

// Dedicated service pages — add more here as we build them.
const SERVICE_PAGES = [
  { href: "/services/crm-hrm-erp", label: "CRM, HRMS & ERP" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/custom-web-applications", label: "Custom Web Applications" },
  { href: "/services/cms-website-development", label: "CMS & Website Development" },
  { href: "/services/ai-ml-solutions", label: "AI & Machine Learning" },
  { href: "/services/software-testing-qa", label: "Software Testing & QA" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [ddOpen, setDdOpen] = useState(false); // desktop dropdown
  const [ddPos, setDdPos] = useState(null); // desktop dropdown position
  const [drawerSub, setDrawerSub] = useState(false); // mobile sub-list

  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const onServicePage = pathname.startsWith("/services/");

  // Close everything on route change
  useEffect(() => {
    setOpen(false);
    setDdOpen(false);
    setDrawerSub(false);
  }, [pathname]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Desktop dropdown: outside-click + Escape + close on resize
  useEffect(() => {
    if (!ddOpen) return;
    const onDown = (e) => {
      if (
        triggerRef.current?.contains(e.target) ||
        menuRef.current?.contains(e.target)
      )
        return;
      setDdOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setDdOpen(false);
    };
    const onResize = () => setDdOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [ddOpen]);

  const toggleDd = () => {
    const r = triggerRef.current?.getBoundingClientRect();
    if (r) setDdPos({ left: r.left + r.width / 2, top: r.bottom + 10 });
    setDdOpen((v) => !v);
  };

  return (
    <>
      <nav>
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

        {/* Desktop links */}
        <div className="nav-links">
          {LINKS.map((l) => (
            <Fragment key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? "on" : undefined}
              >
                {l.label}
              </Link>

              {/* Our Services dropdown — sits right after "What We Do" */}
              {l.href === "/services" && (
                <button
                  ref={triggerRef}
                  type="button"
                  className={`nav-dd-trigger${ddOpen || onServicePage ? " active" : ""}`}
                  onClick={toggleDd}
                  aria-haspopup="true"
                  aria-expanded={ddOpen}
                >
                  Our Services <span className="chev">▾</span>
                </button>
              )}
            </Fragment>
          ))}
        </div>

        <Link href="/contact" className="nav-cta nav-cta-desktop">
          Start a project <span className="arr">→</span>
        </Link>

        {/* Hamburger button — mobile/tablet only */}
        <button
          className={`nav-burger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Desktop dropdown menu — rendered outside <nav> so it isn't clipped */}
      <div
        ref={menuRef}
        className={`nav-dd-menu${ddOpen ? " open" : ""}`}
        style={ddPos ? { left: ddPos.left, top: ddPos.top } : undefined}
        role="menu"
      >
        <span className="dd-head">Service pages</span>
        {SERVICE_PAGES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={pathname === s.href ? "on" : undefined}
            role="menuitem"
          >
            {s.label}
          </Link>
        ))}
      </div>

      {/* Mobile drawer overlay */}
      <div
        className={`nav-drawer-overlay${open ? " active" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? " active" : ""}`} role="dialog" aria-modal="true">
        <div className="nav-drawer-header">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <img
              src="/images/iatt-logo.png"
              className="logo-mark"
              alt="IAT Solutions logo"
              width={26}
              height={26}
            />
            IAT Solutions
          </Link>
          <button
            className="nav-drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="nav-drawer-links">
          {LINKS.map((l) => (
            <Fragment key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? "on" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>

              {/* Our Services — expandable sub-list, right after "What We Do" */}
              {l.href === "/services" && (
                <>
                  <button
                    type="button"
                    className={`nav-drawer-sub-toggle${drawerSub ? " open" : ""}`}
                    onClick={() => setDrawerSub((v) => !v)}
                    aria-expanded={drawerSub}
                  >
                    Our Services <span className="chev">▾</span>
                  </button>
                  <div className={`nav-drawer-sub${drawerSub ? " open" : ""}`}>
                    {SERVICE_PAGES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={pathname === s.href ? "on" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </Fragment>
          ))}
        </div>

        <Link href="/contact" className="nav-cta nav-drawer-cta" onClick={() => setOpen(false)}>
          Start a project <span className="arr">→</span>
        </Link>
      </div>
    </>
  );
}