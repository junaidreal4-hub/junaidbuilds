const marqueeText = 'FREELANCE WEB DEVELOPER · BERLIN · NEXT.JS · REACT · FULL-STACK · AVAILABLE FOR PROJECTS · '

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">

      {/* Marquee */}
      <div className="overflow-hidden py-5 border-b border-border">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="font-mono text-xs tracking-[0.25em] text-muted mr-0">
              {marqueeText.repeat(6)}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-width flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8">
        <div>
          <a href="/" className="font-display font-bold text-lg text-heading">
            junaid<span className="text-accent">builds</span>
          </a>
          <p className="label mt-1">© 2026 Mohammed Junaid Khan — Berlin, DE</p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {[
            { label: 'Email',    href: 'mailto:junaidreal4@gmail.com'          },
            { label: 'WhatsApp', href: 'https://wa.me/4915774873835'           },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/junaid412'     },
            { label: 'GitHub',   href: 'https://github.com/junaidreal4-hub'   },
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
