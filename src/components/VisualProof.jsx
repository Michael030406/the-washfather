import { useState, useRef, useCallback, useEffect } from 'react'

export default function VisualProof() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  // Desktop: mouse events
  const onMouseDown = (e) => { dragging.current = true; updatePosition(e.clientX) }
  const onMouseMove = (e) => { if (!dragging.current) return; updatePosition(e.clientX) }
  const onMouseUp = () => { dragging.current = false }

  // Mobile: non-passive touch events attached directly to the DOM node so
  // e.preventDefault() can stop page scroll while the user drags the slider.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onTouchStart = (e) => { dragging.current = true; updatePosition(e.touches[0].clientX) }
    const onTouchMove = (e) => {
      if (!dragging.current) return
      e.preventDefault()
      updatePosition(e.touches[0].clientX)
    }
    const onTouchEnd = () => { dragging.current = false }
    el.addEventListener('touchstart', onTouchStart, { passive: false })
    el.addEventListener('touchmove',  onTouchMove,  { passive: false })
    el.addEventListener('touchend',   onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove',  onTouchMove)
      el.removeEventListener('touchend',   onTouchEnd)
    }
  }, [updatePosition])

  return (
    <section
      id="proof"
      className="section-padding relative bg-[var(--color-bg-primary)] flex justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl w-full px-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            Industrial Power. Luxury Finish.
          </span>
          <h2 className="font-bebas text-[var(--color-text-primary)]" style={{fontSize: 'clamp(3rem, 7vw, 6rem)'}}>
            VISUAL PROOF
          </h2>
        </div>

        {/* Slider container */}
        <div className="flex justify-center reveal">
          <div
            ref={containerRef}
            className="relative w-full rounded-2xl overflow-hidden border border-[var(--color-border)] select-none cursor-ew-resize"
            style={{maxWidth: '900px', aspectRatio: '16/9'}}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {/* AFTER image (full width background) */}
            <img
              src="/brand/after.jpg"
              alt="After power washing"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            {/* AFTER label — clipped to right side so it hides when slider covers it */}
            <div
              className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-4 right-4 z-10 font-bebas text-sm tracking-widest bg-[var(--color-bg-primary)]/80 text-[var(--color-text-primary)] px-3 py-1 rounded">
                AFTER
              </div>
            </div>

            {/* BEFORE image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{width: `${position}%`}}
            >
              <img
                src="/brand/before.jpg"
                alt="Before power washing"
                className="absolute inset-0 h-full object-cover"
                style={{width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none'}}
                draggable="false"
              />
              {/* BEFORE label */}
              <div className="absolute top-4 left-4 z-10 font-bebas text-sm tracking-widest bg-[var(--color-accent)]/90 text-white px-3 py-1 rounded">
                BEFORE
              </div>
            </div>

            {/* Drag handle */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{left: `${position}%`, transform: 'translateX(-50%)'}}
            >
              {/* Line */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-[var(--color-accent)]" />
              {/* Handle circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-accent)] border-2 border-white flex items-center justify-center shadow-lg shadow-black/40">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-xs font-bold tracking-[0.3em] text-[var(--color-text-muted)] uppercase mt-6">
          Drag Slider to Compare
        </p>
      </div>
    </section>
  )
}
