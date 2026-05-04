'use client'
import { useState } from 'react'

const contactLinks = [
  { label: 'Email',    value: 'junaidreal4@gmail.com', href: 'mailto:junaidreal4@gmail.com'        },
  { label: 'WhatsApp', value: '+49 157 748 73835',      href: 'https://wa.me/4915774873835'         },
  { label: 'LinkedIn', value: 'linkedin.com/in/junaid412', href: 'https://linkedin.com/in/junaid412' },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xaqlklqy', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('sent'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="section-pad bg-canvas">
      <div className="container-width">

        <p className="label mb-6">Get in Touch</p>

        {/* Giant heading — like nikolaradeski.com contact */}
        <h2 className="font-serif-display text-[clamp(3rem,10vw,9rem)] text-heading leading-[0.9] mb-16">
          How can<br />I help?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <p className="text-body text-sm leading-relaxed mb-12 max-w-sm">
              Have a project in mind? Tell me what you need and I&apos;ll get back to you within
              24 hours with a free quote.
            </p>
            <div className="divide-y divide-border">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-5 group"
                >
                  <div>
                    <div className="label mb-1">{c.label}</div>
                    <div className="text-body text-sm group-hover:text-heading transition-colors">{c.value}</div>
                  </div>
                  <span className="label group-hover:text-heading transition-colors">&rarr;</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="label block mb-2">Full Name</label>
                <input
                  name="name" required placeholder="Your name"
                  className="w-full bg-transparent border-b border-border text-heading placeholder-muted
                             py-3 font-mono text-sm focus:outline-none focus:border-heading transition-colors"
                />
              </div>
              <div>
                <label className="label block mb-2">Email</label>
                <input
                  name="email" type="email" required placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-border text-heading placeholder-muted
                             py-3 font-mono text-sm focus:outline-none focus:border-heading transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="label block mb-2">Service</label>
              <select
                name="service"
                className="w-full bg-canvas border-b border-border text-body
                           py-3 font-mono text-sm focus:outline-none focus:border-heading transition-colors"
              >
                <option>Landing Page (€800 – €1,500)</option>
                <option>Business Website (€1,200 – €2,500)</option>
                <option>Portfolio Site (€1,500 – €3,000)</option>
                <option>E-Commerce (€3,000 – €6,000)</option>
                <option>Full-Stack App (€3,000 – €6,000)</option>
                <option>Maintenance / Other</option>
              </select>
            </div>

            <div>
              <label className="label block mb-2">Project Details</label>
              <textarea
                name="message" rows={5} required
                placeholder="What do you need? Any deadline or budget in mind?"
                className="w-full bg-transparent border-b border-border text-heading placeholder-muted
                           py-3 font-mono text-sm focus:outline-none focus:border-heading transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="label border border-heading text-heading px-6 py-4 hover:bg-heading hover:text-canvas transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full text-center mt-2"
            >
              {status === 'idle'    && 'Submit'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent'    && 'Message Sent'}
              {status === 'error'   && 'Failed — Try Again'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
