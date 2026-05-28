const steps = [
  {
    number: '01',
    title: 'BOOK ONLINE',
    description: 'Fill out the form. We assess the mission parameters and respond within 24 hours with a free, no-obligation quote.',
  },
  {
    number: '02',
    title: 'THE OPERATION',
    description: 'We arrive on schedule with professional-grade equipment. No excuses, no delays, no shortcuts.',
  },
  {
    number: '03',
    title: 'RESTORED ASSETS',
    description: "Your property leaves spotless with before-and-after documentation. We don't stop until the job is done right.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="section-padding relative bg-[var(--color-bg-secondary)] flex justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl w-full" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        {/* Heading */}
        <div className="flex flex-col items-center text-center reveal" style={{ marginBottom: '5rem' }}>
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase" style={{ marginBottom: '1rem' }}>
            Elite Execution. Done First.
          </span>
          <h2 className="font-bebas text-[var(--color-text-primary)]" style={{fontSize: 'clamp(3rem, 7vw, 6rem)'}}>
            COMMAND PROCESS
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 reveal">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Step number */}
              <div className="font-bebas text-[var(--color-accent)] leading-none" style={{fontSize: 'clamp(4rem, 8vw, 7rem)', marginBottom: '1rem'}}>
                {step.number}
              </div>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-[var(--color-accent)]" style={{ marginBottom: '1.25rem' }} />

              {/* Title */}
              <h3 className="font-bebas text-2xl md:text-3xl text-[var(--color-text-primary)] tracking-wide" style={{ marginBottom: '0.75rem' }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
