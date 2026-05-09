'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [role,   setRole]   = useState<string | null>(null)
  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      const lines = headingRef.current?.querySelectorAll('.reveal-line')
      if (!lines) return
      gsap.from(lines, {
        y: '110%', opacity: 0, duration: 1.1,
        stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      })
    }
    init()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    data.set('name', form.name)
    data.set('email', form.email)
    data.set('message', form.message)
    if (role) data.set('status', role)
    try {
      const res = await fetch('https://formspree.io/f/xaqlklqy', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setRole(null)
      } else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputClass = 'w-full bg-transparent border-b border-white/10 text-white placeholder-white/20 pb-4 font-mono text-sm focus:outline-none focus:border-orange transition-colors duration-200'

  return (
    <section id="contact" className="relative bg-[#080808]">

      {/* GIANT CTA HEADING */}
      <div className="container-width pt-32 pb-20 border-b border-white/[0.06]" ref={headingRef}>
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-16">/ Get in Touch</p>

        <div className="mb-12">
          <div className="overflow-hidden mb-2">
            <p className="reveal-line font-sans font-black uppercase text-white leading-none tracking-tighter"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 7.5rem)' }}>
              Ready to build
            </p>
          </div>
          <div className="overflow-hidden mb-2">
            <p className="reveal-line font-sans font-black uppercase leading-none tracking-tighter text-orange italic"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 7.5rem)' }}>
              something that
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="reveal-line font-sans font-black uppercase text-white leading-none tracking-tighter"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 7.5rem)' }}>
              actually works?
            </p>
          </div>
        </div>

        <p className="font-mono text-sm text-white/30 max-w-lg leading-relaxed">
          Clear design, solid engineering, focused strategy — as one system. I respond within 24 hours.
        </p>

        <div className="mt-12">
          <a
            href="mailto:junaidreal4@gmail.com"
            className="group inline-flex items-center gap-4 border border-white/20 rounded-full px-10 py-5 hover:border-orange transition-all duration-300"
          >
            <span className="font-sans font-black uppercase text-white tracking-tight text-2xl md:text-3xl group-hover:text-orange transition-colors duration-300">
              Let’s Talk
            </span>
            <span className="font-mono text-white/30 text-2xl group-hover:text-orange group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
        </div>
      </div>

      {/* CONTACT GRID */}
      <div className="container-width py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left — contact links */}
          <div className="flex flex-col">
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-10">Direct Links</p>
            {[
              { label: 'Email',    value: 'junaidreal4@gmail.com',    href: 'mailto:junaidreal4@gmail.com'       },
              { label: 'WhatsApp', value: '+49 157 748 73835',         href: 'https://wa.me/4915774873835'        },
              { label: 'LinkedIn', value: 'linkedin.com/in/junaid412', href: 'https://linkedin.com/in/junaid412'  },
              { label: 'GitHub',   value: 'junaidreal4-hub',           href: 'https://github.com/junaidreal4-hub' },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-between py-6 border-b border-white/[0.06] group"
              >
                <div>
                  <div className="font-mono text-xs text-white/30 uppercase tracking-widest mb-1">{c.label}</div>
                  <div className="font-mono text-sm text-white/60 group-hover:text-white transition-colors duration-200">{c.value}</div>
                </div>
                <span className="font-mono text-white/20 group-hover:text-orange group-hover:translate-x-1 transition-all duration-200">↗</span>
              </a>
            ))}
            <div className="mt-10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
                </span>
                <span className="font-mono text-xs text-white/30 uppercase tracking-widest">Available for new projects</span>
              </div>
              <p className="font-mono text-xs text-white/20">Berlin, Germany · Remote-ready · 1–3 week delivery</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-10">Or Send a Message</p>
            {status === 'sent' ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <span className="font-sans font-black uppercase text-orange text-4xl">Message Sent ✔</span>
                <p className="font-mono text-sm text-white/30">I’ll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn-ghost mt-4">Send another →</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div>
                  <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-4">Your Name *</label>
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required placeholder="Junaid Khan" className={inputClass} />
                </div>
                <div>
                  <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-4">Email Address *</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required placeholder="hello@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-4">You are *</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {['I have a project', 'I am a recruiter', 'Just exploring'].map((r) => (
                      <button key={r} type="button" onClick={() => setRole(r)}
                        className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 ${
                          role === r
                            ? 'border-orange bg-orange text-black'
                            : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'
                        }`}>{r}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-white/30 uppercase tracking-widest block mb-4">Message *</label>
                  <textarea name="message" rows={4} required
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Project brief, budget range, timeline..."
                    className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-fit disabled:opacity-40">
                  {status === 'idle'    && 'Send Message →'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'error'   && 'Error — Try Again'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
