'use client'
import { useState } from 'react'

export default function Contact() {
  const [step,   setStep]   = useState<1 | 2>(1)
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [role,   setRole]   = useState<string | null>(null)
  const [form,   setForm]   = useState({ name: '', email: '', company: '' })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    data.set('name', form.name)
    data.set('email', form.email)
    data.set('company', form.company)
    if (role) data.set('status', role)
    try {
      const res = await fetch('https://formspree.io/f/xaqlklqy', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('sent'); setStep(1); setRole(null); setForm({ name: '', email: '', company: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputClass = 'w-full bg-transparent border-b border-white/10 text-heading placeholder-muted pb-3 font-mono text-sm focus:outline-none focus:border-orange transition-colors'

  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="container-width">
        <p className="label mb-6">/ Get in Touch</p>
        <h2 className="font-sans font-black text-[clamp(3rem,9vw,8rem)] text-heading leading-[0.88] tracking-tight mb-6">
          How can<br />I help?
        </h2>
        <p className="text-sm leading-relaxed mb-16 max-w-lg text-muted">
          Share your goal, budget range, and timeline. I respond within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: contact links */}
          <div className="divide-y divide-white/[0.06]">
            {[
              { label: 'Email',    value: 'junaidreal4@gmail.com',    href: 'mailto:junaidreal4@gmail.com'       },
              { label: 'WhatsApp', value: '+49 157 748 73835',         href: 'https://wa.me/4915774873835'        },
              { label: 'LinkedIn', value: 'linkedin.com/in/junaid412', href: 'https://linkedin.com/in/junaid412'  },
              { label: 'GitHub',   value: 'junaidreal4-hub',           href: 'https://github.com/junaidreal4-hub' },
            ].map((c) => (
              <a key={c.label} href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-between py-6 group"
              >
                <div>
                  <div className="label mb-1">{c.label}</div>
                  <div className="text-sm text-body group-hover:text-heading transition-colors">{c.value}</div>
                </div>
                <span className="label group-hover:text-orange transition-colors text-lg">→</span>
              </a>
            ))}
          </div>

          {/* Right: 2-step form — exact sirnik.co flow */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">

            {/* Step indicator */}
            <div className="flex items-center gap-4">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] transition-all ${
                    step === s ? 'bg-orange text-canvas' : 'border border-white/20 text-muted'
                  }`}>{s}</div>
                  <span className="label">{s === 1 ? 'Your Info' : 'Your Message'}</span>
                  {s === 1 && <span className="label">→</span>}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="flex flex-col gap-8">
                <div>
                  <label className="label block mb-3">Full Name *</label>
                  <input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                    required placeholder="Junaid Khan" className={inputClass} />
                </div>
                <div>
                  <label className="label block mb-3">Email Address *</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                    required placeholder="hello@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="label block mb-3">Company / Project Name</label>
                  <input value={form.company} onChange={e => setForm(f => ({...f, company: e.target.value}))}
                    placeholder="Acme GmbH" className={inputClass} />
                </div>
                <button type="button"
                  onClick={() => { if (form.name && form.email) setStep(2) }}
                  disabled={!form.name || !form.email}
                  className="btn-primary w-fit disabled:opacity-40">
                  Next step →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-8">
                <div>
                  <label className="label block mb-4">Your Status *</label>
                  <div className="flex flex-wrap gap-3">
                    {['I have a project', 'I am a recruiter', 'Just exploring'].map((r) => (
                      <button key={r} type="button" onClick={() => setRole(r)}
                        className={`label px-5 py-3 rounded-full border transition-all ${
                          role === r ? 'border-orange bg-orange text-canvas' : 'border-white/20 hover:border-orange hover:text-heading'
                        }`}>{r}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label block mb-3">Tell me more *</label>
                  <textarea name="message" rows={5} required
                    placeholder="Project brief, budget range, timeline..."
                    className={`${inputClass} resize-none`} />
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="btn-ghost">
                    ← Back
                  </button>
                  <button type="submit" disabled={status === 'sending' || status === 'sent'}
                    className="btn-primary disabled:opacity-40">
                    {status === 'idle'    && 'Submit →'}
                    {status === 'sending' && 'Sending...'}
                    {status === 'sent'    && 'Message Sent ✓'}
                    {status === 'error'   && 'Error — Try Again'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
