const photos = [
  '/brand/IMG_3670.jpeg',
  '/brand/IMG_3671.jpeg',
  '/brand/IMG_3672.jpeg',
  '/brand/IMG_3673.jpeg',
  '/brand/IMG_3674.jpeg',
  '/brand/IMG_3675.jpeg',
  '/brand/IMG_3676.jpeg',
  '/brand/IMG_3677.jpeg',
]

export default function ProjectIntel() {
  return (
    <section
      id="gallery"
      className="section-padding relative bg-[var(--color-bg-secondary)] flex justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl w-full px-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            Recent Operations
          </span>
          <h2 className="font-bebas text-[var(--color-text-primary)]" style={{fontSize: 'clamp(3rem, 7vw, 6rem)'}}>
            PROJECT INTEL
          </h2>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          {photos.map((src, index) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] h-64 hover:border-[var(--color-accent)]/40 transition-colors duration-300"
            >
              <img
                src={src}
                alt={`WashFather project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-bg-primary)]/0 group-hover:bg-[var(--color-bg-primary)]/30 transition-all duration-300" />
            </div>
          ))}

          {/* CTA cell */}
          <div className="relative overflow-hidden rounded-xl border border-[var(--color-accent)]/30 h-64 bg-[var(--color-bg-card)] flex flex-col items-center justify-center text-center p-8 hover:border-[var(--color-accent)]/60 transition-colors duration-300">
            <div className="absolute inset-0 bg-[var(--color-accent)]/5 pointer-events-none" />
            <p className="font-bebas text-2xl md:text-3xl text-[var(--color-text-primary)] leading-tight mb-6 relative z-10">
              YOUR PROPERTY NEXT
            </p>
            <a
              href="#contact"
              className="cta-button !py-3 !px-7 font-bebas tracking-widest !text-sm relative z-10"
            >
              BECOME ELITE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
