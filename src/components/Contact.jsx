import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwQFLrQG9-4l6_V6f_k13Ia31yYLj3ZGu3J7u00VZ1GLm77036wYr0Zt6jIyKg8zYM/exec'

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      })
    } catch (err) {
      console.error('Form error:', err)
    }
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="section-padding relative bg-[var(--color-bg-primary)] flex justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full px-6 relative">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <h2 className="font-bebas leading-none" style={{fontSize: 'clamp(3.5rem, 8vw, 7rem)'}}>
            <span className="text-[var(--color-text-primary)]">COMMAND YOUR</span>
            <br />
            <span className="gradient-text">CLEAN</span>
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] mt-4 tracking-widest uppercase text-sm font-bold">
            Submit your details for a precision quote within 24 hours. No obligation. Only results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 reveal" style={{ marginTop: '4rem' }}>
          {/* Left: contact info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p className="font-bebas text-lg text-[var(--color-text-primary)] tracking-wider mb-1">DIRECT LINE</p>
                <a href="tel:5163239495" className="text-[var(--color-accent)] font-bold text-xl hover:underline">
                  516-323-9495
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p className="font-bebas text-lg text-[var(--color-text-primary)] tracking-wider mb-1">SERVICE AREA</p>
                <p className="text-[var(--color-text-secondary)]">Nassau County &amp; Limited Parts of Suffolk, NY</p>
              </div>
            </div>

            <div className="h-px w-full bg-[var(--color-border)]" />

            {/* Trust items */}
            <div className="flex flex-col gap-3">
              {['Licensed & Fully Insured', 'Free Quote — No Obligation', 'Response Within 24 Hours'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="text-sm font-bold tracking-wider text-[var(--color-text-secondary)] uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-bebas text-3xl text-[var(--color-text-primary)] tracking-wide mb-2">MISSION RECEIVED</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  We'll reach out within 24 hours with your free quote.
                </p>
              </div>
            ) : (
              <form
                name="quote-request"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="form-name" value="quote-request" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(631) 000-0000"
                      className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-2">Property Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, Massapequa, NY"
                    className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-2">Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)]/50 transition-colors text-sm"
                  >
                    <option value="">Select a service...</option>
                    <option value="residential">Residential Restoration</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deck">Deck &amp; Patio</option>
                    <option value="outdoor-furniture">Outdoor Furniture Cleaning</option>
                    <option value="other">Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the job, surface condition, or any special requests..."
                    className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button type="submit" className="cta-button w-full font-bebas tracking-widest !text-base !py-4 mt-2">
                  REQUEST QUOTE
                </button>

                <p className="text-center text-xs text-[var(--color-text-muted)] tracking-wider">
                  Response within 24 hours · Free quote · No obligation
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
