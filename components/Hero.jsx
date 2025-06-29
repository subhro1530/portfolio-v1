"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export const Hero = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/shaswata-saha-74b209251",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:shaswata.ssaha@gmail.com",
      label: "Email",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/subhro1530",
      label: "GitHub",
    },
  ];

  return (
    <section className="w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center relative">
      {/* Top Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-no-repeat bg-cover bg-top pointer-events-none opacity-20"
        style={{
          backgroundImage: `url('https://www.onlygfx.com/wp-content/uploads/2018/03/grey-polygonal-background-fade-2.png')`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-10">
        {/* Left Column */}
        <motion.div
          className="text-center lg:text-left space-y-6 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight text-cyan-400 drop-shadow-md">
            Shaswata Saha
          </h1>
          <p className="text-lg sm:text-xl font-medium tracking-wider text-white">
            Computer Engineer
          </p>

          <div className="flex gap-4 mt-4 justify-center lg:justify-start">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 p-3 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="relative w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-cyan-400">
            <img
              src="/profile.jpg"
              alt="Shaswata Saha"
              className="object-cover w-full h-full transform scale-105 hover:scale-110 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
