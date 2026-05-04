const experience = [
  {
    period: '2026 – Now',   role: 'Freelance Web Developer',   place: 'junaidbuilds.com',
    desc: 'Building custom websites and web apps for businesses in Berlin and globally. React, Next.js, full-stack.',
  },
  {
    period: '2025 – Now',   role: 'Full-Stack Developer',       place: 'Strebo (Personal Project)',
    desc: 'Designed and built a full-stack SaaS app with Next.js, FastAPI, PostgreSQL, and OpenAI API for AI-powered job tracking.',
  },
  {
    period: '2024 – 2025',  role: 'MS Data Analytics Student',  place: 'University, Berlin',
    desc: 'Studying big data systems, Apache Spark, Python data engineering, and machine learning pipelines.',
  },
  {
    period: '2023 – 2024',  role: 'Frontend Developer',         place: 'Freelance / PeoplePerHour',
    desc: 'Delivered corporate sites, portfolios, and landing pages. React, Tailwind CSS, Vite.',
  },
  {
    period: '2022 – 2023',  role: 'Content & Social Manager',   place: 'Various Clients',
    desc: 'Managed digital marketing campaigns, social channels, and content strategy for small businesses.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-canvas">
      <div className="container-width">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label mb-3">/ Background</p>
            <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] text-heading leading-none tracking-tight">
              Experience
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-subtle">Based in Berlin, Germany. Available for remote work worldwide.</p>
        </div>

        {/* Big italic statement — like nikolaradeski.com */}
        <p className="font-sans font-semibold text-heading text-xl md:text-2xl leading-relaxed max-w-3xl mb-20 italic">
          I work with founders, startups, and businesses based on strategy and
          execution. I set one goal, cut the noise, and move. When the job is done,
          the result is live and measured — not just designed.
        </p>

        <div className="divide-y divide-border">
          {experience.map((e) => (
            <div
              key={e.role}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 py-10 group hover:bg-surface transition-colors duration-200 md:-mx-6 md:px-6 rounded-xl"
            >
              <div>
                <div className="label mb-1">{e.period}</div>
                <div className="label text-heading font-bold">{e.place}</div>
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl text-heading mb-2 tracking-tight">{e.role}</h3>
                <p className="text-sm leading-relaxed text-subtle">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
