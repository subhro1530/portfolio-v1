"use client";
import { FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { SiAccenture } from "react-icons/si";
import Image from "next/image";

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

  return (
    <section className="w-full px-6 sm:px-12 py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center">
          Experience
        </h2>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md p-6 space-y-4 shadow-md"
          >
            {/* Role and Company Row */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div className="flex items-center gap-3 text-xl font-semibold text-cyan-300">
                <FaUserTie />
                {exp.role}
              </div>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>

            {/* Organization and Location Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                {exp.logo}
                <span className="font-medium">{exp.org}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaMapMarkerAlt />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description */}
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pt-2">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
