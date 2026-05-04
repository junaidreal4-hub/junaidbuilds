export default function About() {
  const skills = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
    'FastAPI', 'Python', 'PostgreSQL', 'Vercel',
    'HTML / CSS', 'JavaScript', 'Node.js', 'Figma',
  ]

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="font-mono text-sm text-sky-500 font-semibold tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Berlin-based.<br />Client-focused.</h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              I&apos;m Junaid — a full-stack developer based in Berlin. I specialise in building websites and web apps that look great, load fast, and actually help businesses grow.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              I work directly with clients — no middlemen, no agency overhead. That means faster turnaround, better communication, and fairer pricing. From a simple landing page to a full custom app, I handle everything from design to deployment.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Based in <strong className="text-gray-800">Berlin, Germany</strong>. Available for remote projects worldwide.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map(s => (
                <span key={s} className="text-xs font-mono bg-sky-50 text-sky-700 border border-sky-100 px-3 py-1.5 rounded-lg">{s}</span>
              ))}
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors">
              Let&apos;s Work Together
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats card */}
          <div className="bg-slate-50 rounded-3xl p-10 border border-gray-100">
            <div className="grid grid-cols-2 gap-8">
              {[
                { num: '5+',  label: 'Websites Built',     icon: '🌐' },
                { num: '3',   label: 'Live Client Sites',   icon: '✅' },
                { num: '2+',  label: 'Years Building',      icon: '⚡' },
                { num: '48h', label: 'Avg First Response',  icon: '💬' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900">{stat.num}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center mb-4">Also available on</p>
              <div className="flex justify-center gap-6">
                <a href="https://github.com/junaidreal4-hub" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">GitHub →</a>
                <a href="https://linkedin.com/in/junaid412" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">LinkedIn →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
