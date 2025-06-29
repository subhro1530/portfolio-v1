export const Skills = () => {
  const skills = [
    "AWS, EC2, S3, Lambda, IAM, CloudTrail, CloudWatch, ELB",
    "GCP, Azure, Docker, Kubernetes",
    "React.js, Next.js, Node.js, Tailwind CSS, JavaScript",
    "Java, Spring Boot, Python, Django, FastAPI",
    "MongoDB, PostgreSQL, MySQL, Firebase",
    "Cybersecurity, Burp Suite, Fortinet, Digital Forensics",
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3 text-sm text-gray-200">
        {skills.map((item, idx) => (
          <span key={idx} className="bg-gray-700 px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};
