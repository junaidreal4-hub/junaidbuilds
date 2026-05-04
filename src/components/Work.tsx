const projects = [
  {
    title: 'VisualsbyRiju',
    tag: 'Creative Portfolio',
    status: 'Live',
    desc: 'Cinematic portfolio website for a professional video editor. Features scroll animations, showreel section, and a premium editorial design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    live: 'https://visualsbyriju.vercel.app',
    github: 'https://github.com/junaidreal4-hub/visualsbyriju',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cookie & Dough',
    tag: 'Business Website',
    status: 'Live',
    desc: 'Full brochure website for a Berlin bakery business. Warm, inviting design with menu showcase, location info, and an order inquiry form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    github: 'https://github.com/junaidreal4-hub/Cookie-Dough',
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'N88E Build',
    tag: 'Corporate Website',
    status: 'Live',
    desc: '8-page corporate website with Google Sheets API lead capture, interactive data visualisations with Recharts, SEO optimisation, and custom domain on Vercel.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Google Sheets API'],
    live: '#',
    github: 'https://github.com/junaidreal4-hub/N88E-Build-Website',
    color: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Strebo',
    tag: 'Full-Stack App',
    status: 'In Progress',
    desc: 'AI-powered job application assistant. Full-stack SaaS app with Next.js frontend, FastAPI backend, PostgreSQL database, and OpenAI integration for cover letter generation.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Render'],
    live: '#',
    github: 'https://github.com/junaidreal4-hub/Strebo',
    color: 'from-emerald-500 to-teal-600',
  },
]

export default function Work() {
  return (
    <section id="work" className="section-pad bg-slate-50">
      <div className="container-width">

        <div className="mb-14">
          <p className="font-mono text-sm text-sky-500 font-semibold tracking-widest uppercase mb-3">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-500 max-w-xl">Real websites. Real clients. Built with clean code and deployed live.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(p => (
            <div key={p.title} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group">

              {/* Colour banner */}
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-end p-6`}>
                <span className={`text-xs font-mono font-bold px-2 py-1 rounded-full ${
                  p.status === 'Live'
                    ? 'bg-green-400/20 text-green-100 border border-green-400/40'
                    : 'bg-yellow-400/20 text-yellow-100 border border-yellow-400/40'
                }`}>
                  {p.status === 'Live' ? '● LIVE' : '◐ IN PROGRESS'}
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">{p.tag}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map(t => (
                    <span key={t} className="text-xs font-mono bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {p.live !== '#' && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-semibold text-sky-500 hover:text-sky-700 transition-colors">
                      View Live →
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-400 hover:text-gray-700 transition-colors">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
