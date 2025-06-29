"use client";
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

export const Summary = () => {
  const summary = [
    {
      text: "Energetic CSE undergrad with a sharp edge in full-stack engineering and cybersecurity, driving real-world tech transformation.",
      icon: <FaBolt />,
    },
    {
      text: "Engineered VitalityAI — an AI-powered, IoT + Blockchain-based emergency response system recognized by national foundations.",
      icon: <FaProjectDiagram />,
    },
    {
      text: "Co-founded 'Nirbhaya', a women's safety app featuring real-time GPS tracking, SOS alerts, and secure local contact storage.",
      icon: <FaUserShield />,
    },
    {
      text: "Hands-on experience at Accenture in Power Automate, Splunk SIEM, and Blue Prism RPA — bridging automation and security.",
      icon: <FaTools />,
    },
    {
      text: "Cloud-native developer with expertise in AWS (EC2, S3, Lambda, IAM), Docker, and Kubernetes — building scalable infra.",
      icon: <FaLaptopCode />,
    },
    {
      text: "Skilled in modern frameworks: React, Next.js, Node.js, Spring Boot, Flask, Django, FastAPI — delivering fast, secure UX.",
      icon: <FaBrain />,
    },
    {
      text: "Winner at Hackathons; built award-winning emergency healthcare platform — secured 'Status Code 1' & RISE Foundation offers.",
      icon: <FaAward />,
    },
    {
      text: "Certified by Fortinet in cybersecurity fundamentals — mastered threat detection, firewalls, SIEM integration, and VPNs.",
      icon: <FaUserShield />,
    },
    {
      text: "Excellent communicator and team collaborator — thrives in agile workflows, with strong problem-solving and leadership skills.",
      icon: <FaUsersCog />,
    },
    {
      text: "Punctual, reliable, and deadline-focused — consistently delivers with precision and professionalism.",
      icon: <FaClock />,
    },
    {
      text: "Portfolio: https://ssaha.vercel.app",
      icon: <FaLink />,
    },
  ];

  return (
    <section
      className="w-full bg-black text-white px-4 sm:px-6 md:px-12 py-16 md:py-24 flex items-center justify-center"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl w-full text-center space-y-10">
        {/* Section Heading */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 tracking-wide uppercase">
            Summary
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            A snapshot of my journey, skills & tech-driven accomplishments
          </p>
        </div>

        {/* Bullet Points */}
        <div className="space-y-6 text-left">
          {summary.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 sm:gap-4 border-l-4 border-cyan-500 pl-4 sm:pl-5"
            >
              <div className="text-cyan-400 text-base sm:text-lg mt-1 shrink-0">
                {item.icon}
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
