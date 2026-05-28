import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { id: 1, author: 'James Hanlon',          testimonial: 'Cleaned up nice. Great job. Would recommend.',                                    avatar: '/brand/james.jpeg' },
  { id: 2, author: 'Maryann Augello Bruno',  testimonial: 'Awesome Job, quick and thorough.',                                                avatar: '/brand/maryann.jpeg' },
  { id: 3, author: 'Mike Hanlon',            testimonial: 'Great service and fair prices, cleaned the stains on my patio.',                  avatar: '/brand/mike.jpeg' },
]

function TestimonialCard({ handleShuffle, testimonial, position, author, avatar }) {
  const dragRef = useRef(0)
  const isFront = position === 'front'

  return (
    <motion.div
      style={{
        zIndex: position === 'front' ? 2 : position === 'middle' ? 1 : 0,
        width: '320px',
        height: '420px',
        padding: '2rem',
        gap: '1.25rem',
        boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
      }}
      animate={{
        rotate: position === 'front' ? '-6deg' : position === 'middle' ? '0deg' : '6deg',
        x: position === 'front' ? '0%' : position === 'middle' ? '33%' : '66%',
      }}
      drag
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e) => { dragRef.current = e.clientX }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) handleShuffle()
        dragRef.current = 0
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 flex flex-col items-center justify-center select-none rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] backdrop-blur-md ${
        isFront ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt={author}
        className="rounded-full border-2 border-[var(--color-border)] object-cover pointer-events-none"
        style={{ width: '72px', height: '72px', flexShrink: 0 }}
      />

      {/* Stars */}
      <div className="flex" style={{ gap: '4px' }}>
        {Array(5).fill(0).map((_, i) => (
          <svg key={i} style={{ width: '15px', height: '15px', fill: '#eab308' }} viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <span
        className="text-center italic text-[var(--color-text-secondary)]"
        style={{ fontSize: '1rem', lineHeight: '1.65' }}
      >
        "{testimonial}"
      </span>

      {/* Author */}
      <span
        className="font-bebas text-[var(--color-accent)]"
        style={{ fontSize: '1rem', letterSpacing: '0.12em' }}
      >
        {author}
      </span>
    </motion.div>
  )
}

export default function Testimonials() {
  const [positions, setPositions] = useState(['front', 'middle', 'back'])

  const handleShuffle = () => {
    setPositions((prev) => {
      const next = [...prev]
      next.unshift(next.pop())
      return next
    })
  }

  return (
    <section
      id="testimonials"
      className="section-padding relative bg-[var(--color-bg-primary)] flex justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl w-full" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

        {/* Heading */}
        <div className="flex flex-col items-center text-center reveal" style={{ marginBottom: '4rem' }}>
          <span
            className="font-bold uppercase text-[var(--color-accent)]"
            style={{ fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
          >
            Client Intelligence
          </span>
          <h2
            className="font-bebas text-[var(--color-text-primary)]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '1.5rem' }}
          >
            FIELD REPORTS
          </h2>
          <p
            className="text-lg text-[var(--color-text-secondary)] max-w-2xl"
            style={{ lineHeight: '1.75' }}
          >
            Real homeowners and businesses across Long Island. No scripts, no incentives — just honest feedback.
          </p>
        </div>

        {/* Shuffle stack */}
        <div className="flex flex-col items-center reveal">
          <div
            className="relative"
            style={{ height: '420px', width: '320px', marginLeft: '-100px' }}
          >
            {testimonials.map((t, index) => (
              <TestimonialCard
                key={t.id}
                {...t}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
          <p
            className="text-[var(--color-text-muted)] tracking-widest"
            style={{ fontSize: '0.7rem', marginTop: '2rem' }}
          >
            ← drag to shuffle
          </p>
        </div>

      </div>
    </section>
  )
}
