const skills = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
  'FastAPI', 'Python', 'PostgreSQL', 'Vercel',
  'HTML / CSS', 'JavaScript', 'Node.js', 'Figma',
]

const stats = [
  { num: '5+',  label: 'Websites Built'   },
  { num: '3',   label: 'Live Client Sites' },
  { num: '2+',  label: 'Years Building'    },
  { num: '48h', label: 'Avg Response Time' },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="container-width">

        <p className="label mb-16">About</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

          {/* Left */}
          <div>
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4.5rem)] text-heading leading-none mb-10">
              Berlin-based.<br />Client-focused.
            </h2>

            <div className="space-y-5 text-body text-sm leading-relaxed mb-10">
              <p>
                I&apos;m Junaid — a full-stack developer based in Berlin. I specialise in building
                websites and web apps that look great, load fast, and actually help businesses grow.
              </p>
              <p>
                I work directly with clients — no middlemen, no agency overhead. That means faster
                turnaround, better communication, and fairer pricing.
              </p>
              <p>
                Based in <span className="text-heading">Berlin, Germany</span>. Available for remote
                projects worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((s) => (
                <span key={s} className="label border border-border px-3 py-1.5">{s}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="label border border-heading text-heading px-6 py-3 hover:bg-heading hover:text-canvas transition-all duration-200"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="https://github.com/junaidreal4-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="label border border-border px-6 py-3 hover:border-heading hover:text-heading transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-12">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-border pt-6">
                  <div className="font-serif-display text-4xl text-heading mb-2">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Links card */}
            <div className="border border-border p-8">
              <p className="label mb-6">Find me on</p>
              <div className="flex flex-col">
                <a
                  href="https://github.com/junaidreal4-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group border-b border-border py-4"
                >
                  <span className="label group-hover:text-heading transition-colors">GitHub</span>
                  <span className="label group-hover:text-heading transition-colors">&rarr;</span>
                </a>
                <a
                  href="https://linkedin.com/in/junaid412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group py-4"
                >
                  <span className="label group-hover:text-heading transition-colors">LinkedIn</span>
                  <span className="label group-hover:text-heading transition-colors">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
