"use client";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

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

  return (
    <section
      className="w-full px-6 sm:px-12 py-16 bg-black text-white"
      style={{
        backgroundImage: `url('/light-bg.gif')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 uppercase tracking-wider mb-2">
            Education
          </h2>
          <p className="text-sm text-gray-400">
            Academic milestones that laid the foundation for my tech journey.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md p-5 shadow-md hover:shadow-cyan-500/10 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaGraduationCap className="text-cyan-400 text-2xl" />
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                  {edu.degree}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base text-gray-300 mb-1">
                <div className="flex items-center gap-2">
                  <FaUniversity className="text-sm text-cyan-500" />
                  <span>{edu.school}</span>
                </div>
                <span className="text-gray-400 italic">{edu.duration}</span>
              </div>

              <div className="text-sm text-gray-400">{edu.location}</div>

              <div className="mt-1 text-sm text-green-400 font-medium">
                {edu.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
