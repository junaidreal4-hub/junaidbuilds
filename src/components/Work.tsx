const projects = [
  {
    index: '01',
    title: 'VisualsbyRiju',
    tag: 'Creative Portfolio',
    status: 'Live',
    desc: 'Cinematic portfolio website for a professional video editor. Features scroll animations, showreel section, and a premium editorial design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    live: 'https://visualsbyriju.vercel.app',
    github: 'https://github.com/junaidreal4-hub/visualsbyriju',
  },
  {
    index: '02',
    title: 'Cookie & Dough',
    tag: 'Business Website',
    status: 'Live',
    desc: 'Full brochure website for a Berlin bakery. Warm, inviting design with menu showcase, location info, and an order inquiry form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Cookie-Dough',
  },
  {
    index: '03',
    title: 'N88E Build',
    tag: 'Corporate Website',
    status: 'Live',
    desc: '8-page corporate website with Google Sheets API lead capture, interactive data visualisations, SEO optimisation, and custom domain on Vercel.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Google Sheets API'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/N88E-Build-Website',
  },
  {
    index: '04',
    title: 'Strebo',
    tag: 'Full-Stack SaaS',
    status: 'In Progress',
    desc: 'AI-powered job application assistant. Full-stack app with Next.js, FastAPI backend, PostgreSQL database, and OpenAI integration for cover letter generation.',
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
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4.5rem)] text-heading leading-none">
              Projects
            </h2>
          </div>
          <p className="text-body max-w-xs leading-relaxed text-sm">
            Real websites. Real clients.
            Built with clean code and deployed live.
          </p>
        </div>

        {/* Project rows */}
        <div className="divide-y divide-border">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_180px] gap-6 md:gap-10 py-12 transition-colors duration-200 hover:bg-surface md:-mx-6 md:px-6"
            >
              {/* Index */}
              <div className="label pt-1.5">{p.index}</div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-serif-display text-[clamp(1.8rem,4vw,3rem)] text-heading leading-none">
                    {p.title}
                  </h3>
                  <span className="label border border-border px-2 py-1">{p.tag}</span>
                  <span className={`label px-2 py-1 border ${
                    p.status === 'Live' ? 'border-heading text-heading' : 'border-muted text-muted'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-body text-sm leading-relaxed mb-6 max-w-lg">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="label border border-border px-3 py-1.5">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-row md:flex-col gap-5 items-start md:items-end justify-start md:justify-center">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label hover:text-heading transition-colors"
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
