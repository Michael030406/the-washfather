export default function Pricing() {
  const plans = [
    {
      name: 'Essential',
      price: '199',
      period: 'starting at',
      desc: 'Perfect for a single-area refresh like a driveway or patio.',
      features: [
        'Single surface cleaning',
        'Up to 500 sq ft',
        'Eco-friendly detergent',
        'Same-week scheduling',
        'Before & after photos',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '449',
      period: 'starting at',
      desc: 'Our most popular package for full-home exterior cleaning.',
      features: [
        'Full exterior wash',
        'Driveway + walkways',
        'Deck or patio included',
        'Gutter brightening',
        'Soft wash siding',
        'Satisfaction guarantee',
      ],
      popular: true,
    },
    {
      name: 'Commercial',
      price: 'Custom',
      period: 'quote',
      desc: 'Tailored solutions for storefronts, complexes, and fleets.',
      features: [
        'Custom scope & schedule',
        'Multi-building support',
        'Parking lot cleaning',
        'Graffiti removal',
        'Recurring service plans',
        'Dedicated account manager',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="section-padding relative flex justify-center">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full opacity-[0.02] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative w-full">
        <div className="text-center mb-16 reveal flex flex-col items-center">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Simple, Honest{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            No hidden fees. No bait-and-switch. Just straightforward pricing
            for exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal relative rounded-2xl border p-8 lg:p-10 transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[var(--color-accent)]/[0.06] to-[var(--color-bg-card)] border-[var(--color-accent)]/30 scale-[1.02] shadow-xl shadow-[var(--color-accent-glow)]'
                  : 'bg-[var(--color-bg-card)] border-[var(--color-border)] hover:border-[var(--color-border-light)]'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="badge-shimmer text-xs font-bold text-[#0a0a0f] px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  {plan.price !== 'Custom' && (
                    <span className="text-sm text-[var(--color-text-muted)]">$</span>
                  )}
                  <span className="text-5xl font-black text-[var(--color-text-primary)]">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-sm text-[var(--color-text-muted)] ml-2">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-sm text-[var(--color-text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[var(--color-accent)] text-[#0a0a0f] hover:shadow-lg hover:shadow-[var(--color-accent-glow-strong)] hover:-translate-y-0.5'
                    : 'border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
              >
                {plan.price === 'Custom' ? 'Get a Custom Quote' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
