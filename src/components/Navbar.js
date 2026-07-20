"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, Fragment } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Do" },
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

// Our Works pages — grouped under the "Our Works" dropdown.
const WORKS_PAGES = [
  { href: "/solutions", label: "Custom Solutions" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/web-ecommerce", label: "Web & E-commerce" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [ddOpen, setDdOpen] = useState(null); // desktop dropdown: null | "services" | "works"
  const [ddPos, setDdPos] = useState(null); // desktop dropdown position
  const [drawerSub, setDrawerSub] = useState(null); // mobile sub-list: null | "services" | "works"

  const servicesTriggerRef = useRef(null);
  const worksTriggerRef = useRef(null);
  const menuRef = useRef(null);

  const onServicePage = pathname.startsWith("/services/");
  const onWorksPage = WORKS_PAGES.some((w) => pathname === w.href);

  // Close everything on route change
  useEffect(() => {
    setOpen(false);
    setDdOpen(null);
    setDrawerSub(null);
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
        servicesTriggerRef.current?.contains(e.target) ||
        worksTriggerRef.current?.contains(e.target) ||
        menuRef.current?.contains(e.target)
      )
        return;
      setDdOpen(null);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setDdOpen(null);
    };
    const onResize = () => setDdOpen(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [ddOpen]);

  const toggleDd = (key, ref) => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setDdPos({ left: r.left + r.width / 2, top: r.bottom + 10 });
    setDdOpen((v) => (v === key ? null : key));
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

              {/* Our Services + Our Works dropdowns — sit right after "What We Do" */}
              {l.href === "/services" && (
                <>
                  <button
                    ref={servicesTriggerRef}
                    type="button"
                    className={`nav-dd-trigger${ddOpen === "services" || onServicePage ? " active" : ""}`}
                    onClick={() => toggleDd("services", servicesTriggerRef)}
                    aria-haspopup="true"
                    aria-expanded={ddOpen === "services"}
                  >
                    Our Services <span className="chev">▾</span>
                  </button>
                  <button
                    ref={worksTriggerRef}
                    type="button"
                    className={`nav-dd-trigger${ddOpen === "works" || onWorksPage ? " active" : ""}`}
                    onClick={() => toggleDd("works", worksTriggerRef)}
                    aria-haspopup="true"
                    aria-expanded={ddOpen === "works"}
                  >
                    Our Works <span className="chev">▾</span>
                  </button>
                </>
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
        <span className="dd-head">
          {ddOpen === "works" ? "Our Works" : "Service pages"}
        </span>
        {(ddOpen === "works" ? WORKS_PAGES : SERVICE_PAGES).map((s) => (
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

              {/* Our Services + Our Works — expandable sub-lists, right after "What We Do" */}
              {l.href === "/services" && (
                <>
                  <button
                    type="button"
                    className={`nav-drawer-sub-toggle${drawerSub === "services" ? " open" : ""}`}
                    onClick={() =>
                      setDrawerSub((v) => (v === "services" ? null : "services"))
                    }
                    aria-expanded={drawerSub === "services"}
                  >
                    Our Services <span className="chev">▾</span>
                  </button>
                  <div className={`nav-drawer-sub${drawerSub === "services" ? " open" : ""}`}>
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

                  <button
                    type="button"
                    className={`nav-drawer-sub-toggle${drawerSub === "works" ? " open" : ""}`}
                    onClick={() =>
                      setDrawerSub((v) => (v === "works" ? null : "works"))
                    }
                    aria-expanded={drawerSub === "works"}
                  >
                    Our Works <span className="chev">▾</span>
                  </button>
                  <div className={`nav-drawer-sub${drawerSub === "works" ? " open" : ""}`}>
                    {WORKS_PAGES.map((s) => (
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
