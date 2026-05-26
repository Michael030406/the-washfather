export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Book Your Free Quote',
      desc: 'Fill out our quick form or give us a call. We\'ll schedule a time to assess your property and provide a no-obligation estimate.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'We Clean Your Property',
      desc: 'Our trained crew arrives on schedule with professional-grade equipment. We handle everything while you sit back and relax.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Enjoy the Results',
      desc: 'Walk around your transformed property with pride. We guarantee your satisfaction — if you\'re not thrilled, we\'ll make it right.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="section-padding relative bg-[var(--color-bg-secondary)]">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-4 block">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Three Steps to a{' '}
            <span className="gradient-text">Cleaner Property</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            We've made it effortless. No complicated scheduling, no confusing quotes.
            Just a simple path to a property that looks brand new.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-[var(--color-accent)]/30 via-[var(--color-accent)]/10 to-[var(--color-accent)]/30" />
          </div>

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              {/* Number circle */}
              <div className="relative inline-flex mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] relative z-10">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-xs font-bold text-[#0a0a0f] z-20">
                  {step.number}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
