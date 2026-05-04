const MARQUEE_TEXT = "Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  "

const navLinks = [
  { label: 'Services', href: '#services'     },
  { label: 'Work',     href: '#work'          },
  { label: 'About',    href: '#about'         },
  { label: 'Reviews',  href: '#testimonials'  },
  { label: 'Contact',  href: '#contact'       },
]

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-border">

      {/* Marquee — exact nikolaradeski.com style: large italic serif */}
      <div className="overflow-hidden border-b border-border py-5">
        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ width: 'max-content' }}
        >
          <span className="font-display italic text-[clamp(1.8rem,3.5vw,3rem)] text-heading pr-0">
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        </div>
      </div>

      {/* Footer body — name large on left, nav + contact on right */}
      <div className="container-width py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left — large name */}
          <div>
            <a href="/" className="font-display italic text-[clamp(2rem,5vw,4.5rem)] text-heading leading-none block mb-4">
              Junaid Builds
            </a>
            <p className="label">Based in Berlin, Germany</p>
            <p className="label mt-1">Available for new projects</p>
          </div>

          {/* Right — nav columns */}
          <div className="grid grid-cols-2 gap-10">
            {/* Main nav — IN THE FOOTER like nikolaradeski.com */}
            <div>
              <p className="label mb-5">Main Menu</p>
              <nav className="flex flex-col gap-3">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="hover-slide label hover:text-heading"
                  >
                    <span>{l.label}</span>
                    <span>{l.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="label mb-5">For Inquiries</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:junaidreal4@gmail.com"
                  className="label hover:text-heading transition-colors break-all">
                  junaidreal4@gmail.com
                </a>
                <a href="https://wa.me/4915774873835" target="_blank" rel="noopener noreferrer"
                  className="label hover:text-heading transition-colors">
                  +49 157 748 73835
                </a>
                <a href="https://linkedin.com/in/junaid412" target="_blank" rel="noopener noreferrer"
                  className="label hover:text-heading transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/junaidreal4-hub" target="_blank" rel="noopener noreferrer"
                  className="label hover:text-heading transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="divider mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="label">&copy; 2026 Mohammed Junaid Khan — All rights reserved.</p>
          <a href="#" className="label hover:text-heading transition-colors">Go to Top &uarr;</a>
        </div>
      </div>
    </footer>
  )
}
