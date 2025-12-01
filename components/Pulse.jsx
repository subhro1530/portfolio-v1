"use client";
import { motion, useInView } from "framer-motion";
import {
  FaBolt,
  FaCloud,
  FaLock,
  FaRocket,
  FaLeaf,
  FaGlobeAsia,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const StatCard = ({ icon, label, value, suffix = "", detail, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || typeof value !== "number") return;
    let frame;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        e.currentTarget.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(255,0,212,0.22), transparent 55%), linear-gradient(160deg,#1c0f28,#11061a)`;
      }}
      className="group relative rounded-2xl border border-neonpurp-500/35 bg-[#11061a] p-5 sm:p-6 shadow-[0_0_26px_-8px_rgba(255,0,212,0.5)]"
    >
      <div className="flex items-center gap-3 text-neonmag-100">
        <span className="w-10 h-10 rounded-2xl bg-neonmag-500/10 flex items-center justify-center text-lg">
          {icon}
        </span>
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          {label}
        </p>
      </div>
      <div className="mt-3 text-3xl sm:text-4xl font-semibold">
        {typeof value === "number" ? count : value}
        <span className="text-neonmag-300 text-2xl align-top ml-1">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-300 leading-relaxed break-words">
        {detail}
      </p>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-neonmag-500/10 to-transparent transition" />
    </motion.div>
  );
};

export const Pulse = () => {
  const stats = [
    {
      icon: <FaRocket />,
      label: "projects shipped",
      value: 32,
      suffix: "+",
      detail:
        "Full-stack builds, SIEM automations, and civic safety platforms shipped since 2022.",
    },
    {
      icon: <FaLock />,
      label: "security drills",
      value: 18,
      suffix: "+",
      detail:
        "Offensive + defensive simulations spanning Splunk, Fortinet, TryHackMe, and SOC playbooks.",
    },
    {
      icon: <FaCloud />,
      label: "cloud launches",
      value: 14,
      suffix: "+",
      detail:
        "Deployments across AWS, OCI, and Azure with IaC, IAM hardening, and observability baked in.",
    },
    {
      icon: <FaBolt />,
      label: "avg. response",
      value: "< 2h",
      detail:
        "For inbound collabs during IST working hours. Async handoffs documented on Notion + Linear.",
    },
  ];

  const streams = [
    {
      title: "Now Building",
      items: [
        "Automation cockpit that pairs Splunk alerts with Power Automate remediation flows.",
        "WireWave 2.0 rollout with multi-device session continuity and signal hardening.",
        "Real-time governance layer for Accenture AEH cohorts (OKR tracker + update feed).",
      ],
    },
    {
      title: "What Teams Get",
      items: [
        "Clear architectural decision logs and Loom walkthroughs within 24h of a major change.",
        "Infra diagrams + DPIA friendly documentation for every security-sensitive release.",
        "Release hygiene: unit + smoke scripts, dashboards, and rollback notes bundled in repo.",
      ],
    },
    {
      title: "Energy Zones",
      items: [
        "Early mornings (IST) for deep build sprints and async pairing.",
        "Late evenings reserved for incident/game-day drills when stakes are high.",
        "Weekends for open source cleanups and design exploration sprints.",
      ],
    },
  ];

  return (
    <section
      id="pulse"
      data-section="pulse"
      className="relative min-h-[70vh] px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.55em] text-neonmag-300 mb-2">
            Signal Board
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neonpurp-400 via-neonmag-500 to-neonpurp-300 bg-clip-text text-transparent uppercase tracking-wider">
            Momentum Pulse
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-2xl mx-auto">
            Live snapshot of throughput, reliability, and how collaborators plug
            into my current focus zones.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <StatCard key={stat.label} {...stat} delay={idx * 0.08} />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {streams.map((stream, idx) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="relative rounded-2xl border border-neonpurp-500/30 bg-[#14071d] p-6 shadow-[0_0_28px_-10px_rgba(255,0,212,0.5)]"
            >
              <div className="flex items-center gap-2 text-neonmag-100">
                <FaLeaf className="text-base" />
                <p className="text-xs uppercase tracking-[0.45em] text-gray-400">
                  {stream.title}
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                {stream.items.map((item, i) => (
                  <li key={i} className="relative pl-5 leading-relaxed">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-neonmag-500 animate-pulse" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
