"use client";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "University of Calcutta",
      location: "Kolkata, India",
      duration: "2022 – 2026",
      score: "GPA: 8.6 / 10.0",
    },
    {
      degree: "ISC – Class XII, Computer Science",
      school: "Pramila Memorial Advanced School",
      location: "Kolkata, India",
      duration: "2020 – 2022",
      score: "Percentile: 95 / 100",
    },
  ];
  const isRecentEdu = (duration) => /2025|2026|Present/i.test(duration);

  return (
    <section
      id="education"
      data-section="education"
      className="relative min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neonpurp-400 via-neonmag-500 to-neonpurp-300 bg-clip-text text-transparent uppercase tracking-wider mb-2">
            Education
          </h2>
          <p className="text-sm text-gray-400">
            Academic milestones that laid the foundation for my tech journey.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                e.currentTarget.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(255,0,212,0.16), transparent 55%), linear-gradient(160deg,#1a0d29,#12081c)`;
              }}
              className="group relative bg-[#140c20] border border-neonpurp-500/30 rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-[0_0_20px_-4px_rgba(255,0,212,0.4)] hover:shadow-neonmag-500/60 transition"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <FaGraduationCap className="text-neonmag-500 text-2xl" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-100 break-words">
                  {edu.degree}
                </h3>
                {isRecentEdu(edu.duration) && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-neonmag-500/20 border border-neonmag-500/40 text-neonmag-100">
                    Recent
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base text-gray-300 mb-1 gap-1 sm:gap-2">
                <div className="flex items-center gap-2 break-words">
                  <FaUniversity className="text-sm text-neonmag-500" />
                  <span>{edu.school}</span>
                </div>
                <span className="text-gray-400 italic">{edu.duration}</span>
              </div>

              <div className="text-sm text-gray-400">{edu.location}</div>

              <div className="mt-1 text-sm text-green-400 font-medium">
                {edu.score}
              </div>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-neonmag-500/10 to-transparent transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
