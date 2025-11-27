"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Hero = () => {
  // buzzwords and socialLinks are at the top so editing is easy
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/shaswata-saha-74b209251",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:shaswata.ssaha@gmail.com",
      label: "Email",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/subhro1530",
      label: "GitHub",
    },
  ];

  const buzzwords = [
    "Builder.",
    "Defender.",
    "Visionary.",
    "Innovator.",
    "Educator.",
    "Explorer.",
    "Creator.",
    "Leader.",
    "Mentor.",
    "Collaborator.",
  ];

  const [current, setCurrent] = useState(0);
  const [gradPos, setGradPos] = useState({ x: 50, y: 50 });
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % buzzwords.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const smoothX = useSpring(rx, { stiffness: 140, damping: 18 });
  const smoothY = useSpring(ry, { stiffness: 140, damping: 18 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    rx.set(y);
    ry.set(x);
  };

  const handleSectionMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const reactive = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <section
      id="hero"
      data-section="hero"
      className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${gradPos.x}% ${gradPos.y}%, rgba(255,0,212,0.30), transparent 60%),
          linear-gradient(135deg,#12081c,#1a0d29 55%,#0d0615 85%)
        `,
      }}
      onPointerMove={(e) => {
        handleSectionMove(e);
        reactive(e);
      }}
    >
      {/* radial highlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255,0,212,0.18), transparent 45%)`,
        }}
      />
      {/* animated swirl overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[140%] h-[140%] -left-[20%] -top-[20%] rounded-full bg-gradient-to-tr from-cyanf-400/5 via-transparent to-cyanf-300/5 animate-swirl" />
      </div>
      {/* Glass container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-14 sm:py-16 lg:py-28 space-y-8 lg:space-y-0">
        {/* Left Column */}
        <motion.div
          className="text-center lg:text-left space-y-4 sm:space-y-5 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Top CV highlights (new, kept at top) */}
          <div className="mb-3 sm:mb-4">
            <div className="text-sm sm:text-base text-neonmag-100 font-semibold">
              Full‑Stack Developer · Cloud & Cybersecurity
            </div>
            <div className="mt-1 text-xs sm:text-sm text-gray-300">
              Next.js · React Native · Node.js · PostgreSQL · MongoDB · AWS ·
              OCI · Splunk SIEM
            </div>
            <div className="mt-1 text-xs sm:text-sm text-gray-400">
              Certifications: Oracle OCI (Foundations/Architect), ISC² CC,
              Fortinet NSE Fundamentals
            </div>
          </div>

          <h2 className="text-[11px] sm:text-xs font-mono tracking-wider bg-gradient-to-r from-neonmag-500 via-neonpurp-400 to-neonmag-300 bg-clip-text text-transparent">
            <span className="inline-block h-1 w-6 rounded bg-neonmag-500 animate-pulse-slow mr-2" />
            Hello there, I am
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-tight bg-gradient-to-r from-neonmag-500 via-neonpurp-400 to-neonmag-300 bg-clip-text text-transparent break-words">
            Shaswata Saha
          </h1>

          {/* Role line stays concise */}
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 break-words">
            Full‑Stack Engineer · Ethical Hacker · UI + Infra artisan.
          </p>

          <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-neonpurp-400 to-neonmag-500 bg-clip-text text-transparent">
            {buzzwords[current]}
          </p>
          <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center lg:justify-start flex-wrap">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="border border-neonmag-500 px-3 py-3 rounded-full hover:bg-neonmag-500 hover:text-black transition shadow-[0_0_12px_rgba(255,0,212,0.4)]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Pulsing image */}
        <motion.div
          onMouseMove={handleMove}
          className="relative w-full lg:w-1/2 mt-6 sm:mt-10 lg:mt-0 flex justify-center"
        >
          <motion.div
            style={{ rotateX: smoothX, rotateY: smoothY }}
            className="relative w-full sm:w-[85vw] lg:w-[28vw] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/4] overflow-hidden rounded-2xl bg-[#1d102b] border border-neonpurp-500/40 shadow-[0_0_28px_-4px_rgba(147,51,234,0.45)]"
          >
            <div className="absolute inset-0 ring-1 ring-neonmag-500/40 rounded-2xl animate-glow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
