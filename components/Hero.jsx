"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

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

  const buzzwords = [
    "Builder.",
    "Defender.",
    "Visionary.",
    "Innovator.",
    "Educator.",
    "Explorer.",
    "Creator.",
    "Leader.",
    "Mentor.",
    "Collaborator.",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % buzzwords.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-screen lg:h-screen bg-black text-white overflow-hidden flex items-center justify-center relative"
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "url('https://www.onlygfx.com/wp-content/uploads/2018/03/grey-polygonal-background-fade-2.png')",
      }}
    >
      {/* Glassmorphic Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto px-6 lg:px-20 py-40 backdrop-blur-md bg-white/5 border border-white/0 rounded-xl shadow-lg">
        {/* Left Column */}
        <motion.div
          className="text-center lg:text-left space-y-4 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-mono animate-typing overflow-hidden whitespace-nowrap border-l-4 pl-4 border-cyan-400 pr-2">
            Hello there, I am
          </h2>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light uppercase leading-tight tracking-tight text-cyan-400">
            Shaswata Saha
          </h1>

          <p className="text-white text-xl sm:text-2xl font-thin tracking-tight leading-snug">
            Full Time Engineer | Part Time Developer | Ethical Hacker | Open
            Source Contributor | Teacher &
          </p>

          {/* Buzzwords cycling */}
          <p className="text-cyan-400 text-2xl sm:text-3xl font-bold mt-1 tracking-wide transition duration-300 ease-in-out">
            {buzzwords[current]}
          </p>

          <div className="flex gap-4 mt-4 justify-center lg:justify-start flex-wrap">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="border mt-4 border-cyan-400 px-3 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                {link.icon}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1cARagRTI8c3E7s8EreML5_Vpcb6MO4yV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 mt-2 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition duration-300 text-sm sm:text-base"
            >
              Resume / CV
            </a>
          </div>
        </motion.div>

        {/* Right Column - Pulsing image */}
        <motion.div
          className="relative w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center h-[50vh]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="relative w-[90vw] lg:w-[25vw] h-full overflow-hidden border-4 border-cyan-400 rounded-xl shadow-2xl"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/profile.jpg"
              alt="Shaswata Saha"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
