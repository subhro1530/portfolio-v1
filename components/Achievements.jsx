"use client";
import {
  FaAward,
  FaShieldAlt,
  FaLaptopCode,
  FaTags,
  FaLanguage,
} from "react-icons/fa";
// import { SiTryhackme, SiAmazonaws } from "react-icons/si

export const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Winner – VitalityAI",
      desc: "Honored with 'Status Code 1' Award for AIoT-blockchain medical solution; earned RISE Foundation internship.",
      tags: ["AI", "Blockchain", "IoT", "Hackathon"],
      icon: <FaAward className="text-yellow-400 text-xl" />,
    },
    {
      title: "Fortinet Certified – Fundamentals & Associate",
      desc: "Certified in FortiOS, threat intelligence, firewalls & VPNs; hands-on SOC simulations.",
      tags: ["Fortinet", "Cybersecurity", "Firewall", "Threat Detection"],
      icon: <FaShieldAlt className="text-red-400 text-xl" />,
    },
    {
      title: "Cybersecurity AICTE Internship",
      desc: "Completed Security+, CEH prep, vulnerability testing, ethical hacking & defense.",
      tags: ["Security+", "CEH", "Ethical Hacking", "Vulnerability"],
      icon: <FaLaptopCode className="text-green-400 text-xl" />,
    },
    {
      title: "C1 Advanced – English Proficiency",
      desc: "Achieved C1 level in English communication under CEFR scale, demonstrating effective professional and academic proficiency.",
      tags: ["CEFR", "C1", "Language Skills", "Communication"],
      icon: <FaLanguage className="text-blue-400 text-xl" />,
    },
    {
      title: "TryHackMe Top 10% Learner",
      desc: "Ranked in top 10% on TryHackMe platform. Completed Red Team, Blue Team, and SOC analyst learning paths.",
      tags: ["TryHackMe", "Red Team", "Blue Team", "SOC"],
      icon: <FaTags className="text-purple-400 text-xl" />,
    },
    {
      title: "AWS Cloud Project Deployment",
      desc: "Deployed secure and scalable web applications on AWS using EC2, S3, IAM, and CloudWatch as part of cloud specialization.",
      tags: ["AWS", "Cloud", "EC2", "IAM", "S3"],
      icon: <FaAward className="text-yellow-300 text-xl" />,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-12">
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-lg border border-white/10 space-y-3"
          >
            <div className="flex items-center gap-3">
              {a.icon}
              <h3 className="text-lg font-semibold text-cyan-300">{a.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{a.desc}</p>
            <div className="flex flex-wrap gap-2">
              <FaTags className="text-gray-400" />
              {a.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-cyan-800 px-2 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
