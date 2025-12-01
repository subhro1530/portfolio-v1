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
import { FaChevronRight } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
];

export default function Home() {
  const nav = navItems;

  const [active, setActive] = useState("hero");
  const [sectionsMeta, setSectionsMeta] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
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
      setNavSolid(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionsMeta, active]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // compute active marker index for elevator
  const activeIndex = nav.findIndex((n) => n.href.slice(1) === active);

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>Shaswata Saha Portfolio</title>
      </Head>

      {/* Left elevator (desktop-only) */}
      <div className="fixed left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 hidden lg:block group">
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            aria-label="Reveal section navigator"
            className="relative flex items-center justify-center p-3 rounded-full border border-neonmag-500/50 bg-[#070111]/85 text-neonmag-100 shadow-[0_0_20px_rgba(255,0,212,0.35)] transition-colors duration-300 group-hover:border-neonmag-500 group-hover:bg-neonmag-500/20"
            animate={{ x: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <FaChevronRight className="text-base transition-transform duration-300 group-hover:rotate-180" />
            <span className="absolute inset-0 rounded-full blur-lg bg-neonmag-500/30 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
          </motion.button>
          <div className="w-0 opacity-0 overflow-hidden group-hover:w-60 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="relative w-60 rounded-[30px] border border-neonpurp-500/35 bg-[#090215]/85 backdrop-blur-2xl shadow-[0_0_28px_rgba(255,0,212,0.25)] p-6">
              <div className="relative w-full">
                <div className="absolute left-5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-neonmag-500 via-neonpurp-400 to-neonmag-300 opacity-80" />
                <div
                  className="relative"
                  style={{ height: nav.length * itemGap }}
                >
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
                          className={`relative w-8 h-8 rounded-full border border-neonmag-500/70 bg-[#140c20]/80 transition-colors duration-300 ${
                            is
                              ? "shadow-[0_0_18px_6px_rgba(255,0,212,0.45)]"
                              : ""
                          }`}
                        />
                        <span
                          className={`ml-4 text-[11px] tracking-wide uppercase px-3 py-1 rounded-xl border transition-colors duration-300 ${
                            is
                              ? "border-neonmag-500 text-neonmag-100 bg-white/5"
                              : "border-transparent text-gray-300 bg-white/5 hover:border-neonmag-500/60 hover:text-neonmag-100"
                          }`}
                        >
                          {n.label}
                        </span>
                      </a>
                    );
                  })}
                  <span
                    className="absolute left-0 w-8 h-8 rounded-full bg-neonmag-500 shadow-[0_0_18px_8px_rgba(255,0,212,0.55)]"
                    style={{
                      top: activeIndex * itemGap,
                      transition: "top 240ms ease",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5">
        <nav
          className={`relative max-w-6xl mx-auto mt-3 rounded-[28px] border border-neonpurp-500/35 backdrop-blur-2xl px-4 sm:px-7 py-3 sm:py-4 shadow-[0_0_35px_rgba(6,0,20,0.65)] transition-colors duration-300 ${
            navSolid ? "bg-[#05020b]/90" : "bg-[#140224]/70"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a
              href="#hero"
              className="font-semibold tracking-[0.3em] text-[11px] uppercase bg-gradient-to-r from-neonmag-500 via-neonpurp-400 to-neonmag-300 bg-clip-text text-transparent"
            >
              SS · Portfolio
            </a>
            <div className="hidden md:flex items-center gap-1">
              {nav.map((n) => {
                const id = n.href.slice(1);
                const is = active === id;
                return (
                  <a
                    key={id}
                    href={n.href}
                    className={`relative text-sm font-semibold tracking-wide px-3 py-2 rounded-xl transition-all duration-300 ${
                      is
                        ? "text-neonmag-100 bg-white/5 shadow-[0_0_12px_rgba(255,0,212,0.25)]"
                        : "text-gray-300 hover:text-neonmag-100 hover:bg-white/5"
                    }`}
                  >
                    {n.label}
                    {is && (
                      <span className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 bg-gradient-to-r from-neonmag-500 to-neonpurp-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://drive.google.com/drive/folders/1smOcr8ia7QnOLdjPLShJuS5J2VJaGoCj?usp=sharing"
                className="hidden sm:inline-flex text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-gradient-to-r from-neonmag-500 via-neonpurp-500 to-neonmag-400 shadow-[0_0_18px_4px_rgba(255,0,212,0.35)] hover:shadow-neonpurp-400/50 transition text-black font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <button
                type="button"
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-neonmag-100"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation"
              >
                {menuOpen ? (
                  <FiX className="text-xl" />
                ) : (
                  <FiMenu className="text-xl" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              menuOpen ? "max-h-[70vh] mt-3" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">
              {nav.map((n) => {
                const id = n.href.slice(1);
                const is = active === id;
                return (
                  <a
                    key={`mobile-${id}`}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-2xl border px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                      is
                        ? "border-neonmag-500 text-neonmag-100 bg-white/5"
                        : "border-white/5 text-gray-200 hover:border-neonmag-500/70 hover:text-neonmag-100"
                    }`}
                  >
                    {n.label}
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                      GO
                    </span>
                  </a>
                );
              })}
              <a
                href="https://drive.google.com/drive/folders/1smOcr8ia7QnOLdjPLShJuS5J2VJaGoCj?usp=sharing"
                className="w-full text-center text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-2xl bg-gradient-to-r from-neonmag-500 via-neonpurp-500 to-neonmag-400 text-black font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Download CV
              </a>
            </div>
          </div>
          <div
            ref={progressRef}
            className="absolute left-6 right-6 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-neonmag-500 via-neonpurp-500 to-neonmag-400"
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
