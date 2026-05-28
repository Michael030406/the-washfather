const services = [
  {
    title: 'RESIDENTIAL\nRESTORATION',
    description: 'Driveways, siding, walkways, fences, and wooden patios. We strip years of grime, mold, and staining in a single visit.',
    image: '/brand/patio%202.jpeg',
  },
  {
    title: 'PROFESSIONAL\nEQUIPMENT',
    description: 'Hot water pressure units, commercial-grade surface cleaners, and professional detergents. Every job done with the right tools — no shortcuts, no half measures.',
    image: '/brand/IMG_3671.jpeg',
  },
  {
    title: 'SIDINGS &\nWINDOWS',
    description: 'Wood, composite, concrete, and pavers restored to their original condition. Safe, detailed, guaranteed.',
    image: '/brand/IMG_3672.jpeg',
    imgPosition: 'center 40%',
  },
  {
    title: 'OUTDOOR\nFURNITURE CLEANING',
    description: 'Chairs, tables, umbrellas, and cushion frames. We remove seasons of mildew, staining, and buildup so your outdoor space looks showroom-ready.',
    image: '/brand/IMG_3673.jpeg',
  },
]

export default function Features() {
  return (
    <section
      id="services"
      className="section-padding relative bg-[var(--color-bg-primary)] flex justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl w-full px-6 flex flex-col gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center text-center reveal">
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            Tactical Operations
          </span>
          <h2 className="font-bebas text-[var(--color-text-primary)] mb-6" style={{fontSize: 'clamp(3rem, 7vw, 6rem)'}}>
            PRECISION SERVICES
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            Professional-grade power washing engineered for high-end residential and commercial properties. We don't just clean — we restore.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl overflow-hidden hover:border-[var(--color-accent)]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title.replace('\n', ' ')}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: service.imgPosition ?? 'center' }}
                />
              </div>
              {/* Card body */}
              <div className="p-5 border-t-2 border-transparent group-hover:border-[var(--color-accent)] transition-colors duration-300">
                <h3 className="font-bebas text-xl text-[var(--color-text-primary)] leading-tight mb-2 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
