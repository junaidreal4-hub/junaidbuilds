const reviews = [
  {
    num: '001', name: 'Riju S.',   country: 'India / Berlin', service: 'Portfolio Website',
    text: 'Junaid delivered exactly what I needed — a cinematic, premium portfolio that gets compliments every time someone visits. Fast turnaround, zero revisions needed. I would hire him again without hesitation.',
  },
  {
    num: '002', name: 'Thomas K.', country: 'Germany',        service: 'Business Website',
    text: 'Professional, sharp, and easy to work with. He understood the brief on the first call and delivered a website I am genuinely proud to share with my clients.',
  },
  {
    num: '003', name: 'Sarah M.',  country: 'United Kingdom', service: 'Landing Page',
    text: 'Our conversion rate improved significantly after the redesign. Junaid knows how to build pages that actually perform — not just look good.',
  },
  {
    num: '004', name: 'Alex N.',   country: 'Netherlands',    service: 'Full-Stack App',
    text: 'He built our MVP from scratch in under 6 weeks — frontend, backend, database, authentication, all deployed and working. Truly rare to find this level of skill and reliability.',
  },
  {
    num: '005', name: 'Lena B.',   country: 'Germany',        service: 'Corporate Website',
    text: 'Clean code, clean design, clean communication. Everything was delivered on time and exactly as agreed. Will definitely hire again.',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="section-pad bg-canvas">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label mb-4">/ Client Reviews</p>
            <h2 className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none">Testimonials</h2>
          </div>
          <p className="text-sm text-muted max-w-xs">What clients say after working with me.</p>
        </div>

        {/* No card borders — clean numbered list style */}
        <div className="flex flex-col gap-0">
          {reviews.map((r, i) => (
            <div key={r.num} className={`grid grid-cols-1 md:grid-cols-[120px_1fr_200px] gap-6 md:gap-12 py-12 ${
              i !== reviews.length - 1 ? 'border-b border-white/[0.05]' : ''
            }`}>
              <div>
                <span className="font-mono font-bold text-orange text-lg">{r.num}</span>
              </div>
              <p className="text-body text-base leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="md:text-right">
                <p className="font-sans font-bold text-heading text-sm">{r.name}</p>
                <p className="label mt-1">{r.country}</p>
                <p className="label mt-1">{r.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
