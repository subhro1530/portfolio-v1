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
  const [likes, setLikes] = useState([0, 0, 0]);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  const projects = [
    {
      title: "VitalityAI: IoT‑Blockchain Emergency Healthcare",
      desc: "Engineered AIoT platform with secure blockchain logging for predictive healthcare alerts.",
      date: "Aug 2024 – Sep 2024",
      location: "IIIT Kalyani | IISER Kolkata",
      img: "/vitality.jpg",
      link: "https://example.com/vitalityai",
      tags: ["AI", "IoT", "Blockchain", "AWS", "MongoDB"],
    },
    {
      title: "Nirbhaya: Women’s Safety App",
      desc: "Built full-stack mobile-first safety app with SOS, GPS tracking, JWT auth & contact management.",
      date: "Feb 2025 – Present",
      location: "Remote | Kolkata",
      img: "/nirbhaya.jpg",
      link: "https://example.com/nirbhaya",
      tags: ["React Native", "Firebase", "Geo‑Location", "Security"],
    },
    {
      title: "SIEM Automation at Accenture",
      desc: "Automated Blue Prism RPA workflows with Splunk dashboards for real-time log insight.",
      date: "Mar 2025 – Apr 2025",
      location: "Accenture – Pune",
      img: "/accenture.jpg",
      link: "",
      tags: ["Splunk", "RPA", "Blue Prism", "Power Automate"],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-12">
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">Projects</h2>

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
                  <span key={idx} className="bg-cyan-800 px-3 py-1 text-xs rounded-full">
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
