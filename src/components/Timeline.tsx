const experience = [
  {
    period: '2026 – Current',
    role:   'Freelance Web Developer',
    place:  'junaidbuilds.com',
    desc:   'Building custom websites and web applications for businesses in Berlin and worldwide. Specialising in React, Next.js, and full-stack projects.',
  },
  {
    period: '2025 – Current',
    role:   'Full-Stack Developer',
    place:  'Strebo (Personal Project)',
    desc:   'Designed and built a full-stack SaaS application with Next.js, FastAPI, PostgreSQL, and OpenAI API for AI-powered job application assistance.',
  },
  {
    period: '2024 – 2025',
    role:   'MS Data Analytics Student',
    place:  'University, Berlin',
    desc:   'Pursuing a Master’s in Data Analytics — studying big data systems, Apache Spark, Python data engineering, and machine learning pipelines.',
  },
  {
    period: '2023 – 2024',
    role:   'Frontend Developer',
    place:  'Freelance / PeoplePerHour',
    desc:   'Delivered multiple client websites including corporate sites, portfolios, and landing pages. Worked with React, Tailwind CSS, and Vite.',
  },
  {
    period: '2022 – 2023',
    role:   'Social Media & Content Manager',
    place:  'Various Clients',
    desc:   'Managed social media channels, content strategy, and digital marketing campaigns for small businesses and creators.',
  },
]

export default function Timeline() {
  return (
    <section id="about" className="section-pad bg-canvas">
      <div className="container-width">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="label mb-4">/ Background</p>
            <h2 className="font-display italic text-[clamp(2.2rem,4.5vw,4rem)] text-heading leading-none">
              Experience
            </h2>
          </div>
          <p className="text-body text-sm leading-relaxed max-w-xs">
            Based in Berlin, Germany. Available for remote projects worldwide.
          </p>
        </div>

        {/* Introduction paragraph */}
        <p className="text-heading text-lg md:text-xl leading-relaxed max-w-3xl mb-20 font-display italic">
          I work with founders, startups, and businesses based on strategy and
          execution. I set one goal, cut the noise, and move. When the job is done,
          the result is live and measured — not just designed.
        </p>

        {/* Timeline rows */}
        <div className="divide-y divide-border">
          {experience.map((e) => (
            <div
              key={e.role + e.place}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 py-10 group hover:bg-surface transition-colors duration-200 md:-mx-6 md:px-6"
            >
              <div>
                <div className="label mb-1">{e.period}</div>
                <div className="label text-heading">{e.place}</div>
              </div>
              <div>
                <h3 className="font-display italic text-2xl text-heading mb-3 group-hover:text-heading">
                  {e.role}
                </h3>
                <p className="text-body text-sm leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
