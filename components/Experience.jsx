export const Experience = () => {
  const experiences = [
    {
      role: "Advanced App Engineering Intern",
      org: "Accenture, Pune (Jun 2025 – Jul 2025)",
      details: [
        "Worked on Splunk (SIEM), Power Automate, Power Apps, and RPA using Blue Prism.",
        "Gained hands-on cybersecurity experience in client-focused projects.",
      ],
    },
    {
      role: "Co-Founder & Developer",
      org: "Nirbhaya Safety App (Feb 2025 – Present)",
      details: [
        "Managed the entire development lifecycle including UI/UX, SOS logic, and authentication.",
        "Built CRUD contact manager and location services with high accessibility.",
      ],
    },
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
        Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg">{exp.role}</h3>
            <p className="text-sm text-gray-400">{exp.org}</p>
            <ul className="list-disc pl-5 text-sm text-gray-300 mt-1">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
