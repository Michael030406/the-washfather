export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full opacity-[0.03] blur-[150px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-sm font-medium text-[var(--color-accent)]">
                Now Booking Summer 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              We Make Properties{' '}
              <span className="gradient-text">Shine Again</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl mb-10 leading-relaxed">
              Professional residential and commercial power washing that transforms
              tired surfaces into like-new condition. Driveways, siding, decks,
              roofs — we handle it all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="cta-button animate-pulse-glow text-lg !px-8 !py-4">
                Book a Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 font-medium text-lg"
              >
                See How It Works
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-10">
              {[
                { number: '500+', label: 'Projects Done' },
                { number: '4.9★', label: 'Google Rating' },
                { number: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-[var(--color-accent)]">{stat.number}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in lg:block" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl shadow-[var(--color-accent-glow)]">
              <img
                src="/hero.png"
                alt="Professional power washing in action - dramatic before and after on a driveway"
                className="w-full h-auto object-cover animate-float"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-40" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card px-5 py-3 flex items-center gap-3 !rounded-xl">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--color-text-primary)]">Top Rated</div>
                <div className="text-xs text-[var(--color-text-muted)]">150+ Five-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
