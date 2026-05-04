const MARQUEE = 'Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  '

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-border">

      {/* Marquee — exactly like nikolaradeski.com footer */}
      <div className="relative overflow-hidden py-6 border-b border-border">
        <div className="flex whitespace-nowrap">
          <span className="font-serif-display italic text-2xl md:text-3xl text-heading animate-marquee inline-block pr-0">
            {MARQUEE}
          </span>
          <span
            className="font-serif-display italic text-2xl md:text-3xl text-heading animate-marquee2 inline-block"
            aria-hidden
          >
            {MARQUEE}
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="container-width flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8">
        <div>
          <a href="/" className="font-mono text-sm font-bold text-heading">
            junaid<span className="italic font-serif-display text-base">builds</span>
          </a>
          <p className="label mt-1">© 2026 Mohammed Junaid Khan — Berlin, DE</p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {[
            { label: 'Email',    href: 'mailto:junaidreal4@gmail.com'        },
            { label: 'WhatsApp', href: 'https://wa.me/4915774873835'         },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/junaid412'   },
            { label: 'GitHub',   href: 'https://github.com/junaidreal4-hub' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="label hover:text-heading transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
