"use client";
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

  return (
    <section
      className="w-full bg-black text-white px-6 sm:px-12 py-16 md:py-20"
      style={{
        backgroundImage: `url('/light-bg.gif')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 uppercase tracking-wider mb-2">
            Skills
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            My technical arsenal spans cloud, automation, frontend, backend,
            DevOps, cybersecurity & more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-cyan-800/40 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-cyan-500/10 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-300">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">{skill.desc}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm pl-1">
                {skill.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
