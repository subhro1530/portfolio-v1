export const Summary = () => {
  const summary = [
    "Dynamic CSE undergrad with full-stack and cybersecurity expertise.",
    "Built high-impact projects: safety app, blockchain AI healthcare system.",
    "Proficient in React, Next.js, Node.js, AWS, Docker, and more.",
    "Portfolio: https://ssaha.vercel.app",
  ];

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
        Summary
      </h2>
      <ul className="list-disc pl-5 text-gray-300 space-y-1">
        {summary.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </section>
  );
};
