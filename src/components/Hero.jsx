export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0">
        {/* Full-bleed brand photo */}
        <img
          src="/brand/hero-bg.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Bottom-to-top gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        {/* Red accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full opacity-[0.06] blur-[160px] pointer-events-none" />
        {/* White bokeh blobs */}
        <div className="absolute top-[12%] right-[8%] w-[350px] h-[350px] bg-white rounded-full opacity-[0.025] blur-[120px] pointer-events-none" />
        <div className="absolute top-[50%] left-[4%] w-[280px] h-[280px] bg-white rounded-full opacity-[0.02] blur-[100px] pointer-events-none" />
      </div>

      <div
        className="relative w-full px-6 py-32 flex flex-col items-center text-center"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Logo — dominant centrepiece */}
        <img
          src="/brand/wash_father_transparent.png"
          alt="The WashFather"
          className="w-auto object-contain mb-14"
          style={{
            height: 'clamp(180px, 28vw, 320px)',
            maxWidth: '480px',
            filter: 'drop-shadow(0 0 50px rgba(220,38,38,0.35))',
          }}
        />

        {/* Headline */}
        <div className="mb-6">
          <h1 className="font-bebas text-white leading-none" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            POWER WASHING
          </h1>
          <h1 className="font-bebas gradient-text leading-none" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            DONE RIGHT.
          </h1>
        </div>

        {/* Bottom stack — gap-based spacing (mb-* ignored by CSS reset) */}
        <div className="flex flex-col items-center gap-12">
          {/* Sub-label */}
          <p className="text-base md:text-lg text-[var(--color-text-secondary)]">
            Long Island's trusted exterior cleaning experts.
          </p>

          {/* Booking badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/20">
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase">
              Now Booking Long Island — Summer 2026
            </span>
          </div>

          {/* CTAs — always side by side */}
          <div className="flex flex-row gap-4">
            <a
              href="#contact"
              className="cta-button font-bebas tracking-widest !text-sm !px-8 !py-3"
            >
              GET A FREE QUOTE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 font-bebas tracking-widest text-sm"
            >
              SEE OUR WORK
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Licensed &amp; Fully Insured
            </div>
            <span className="hidden md:block mx-2 text-[var(--color-border)]">·</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Suffolk &amp; Nassau County
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
