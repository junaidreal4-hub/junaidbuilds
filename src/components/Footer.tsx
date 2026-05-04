const MARQUEE = 'Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  Let\u2019s work together  \u2737  '

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-border">

      {/* Marquee */}
      <div className="overflow-hidden border-b border-border py-6">
        <div className="flex whitespace-nowrap animate-marquee" style={{ width: 'max-content' }}>
          <span className="font-sans font-black text-[clamp(1.6rem,3vw,2.8rem)] text-heading tracking-tight pr-0">
            {MARQUEE}{MARQUEE}
          </span>
        </div>
      </div>

      {/* Footer body */}
      <div className="container-width py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <a href="/" className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none block mb-4">
              Junaid Builds
            </a>
            <p className="label">Based in Berlin, Germany</p>
            <p className="label mt-1">Available for new projects</p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="label mb-5">Main Menu</p>
              <nav className="flex flex-col gap-3">
                {[
                  ['Skills',      '#skills'       ],
                  ['About',       '#about'        ],
                  ['Work',        '#work'         ],
                  ['Reviews',     '#testimonials' ],
                  ['Contact',     '#contact'      ],
                ].map(([label, href]) => (
                  <a key={href} href={href} className="label hover:text-heading transition-colors">{label}</a>
                ))}
              </nav>
            </div>
            <div>
              <p className="label mb-5">For Inquiries</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:junaidreal4@gmail.com" className="label hover:text-heading transition-colors break-all">junaidreal4@gmail.com</a>
                <a href="https://wa.me/4915774873835" target="_blank" rel="noopener noreferrer" className="label hover:text-heading transition-colors">+49 157 748 73835</a>
                <a href="https://linkedin.com/in/junaid412" target="_blank" rel="noopener noreferrer" className="label hover:text-heading transition-colors">LinkedIn</a>
                <a href="https://github.com/junaidreal4-hub" target="_blank" rel="noopener noreferrer" className="label hover:text-heading transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="label">&copy; 2026 Mohammed Junaid Khan — All rights reserved.</p>
          <a href="#" className="label hover:text-heading transition-colors">Go to Top ↑</a>
        </div>
      </div>
    </footer>
  )
}
