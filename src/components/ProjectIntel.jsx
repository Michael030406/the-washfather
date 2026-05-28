import InteractiveSelector from './ui/interactive-selector';

export default function ProjectIntel() {
  return (
    <section
      id="gallery"
      className="section-padding relative bg-[var(--color-bg-secondary)] flex justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl w-full px-6">
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            Recent Operations
          </span>
          <h2 className="font-bebas text-[var(--color-text-primary)]" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            PROJECT INTEL
          </h2>
        </div>

        <div className="reveal">
          <InteractiveSelector />
        </div>
      </div>
    </section>
  );
}
