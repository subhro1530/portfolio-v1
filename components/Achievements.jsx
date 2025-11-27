"use client";
import { motion } from "framer-motion";
import {
  FaAward,
  FaShieldAlt,
  FaLaptopCode,
  FaTags,
  FaLanguage,
} from "react-icons/fa";
import { useState } from "react";

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
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? achievements : achievements.slice(0, 6);
  const markRecent = (a) =>
    /AWS|TryHackMe|Fortinet|Cybersecurity|2025|Advanced/i.test(
      a.title + " " + a.desc
    );

  // Certifications gallery (use provided images; keep titles for items without images)
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Architect Associate",
      img: "/ocicloudarch.jpeg",
    },
    {
      title: "Oracle Cloud Developer Professional",
      img: "/ocidev.jpeg",
    },
    {
      title: "ISC² Certified in Cybersecurity (CC)",
      img: "/isc2cc.jpeg",
    },
    {
      title: "Fortinet NSE Fundamentals",
      img: "/fortinet.jpeg",
    },
    {
      title: "CNSP – Cloud Native Security Practitioner",
      img: "/cnsp.jpeg",
    },
    // keep text-only fallback entries if needed
    { title: "CompTIA Security+ (in progress)", img: "" },
  ];

  return (
    <section
      id="achievements"
      data-section="achievements"
      className="relative min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Title + subtitle (like Education) */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neonpurp-400 via-neonmag-500 to-neonpurp-300 bg-clip-text text-transparent uppercase tracking-wider mb-2">
            Achievements
          </h2>
          <p className="text-sm text-gray-400">
            Awards, certifications, and milestones highlighting my recent
            growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {visible.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                e.currentTarget.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(255,0,212,0.22), transparent 60%), linear-gradient(140deg,#1d102b,#12081c)`;
              }}
              className="relative p-5 sm:p-6 rounded-xl border border-neonpurp-500/30 bg-[#140c20] shadow-[0_0_24px_-6px_rgba(255,0,212,0.5)] hover:shadow-neonmag-500/60 transition"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                {a.icon}
                <h3 className="text-base sm:text-lg font-semibold text-neonmag-100 break-words">
                  {a.title}
                </h3>
                {markRecent(a) && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-neonmag-500/20 border border-neonmag-500/40 text-neonmag-100">
                    Recent
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-300 break-words">{a.desc}</p>
              <div className="flex flex-wrap gap-2 items-center">
                <FaTags className="text-gray-400" />
                {a.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-neonmag-500/10 border border-neonmag-500/25 px-2 py-1 text-xs rounded-full text-neonmag-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-bl from-neonmag-500/10 to-transparent transition" />
            </motion.div>
          ))}
        </div>

        {/* Certifications gallery */}
        <div className="mt-10 sm:mt-12">
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-neonpurp-400 via-neonmag-500 to-neonpurp-300 bg-clip-text text-transparent text-center mb-4">
            Certifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {certifications.map((c, i) => (
              <div
                key={i}
                className="group relative rounded-lg overflow-hidden border border-neonpurp-500/30 bg-[#12081c]"
              >
                {c.img ? (
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover aspect-square"
                  />
                ) : (
                  <div className="flex items-center justify-center aspect-square text-center px-3 text-xs sm:text-sm text-gray-300">
                    {c.title}
                  </div>
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/50 to-transparent transition" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-[11px] sm:text-xs text-neonmag-100 bg-[#1d102b]/50 backdrop-blur-md">
                  {c.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {achievements.length > 6 && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-3 text-xs tracking-wide font-semibold rounded-full bg-neonmag-500 text-black hover:bg-neonmag-400 transition shadow-lg hover:shadow-neonmag-500/40 active:scale-95"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
