const steps = [
  {
    number: '01',
    title: 'BOOK ONLINE',
    description: 'Fill out the form. We assess the mission parameters and respond within 24 hours with a free, no-obligation quote.',
  },
  {
    number: '02',
    title: 'ON-SITE ASSAULT',
    description: 'Our crew arrives on schedule with professional-grade equipment. No excuses, no delays, no shortcuts.',
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

      <div className="max-w-7xl w-full px-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-20 reveal">
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            Elite Execution. Done First.
          </span>
          <h2 className="font-bebas text-[var(--color-text-primary)]" style={{fontSize: 'clamp(3rem, 7vw, 6rem)'}}>
            COMMAND PROCESS
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 reveal">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              {/* Connector line (desktop only, not on last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] right-[-50%] h-px bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent" />
              )}

              {/* Step number */}
              <div className="font-bebas text-[var(--color-accent)] mb-4 leading-none" style={{fontSize: 'clamp(4rem, 8vw, 7rem)'}}>
                {step.number}
              </div>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-[var(--color-accent)] mb-5" />

              {/* Title */}
              <h3 className="font-bebas text-2xl md:text-3xl text-[var(--color-text-primary)] mb-3 tracking-wide">
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
