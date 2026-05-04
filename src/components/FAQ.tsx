'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How do you ensure high-quality work?',
    a: 'Every project starts with a clear brief and fixed scope. I write clean, maintainable code with thorough testing before delivery. You get to review and request one round of revisions before final handoff.',
  },
  {
    q: 'What industries and clients have you worked with?',
    a: 'I have built websites for creative professionals, bakeries, corporate businesses, and SaaS startups. I adapt the design and tech stack to suit each client’s specific industry and goals.',
  },
  {
    q: 'Do you work independently or as part of a team?',
    a: 'I work independently on most projects, which means direct communication and faster decisions. For larger builds I bring in trusted collaborators as needed, while remaining your single point of contact.',
  },
  {
    q: 'What is your process from brief to launch?',
    a: 'Discovery → Scope & Quote → Design Mockup → Development → Review & Revisions → Launch. Most projects are completed in 1–3 weeks depending on scope.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. I offer monthly maintenance retainers from €150/mo covering updates, bug fixes, performance monitoring, and priority support.',
  },
  {
    q: 'Why hire a freelancer instead of an agency?',
    a: 'No account managers, no markup, no hand-offs to junior developers. You work directly with the person building your site — faster, cheaper, and with better communication throughout.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-pad bg-canvas">
      <div className="container-width">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="label mb-4">/ Questions</p>
            <h2 className="font-display italic text-[clamp(2.2rem,4.5vw,4rem)] text-heading leading-none">
              FAQ
            </h2>
          </div>
          <p className="text-body text-sm leading-relaxed max-w-xs">
            Everything you need to know before we start working together.
          </p>
        </div>

        <div className="divide-y divide-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-7 flex items-center justify-between gap-6 group"
              >
                <span className={`font-display italic text-xl md:text-2xl transition-colors duration-200 ${
                  open === i ? 'text-heading' : 'text-subtle group-hover:text-heading'
                }`}>
                  {f.q}
                </span>
                <span className={`label text-heading text-xl leading-none shrink-0 transition-transform duration-300 ${
                  open === i ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open === i ? 'max-h-40 pb-8' : 'max-h-0'
              }`}>
                <p className="text-body text-sm leading-relaxed max-w-2xl">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
