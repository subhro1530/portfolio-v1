"use client";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaBrain,
  FaLaptopCode,
  FaClock,
  FaLink,
  FaAward,
  FaUserShield,
  FaTools,
  FaProjectDiagram,
  FaUsersCog,
} from "react-icons/fa";
import { useState } from "react";

export const Summary = () => {
  const highlights = [
    {
      title: "Intern @ Accenture",
      text: "Automation, SIEM, SOC workflows; Blue Prism, Power Automate, Splunk. Built secure workflows and dashboards.",
    },
    {
      title: "Security Analyst",
      text: "Threat detection, vulnerability assessment, SDLC hardening; OWASP, Burp, network defense and monitoring.",
    },
    {
      title: "Oracle Cloud Certified",
      text: "Architect Associate, Developer Professional; OCI networking, compute, IAM and cost-optimized deployments.",
    },
    {
      title: "ISC² CC | Fortinet",
      text: "Foundational security certs; hands-on firewall/VPN, SOC simulations, policy-based access control.",
    },
    {
      title: "Full‑Stack Dev (Next.js • MERN • PostgreSQL)",
      text: "React/Next, Node, API design, SQL/NoSQL; production deployments with CI/CD.",
    },
    {
      title: "Projects: WireWave, Nirbhaya, VitalityAI",
      text: "Secure messaging, safety app, AIoT healthcare; cloud, realtime UX, and E2E privacy.",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? highlights : highlights.slice(0, 4);

  return (
    <section
      id="summary"
      data-section="summary"
      className="relative min-h-screen flex items-center px-6 py-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neonpurp-400 via-neonmag-500 to-neonpurp-300 bg-clip-text text-transparent uppercase tracking-wider mb-2">
            Highlights
          </h2>
          <p className="text-sm text-gray-400">
            A quick snapshot of my profile, stack, and recent wins.
          </p>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {visible.map((h, i) => (
            <div
              key={i}
              className="relative p-5 rounded-xl border border-neonpurp-500/30 bg-[#140c20] shadow-[0_0_18px_-4px_rgba(255,0,212,0.35)]"
            >
              <div className="text-neonmag-100 text-sm font-semibold">
                {h.title}
              </div>
              <p className="text-sm sm:text-base text-gray-300">{h.text}</p>
            </div>
          ))}
        </div>
        {highlights.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-3 text-xs tracking-wide font-semibold rounded-full bg-neonmag-500 text-black hover:bg-neonmag-400 transition shadow-lg shadow-neonmag-500/30 active:scale-95"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
