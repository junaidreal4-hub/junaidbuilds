const testimonials = [
  {
    name: 'Riju S.',    service: 'Portfolio Website', date: 'March 2026',
    text: 'Junaid delivered exactly what I needed. A cinematic, premium portfolio that gets compliments every time someone visits. Fast turnaround, zero revisions needed.',
  },
  {
    name: 'Thomas K.',  service: 'Business Website',  date: 'February 2026',
    text: 'Professional, sharp, and easy to work with. He understood the brief instantly and delivered a website I am genuinely proud to share with clients.',
  },
  {
    name: 'Sarah M.',   service: 'Landing Page',       date: 'January 2026',
    text: 'Our conversion rate went up after the redesign. Junaid knows how to build pages that actually work, not just look good.',
  },
  {
    name: 'Alex N.',    service: 'Full-Stack App',      date: 'December 2025',
    text: 'He built our MVP from scratch in under 6 weeks — frontend, backend, database, all deployed and working. Highly recommend.',
  },
  {
    name: 'Lena B.',    service: 'Corporate Website',   date: 'November 2025',
    text: 'Clean code, clean design, clean communication. Everything was on time and exactly as agreed. Will hire again.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-surface overflow-hidden">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label mb-3">/ Client Reviews</p>
            <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] text-heading leading-none tracking-tight">
              Testimonials
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-subtle">What clients say about working with me.</p>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-shrink-0 w-[320px] md:w-[360px] border border-border p-8 rounded-2xl bg-canvas flex flex-col justify-between gap-8"
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-subtle">&ldquo;{t.text}&rdquo;</p>
              </div>
              <div className="border-t border-border pt-5">
                <div className="font-sans font-bold text-heading text-sm">{t.name}</div>
                <div className="label mt-1">{t.service} — {t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
