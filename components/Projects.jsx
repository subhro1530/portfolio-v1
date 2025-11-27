"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";

export const Projects = () => {
  const [likes, setLikes] = useState([85, 60, 99, 84, 185, 58, 86, 72, 64]);
  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  const projects = [
    {
      title: "Advanced Log Analytics & Threat Detection with Splunk",
      desc: "Architected an enterprise-grade SIEM pipeline leveraging Splunk for real-time threat intelligence, automated alerting, and deep forensic log analysis. Engineered custom SPL filters, indexed field extractions, and correlation searches to detect anomaly behaviors across hybrid environments. Developed executive-level dashboards, modular inputs, and scheduled reports for SOC efficiency. Aligned with NIST and MITRE ATT&CK frameworks to support Zero Trust architecture and proactive incident mitigation.",
      date: "Feb 2025 – Apr 2025",
      location: "Confidential – Enterprise Deployment (Accenture)",
      img: "/splunk.jpg",
      link: "",
      tags: [
        "Splunk",
        "SIEM",
        "SPL",
        "Threat Intelligence",
        "Cybersecurity",
        "Log Correlation",
        "SOC Automation",
      ],
    },
    {
      title: "Team Directory Management System with PowerApps",
      desc: "Engineered a cross-platform employee directory with Microsoft PowerApps and Dataverse, integrated with Azure AD for seamless identity federation and Microsoft Graph API sync. Enabled RBAC-driven access, department-based filtering, and real-time profile updates. Embedded Power Automate flows for onboarding, HR escalation, change tracking, and audit compliance. Delivered a mobile-first UI/UX with secure cloud operations across departments.",
      date: "Jan 2025 – Mar 2025",
      location: "Confidential – Enterprise Deployment (Accenture)",
      img: "/powerapps.jpg",
      link: "",
      tags: [
        "PowerApps",
        "Azure AD",
        "Dataverse",
        "Power Automate",
        "Graph API",
        "Cloud HR Tech",
        "RBAC",
      ],
    },
    {
      title: "Multi-Level Document Approval Workflow",
      desc: "Built a scalable, no-code approval automation using Microsoft Lists and Power Automate for document routing across departments. Enabled Level 1 & 2 email-based approvals via Outlook with embedded decision controls, conditional logic for rejections/escalations, and real-time status logging within Lists. Deployed without needing full SharePoint clients or desktop agents.",
      date: "Jun 2025 – Jul 2025",
      location: "Confidential – Enterprise Deployment (Accenture)",
      img: "/power_automate.jpg",
      link: "",
      tags: [
        "Power Automate",
        "Microsoft Lists",
        "Office 365",
        "Outlook Integration",
        "Conditional Workflow",
        "Cloud Automation",
      ],
    },
    {
      title: "VitalityAI: IoT‑Blockchain Emergency Healthcare",
      desc: "Engineered an AI-driven IoT healthcare platform that leverages blockchain for encrypted medical alert dispatching. Developed during a 36-hour hackathon and awarded by RISE Foundation for innovation in predictive emergency systems.",
      date: "Aug 2024 – Sep 2024",
      location: "IIIT Kalyani | IISER Kolkata",
      img: "/vitality.png",
      link: "https://vitalityaiofficial.vercel.app",
      tags: ["AI", "IoT", "Blockchain", "AWS", "MongoDB", "Edge Computing"],
    },
    {
      title: "Nirbhaya: Women’s Safety App",
      desc: "Full-stack mobile application built with React Native featuring GPS tracking, emergency SMS dispatch, JWT authentication, and curated news for women’s safety awareness. Offers a modern UI, SOS button, contact manager, and nearby police locator using Maps API.",
      date: "Feb 2025 – Present",
      location: "Remote | Kolkata",
      img: "/nirbhaya_app.png",
      link: "https://drive.google.com/file/d/1iCZ_OrII3ddxsMmRwm1tcqzrs_vZLV2q/view?usp=sharing",
      tags: [
        "React Native",
        "Firebase",
        "Geo‑Location",
        "Security",
        "Mobile UX",
      ],
    },
    {
      title: "AWS - Cloud Computing Infrastructure Design",
      desc: "Provisioned and automated a highly available AWS cloud infrastructure using EC2, S3, IAM, Auto Scaling, and CloudWatch. Focused on cost-efficiency, identity control, and continuous monitoring across distributed services.",
      date: "June 2024 – Ongoing",
      location: "Remote",
      img: "/cloud_infra.jpg",
      link: "",
      tags: ["AWS", "EC2", "CloudWatch", "IAM", "Auto Scaling", "DevOps"],
    },
    {
      title: "UrbanMotion – Car Rental Platform",
      desc: "Developed a multi-role MERN stack web platform with dynamic role-based access for users, retailers, and admins. Integrated live booking flows, real-time updates, and inventory management with modern dashboard design.",
      date: "Jan 2025 – Mar 2025",
      location: "Remote",
      img: "/urbanmotion.png",
      link: "https://urbanmotion.vercel.app",
      tags: ["MongoDB", "React", "Next.js", "RBAC", "Full Stack", "UX"],
    },
    {
      title: "KAIL – Privacy-Focused Linux Distro",
      desc: "Built a custom Linux distribution with ephemeral sessions, Tor routing, application sandboxing, and encrypted storage partitions. Designed for penetration testers and digital privacy advocates seeking an alternative to traditional OS environments.",
      date: "Nov 2024 – Feb 2025",
      location: "Remote",
      img: "/kail.png",
      link: "",
      tags: [
        "Linux",
        "Privacy",
        "Open Source",
        "Tor",
        "Cybersecurity",
        "Live OS",
      ],
    },
    {
      title: "WireWave – Next‑Gen Messaging Platform",
      desc: "Secure end‑to‑end encrypted chats with JWT auth, AI enhancements, WhatsApp‑like real‑time messaging. Cross‑platform (web/mobile) with responsive UI and cloud backend.",
      date: "| Mar 2024 – Jun 2025",
      location: "Remote",
      img: "/wirewave.png",
      link: "https://youtu.be/14Z5hdxQ_J4",
      tags: ["Next.js", "React Native", "JWT", "Realtime", "AI", "Cloud"],
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 6);
  const isRecent = (date) => /2025|Present/i.test(date);

  return (
    <section
      id="projects"
      data-section="projects"
      className="relative min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neonpurp-400 via-neonmag-500 to-neonpurp-300 bg-clip-text text-transparent uppercase tracking-wider mb-2">
            Projects
          </h2>
          <p className="text-sm text-gray-400">
            Selected builds across AI, full‑stack, automation, and cloud.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8 sm:space-y-10 md:space-y-14">
          {visible.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                e.currentTarget.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(255,0,212,0.18), transparent 65%), linear-gradient(to top right,#1d102b,#140c20)`;
              }}
              className="group relative flex flex-col md:flex-row rounded-2xl p-4 sm:p-6 border border-neonpurp-500/30 bg-[#130a20] shadow-[0_0_26px_-6px_rgba(255,0,212,0.45)] hover:shadow-neonmag-500/60 transition"
            >
              {/* Image */}
              <div className="md:w-1/3 w-full aspect-video md:aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover md:object-center"
                />
              </div>

              {/* Info */}
              <div className="md:ml-6 flex-1 flex flex-col mt-4 md:mt-0 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neonmag-100 break-words">
                    {p.title}
                  </h3>
                  {isRecent(p.date) && (
                    <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-neonmag-500/20 border border-neonmag-500/40 text-neonmag-100">
                      Recent
                    </span>
                  )}
                </div>

                {/* Date & Location */}
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 my-2">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {p.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {p.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-3 max-h-none sm:max-h-32 group-hover:max-h-[420px] overflow-hidden transition-all duration-500 break-words">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-neonmag-500/10 border border-neonmag-500/25 text-neonmag-100 px-3 py-1 text-[11px] sm:text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 sm:gap-4 flex-wrap text-xs sm:text-sm items-center mt-auto">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-neonmag-100 hover:underline"
                    >
                      <FaExternalLinkAlt /> View
                    </a>
                  )}
                  <button
                    onClick={() => handleLike(i)}
                    className="flex items-center gap-1 text-pink-400 hover:text-pink-300"
                  >
                    <FaHeart /> {likes[i]}
                  </button>
                  <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                    <FaShareAlt /> Share
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-neonmag-500/0 via-neonmag-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>

        {/* Toggle bottom center */}
        {projects.length > 6 && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-3 text-xs sm:text-sm tracking-wide font-semibold rounded-full bg-neonmag-500 text-black hover:bg-neonmag-400 transition shadow-lg shadow-neonmag-500/30 active:scale-95"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
