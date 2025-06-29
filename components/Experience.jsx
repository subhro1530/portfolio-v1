"use client";
import { FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { SiAccenture } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import Image from "next/image"; // Only if you're using Next.js

export const Experience = () => {
  const experiences = [
    {
      role: "Advanced Application Engineering Intern",
      org: "Accenture",
      logo: <SiAccenture className="text-purple-400 text-3xl" />,
      location: "Pune, India",
      period: "June 2025 – July 2025",
      details: [
        "Engineered secure RPA workflows using Blue Prism, optimizing manual processes.",
        "Integrated Splunk SIEM for real-time log ingestion and threat detection dashboards.",
        "Built Power Apps with dynamic flows via Power Automate for internal task orchestration.",
        "Collaborated across teams under Agile delivery model with direct client interaction.",
      ],
    },
    {
      role: "Co-Founder & Full-Stack Developer",
      org: "Nirbhaya Safety App",
      logo: (
        <Image
          src="/logos/nirbhaya.png" // put your app logo in public/logos folder
          alt="Nirbhaya App"
          width={32}
          height={32}
          className="rounded-md"
        />
      ),
      location: "Remote, India",
      period: "Feb 2025 – Present",
      details: [
        "Spearheaded end-to-end development of a scalable women's safety mobile app.",
        "Implemented secure contact manager, GPS tracking, and JWT-based authentication.",
        "Led UI/UX design, API integration (news, SMS), and ensured offline support.",
        "Deployed with Firebase & Vercel; practiced CI/CD and responsive design strategies.",
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
