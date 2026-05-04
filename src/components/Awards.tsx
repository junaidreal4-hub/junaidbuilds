const awards = [
  { title: 'Top Freelancer',        org: 'PeoplePerHour',   date: 'May 2025'      },
  { title: 'Best Portfolio',        org: 'GitHub Showcase', date: 'March 2025'    },
  { title: 'Project of The Month',  org: 'Dev Community',   date: 'January 2025'  },
  { title: 'Rising Talent Award',   org: 'Upwork',          date: 'October 2024'  },
]

export default function Awards() {
  return (
    <section className="section-pad bg-surface overflow-hidden">
      <div className="container-width">
        <p className="label mb-10">/ Recognition</p>
        <div className="flex gap-5 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          {awards.map((a) => (
            <div
              key={a.title}
              className="flex-shrink-0 w-64 border border-border bg-canvas p-8 rounded-2xl flex flex-col justify-between gap-12"
            >
              <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <h3 className="font-sans font-bold text-heading text-lg tracking-tight">{a.title}</h3>
                <p className="label mt-2">{a.org}</p>
                <p className="label mt-1">{a.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
