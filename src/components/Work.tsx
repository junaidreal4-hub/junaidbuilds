const projects = [
  {
    index: '01',
    title: 'VisualsbyRiju',
    tag: 'Creative Portfolio',
    status: 'Live',
    desc:
      'Cinematic portfolio website for a professional video editor. Features scroll animations, showreel section, and a premium editorial design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    live: 'https://visualsbyriju.vercel.app',
    github: 'https://github.com/junaidreal4-hub/visualsbyriju',
  },
  {
    index: '02',
    title: 'Cookie & Dough',
    tag: 'Business Website',
    status: 'Live',
    desc:
      'Full brochure website for a Berlin bakery. Warm, inviting design with menu showcase, location info, and an order inquiry form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Cookie-Dough',
  },
  {
    index: '03',
    title: 'N88E Build',
    tag: 'Corporate Website',
    status: 'Live',
    desc:
      '8-page corporate website with Google Sheets API lead capture, interactive data visualisations with Recharts, SEO optimisation, and custom domain on Vercel.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Google Sheets API'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/N88E-Build-Website',
  },
  {
    index: '04',
    title: 'Strebo',
    tag: 'Full-Stack App',
    status: 'In Progress',
    desc:
      'AI-powered job application assistant. Full-stack SaaS with Next.js frontend, FastAPI backend, PostgreSQL database, and OpenAI integration for cover letter generation.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Render'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Strebo',
  },
]

export default function Work() {
  return (
    <section id="work" className="section-pad bg-canvas">
      <div className="container-width">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="label mb-4">Selected Work</p>
            <h2 className="heading-xl text-[clamp(2.5rem,5vw,4rem)]">Projects</h2>
          </div>
          <p className="text-body max-w-xs leading-relaxed">
            Real websites. Real clients. Built with clean code and deployed live.
          </p>
        </div>

        {/* Project rows */}
        <div className="divide-y divide-border">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 py-12 hover:bg-surface transition-colors duration-200 md:-mx-6 md:px-6"
            >
              {/* Index */}
              <div className="label pt-1">{p.index}</div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h3 className="font-display font-bold text-3xl text-heading">{p.title}</h3>
                  <span className="label border border-border px-2 py-0.5">{p.tag}</span>
                  <span
                    className={`label px-2 py-0.5 border ${
                      p.status === 'Live'
                        ? 'border-accent text-accent'
                        : 'border-muted text-muted'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-body leading-relaxed mb-6 max-w-lg">{p.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {p.stack.map((t) => (
                    <span key={t} className="font-mono text-xs text-muted border border-border px-3 py-1.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-row md:flex-col gap-6 md:gap-4 items-start md:items-end justify-start md:justify-between min-w-[120px] pt-1">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-accent hover:text-heading transition-colors"
                  >
                    Live Site &rarr;
                  </a>
                ) : (
                  <span className="label text-muted line-through">Live Site</span>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label hover:text-heading transition-colors"
                >
                  GitHub &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
