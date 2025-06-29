export const Projects = () => {
  const projects = [
    {
      title: "VitalityAI: IoT-based Emergency Healthcare System",
      desc: "Developed an AI-powered IoT healthcare platform with blockchain for secure data logging and predictive emergency response. Deployed real-time monitoring with cloud services.",
    },
    {
      title: "Nirbhaya: Women's Safety Application",
      desc: "Built a full-stack mobile app with SOS alerts, real-time GPS tracking, secure local storage, and a CRUD-enabled contact manager. Integrated JWT and live news APIs.",
    },
    {
      title: "SIEM Automation at Accenture",
      desc: "Automated Centrix workflows with Blue Prism and integrated Power Automate and Splunk for log monitoring, alerts, and dashboards.",
    },
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
        Projects
      </h2>
      <ul className="space-y-2 text-gray-300">
        {projects.map((proj, idx) => (
          <li key={idx}>
            <h3 className="font-semibold text-lg text-white">{proj.title}</h3>
            <p className="text-sm">{proj.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
