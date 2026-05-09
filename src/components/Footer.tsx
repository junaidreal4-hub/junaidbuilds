export default function Footer() {
  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.06] overflow-hidden">

      {/* Giant ghost wordmark */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-sans font-black uppercase text-white/[0.025] leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: 'clamp(5rem, 20vw, 18rem)' }}
        >
          mdjk.dev
        </span>
      </div>

      <div className="relative container-width pt-20 pb-10">

        {/* Top row — wordmark + tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/[0.06]">
          <div>
            <a href="/" className="font-mono font-bold text-white text-sm tracking-widest uppercase">
              mdjk.dev
            </a>
            <p className="font-mono text-xs text-white/20 mt-3 max-w-xs leading-relaxed">
              Solo developer studio based in Berlin.
              Design, engineering &amp; strategy — as one.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 self-start md:self-auto"
          >
            <span className="font-sans font-black uppercase text-white text-2xl tracking-tight group-hover:text-orange transition-colors duration-300">
              Start a project
            </span>
            <span className="font-mono text-white/30 text-xl group-hover:text-orange group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
        </div>

        {/* Middle row — 3 cols */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/[0.06]">

          {/* Nav */}
          <div>
            <p className="font-mono text-xs text-white/20 uppercase tracking-widest mb-6">Navigate</p>
            <nav className="flex flex-col gap-3">
              {[['Work','#work'],['About','#about'],['Services','#services'],['Contact','#contact']].map(([l,h]) => (
                <a key={h} href={h} className="font-mono text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors duration-200">{l}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-white/20 uppercase tracking-widest mb-6">Contact</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Email',    href: 'mailto:junaidreal4@gmail.com'       },
                { label: 'WhatsApp', href: 'https://wa.me/4915774873835'        },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/junaid412'  },
                { label: 'GitHub',   href: 'https://github.com/junaidreal4-hub' },
              ].map((c) => (
                <a key={c.label} href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors duration-200"
                >{c.label}</a>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <p className="font-mono text-xs text-white/20 uppercase tracking-widest mb-6">Stack</p>
            <div className="flex flex-col gap-3">
              {['Next.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'GSAP', 'Vercel'].map((t) => (
                <span key={t} className="font-mono text-xs text-white/25 uppercase tracking-widest">{t}</span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="font-mono text-xs text-white/20 uppercase tracking-widest mb-6">Status</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
                </span>
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Available</span>
              </div>
              <span className="font-mono text-xs text-white/25">Berlin, Germany</span>
              <span className="font-mono text-xs text-white/25">Remote ✓</span>
              <span className="font-mono text-xs text-white/25">1–3 wk delivery</span>
            </div>
          </div>
        </div>

        {/* Bottom row — copyright + back to top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="font-mono text-xs text-white/20">
            &copy; 2026 Mohammed Junaid Khan &mdash; All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-xs text-white/20 hover:text-white uppercase tracking-widest transition-colors duration-200 flex items-center gap-2"
          >
            Back to top <span className="text-sm">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
