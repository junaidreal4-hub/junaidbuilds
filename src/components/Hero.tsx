export default function Hero() {
  const stats = [
    { num: '5+',    label: 'Sites Built'        },
    { num: '3',     label: 'Live Client Sites'   },
    { num: '100%',  label: 'On-Time Delivery'    },
    { num: '€1.2k', label: 'Starting Price'      },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-canvas overflow-hidden">

      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.06] z-0"
        style={{ background: 'radial-gradient(circle, #c8ff00 0%, transparent 70%)' }}
      />

      {/* Main content */}
      <div className="container-width relative z-10 flex flex-col justify-center flex-1 pt-36 pb-20">

        {/* Availability indicator */}
        <div className="flex items-center gap-3 mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="label">Available for new projects — Berlin &amp; Remote</span>
        </div>

        {/* Headline */}
        <h1 className="heading-xl text-[clamp(3.5rem,9vw,8rem)] mb-8 max-w-5xl">
          Websites that<br />
          <span className="text-accent">win clients.</span>
        </h1>

        <p className="text-body text-lg md:text-xl leading-relaxed max-w-xl mb-12">
          I&apos;m Junaid — a Berlin-based full-stack developer. I build fast, custom websites
          for businesses that want to stand out. No templates. No agency markup.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">Start a Project</a>
          <a href="#work" className="btn-ghost">View Work</a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 container-width py-10 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-3xl text-heading mb-1">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
