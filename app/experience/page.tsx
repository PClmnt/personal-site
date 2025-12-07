const roles = [
  {
    company: "Budibase",
    title: "Senior Software Developer",
    period: "2021 — Present",
    tech: [
      "TypeScript",
      "Svelte",
      "Node.js",
      "Vercel AI SDK",
      "Svelte Flow",
      "k8s",
    ],
  },
  {
    company: "Workrise",
    title: "Software Engineer",
    period: "2020 — 2021",
    tech: ["React", "Node.js", "Neo4j", "GraphQL", "GCP"],
  },
  {
    company: "Contrast Security",
    title: "Software Engineer",
    period: "2019 — 2020",
    tech: ["Java", "React", "Python", "GraphQL", "AWS"],
  },
  {
    company: "IBM",
    title: "Software Engineer",
    period: "2016 — 2019",
    tech: ["Node.js", "Cloud", "Design Systems"],
  },
];

export default function Experience() {
  return (
    <main className="w-full">
      <section className="w-full max-w-3xl space-y-6">
        <div className="space-y-4">
          {roles.map((role) => (
            <article
              key={role.company}
              className="grid grid-cols-1 gap-3 sm:grid-cols-[240px_1fr] sm:items-start"
            >
              <div className="space-y-1">
                <div className="flex flex-row gap-2 items-center">
                  <h2 className="text-lg font-semibold text-zinc-50">
                    {role.company}
                  </h2>
                  <div className="text-xs text-zinc-400 mt-1">
                    {role.period}
                  </div>
                </div>
                <p className="text-sm text-zinc-300">{role.title}</p>
              </div>
              {role.tech ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-800/80 bg-zinc-800/50 px-3 py-1 text-[11px] font-semibold text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
