export default function SocialProof() {
  const logos = [
    { name: 'HomeAdvisor', icon: '🏠' },
    { name: 'Angi', icon: '⭐' },
    { name: 'Google', icon: '🔍' },
    { name: 'BBB', icon: '🛡️' },
    { name: 'Nextdoor', icon: '📍' },
    { name: 'Yelp', icon: '💬' },
  ]

  return (
    <section className="relative py-16 border-y border-[var(--color-border)] flex justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <p className="text-center text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-[0.2em] mb-10">
          Trusted by homeowners &amp; businesses across the region
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-300 group cursor-default"
            >
              <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">{logo.icon}</span>
              <span className="text-lg font-semibold tracking-tight opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
