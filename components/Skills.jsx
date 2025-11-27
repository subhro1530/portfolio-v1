"use client";
import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaShieldAlt,
  FaLinux,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiFastapi,
  SiDjango,
  SiKubernetes,
  SiMicrosoftazure,
  SiSplunk,
  SiMicrosoftpowerapps,
  SiFigma,
} from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { useState } from "react";

export const Skills = () => {
  const skills = [
    {
      title: "SIEM, Automation & Low-Code",
      icon: <SiSplunk className="text-orange-400" />,
      tools: ["Splunk", "Power Apps", "Power Automate", "Blue Prism"],
      desc: "Built dashboards, automated processes, and worked on SIEM-driven monitoring using Splunk and low-code tools.",
    },
    {
      title: "Cloud Platforms",
      icon: <FaAws className="text-yellow-400" />,
      tools: [
        "AWS (EC2, S3, Lambda, IAM)",
        "CloudTrail",
        "CloudWatch",
        "Azure",
        "GCP",
        "ELB",
      ],
      desc: "Experience in deploying and managing scalable cloud infrastructure with AWS, GCP, and Azure services.",
    },
    {
      title: "DevOps & Containers",
      icon: <FaDocker className="text-blue-300" />,
      tools: [
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
        "Vercel",
        "GitHub Actions",
      ],
      desc: "Hands-on with containerization, CI/CD pipelines, and orchestration using Kubernetes and modern deployment tools.",
    },
    {
      title: "Operating Systems & Scripting",
      icon: <FaLinux className="text-gray-300" />,
      tools: ["Linux", "Bash", "Unix Shell", "SystemD", "Cron Jobs"],
      desc: "Proficient in scripting and managing production Linux environments for automation and monitoring.",
    },
    {
      title: "Frontend Technologies",
      icon: <FaReact className="text-cyan-400" />,
      tools: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
      desc: "Expertise in building fast, responsive, and accessible web UIs with modern JavaScript frameworks.",
    },
    {
      title: "Backend Frameworks",
      icon: <FaNodeJs className="text-green-400" />,
      tools: ["Node.js", "Spring Boot", "FastAPI", "Django", "Express"],
      desc: "Developed scalable RESTful APIs and backend systems across different stacks with a focus on performance and security.",
    },
    {
      title: "Programming Languages",
      icon: <FaJava className="text-orange-500" />,
      tools: ["Java", "Python", "TypeScript", "C"],
      desc: "Proficient in OOP and scripting; used Java for enterprise apps, C for system-level logic, and Python for automation & AI.",
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-purple-400" />,
      tools: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQLite"],
      desc: "Worked with both SQL and NoSQL databases, ensuring consistency, indexing, and optimized querying.",
    },
    {
      title: "Cybersecurity & Tools",
      icon: <FaShieldAlt className="text-red-400" />,
      tools: [
        "Metasploit",
        "Nmap",
        "Burp Suite",
        "Wireshark",
        "Fortinet",
        "TryHackMe",
        "OWASP",
      ],
      desc: "Skilled in ethical hacking, penetration testing, network scanning, and vulnerability detection techniques.",
    },
    {
      title: "Version Control & Design",
      icon: <FaGitAlt className="text-pink-400" />,
      tools: ["Git", "GitHub", "GitLab", "Figma", "Postman", "Swagger"],
      desc: "Efficient in version control, API testing/documentation, and UI/UX workflows for product design and delivery.",
    },
    {
      title: "AI, ML & Data Analytics",
      icon: <BsRobot className="text-teal-300" />,
      tools: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "AI APIs"],
      desc: "Applied AI in real-world apps like healthcare alerts and prediction systems using Python and open-source libraries.",
    },
    {
      title: "Agile & Software Engineering",
      icon: <FaTools className="text-indigo-400" />,
      tools: [
        "Jira",
        "Scrum",
        "SDLC",
        "UML",
        "Secure SDLC",
        "Agile Ceremonies",
      ],
      desc: "Strong knowledge of agile engineering, from requirement analysis to secure coding and deployment cycles.",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? skills : skills.slice(0, 6);

  return (
    <section
      id="skills"
      data-section="skills"
      className="relative min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neonpurp-400 via-neonmag-500 to-neonpurp-300 bg-clip-text text-transparent uppercase tracking-wider mb-2">
            Skills
          </h2>
          <p className="text-sm text-gray-400">
            Core technologies spanning full‑stack, cloud, security, and
            automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                e.currentTarget.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(147,51,234,0.28), transparent 62%), linear-gradient(160deg,#1e0f30,#130a20)`;
              }}
              className="relative rounded-xl border border-neonpurp-500/40 bg-[#1a0d29] p-5 sm:p-6 shadow-[0_0_22px_-6px_rgba(147,51,234,0.55)] hover:shadow-neonmag-500/60 transition"
              role="article"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-xl sm:text-2xl">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-neonmag-100 break-words">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm mb-3 break-words">
                {skill.desc}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm pl-1">
                {skill.tools.map((tool, i) => (
                  <li key={i} className="break-words">
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-neonmag-500/10 to-transparent transition" />
            </motion.div>
          ))}
        </div>
        {skills.length > 6 && (
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
