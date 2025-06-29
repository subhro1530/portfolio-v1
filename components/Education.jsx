export const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "University of Calcutta, Kolkata (2022–2026)",
      score: "GPA: 8.6 / 10.0",
    },
    {
      degree: "ISC - Class XII, Computer Science",
      school: "Pramila Memorial Advanced School (2020–2022)",
      score: "Percentile: 95 / 100",
    },
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
        Education
      </h2>
      <div className="space-y-3">
        {education.map((edu, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-400">{edu.school}</p>
            <p className="text-sm text-gray-300">{edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
