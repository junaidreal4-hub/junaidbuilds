'use client'
import { useState } from 'react'

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
    <section id="contact" className="section-pad bg-gray-900 text-white">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="font-mono text-sm text-sky-400 font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s build<br />something great.</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Have a project in mind? Tell me what you need and I&apos;ll get back to you within 24 hours with a free quote.
            </p>

            <div className="space-y-5">
              <a href="mailto:junaidreal4@gmail.com"
                className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-lg">✉️</div>
                <div>
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Email</div>
                  <div className="text-white font-medium group-hover:text-sky-400 transition-colors">junaidreal4@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/4915774873835" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-lg">📱</div>
                <div>
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">WhatsApp</div>
                  <div className="text-white font-medium group-hover:text-sky-400 transition-colors">+49 157 748 73835</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/junaid412" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-lg">💼</div>
                <div>
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">LinkedIn</div>
                  <div className="text-white font-medium group-hover:text-sky-400 transition-colors">linkedin.com/in/junaid412</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Name</label>
                <input name="name" required placeholder="Your name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors text-sm" />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Email</label>
                <input name="email" type="email" required placeholder="your@email.com"
                  className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Service</label>
              <select name="service"
                className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors text-sm">
                <option>Landing Page (€800–€1,500)</option>
                <option>Business Website (€1,200–€2,500)</option>
                <option>Portfolio Site (€1,500–€3,000)</option>
                <option>E-Commerce (€3,000–€6,000)</option>
                <option>Full-Stack App (€3,000–€6,000)</option>
                <option>Maintenance / Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Tell me about your project</label>
              <textarea name="message" rows={4} required placeholder="What do you need? Any deadline or budget in mind?"
                className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors text-sm resize-none" />
            </div>

            <button type="submit" disabled={status === 'sending' || status === 'sent'}
              className="w-full bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors">
              {status === 'idle'    && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent'    && '✓ Message Sent!'}
              {status === 'error'   && 'Failed — Try Again'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
