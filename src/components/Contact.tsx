'use client'
import { useState } from 'react'

const mono = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your actual form endpoint (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#f8f8f7',
    border: '1px solid var(--c-border)',
    borderRadius: '6px',
    padding: '0.85rem 1rem',
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
    color: 'var(--c-ink)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <section
      id="contact"
      style={{
        background: '#ffffff',
        color: 'var(--c-ink)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
        borderTop: '1px solid var(--c-divider)',
      }}
    >
      {/* Section label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <span style={{ ...mono, fontSize: '0.55rem', color: 'var(--c-ink-faint)' }}>03 — Contact</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--c-divider)' }} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 8vw, 8rem)',
          alignItems: 'start',
        }}
      >
        {/* Left — heading + info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 7vw, 8rem)',
              lineHeight: 0.88,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: 'var(--c-ink)',
            }}
          >
            Let&apos;s
            <br />
            Work
            <br />
            Together
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.88rem, 1.1vw, 1rem)',
              lineHeight: 1.75,
              color: 'var(--c-ink-mid)',
              maxWidth: '36ch',
            }}
          >
            Available for freelance projects and full-time roles. Based in Berlin — open to remote worldwide.
          </p>

          {/* Contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            {[
              { label: 'Email', value: 'junaidreal4@gmail.com', href: 'mailto:junaidreal4@gmail.com' },
              { label: 'GitHub', value: 'github.com/junaidreal4-hub', href: 'https://github.com/junaidreal4-hub' },
              { label: 'Location', value: 'Berlin, Germany', href: null },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ ...mono, fontSize: '0.46rem', color: 'var(--c-ink-faint)' }}>{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                      color: 'var(--c-ink)',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--c-border)',
                      paddingBottom: '1px',
                      display: 'inline',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.85rem, 1vw, 0.95rem)', color: 'var(--c-ink-mid)' }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {status === 'sent' ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                padding: '4rem 2rem',
                border: '1px solid var(--c-border)',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '2rem' }}>✓</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem' }}>Message sent!</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--c-ink-mid)' }}>
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ ...mono, fontSize: '0.46rem', color: 'var(--c-ink-faint)' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ ...mono, fontSize: '0.46rem', color: 'var(--c-ink-faint)' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ ...mono, fontSize: '0.46rem', color: 'var(--c-ink-faint)' }}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.65 }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  ...mono,
                  fontSize: '0.52rem',
                  background: 'var(--c-ink)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0.9rem 2rem',
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  opacity: status === 'sending' ? 0.6 : 1,
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.2s',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message ↗'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer strip */}
      <div
        style={{
          marginTop: 'clamp(4rem, 8vw, 7rem)',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--c-divider)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ ...mono, fontSize: '0.46rem', color: 'var(--c-ink-faint)' }}>
          © {new Date().getFullYear()} Md Junaid Khan
        </span>
        <span style={{ ...mono, fontSize: '0.46rem', color: 'var(--c-ink-faint)' }}>
          Berlin, Germany
        </span>
      </div>
    </section>
  )
}
