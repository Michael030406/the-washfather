const testimonials = [
  {
    id: 1,
    name: 'MIKE T.',
    location: 'MASSAPEQUA, NY',
    content:
      "The WashFather turned my oil-stained driveway into something I'm actually proud of. Done in under 3 hours, no mess, before-and-after photos sent to my phone.",
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'JENNIFER R.',
    location: 'BABYLON, NY',
    content:
      "Years of mold and algae on our siding were gone after one visit. The soft wash didn't damage a single plant in my garden. These guys know what they're doing.",
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'TONY C.',
    location: 'LEVITTOWN, NY',
    content:
      "Showed up on time, got to work, and left the property spotless. No upselling, no nonsense. I've already booked them again for the spring.",
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 4,
    name: 'DONNA M.',
    location: 'HUNTINGTON, NY',
    content:
      'My deck looked brand new after they finished. I had quotes from two other companies — The WashFather was the most professional and the most affordable.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 5,
    name: 'CHRIS A.',
    location: 'HICKSVILLE, NY',
    content:
      'We hired them for our storefront and parking lot. Fast turnaround, great communication. First impressions matter for a business and they delivered.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding relative bg-[var(--color-bg-primary)] flex justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl w-full px-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            Client Intelligence
          </span>
          <h2 className="font-bebas text-[var(--color-text-primary)] mb-6" style={{fontSize: 'clamp(3rem, 7vw, 6rem)'}}>
            FIELD REPORTS
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            Real homeowners and businesses across Long Island. No scripts, no incentives — just honest feedback.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-6 flex flex-col hover:border-[var(--color-accent)]/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-6">
                "{t.content}"
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-[var(--color-border)] mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full border border-[var(--color-border)] object-cover"
                />
                <div>
                  <p className="font-bebas text-base text-[var(--color-text-primary)] tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] tracking-widest">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
