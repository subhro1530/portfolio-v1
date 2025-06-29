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
        "GCP",
        "Azure",
        "ELB",
      ],
      desc: "Experience in deploying and managing scalable cloud infrastructure with AWS, GCP, and Azure services.",
    },
    {
      title: "DevOps & Containers",
      icon: <FaDocker className="text-blue-300" />,
      tools: ["Docker", "Kubernetes", "CI/CD", "Vercel"],
      desc: "Hands-on with containerization and orchestration for streamlined development and deployment pipelines.",
    },
    {
      title: "Operating Systems & Scripting",
      icon: <FaLinux className="text-gray-300" />,
      tools: ["Linux", "Bash", "Unix Shell Scripting"],
      desc: "Proficient in Linux environments with automation skills using Bash for real-world deployment & debugging.",
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
      tools: ["Node.js", "Spring Boot", "FastAPI", "Django"],
      desc: "Developed scalable RESTful APIs and backend systems using multiple tech stacks.",
    },
    {
      title: "Programming Languages",
      icon: <FaJava className="text-orange-500" />,
      tools: ["Java", "Python", "TypeScript"],
      desc: "Proficient in OOP and scripting; used Java for enterprise apps and Python for automation and ML.",
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-purple-400" />,
      tools: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      desc: "Worked with both SQL and NoSQL databases, ensuring data consistency and performance.",
    },
    {
      title: "Cybersecurity & Tools",
      icon: <FaShieldAlt className="text-red-400" />,
      tools: [
        "Burp Suite",
        "Fortinet",
        "Digital Forensics",
        "TryHackMe",
        "OWASP",
      ],
      desc: "Skilled in penetration testing, ethical hacking, threat intelligence, and security protocol enforcement.",
    },
    {
      title: "Version Control & Design",
      icon: <FaGitAlt className="text-pink-400" />,
      tools: ["Git", "GitHub", "Figma", "Vercel"],
      desc: "Efficient in collaborative version control workflows and UI/UX design through Figma.",
    },
    {
      title: "AI, ML & Data Analytics",
      icon: <BsRobot className="text-teal-300" />,
      tools: ["AI Models", "Machine Learning", "Pandas", "NumPy", "Matplotlib"],
      desc: "Explored predictive analytics and data visualization using Python libraries; applied AI in healthcare and automation projects.",
    },
    {
      title: "Agile & Software Engineering",
      icon: <FaTools className="text-indigo-400" />,
      tools: ["Agile Methodologies", "Jira", "Scrum", "SDLC", "UML"],
      desc: "Strong foundation in software development lifecycle with agile practices, team collaboration, and project management tools.",
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
