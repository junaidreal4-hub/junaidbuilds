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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — copy */}
          <div>
            <h2 className="heading-xl text-[clamp(2.5rem,5vw,4rem)] mb-10">
              Berlin-based.<br />Client-focused.
            </h2>

            <div className="space-y-5 text-body leading-relaxed mb-10">
              <p>
                I&apos;m Junaid — a full-stack developer based in Berlin. I specialise in building
                websites and web apps that look great, load fast, and actually help businesses grow.
              </p>
              <p>
                I work directly with clients — no middlemen, no agency overhead. That means faster
                turnaround, better communication, and fairer pricing. From a simple landing page to a
                full custom app, I handle everything from design to deployment.
              </p>
              <p>
                Based in <span className="text-heading">Berlin, Germany</span>. Available for remote
                projects worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs text-muted border border-border px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Let&apos;s Work Together</a>
              <a
                href="https://github.com/junaidreal4-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col justify-between gap-12">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-border pt-6">
                  <div className="font-display font-bold text-4xl text-heading mb-2">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="border border-border p-8">
              <p className="label mb-6">Find me on</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/junaidreal4-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group border-b border-border pb-4"
                >
                  <span className="text-body group-hover:text-heading transition-colors">GitHub</span>
                  <span className="label text-accent group-hover:text-heading transition-colors">&rarr;</span>
                </a>
                <a
                  href="https://linkedin.com/in/junaid412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <span className="text-body group-hover:text-heading transition-colors">LinkedIn</span>
                  <span className="label text-accent group-hover:text-heading transition-colors">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
