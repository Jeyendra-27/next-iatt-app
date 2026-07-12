"use client";

import { useState } from "react";

/* Each industry: a name, a short description (shown up top on hover), and an
   animated line-icon in the same style as the services page. */
const INDUSTRIES = [
  {
    name: "Healthcare",
    desc: "Patient platforms, clinic management, and privacy-minded systems for care providers.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <rect x="6" y="9" width="36" height="26" rx="4" className="ln" />
        <line x1="20" y1="40" x2="28" y2="40" className="ln" />
        <line x1="24" y1="35" x2="24" y2="40" className="ln" />
        <polyline className="ln ac draw" points="11,23 18,23 21,15 26,31 30,23 37,23" />
        <circle className="fac pulse" cx="21" cy="15" r="1.9" />
      </svg>
    ),
  },
  {
    name: "Finance",
    desc: "Dashboards, payments, and reporting tools for fintech and finance teams.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <line x1="8" y1="40" x2="40" y2="40" className="ln" />
        <rect className="fac bar b1" x="11" y="22" width="5" height="16" rx="1" />
        <rect className="fac bar b2" x="21" y="16" width="5" height="22" rx="1" />
        <rect className="fac bar b3" x="31" y="11" width="5" height="27" rx="1" />
        <polyline className="ln ac draw" points="10,31 20,25 30,17 38,11" />
        <path className="ln ac" d="M34 11 h4 v4" />
      </svg>
    ),
  },
  {
    name: "Retail",
    desc: "In-store POS, inventory, and loyalty systems for legacy and modern retail brands.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <path className="ln" d="M14 17 h20 l-2 20 a2 2 0 0 1-2 2 H18 a2 2 0 0 1-2-2 Z" />
        <path className="ln" d="M19 17 v-2 a5 5 0 0 1 10 0 v2" />
        <circle className="fac pulse" cx="24" cy="27" r="2.4" />
      </svg>
    ),
  },
  {
    name: "E-commerce",
    desc: "Online stores, checkout flows, and inventory systems that scale with sales.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <path className="ln" d="M7 11 h4 l3.2 17 h19 l3 -12 H15.5" />
        <circle className="ln" cx="18" cy="35" r="2.6" />
        <circle className="ln" cx="33" cy="35" r="2.6" />
        <circle className="fac pulse" cx="26" cy="17" r="2.2" />
      </svg>
    ),
  },
  {
    name: "Restaurant",
    desc: "Online ordering, reservations, POS, kitchen and restaurant workflow systems.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <path className="ln ac steam s1" d="M18 9 q-2 3 0 6" />
        <path className="ln ac steam s2" d="M24 7 q-2 3 0 6" />
        <path className="ln ac steam s3" d="M30 9 q-2 3 0 6" />
        <path className="ln" d="M10 32 a14 14 0 0 1 28 0" />
        <line className="ln" x1="7" y1="32" x2="41" y2="32" />
        <line className="ln" x1="11" y1="37" x2="37" y2="37" />
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    desc: "Production tracking, issue tracking, inventory, and ERP systems for the factory floor.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <g className="spin">
          <circle className="ln" cx="21" cy="21" r="7" />
          <circle className="ln ac" cx="21" cy="21" r="2.6" />
          <line className="ln" x1="21" y1="8" x2="21" y2="12" />
          <line className="ln" x1="21" y1="30" x2="21" y2="34" />
          <line className="ln" x1="8" y1="21" x2="12" y2="21" />
          <line className="ln" x1="30" y1="21" x2="34" y2="21" />
          <line className="ln" x1="11.8" y1="11.8" x2="14.6" y2="14.6" />
          <line className="ln" x1="27.4" y1="27.4" x2="30.2" y2="30.2" />
          <line className="ln" x1="30.2" y1="11.8" x2="27.4" y2="14.6" />
          <line className="ln" x1="14.6" y1="27.4" x2="11.8" y2="30.2" />
        </g>
        <g className="spin2">
          <circle className="ln" cx="35" cy="34" r="4.5" />
          <circle className="ln ac" cx="35" cy="34" r="1.6" />
          <line className="ln" x1="35" y1="27" x2="35" y2="30" />
          <line className="ln" x1="35" y1="38" x2="35" y2="41" />
          <line className="ln" x1="28" y1="34" x2="31" y2="34" />
          <line className="ln" x1="39" y1="34" x2="42" y2="34" />
        </g>
      </svg>
    ),
  },
  {
    name: "Logistics",
    desc: "Fleet tracking, route planning, and warehouse systems for moving goods.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <line className="ln ac road" x1="4" y1="38" x2="44" y2="38" />
        <g className="truckmove">
          <rect className="ln" x="8" y="17" width="18" height="13" rx="1.5" />
          <path className="ln" d="M26 21 h6 l5 5 v4 h-11 z" />
          <circle className="fac" cx="15" cy="32" r="2.4" />
          <circle className="fac" cx="31" cy="32" r="2.4" />
        </g>
      </svg>
    ),
  },
  {
    name: "Real Estate",
    desc: "Listing portals, CRM, and management tools for property and construction.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <rect x="10" y="14" width="28" height="26" rx="1.5" className="ln" />
        <rect className="fac win w1" x="15" y="19" width="4" height="4" />
        <rect className="fac win w2" x="22" y="19" width="4" height="4" />
        <rect className="fac win w3" x="29" y="19" width="4" height="4" />
        <rect className="fac win w4" x="15" y="27" width="4" height="4" />
        <rect className="fac win w5" x="22" y="27" width="4" height="4" />
        <rect className="fac win w6" x="29" y="27" width="4" height="4" />
      </svg>
    ),
  },
  {
    name: "Education",
    desc: "Learning platforms, student portals, and admin tools for schools and edtech.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <path className="ln" d="M24 12 L40 19 L24 26 L8 19 Z" />
        <path className="ln" d="M14 22 v7 c0 3 20 3 20 0 v-7" />
        <line className="ln ac tassel" x1="40" y1="19" x2="40" y2="30" />
        <circle className="fac" cx="40" cy="31" r="1.8" />
        <circle className="fac pulse" cx="24" cy="29" r="1.7" />
      </svg>
    ),
  },
  {
    name: "Marketing",
    desc: "Campaign dashboards, analytics, and automation for marketing teams.",
    icon: (
      <svg viewBox="0 0 48 48" className="ind-svg">
        <path className="ln" d="M7 20 L26 13 V35 L7 28 Z" />
        <path className="ln" d="M12 28 l3 9 h4 l-2 -7" />
        <path className="ln ac wave wa1" d="M30 18 a8 8 0 0 1 0 12" />
        <path className="ln ac wave wa2" d="M34 14 a14 14 0 0 1 0 20" />
        <path className="ln ac wave wa3" d="M38 10 a20 20 0 0 1 0 28" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="industries" id="industries">
      <div className="wrap">
        <div className="ind-head rv">
          <span className="mono">Domains we power</span>
          {/* key={} remounts the heading so the text fades when it swaps */}
          <h2 className="ind-title" key={active ? active.name : "_default"}>
            {active
              ? active.desc
              : "Helping leading industries overcome their most complex operational problems with intelligent systems"}
          </h2>
        </div>

        <div className="ind-grid rv">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="ind-box"
              onMouseEnter={() => setActive(ind)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(ind)}
            >
              <div className="ind-icon">{ind.icon}</div>
              <span className="ind-name">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}