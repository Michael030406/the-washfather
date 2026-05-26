export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
      title: 'Residential Cleaning',
      desc: 'Driveways, patios, siding, decks, and fences — we bring every surface back to life with zero damage to your property.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      title: 'Commercial Properties',
      desc: 'Storefronts, parking lots, loading docks, and building exteriors. First impressions matter — let us handle yours.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: 'Fully Insured',
      desc: 'Licensed, bonded, and insured for your complete peace of mind. We protect your property like it\'s our own.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: 'Fast Turnaround',
      desc: 'Most jobs completed in a single day. We show up on time, work efficiently, and leave your property spotless.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      ),
      title: 'Eco-Friendly Solutions',
      desc: 'Our biodegradable cleaning agents are tough on grime but gentle on your landscaping, pets, and the environment.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Transparent Pricing',
      desc: 'No hidden fees, no surprise charges. Get a detailed quote upfront so you know exactly what you\'re paying for.',
    },
  ]

  return (
    <section id="features" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-accent)] rounded-full opacity-[0.02] blur-[150px]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Everything Your Property{' '}
            <span className="gradient-text">Needs</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            From routine maintenance to deep exterior restoration, we have the
            equipment, expertise, and attention to detail to get the job done right.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children reveal">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card p-8 reveal">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-glow)] flex items-center justify-center text-[var(--color-accent)] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
