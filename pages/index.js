import Head from "next/head";
import { Summary } from "@/components/Summary";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const nav = [
    { label: "Home", href: "#hero" },
    { label: "Summary", href: "#summary" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
  ];

  const [active, setActive] = useState("hero");
  const [sectionsMeta, setSectionsMeta] = useState({});
  const progressRef = useRef(null);
  const itemGap = 40; // px gap between markers

  useEffect(() => {
    const collect = () => {
      const meta = {};
      nav.forEach((n) => {
        const id = n.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = rect.height;
          meta[id] = { top, height };
        }
      });
      setSectionsMeta(meta);
    };
    collect();
    window.addEventListener("resize", collect);
    return () => window.removeEventListener("resize", collect);
  }, [nav]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2;
      let current = active;
      Object.entries(sectionsMeta).forEach(([id, m]) => {
        if (y >= m.top && y < m.top + m.height) current = id;
      });
      setActive(current);

      const h = document.documentElement;
      const sc = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      if (progressRef.current)
        progressRef.current.style.width = (sc / max) * 100 + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionsMeta, active]);

  // compute active marker index for elevator
  const activeIndex = nav.findIndex((n) => n.href.slice(1) === active);

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>Shaswata Saha Portfolio</title>
      </Head>

      {/* Left elevator (desktop-only) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative w-44">
          {/* vertical track */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neonmag-500 via-neonpurp-400 to-neonmag-300 opacity-70" />
          {/* markers */}
          <div className="relative" style={{ height: nav.length * itemGap }}>
            {nav.map((n, i) => {
              const id = n.href.slice(1);
              const is = active === id;
              return (
                <a
                  key={id}
                  href={n.href}
                  className="absolute left-0 flex items-center"
                  style={{ top: i * itemGap }}
                >
                  <span
                    className={`relative w-8 h-8 rounded-full border border-neonmag-500 bg-[#140c20]`}
                  >
                    {is && (
                      <span className="absolute inset-0 rounded-full shadow-[0_0_18px_6px_rgba(255,0,212,0.45)]" />
                    )}
                  </span>
                  {/* static label on the right, never rotates */}
                  <span
                    className={`ml-4 text-xs px-2 py-1 rounded-md bg-[#1d102b]/70 border border-neonpurp-500/40 transition
                      ${
                        is
                          ? "text-neonmag-100"
                          : "text-gray-300 hover:text-neonmag-100"
                      }`}
                  >
                    {n.label}
                  </span>
                </a>
              );
            })}
            {/* elevator car (active circle) that moves with scroll */}
            <span
              className="absolute left-[0px] w-8 h-8 rounded-full bg-neonmag-500 shadow-[0_0_18px_8px_rgba(255,0,212,0.55)]"
              style={{
                top: activeIndex * itemGap,
                transition: "top 240ms ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* Top Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <nav className="container mt-2 relative flex items-center justify-between bg-[#140c20]/70 backdrop-blur-xl border border-neonpurp-500/30 shadow-lg shadow-neonmag-500/20 rounded-full px-6 py-3 max-w-5xl">
          <a
            href="#hero"
            className="font-semibold tracking-wider bg-gradient-to-r from-neonmag-500 via-neonpurp-400 to-neonmag-300 bg-clip-text text-transparent"
          >
            SS · Portfolio
          </a>
          <div className="hidden sm:flex gap-2 items-center">
            {nav.map((n) => {
              const id = n.href.slice(1);
              return (
                <a
                  key={id}
                  href={n.href}
                  className={`text-xs font-medium px-3 py-2 rounded-md transition relative
                    ${
                      active === id
                        ? "text-neonmag-100"
                        : "text-gray-300 hover:text-neonmag-100"
                    }`}
                >
                  {n.label}
                  {active === id && (
                    <span className="absolute left-1/2 -bottom-1 h-[2px] w-8 -translate-x-1/2 bg-gradient-to-r from-neonmag-500 to-neonpurp-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>
          <a
            href="https://drive.google.com/drive/folders/1smOcr8ia7QnOLdjPLShJuS5J2VJaGoCj?usp=sharing"
            className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-neonmag-500 via-neonpurp-500 to-neonmag-400 shadow-[0_0_18px_4px_rgba(255,0,212,0.35)] hover:shadow-neonpurp-400/50 transition text-black font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <div
            ref={progressRef}
            className="absolute left-3 right-3 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-neonmag-500 via-neonpurp-500 to-neonmag-400"
          />
        </nav>
      </header>

      {/* Unified viewport sections */}
      <main className="space-y-0">
        <Hero />
        <Summary />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Footer />
      </main>

      {/* ambient overlay (dark magenta) */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(115deg,rgba(255,0,212,0.09)_0%,transparent_55%,rgba(147,51,234,0.12)_100%)]" />
    </div>
  );
}
