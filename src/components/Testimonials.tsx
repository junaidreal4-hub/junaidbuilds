const reviews = [
  {
    num: '001', name: 'Riju S.',   country: 'India / Berlin',
    service: 'Portfolio Website',
    text: 'Junaid delivered exactly what I needed — a cinematic, premium portfolio that gets compliments every time someone visits. Fast turnaround, zero revisions needed. The attention to detail was remarkable. I would hire him again without hesitation.',
  },
  {
    num: '002', name: 'Thomas K.',  country: 'Germany',
    service: 'Business Website',
    text: 'Professional, sharp, and easy to work with. He understood the brief on the first call and delivered a website I am genuinely proud to share with my clients. Communication was excellent throughout the entire project.',
  },
  {
    num: '003', name: 'Sarah M.',   country: 'United Kingdom',
    service: 'Landing Page',
    text: 'Our conversion rate improved significantly after the redesign. Junaid knows how to build pages that actually perform — not just look good. He clearly understands the relationship between design and business outcomes.',
  },
  {
    num: '004', name: 'Alex N.',    country: 'Netherlands',
    service: 'Full-Stack App',
    text: 'He built our MVP from scratch in under 6 weeks — frontend, backend, database, authentication, all deployed and working. Highly recommend for any serious technical project. Truly rare to find this level of skill and reliability.',
  },
  {
    num: '005', name: 'Lena B.',    country: 'Germany',
    service: 'Corporate Website',
    text: 'Clean code, clean design, clean communication. Everything was delivered on time and exactly as agreed. The site loads incredibly fast and looks great on all devices. Will definitely hire again for our next project.',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="section-pad bg-canvas overflow-hidden">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label mb-4">/ Client Reviews</p>
            <h2 className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none">Testimonials</h2>
          </div>
          <p className="text-sm text-muted max-w-xs">What clients say after working with me.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
          {reviews.map((r) => (
            <div
              key={r.num}
              className="flex-shrink-0 w-[340px] md:w-[400px] bg-surface border border-white/[0.06] rounded-2xl p-10 flex flex-col justify-between gap-10"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono font-bold text-orange text-sm">{r.num}</span>
                  <span className="label">{r.service}</span>
                </div>
                <p className="text-body text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
              <div className="divider pt-6">
                <p className="font-sans font-bold text-heading text-sm">{r.name}</p>
                <p className="label mt-1">{r.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
