"use client";
import { FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { SiAccenture } from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      role: "Advanced Application Engineering Intern",
      org: "Accenture",
      logo: <SiAccenture className="text-purple-400 text-3xl" />,
      location: "Pune, India",
      period: "June 2025 – July 2025",
      details: [
        "Selected for Accenture's prestigious AEH program based on technical excellence and leadership potential.",
        "Engineered secure RPA workflows using Blue Prism, reducing manual task time by 40%.",
        "Integrated Splunk SIEM for real-time threat detection, log ingestion, and incident visibility.",
        "Designed Power Apps integrated with Power Automate for orchestrating cross-team tasks.",
        "Practiced Agile methodology with daily stand-ups, retrospectives, and client interaction.",
      ],
    },
    {
      role: "Co-Founder & Full-Stack Developer",
      org: "Nirbhaya Safety App",
      logo: (
        <Image
          src="/nirbhaya.png"
          alt="Nirbhaya App"
          width={60}
          height={40}
          className="rounded-md"
        />
      ),
      location: "Remote, India",
      period: "Feb 2025 – Present",
      details: [
        "Led end-to-end development of a modern mobile safety app focused on rapid emergency response.",
        "Built real-time location tracking, trusted contact manager, and JWT-based authentication.",
        "Designed a dashboard-style UI with custom bottom navigation and emergency SOS interface.",
        "Integrated APIs for live news articles, SMS alerting, and Firebase Firestore CRUD operations.",
        "Deployed via Firebase and Vercel with CI/CD pipelines and full offline capability support.",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      org: "MarketingLab",
      logo: (
        <Image
          src="/marketinglab.jpeg"
          alt="MarketingLab"
          width={32}
          height={32}
          className="rounded-md"
        />
      ),
      location: "Remote, India",
      period: "Feb 2022 – May 2025",
      details: [
        "Built marketing dashboards and campaign automation tools using Next.js and MongoDB.",
        "Secured client data via custom middleware, token validation, and encrypted route access.",
        "Developed dynamic landing pages with A/B testing, SEO, and content personalization.",
        "Optimized Lighthouse score to 96+ and integrated analytics pipelines with Mixpanel.",
        "Deployed across clients using Vercel and GitHub Actions for CI/CD workflows.",
      ],
    },
  ];
  const isRecentExp = (period) => /2025|Present/i.test(period);

  return (
    <section
      id="experience"
      data-section="experience"
      className="relative min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neonpurp-400 via-neonmag-500 to-neonpurp-300 bg-clip-text text-transparent uppercase tracking-wider mb-2">
            Experience
          </h2>
          <p className="text-sm text-gray-400">
            Roles, impact, and recent responsibilities.
          </p>
        </div>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            onPointerMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - r.left) / r.width) * 100;
              const y = ((e.clientY - r.top) / r.height) * 100;
              e.currentTarget.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(147,51,234,0.25), transparent 60%), linear-gradient(150deg,#1d102b,#12081c)`;
            }}
            className="relative rounded-xl p-5 sm:p-6 border border-neonpurp-500/30 bg-[#140c20] shadow-[0_0_20px_-4px_rgba(147,51,234,0.5)] hover:shadow-neonmag-500/50 transition"
          >
            {/* Role and Company Row */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-semibold text-neonmag-100 break-words">
                <FaUserTie />
                {exp.role}
                {isRecentExp(exp.period) && (
                  <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-neonmag-500/20 border border-neonmag-500/40 text-neonmag-100">
                    Recent
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm text-gray-300">
                {exp.period}
              </span>
            </div>

            {/* Organization and Location Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-300 break-words">
                {exp.logo}
                <span className="font-medium text-gray-100">{exp.org}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 break-words">
                <FaMapMarkerAlt />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description */}
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pt-2">
              {exp.details.map((point, i) => (
                <li key={i} className="break-words">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
