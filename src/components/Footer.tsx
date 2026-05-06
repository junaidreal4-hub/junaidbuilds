export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-white/[0.06]">
      <div className="container-width py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1: Contact links */}
          <div>
            <p className="label mb-6">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:junaidreal4@gmail.com" className="label hover:text-heading transition-colors">junaidreal4@gmail.com</a>
              <a href="https://wa.me/4915774873835" target="_blank" rel="noopener noreferrer" className="label hover:text-heading transition-colors">WhatsApp</a>
              <a href="https://linkedin.com/in/junaid412" target="_blank" rel="noopener noreferrer" className="label hover:text-heading transition-colors">LinkedIn</a>
              <a href="https://github.com/junaidreal4-hub" target="_blank" rel="noopener noreferrer" className="label hover:text-heading transition-colors">GitHub</a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="label mb-6">Navigation</p>
            <nav className="flex flex-col gap-3">
              {[['Services','#services'],['Work','#work'],['About','#about'],['Reviews','#reviews'],['Contact','#contact']].map(([l,h]) => (
                <a key={h} href={h} className="label hover:text-heading transition-colors">{l}</a>
              ))}
            </nav>
          </div>

          {/* Col 3: Studio note */}
          <div>
            <p className="label mb-6">mdjk.dev</p>
            <p className="text-sm text-muted leading-relaxed">
              Solo developer studio based in Berlin, Germany. Specialising in React,
              Next.js, and full-stack web applications. Available for projects worldwide.
              All work is built with care, precision, and purpose.
            </p>
          </div>
        </div>

        <div className="divider mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="label">&copy; 2026 Mohammed Junaid Khan (mdjk.dev) — All rights reserved.</p>
          <a href="#" className="label hover:text-heading transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
