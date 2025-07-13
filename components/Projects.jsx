"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";

export const Projects = () => {
  const [likes, setLikes] = useState([85, 60, 99, 84, 185, 58,86, 72]);

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
    tags: ["React Native", "Firebase", "Geo‑Location", "Security", "Mobile UX"],
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
    tags: ["Linux", "Privacy", "Open Source", "Tor", "Cybersecurity", "Live OS"],
  },
];


  return (
    <section className="bg-black text-white py-16 px-4 sm:px-12">
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">
        Projects
      </h2>

      <div className="space-y-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-white/5 p-6 rounded-xl backdrop-blur-lg border border-white/10 shadow-md"
          >
            {/* Image */}
            <img
              src={p.img}
              alt={p.title}
              className="md:w-1/3 w-full h-48 object-cover rounded-lg"
            />

            {/* Info */}
            <div className="md:ml-6 flex-1 flex flex-col mt-4 md:mt-0">
              <h3 className="text-xl font-semibold text-cyan-300">{p.title}</h3>

              {/* Date & Location */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 my-2">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {p.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {p.location}
                </span>
              </div>

              <p className="text-gray-300 mb-3">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-800 px-3 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap text-sm">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cyan-300 hover:underline"
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
          </div>
        ))}
      </div>
    </section>
  );
};
