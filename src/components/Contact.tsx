'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [role,   setRole]   = useState<'project' | 'other' | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xaqlklqy', {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('sent'); form.reset(); setRole(null) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="container-width">

        <p className="label mb-6">/ Get in Touch</p>

        <h2 className="font-display italic text-[clamp(3rem,10vw,9rem)] text-heading leading-[0.88] mb-16">
          How can<br />I help?
        </h2>

        <p className="text-body text-sm leading-relaxed mb-16 max-w-lg">
          If the work above fits what you need, send me a note. Share the goal, a link,
          budget range, and when you want to start. I&apos;ll reply with the next step.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact details */}
          <div className="divide-y divide-border">
            {[
              { label: 'Email',    value: 'junaidreal4@gmail.com',    href: 'mailto:junaidreal4@gmail.com'        },
              { label: 'WhatsApp', value: '+49 157 748 73835',         href: 'https://wa.me/4915774873835'         },
              { label: 'LinkedIn', value: 'linkedin.com/in/junaid412', href: 'https://linkedin.com/in/junaid412'   },
              { label: 'GitHub',   value: 'junaidreal4-hub',           href: 'https://github.com/junaidreal4-hub' },
            ].map((c) => (
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

          {/* Form — matching nikolaradeski.com form style */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="label block mb-3">Your Full Name *</label>
                <input
                  name="name" required placeholder="Junaid Khan"
                  className="w-full bg-transparent border-b border-border text-heading placeholder-muted
                             pb-3 font-mono text-sm focus:outline-none focus:border-heading transition-colors"
                />
              </div>
              <div>
                <label className="label block mb-3">Your Email *</label>
                <input
                  name="email" type="email" required placeholder="hello@yourcompany.com"
                  className="w-full bg-transparent border-b border-border text-heading placeholder-muted
                             pb-3 font-mono text-sm focus:outline-none focus:border-heading transition-colors"
                />
              </div>
            </div>

            {/* Role radio — like nikolaradeski.com */}
            <div>
              <label className="label block mb-4">Your Status *</label>
              <div className="flex flex-wrap gap-4">
                {[
                  { val: 'project', label: 'I have a project' },
                  { val: 'other',   label: 'Just saying hello' },
                ].map((r) => (
                  <button
                    key={r.val}
                    type="button"
                    onClick={() => setRole(r.val as 'project' | 'other')}
                    className={`label px-5 py-3 border transition-all duration-200 ${
                      role === r.val
                        ? 'border-heading text-heading bg-heading text-canvas'
                        : 'border-border hover:border-heading hover:text-heading'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
              <input type="hidden" name="role" value={role ?? ''} />
            </div>

            <div>
              <label className="label block mb-3">More Info *</label>
              <textarea
                name="message" rows={5} required
                placeholder="Tell me about your project, budget range, and timeline..."
                className="w-full bg-transparent border-b border-border text-heading placeholder-muted
                           pb-3 font-mono text-sm focus:outline-none focus:border-heading transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="label border border-heading text-heading px-6 py-4 hover:bg-heading hover:text-canvas
                         transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full text-center"
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
