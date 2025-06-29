export const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Winner | VitalityAI",
      desc: "Secured 'Status Code 1' Award for building an IoT-Blockchain AI healthcare system. Selected for RISE Foundation Internship.",
    },
    {
      title: "Fortinet Certified (Fundamentals & Associate)",
      desc: "Mastered FortiOS, firewalls, threat intelligence, and VPNs. Completed real-world simulations in SOC environment.",
    },
    {
      title: "Cybersecurity AICTE Internship",
      desc: "Covered Security+, CEH prep, vulnerability testing, ethical hacking and defense techniques.",
    },
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
        Achievements
      </h2>
      <ul className="space-y-2 text-gray-300">
        {achievements.map((ach, idx) => (
          <li key={idx}>
            <h3 className="font-semibold text-lg text-white">{ach.title}</h3>
            <p className="text-sm">{ach.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
